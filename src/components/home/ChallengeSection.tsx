import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessChallenges } from "@/lib/data/home";

/**
 * Step one of the homepage story: the business problem, before any mention of
 * technology. Everything below this section answers it.
 */
export function ChallengeSection() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <span
        aria-hidden="true"
        className="grid-blueprint-light pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40 mask-fade-b"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="The starting point"
          title="What organisations actually ask us to fix"
          description="Rarely a single product decision. Almost always a set of systems that were bought separately and never made to work as one."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessChallenges.map((challenge, index) => (
            <Reveal key={challenge.problem} delay={(index % 4) * 70}>
              <div className="group h-full rounded-xl border border-navy-100 bg-surface-muted p-6 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:bg-white hover:shadow-card-hover">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-accent-600 shadow-card transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={challenge.icon} size={19} />
                </span>
                <h3 className="mt-5 font-display text-[0.9375rem] font-bold leading-snug text-navy-900">
                  {challenge.problem}
                </h3>
                <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-muted">
                  {challenge.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
