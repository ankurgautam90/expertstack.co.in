import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageBanner } from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Requirement-first consulting, architecture-led design, integration expertise and accountability after go-live — how we work, stated plainly.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Why choose us"
        title="How we differ from a box supplier"
        description="Anyone can quote technology. The value is in understanding the requirement, designing an architecture that fits it, integrating the pieces so they work as one, and staying accountable afterwards."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "Why Choose Us" },
        ]}
      />
      <WhyChooseUs />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
