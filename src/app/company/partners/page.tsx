import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PartnerSection } from "@/components/home/PartnerSection";
import { PageBanner } from "@/components/sections/PageBanner";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our technology ecosystem across server, networking, security, storage and virtualization platforms.",
};

export default function PartnersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Partners"
        title="Technology ecosystem"
        description="We source through authorised channels across the major enterprise platform categories. Partner marks and authorisation levels are published only once confirmed in writing."
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
