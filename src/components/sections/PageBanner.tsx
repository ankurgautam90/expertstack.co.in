import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/sections/Breadcrumbs";

/** Compact banner for standalone company pages. */
export function PageBanner({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
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
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 max-w-3xl">
          <p className="eyebrow text-accent-300">{eyebrow}</p>
          <h1 className="mt-5 text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-base leading-relaxed text-navy-200 sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
