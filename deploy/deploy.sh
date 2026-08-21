#!/usr/bin/env bash
#
# Expertstack — server deployment.
# Run on 122.184.78.203 as root (or with sudo).
#
#   bash deploy.sh preflight   # inspect only; changes nothing
#   bash deploy.sh app         # node, pm2, build, start on 127.0.0.1:3000
#   bash deploy.sh nginx       # firewall + nginx (HTTP), verify proxy works
#   bash deploy.sh ssl         # Let's Encrypt cert + HTTPS + redirects
#   bash deploy.sh verify      # end-to-end checks
#
# Deliberately staged rather than one shot: DNS must be pointing here before
# `ssl` can succeed, and you should read `preflight` before anything else.

set -euo pipefail

DOMAIN="expertstack.co.in"
WWW="www.${DOMAIN}"
APP_DIR="/var/www/expertstack"
APP_PORT="3000"
REPO="git@github.com:ankurgautam90/expertstack.co.in.git"   # or the HTTPS URL
EMAIL="shubham.kumar@nxtsight.com"                          # Let's Encrypt notices
SERVER_IP="122.184.78.203"

say()  { printf "\n\033[1;34m==> %s\033[0m\n" "$*"; }
ok()   { printf "  \033[0;32m✓\033[0m %s\n" "$*"; }
warn() { printf "  \033[0;33m!\033[0m %s\n" "$*"; }
die()  { printf "  \033[0;31m✗ %s\033[0m\n" "$*" >&2; exit 1; }

# --------------------------------------------------------------- preflight
preflight() {
  say "OS"
  . /etc/os-release && ok "$PRETTY_NAME"

  say "Existing web servers / proxies (STEP 16 — do not overwrite blindly)"
  for svc in nginx apache2 httpd caddy; do
    if systemctl list-unit-files 2>/dev/null | grep -q "^${svc}.service"; then
      warn "$svc is installed — state: $(systemctl is-active $svc 2>/dev/null || echo inactive)"
    fi
  done
  command -v docker >/dev/null && warn "docker present: $(docker ps -q 2>/dev/null | wc -l) container(s) running" || ok "no docker"

  say "Ports 80 / 443 / ${APP_PORT}"
  ss -lntp 2>/dev/null | grep -E ":(80|443|${APP_PORT})\s" || ok "all three are free"

  say "Existing Nginx sites (will not be touched)"
  ls /etc/nginx/sites-enabled/ 2>/dev/null | sed 's/^/    /' || ok "none"

  say "Existing certificates"
  [ -d /etc/letsencrypt/live ] && ls /etc/letsencrypt/live/ | sed 's/^/    /' || ok "none"

  say "Node.js"
  command -v node >/dev/null && ok "node $(node -v)" || warn "node not installed"

  say "DNS — must resolve to ${SERVER_IP} before running 'ssl'"
  for h in "$DOMAIN" "$WWW"; do
    got=$(dig +short A "$h" @1.1.1.1 | tail -1)
    if [ "$got" = "$SERVER_IP" ]; then ok "$h -> $got"; else warn "$h -> ${got:-<none>}  (expected $SERVER_IP)"; fi
  done

  say "Preflight complete — nothing was changed."
}

# --------------------------------------------------------------------- app
app() {
  say "Node.js 20 LTS"
  if ! command -v node >/dev/null || [ "$(node -v | cut -d. -f1 | tr -d v)" -lt 18 ]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
  fi
  ok "node $(node -v), npm $(npm -v)"

  say "Application source -> ${APP_DIR}"
  mkdir -p "$(dirname "$APP_DIR")"
  if [ -d "$APP_DIR/.git" ]; then
    git -C "$APP_DIR" fetch --all && git -C "$APP_DIR" reset --hard origin/main
  else
    git clone "$REPO" "$APP_DIR"
  fi

  say "Install + build"
  cd "$APP_DIR"
  npm ci --omit=dev --no-audit --no-fund || npm install --no-audit --no-fund
  # devDependencies are needed to build; install them, build, then prune.
  npm install --no-audit --no-fund
  NODE_ENV=production npm run build
  npm prune --omit=dev
  ok "build complete"

  say "PM2"
  command -v pm2 >/dev/null || npm install -g pm2
  mkdir -p /var/log/pm2
  cp "$APP_DIR/deploy/ecosystem.config.js" "$APP_DIR/ecosystem.config.js"
  pm2 startOrReload "$APP_DIR/ecosystem.config.js" --update-env
  pm2 save
  pm2 startup systemd -u root --hp /root | tail -1 | bash || true
  ok "pm2 configured to survive reboot"

  say "Local check — must be 127.0.0.1, not 0.0.0.0"
  sleep 3
  ss -lntp | grep ":${APP_PORT}" || die "app is not listening"
  curl -sf -o /dev/null -w "  HTTP %{http_code} from 127.0.0.1:${APP_PORT}\n" "http://127.0.0.1:${APP_PORT}/" || die "app not responding"
}

# ------------------------------------------------------------------- nginx
nginx_stage() {
  say "Firewall (SSH stays open; ${APP_PORT} stays private)"
  if command -v ufw >/dev/null; then
    ufw allow 22/tcp  >/dev/null 2>&1 || true
    ufw allow 80/tcp  >/dev/null 2>&1 || true
    ufw allow 443/tcp >/dev/null 2>&1 || true
    ufw --force enable >/dev/null 2>&1 || true
    ufw status | sed 's/^/    /'
  else
    warn "ufw not installed — check your cloud provider's security group allows 80/443"
  fi

  say "Nginx"
  command -v nginx >/dev/null || { apt-get update -qq && apt-get install -y nginx; }
  mkdir -p /var/www/certbot
  cp "$APP_DIR/deploy/nginx-stage1-http.conf" "/etc/nginx/sites-available/${DOMAIN}"
  ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
  # Remove only the stock placeholder, never someone else's site.
  [ -L /etc/nginx/sites-enabled/default ] && rm -f /etc/nginx/sites-enabled/default
  nginx -t || die "nginx config invalid"
  systemctl enable --now nginx
  systemctl reload nginx
  ok "nginx serving HTTP for ${DOMAIN}"

  say "Proxy check"
  curl -sf -o /dev/null -w "  HTTP %{http_code} via nginx (Host: ${DOMAIN})\n" -H "Host: ${DOMAIN}" http://127.0.0.1/ \
    || die "nginx cannot reach the app"
}

# --------------------------------------------------------------------- ssl
ssl() {
  say "Verify DNS actually points here before asking Let's Encrypt"
  for h in "$DOMAIN" "$WWW"; do
    got=$(dig +short A "$h" @1.1.1.1 | tail -1)
    [ "$got" = "$SERVER_IP" ] || die "$h resolves to ${got:-<none>}, not ${SERVER_IP}. Fix DNS first."
    ok "$h -> $got"
  done

  say "Certbot"
  command -v certbot >/dev/null || { apt-get update -qq && apt-get install -y certbot python3-certbot-nginx; }

  say "Requesting certificate for ${DOMAIN} + ${WWW}"
  certbot certonly --webroot -w /var/www/certbot \
    -d "$DOMAIN" -d "$WWW" \
    --email "$EMAIL" --agree-tos --no-eff-email --non-interactive --keep-until-expiring
  [ -f "/etc/letsencrypt/options-ssl-nginx.conf" ] || \
    curl -sfL https://raw.githubusercontent.com/certbot/certbot/main/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf \
      -o /etc/letsencrypt/options-ssl-nginx.conf
  [ -f /etc/letsencrypt/ssl-dhparams.pem ] || openssl dhparam -out /etc/letsencrypt/ssl-dhparams.pem 2048

  say "Switching Nginx to HTTPS + canonical redirects"
  cp "$APP_DIR/deploy/nginx-stage2-https.conf" "/etc/nginx/sites-available/${DOMAIN}"
  nginx -t || die "nginx config invalid"
  systemctl reload nginx

  say "Auto-renewal"
  systemctl list-timers 2>/dev/null | grep -q certbot && ok "certbot.timer active" \
    || { systemctl enable --now certbot.timer 2>/dev/null && ok "certbot.timer enabled"; }
  certbot renew --dry-run
  ok "renewal dry-run passed"
}

# ------------------------------------------------------------------ verify
verify() {
  say "Process"
  pm2 list | sed 's/^/    /'
  say "Listening sockets"
  ss -lntp | grep -E ":(80|443|${APP_PORT})\s" | sed 's/^/    /'
  say "Nginx"
  nginx -t 2>&1 | sed 's/^/    /'
  systemctl is-active nginx | sed 's/^/    nginx: /'
  say "Responses"
  curl -sI  "http://${DOMAIN}"       | head -1 | sed 's/^/    http  apex: /'
  curl -sI  "http://${WWW}"          | head -1 | sed 's/^/    http  www : /'
  curl -sI  "https://${WWW}"         | head -1 | sed 's/^/    https www : /'
  curl -sIL "https://${DOMAIN}"      | grep -E "^HTTP" | tail -1 | sed 's/^/    https apex: /'
  say "Certificate"
  certbot certificates 2>/dev/null | grep -E "Certificate Name|Domains|Expiry" | sed 's/^/    /'
  say "App must NOT be publicly reachable on ${APP_PORT}"
  timeout 5 bash -c "echo > /dev/tcp/${SERVER_IP}/${APP_PORT}" 2>/dev/null \
    && warn "port ${APP_PORT} is reachable externally — close it" \
    || ok "port ${APP_PORT} is not publicly reachable"
}

case "${1:-}" in
  preflight) preflight ;;
  app)       app ;;
  nginx)     nginx_stage ;;
  ssl)       ssl ;;
  verify)    verify ;;
  *) echo "usage: bash deploy.sh {preflight|app|nginx|ssl|verify}"; exit 1 ;;
esac
