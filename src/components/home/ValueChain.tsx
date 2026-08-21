import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valueChain } from "@/lib/data/home";

/** Understand → Design → Integrate → Implement → Manage. */
export function ValueChain({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-surface-muted py-20 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="How we create value"
          title="Understand → Design → Integrate → Implement → Manage"
          description="One accountable team across the whole lifecycle. The people who understand the requirement design the architecture, connect the pieces and stay on to run it."
          align="center"
          action={
            compact ? undefined : (
              <ButtonLink href="/services" variant="secondary" size="md" withArrow>
                Our services
              </ButtonLink>
            )
          }
        />

        <div className="relative mt-14">
          {/* Track linking the steps on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent lg:block"
          />

          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {valueChain.map((stage, index) => (
              <Reveal key={stage.step} delay={index * 70}>
                <li className="group h-full rounded-xl border border-navy-100 bg-white p-6 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-surface-muted text-navy-800 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                      <Icon name={stage.icon} size={20} />
                    </span>
                    <span className="font-display text-2xl font-extrabold leading-none text-navy-100 transition-colors duration-500 group-hover:text-accent-200">
                      {stage.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
                    {stage.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
