import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageBanner } from "@/components/sections/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.legalName} is a technology solutions and systems integration company — consulting, architecture, integration, cloud, cybersecurity and managed services.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About us"
        title="A systems integrator, not a reseller"
        description="We are measured on whether the whole environment works end to end — not on what was delivered. That difference shapes how we scope, what we integrate and what we commit to afterwards."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <ProcessSection />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
