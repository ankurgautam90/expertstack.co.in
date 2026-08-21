import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatWeDo } from "@/lib/data/home";

export function WhatWeDo() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <span
        aria-hidden="true"
        className="grid-blueprint-light pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40 mask-fade-b"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="What we do"
          title="Technology Solutions Built Around Your Business"
          description="We bring software, cloud, infrastructure, networking and security together into environments that are secure, scalable and possible to operate."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 70}>
              <div className="group h-full rounded-xl border border-navy-100 bg-surface-muted p-6 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:bg-white hover:shadow-card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-accent-600 shadow-card transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
