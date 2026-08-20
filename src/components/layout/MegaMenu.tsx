import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import type { NavItem } from "@/lib/navigation";

/**
 * Desktop dropdown panel. Structure mirrors the corporate pattern: a promotional
 * rail on the left, then two grouped link columns with short descriptions.
 */
export function MegaMenu({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if (!item.menu) return null;
  const { feature, columns } = item.menu;

  return (
    <div className="animate-menu-in border-t border-navy-100 bg-white shadow-menu">
      <div className="container grid gap-10 py-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:gap-14">
        {/* Promotional rail */}
        <Link
          href={feature.href}
          onClick={onNavigate}
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-navy-900 p-7 text-white transition-colors duration-300 hover:bg-navy-800"
        >
          <span
            aria-hidden="true"
            className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-500/25 blur-3xl"
          />
          <div className="relative">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-accent-300">
              {feature.eyebrow}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-200">{feature.body}</p>
          </div>
          <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
            {feature.cta}
            <Icon
              name="arrowRight"
              size={16}
              className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
            />
          </span>
        </Link>

        {/* Link columns */}
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {columns.map((column) => (
            <div key={column.heading}>
              <p className="mb-4 border-b border-navy-100 pb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {column.heading}
              </p>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-surface-muted"
                    >
                      {link.icon ? (
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent-50 text-accent-600 transition-colors duration-200 group-hover:bg-accent-600 group-hover:text-white">
                          <Icon name={link.icon} size={17} />
                        </span>
                      ) : null}
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-navy-900 transition-colors duration-200 group-hover:text-accent-700">
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-soft">
                            {link.description}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
