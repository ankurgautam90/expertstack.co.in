import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PartnerSection } from "@/components/home/PartnerSection";
import { TechnologyLayersSection } from "@/components/home/TechnologyLayersSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { TechCategoryGrid } from "@/components/sections/TechCategoryGrid";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Compute, networking, security, cloud, data and software platforms — integrated and implemented as complete solutions.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Technology we integrate"
        title="Technology That Enables Your Business"
        description="Servers, switches, firewalls, storage and software platforms are components used to build complete solutions. We select them to fit the architecture, integrate them with the layers around them, and operate the result — we are not a catalogue."
        crumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
      />

      <TechCategoryGrid />
      <TechnologyLayersSection />
      <PartnerSection />
      <FinalCTA />
    </>
  );
}
