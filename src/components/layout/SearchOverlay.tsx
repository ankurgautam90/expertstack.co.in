"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { searchSite } from "@/lib/search";

const SUGGESTIONS = [
  "Cloud",
  "Application Integration",
  "Cybersecurity",
  "Managed Services",
  "Networking",
  "Consulting",
];

/** Header search: a light overlay panel with instant client-side filtering. */
export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => searchSite(query), [query]);
  const hasQuery = query.trim().length >= 2;

  return (
    <div className="animate-menu-in border-t border-navy-100 bg-white shadow-menu">
      <div className="container py-8">
        <div className="flex items-center gap-3 border-b-2 border-navy-900 pb-3">
          <Icon name="search" size={22} className="shrink-0 text-navy-900" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search solutions, products and services"
            aria-label="Search the site"
            className="w-full bg-transparent font-display text-lg font-medium text-navy-900 outline-none placeholder:font-sans placeholder:text-base placeholder:font-normal placeholder:text-ink-soft sm:text-xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="shrink-0 rounded-md p-1.5 text-ink-soft transition-colors hover:bg-surface-muted hover:text-navy-900"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {hasQuery ? (
          results.length > 0 ? (
            <ul className="mt-6 grid gap-1 sm:grid-cols-2">
              {results.map((result) => (
                <li key={result.section + result.href + result.label}>
                  <Link
                    href={result.href}
                    onClick={onClose}
                    className="group flex items-start justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-surface-muted"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-navy-900 group-hover:text-accent-700">
                        {result.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[0.8125rem] text-ink-soft">
                        {result.description ?? result.section}
                      </span>
                    </span>
                    <span className="mt-0.5 shrink-0 rounded border border-navy-100 px-1.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-ink-soft">
                      {result.section}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 text-sm text-ink-muted">
              No matches for{" "}
              <span className="font-semibold text-navy-900">“{query}”</span>. Try a
              product category, or{" "}
              <Link
                href="/#contact"
                onClick={onClose}
                className="font-semibold text-accent-600 link-underline"
              >
                send us the requirement
              </Link>
              .
            </p>
          )
        ) : (
          <div className="mt-6">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Frequently searched
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setQuery(suggestion)}
                  className="rounded-full border border-navy-100 bg-surface-muted px-4 py-2 text-[0.8125rem] font-medium text-navy-700 transition-colors hover:border-accent-400 hover:bg-accent-50 hover:text-accent-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
