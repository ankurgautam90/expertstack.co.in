"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { navigation } from "@/lib/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Full-height mobile drawer. Every top-level area is an accordion; sub-links are
 * large touch targets grouped under their column heading.
 */
export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<string | null>("Solutions");

  return (
    <div className="fixed inset-x-0 bottom-0 top-[var(--header-height)] z-40 overflow-y-auto overscroll-contain bg-white lg:hidden">
      <nav className="container py-6" aria-label="Mobile">
        <ul className="divide-y divide-navy-100 border-y border-navy-100">
          {navigation.map((item) => {
            const isOpen = open === item.label;

            if (!item.menu) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-4 font-display text-lg font-bold text-navy-900"
                  >
                    {item.label}
                    <Icon name="arrowRight" size={18} className="text-ink-soft" />
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-4 text-left font-display text-lg font-bold text-navy-900"
                >
                  {item.label}
                  <Icon
                    name="chevronDown"
                    size={20}
                    className={cn(
                      "text-ink-soft transition-transform duration-300 ease-enterprise",
                      isOpen && "rotate-180 text-accent-600",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-enterprise",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-6 pb-6">
                      {item.menu.columns.map((column) => (
                        <div key={column.heading}>
                          <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                            {column.heading}
                          </p>
                          <ul className="space-y-1">
                            {column.links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="flex items-center gap-3 rounded-lg bg-surface-muted px-3.5 py-3 text-[0.9375rem] font-medium text-navy-800 active:bg-accent-50"
                                >
                                  {link.icon ? (
                                    <Icon
                                      name={link.icon}
                                      size={18}
                                      className="shrink-0 text-accent-600"
                                    />
                                  ) : null}
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 space-y-3">
          <ButtonLink
            href="/contact"
            size="lg"
            className="w-full"
            onClick={onClose}
            withArrow
          >
            Talk to an Expert
          </ButtonLink>
          <ButtonLink
            href={site.contact.phoneHref}
            variant="secondary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            <Icon name="phone" size={17} />
            {site.contact.phone}
          </ButtonLink>
        </div>

        <p className="mt-8 pb-10 text-sm text-ink-soft">
          <a href={`mailto:${site.contact.email}`} className="link-underline">
            {site.contact.email}
          </a>
        </p>
      </nav>
    </div>
  );
}
