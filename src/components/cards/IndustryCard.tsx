import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { PatternVisual } from "@/components/visuals/PatternVisual";
import type { Industry } from "@/lib/data/home";

/** Image-led industry tile with a caption that lifts on hover. */
export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={industry.href}
      className="group relative block h-64 overflow-hidden rounded-xl border border-navy-100"
    >
      {/* Wrapper carries the positioning; PatternVisual sets its own `relative`. */}
      <span className="absolute inset-0 block transition-transform duration-700 ease-enterprise group-hover:scale-[1.08]">
        <PatternVisual variant={industry.variant} className="h-full w-full" />
      </span>

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent"
      />

      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-accent-600 group-hover:ring-accent-400">
          <Icon name={industry.icon} size={20} />
        </span>

        <h3 className="mt-4 font-display text-lg font-bold text-white">
          {industry.title}
        </h3>

        {/* Blurb reveals on hover, keeping the resting grid calm */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-enterprise group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <p className="overflow-hidden text-[0.8125rem] leading-relaxed text-navy-200">
            <span className="block pt-2">{industry.blurb}</span>
          </p>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-white">
          View sector
          <Icon
            name="arrowUpRight"
            size={15}
            className="transition-transform duration-300 ease-enterprise group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
