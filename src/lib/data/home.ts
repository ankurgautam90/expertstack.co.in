import type { IconName } from "@/components/icons/Icon";

/* ---------------------------------------------------------------------------
   1. Business challenge — what organisations actually come to us with.
   -------------------------------------------------------------------------- */

export type Challenge = {
  problem: string;
  body: string;
  icon: IconName;
};

export const businessChallenges: Challenge[] = [
  {
    problem: "Systems that don't talk to each other",
    body: "Applications bought separately, each with its own data, exported and re-keyed by hand between teams.",
    icon: "api",
  },
  {
    problem: "Infrastructure that can't keep up",
    body: "Platforms sized for a workload that has since doubled, with no headroom and no clear route to add it.",
    icon: "scale",
  },
  {
    problem: "Security bolted on afterwards",
    body: "Controls added per project rather than designed once, leaving gaps nobody owns between the layers.",
    icon: "shield",
  },
  {
    problem: "Nobody accountable after go-live",
    body: "A deployment that ended at handover, leaving the internal team to operate something they didn't design.",
    icon: "monitor",
  },
];

/* ---------------------------------------------------------------------------
   2. Solution areas — the six things we are engaged to deliver.
   -------------------------------------------------------------------------- */

export type SolutionArea = {
  title: string;
  href: string;
  icon: IconName;
  blurb: string;
  items: string[];
};

export const solutionAreas: SolutionArea[] = [
  {
    title: "Cloud & Infrastructure",
    href: "/solutions/cloud-infrastructure",
    icon: "cloud",
    blurb: "The right platform for each workload — private, public or hybrid.",
    items: [
      "Private Cloud",
      "Hybrid Cloud",
      "Cloud Migration",
      "Virtualization",
      "Infrastructure Modernization",
      "Data Center Solutions",
    ],
  },
  {
    title: "Software & Application Integration",
    href: "/solutions/application-integration",
    icon: "api",
    blurb: "Applications connected so data moves without anyone re-keying it.",
    items: [
      "Application Integration",
      "API Integration",
      "Enterprise Applications",
      "Middleware",
      "Database Integration",
      "ITSM & Business Applications",
    ],
  },
  {
    title: "Cybersecurity",
    href: "/solutions/cybersecurity",
    icon: "shield",
    blurb: "Identity, access, network and endpoint controls designed as one.",
    items: [
      "Identity & Access Management",
      "Privileged Access Management",
      "Multi-Factor Authentication",
      "Network Security & Firewall",
      "SIEM & Security Monitoring",
      "Endpoint Security",
    ],
  },
  {
    title: "Enterprise Networking",
    href: "/solutions/enterprise-networking",
    icon: "network",
    blurb: "Connectivity between users, applications, cloud and data centers.",
    items: [
      "Network Architecture",
      "LAN / WAN",
      "SD-WAN",
      "Network Security",
      "Enterprise Wireless",
      "Network Monitoring",
    ],
  },
  {
    title: "Data & Storage",
    href: "/solutions/data-storage",
    icon: "storage",
    blurb: "Data kept available, protected and recoverable to agreed targets.",
    items: [
      "Data Management",
      "Enterprise Storage",
      "Backup",
      "Disaster Recovery",
      "Data Protection",
      "Archive & Retention",
    ],
  },
  {
    title: "Managed IT Services",
    href: "/solutions/managed-it-services",
    icon: "monitor",
    blurb: "Someone accountable for the environment long after go-live.",
    items: [
      "Infrastructure Monitoring",
      "Network Monitoring",
      "Security Monitoring",
      "Application Support",
      "Cloud Operations",
      "Technical Support",
    ],
  },
];

/* ---------------------------------------------------------------------------
   3. Core solutions — the flagship set, presented as large visual cards.
   -------------------------------------------------------------------------- */

export type CoreSolution = {
  title: string;
  body: string;
  href: string;
  icon: IconName;
  variant: "circuit" | "topology" | "stack" | "signal";
  points: string[];
};

export const coreSolutions: CoreSolution[] = [
  {
    title: "Cloud & Infrastructure",
    body: "Assess which workloads belong where, then design and migrate to a private, public or hybrid platform with the operating model to run it.",
    href: "/solutions/cloud-infrastructure",
    icon: "cloud",
    variant: "circuit",
    points: ["Workload placement", "Migration waves", "Cloud operations"],
  },
  {
    title: "Application Integration",
    body: "Connect enterprise applications, databases and business systems through APIs and an integration layer, so a change in one place reaches the others.",
    href: "/solutions/application-integration",
    icon: "api",
    variant: "topology",
    points: ["API design", "Middleware", "Data contracts"],
  },
  {
    title: "Cybersecurity",
    body: "Identity, privileged access, MFA, segmentation and monitoring designed as a single control set rather than a series of separate purchases.",
    href: "/solutions/cybersecurity",
    icon: "shield",
    variant: "signal",
    points: ["IAM & PAM", "Segmentation", "SIEM monitoring"],
  },
  {
    title: "Enterprise Networking",
    body: "Network architecture that carries users, applications, cloud and data center traffic predictably — with the segmentation security depends on.",
    href: "/solutions/enterprise-networking",
    icon: "network",
    variant: "topology",
    points: ["Architecture", "SD-WAN", "Monitoring"],
  },
  {
    title: "Data & Storage",
    body: "Storage, backup and disaster recovery designed backwards from the recovery objectives the business can actually live with.",
    href: "/solutions/data-storage",
    icon: "storage",
    variant: "stack",
    points: ["RPO / RTO", "Backup design", "Recovery testing"],
  },
  {
    title: "Managed IT Services",
    body: "Monitoring, operations, incident handling and continuous improvement — so the environment keeps working the way it was designed to.",
    href: "/solutions/managed-it-services",
    icon: "monitor",
    variant: "circuit",
    points: ["24×7 monitoring", "Incident management", "Reporting"],
  },
];

/* ---------------------------------------------------------------------------
   4. Integration — the architecture layers we tie together.
   -------------------------------------------------------------------------- */

export type IntegrationLayer = {
  label: string;
  body: string;
  icon: IconName;
};

/** Ordered top-down, exactly as drawn in the architecture visual. */
export const integrationLayers: IntegrationLayer[] = [
  { label: "Applications", body: "Business systems, ERP, ITSM and line-of-business tools", icon: "apps" },
  { label: "APIs & Integration", body: "The layer that moves data between them reliably", icon: "api" },
  { label: "Identity", body: "One source of truth for who can reach what", icon: "identity" },
  { label: "Cloud & Data Center", body: "Where the workloads actually run", icon: "cloud" },
  { label: "Network", body: "Connectivity and segmentation between every layer", icon: "network" },
  { label: "Security", body: "Controls and monitoring applied at each boundary", icon: "shield" },
  { label: "Infrastructure", body: "Compute, storage and the platforms beneath", icon: "server" },
];

export const integrationOutcomes = [
  {
    title: "One environment",
    body: "Layers designed against a single architecture instead of seven separate projects.",
    icon: "workflow" as IconName,
  },
  {
    title: "One accountable team",
    body: "No gaps between vendors when something crosses a boundary and breaks.",
    icon: "handshake" as IconName,
  },
  {
    title: "One operating model",
    body: "Monitoring, change control and support that span the whole stack.",
    icon: "monitor" as IconName,
  },
];

/* ---------------------------------------------------------------------------
   5. Application integration — what we connect.
   -------------------------------------------------------------------------- */

export const integrationTargets: { label: string; icon: IconName }[] = [
  { label: "Enterprise Applications", icon: "apps" },
  { label: "APIs & Web Services", icon: "api" },
  { label: "Databases", icon: "storage" },
  { label: "Identity Platforms", icon: "identity" },
  { label: "Cloud Platforms", icon: "cloud" },
  { label: "ITSM Platforms", icon: "workflow" },
  { label: "Monitoring Platforms", icon: "monitor" },
  { label: "Security Platforms", icon: "shield" },
  { label: "Business Applications", icon: "chart" },
];

/* ---------------------------------------------------------------------------
   6. Cloud.
   -------------------------------------------------------------------------- */

export const cloudServices: { title: string; body: string; icon: IconName }[] = [
  { title: "Private Cloud", body: "Owned platforms for workloads that cannot leave your estate.", icon: "server" },
  { title: "Public Cloud", body: "Hyperscaler platforms where elasticity and reach matter more.", icon: "cloud" },
  { title: "Hybrid Cloud", body: "A deliberate split, with consistent identity and networking across both.", icon: "layers" },
  { title: "Cloud Migration", body: "Assessment, waves and cutover planned around acceptable downtime.", icon: "migrate" },
  { title: "Cloud Architecture", body: "Landing zones, networking, identity and governance defined up front.", icon: "blueprint" },
  { title: "Virtualization", body: "Consolidation with genuine failover headroom, not just density.", icon: "layers" },
  { title: "Cloud Operations", body: "Cost, capacity, patching and performance managed after go-live.", icon: "gauge" },
  { title: "Backup & DR", body: "Recovery designed to tested objectives across both platforms.", icon: "refresh" },
];

/* ---------------------------------------------------------------------------
   7. Security — layers and capabilities.
   -------------------------------------------------------------------------- */

export const securityLayers: { label: string; icon: IconName }[] = [
  { label: "Identity", icon: "identity" },
  { label: "Access", icon: "lock" },
  { label: "Network", icon: "network" },
  { label: "Endpoint", icon: "chip" },
  { label: "Application", icon: "apps" },
  { label: "Data", icon: "storage" },
];

export const securityCapabilities: { title: string; body: string; icon: IconName }[] = [
  { title: "Identity & Access Management", body: "One authoritative directory, with joiner-mover-leaver actually enforced.", icon: "identity" },
  { title: "Privileged Access Management", body: "Administrative access brokered, recorded and time-bound.", icon: "lock" },
  { title: "Multi-Factor Authentication", body: "Applied to remote access, administration and sensitive applications.", icon: "shield" },
  { title: "Network Security & Firewall", body: "Policy written against documented flows, deployed in resilient pairs.", icon: "network" },
  { title: "SIEM & Security Monitoring", body: "Events centralised, correlated and reviewed — not just collected.", icon: "monitor" },
  { title: "Endpoint Security", body: "Detection and response on the devices where compromise usually starts.", icon: "chip" },
  { title: "Vulnerability Management", body: "Regular assessment with remediation tracked to closure.", icon: "eye" },
  { title: "Security Architecture", body: "Controls designed once across layers instead of bolted on per project.", icon: "blueprint" },
];

/* ---------------------------------------------------------------------------
   8. Technology layers — hardware as supporting components, not products.
   -------------------------------------------------------------------------- */

export const technologyLayers: {
  title: string;
  body: string;
  href: string;
  icon: IconName;
}[] = [
  {
    title: "Compute Infrastructure",
    body: "Enterprise compute integrated with virtualization, private cloud, databases and business-critical applications.",
    href: "/technology/compute-infrastructure",
    icon: "server",
  },
  {
    title: "Enterprise Network Infrastructure",
    body: "Secure, scalable networking connecting users, applications, cloud and data centers.",
    href: "/technology/network-infrastructure",
    icon: "network",
  },
  {
    title: "Cybersecurity Architecture",
    body: "Network security, identity, access and monitoring technologies integrated to protect the environment.",
    href: "/technology/cybersecurity-architecture",
    icon: "shield",
  },
  {
    title: "Data & Storage Platforms",
    body: "Primary storage, backup and recovery platforms sized against real data growth and recovery targets.",
    href: "/technology/data-storage-platforms",
    icon: "storage",
  },
  {
    title: "Virtualization & Cloud Platforms",
    body: "Hypervisor and hybrid platforms that give workloads somewhere consistent to run.",
    href: "/technology/virtualization-cloud",
    icon: "cloud",
  },
  {
    title: "IT Operations & Monitoring",
    body: "Observability, ITSM and automation tooling so the environment can actually be operated.",
    href: "/technology/it-operations",
    icon: "monitor",
  },
];

/* ---------------------------------------------------------------------------
   9. Engagement lifecycle — strategy through operations.
   -------------------------------------------------------------------------- */

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
  icon: IconName;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consulting",
    body: "We start with the business requirement and the current estate — what it has to achieve, what constrains it, and what is already in place.",
    icon: "eye",
  },
  {
    number: "02",
    title: "Architecture",
    body: "A target design with the technology choices justified, the integration points named and the growth path written down.",
    icon: "blueprint",
  },
  {
    number: "03",
    title: "Integration",
    body: "Connecting platforms, applications, identity and network into one environment that behaves as a single system.",
    icon: "workflow",
  },
  {
    number: "04",
    title: "Implementation",
    body: "Build, configure, migrate and cut over to a plan — with test evidence and a documented rollback at every stage.",
    icon: "layers",
  },
  {
    number: "05",
    title: "Security",
    body: "Controls applied across identity, network, endpoint and data, then validated rather than assumed.",
    icon: "shield",
  },
  {
    number: "06",
    title: "Managed Services",
    body: "Monitoring, operations and incident handling that keep the environment in the state it was designed to be in.",
    icon: "monitor",
  },
  {
    number: "07",
    title: "Support",
    body: "Contracted response with named escalation, periodic review and a roadmap that keeps developing after go-live.",
    icon: "support",
  },
];

/* ---------------------------------------------------------------------------
   10. Managed services.
   -------------------------------------------------------------------------- */

export const managedServices: { title: string; body: string; icon: IconName }[] = [
  { title: "Infrastructure Monitoring", body: "Capacity, health and availability watched continuously.", icon: "gauge" },
  { title: "Network Monitoring", body: "Link state, throughput and path performance across sites.", icon: "network" },
  { title: "Application Support", body: "Support for the business applications, not only what they run on.", icon: "apps" },
  { title: "Security Monitoring", body: "Events correlated and triaged, with defined escalation.", icon: "shield" },
  { title: "Cloud Operations", body: "Cost, capacity, patching and governance across platforms.", icon: "cloud" },
  { title: "Incident Management", body: "A defined path from detection through to resolution and review.", icon: "workflow" },
  { title: "Preventive Maintenance", body: "Scheduled health checks that catch failures before users do.", icon: "refresh" },
  { title: "Technical Support & AMC", body: "Contracted response, spares handling and periodic reporting.", icon: "support" },
];

/* ---------------------------------------------------------------------------
   11. Industries — challenge, solution and outcome per sector.
   -------------------------------------------------------------------------- */

export type Industry = {
  title: string;
  href: string;
  icon: IconName;
  challenge: string;
  solution: string;
  outcome: string;
  variant: "circuit" | "topology" | "stack" | "signal";
};

export const industries: Industry[] = [
  {
    title: "Banking & Finance",
    href: "/industries/banking-finance",
    icon: "bank",
    challenge: "Regulated uptime and access that has to be provable to an auditor.",
    solution: "Segmented architecture with identity, privileged access and central logging.",
    outcome: "Controls that hold, and evidence that stands up to review.",
    variant: "circuit",
  },
  {
    title: "Government & PSU",
    href: "/industries/government-psu",
    icon: "government",
    challenge: "Procurement rules and departments that must operate the result independently.",
    solution: "Specification-compliant design, documented deployment and knowledge transfer.",
    outcome: "An environment the department can run without the integrator on site.",
    variant: "stack",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    icon: "health",
    challenge: "Clinical systems in use around the clock, with almost no maintenance window.",
    solution: "Resilient platforms, integrated clinical applications and protected patient data.",
    outcome: "Maintenance without downtime, and records that are always available.",
    variant: "signal",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: "factory",
    challenge: "Plant systems and enterprise IT that need to exchange data without merging.",
    solution: "OT/IT segmentation with a controlled, inspected integration layer between them.",
    outcome: "Production data reaching the business without exposing the plant floor.",
    variant: "circuit",
  },
  {
    title: "Energy & Utilities",
    href: "/industries/energy-utilities",
    icon: "power",
    challenge: "Distributed sites, remote assets and infrastructure that cannot simply stop.",
    solution: "Resilient WAN, remote access under strict control and centralised monitoring.",
    outcome: "Visibility across every site, with access that is governed rather than assumed.",
    variant: "topology",
  },
  {
    title: "Education",
    href: "/industries/education",
    icon: "education",
    challenge: "Dense, concentrated demand at term time and a very mixed application estate.",
    solution: "Campus network and wireless sized for peak, with identity across systems.",
    outcome: "Capacity that holds in week one, and a single sign-on for staff and students.",
    variant: "topology",
  },
  {
    title: "IT & ITES",
    href: "/industries/it-ites",
    icon: "code",
    challenge: "Growth in steps — a new client, a new floor — without redesigning each time.",
    solution: "Repeatable platform and network patterns with automated provisioning.",
    outcome: "New capacity added as a rollout instead of a project.",
    variant: "stack",
  },
  {
    title: "Retail",
    href: "/industries/retail",
    icon: "retail",
    challenge: "Many small sites that must be identical, remotely supportable and secure.",
    solution: "A standard store build, centrally managed connectivity, security and monitoring.",
    outcome: "Store number sixty behaves exactly like store number one.",
    variant: "signal",
  },
];

/* ---------------------------------------------------------------------------
   12. Why us.
   -------------------------------------------------------------------------- */

export type Reason = {
  title: string;
  body: string;
  icon: IconName;
};

export const reasons: Reason[] = [
  {
    title: "Requirement First",
    body: "We start from what the business needs to achieve, then select technology — not the other way round.",
    icon: "eye",
  },
  {
    title: "Architecture Led",
    body: "A documented target design with integration points, dependencies and growth path agreed before anything is procured.",
    icon: "blueprint",
  },
  {
    title: "Integration Expertise",
    body: "The work most projects underestimate: making separately-bought platforms behave as one environment.",
    icon: "workflow",
  },
  {
    title: "Security by Design",
    body: "Identity, access, segmentation and monitoring designed into the architecture rather than added afterwards.",
    icon: "shield",
  },
  {
    title: "Vendor Independent",
    body: "We work across platforms and recommend what fits the requirement, including keeping what you already own.",
    icon: "handshake",
  },
  {
    title: "Accountable After Go-Live",
    body: "Managed services and support mean the team that designed the environment is still there when it needs to change.",
    icon: "monitor",
  },
];

/* ---------------------------------------------------------------------------
   13. Technology ecosystem.
   -------------------------------------------------------------------------- */

export type PartnerCategory = {
  title: string;
  body: string;
  icon: IconName;
  /** Placeholder slots — swap for real marks once authorisation is confirmed. */
  slots: number;
};

export const partnerCategories: PartnerCategory[] = [
  { title: "Cloud", body: "Public, private and hybrid platforms", icon: "cloud", slots: 4 },
  { title: "Security", body: "Identity, access, network and endpoint", icon: "shield", slots: 4 },
  { title: "Networking", body: "Campus, data center, WAN and wireless", icon: "network", slots: 4 },
  { title: "Compute", body: "Server and virtualization platforms", icon: "server", slots: 4 },
  { title: "Storage", body: "Primary storage, backup and recovery", icon: "storage", slots: 4 },
  { title: "Software", body: "Enterprise applications and middleware", icon: "apps", slots: 4 },
  { title: "Virtualization", body: "Hypervisors and container platforms", icon: "layers", slots: 4 },
  { title: "IT Operations", body: "Monitoring, ITSM and automation", icon: "monitor", slots: 4 },
];

/* ---------------------------------------------------------------------------
   14. Case studies — integration outcomes, not equipment counts.
   -------------------------------------------------------------------------- */

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

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-infrastructure-modernization",
    title: "Enterprise Infrastructure Modernization",
    sector: "Infrastructure & cloud",
    summary: "Integrated compute, virtualization, networking and security into a modern enterprise environment.",
    challenge:
      "Business applications ran on ageing standalone platforms with inconsistent builds, no spare capacity and maintenance windows that regularly overran into working hours.",
    solution:
      "A consolidated virtualization platform with redesigned network segmentation, integrated identity and monitoring, migrated in waves against agreed downtime windows.",
    result:
      "Workloads on one supported platform with real failover headroom, shorter maintenance windows, and capacity that can be added without redesigning the environment.",
    icon: "layers",
    variant: "stack",
  },
  {
    slug: "secure-access-transformation",
    title: "Secure Access Transformation",
    sector: "Cybersecurity & identity",
    summary: "Integrated identity, privileged access and MFA to improve secure access to critical systems.",
    challenge:
      "Administrative access was shared and largely untracked, remote access had grown up inconsistently, and joiners and leavers were handled per system rather than centrally.",
    solution:
      "A single authoritative identity source integrated with the application estate, privileged access brokered and recorded, and MFA enforced on remote and administrative paths.",
    result:
      "Access granted and revoked from one place, administrative sessions attributable to a named person, and an access position that can be evidenced on request.",
    icon: "identity",
    variant: "signal",
  },
  {
    slug: "data-center-transformation",
    title: "Data Center Transformation",
    sector: "Data center & operations",
    summary: "Integrated compute, storage, networking, security and monitoring into one operable platform.",
    challenge:
      "A data center estate assembled over years had no consistent monitoring, unclear capacity headroom, and recovery procedures that had never been tested end to end.",
    solution:
      "Refreshed compute and storage platforms, redesigned network fabric and segmentation, centralised monitoring, and a recovery design tested against agreed objectives.",
    result:
      "A single view of the estate's health and capacity, recovery procedures proven by test rather than assumed, and change handled through one controlled process.",
    icon: "datacenter",
    variant: "circuit",
  },
  {
    slug: "application-integration",
    title: "Application Integration",
    sector: "Software integration",
    summary: "Connected enterprise applications through APIs and integration technologies.",
    challenge:
      "Core business applications held overlapping data with no automated flow between them, so teams exported, reconciled and re-keyed records between systems every week.",
    solution:
      "An integration layer with documented API contracts between the applications and their databases, error handling and retry built in, and reporting drawn from a consistent source.",
    result:
      "Records flow between systems automatically, manual reconciliation has largely gone, and reporting is drawn from one agreed set of data rather than several.",
    icon: "api",
    variant: "topology",
  },
];
