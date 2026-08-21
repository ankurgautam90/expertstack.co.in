import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import type { SolutionArea } from "@/lib/data/home";

/**
 * Solution-area card. Same visual treatment as the card it replaced — the list
 * underneath is capability scope, not a product spec sheet.
 */
export function SolutionAreaCard({ area }: { area: SolutionArea }) {
  return (
    <Link
      href={area.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-500 ease-enterprise hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-card-hover"
    >
      {/* Accent rule that draws across on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent-600 to-ember-500 transition-transform duration-500 ease-enterprise group-hover:scale-x-100"
      />

      <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent-600">
        <Icon name={area.icon} size={23} />
      </span>

      <h3 className="mt-6 font-display text-lg font-bold text-navy-900">{area.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{area.blurb}</p>

      <ul className="mt-6 space-y-2.5 border-t border-navy-100 pt-5">
        {area.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-[0.875rem] text-navy-700"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
            {item}
          </li>
        ))}
      </ul>

      <span className="mt-auto pt-6 text-sm font-semibold text-accent-600">
        <span className="inline-flex items-center gap-2">
          Explore Solution
          <Icon
            name="arrowRight"
            size={15}
            className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
          />
        </span>
      </span>
    </Link>
  );
}
