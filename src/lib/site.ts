/**
 * Single source of truth for brand-level strings.
 * Rename the company, change the phone number or swap the address here and the
 * whole site follows — nothing else hard-codes these values.
 */
export const site = {
  name: "Expertstack",
  legalName: "Expertstack Technologies",
  tagline: "Enterprise Infrastructure Solutions",
  description:
    "Enterprise-grade servers, networking, security and data center solutions built for performance, reliability and scalability.",
  url: "https://www.expertstack.co.in",
  contact: {
    email: "sales@expertstack.co.in",
    supportEmail: "support@expertstack.co.in",
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    address: {
      line1: "Corporate Office",
      line2: "Business District",
      city: "City",
      region: "State",
      postalCode: "000000",
      country: "India",
    },
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
