import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/lib/data/home";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <span
        aria-hidden="true"
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent-600/15 blur-[130px]"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Why us"
          title="Why Businesses Choose Us"
          description="No inflated numbers and no borrowed credentials — just the way we work, stated plainly, so you can hold us to it."
          tone="dark"
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-500/40 hover:bg-white/[0.07]">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-transparent transition-transform duration-500 ease-enterprise group-hover:scale-x-100"
                />
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-600/20 text-accent-300 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={reason.icon} size={21} />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
