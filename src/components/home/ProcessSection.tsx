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
          title="From Design to Deployment"
          description="A single accountable team across the whole engagement. The engineers who scope the environment are the ones who rack it, configure it and pick up the phone afterwards."
          action={
            <ButtonLink href="/services/it-infrastructure" variant="secondary" size="md" withArrow>
              All services
            </ButtonLink>
          }
        />

        <div className="relative mt-14">
          {/* Track connecting the six steps on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent lg:block"
          />

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={(index % 3) * 80}>
                <ServiceCard step={step} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
