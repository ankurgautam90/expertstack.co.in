import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceList } from "@/lib/data/home";

export function ServiceCatalogue() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="What We Are Engaged To Do"
          description="Any of these can be a standalone engagement, or a stage within a larger programme we run end to end."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceList.map((service, index) => (
            <Reveal key={service.label} delay={(index % 5) * 50}>
              <Link
                href={service.href}
                className="group flex h-full items-center gap-3 rounded-xl border border-navy-100 bg-surface-muted px-4 py-4 transition-all duration-300 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:bg-white hover:shadow-card"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-accent-600 shadow-card transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={service.icon} size={17} />
                </span>
                <span className="text-[0.8125rem] font-semibold leading-tight text-navy-800">
                  {service.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
