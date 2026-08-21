import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { navigation } from "@/lib/navigation";

export default function NotFound() {
  const quickLinks = navigation
    .flatMap((item) => item.menu?.columns.flatMap((column) => column.links) ?? [])
    .slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <span
        aria-hidden="true"
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-600/20 blur-[130px]"
      />

      <div className="container relative max-w-3xl text-center">
        <p className="eyebrow justify-center text-accent-300">Error 404</p>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
          This page is not in the rack
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-navy-200">
          The address you followed does not match anything on this site. Try one of the
          areas below, or send us the requirement directly.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" withArrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="onDark" size="lg">
            Talk to an Expert
          </ButtonLink>
        </div>

        <ul className="mx-auto mt-14 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {quickLinks.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:border-accent-500/50 hover:bg-white/[0.07]"
              >
                <span className="flex items-center gap-3 text-sm font-medium text-white">
                  {link.icon ? (
                    <Icon name={link.icon} size={17} className="text-accent-300" />
                  ) : null}
                  {link.label}
                </span>
                <Icon
                  name="arrowRight"
                  size={15}
                  className="text-navy-400 transition-transform duration-300 ease-enterprise group-hover:translate-x-1 group-hover:text-white"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
