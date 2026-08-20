import { ContactForm } from "@/components/forms/ContactForm";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const DETAILS = [
  {
    icon: "mail" as const,
    label: "Email",
    lines: [site.contact.email, site.contact.supportEmail],
  },
  {
    icon: "phone" as const,
    label: "Phone",
    lines: [site.contact.phone],
  },
  {
    icon: "location" as const,
    label: "Office",
    lines: [
      site.contact.address.line1,
      site.contact.address.line2,
      `${site.contact.address.city}, ${site.contact.address.region} ${site.contact.address.postalCode}`,
    ],
  },
  {
    icon: "clock" as const,
    label: "Hours",
    lines: [site.contact.hours],
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface-muted py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        {/* Context */}
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
              Send us your requirement
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted">
              Tell us what you are trying to build or fix. If the requirement is clear
              we will come back with a configuration and pricing; if it needs scoping,
              we will come back with questions rather than assumptions.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="mt-10 space-y-6 border-t border-navy-200/70 pt-8">
              {DETAILS.map((detail) => (
                <div key={detail.label} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-accent-600 shadow-card">
                    <Icon name={detail.icon} size={18} />
                  </span>
                  <div>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      {detail.label}
                    </dt>
                    <dd className="mt-1.5 space-y-0.5 text-[0.9375rem] text-navy-800">
                      {detail.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 rounded-xl border border-navy-200/70 bg-white p-6">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                Already running an environment?
              </p>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-navy-800">
                Ask for an infrastructure assessment. We document what you have, where
                the risk sits and what it would cost to fix — before anything is quoted.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
