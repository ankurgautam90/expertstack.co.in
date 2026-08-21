import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { IntegrationEquation } from "@/components/home/IntegrationEquation";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { ValueChain } from "@/components/home/ValueChain";
import { WhatWeDo } from "@/components/home/WhatWeDo";

/**
 * A high-level overview only. The depth lives on /solutions, /services,
 * /technology, /industries and /about — this page exists to make the
 * proposition understandable in a few seconds.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <IntegrationEquation />
      <SolutionsGrid />
      <ValueChain />
      <IndustriesSection />
      <FinalCTA />
    </>
  );
}
