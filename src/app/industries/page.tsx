import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { IndustryBlocks } from "@/components/sections/IndustryBlocks";
import { PageBanner } from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Banking and finance, government and PSU, healthcare, manufacturing, energy and utilities, education, IT and ITES, and retail.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Industries"
        title="Technology Solutions for Every Business Environment"
        description="The technology overlaps across sectors — the constraints do not. Each of these starts from the business challenge rather than a list of platforms."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <IndustryBlocks />
      <FinalCTA />
    </>
  );
}
