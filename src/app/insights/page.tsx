import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Icon } from "@/components/icons/Icon";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { PatternVisual } from "@/components/visuals/PatternVisual";
import { insights } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering notes on systems integration, cloud architecture, cybersecurity and managed services.",
};

const VARIANTS = ["circuit", "topology", "stack", "signal"] as const;

export default function InsightsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Insights"
        title="Notes from our engineers"
        description="Positions we have arrived at from delivery work — on integration, cloud placement, identity, sizing and what happens to an environment after handover."
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, index) => (
              <Reveal key={insight.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-500 ease-enterprise hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-card-hover"
                >
                  <div className="relative h-32 overflow-hidden">
                    <span className="absolute inset-0 block transition-transform duration-700 ease-enterprise group-hover:scale-[1.06]">
                      <PatternVisual
                        variant={VARIANTS[index % VARIANTS.length]}
                        icon={insight.icon}
                        className="h-full w-full"
                      />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]">
                      <span className="text-accent-600">{insight.category}</span>
                      <span className="h-3 w-px bg-navy-200" />
                      <span className="text-ink-soft">{insight.readTime}</span>
                    </div>

                    <h2 className="mt-3 font-display text-lg font-bold leading-snug text-navy-900 transition-colors duration-300 group-hover:text-accent-700">
                      {insight.title}
                    </h2>
                    <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-muted">
                      {insight.excerpt}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.8125rem] font-semibold text-accent-600">
                      Read more
                      <Icon
                        name="arrowRight"
                        size={15}
                        className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
