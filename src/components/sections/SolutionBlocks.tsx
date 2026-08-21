import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PatternVisual } from "@/components/visuals/PatternVisual";
import { solutionAreas } from "@/lib/data/home";

const VARIANTS = ["circuit", "topology", "signal", "stack", "circuit", "topology"] as const;

/**
 * The six solution areas as alternating split blocks. Reuses the existing card
 * and pattern language — no new visual vocabulary.
 */
export function SolutionBlocks() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container space-y-16 lg:space-y-24">
        {solutionAreas.map((area, index) => {
          const flipped = index % 2 === 1;

          return (
            <Reveal key={area.title}>
              <div
                id={area.href.split("/").pop()}
                className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Visual */}
                <div className={flipped ? "lg:order-2" : undefined}>
                  <div className="overflow-hidden rounded-2xl border border-navy-100">
                    <PatternVisual
                      variant={VARIANTS[index]}
                      icon={area.icon}
                      className="aspect-[16/10] w-full"
                    />
                  </div>
                </div>

                {/* Copy */}
                <div className={flipped ? "lg:order-1" : undefined}>
                  <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                    <span className="h-px w-6 bg-ember-500" />
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                    {area.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-muted">{area.blurb}</p>

                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 rounded-lg border border-navy-100 bg-surface-muted px-3.5 py-2.5 text-[0.875rem] font-medium text-navy-800"
                      >
                        <Icon name="check" size={16} className="shrink-0 text-accent-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={area.href}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    Explore {area.title}
                    <Icon
                      name="arrowRight"
                      size={16}
                      className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
