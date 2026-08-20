import type { IconName } from "@/components/icons/Icon";

export type Category = {
  title: string;
  href: string;
  icon: IconName;
  blurb: string;
  items: string[];
};

/** Section 2 — the six business areas, stated plainly. */
export const categories: Category[] = [
  {
    title: "Compute",
    href: "/solutions/compute-infrastructure",
    icon: "server",
    blurb: "Server platforms sized to the workload rather than the catalogue.",
    items: ["Rack Servers", "Physical Servers", "Virtualization", "GPU Infrastructure"],
  },
  {
    title: "Network",
    href: "/solutions/network-infrastructure",
    icon: "network",
    blurb: "Switching and routing built for uptime across campus and branch.",
    items: ["Network Switches", "Routers", "Wireless", "Enterprise Networking"],
  },
  {
    title: "Security",
    href: "/solutions/network-security",
    icon: "shield",
    blurb: "Perimeter and internal controls that hold under real traffic.",
    items: ["Firewalls", "VPN", "IDS / IPS", "Network Security"],
  },
  {
    title: "Storage",
    href: "/solutions/storage-solutions",
    icon: "storage",
    blurb: "Capacity, performance and recovery planned as one design.",
    items: ["Enterprise Storage", "SAN", "NAS", "Backup"],
  },
  {
    title: "Data Center",
    href: "/solutions/data-center-infrastructure",
    icon: "datacenter",
    blurb: "The physical layer — racks, power, cooling and structured cabling.",
    items: ["Server Racks", "Power Infrastructure", "Cooling", "Data Center Deployment"],
  },
  {
    title: "Managed Infrastructure",
    href: "/services/amc-support",
    icon: "support",
    blurb: "Contracted upkeep so the environment stays in the state we left it.",
    items: ["Monitoring", "Maintenance", "AMC", "Technical Support"],
  },
];

export type CoreSolution = {
  title: string;
  body: string;
  href: string;
  icon: IconName;
  variant: "circuit" | "topology" | "stack" | "signal";
  points: string[];
};

/** Section 3 — the flagship solution set, presented as large visual cards. */
export const coreSolutions: CoreSolution[] = [
  {
    title: "Smart Infrastructure",
    body: "Build reliable and scalable enterprise infrastructure with servers, networking and data center technologies working as a single platform.",
    href: "/solutions/compute-infrastructure",
    icon: "layers",
    variant: "stack",
    points: ["Capacity planning", "Standardised builds", "Documented handover"],
  },
  {
    title: "Cyber Defense",
    body: "Protect enterprise networks and infrastructure with advanced firewall and security solutions, from the perimeter through to internal segmentation.",
    href: "/solutions/network-security",
    icon: "shield",
    variant: "signal",
    points: ["Policy design", "Segmentation", "Secure remote access"],
  },
  {
    title: "Data Management",
    body: "Deploy scalable storage, backup and data protection infrastructure with recovery objectives agreed before anything is purchased.",
    href: "/solutions/storage-solutions",
    icon: "storage",
    variant: "circuit",
    points: ["Tiered storage", "Backup targets", "Restore testing"],
  },
  {
    title: "Compute Infrastructure",
    body: "High-performance servers and virtualization infrastructure for enterprise workloads, including consolidation and GPU-backed platforms.",
    href: "/solutions/compute-infrastructure",
    icon: "server",
    variant: "stack",
    points: ["Rack servers", "Hypervisor hosts", "GPU nodes"],
  },
  {
    title: "Network Infrastructure",
    body: "Design and deploy secure, high-performance enterprise networks across core, distribution, access and wireless layers.",
    href: "/solutions/network-infrastructure",
    icon: "network",
    variant: "topology",
    points: ["Core and access", "Redundant uplinks", "Wireless coverage"],
  },
  {
    title: "Data Center Infrastructure",
    body: "Build reliable server-room and data-center environments — racks, power distribution, cooling, cabling and structured layout.",
    href: "/solutions/data-center-infrastructure",
    icon: "datacenter",
    variant: "circuit",
    points: ["Rack layout", "Power and UPS", "Cooling and airflow"],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  icon: IconName;
};

/** Section 7 — how an engagement actually runs. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consult",
    body: "We review the current environment, the workloads it carries and the constraints you are working within — budget, downtime windows, compliance.",
    icon: "eye",
  },
  {
    number: "02",
    title: "Design",
    body: "An architecture and bill of materials sized against real utilisation, with the redundancy and growth headroom written down and agreed.",
    icon: "blueprint",
  },
  {
    number: "03",
    title: "Supply",
    body: "Hardware procured through authorised channels, staged and configured before it reaches site so rack time stays short.",
    icon: "chip",
  },
  {
    number: "04",
    title: "Deploy",
    body: "Racking, cabling, firmware, configuration and cutover — executed to a plan with rollback steps for every change.",
    icon: "server",
  },
  {
    number: "05",
    title: "Manage",
    body: "Monitoring, patching and change control keep the environment in the state it was handed over in, not drifting away from it.",
    icon: "gauge",
  },
  {
    number: "06",
    title: "Support",
    body: "Contracted response with named escalation paths, spare handling and periodic health reviews under AMC.",
    icon: "support",
  },
];

export type Industry = {
  title: string;
  href: string;
  icon: IconName;
  blurb: string;
  variant: "circuit" | "topology" | "stack" | "signal";
};

/** Section 8 — sector cards. */
export const industries: Industry[] = [
  {
    title: "Banking & Finance",
    href: "/industries/banking-finance",
    icon: "bank",
    blurb: "Segmented networks, audited change control and recoverable data.",
    variant: "circuit",
  },
  {
    title: "Government & PSU",
    href: "/industries/government-psu",
    icon: "government",
    blurb: "Procurement-compliant supply and documented deployments.",
    variant: "stack",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    icon: "health",
    blurb: "Clinical systems that stay available through maintenance windows.",
    variant: "signal",
  },
  {
    title: "Education",
    href: "/industries/education",
    icon: "education",
    blurb: "Campus networks and labs that survive peak-term load.",
    variant: "topology",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: "factory",
    blurb: "Plant-floor networks separated cleanly from enterprise IT.",
    variant: "circuit",
  },
  {
    title: "IT & ITES",
    href: "/industries/it-ites",
    icon: "code",
    blurb: "Dense compute and delivery-floor infrastructure at scale.",
    variant: "stack",
  },
  {
    title: "Retail",
    href: "/industries/retail",
    icon: "retail",
    blurb: "Consistent branch builds and centrally managed connectivity.",
    variant: "signal",
  },
  {
    title: "Data Centers",
    href: "/industries/data-centers",
    icon: "datacenter",
    blurb: "White-space build-out, structured cabling and capacity growth.",
    variant: "topology",
  },
];

export type Reason = {
  title: string;
  body: string;
  icon: IconName;
};

/** Section 9 — credibility, stated without invented numbers. */
export const reasons: Reason[] = [
  {
    title: "Enterprise Expertise",
    body: "Professional IT infrastructure solutions, scoped by people who have run production environments rather than only sold to them.",
    icon: "blueprint",
  },
  {
    title: "Reliable Technology",
    body: "Enterprise-grade hardware and infrastructure sourced through authorised channels, with supported firmware and lifecycle paths.",
    icon: "check",
  },
  {
    title: "End-to-End Solutions",
    body: "From consultation to deployment and support — one accountable team across design, supply, installation and aftercare.",
    icon: "layers",
  },
  {
    title: "Scalable Infrastructure",
    body: "Solutions designed to grow with your business, with headroom and expansion routes agreed at design time instead of discovered later.",
    icon: "chart",
  },
  {
    title: "Technical Support",
    body: "Responsive technical assistance and maintenance under clear contracts, with named escalation and defined response commitments.",
    icon: "support",
  },
  {
    title: "Business-Focused Approach",
    body: "Technology aligned with business requirements — we start from what the workload has to deliver, then specify the platform.",
    icon: "gauge",
  },
];

export type PartnerCategory = {
  title: string;
  body: string;
  icon: IconName;
  /** Placeholder slots — swap for real marks once partnerships are confirmed. */
  slots: number;
};

/** Section 10 — ecosystem, shown as placeholders until authorisation is confirmed. */
export const partnerCategories: PartnerCategory[] = [
  {
    title: "Server Partners",
    body: "Rack, tower and GPU server platforms",
    icon: "server",
    slots: 4,
  },
  {
    title: "Networking Partners",
    body: "Switching, routing and wireless",
    icon: "network",
    slots: 4,
  },
  {
    title: "Security Partners",
    body: "Firewalls and network security",
    icon: "shield",
    slots: 4,
  },
  {
    title: "Storage Partners",
    body: "SAN, NAS and backup platforms",
    icon: "storage",
    slots: 4,
  },
  {
    title: "Cloud / Virtualization Partners",
    body: "Hypervisors and hybrid platforms",
    icon: "layers",
    slots: 4,
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  icon: IconName;
  variant: "circuit" | "topology" | "stack" | "signal";
};

/** Section 11 — representative engagements. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-server-deployment",
    title: "Enterprise Server Deployment",
    sector: "Server infrastructure",
    summary: "Server infrastructure deployment for enterprise workloads.",
    challenge:
      "Ageing standalone servers were carrying business applications with no consistent build, no spare capacity and maintenance windows that kept overrunning.",
    solution:
      "A consolidated rack-server platform with a hypervisor layer, standardised builds, out-of-band management and documented capacity headroom for planned growth.",
    result:
      "Workloads moved onto a single supported platform with repeatable builds, shorter maintenance windows and a clear route to add capacity without redesign.",
    icon: "server",
    variant: "stack",
  },
  {
    slug: "network-infrastructure-upgrade",
    title: "Network Infrastructure Upgrade",
    sector: "Campus networking",
    summary: "Modernised switching and networking infrastructure.",
    challenge:
      "A flat network built up over years had unmanaged switches, inconsistent uplinks and no segmentation between user, server and guest traffic.",
    solution:
      "A redesigned core and access layer with managed switching, redundant uplinks, VLAN segmentation and structured cabling to a documented port plan.",
    result:
      "A resilient topology with traffic separated by function, faults isolated to a segment, and a port map the internal team can actually maintain.",
    icon: "network",
    variant: "topology",
  },
  {
    slug: "secure-network-deployment",
    title: "Secure Network Deployment",
    sector: "Network security",
    summary: "Firewall and network-security implementation.",
    challenge:
      "Perimeter rules had accumulated without review, remote access relied on inconsistent methods, and internal traffic moved without inspection.",
    solution:
      "Next-generation firewalls deployed in a high-availability pair, a rebuilt policy set written against documented flows, secure remote access and internal segmentation.",
    result:
      "A reviewed policy base with inspection between zones, consistent remote access, and logging that gives the team visibility of what the perimeter is doing.",
    icon: "shield",
    variant: "signal",
  },
];
