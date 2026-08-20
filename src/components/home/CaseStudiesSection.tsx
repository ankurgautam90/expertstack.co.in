import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data/home";

export function CaseStudiesSection() {
  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Case studies"
          title="Infrastructure Built for Real-World Challenges"
          description="Representative engagements, described by what was wrong, what was built and what changed as a result."
          action={
            <ButtonLink href="/company/case-studies" variant="secondary" size="md" withArrow>
              All case studies
            </ButtonLink>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 90}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
