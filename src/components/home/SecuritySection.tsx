import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SecurityVisual } from "@/components/visuals/SecurityVisual";
import { securityCapabilities, securityLayers } from "@/lib/data/home";

/** The darkest section on the page — security reads as a change of register. */
export function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <span
        aria-hidden="true"
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent-600/20 blur-[130px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-ember-500/10 blur-[120px]"
      />

      <div className="container relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent-300">Cybersecurity</p>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Security Built Into Every Layer
          </h2>
          <p className="mt-5 leading-relaxed text-navy-200">
            Controls bought project by project leave gaps nobody owns. We design
            identity, access, network, endpoint, application and data protection as one
            architecture — then integrate it with the systems it is meant to protect.
          </p>
        </Reveal>

        {/* The six layers */}
        <Reveal delay={80}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {securityLayers.map((layer) => (
              <li
                key={layer.label}
                className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.8125rem] font-semibold text-white"
              >
                <Icon name={layer.icon} size={16} className="text-accent-300" />
                {layer.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {securityCapabilities.map((item, index) => (
              <Reveal key={item.title} delay={(index % 4) * 60}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-500 hover:border-accent-500/50 hover:bg-white/[0.07]">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-accent-600/20 text-accent-300 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-navy-300">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="relative lg:sticky lg:top-28">
            <SecurityVisual className="w-full drop-shadow-[0_30px_60px_rgba(5,14,27,0.6)]" />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/solutions/cybersecurity" size="lg" withArrow>
                Explore Solution
              </ButtonLink>
              <ButtonLink href="/contact" variant="onDark" size="lg">
                Talk to an Expert
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
