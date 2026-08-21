import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PartnerSection } from "@/components/home/PartnerSection";
import { PageBanner } from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our technology ecosystem across cloud, security, networking, compute, storage, software, virtualization and IT operations platforms.",
};

export default function PartnersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Partners"
        title="Technology ecosystem"
        description="We work across multiple technology platforms and select against the requirement rather than a preferred vendor. Partner marks and authorisation levels are published only once confirmed in writing."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "Partners" },
        ]}
      />
      <PartnerSection />
      <FinalCTA />
    </>
  );
}
