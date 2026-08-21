import { SolutionAreaCard } from "@/components/cards/SolutionAreaCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionAreas } from "@/lib/data/home";

/** The six solution areas the business is organised around. */
export function SolutionsGrid() {
  return (
    <section id="solutions" className="bg-surface-muted py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title="Technology Solutions for Modern Enterprises"
          description="Six areas, delivered by one team — so cloud, applications, identity, network and data are designed against the same set of business requirements."
          action={
            <ButtonLink href="/contact" variant="secondary" size="md" withArrow>
              Discuss Your Requirement
            </ButtonLink>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionAreas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 3) * 70}>
              <SolutionAreaCard area={area} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
