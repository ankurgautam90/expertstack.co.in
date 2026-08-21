import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PatternVisual } from "@/components/visuals/PatternVisual";

const PILLARS = [
  { icon: "eye" as const, label: "Consulting" },
  { icon: "blueprint" as const, label: "Architecture" },
  { icon: "workflow" as const, label: "Integration" },
  { icon: "layers" as const, label: "Implementation" },
  { icon: "shield" as const, label: "Cybersecurity" },
  { icon: "cloud" as const, label: "Cloud" },
  { icon: "server" as const, label: "Infrastructure" },
  { icon: "monitor" as const, label: "Managed Services" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-surface-muted py-20 lg:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">About us</p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Your Technology Integration Partner
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                We are a technology solutions and systems integration company helping
                organizations design, integrate, implement and manage modern IT
                environments.
              </p>
              <p>
                We start from the business requirement rather than a product line, stay
                independent of any single platform, and remain accountable for the
                environment long after it goes live.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
              Understand the requirement, design the architecture, integrate the
              platforms, secure every layer — then operate and improve it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
