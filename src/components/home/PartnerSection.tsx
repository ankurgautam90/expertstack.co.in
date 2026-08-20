import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnerCategories } from "@/lib/data/home";

/**
 * Ecosystem section. Logo slots are intentionally empty placeholders — real
 * brand marks should only go in once partner authorisation is confirmed.
 * Drop an <Image> (or inline SVG) into the slot below to populate.
 */
export function PartnerSection() {
  return (
    <section id="partners" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Technology Ecosystem"
          description="We work across the major enterprise platform categories and source through authorised channels. Partner marks are shown here once the corresponding authorisation is confirmed."
          align="center"
        />

        <div className="mt-14 space-y-4">
          {partnerCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 60}>
              <div className="grid items-center gap-6 rounded-xl border border-navy-100 bg-surface-muted p-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-10 lg:p-7">
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

                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: category.slots }, (_, slot) => (
                    <li
                      key={slot}
                      className="flex h-16 items-center justify-center rounded-lg border border-dashed border-navy-200 bg-white text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-ink-soft"
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
          <p className="mt-8 text-center text-[0.8125rem] text-ink-soft">
            Partner logos, certifications and authorisation levels are published only
            after they are confirmed in writing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
