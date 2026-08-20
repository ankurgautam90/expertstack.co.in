import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RackServerVisual } from "@/components/visuals/RackServerVisual";

const FEATURES = [
  {
    icon: "chip" as const,
    title: "High-performance processors",
    body: "Single and dual socket platforms matched to thread and clock requirements.",
  },
  {
    icon: "layers" as const,
    title: "Enterprise memory",
    body: "ECC configurations populated across channels for full bandwidth.",
  },
  {
    icon: "storage" as const,
    title: "RAID storage",
    body: "SAS, SATA and NVMe with controller cache sized to the workload.",
  },
  {
    icon: "eye" as const,
    title: "Remote management",
    body: "Out-of-band controllers for console, power and firmware access.",
  },
  {
    icon: "server" as const,
    title: "Virtualization support",
    body: "Certified platforms for hypervisor clusters with failover headroom.",
  },
  {
    icon: "chart" as const,
    title: "Scalable configurations",
    body: "Memory, drive and slot headroom so growth is an upgrade, not a rebuild.",
  },
];

export function RackServerSection() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl bg-navy-950 p-8 sm:p-12">
            <span
              aria-hidden="true"
              className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-accent-600/25 blur-[100px]"
            />
            <RackServerVisual className="relative w-full" />

            <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { label: "Form factor", value: "1U – 4U" },
                { label: "Drive bays", value: "Hot-swap" },
                { label: "Power", value: "Redundant" },
              ].map((spec) => (
                <div key={spec.label}>
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy-400">
                    {spec.label}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-white">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Compute</p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Enterprise Rack Servers
            </h2>
            <p className="mt-5 text-lg font-medium text-navy-700">
              Reliable compute infrastructure for mission-critical workloads.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
              We specify server platforms against measured utilisation and the growth
              you expect, then build them to a repeatable standard so every host in the
              estate behaves the same way.
            </p>
          </Reveal>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 60}>
                <div className="flex gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent-50 text-accent-600">
                    <Icon name={feature.icon} size={18} />
                  </span>
                  <div>
                    <dt className="text-[0.9375rem] font-semibold text-navy-900">
                      {feature.title}
                    </dt>
                    <dd className="mt-1 text-[0.8125rem] leading-relaxed text-ink-soft">
                      {feature.body}
                    </dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/products/rack-servers" size="lg" withArrow>
                Explore Servers
              </ButtonLink>
              <ButtonLink href="/#contact" variant="secondary" size="lg">
                Request a Quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
