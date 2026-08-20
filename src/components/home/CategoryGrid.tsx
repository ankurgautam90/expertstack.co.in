import { ProductCard } from "@/components/cards/ProductCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/data/home";

/** Solution navigation grid — the six areas the business is organised around. */
export function CategoryGrid() {
  return (
    <section id="categories" className="relative bg-white py-20 lg:py-28">
      <span
        aria-hidden="true"
        className="grid-blueprint-light pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40 mask-fade-b"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="What we build"
          title="Technology Solutions for Modern Enterprises"
          description="Six areas, delivered by one team — so the compute, the network, the security layer and the room they sit in are designed against the same set of requirements."
          action={
            <ButtonLink href="/#contact" variant="secondary" size="md" withArrow>
              Request a Quote
            </ButtonLink>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 70}>
              <ProductCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
