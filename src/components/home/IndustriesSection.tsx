import { IndustryCard } from "@/components/cards/IndustryCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data/home";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title="Solutions Built for Your Industry"
          description="The technology overlaps across sectors — the constraints do not. Each of these starts from the business challenge, not from a list of platforms."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={(index % 4) * 70}>
              <IndustryCard industry={industry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
