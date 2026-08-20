import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/lib/navigation";
import { legalLinks, site } from "@/lib/site";

export function Footer() {
  const { contact, address } = { contact: site.contact, address: site.contact.address };

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <span
        aria-hidden="true"
        className="grid-blueprint pointer-events-none absolute inset-0 opacity-60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-accent-600/20 blur-[120px]"
      />

      <div className="container relative">
        {/* Top band: identity + contact */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Logo tone="light" showTagline />
            <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-navy-300">
              We design, supply, deploy and support enterprise IT infrastructure —
              compute, networking, security, storage and data center environments
              built to run reliably at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/#contact" size="md" withArrow>
                Request a Quote
              </ButtonLink>
              <ButtonLink href={contact.phoneHref} variant="onDark" size="md">
                <Icon name="phone" size={16} />
                Talk to an Expert
              </ButtonLink>
            </div>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2 lg:pt-2">
            <div className="flex gap-3">
              <Icon name="location" size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-navy-400">
                  Office
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-navy-200">
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.city}, {address.region} {address.postalCode}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-navy-400">
                  Enquiries
                </dt>
                <dd className="mt-1.5 space-y-1 text-sm text-navy-200">
                  <a
                    href={`mailto:${contact.email}`}
                    className="block transition-colors hover:text-white"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`mailto:${contact.supportEmail}`}
                    className="block transition-colors hover:text-white"
                  >
                    {contact.supportEmail}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-navy-400">
                  Phone
                </dt>
                <dd className="mt-1.5 text-sm text-navy-200">
                  <a
                    href={contact.phoneHref}
                    className="transition-colors hover:text-white"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-navy-400">
                  Hours
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-navy-200">
                  {contact.hours}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="grid gap-10 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={column.heading + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-300 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Legal bar */}
        <div className="flex flex-col gap-4 py-8 text-[0.8125rem] text-navy-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <span className="hidden h-3 w-px bg-white/15 md:block" />
            {site.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
