import { AboutSection } from "@/components/home/AboutSection";
import { AppIntegrationSection } from "@/components/home/AppIntegrationSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ChallengeSection } from "@/components/home/ChallengeSection";
import { CloudSection } from "@/components/home/CloudSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CoreSolutions } from "@/components/home/CoreSolutions";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { IntegrationSection } from "@/components/home/IntegrationSection";
import { ManagedServicesSection } from "@/components/home/ManagedServicesSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { TechnologyLayersSection } from "@/components/home/TechnologyLayersSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

/**
 * The homepage follows one narrative:
 * challenge → solution → integration → technology → implementation →
 * operations → outcome.
 */
export default function HomePage() {
  return (
    <>
      {/* 1 — the business challenge */}
      <Hero />
      <ChallengeSection />

      {/* 2 — what we solve it with */}
      <SolutionsGrid />
      <CoreSolutions />

      {/* 3–4 — the technologies involved and how we connect them */}
      <IntegrationSection />
      <AppIntegrationSection />
      <CloudSection />
      <SecuritySection />
      <TechnologyLayersSection />

      {/* 5–6 — how it is delivered and then operated */}
      <ProcessSection />
      <ManagedServicesSection />

      {/* 7 — the business outcome */}
      <IndustriesSection />
      <WhyChooseUs />
      <PartnerSection />
      <CaseStudiesSection />
      <AboutSection />
      <FinalCTA />
      <ContactSection />
    </>
  );
}
