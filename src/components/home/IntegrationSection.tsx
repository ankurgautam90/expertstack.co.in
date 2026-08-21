import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrationLayers, integrationOutcomes } from "@/lib/data/home";

/**
 * The central argument of the site. Rendered as an HTML flow rather than an SVG
 * so it reflows cleanly on mobile and stays readable to assistive tech — the
 * hero already carries the drawn version of the same architecture.
 */
export function IntegrationSection() {
  return (
    <section id="integration" className="bg-surface-muted py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Integration"
          title="We Integrate Technology. You Focus on Your Business."
          description="Applications, identity, cloud, network, security and infrastructure are rarely bought at the same time — or from the same place. Our work is making them behave as one environment."
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          {/* The stack */}
          <Reveal>
            <ol className="relative">
              {/* Spine */}
              <span
                aria-hidden="true"
                className="absolute bottom-8 left-[1.4375rem] top-8 w-px bg-gradient-to-b from-accent-200 via-accent-500 to-accent-200"
              />

              {integrationLayers.map((layer, index) => (
                <li key={layer.label} className="relative flex gap-5 pb-3 last:pb-0">
                  <span className="relative z-10 mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-navy-100 bg-white text-accent-600 shadow-card">
                    <Icon name={layer.icon} size={21} />
                  </span>

                  <div className="min-w-0 flex-1 rounded-xl border border-navy-100 bg-white px-5 py-4 transition-colors duration-300 hover:border-accent-300 hover:shadow-card">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[0.9375rem] font-bold text-navy-900">
                        {layer.label}
                      </h3>
                      <span className="shrink-0 text-[0.625rem] font-semibold tabular-nums tracking-[0.14em] text-ink-soft">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-muted">
                      {layer.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* What that buys */}
          <div className="lg:pt-4">
            <Reveal delay={100}>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                What integration actually buys you
              </p>
            </Reveal>

            <div className="mt-6 space-y-4">
              {integrationOutcomes.map((outcome, index) => (
                <Reveal key={outcome.title} delay={140 + index * 80}>
                  <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-card">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-50 text-accent-600">
                      <Icon name={outcome.icon} size={19} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                      {outcome.title}
                    </h3>
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                      {outcome.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={380}>
              <div className="mt-8 rounded-xl bg-navy-900 p-6 text-white">
                <p className="text-[0.9375rem] leading-relaxed text-navy-200">
                  Most failures happen at the boundaries between systems. That is
                  precisely where we take responsibility.
                </p>
                <ButtonLink
                  href="/services/integration"
                  variant="onDark"
                  size="md"
                  className="mt-5"
                  withArrow
                >
                  Explore Integration
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
