import type { IconName } from "@/components/icons/Icon";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: IconName;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  /** Rich mega-menu panel. Absent for simple links such as Home. */
  menu?: {
    /** Left-hand promotional rail inside the panel. */
    feature: {
      eyebrow: string;
      title: string;
      body: string;
      href: string;
      cta: string;
    };
    columns: NavColumn[];
  };
};

/**
 * Corporate navigation: a small number of top-level business areas, each
 * opening a structured panel. Kept deliberately shallow — two levels, no more.
 */
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/#core-solutions",
    menu: {
      feature: {
        eyebrow: "Solution areas",
        title: "Infrastructure designed as one system",
        body: "Compute, network, security and storage planned together so capacity, resilience and support all line up.",
        href: "/#core-solutions",
        cta: "See how we build",
      },
      columns: [
        {
          heading: "By capability",
          links: [
            {
              label: "Compute Infrastructure",
              href: "/solutions/compute-infrastructure",
              description: "Rack servers, virtualization hosts and GPU nodes",
              icon: "server",
            },
            {
              label: "Network Infrastructure",
              href: "/solutions/network-infrastructure",
              description: "Campus, branch and data center switching",
              icon: "network",
            },
            {
              label: "Network Security",
              href: "/solutions/network-security",
              description: "Firewalls, segmentation and secure access",
              icon: "shield",
            },
          ],
        },
        {
          heading: "By platform",
          links: [
            {
              label: "Storage Solutions",
              href: "/solutions/storage-solutions",
              description: "SAN, NAS, backup and data protection",
              icon: "storage",
            },
            {
              label: "Data Center Infrastructure",
              href: "/solutions/data-center-infrastructure",
              description: "Racks, power, cooling and cabling",
              icon: "datacenter",
            },
            {
              label: "Virtualization",
              href: "/solutions/virtualization",
              description: "Hypervisor platforms and consolidation",
              icon: "layers",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Products",
    href: "/#categories",
    menu: {
      feature: {
        eyebrow: "Hardware catalogue",
        title: "Specified for the workload, not the price list",
        body: "Configurations sized against real utilisation, with a clear upgrade path and supported lifecycle.",
        href: "/#contact",
        cta: "Request a configuration",
      },
      columns: [
        {
          heading: "Core hardware",
          links: [
            {
              label: "Rack Servers",
              href: "/products/rack-servers",
              description: "1U – 4U enterprise compute",
              icon: "server",
            },
            {
              label: "Network Switches",
              href: "/products/network-switches",
              description: "Access, aggregation and core",
              icon: "network",
            },
            {
              label: "Firewalls",
              href: "/products/firewalls",
              description: "Next-generation perimeter and internal",
              icon: "shield",
            },
          ],
        },
        {
          heading: "Storage & accessories",
          links: [
            {
              label: "Storage",
              href: "/products/storage",
              description: "Block, file and backup appliances",
              icon: "storage",
            },
            {
              label: "Server Accessories",
              href: "/products/server-accessories",
              description: "Memory, drives, controllers, rails",
              icon: "chip",
            },
            {
              label: "Network Accessories",
              href: "/products/network-accessories",
              description: "Optics, cabling, PDUs, patching",
              icon: "cable",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Services",
    href: "/#process",
    menu: {
      feature: {
        eyebrow: "Delivery",
        title: "From design review to signed handover",
        body: "The team that scopes the environment is the team that racks, configures and supports it.",
        href: "/#process",
        cta: "See our delivery model",
      },
      columns: [
        {
          heading: "Build",
          links: [
            {
              label: "IT Infrastructure",
              href: "/services/it-infrastructure",
              description: "Assessment, architecture and roadmap",
              icon: "blueprint",
            },
            {
              label: "Server Deployment",
              href: "/services/server-deployment",
              description: "Racking, firmware, OS and hypervisor",
              icon: "server",
            },
            {
              label: "Network Deployment",
              href: "/services/network-deployment",
              description: "Switching, routing, wireless, VLANs",
              icon: "network",
            },
            {
              label: "Firewall Deployment",
              href: "/services/firewall-deployment",
              description: "Policy design, rollout and tuning",
              icon: "shield",
            },
          ],
        },
        {
          heading: "Operate",
          links: [
            {
              label: "Data Center Services",
              href: "/services/data-center-services",
              description: "Server room and DC build-out",
              icon: "datacenter",
            },
            {
              label: "Migration",
              href: "/services/migration",
              description: "Workload, storage and site moves",
              icon: "migrate",
            },
            {
              label: "AMC & Support",
              href: "/services/amc-support",
              description: "Contracted maintenance and spares",
              icon: "support",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/#industries",
    menu: {
      feature: {
        eyebrow: "Sector experience",
        title: "The constraints change with the sector",
        body: "Regulated uptime, procurement rules, clinical hours or shop-floor conditions all shape the design.",
        href: "/#industries",
        cta: "Browse industries",
      },
      columns: [
        {
          heading: "Regulated",
          links: [
            { label: "Banking & Finance", href: "/industries/banking-finance", icon: "bank" },
            { label: "Government & PSU", href: "/industries/government-psu", icon: "government" },
            { label: "Healthcare", href: "/industries/healthcare", icon: "health" },
            { label: "Education", href: "/industries/education", icon: "education" },
          ],
        },
        {
          heading: "Commercial",
          links: [
            { label: "Manufacturing", href: "/industries/manufacturing", icon: "factory" },
            { label: "IT & ITES", href: "/industries/it-ites", icon: "code" },
            { label: "Retail", href: "/industries/retail", icon: "retail" },
            { label: "Data Centers", href: "/industries/data-centers", icon: "datacenter" },
          ],
        },
      ],
    },
  },
  {
    label: "Company",
    href: "/company/about-us",
    menu: {
      feature: {
        eyebrow: "About us",
        title: "A system integrator, not a reseller",
        body: "We are measured on whether the environment runs — not on what left the warehouse.",
        href: "/company/about-us",
        cta: "About the company",
      },
      columns: [
        {
          heading: "Who we are",
          links: [
            {
              label: "About Us",
              href: "/company/about-us",
              description: "What we do and how we work",
              icon: "building",
            },
            {
              label: "Why Choose Us",
              href: "/company/why-choose-us",
              description: "How we are different to a box supplier",
              icon: "check",
            },
            {
              label: "Partners",
              href: "/company/partners",
              description: "Our technology ecosystem",
              icon: "handshake",
            },
          ],
        },
        {
          heading: "Proof & contact",
          links: [
            {
              label: "Case Studies",
              href: "/company/case-studies",
              description: "Deployments and outcomes",
              icon: "chart",
            },
            {
              label: "Contact",
              href: "/#contact",
              description: "Talk to an engineer",
              icon: "mail",
            },
          ],
        },
      ],
    },
  },
];

/** Footer link groups. Deliberately flatter than the header. */
export const footerColumns: NavColumn[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Compute", href: "/solutions/compute-infrastructure" },
      { label: "Networking", href: "/solutions/network-infrastructure" },
      { label: "Security", href: "/solutions/network-security" },
      { label: "Storage", href: "/solutions/storage-solutions" },
      { label: "Data Center", href: "/solutions/data-center-infrastructure" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Rack Servers", href: "/products/rack-servers" },
      { label: "Switches", href: "/products/network-switches" },
      { label: "Firewalls", href: "/products/firewalls" },
      { label: "Storage", href: "/products/storage" },
      { label: "Accessories", href: "/products/server-accessories" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Infrastructure", href: "/services/it-infrastructure" },
      { label: "Deployment", href: "/services/server-deployment" },
      { label: "Migration", href: "/services/migration" },
      { label: "AMC", href: "/services/amc-support" },
      { label: "Support", href: "/services/amc-support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about-us" },
      { label: "Industries", href: "/#industries" },
      { label: "Partners", href: "/company/partners" },
      { label: "Case Studies", href: "/company/case-studies" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];
