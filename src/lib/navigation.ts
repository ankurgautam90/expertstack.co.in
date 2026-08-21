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
  /** Rich mega-menu panel. Absent for simple links such as Home or Contact. */
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
 * Corporate navigation for a systems integrator: solution areas first, the
 * service lifecycle second, then who we serve and what we build on.
 * Deliberately two levels deep — no more.
 */
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/#solutions",
    menu: {
      feature: {
        eyebrow: "Solution areas",
        title: "One environment, not six disconnected projects",
        body: "Cloud, applications, identity, network and data designed together so they actually work as a single system.",
        href: "/#integration",
        cta: "How we integrate",
      },
      columns: [
        {
          heading: "Platform & applications",
          links: [
            {
              label: "Cloud & Infrastructure",
              href: "/solutions/cloud-infrastructure",
              description: "Private, hybrid, migration and modernization",
              icon: "cloud",
            },
            {
              label: "Software & Application Integration",
              href: "/solutions/application-integration",
              description: "APIs, middleware, enterprise applications",
              icon: "api",
            },
            {
              label: "Data & Storage",
              href: "/solutions/data-storage",
              description: "Data management, backup and recovery",
              icon: "storage",
            },
          ],
        },
        {
          heading: "Secure & operate",
          links: [
            {
              label: "Cybersecurity",
              href: "/solutions/cybersecurity",
              description: "Identity, access, network and endpoint",
              icon: "shield",
            },
            {
              label: "Enterprise Networking",
              href: "/solutions/enterprise-networking",
              description: "Architecture, LAN/WAN, SD-WAN, wireless",
              icon: "network",
            },
            {
              label: "Managed IT Services",
              href: "/solutions/managed-it-services",
              description: "Monitoring, operations and support",
              icon: "monitor",
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
        eyebrow: "Engagement model",
        title: "From strategy to operations",
        body: "The team that designs the architecture is the team that implements it and stays on to run it.",
        href: "/#process",
        cta: "See how we work",
      },
      columns: [
        {
          heading: "Design & build",
          links: [
            {
              label: "Consulting",
              href: "/services/consulting",
              description: "Assessment, requirements and roadmap",
              icon: "eye",
            },
            {
              label: "Solution Architecture",
              href: "/services/architecture",
              description: "Target design and technology selection",
              icon: "blueprint",
            },
            {
              label: "Technology Integration",
              href: "/services/integration",
              description: "Connecting platforms into one environment",
              icon: "workflow",
            },
            {
              label: "Implementation",
              href: "/services/implementation",
              description: "Build, test, migrate and deploy",
              icon: "layers",
            },
          ],
        },
        {
          heading: "Secure & run",
          links: [
            {
              label: "Security Services",
              href: "/services/security",
              description: "Hardening, controls and assurance",
              icon: "shield",
            },
            {
              label: "Managed Services",
              href: "/services/managed-services",
              description: "Monitoring, operations and improvement",
              icon: "monitor",
            },
            {
              label: "Support & AMC",
              href: "/services/support",
              description: "Contracted response and maintenance",
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
        body: "Regulated uptime, procurement rules, clinical hours or plant conditions all shape the architecture.",
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
            { label: "Energy & Utilities", href: "/industries/energy-utilities", icon: "power" },
          ],
        },
        {
          heading: "Commercial",
          links: [
            { label: "Manufacturing", href: "/industries/manufacturing", icon: "factory" },
            { label: "Education", href: "/industries/education", icon: "education" },
            { label: "IT & ITES", href: "/industries/it-ites", icon: "code" },
            { label: "Retail", href: "/industries/retail", icon: "retail" },
          ],
        },
      ],
    },
  },
  {
    label: "Technology",
    href: "/#technology",
    menu: {
      feature: {
        eyebrow: "Technology layers",
        title: "Components chosen to fit the design",
        body: "Compute, network, security and storage are selected to serve the architecture — never the other way round.",
        href: "/#partners",
        cta: "Our technology ecosystem",
      },
      columns: [
        {
          heading: "Platform layers",
          links: [
            {
              label: "Compute Infrastructure",
              href: "/technology/compute-infrastructure",
              description: "Virtualization, private cloud, databases",
              icon: "server",
            },
            {
              label: "Enterprise Network Infrastructure",
              href: "/technology/network-infrastructure",
              description: "Campus, data center and WAN fabric",
              icon: "network",
            },
            {
              label: "Cybersecurity Architecture",
              href: "/technology/cybersecurity-architecture",
              description: "Segmentation, access and inspection",
              icon: "shield",
            },
          ],
        },
        {
          heading: "Data & operations",
          links: [
            {
              label: "Data & Storage Platforms",
              href: "/technology/data-storage-platforms",
              description: "Primary storage, backup and recovery",
              icon: "storage",
            },
            {
              label: "Virtualization & Cloud Platforms",
              href: "/technology/virtualization-cloud",
              description: "Hypervisors and hybrid platforms",
              icon: "cloud",
            },
            {
              label: "IT Operations & Monitoring",
              href: "/technology/it-operations",
              description: "Observability, ITSM and automation",
              icon: "monitor",
            },
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
        title: "A systems integrator, not a supplier",
        body: "We are measured on whether the environment works end to end — not on what was delivered to the loading bay.",
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
              description: "How we differ from a box supplier",
              icon: "check",
            },
            {
              label: "Technology Ecosystem",
              href: "/company/partners",
              description: "The platforms we build on",
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
              description: "Integrations and outcomes",
              icon: "chart",
            },
            {
              label: "Insights",
              href: "/insights",
              description: "Notes from our engineers",
              icon: "blueprint",
            },
            {
              label: "Contact",
              href: "/contact",
              description: "Talk to an engineer",
              icon: "mail",
            },
          ],
        },
      ],
    },
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/** Footer link groups. Deliberately flatter than the header. */
export const footerColumns: NavColumn[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure" },
      { label: "Application Integration", href: "/solutions/application-integration" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "Enterprise Networking", href: "/solutions/enterprise-networking" },
      { label: "Data & Storage", href: "/solutions/data-storage" },
      { label: "Managed IT Services", href: "/solutions/managed-it-services" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Solution Architecture", href: "/services/architecture" },
      { label: "Technology Integration", href: "/services/integration" },
      { label: "Implementation", href: "/services/implementation" },
      { label: "Managed Services", href: "/services/managed-services" },
      { label: "Support & AMC", href: "/services/support" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { label: "Compute Infrastructure", href: "/technology/compute-infrastructure" },
      { label: "Network Infrastructure", href: "/technology/network-infrastructure" },
      { label: "Cybersecurity Architecture", href: "/technology/cybersecurity-architecture" },
      { label: "Data & Storage Platforms", href: "/technology/data-storage-platforms" },
      { label: "Virtualization & Cloud", href: "/technology/virtualization-cloud" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about-us" },
      { label: "Industries", href: "/#industries" },
      { label: "Technology Ecosystem", href: "/company/partners" },
      { label: "Case Studies", href: "/company/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
