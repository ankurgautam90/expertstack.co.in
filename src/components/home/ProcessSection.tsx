import { ServiceCard } from "@/components/cards/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data/home";

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-surface-muted py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="From Strategy to Operations"
          description="One accountable team across the whole lifecycle. The engineers who understand the requirement design the architecture, integrate it, implement it — and stay on to run it."
          action={
            <ButtonLink href="/services/consulting" variant="secondary" size="md" withArrow>
              All services
            </ButtonLink>
          }
        />

        <div className="relative mt-14">
          {/* Track connecting the steps on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent lg:block"
          />

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={(index % 4) * 80}>
                <ServiceCard step={step} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-[0.9375rem] text-ink-muted">
            Steps 06 and 07 are the ones most projects leave out — and the reason
            environments drift away from the design they started with.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
