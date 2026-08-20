import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { LegalBody } from "@/components/sections/LegalBody";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms governing use of the ${site.legalName} website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`The terms under which this website is provided by ${site.legalName}.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Company" },
          { label: "Terms & Conditions" },
        ]}
      />

      <LegalBody
        sections={[
          {
            heading: "Use of this website",
            paragraphs: [
              "This website is provided for general information about our solutions, products and services. You may browse it and submit enquiries; you may not use it in any way that interferes with its operation or with other users.",
            ],
          },
          {
            heading: "Information accuracy",
            paragraphs: [
              "Product descriptions, specifications and capability statements on this site are indicative. Configurations, availability, lead times and pricing are confirmed only in a written quotation issued by us.",
            ],
          },
          {
            heading: "Quotations and orders",
            paragraphs: [
              "Nothing on this website constitutes an offer to sell. Any supply of goods or services is governed by the specific quotation, purchase order and contract agreed between the parties.",
            ],
          },
          {
            heading: "Intellectual property",
            paragraphs: [
              `The content, design and artwork on this site are the property of ${site.legalName} unless stated otherwise. Third-party trade marks referenced anywhere on this site remain the property of their respective owners.`,
            ],
          },
          {
            heading: "Liability",
            paragraphs: [
              "We take reasonable care to keep this website accurate and available, but we do not warrant that it will be uninterrupted or error-free. To the extent permitted by law, we are not liable for loss arising from reliance on information published here in place of a written quotation or contract.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: [
              `Questions about these terms can be sent to ${site.contact.email}.`,
            ],
          },
        ]}
      />
    </>
  );
}
