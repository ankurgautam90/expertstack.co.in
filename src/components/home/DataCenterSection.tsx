import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DataCenterVisual } from "@/components/visuals/DataCenterVisual";

const ELEMENTS = [
  { icon: "datacenter" as const, label: "Server Racks" },
  { icon: "server" as const, label: "Servers" },
  { icon: "network" as const, label: "Switches" },
  { icon: "shield" as const, label: "Firewalls" },
  { icon: "storage" as const, label: "Storage" },
  { icon: "power" as const, label: "UPS" },
  { icon: "bolt" as const, label: "Power Distribution" },
  { icon: "cooling" as const, label: "Cooling" },
];

export function DataCenterSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <Reveal>
            <p className="eyebrow">Data center</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Build a Reliable Data Center
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-medium text-navy-700">
              From infrastructure design to deployment, build a reliable foundation for
              your digital operations.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ButtonLink href="/solutions/data-center-infrastructure" size="lg" withArrow>
              Data Center Solutions
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-2xl bg-navy-950">
            <DataCenterVisual className="w-full" />
            {/* Legend rail sitting over the artwork */}
            <div className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent px-8 pb-7 pt-16 lg:block">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-navy-400">
                Delivered as one build
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                {ELEMENTS.map((element) => (
                  <li
                    key={element.label}
                    className="flex items-center gap-2 text-[0.8125rem] font-medium text-navy-200"
                  >
                    <Icon name={element.icon} size={16} className="text-accent-400" />
                    {element.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Element grid — the legend, made touch-friendly below large screens */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {ELEMENTS.map((element) => (
            <div
              key={element.label}
              className="flex items-center gap-2.5 rounded-lg border border-navy-100 bg-surface-muted px-3.5 py-3"
            >
              <Icon name={element.icon} size={17} className="shrink-0 text-accent-600" />
              <span className="text-[0.8125rem] font-medium text-navy-800">
                {element.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
