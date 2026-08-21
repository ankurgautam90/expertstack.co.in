import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { PatternVisual } from "@/components/visuals/PatternVisual";
import type { Industry } from "@/lib/data/home";

const ROWS = [
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
] as const;

/**
 * Industry card. Deliberately not a bare sector tile — each one states the
 * business challenge, the technology response and the outcome.
 */
export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={industry.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-500 ease-enterprise hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-card-hover"
    >
      <div className="relative h-28 overflow-hidden">
        <span className="absolute inset-0 block transition-transform duration-700 ease-enterprise group-hover:scale-[1.08]">
          <PatternVisual variant={industry.variant} className="h-full w-full" />
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent"
        />
        <div className="relative flex h-full items-end gap-3 p-4">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-accent-600 group-hover:ring-accent-400">
            <Icon name={industry.icon} size={18} />
          </span>
          <h3 className="font-display text-base font-bold text-white">
            {industry.title}
          </h3>
        </div>
      </div>

      <dl className="flex flex-1 flex-col gap-3.5 p-6">
        {ROWS.map((row) => (
          <div key={row.key}>
            <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
              {row.label}
            </dt>
            <dd className="mt-1 text-[0.8125rem] leading-relaxed text-ink-muted">
              {industry[row.key]}
            </dd>
          </div>
        ))}

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.8125rem] font-semibold text-accent-600">
          Explore Solution
          <Icon
            name="arrowRight"
            size={15}
            className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
          />
        </span>
      </dl>
    </Link>
  );
}
