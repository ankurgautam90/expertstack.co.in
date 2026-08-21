import { SolutionCard } from "@/components/cards/SolutionCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreSolutions } from "@/lib/data/home";

export function CoreSolutions() {
  return (
    <section id="core-solutions" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Core solutions"
          title="Our Core Solutions"
          description="Each of these is a complete engagement — consulted, architected, integrated, implemented, secured and then operated — rather than a product line with an engineer attached."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreSolutions.map((solution, index) => (
            <Reveal key={solution.title} delay={(index % 3) * 80}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
