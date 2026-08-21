import type { Metadata } from "next";
import { AppIntegrationSection } from "@/components/home/AppIntegrationSection";
import { CloudSection } from "@/components/home/CloudSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { IntegrationSection } from "@/components/home/IntegrationSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { PageBanner } from "@/components/sections/PageBanner";
import { SolutionBlocks } from "@/components/sections/SolutionBlocks";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Cloud and infrastructure, software and application integration, cybersecurity, enterprise networking, data and storage, and managed IT services.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Solutions"
        title="Technology Solutions for Modern Enterprises"
        description="We integrate multiple technologies to solve business and IT challenges — bringing software, cloud, infrastructure, networking and security into one environment that can be secured, scaled and operated."
        crumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <SolutionBlocks />
      <IntegrationSection />
      <AppIntegrationSection />
      <CloudSection />
      <SecuritySection />
      <FinalCTA />
    </>
  );
}
