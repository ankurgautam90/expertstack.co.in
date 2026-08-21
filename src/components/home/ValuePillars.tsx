import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valuePillars } from "@/lib/data/home";

/** The six business values, stated without invented metrics. */
export function ValuePillars() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <span aria-hidden="true" className="grid-blueprint pointer-events-none absolute inset-0 opacity-60" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent-600/15 blur-[130px]"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="The value we provide"
          title="What You Actually Get From Integration"
          description="No percentage claims and no invented benchmarks — these are the outcomes integration is for, described plainly."
          tone="dark"
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={(index % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-500/40 hover:bg-white/[0.07]">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-transparent transition-transform duration-500 ease-enterprise group-hover:scale-x-100"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-600/20 text-accent-300 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                    <Icon name={pillar.icon} size={20} />
                  </span>
                  <span className="font-display text-2xl font-extrabold leading-none text-white/15">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-navy-300">
                  {pillar.body}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-white/[0.06] px-3 py-1 text-[0.75rem] font-medium text-navy-200"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
