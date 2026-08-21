import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ValueChain } from "@/components/home/ValueChain";
import { ValuePillars } from "@/components/home/ValuePillars";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageBanner } from "@/components/sections/PageBanner";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.legalName} is a technology solutions and systems integration company — consulting, architecture, integration, implementation, cybersecurity, cloud and managed services.`,
};

const ROLES = [
  { label: "Technology Solutions Provider", icon: "blueprint" as const },
  { label: "Systems Integrator", icon: "workflow" as const },
  { label: "IT Consultant", icon: "eye" as const },
  { label: "Implementation Partner", icon: "layers" as const },
  { label: "Managed Services Provider", icon: "monitor" as const },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About us"
        title="Your Technology Integration Partner"
        description="We help organizations design, integrate, implement and manage modern technology environments by bringing together software, cloud, infrastructure, networking and cybersecurity."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* What we are */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How to think of us</p>
            <h2 className="mt-5 max-w-3xl font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              One partner across the whole technology lifecycle
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ROLES.map((role, index) => (
              <Reveal key={role.label} delay={index * 60}>
                <div className="h-full rounded-xl border border-navy-100 bg-surface-muted p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-accent-600 shadow-card">
                    <Icon name={role.icon} size={20} />
                  </span>
                  <p className="mt-5 font-display text-[0.9375rem] font-bold leading-snug text-navy-900">
                    {role.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ValueChain compact />
      <ValuePillars />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
