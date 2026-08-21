import type { IconName } from "@/components/icons/Icon";

export type VisualKey =
  | "integration"
  | "appflow"
  | "cloud"
  | "server"
  | "switch"
  | "security"
  | "datacenter"
  | "rack"
  | "circuit"
  | "topology"
  | "stack"
  | "signal";

export type DetailPage = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  intro: string[];
  highlights: { title: string; body: string; icon: IconName }[];
  capabilities: string[];
  visual: VisualKey;
  icon: IconName;
};

export type CatalogSection = "solutions" | "technology" | "services" | "industries";

export const sectionMeta: Record<
  CatalogSection,
  { label: string; eyebrow: string; intro: string }
> = {
  solutions: {
    label: "Solutions",
    eyebrow: "Solution area",
    intro: "Business outcomes delivered through integrated technology.",
  },
  technology: {
    label: "Technology",
    eyebrow: "Technology layer",
    intro: "The platform layers we design, integrate and operate.",
  },
  services: {
    label: "Services",
    eyebrow: "Service",
    intro: "How an engagement runs, from strategy through to operations.",
  },
  industries: {
    label: "Industries",
    eyebrow: "Industry",
    intro: "Sector constraints shape the architecture.",
  },
};

/* ============================================================ SOLUTIONS */

export const solutions: DetailPage[] = [
  {
    slug: "cloud-infrastructure",
    label: "Cloud & Infrastructure",
    title: "Cloud & Infrastructure",
    summary:
      "Private, public and hybrid platforms — with workload placement, migration and the operating model to run them.",
    intro: [
      "Cloud decisions are rarely all-or-nothing. Some workloads have latency, licensing or data-residency constraints that keep them on owned infrastructure; others benefit immediately from elasticity. The useful question is not whether to move, but what belongs where, and what it costs to run in each place.",
      "We assess the estate workload by workload, design a target platform with landing zones, identity and networking defined up front, and migrate in waves against downtime windows the business has agreed. Then we help operate what we built.",
    ],
    highlights: [
      {
        title: "Placed by evidence",
        body: "Each workload assessed on performance, dependency, licensing and data constraints before it moves.",
        icon: "eye",
      },
      {
        title: "Consistent across platforms",
        body: "Identity, networking and monitoring designed to span private and public estates alike.",
        icon: "cloud",
      },
      {
        title: "Migrated in waves",
        body: "Grouped, sequenced moves with a validation gate and a working rollback at each stage.",
        icon: "migrate",
      },
    ],
    capabilities: [
      "Cloud readiness and workload placement assessment",
      "Private, public and hybrid cloud architecture",
      "Landing zone, identity and network design",
      "Cloud and data center migration",
      "Virtualization and infrastructure modernization",
      "Cloud operations, cost and capacity management",
    ],
    visual: "cloud",
    icon: "cloud",
  },
  {
    slug: "application-integration",
    label: "Software & Application Integration",
    title: "Software & Application Integration",
    summary:
      "Applications, APIs, databases and business systems connected so data moves without anyone re-keying it.",
    intro: [
      "Most organisations do not have an application problem — they have an integration problem. Each system works; what fails is the space between them, where data is exported to a spreadsheet, reconciled by hand and typed into the next system a week later.",
      "We design the integration layer: documented API contracts between systems, middleware where it earns its place, error handling and retry that make failures visible, and reporting drawn from an agreed source rather than four competing ones.",
    ],
    highlights: [
      {
        title: "Contracts, not connections",
        body: "Each interface documented — payload, frequency, ownership and what happens when it fails.",
        icon: "api",
      },
      {
        title: "Failures surface",
        body: "Retry, dead-letter handling and alerting, so a broken interface is noticed rather than discovered.",
        icon: "monitor",
      },
      {
        title: "One version of the data",
        body: "A defined system of record per entity, so reporting stops depending on which export you opened.",
        icon: "storage",
      },
    ],
    capabilities: [
      "Application and API integration design",
      "Middleware and integration platform implementation",
      "Enterprise and business application integration",
      "Database and data-layer integration",
      "ITSM and workflow platform integration",
      "Interface monitoring, error handling and support",
    ],
    visual: "appflow",
    icon: "api",
  },
  {
    slug: "cybersecurity",
    label: "Cybersecurity",
    title: "Cybersecurity",
    summary:
      "Identity, privileged access, MFA, segmentation and monitoring designed as one control set.",
    intro: [
      "Security bought project by project produces overlapping tools and uncovered gaps — a strong perimeter with shared administrative passwords behind it, or an identity platform nothing is actually integrated with.",
      "We design controls across identity, access, network, endpoint, application and data as a single architecture, integrate them with the systems they are supposed to protect, and make sure what they produce is monitored by someone.",
    ],
    highlights: [
      {
        title: "Identity at the centre",
        body: "One authoritative source for who exists and what they can reach, integrated with the estate.",
        icon: "identity",
      },
      {
        title: "Privilege controlled",
        body: "Administrative access brokered, recorded and time-bound instead of shared and permanent.",
        icon: "lock",
      },
      {
        title: "Monitored, not just logged",
        body: "Events correlated into a small number of actionable alerts with defined escalation.",
        icon: "monitor",
      },
    ],
    capabilities: [
      "Security architecture and control design",
      "Identity and Access Management (IAM)",
      "Privileged Access Management (PAM) and MFA",
      "Network security, firewall and segmentation",
      "SIEM, security monitoring and incident response",
      "Endpoint security and vulnerability management",
    ],
    visual: "security",
    icon: "shield",
  },
  {
    slug: "enterprise-networking",
    label: "Enterprise Networking",
    title: "Enterprise Networking",
    summary:
      "Network architecture connecting users, applications, cloud and data centers — with the segmentation security depends on.",
    intro: [
      "The network is where every other decision eventually lands. Cloud migration, application integration and segmentation all assume connectivity that is predictable, resilient and understood — which is exactly what a network grown organically over a decade is not.",
      "We design core, distribution, access, wireless and WAN as one architecture, document the addressing and segmentation, and build in the redundancy needed to lose a device or a link without the business noticing.",
    ],
    highlights: [
      {
        title: "Designed as one fabric",
        body: "Campus, data center, WAN and cloud connectivity planned together rather than bolted end to end.",
        icon: "network",
      },
      {
        title: "Segmented by function",
        body: "Traffic separated so a fault or a compromise stays inside one zone.",
        icon: "shield",
      },
      {
        title: "Documented as built",
        body: "Addressing, VLAN plans, port maps and cable schedules handed over and kept current.",
        icon: "blueprint",
      },
    ],
    capabilities: [
      "Network architecture and design",
      "LAN, WAN and branch connectivity",
      "SD-WAN design and implementation",
      "Data center and campus switching",
      "Enterprise wireless design and survey",
      "Network monitoring and performance management",
    ],
    visual: "switch",
    icon: "network",
  },
  {
    slug: "data-storage",
    label: "Data & Storage",
    title: "Data & Storage",
    summary:
      "Storage, backup, protection and disaster recovery designed backwards from real recovery objectives.",
    intro: [
      "Storage decisions are recovery decisions. Before capacity or tiering comes the harder question: how much data can the business afford to lose, and how long can it wait to get it back. Those two answers determine everything downstream.",
      "We agree recovery point and recovery time objectives with the business, design storage and protection to meet them, and then test restores — because an untested backup is an assumption, not a control.",
    ],
    highlights: [
      {
        title: "Objectives first",
        body: "RPO and RTO agreed with the business before any platform is selected.",
        icon: "refresh",
      },
      {
        title: "Protected in depth",
        body: "Snapshots, replication and an offsite or immutable copy, sized to the objectives.",
        icon: "storage",
      },
      {
        title: "Recovery proven",
        body: "Restores tested at handover and repeatable as a routine operational check.",
        icon: "check",
      },
    ],
    capabilities: [
      "Data management and storage architecture",
      "Enterprise storage design and implementation",
      "Backup design, retention and immutability",
      "Disaster recovery design and testing",
      "Data protection and archive",
      "Capacity, performance and growth planning",
    ],
    visual: "stack",
    icon: "storage",
  },
  {
    slug: "managed-it-services",
    label: "Managed IT Services",
    title: "Managed IT Services",
    summary:
      "Monitoring, operations, incident management and continuous improvement after go-live.",
    intro: [
      "Environments do not stay as designed. Configuration drifts, capacity fills, certificates expire and subscriptions lapse — and the gap between the documented design and the running estate widens quietly until something breaks.",
      "Managed services close that gap: continuous monitoring across infrastructure, network, security and applications, a defined incident path, preventive maintenance, and periodic review of whether the architecture still fits what the business is doing.",
    ],
    highlights: [
      {
        title: "One view of the estate",
        body: "Infrastructure, network, security and application health in a single operational picture.",
        icon: "monitor",
      },
      {
        title: "Defined incident path",
        body: "Detection, triage, escalation and review — written down and agreed before it is needed.",
        icon: "workflow",
      },
      {
        title: "Improvement, not just uptime",
        body: "Regular review of capacity, risk and architecture fit, with recommendations you can act on.",
        icon: "chart",
      },
    ],
    capabilities: [
      "Infrastructure, network and security monitoring",
      "Application and platform support",
      "Cloud operations and cost management",
      "Incident, problem and change management",
      "Preventive maintenance and health checks",
      "Contracted technical support and AMC",
    ],
    visual: "signal",
    icon: "monitor",
  },
];

/* =========================================================== TECHNOLOGY */

export const technology: DetailPage[] = [
  {
    slug: "compute-infrastructure",
    label: "Compute Infrastructure",
    title: "Compute Infrastructure",
    summary:
      "Enterprise compute integrated with virtualization, private cloud, databases and business-critical applications.",
    intro: [
      "Compute is a component of an architecture, not a purchase in its own right. What matters is whether the platform carries the workloads assigned to it, tolerates the loss of a node at peak, and can grow without a redesign.",
      "We size platforms against measured utilisation and the growth the business expects, build them to a repeatable standard, and integrate them with the virtualization, storage, network and management layers around them.",
    ],
    highlights: [
      {
        title: "Sized on evidence",
        body: "Utilisation, IOPS and growth trends inform the design before any configuration is proposed.",
        icon: "gauge",
      },
      {
        title: "Real failover headroom",
        body: "Clusters sized so losing a host at peak is a non-event rather than a degradation.",
        icon: "layers",
      },
      {
        title: "Integrated, not installed",
        body: "Management, monitoring and backup wired in at build time, not left as a later phase.",
        icon: "workflow",
      },
    ],
    capabilities: [
      "Compute platform sizing and architecture",
      "Virtualization host and cluster design",
      "GPU-backed platforms for AI and analytics workloads",
      "Database and application platform integration",
      "Out-of-band management and lifecycle tooling",
      "Capacity headroom and expansion planning",
    ],
    visual: "server",
    icon: "server",
  },
  {
    slug: "network-infrastructure",
    label: "Enterprise Network Infrastructure",
    title: "Enterprise Network Infrastructure",
    summary:
      "Secure, scalable networking connecting users, applications, cloud and data centers.",
    intro: [
      "Network components are selected to serve a design. Access layers need port density and power budget; aggregation needs uplink capacity and resilience; data center fabric needs low latency and the right optics. Choosing one compromise platform for all three is how estates become fragile.",
      "We specify by role, keep the platform consistent so one configuration model is learned once, and supply the optics, cabling and licensing needed so nothing blocks the implementation.",
    ],
    highlights: [
      {
        title: "Specified by role",
        body: "Access, aggregation, core and WAN each chosen for the job they actually do.",
        icon: "network",
      },
      {
        title: "Resilient by design",
        body: "Redundant uplinks and paired devices wherever a single failure would be felt.",
        icon: "refresh",
      },
      {
        title: "Segmentation ready",
        body: "Built to carry the zoning that the security architecture depends on.",
        icon: "shield",
      },
    ],
    capabilities: [
      "Campus, branch and data center switching",
      "Routing, WAN and SD-WAN platforms",
      "Enterprise wireless infrastructure",
      "Network segmentation and VLAN architecture",
      "Optics, structured cabling and passive infrastructure",
      "Network monitoring and configuration management",
    ],
    visual: "switch",
    icon: "network",
  },
  {
    slug: "cybersecurity-architecture",
    label: "Cybersecurity Architecture",
    title: "Cybersecurity Architecture",
    summary:
      "Network security, identity, access and monitoring technologies integrated to protect enterprise environments.",
    intro: [
      "A firewall is only as good as the policy on it, and a policy is only as good as the flows it was written against. Most estates we assess carry rules added under pressure years ago and never reviewed, alongside remote access that grew organically.",
      "We treat security as an architecture: platforms sized against inspected throughput, deployed resiliently, integrated with identity, and producing logs that are actually correlated and watched.",
    ],
    highlights: [
      {
        title: "Sized with inspection on",
        body: "Throughput measured with security services enabled — how it will run in production.",
        icon: "gauge",
      },
      {
        title: "Integrated with identity",
        body: "Policy that follows the user and the role, not just the source address.",
        icon: "identity",
      },
      {
        title: "Feeding the monitoring",
        body: "Logging and alerting configured at deployment and wired into the SIEM.",
        icon: "monitor",
      },
    ],
    capabilities: [
      "Perimeter and internal segmentation firewalls",
      "High-availability design and policy migration",
      "IPS, threat prevention and content inspection",
      "Site-to-site and remote access VPN",
      "Identity, MFA and privileged access platforms",
      "SIEM integration, logging and periodic policy review",
    ],
    visual: "security",
    icon: "shield",
  },
  {
    slug: "data-storage-platforms",
    label: "Data & Storage Platforms",
    title: "Data & Storage Platforms",
    summary:
      "Primary storage, backup and recovery platforms sized against real data growth and recovery targets.",
    intro: [
      "Capacity is the easy part of a storage design. What decides whether the platform performs is the drive mix, controller pairing, the network connecting it and the protection scheme underneath — and whether the usable figure after overhead is the number anyone was told.",
      "We size against workload IOPS and latency requirements, quote usable capacity honestly, and plan the protection platform alongside primary storage rather than as a separate project.",
    ],
    highlights: [
      {
        title: "Usable, not raw",
        body: "Capacity quoted after protection overhead, snapshot reserve and growth allowance.",
        icon: "storage",
      },
      {
        title: "Maintainable live",
        body: "Controller redundancy and multipathing so maintenance is not an outage.",
        icon: "refresh",
      },
      {
        title: "Protection included",
        body: "Backup targets and retention planned as part of the same design.",
        icon: "check",
      },
    ],
    capabilities: [
      "Block, file and unified storage platforms",
      "All-flash and hybrid configurations",
      "Backup appliances, deduplication and immutability",
      "Replication and disaster recovery platforms",
      "Fibre Channel and IP storage networking",
      "Capacity monitoring and expansion planning",
    ],
    visual: "stack",
    icon: "storage",
  },
  {
    slug: "virtualization-cloud",
    label: "Virtualization & Cloud Platforms",
    title: "Virtualization & Cloud Platforms",
    summary:
      "Hypervisor and hybrid platforms that give workloads somewhere consistent to run.",
    intro: [
      "Consolidation is easy to sell and easy to get wrong. Packing workloads onto fewer hosts improves utilisation, but only helps availability if the cluster can genuinely lose a host at peak without degrading service.",
      "We size clusters with real failover headroom, design the shared storage and networking to match, and set the operating rules — affinity, resource policy, patching order — that keep the platform predictable as it grows.",
    ],
    highlights: [
      {
        title: "Genuine N+1",
        body: "Failover capacity sized against peak demand rather than average.",
        icon: "layers",
      },
      {
        title: "Consistent across estates",
        body: "The same operating model whether a workload runs on-premises or in public cloud.",
        icon: "cloud",
      },
      {
        title: "Operable long term",
        body: "Patching sequence, resource policy and monitoring defined so the platform does not drift.",
        icon: "gauge",
      },
    ],
    capabilities: [
      "Hypervisor platform design and deployment",
      "Cluster sizing, HA and affinity policy",
      "Physical-to-virtual consolidation",
      "Hybrid cloud platform integration",
      "Container and modern workload platforms",
      "Platform monitoring and patch management",
    ],
    visual: "cloud",
    icon: "cloud",
  },
  {
    slug: "it-operations",
    label: "IT Operations & Monitoring",
    title: "IT Operations & Monitoring",
    summary:
      "Observability, ITSM and automation tooling so the environment can actually be operated.",
    intro: [
      "An environment nobody can see is an environment nobody can run. Monitoring added late tends to watch what is easy to instrument rather than what matters, producing either silence or an alert volume the team learns to ignore.",
      "We design the operations layer alongside the architecture: what is monitored, what constitutes an incident, where tickets are raised, and which routine work is automated rather than repeated by hand.",
    ],
    highlights: [
      {
        title: "Signal over volume",
        body: "Alerts tuned to what a human should act on, correlated rather than raw.",
        icon: "monitor",
      },
      {
        title: "Tied to the process",
        body: "Monitoring integrated with ITSM so detection creates a tracked ticket automatically.",
        icon: "workflow",
      },
      {
        title: "Automated where it repeats",
        body: "Routine operational tasks scripted so they happen consistently and leave a record.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Infrastructure, network and application monitoring",
      "Observability and dashboard design",
      "ITSM platform integration and workflow",
      "Alert correlation and escalation design",
      "Operational automation and scripting",
      "Reporting, capacity and service review",
    ],
    visual: "signal",
    icon: "monitor",
  },
];

/* ============================================================= SERVICES */

export const services: DetailPage[] = [
  {
    slug: "consulting",
    label: "Consulting",
    title: "Consulting",
    summary:
      "Assessment, requirements and roadmap — establishing what you have before deciding what you need.",
    intro: [
      "Most technology projects begin with a purchase request and work backwards. We prefer the other order: understand the business requirement, assess the current estate honestly, then decide what the right answer is — which is occasionally to change nothing.",
      "The output is a documented current state, a target architecture and a phased roadmap with dependencies, risks and costs mapped — enough for a business to make a decision, not just an engineer.",
    ],
    highlights: [
      {
        title: "Requirement led",
        body: "We start from what the business has to achieve, not from a product line.",
        icon: "eye",
      },
      {
        title: "Current state documented",
        body: "Inventory, utilisation, dependencies and risk captured before recommendations are made.",
        icon: "blueprint",
      },
      {
        title: "Phased and costed",
        body: "Sequenced work with dependencies, downtime windows and budget mapped per phase.",
        icon: "chart",
      },
    ],
    capabilities: [
      "Business requirement and technology alignment",
      "Infrastructure, cloud and security assessment",
      "Application and integration landscape review",
      "Technology roadmap and lifecycle planning",
      "Budgetary costing and business case support",
      "Independent design review and second opinion",
    ],
    visual: "topology",
    icon: "eye",
  },
  {
    slug: "architecture",
    label: "Solution Architecture",
    title: "Solution Architecture",
    summary:
      "A target design with technology choices justified, integration points named and the growth path written down.",
    intro: [
      "Architecture is where a project either becomes buildable or stays a wish. The value is in making the decisions explicit — why this platform, what it connects to, what happens when a component fails, and what has to change before capacity runs out.",
      "We produce a design the implementation team can build from and the business can hold us to: logical and physical views, integration points, security controls, and the assumptions each decision rests on.",
    ],
    highlights: [
      {
        title: "Decisions recorded",
        body: "Every significant choice documented with its rationale and the alternatives considered.",
        icon: "blueprint",
      },
      {
        title: "Integration named",
        body: "Every interface between platforms identified before build, not discovered during it.",
        icon: "workflow",
      },
      {
        title: "Vendor independent",
        body: "Technology selected against the requirement, including keeping what already works.",
        icon: "handshake",
      },
    ],
    capabilities: [
      "Target architecture and design documentation",
      "Technology evaluation and selection",
      "Integration and interface design",
      "Security architecture and control mapping",
      "High availability and disaster recovery design",
      "Bill of materials and implementation planning",
    ],
    visual: "integration",
    icon: "blueprint",
  },
  {
    slug: "integration",
    label: "Technology Integration",
    title: "Technology Integration",
    summary:
      "Connecting platforms, applications, identity and network into one environment that behaves as a single system.",
    intro: [
      "Integration is the work most projects underestimate. Individual platforms usually install without much drama; what consumes the schedule is making them agree — on identity, on data formats, on certificates, on which system owns which record.",
      "This is the core of what we do. We connect the layers, prove each interface with test evidence, and hand over an environment where the pieces genuinely work together rather than merely coexist.",
    ],
    highlights: [
      {
        title: "Interfaces proven",
        body: "Each integration tested with evidence, including its failure and retry behaviour.",
        icon: "check",
      },
      {
        title: "Identity threaded through",
        body: "One authoritative identity source connected to the platforms that depend on it.",
        icon: "identity",
      },
      {
        title: "No orphaned gaps",
        body: "One team accountable across boundaries, so nothing falls between vendors.",
        icon: "handshake",
      },
    ],
    capabilities: [
      "Application, API and middleware integration",
      "Identity and directory integration",
      "Cloud and on-premises platform integration",
      "Monitoring, ITSM and security tool integration",
      "Data and database integration",
      "Interface testing, documentation and handover",
    ],
    visual: "appflow",
    icon: "workflow",
  },
  {
    slug: "implementation",
    label: "Implementation",
    title: "Implementation",
    summary:
      "Build, configure, migrate and cut over to a plan — with test evidence and a documented rollback at every stage.",
    intro: [
      "Implementation is where a good design either survives or quietly degrades. Work staged and configured before it reaches production shortens the change window, and a written build standard means the fifth instance matches the first.",
      "We pre-stage wherever possible, execute to an agreed sequence with defined validation gates, and keep the source available until the target has been accepted.",
    ],
    highlights: [
      {
        title: "Staged first",
        body: "Configuration built and reviewed before the change window opens.",
        icon: "chip",
      },
      {
        title: "Validated per stage",
        body: "Each layer proven before the next is enabled, with evidence retained.",
        icon: "check",
      },
      {
        title: "Rollback ready",
        body: "Every change window has a back-out position agreed before work starts.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Platform build, configuration and hardening",
      "Workload, data and application migration",
      "Cutover planning, rehearsal and execution",
      "Test planning and acceptance evidence",
      "As-built documentation and knowledge transfer",
      "Post-implementation review and tuning",
    ],
    visual: "stack",
    icon: "layers",
  },
  {
    slug: "security",
    label: "Security Services",
    title: "Security Services",
    summary:
      "Controls applied across identity, network, endpoint and data — then validated rather than assumed.",
    intro: [
      "Security services are not a separate workstream bolted to the end of a project. Controls are cheapest and most effective when they are designed into the architecture and implemented alongside it.",
      "We harden platforms as they are built, implement identity and access controls with the integrations that make them meaningful, and validate the result — because a control nobody has tested is a control nobody should rely on.",
    ],
    highlights: [
      {
        title: "Built in, not added on",
        body: "Hardening and controls implemented during the build rather than retrofitted.",
        icon: "shield",
      },
      {
        title: "Access under control",
        body: "Identity, MFA and privileged access implemented and integrated with the estate.",
        icon: "lock",
      },
      {
        title: "Validated",
        body: "Controls tested and evidenced, with findings tracked through to closure.",
        icon: "eye",
      },
    ],
    capabilities: [
      "Security control design and implementation",
      "Platform and configuration hardening",
      "IAM, PAM and MFA deployment",
      "Firewall policy design and segmentation",
      "SIEM onboarding and monitoring setup",
      "Vulnerability assessment and remediation tracking",
    ],
    visual: "security",
    icon: "shield",
  },
  {
    slug: "managed-services",
    label: "Managed Services",
    title: "Managed Services",
    summary:
      "Monitoring, operations and continuous improvement so the environment keeps working as designed.",
    intro: [
      "Handover is the point most engagements end and most problems begin. Configuration drifts, capacity fills, staff change, and the environment slowly stops resembling the design it was built to.",
      "Managed services keep the two aligned: continuous monitoring across the stack, a defined incident and change path, preventive maintenance, and a regular review of whether the architecture still fits the business.",
    ],
    highlights: [
      {
        title: "Whole-stack visibility",
        body: "Infrastructure, network, security, cloud and applications in one operational picture.",
        icon: "monitor",
      },
      {
        title: "Process, not heroics",
        body: "Incident, problem and change handled through a defined and measurable path.",
        icon: "workflow",
      },
      {
        title: "Reviewed regularly",
        body: "Periodic service review covering capacity, risk, incidents and architecture fit.",
        icon: "chart",
      },
    ],
    capabilities: [
      "Infrastructure, network and security monitoring",
      "Cloud operations and cost governance",
      "Application and platform support",
      "Incident, problem and change management",
      "Patch, configuration and lifecycle management",
      "Service reporting and improvement planning",
    ],
    visual: "signal",
    icon: "monitor",
  },
  {
    slug: "support",
    label: "Support & AMC",
    title: "Support & AMC",
    summary:
      "Contracted response with named escalation, preventive maintenance and periodic health review.",
    intro: [
      "A support contract is worth exactly what its terms say. We keep them explicit: what is covered, what the response commitment is, how escalation works, and how spares and replacements are handled.",
      "Alongside reactive support, scheduled preventive maintenance catches the failing power supply, the filling volume and the expiring certificate before any of them become an incident.",
    ],
    highlights: [
      {
        title: "Explicit terms",
        body: "Coverage, response commitments and escalation paths written into the contract.",
        icon: "check",
      },
      {
        title: "Preventive schedule",
        body: "Periodic health checks across hardware, firmware, capacity and licence status.",
        icon: "gauge",
      },
      {
        title: "Named escalation",
        body: "You know who picks it up and where it goes next when it is not resolving.",
        icon: "support",
      },
    ],
    capabilities: [
      "Annual maintenance contracts across the stack",
      "Remote and on-site technical support",
      "Preventive maintenance and health checks",
      "Firmware, patch and configuration management",
      "Spare parts planning and replacement handling",
      "Periodic reporting and service review",
    ],
    visual: "circuit",
    icon: "support",
  },
];

/* =========================================================== INDUSTRIES */

export const industryPages: DetailPage[] = [
  {
    slug: "banking-finance",
    label: "Banking & Finance",
    title: "Banking & Finance",
    summary:
      "Segmented architecture, controlled access and infrastructure that can evidence what it did.",
    intro: [
      "Financial environments carry two constant pressures: continuity of service, and the ability to evidence controls on demand. Technology has to be resilient, and it has to be documented well enough to withstand an audit months later.",
      "We design with segmentation and inspection between zones, integrate identity and privileged access so administrative action is attributable, and plan recovery as a rehearsed procedure rather than an improvisation.",
    ],
    highlights: [
      {
        title: "Segmented estate",
        body: "Zones separated and inspected, limiting the reach of any single compromised system.",
        icon: "shield",
      },
      {
        title: "Attributable access",
        body: "Privileged sessions brokered and recorded against a named individual.",
        icon: "identity",
      },
      {
        title: "Rehearsed recovery",
        body: "Recovery objectives agreed and restore procedures tested, not assumed.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Segmented network and security architecture",
      "Identity, privileged access and MFA",
      "Core application and database integration",
      "Resilient compute and storage platforms",
      "Backup, replication and recovery testing",
      "Managed monitoring with audit-ready reporting",
    ],
    visual: "circuit",
    icon: "bank",
  },
  {
    slug: "government-psu",
    label: "Government & PSU",
    title: "Government & PSU",
    summary:
      "Procurement-compliant delivery, documented implementation and environments built to be handed over.",
    intro: [
      "Public sector work runs on documentation and process as much as on technology. Specifications must be met precisely, supply has to be traceable, and the department has to be able to operate the result without the integrator on site.",
      "We work to the tender specification, integrate through authorised channels with the paperwork intact, and deliver complete as-built documentation and knowledge transfer at closure.",
    ],
    highlights: [
      {
        title: "Specification matched",
        body: "Design mapped line by line to the technical specification issued.",
        icon: "check",
      },
      {
        title: "Traceable delivery",
        body: "Authorised sourcing with documentation, warranty registration and asset records.",
        icon: "blueprint",
      },
      {
        title: "Handed over completely",
        body: "As-built documents, configuration backups and training at project closure.",
        icon: "building",
      },
    ],
    capabilities: [
      "Specification-compliant solution design",
      "Infrastructure, network and security implementation",
      "Data center and departmental IT build-out",
      "Application and e-governance platform integration",
      "Documentation packs and knowledge transfer",
      "Annual maintenance and support contracts",
    ],
    visual: "stack",
    icon: "government",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    title: "Healthcare",
    summary:
      "Clinical systems that stay available, integrated, and protected around the clock.",
    intro: [
      "Clinical infrastructure has an unusual constraint: the maintenance window is narrow or nonexistent, and the systems are in use continuously. Redundancy has to carry the load during planned work, not just during failure.",
      "We build platforms that tolerate component maintenance without service interruption, integrate clinical and administrative applications so records follow the patient, and keep that data recoverable to agreed objectives.",
    ],
    highlights: [
      {
        title: "Maintainable live",
        body: "Redundancy designed so routine maintenance does not require a service outage.",
        icon: "refresh",
      },
      {
        title: "Records that follow",
        body: "Clinical and administrative systems integrated so data moves with the patient.",
        icon: "api",
      },
      {
        title: "Scheduled sensitively",
        body: "Change windows planned around clinical hours and departmental workflow.",
        icon: "clock",
      },
    ],
    capabilities: [
      "Highly available compute and virtualization platforms",
      "Clinical application and imaging integration",
      "Segmented clinical and administrative networks",
      "Identity and access control for clinical systems",
      "Backup and recovery for patient data",
      "Managed services aligned to clinical hours",
    ],
    visual: "signal",
    icon: "health",
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    title: "Manufacturing",
    summary:
      "Plant systems and enterprise IT that exchange data without merging into one flat network.",
    intro: [
      "Manufacturing environments have two networks with genuinely different requirements. Plant systems prioritise determinism and continuity; enterprise IT prioritises change and connectivity. Flattening them together to share data is how incidents spread.",
      "We design a controlled integration layer between OT and IT — inspected, segmented and monitored — so production data reaches business systems without exposing the plant floor.",
    ],
    highlights: [
      {
        title: "OT separated",
        body: "Production networks segmented from enterprise IT with controlled interconnects.",
        icon: "shield",
      },
      {
        title: "Data still flows",
        body: "Production information integrated into business systems through a governed path.",
        icon: "api",
      },
      {
        title: "Rated for the floor",
        body: "Equipment specified for the temperature, dust and vibration actually present.",
        icon: "factory",
      },
    ],
    capabilities: [
      "OT / IT segmentation and secure interconnect",
      "Plant-floor and enterprise network design",
      "Production and ERP application integration",
      "Multi-site and warehouse connectivity",
      "Compute and storage for production systems",
      "Monitoring and maintenance around shift patterns",
    ],
    visual: "circuit",
    icon: "factory",
  },
  {
    slug: "energy-utilities",
    label: "Energy & Utilities",
    title: "Energy & Utilities",
    summary:
      "Distributed sites, remote assets and infrastructure that cannot simply be taken offline.",
    intro: [
      "Utility environments are geographically spread and operationally continuous. Sites are often unstaffed, links are long, and the consequences of losing visibility of an asset are measured in service rather than inconvenience.",
      "We design resilient wide-area connectivity, bring remote sites under central monitoring, and put strict, auditable control around the remote access that operations depends on.",
    ],
    highlights: [
      {
        title: "Resilient WAN",
        body: "Diverse paths to remote sites, with failover proven rather than assumed.",
        icon: "network",
      },
      {
        title: "Governed remote access",
        body: "Access to remote assets brokered, recorded and time-bound.",
        icon: "lock",
      },
      {
        title: "Central visibility",
        body: "Distributed sites monitored from one place, with alerting that reaches someone.",
        icon: "monitor",
      },
    ],
    capabilities: [
      "Wide-area and multi-site network architecture",
      "Remote site infrastructure and connectivity",
      "Secure remote and privileged access",
      "SCADA-adjacent network segmentation",
      "Centralised monitoring and alerting",
      "Managed services for distributed estates",
    ],
    visual: "topology",
    icon: "power",
  },
  {
    slug: "education",
    label: "Education",
    title: "Education",
    summary:
      "Campus networks, identity and applications sized for concentrated term-time demand.",
    intro: [
      "Campus infrastructure has a distinctive demand curve — long quiet periods punctuated by dense peaks when an entire cohort connects at once. Design for the average and it fails in the first week of term.",
      "We size wireless and switching for peak concurrency, separate academic, administrative and guest traffic, and integrate identity so staff and students carry one account across a mixed application estate.",
    ],
    highlights: [
      {
        title: "Peak-sized",
        body: "Access point density and capacity planned for concurrent term-time load.",
        icon: "bolt",
      },
      {
        title: "One identity",
        body: "Single sign-on across academic and administrative systems.",
        icon: "identity",
      },
      {
        title: "Traffic separated",
        body: "Academic, administrative, hostel and guest networks kept apart by design.",
        icon: "network",
      },
    ],
    capabilities: [
      "Campus network and wireless architecture",
      "Identity and single sign-on integration",
      "Academic application and platform integration",
      "Lab and classroom infrastructure",
      "Storage and backup for institutional data",
      "Managed services across multiple buildings",
    ],
    visual: "topology",
    icon: "education",
  },
  {
    slug: "it-ites",
    label: "IT & ITES",
    title: "IT & ITES",
    summary:
      "Repeatable platform patterns that absorb growth without a redesign each time.",
    intro: [
      "Service delivery organisations grow in steps — a new client, a new floor, a new shift — and infrastructure has to absorb that without being rebuilt. Repeatability matters more than any single specification.",
      "We build standardised, automatable platform and network patterns, size for growth in defined increments, and keep client environments properly separated from one another.",
    ],
    highlights: [
      {
        title: "Repeatable patterns",
        body: "Standard build definitions that can be replicated as the business grows.",
        icon: "layers",
      },
      {
        title: "Client separation",
        body: "Environments segmented so one client's estate cannot reach another's.",
        icon: "shield",
      },
      {
        title: "Growth in steps",
        body: "Capacity planned in increments so expansion is additive, not disruptive.",
        icon: "chart",
      },
    ],
    capabilities: [
      "High-density compute and virtualization platforms",
      "Delivery-floor network and connectivity",
      "Client environment segmentation",
      "Secure remote access for distributed teams",
      "Automated provisioning and configuration",
      "Managed monitoring and rapid-response support",
    ],
    visual: "stack",
    icon: "code",
  },
  {
    slug: "retail",
    label: "Retail",
    title: "Retail",
    summary:
      "Identical store builds, centrally managed connectivity and infrastructure that scales by rollout.",
    intro: [
      "Retail infrastructure is a repetition problem. What matters is that store number sixty is built exactly like store number one, can be supported remotely, and can be commissioned by a small team in a day.",
      "We define a standard store architecture, integrate point-of-sale and back-office systems with central platforms, and manage connectivity, security and monitoring centrally so each new site is a rollout rather than a project.",
    ],
    highlights: [
      {
        title: "One store standard",
        body: "A defined build applied identically across sites, so support knows every location.",
        icon: "retail",
      },
      {
        title: "Integrated to head office",
        body: "Store systems connected to central applications through a governed path.",
        icon: "api",
      },
      {
        title: "Managed centrally",
        body: "Connectivity, policy and monitoring administered from one place across all sites.",
        icon: "gauge",
      },
    ],
    capabilities: [
      "Standardised store network and platform builds",
      "Centrally managed connectivity and security",
      "Point-of-sale and back-office integration",
      "Store wireless and in-store systems",
      "Central compute, storage and backup",
      "Multi-site rollout and managed support",
    ],
    visual: "signal",
    icon: "retail",
  },
];

export const catalog: Record<CatalogSection, DetailPage[]> = {
  solutions,
  technology,
  services,
  industries: industryPages,
};

export function getDetailPage(section: CatalogSection, slug: string) {
  return catalog[section].find((page) => page.slug === slug);
}

/** Sibling links shown in the "related" rail at the foot of a detail page. */
export function getSiblings(section: CatalogSection, slug: string, limit = 3) {
  const list = catalog[section];
  const index = list.findIndex((page) => page.slug === slug);
  if (index === -1) return list.slice(0, limit);

  return Array.from({ length: Math.min(limit, list.length - 1) }, (_, offset) => {
    return list[(index + offset + 1) % list.length];
  });
}
