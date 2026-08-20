import { AboutSection } from "@/components/home/AboutSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ContactSection } from "@/components/home/ContactSection";
import { CoreSolutions } from "@/components/home/CoreSolutions";
import { DataCenterSection } from "@/components/home/DataCenterSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { NetworkSection } from "@/components/home/NetworkSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { RackServerSection } from "@/components/home/RackServerSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <CoreSolutions />
      <RackServerSection />
      <NetworkSection />
      <SecuritySection />
      <DataCenterSection />
      <ProcessSection />
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
