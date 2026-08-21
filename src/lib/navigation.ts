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
 * Every top-level item is a real page. The mega-menu panels drill into the
 * detail pages beneath each section — no anchors, no dead links.
 */
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    menu: {
      feature: {
        eyebrow: "Solution areas",
        title: "One environment, not six disconnected projects",
        body: "Cloud, applications, identity, network and data designed together so they work as a single system.",
        href: "/solutions",
        cta: "All solutions",
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
    href: "/services",
    menu: {
      feature: {
        eyebrow: "Engagement model",
        title: "From strategy to operations",
        body: "The team that designs the architecture implements it and stays on to run it.",
        href: "/services",
        cta: "How we work",
      },
      columns: [
        {
          heading: "Design & build",
          links: [
            { label: "Consulting", href: "/services/consulting", description: "Requirements and roadmap", icon: "eye" },
            { label: "Solution Architecture", href: "/services/architecture", description: "Target design and selection", icon: "blueprint" },
            { label: "Technology Integration", href: "/services/integration", description: "Connecting the platforms", icon: "workflow" },
            { label: "Implementation", href: "/services/implementation", description: "Build, migrate and deploy", icon: "layers" },
          ],
        },
        {
          heading: "Secure & run",
          links: [
            { label: "Security Services", href: "/services/security", description: "Controls and assurance", icon: "shield" },
            { label: "Managed Services", href: "/services/managed-services", description: "Monitoring and operations", icon: "monitor" },
            { label: "Support", href: "/services/support", description: "Ongoing technical support", icon: "support" },
          ],
        },
      ],
    },
  },
  {
    label: "Technology",
    href: "/technology",
    menu: {
      feature: {
        eyebrow: "Technology we integrate",
        title: "Components chosen to fit the design",
        body: "Compute, network, security and data platforms selected to serve the architecture — never the other way round.",
        href: "/technology",
        cta: "What we integrate",
      },
      columns: [
        {
          heading: "Platform layers",
          links: [
            { label: "Compute Infrastructure", href: "/technology/compute-infrastructure", description: "Virtualization, private cloud", icon: "server" },
            { label: "Enterprise Networking", href: "/technology/network-infrastructure", description: "Campus, data center, WAN", icon: "network" },
            { label: "Cybersecurity Infrastructure", href: "/technology/cybersecurity-architecture", description: "Segmentation, access, inspection", icon: "shield" },
          ],
        },
        {
          heading: "Data & operations",
          links: [
            { label: "Data & Storage Infrastructure", href: "/technology/data-storage-platforms", description: "Storage, backup and recovery", icon: "storage" },
            { label: "Virtualization & Cloud", href: "/technology/virtualization-cloud", description: "Hypervisors and hybrid", icon: "cloud" },
            { label: "IT Operations & Monitoring", href: "/technology/it-operations", description: "Observability and automation", icon: "monitor" },
          ],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/industries",
    menu: {
      feature: {
        eyebrow: "Sector experience",
        title: "The constraints change with the sector",
        body: "Regulated uptime, procurement rules, clinical hours or plant conditions all shape the architecture.",
        href: "/industries",
        cta: "All industries",
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
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

/** Footer link groups. */
export const footerColumns: NavColumn[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "Software Integration", href: "/solutions/application-integration" },
      { label: "Networking", href: "/solutions/enterprise-networking" },
      { label: "Data Center", href: "/technology/data-storage-platforms" },
      { label: "Managed Services", href: "/solutions/managed-it-services" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Consulting", href: "/services/consulting" },
      { label: "Architecture", href: "/services/architecture" },
      { label: "Integration", href: "/services/integration" },
      { label: "Implementation", href: "/services/implementation" },
      { label: "Migration", href: "/services/implementation" },
      { label: "Support", href: "/services/support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
