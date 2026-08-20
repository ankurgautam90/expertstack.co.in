import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SecurityVisual } from "@/components/visuals/SecurityVisual";

const CAPABILITIES = [
  {
    icon: "shield" as const,
    title: "Firewall",
    body: "Next-generation platforms deployed in high-availability pairs.",
  },
  {
    icon: "lock" as const,
    title: "VPN",
    body: "Site-to-site and remote access built on a consistent method.",
  },
  {
    icon: "eye" as const,
    title: "IDS / IPS",
    body: "Inspection enabled and tuned against observed traffic.",
  },
  {
    icon: "bolt" as const,
    title: "Threat Prevention",
    body: "Subscription services configured, licensed and kept current.",
  },
  {
    icon: "layers" as const,
    title: "Network Segmentation",
    body: "Internal zones separated so lateral movement is constrained.",
  },
  {
    icon: "support" as const,
    title: "Secure Remote Access",
    body: "Controlled access for staff, vendors and support engineers.",
  },
];

/** The darkest section on the page — cybersecurity reads as a change of register. */
export function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <span
        aria-hidden="true"
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent-600/20 blur-[130px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-ember-500/10 blur-[120px]"
      />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-accent-300">Cyber defense</p>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Secure Every Connection
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-navy-200">
              Protect your network, applications and critical infrastructure with
              enterprise-grade firewall and security solutions — policy written against
              documented flows, deployed resiliently and reviewed on a schedule.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-500 hover:border-accent-500/50 hover:bg-white/[0.07]">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-accent-600/20 text-accent-300 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-navy-300">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/solutions/network-security" size="lg" withArrow>
                Explore Security
              </ButtonLink>
              <ButtonLink href="/#contact" variant="onDark" size="lg">
                Talk to an Expert
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <SecurityVisual className="w-full drop-shadow-[0_30px_60px_rgba(5,14,27,0.6)]" />
        </Reveal>
      </div>
    </section>
  );
}
