import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageBanner } from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Enterprise expertise, reliable technology, end-to-end delivery and contracted support — how we work, stated plainly.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Why choose us"
        title="How we are different to a box supplier"
        description="Anyone can quote hardware. The value is in specifying it correctly, deploying it properly and being accountable for it afterwards."
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
