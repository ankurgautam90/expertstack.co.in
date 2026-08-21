import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnerCategories } from "@/lib/data/home";

/**
 * Ecosystem section. Logo slots are intentionally empty placeholders — real
 * vendor marks should only go in once authorisation is confirmed in writing.
 * Drop an <Image> (or inline SVG) into the slot below to populate.
 */
export function PartnerSection() {
  return (
    <section id="partners" className="bg-surface-muted py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Technology Ecosystem"
          description="We work across multiple technology platforms to design solutions based on customer requirements — including keeping what already works. Vendor marks appear here once the corresponding authorisation is confirmed."
          align="center"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {partnerCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 2) * 60}>
              <div className="h-full rounded-xl border border-navy-100 bg-white p-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-900 text-white">
                    <Icon name={category.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-900">
                      {category.title}
                    </h3>
                    <p className="mt-0.5 text-[0.8125rem] text-ink-soft">
                      {category.body}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: category.slots }, (_, slot) => (
                    <li
                      key={slot}
                      className="flex h-14 items-center justify-center rounded-lg border border-dashed border-navy-200 bg-surface-muted text-[0.625rem] font-medium uppercase tracking-[0.12em] text-ink-soft"
                    >
                      Logo slot
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[0.8125rem] leading-relaxed text-ink-soft">
            We are platform-independent by design. Technology is selected against the
            requirement — partner logos, certifications and authorisation levels are
            published only after they are confirmed in writing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
