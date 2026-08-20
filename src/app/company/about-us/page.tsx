import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageBanner } from "@/components/sections/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.legalName} designs, supplies, deploys and supports enterprise IT infrastructure — compute, networking, security, storage and data center environments.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About us"
        title="A system integrator, not a reseller"
        description="We are measured on whether the environment runs — not on what left the warehouse. That difference shapes how we scope, how we deploy and what we commit to afterwards."
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
