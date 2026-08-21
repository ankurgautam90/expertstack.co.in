import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";

const INPUTS = [
  { label: "Software", icon: "apps" as const },
  { label: "Cloud", icon: "cloud" as const },
  { label: "Infrastructure", icon: "server" as const },
  { label: "Networking", icon: "network" as const },
  { label: "Security", icon: "shield" as const },
];

const OUTCOMES = ["Scale", "Modernise", "Secure", "Automate", "Operate simply"];

/**
 * The one-glance statement of what the company does: separate technologies in,
 * one integrated environment out, business outcomes at the end.
 */
export function IntegrationEquation() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      <span aria-hidden="true" className="grid-blueprint pointer-events-none absolute inset-0 opacity-70" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-1/4 -top-24 h-64 rounded-full bg-accent-600/25 blur-[120px]"
      />

      <div className="container relative">
        <Reveal className="text-center">
          <p className="eyebrow eyebrow--center justify-center text-accent-300">
            What we actually do
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
            We don&apos;t just provide technology.{" "}
            <span className="text-accent-300">We integrate it.</span>
          </h2>
        </Reveal>

        {/* Inputs */}
        <Reveal delay={80}>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap items-stretch justify-center gap-3">
            {INPUTS.map((input, index) => (
              <li key={input.label} className="flex items-center gap-3">
                <span className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3">
                  <Icon name={input.icon} size={18} className="text-accent-300" />
                  <span className="text-[0.875rem] font-semibold text-white">{input.label}</span>
                </span>
                {index < INPUTS.length - 1 ? (
                  <span aria-hidden="true" className="hidden text-lg font-light text-navy-500 sm:inline">
                    +
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Arrow */}
        <Reveal delay={140}>
          <div className="flex justify-center py-6" aria-hidden="true">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/40 bg-accent-600/15">
              <Icon name="chevronDown" size={20} className="text-accent-300" />
            </span>
          </div>
        </Reveal>

        {/* The integrated environment */}
        <Reveal delay={180}>
          <div className="mx-auto max-w-2xl rounded-2xl border border-accent-500/40 bg-accent-600/10 px-8 py-7 text-center backdrop-blur-sm">
            <p className="font-display text-xl font-bold text-white sm:text-2xl">
              One Integrated Technology Environment
            </p>
            <p className="mt-2 text-[0.9375rem] text-navy-200">
              Designed once, connected end to end, and operated as a single system.
            </p>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="flex justify-center py-6" aria-hidden="true">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/40 bg-accent-600/15">
              <Icon name="chevronDown" size={20} className="text-accent-300" />
            </span>
          </div>
        </Reveal>

        {/* Outcomes */}
        <Reveal delay={260}>
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {OUTCOMES.map((outcome) => (
              <li
                key={outcome}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[0.8125rem] font-semibold text-navy-200"
              >
                <Icon name="check" size={15} className="text-accent-400" />
                {outcome}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-navy-400">
            Business outcomes
          </p>
        </Reveal>
      </div>
    </section>
  );
}
