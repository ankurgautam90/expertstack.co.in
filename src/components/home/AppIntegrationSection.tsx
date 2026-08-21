import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppFlowVisual } from "@/components/visuals/AppFlowVisual";
import { integrationTargets } from "@/lib/data/home";

export function AppIntegrationSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Software & application integration"
          title="Connect Applications. Simplify Operations."
          description="When systems cannot exchange data, people become the integration layer — exporting, reconciling and re-keying between them. We replace that with interfaces that are documented, monitored and owned."
          action={
            <ButtonLink href="/solutions/application-integration" size="lg" withArrow>
              Explore Solution
            </ButtonLink>
          }
        />

        {/* Architecture */}
        <Reveal delay={100}>
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-navy-950 px-6 py-10 sm:px-12 sm:py-14">
            <span
              aria-hidden="true"
              className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-1/4 -top-24 h-56 rounded-full bg-accent-600/25 blur-[100px]"
            />
            <AppFlowVisual className="relative mx-auto w-full max-w-4xl" />
          </div>
        </Reveal>

        {/* What we connect */}
        <Reveal delay={140}>
          <p className="mt-12 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
            Platforms we integrate
          </p>
        </Reveal>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {integrationTargets.map((target, index) => (
            <Reveal key={target.label} delay={(index % 5) * 60}>
              <div className="group flex h-full items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all duration-300 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:shadow-card">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-muted text-accent-600 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={target.icon} size={18} />
                </span>
                <span className="text-[0.8125rem] font-semibold leading-tight text-navy-800">
                  {target.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
