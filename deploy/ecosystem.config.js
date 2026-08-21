/**
 * PM2 process definition for the Expertstack site.
 *
 * `next start` ignores the HOSTNAME environment variable, so the bind address
 * MUST be passed as the -H flag — otherwise Next binds 0.0.0.0 and the app is
 * reachable directly on :3000, bypassing Nginx and TLS.
 */
module.exports = {
  apps: [
    {
      name: "expertstack",
      cwd: "/var/www/expertstack",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3000",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
      error_file: "/var/log/pm2/expertstack-error.log",
      out_file: "/var/log/pm2/expertstack-out.log",
      merge_logs: true,
      time: true,
    },
  ],
};
