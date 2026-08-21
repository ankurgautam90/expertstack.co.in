/**
 * Single source of truth for brand-level strings.
 * Rename the company or change the contact details here and the whole site
 * follows — nothing else hard-codes these values.
 */
export const site = {
  name: "Expertstack",
  legalName: "Expertstack Technologies",
  tagline: "IT Solutions & Systems Integration",
  description:
    "We design, integrate and manage secure technology solutions that connect applications, infrastructure, cloud and business operations.",
  url: "https://www.expertstack.co.in",
  contact: {
    email: "sales@expertstack.co.in",
    supportEmail: "support@expertstack.co.in",
    hours: "Monday – Saturday, 09:30 – 18:30",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/company/privacy-policy" },
  { label: "Terms & Conditions", href: "/company/terms-and-conditions" },
];
