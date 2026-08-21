import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Icon } from "@/components/icons/Icon";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { DetailVisual } from "@/components/sections/DetailVisual";
import { Reveal } from "@/components/ui/Reveal";
import { getInsight, insights } from "@/lib/data/insights";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const insight = getInsight(params.slug);
  if (!insight) return { title: "Insight not found" };

  return { title: insight.title, description: insight.excerpt };
}

export default function InsightPage({ params }: Params) {
  const insight = getInsight(params.slug);
  if (!insight) notFound();

  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 3);

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-12 lg:pb-20 lg:pt-16">
        <span
          aria-hidden="true"
          className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-600/25 blur-[120px]"
        />

        <div className="container relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: insight.title },
            ]}
          />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
                <span className="text-accent-300">{insight.category}</span>
                <span className="h-3 w-px bg-white/20" />
                <span className="text-navy-400">{insight.readTime}</span>
              </div>
              <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.75rem]">
                {insight.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
                {insight.excerpt}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-6 backdrop-blur-sm">
              <DetailVisual
                visual={insight.visual}
                icon={insight.icon}
                className="h-full min-h-[12rem] w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white py-20 lg:py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-muted">
              {insight.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {insight.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 60}>
              <div className="mt-12">
                <h2 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-ink-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-14 rounded-2xl border border-navy-100 bg-surface-muted p-7">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                In short
              </p>
              <p className="mt-3 font-display text-lg font-bold leading-snug text-navy-900">
                {insight.takeaway}
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related */}
      <section className="bg-surface-muted py-20 lg:py-24">
        <div className="container">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            More insights
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <Link
                  href={`/insights/${item.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-6 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent-600">
                    <Icon name={item.icon} size={19} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold leading-snug text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">
                    {item.excerpt}
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
