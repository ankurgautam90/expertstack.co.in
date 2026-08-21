import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talk to an Expert",
  description: `Discuss your requirement with ${site.legalName} — consulting, architecture, integration, cloud, cybersecurity and managed services.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Talk to an Expert"
        description="Tell us what the business needs to achieve. A consultant will come back with an approach, or with the questions that have to be answered first."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}
