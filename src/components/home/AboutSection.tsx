import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PatternVisual } from "@/components/visuals/PatternVisual";

const PILLARS = [
  { icon: "server" as const, label: "Compute" },
  { icon: "network" as const, label: "Networking" },
  { icon: "shield" as const, label: "Security" },
  { icon: "storage" as const, label: "Storage" },
  { icon: "datacenter" as const, label: "Data Center" },
  { icon: "support" as const, label: "Support" },
];

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">About us</p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Your Trusted IT Infrastructure Partner
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                We provide enterprise IT infrastructure and technology solutions
                covering compute, networking, security, storage and data center
                infrastructure.
              </p>
              <p>
                Our focus is to help organizations build reliable, secure and scalable
                technology environments — designed against how the business actually
                operates, then supported after handover rather than left to drift.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PILLARS.map((pillar) => (
                <li
                  key={pillar.label}
                  className="flex items-center gap-2.5 rounded-lg border border-navy-100 bg-surface-muted px-4 py-3"
                >
                  <Icon name={pillar.icon} size={17} className="shrink-0 text-accent-600" />
                  <span className="text-[0.8125rem] font-semibold text-navy-800">
                    {pillar.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/company/about-us" size="lg" withArrow>
                About Us
              </ButtonLink>
              <ButtonLink href="/company/why-choose-us" variant="secondary" size="lg">
                Why Choose Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative">
          <div className="overflow-hidden rounded-2xl border border-navy-100">
            <PatternVisual variant="topology" className="aspect-[4/3] w-full" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-navy-100 bg-white p-6 shadow-card sm:left-10 sm:right-10">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
              How we work
            </p>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-navy-800">
              Assess first, design against evidence, supply through authorised channels,
              deploy to a documented plan, and stay accountable for the result.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
