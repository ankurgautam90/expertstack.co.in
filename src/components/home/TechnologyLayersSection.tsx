import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DataCenterVisual } from "@/components/visuals/DataCenterVisual";
import { technologyLayers } from "@/lib/data/home";

/**
 * Where compute, network, security and storage appear — framed as the layers a
 * solution is built from, each linking to how we design and integrate it.
 */
export function TechnologyLayersSection() {
  return (
    <section id="technology" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Technology layers"
          title="The Components Behind the Solution"
          description="Compute, network, security and storage still matter — they are simply chosen to serve the architecture rather than the other way round. We design, integrate and operate each layer as part of one environment."
          action={
            <ButtonLink href="/contact" variant="secondary" size="md" withArrow>
              Discuss Your Requirement
            </ButtonLink>
          }
        />

        <Reveal delay={100}>
          <div className="relative mt-12 overflow-hidden rounded-2xl bg-navy-950">
            <DataCenterVisual className="w-full" />
            <div className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent px-8 pb-7 pt-16 lg:block">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-navy-400">
                Designed, integrated and operated as one environment
              </p>
              <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-navy-200">
                From data center and cloud platforms through to the network and security
                layers that connect and protect them.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyLayers.map((layer, index) => (
            <Reveal key={layer.title} delay={(index % 3) * 70}>
              <Link
                href={layer.href}
                className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-6 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent-600">
                  <Icon name={layer.icon} size={20} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                  {layer.title}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                  {layer.body}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.8125rem] font-semibold text-accent-600">
                  Learn More
                  <Icon
                    name="arrowRight"
                    size={15}
                    className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
