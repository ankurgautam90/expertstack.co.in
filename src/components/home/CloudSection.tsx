import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CloudVisual } from "@/components/visuals/CloudVisual";
import { cloudServices } from "@/lib/data/home";

export function CloudSection() {
  return (
    <section className="overflow-hidden bg-surface-muted py-20 lg:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl bg-navy-950 p-8 sm:p-12">
            <span
              aria-hidden="true"
              className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-accent-600/25 blur-[100px]"
            />
            <CloudVisual className="relative mx-auto w-full max-w-md" />

            <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { label: "Placement", value: "By workload" },
                { label: "Identity", value: "Shared" },
                { label: "Operations", value: "One model" },
              ].map((spec) => (
                <div key={spec.label}>
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy-400">
                    {spec.label}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-white">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Cloud &amp; infrastructure</p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Build the Right Cloud Strategy
            </h2>
            <p className="mt-5 text-lg font-medium text-navy-700">
              Not everything belongs in the same place.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
              We assess each workload on performance, dependency, licensing and data
              constraints, then design a private, public or hybrid platform around the
              answers — with identity, networking and monitoring consistent across both
              sides so it can actually be operated.
            </p>
          </Reveal>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {cloudServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <div className="flex gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent-50 text-accent-600">
                    <Icon name={service.icon} size={18} />
                  </span>
                  <div>
                    <dt className="text-[0.9375rem] font-semibold text-navy-900">
                      {service.title}
                    </dt>
                    <dd className="mt-1 text-[0.8125rem] leading-relaxed text-ink-soft">
                      {service.body}
                    </dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/solutions/cloud-infrastructure" size="lg" withArrow>
                Explore Solution
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Talk to an Expert
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
