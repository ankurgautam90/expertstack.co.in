import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";

export type LegalSection = { heading: string; paragraphs: string[] };

/** Simple prose layout with an in-page contents rail. */
export function LegalBody({ sections }: { sections: LegalSection[] }) {
  const anchor = (heading: string) =>
    heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
            On this page
          </p>
          <ul className="mt-4 space-y-2.5 border-l border-navy-100 pl-4">
            {sections.map((section) => (
              <li key={section.heading}>
                <a
                  href={`#${anchor(section.heading)}`}
                  className="text-[0.875rem] text-ink-muted transition-colors hover:text-accent-700"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-navy-100 bg-surface-muted p-5">
            <p className="flex items-start gap-2 text-[0.75rem] leading-relaxed text-ink-soft">
              <Icon name="check" size={15} className="mt-0.5 shrink-0 text-accent-600" />
              This text is a starting point. Have it reviewed by your legal adviser
              before publication.
            </p>
          </div>
        </aside>

        <div>
          {sections.map((section) => (
            <div
              key={section.heading}
              id={anchor(section.heading)}
              className="scroll-mt-28 border-b border-navy-100 py-8 first:pt-0 last:border-0"
            >
              <h2 className="font-display text-xl font-bold text-navy-900">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <ButtonLink href="/contact" size="lg" className="mt-10" withArrow>
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
