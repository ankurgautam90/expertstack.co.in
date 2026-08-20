import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { PatternVisual } from "@/components/visuals/PatternVisual";
import type { CoreSolution } from "@/lib/data/home";

/** Large visual card used for the core solution grid. */
export function SolutionCard({ solution }: { solution: CoreSolution }) {
  return (
    <Link
      href={solution.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-500 ease-enterprise hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-card-hover"
    >
      <div className="relative h-44 overflow-hidden">
        <PatternVisual
          variant={solution.variant}
          icon={solution.icon}
          className="h-full w-full transition-transform duration-700 ease-enterprise group-hover:scale-[1.06]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-bold text-navy-900 transition-colors duration-300 group-hover:text-accent-700">
          {solution.title}
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
          {solution.body}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {solution.points.map((point) => (
            <li
              key={point}
              className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-navy-700"
            >
              {point}
            </li>
          ))}
        </ul>

        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
          Explore solution
          <Icon
            name="arrowRight"
            size={16}
            className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
