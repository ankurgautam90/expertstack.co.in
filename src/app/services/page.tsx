import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ManagedServicesSection } from "@/components/home/ManagedServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { ServiceCatalogue } from "@/components/sections/ServiceCatalogue";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Consulting, solution architecture, integration, implementation, security, managed services and technical support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="From Strategy to Operations"
        description="A single accountable team across the lifecycle. The engineers who understand the requirement design the architecture, integrate it, implement it — and stay on to run it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <ProcessSection />
      <ServiceCatalogue />
      <ManagedServicesSection />
      <FinalCTA />
    </>
  );
}
