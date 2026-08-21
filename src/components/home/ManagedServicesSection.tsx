import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { managedServices } from "@/lib/data/home";

export function ManagedServicesSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <span
        aria-hidden="true"
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent-600/20 blur-[130px]"
      />

      <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-accent-300">Managed services</p>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
              Technology That Doesn&apos;t Stop at Deployment
            </h2>
            <p className="mt-5 leading-relaxed text-navy-200">
              Our services extend beyond implementation. We help organizations monitor,
              manage, secure and continuously improve their technology environments —
              so the estate keeps working the way it was designed to.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[0.9375rem] leading-relaxed text-navy-200">
                The team that designed and integrated the environment is the team that
                runs it. Nothing is handed to a support desk that has never seen it
                before.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/solutions/managed-it-services" size="lg" withArrow>
                Explore Solution
              </ButtonLink>
              <ButtonLink href="/contact" variant="onDark" size="lg">
                Start a Conversation
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {managedServices.map((service, index) => (
            <Reveal key={service.title} delay={(index % 4) * 60}>
              <div className="group h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-500 ease-enterprise hover:-translate-y-1 hover:border-accent-500/40 hover:bg-white/[0.07]">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-accent-600/20 text-accent-300 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={service.icon} size={18} />
                </span>
                <h3 className="mt-4 text-[0.9375rem] font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-navy-300">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
