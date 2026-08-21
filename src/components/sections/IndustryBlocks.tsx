import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PatternVisual } from "@/components/visuals/PatternVisual";
import { industries } from "@/lib/data/home";

const ROWS = [
  { key: "challenge", label: "Business Challenges" },
  { key: "solution", label: "Our Approach" },
  { key: "outcome", label: "Business Value" },
] as const;

/** Each sector stated as challenge → approach → value, never a bare list. */
export function IndustryBlocks() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container space-y-6">
        {industries.map((industry, index) => (
          <Reveal key={industry.title} delay={(index % 2) * 60}>
            <article
              id={industry.href.split("/").pop()}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy-100 shadow-card transition-shadow duration-500 hover:shadow-card-hover"
            >
              <div className="grid lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
                {/* Sector plate */}
                <div className="relative min-h-[10rem] bg-navy-950 p-7">
                  <span className="absolute inset-0 block">
                    <PatternVisual variant={industry.variant} className="h-full w-full" />
                  </span>
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm">
                      <Icon name={industry.icon} size={20} />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-white">
                        {industry.title}
                      </h2>
                      <Link
                        href={industry.href}
                        className="group mt-3 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-accent-300 hover:text-white"
                      >
                        Sector detail
                        <Icon
                          name="arrowRight"
                          size={14}
                          className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Challenge / approach / value */}
                <dl className="grid gap-6 bg-white p-7 sm:grid-cols-3 lg:p-9">
                  {ROWS.map((row) => (
                    <div key={row.key}>
                      <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                        {row.label}
                      </dt>
                      <dd className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                        {industry[row.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
