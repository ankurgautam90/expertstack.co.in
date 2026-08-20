import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NetworkSwitchVisual } from "@/components/visuals/NetworkSwitchVisual";

const PRODUCTS = [
  { title: "Managed Switches", body: "Full configuration, monitoring and backup control." },
  { title: "Layer 2 Switches", body: "Access-layer density with VLAN and PoE support." },
  { title: "Layer 3 Switches", body: "Inter-VLAN routing at the distribution layer." },
  { title: "Data Center Switches", body: "Low-latency top-of-rack and spine connectivity." },
  { title: "PoE Switches", body: "Power budgets sized for phones, APs and cameras." },
  { title: "Enterprise Switching", body: "Stackable and chassis platforms for the core." },
];

export function NetworkSection() {
  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Networking"
          title="Connect Your Enterprise"
          description="Deploy reliable network switching infrastructure designed for high availability, performance and scalability — with the VLAN plan, port map and cabling documented as part of the build."
          action={
            <ButtonLink href="/products/network-switches" size="lg" withArrow>
              Explore Networking
            </ButtonLink>
          }
        />

        {/* Wide equipment visual */}
        <Reveal delay={100}>
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-navy-950 px-6 py-10 sm:px-12 sm:py-14">
            <span
              aria-hidden="true"
              className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-1/4 -top-24 h-56 rounded-full bg-accent-600/25 blur-[100px]"
            />
            <NetworkSwitchVisual className="relative mx-auto w-full max-w-4xl" />

            <div className="relative mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                {
                  icon: "network" as const,
                  title: "Redundant uplinks",
                  body: "No single link carries a site on its own.",
                },
                {
                  icon: "power" as const,
                  title: "PoE budgeted",
                  body: "Power planned for the full endpoint roadmap.",
                },
                {
                  icon: "blueprint" as const,
                  title: "Documented ports",
                  body: "Labelled patching and a maintained port map.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-accent-300">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-navy-300">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Product lines */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.title} delay={(index % 3) * 70}>
              <div className="group h-full rounded-xl border border-navy-100 bg-white p-6 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {product.title}
                  </h3>
                  <Icon
                    name="arrowUpRight"
                    size={16}
                    className="text-navy-200 transition-colors duration-300 group-hover:text-accent-600"
                  />
                </div>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">
                  {product.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
