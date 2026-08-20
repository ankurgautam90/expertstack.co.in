import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { PatternVisual } from "@/components/visuals/PatternVisual";
import type { CaseStudy } from "@/lib/data/home";

const ROWS = [
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "result", label: "Result" },
] as const;

/** Case study card structured as Challenge → Solution → Result. */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-500 ease-enterprise hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="relative h-36 overflow-hidden">
        <PatternVisual
          variant={study.variant}
          icon={study.icon}
          className="h-full w-full transition-transform duration-700 ease-enterprise group-hover:scale-[1.06]"
        />
        <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur-sm">
          {study.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-bold text-navy-900">{study.title}</h3>
        <p className="mt-2 text-sm text-ink-soft">{study.summary}</p>

        <dl className="mt-6 space-y-4 border-t border-navy-100 pt-5">
          {ROWS.map((row) => (
            <div key={row.key}>
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                {row.label}
              </dt>
              <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">
                {study[row.key]}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          href={`/company/case-studies#${study.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-accent-600 hover:text-accent-700"
        >
          View Case Study
          <Icon
            name="arrowRight"
            size={16}
            className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
