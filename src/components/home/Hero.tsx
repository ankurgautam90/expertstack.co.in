import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IntegrationStackVisual } from "@/components/visuals/IntegrationStackVisual";

/** The capabilities the business needs a visitor to register first. */
const PILLARS = [
  "Consulting",
  "Architecture",
  "Integration",
  "Cloud",
  "Cybersecurity",
  "Managed Services",
];

const SPEC_CHIPS = [
  { icon: "api" as const, label: "Applications", value: "Connected by design" },
  { icon: "cloud" as const, label: "Platform", value: "Private · public · hybrid" },
  { icon: "shield" as const, label: "Security", value: "Built into every layer" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Ground: blueprint grid, directional glow, soft vignette */}
      <span
        aria-hidden="true"
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent-600/25 blur-[140px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent-500/10 blur-[140px]"
      />

      <div className="container relative grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-28">
        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow text-accent-300 before:bg-ember-500">
              IT solutions &amp; systems integration
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-display-lg xl:text-[4rem]">
              Connecting Technology.{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">Enabling Business.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-accent-600/40 lg:bottom-2 lg:h-4"
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
              We design, integrate and manage technology solutions that help
              organizations build secure, scalable and efficient IT environments.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg" withArrow>
                Talk to an Expert
              </ButtonLink>
              <ButtonLink href="/solutions" variant="onDark" size="lg">
                Explore Solutions
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-7">
              {PILLARS.map((pillar) => (
                <li
                  key={pillar}
                  className="flex items-center gap-2.5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-300"
                >
                  <span className="h-1 w-1 rounded-full bg-ember-500" />
                  {pillar}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual — the architecture we integrate, not a piece of hardware */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute inset-x-8 bottom-6 top-10 rounded-2xl bg-accent-600/15 blur-2xl"
            />
            <IntegrationStackVisual className="relative mx-auto w-full drop-shadow-[0_40px_60px_rgba(5,14,27,0.6)]" />

            {/* Floating capability chips */}
            <div className="pointer-events-none absolute inset-0 hidden sm:block">
              {SPEC_CHIPS.map((chip, index) => (
                <div
                  key={chip.label}
                  style={{ top: `${10 + index * 34}%` }}
                  className={
                    index % 2 === 0
                      ? "absolute -left-4 flex items-center gap-3 rounded-lg border border-white/10 bg-navy-900/85 px-4 py-3 backdrop-blur-md lg:-left-8"
                      : "absolute -right-4 flex items-center gap-3 rounded-lg border border-white/10 bg-navy-900/85 px-4 py-3 backdrop-blur-md lg:-right-8"
                  }
                >
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-accent-600/20 text-accent-300">
                    <Icon name={chip.icon} size={17} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy-400">
                      {chip.label}
                    </span>
                    <span className="block text-[0.8125rem] font-semibold text-white">
                      {chip.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Base rule that hands off to the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
      />
    </section>
  );
}
