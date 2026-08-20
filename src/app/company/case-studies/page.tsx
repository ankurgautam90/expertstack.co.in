import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Icon } from "@/components/icons/Icon";
import { PageBanner } from "@/components/sections/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { DetailVisual } from "@/components/sections/DetailVisual";
import { caseStudies } from "@/lib/data/home";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative infrastructure engagements — the challenge, the solution deployed and the resulting change.",
};

const ROWS = [
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "result", label: "Result" },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Case studies"
        title="Infrastructure built for real-world challenges"
        description="Representative engagements, described by what was wrong, what was built and what changed as a result. Client names are withheld unless we have permission to publish them."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "Case Studies" },
        ]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="container space-y-14">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} as="article">
              <div
                id={study.slug}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy-100 shadow-card"
              >
                <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
                  <div className="relative min-h-[14rem] bg-navy-950 p-8">
                    <span className="absolute inset-0 block">
                      <DetailVisual
                        visual={study.variant}
                        icon={study.icon}
                        className="h-full w-full"
                      />
                    </span>
                    <div className="relative flex h-full flex-col justify-between">
                      <span className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur-sm">
                        {study.sector}
                      </span>
                      <span className="font-display text-5xl font-extrabold text-white/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-8 lg:p-10">
                    <h2 className="font-display text-2xl font-bold text-navy-900">
                      {study.title}
                    </h2>
                    <p className="mt-2 text-[0.9375rem] text-ink-soft">
                      {study.summary}
                    </p>

                    <dl className="mt-8 space-y-6">
                      {ROWS.map((row) => (
                        <div key={row.key} className="border-l-2 border-accent-500 pl-5">
                          <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-600">
                            {row.label}
                          </dt>
                          <dd className="mt-2 leading-relaxed text-ink-muted">
                            {study[row.key]}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-8 flex items-start gap-2 rounded-lg bg-surface-muted px-4 py-3 text-[0.8125rem] leading-relaxed text-ink-soft">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent-600" />
                      Engagement details are described in general terms. We can walk
                      through the specifics, including the bill of materials and the
                      deployment plan, on a call.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
