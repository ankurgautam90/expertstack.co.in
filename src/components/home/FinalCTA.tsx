import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-white pb-20 pt-8 lg:pb-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy-950 px-7 py-16 text-center sm:px-14 lg:py-20">
            <span
              aria-hidden="true"
              className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-600/30 blur-[120px]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-16 h-72 w-72 rounded-full bg-ember-500/15 blur-[120px]"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="eyebrow justify-center text-accent-300">Next step</p>
              <h2 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl lg:text-[3rem]">
                Let&apos;s Solve the Right Problem
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
                Tell us what the business needs to achieve. We will come back with an
                approach — or with the questions that have to be answered first.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg" withArrow>
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href={site.contact.phoneHref} variant="onDark" size="lg">
                  Request a Consultation
                </ButtonLink>
              </div>

              <p className="mt-8 text-[0.8125rem] text-navy-400">
                Or email{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-medium text-navy-200 link-underline"
                >
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
