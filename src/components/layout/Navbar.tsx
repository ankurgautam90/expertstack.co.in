"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/lib/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Grace period so the pointer can travel from the trigger into the panel. */
const CLOSE_DELAY = 140;

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }, [cancelClose]);

  const closeAll = useCallback(() => {
    cancelClose();
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [cancelClose]);

  // Condense the header once the page moves away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes whatever is open.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeAll]);

  // Route changes should never leave a panel hanging open.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Lock the page behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => cancelClose, [cancelClose]);

  const activeItem = navigation.find((item) => item.label === openMenu);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled || openMenu || searchOpen
          ? "shadow-[0_1px_0_rgba(8,21,39,0.08),0_8px_24px_-16px_rgba(8,21,39,0.28)]"
          : "border-b border-navy-100",
      )}
      onMouseLeave={scheduleClose}
    >
      {/* Utility strip — corporate contact rail, collapses on scroll */}
      <div
        className={cn(
          "hidden overflow-hidden bg-navy-900 text-navy-200 transition-all duration-300 ease-enterprise lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="container flex h-9 items-center justify-between text-[0.75rem]">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
            <span>{site.tagline} — compute, network, security, storage</span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Icon name="phone" size={13} />
              {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Icon name="mail" size={13} />
              {site.contact.email}
            </a>
            <Link
              href="/services/amc-support"
              className="transition-colors hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container flex h-[var(--header-height)] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center">
            {navigation.map((item) => {
              const isOpen = openMenu === item.label;
              return (
                <li
                  key={item.label}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(item.menu ? item.label : null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-expanded={item.menu ? isOpen : undefined}
                    onFocus={() => setOpenMenu(item.menu ? item.label : null)}
                    className={cn(
                      "relative flex h-[var(--header-height)] items-center gap-1.5 px-4 text-[0.9375rem] font-semibold transition-colors duration-200",
                      isOpen ? "text-accent-700" : "text-navy-800 hover:text-accent-700",
                    )}
                  >
                    {item.label}
                    {item.menu ? (
                      <Icon
                        name="chevronDown"
                        size={14}
                        className={cn(
                          "transition-transform duration-300 ease-enterprise",
                          isOpen && "rotate-180",
                        )}
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 bottom-0 h-[3px] rounded-t bg-accent-600 transition-transform duration-300 ease-enterprise",
                        isOpen ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => {
              setSearchOpen((value) => !value);
              setOpenMenu(null);
            }}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className="grid h-10 w-10 place-items-center rounded-md text-navy-800 transition-colors hover:bg-surface-muted hover:text-accent-700"
          >
            <Icon name={searchOpen ? "close" : "search"} size={20} />
          </button>

          <ButtonLink
            href="/#contact"
            size="md"
            className="hidden sm:inline-flex"
            withArrow
          >
            Request a Quote
          </ButtonLink>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((value) => !value);
              setSearchOpen(false);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="grid h-10 w-10 place-items-center rounded-md text-navy-900 transition-colors hover:bg-surface-muted lg:hidden"
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Desktop panels */}
      {activeItem?.menu && !searchOpen ? (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={cancelClose}
        >
          <MegaMenu item={activeItem} onNavigate={closeAll} />
        </div>
      ) : null}

      {searchOpen ? (
        <div className="absolute inset-x-0 top-full" onMouseEnter={cancelClose}>
          <SearchOverlay onClose={() => setSearchOpen(false)} />
        </div>
      ) : null}

      {/* Dim the page behind an open panel.
          This sits inside <header>, so it counts as a descendant — the header's
          own onMouseLeave never fires while it is showing. Entering it is
          therefore treated as leaving the header. */}
      {(openMenu || searchOpen) && !mobileOpen ? (
        <div
          aria-hidden="true"
          onClick={closeAll}
          onMouseEnter={scheduleClose}
          className="absolute inset-x-0 top-full -z-10 h-screen bg-navy-950/25 backdrop-blur-[1px]"
        />
      ) : null}

      {mobileOpen ? <MobileMenu onClose={closeAll} /> : null}
    </header>
  );
}
