import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Icon } from "@/components/icons/Icon";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { DetailVisual } from "@/components/sections/DetailVisual";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  sectionMeta,
  type CatalogSection,
  type DetailPage,
} from "@/lib/data/catalog";

/**
 * Shared template behind every Solutions / Products / Services / Industries
 * page. Content lives in the catalogue; this only decides how it is presented.
 */
export function DetailPageView({
  section,
  page,
  siblings,
}: {
  section: CatalogSection;
  page: DetailPage;
  siblings: DetailPage[];
}) {
  const meta = sectionMeta[section];
  const anchors: Record<CatalogSection, string> = {
    solutions: "/#solutions",
    technology: "/#technology",
    services: "/#process",
    industries: "/#industries",
  };
  const sectionHref = anchors[section];

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-12 lg:pb-24 lg:pt-16">
        <span
          aria-hidden="true"
          className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-accent-600/25 blur-[130px]"
        />

        <div className="container relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: meta.label, href: sectionHref },
              { label: page.label },
            ]}
          />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <p className="eyebrow text-accent-300">{meta.eyebrow}</p>
              <h1 className="mt-5 text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
                {page.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
                {page.summary}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg" withArrow>
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href="/#process" variant="onDark" size="lg">
                  How we deliver
                </ButtonLink>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-6 backdrop-blur-sm sm:p-8">
                <DetailVisual
                  visual={page.visual}
                  icon={page.icon}
                  className="h-full w-full min-h-[13rem] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative + capabilities */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Overview</p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {page.highlights.map((highlight, index) => (
                <Reveal key={highlight.title} delay={index * 80}>
                  <div className="h-full rounded-xl border border-navy-100 bg-surface-muted p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-accent-600 shadow-card">
                      <Icon name={highlight.icon} size={19} />
                    </span>
                    <h3 className="mt-4 text-[0.9375rem] font-bold text-navy-900">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">
                      {highlight.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-navy-100 bg-surface-muted p-7 lg:sticky lg:top-28">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                What this covers
              </p>
              <ul className="mt-5 space-y-3.5">
                {page.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3">
                    <Icon
                      name="check"
                      size={18}
                      className="mt-0.5 shrink-0 text-accent-600"
                    />
                    <span className="text-[0.9375rem] leading-snug text-navy-800">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-navy-200/70 pt-6">
                <p className="text-[0.875rem] leading-relaxed text-ink-muted">
                  Tell us what the business needs to achieve and we will come back
                  with an approach — or with the questions we need answered first.
                </p>
                <ButtonLink href="/contact" size="md" className="mt-5 w-full" withArrow>
                  Talk to an Expert
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Siblings */}
      <section className="bg-surface-muted py-20 lg:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Related"
            title={`More in ${meta.label}`}
            description={meta.intro}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((sibling, index) => (
              <Reveal key={sibling.slug} delay={index * 80}>
                <Link
                  href={`/${section}/${sibling.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-6 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent-600">
                    <Icon name={sibling.icon} size={19} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                    {sibling.label}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">
                    {sibling.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.8125rem] font-semibold text-accent-600">
                    Read more
                    <Icon
                      name="arrowRight"
                      size={15}
                      className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
