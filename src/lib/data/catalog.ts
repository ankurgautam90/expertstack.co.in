import type { IconName } from "@/components/icons/Icon";

export type VisualKey =
  | "rack"
  | "server"
  | "switch"
  | "security"
  | "datacenter"
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

export type CatalogSection = "solutions" | "products" | "services" | "industries";

export const sectionMeta: Record<
  CatalogSection,
  { label: string; eyebrow: string; intro: string }
> = {
  solutions: {
    label: "Solutions",
    eyebrow: "Solution area",
    intro: "Infrastructure capability, designed and delivered end to end.",
  },
  products: {
    label: "Products",
    eyebrow: "Product category",
    intro: "Enterprise hardware, specified for the workload it has to carry.",
  },
  services: {
    label: "Services",
    eyebrow: "Service",
    intro: "Delivery and aftercare, run to a documented method.",
  },
  industries: {
    label: "Industries",
    eyebrow: "Industry",
    intro: "Sector-specific constraints shape the design.",
  },
};

export const solutions: DetailPage[] = [
  {
    slug: "compute-infrastructure",
    label: "Compute Infrastructure",
    title: "Compute Infrastructure",
    summary:
      "Rack server platforms, virtualization hosts and GPU nodes sized against the workloads they actually carry.",
    intro: [
      "Compute is where most infrastructure problems become visible — a database that no longer fits its host, a hypervisor cluster with no failover headroom, a backup window that runs into the working day. We start by measuring what the current environment is doing, not by quoting a server.",
      "From there we specify a platform with the processor, memory, storage and network profile the workload needs, plus the redundancy and growth headroom written into the design so the next expansion is a purchase rather than a rebuild.",
    ],
    highlights: [
      {
        title: "Sized on evidence",
        body: "Utilisation, IOPS and growth trends inform the configuration before any bill of materials is issued.",
        icon: "gauge",
      },
      {
        title: "Standardised builds",
        body: "Firmware baselines, BIOS profiles and OS images are repeatable, so the tenth host matches the first.",
        icon: "layers",
      },
      {
        title: "Managed remotely",
        body: "Out-of-band management configured on day one, so console access never depends on the production network.",
        icon: "eye",
      },
    ],
    capabilities: [
      "1U, 2U and 4U rack server platforms",
      "Hypervisor host and cluster design",
      "GPU-backed compute for AI and analytics workloads",
      "Memory, drive and controller configuration",
      "Out-of-band and lifecycle management setup",
      "Capacity headroom and expansion planning",
    ],
    visual: "server",
    icon: "server",
  },
  {
    slug: "network-infrastructure",
    label: "Network Infrastructure",
    title: "Network Infrastructure",
    summary:
      "Campus, branch and data center networks designed for availability first, then throughput.",
    intro: [
      "Networks rarely fail because a switch was too slow. They fail because a single uplink carried everything, because a VLAN plan lived in somebody's head, or because a patch panel was never labelled. Good network design is mostly discipline.",
      "We design core, distribution, access and wireless layers together, document the addressing and port plan, and build in the redundancy needed to survive a single device or link going away without a business interruption.",
    ],
    highlights: [
      {
        title: "Resilient topology",
        body: "Redundant uplinks and stacked or paired devices at each layer that matters, with tested failover.",
        icon: "network",
      },
      {
        title: "Segmented by function",
        body: "User, server, management, voice and guest traffic separated so a fault stays inside one segment.",
        icon: "shield",
      },
      {
        title: "Documented as built",
        body: "Port maps, VLAN plans and cable schedules handed over — not reconstructed months later.",
        icon: "blueprint",
      },
    ],
    capabilities: [
      "Core, distribution and access layer design",
      "Managed Layer 2 and Layer 3 switching",
      "Routing, WAN links and branch connectivity",
      "Enterprise wireless design and survey",
      "VLAN, addressing and QoS planning",
      "Structured cabling and patching standards",
    ],
    visual: "switch",
    icon: "network",
  },
  {
    slug: "network-security",
    label: "Network Security",
    title: "Network Security",
    summary:
      "Firewalls, segmentation, secure access and inspection — deployed as a reviewed policy, not a default rule set.",
    intro: [
      "A firewall is only as good as the policy on it. Most environments we assess have rules that were added under pressure years ago and never reviewed, alongside remote access that grew organically during a hurry.",
      "We rebuild the policy against documented traffic flows, deploy the platform in a resilient pair, segment internal zones so lateral movement is constrained, and make sure the logging is somewhere the team will actually look.",
    ],
    highlights: [
      {
        title: "Policy from flows",
        body: "Rules written against documented application flows, with an explicit default-deny position.",
        icon: "lock",
      },
      {
        title: "Internal segmentation",
        body: "Inspection between internal zones so a compromised endpoint cannot roam the estate freely.",
        icon: "shield",
      },
      {
        title: "Visible by default",
        body: "Logging, alerting and reporting configured at deployment, not left for a later phase.",
        icon: "eye",
      },
    ],
    capabilities: [
      "Next-generation firewall deployment and HA pairing",
      "Policy design, migration and rule-base cleanup",
      "IDS / IPS and threat prevention configuration",
      "Site-to-site and remote access VPN",
      "Internal network segmentation",
      "Logging, alerting and periodic policy review",
    ],
    visual: "security",
    icon: "shield",
  },
  {
    slug: "storage-solutions",
    label: "Storage Solutions",
    title: "Storage Solutions",
    summary:
      "SAN, NAS, backup and data protection designed around recovery objectives agreed in advance.",
    intro: [
      "Storage decisions are recovery decisions. Before capacity or tiering comes the harder question: how much data can the business afford to lose, and how long can it wait to get it back. Those two answers determine the design.",
      "We plan capacity and performance tiers against real IOPS and growth, size the backup targets and retention to match the recovery objectives, and then test restores — because an untested backup is an assumption.",
    ],
    highlights: [
      {
        title: "Objectives first",
        body: "Recovery point and recovery time targets agreed with the business before hardware is selected.",
        icon: "refresh",
      },
      {
        title: "Tiered sensibly",
        body: "Performance and capacity tiers matched to workload profiles instead of a single blended pool.",
        icon: "storage",
      },
      {
        title: "Restores proven",
        body: "Test restores run as part of handover, and repeatable as a routine operational check.",
        icon: "check",
      },
    ],
    capabilities: [
      "SAN and block storage design and deployment",
      "NAS and file services",
      "Backup infrastructure and retention design",
      "Snapshot, replication and offsite copies",
      "Capacity, performance and growth planning",
      "Restore testing and documented recovery runbooks",
    ],
    visual: "stack",
    icon: "storage",
  },
  {
    slug: "data-center-infrastructure",
    label: "Data Center Infrastructure",
    title: "Data Center Infrastructure",
    summary:
      "The physical layer — racks, power distribution, cooling, containment and structured cabling.",
    intro: [
      "Server rooms usually fail physically before they fail logically: a rack loaded past its power budget, hot air recirculating over the top of a cabinet, cabling that makes a simple swap a two-hour job.",
      "We plan the white space properly — rack elevations, power paths with real redundancy, airflow separation, cable management and labelling — so the environment can be maintained safely and expanded without unpicking the last build.",
    ],
    highlights: [
      {
        title: "Planned elevations",
        body: "Every rack drawn out with weight, power draw and airflow accounted for before equipment arrives.",
        icon: "datacenter",
      },
      {
        title: "Power with a path",
        body: "Dual feeds, PDU sizing and UPS runtime specified against the actual connected load.",
        icon: "power",
      },
      {
        title: "Airflow separated",
        body: "Hot and cold separation with blanking panels and containment so cooling reaches the intakes.",
        icon: "cooling",
      },
    ],
    capabilities: [
      "Server room and data center layout design",
      "Rack, cabinet and elevation planning",
      "UPS, PDU and power distribution",
      "Precision cooling and airflow containment",
      "Structured cabling, patching and labelling",
      "Environmental monitoring and access control",
    ],
    visual: "datacenter",
    icon: "datacenter",
  },
  {
    slug: "virtualization",
    label: "Virtualization",
    title: "Virtualization",
    summary:
      "Hypervisor platforms, consolidation and cluster design that removes single points of failure rather than concentrating them.",
    intro: [
      "Consolidation is straightforward to sell and easy to get wrong. Packing twenty workloads onto three hosts improves utilisation, but only helps availability if the cluster can genuinely lose a host at peak without degrading service.",
      "We size clusters with real failover headroom, design shared storage and networking to match, and set the operational rules — affinity, resource limits, patching order — that keep the platform predictable over time.",
    ],
    highlights: [
      {
        title: "Real N+1",
        body: "Failover capacity sized against peak demand, so losing a host is a non-event rather than a degradation.",
        icon: "layers",
      },
      {
        title: "Consolidated cleanly",
        body: "Workloads grouped by profile and criticality, with affinity rules that keep dependent pairs apart.",
        icon: "server",
      },
      {
        title: "Operable long-term",
        body: "Patching sequence, resource policy and monitoring defined so the platform does not drift.",
        icon: "gauge",
      },
    ],
    capabilities: [
      "Hypervisor platform design and deployment",
      "Cluster sizing with failover headroom",
      "Physical-to-virtual consolidation",
      "Shared storage and virtual networking design",
      "Resource policy, affinity and HA configuration",
      "Platform monitoring and patch planning",
    ],
    visual: "topology",
    icon: "layers",
  },
];

export const products: DetailPage[] = [
  {
    slug: "rack-servers",
    label: "Rack Servers",
    title: "Rack Servers",
    summary:
      "1U to 4U enterprise compute for virtualization, databases, applications and GPU workloads.",
    intro: [
      "Rack servers remain the workhorse of enterprise compute. The variables that matter are rarely headline — socket count, memory channel population, drive backplane type, controller cache, expansion slots and the management licence tier.",
      "We configure to the workload and tell you plainly which choices affect performance, which affect serviceability and which are simply cost. Every configuration is quoted with its upgrade path.",
    ],
    highlights: [
      {
        title: "Configured, not listed",
        body: "Processor, memory and storage chosen against the workload profile rather than a stock build.",
        icon: "chip",
      },
      {
        title: "Serviceable",
        body: "Hot-swap drives, redundant power and tool-less rails specified where uptime justifies them.",
        icon: "refresh",
      },
      {
        title: "Managed remotely",
        body: "Out-of-band controllers licensed and configured so remote hands are rarely needed.",
        icon: "eye",
      },
    ],
    capabilities: [
      "1U, 2U and 4U rack-mount chassis",
      "Single and dual socket configurations",
      "Enterprise ECC memory configurations",
      "SAS / SATA / NVMe drive and RAID options",
      "Redundant power supplies and hot-swap cooling",
      "Out-of-band remote management",
    ],
    visual: "server",
    icon: "server",
  },
  {
    slug: "network-switches",
    label: "Network Switches",
    title: "Network Switches",
    summary:
      "Access, aggregation and data center switching — managed, stackable and built for high availability.",
    intro: [
      "Switch selection is a question of role. Access switches need port density, PoE budget and manageability; aggregation needs uplink capacity and resilience; data center switching needs low latency and the right optics.",
      "We specify by layer, keep the platform consistent so the team learns one configuration model, and size PoE budgets against everything that will eventually hang off the port — not just what is connected on day one.",
    ],
    highlights: [
      {
        title: "Specified by layer",
        body: "Access, aggregation and core each chosen for their role rather than a single compromise model.",
        icon: "network",
      },
      {
        title: "PoE budgeted",
        body: "Power budgets calculated for the full endpoint plan, including phones, access points and cameras.",
        icon: "power",
      },
      {
        title: "Stack and uplink ready",
        body: "Stacking modules, optics and cabling supplied together so nothing blocks the install.",
        icon: "cable",
      },
    ],
    capabilities: [
      "Managed Layer 2 access switches",
      "Layer 3 routing and aggregation switches",
      "Data center and top-of-rack switching",
      "PoE and PoE+ switches for converged endpoints",
      "Stackable and chassis-based platforms",
      "Optics, stacking cables and accessories",
    ],
    visual: "switch",
    icon: "network",
  },
  {
    slug: "firewalls",
    label: "Firewalls",
    title: "Firewalls",
    summary:
      "Next-generation firewalls for perimeter, internal segmentation and secure remote access.",
    intro: [
      "Firewall sizing is routinely done on internet bandwidth alone, which is the wrong number. Throughput with inspection enabled, concurrent sessions, VPN tunnel count and logging volume are what determine whether the appliance holds up in year three.",
      "We size against inspected throughput and session load, plan the high-availability pair properly, and account for the licence subscriptions that the security features actually depend on.",
    ],
    highlights: [
      {
        title: "Sized with inspection on",
        body: "Throughput figures taken with the security services enabled, which is how it will run in production.",
        icon: "gauge",
      },
      {
        title: "Deployed in pairs",
        body: "High-availability configuration with tested failover, not a single appliance carrying everything.",
        icon: "shield",
      },
      {
        title: "Licensing made clear",
        body: "Subscription terms and renewal exposure explained up front so there are no surprises at renewal.",
        icon: "check",
      },
    ],
    capabilities: [
      "Next-generation firewall appliances",
      "High-availability active/passive and active/active pairs",
      "IPS, threat prevention and content filtering",
      "SSL and IPSec VPN capability",
      "Internal segmentation firewalls",
      "Central management and logging platforms",
    ],
    visual: "security",
    icon: "shield",
  },
  {
    slug: "storage",
    label: "Storage",
    title: "Storage",
    summary: "Block, file and backup platforms — from entry arrays to tiered enterprise storage.",
    intro: [
      "Capacity is the easy part of a storage quote. The parts that decide whether the platform performs are the drive mix, the controller pairing, the network connecting it and the protection scheme underneath.",
      "We size against workload IOPS and latency requirements, plan the protection overhead honestly, and make sure the usable capacity after RAID, snapshots and growth is the number you were told.",
    ],
    highlights: [
      {
        title: "Usable, not raw",
        body: "Capacity quoted after protection overhead, snapshot reserve and growth allowance.",
        icon: "storage",
      },
      {
        title: "Dual controller",
        body: "Controller redundancy and multipathing configured so maintenance is not an outage.",
        icon: "refresh",
      },
      {
        title: "Backup included",
        body: "Protection targets planned alongside primary storage rather than treated as a separate project.",
        icon: "check",
      },
    ],
    capabilities: [
      "Entry and midrange SAN arrays",
      "NAS and unified file storage",
      "All-flash and hybrid configurations",
      "Backup appliances and deduplication targets",
      "Expansion shelves and drive upgrades",
      "Fibre Channel and iSCSI connectivity",
    ],
    visual: "stack",
    icon: "storage",
  },
  {
    slug: "server-accessories",
    label: "Server Accessories",
    title: "Server Accessories",
    summary:
      "Memory, drives, controllers, power supplies, rails and the parts that keep a platform serviceable.",
    intro: [
      "Upgrades and spares are where compatibility bites. Memory that is not on the qualified list, a controller without the right cache battery, rails that do not match the cabinet depth — each is a small item that stops an install.",
      "We supply parts matched to the specific platform and generation, and hold the detail — part numbers, firmware levels, qualified vendor lists — so an upgrade is planned rather than discovered on site.",
    ],
    highlights: [
      {
        title: "Compatibility checked",
        body: "Parts matched to the exact platform generation and firmware baseline before despatch.",
        icon: "check",
      },
      {
        title: "Spares planning",
        body: "Critical spares identified so a failure is a swap rather than a procurement cycle.",
        icon: "refresh",
      },
      {
        title: "Install-ready",
        body: "Rails, cables and brackets supplied with the part so nothing holds up the maintenance window.",
        icon: "chip",
      },
    ],
    capabilities: [
      "Server memory modules and kits",
      "SAS, SATA, NVMe and SSD drives",
      "RAID and HBA controllers with cache options",
      "Redundant power supplies and fan modules",
      "Rail kits, bezels and cable management arms",
      "Network daughter cards and expansion adapters",
    ],
    visual: "circuit",
    icon: "chip",
  },
  {
    slug: "network-accessories",
    label: "Network Accessories",
    title: "Network Accessories",
    summary:
      "Optics, patch cables, panels, PDUs and the passive layer that determines whether the active layer works.",
    intro: [
      "The passive layer is the least glamorous part of a network and the most common source of intermittent faults. Mismatched optics, untested patch leads and unlabelled panels cost more troubleshooting hours than most equipment failures.",
      "We supply compatible optics, tested cabling and properly specified passive infrastructure — with labelling and documentation, because an unlabelled patch panel is a future outage.",
    ],
    highlights: [
      {
        title: "Compatible optics",
        body: "Transceivers matched to platform, distance and fibre type, with compatibility confirmed.",
        icon: "cable",
      },
      {
        title: "Tested cabling",
        body: "Structured cabling installed and tested to standard, with results provided at handover.",
        icon: "check",
      },
      {
        title: "Labelled properly",
        body: "Every port, panel and lead labelled to a scheme the internal team can follow.",
        icon: "blueprint",
      },
    ],
    capabilities: [
      "SFP, SFP+, QSFP and DAC transceivers",
      "Fibre and copper patch cabling",
      "Patch panels, cable managers and racks",
      "Rack PDUs and power cabling",
      "Media converters and small-form switches",
      "Labelling, testing and documentation",
    ],
    visual: "circuit",
    icon: "cable",
  },
];

export const services: DetailPage[] = [
  {
    slug: "it-infrastructure",
    label: "IT Infrastructure",
    title: "IT Infrastructure Services",
    summary:
      "Assessment, architecture and roadmap — establishing what you have before deciding what you need.",
    intro: [
      "Most infrastructure projects begin with a purchase request and work backwards. We prefer the other order: assess the estate, understand the workloads and constraints, then design against them.",
      "The output is a documented current state, a target architecture and a phased roadmap with dependencies and costs — enough for a business to make a decision, not just an engineer.",
    ],
    highlights: [
      {
        title: "Current state documented",
        body: "Inventory, utilisation, dependencies and risk captured before recommendations are made.",
        icon: "eye",
      },
      {
        title: "Target architecture",
        body: "A design that fits the business trajectory, with capacity and resilience justified.",
        icon: "blueprint",
      },
      {
        title: "Phased roadmap",
        body: "Sequenced work with dependencies, downtime windows and budget mapped per phase.",
        icon: "chart",
      },
    ],
    capabilities: [
      "Infrastructure assessment and audit",
      "Architecture design and documentation",
      "Capacity and lifecycle planning",
      "Technology refresh roadmaps",
      "Bill of materials and budgetary costing",
      "Design review and second opinion",
    ],
    visual: "topology",
    icon: "blueprint",
  },
  {
    slug: "server-deployment",
    label: "Server Deployment",
    title: "Server Deployment",
    summary:
      "Racking, firmware, OS and hypervisor installation delivered to a plan with rollback at every step.",
    intro: [
      "Deployment is where a good design either survives or quietly degrades. Servers staged and configured before they reach site spend less time in the rack, and a documented build sequence means the fifth host is identical to the first.",
      "We pre-stage where possible, bring firmware to a known baseline, install and configure to the agreed build standard, and hand over with as-built documentation.",
    ],
    highlights: [
      {
        title: "Pre-staged",
        body: "Firmware, BIOS and base images applied before delivery so rack time stays short.",
        icon: "chip",
      },
      {
        title: "Built to standard",
        body: "A written build standard applied consistently, so hosts are interchangeable.",
        icon: "layers",
      },
      {
        title: "Rollback ready",
        body: "Every change window has a documented back-out position agreed before work starts.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Physical racking, cabling and power connection",
      "Firmware and BIOS baselining",
      "Operating system and hypervisor installation",
      "RAID, storage and network configuration",
      "Out-of-band management setup",
      "As-built documentation and handover",
    ],
    visual: "server",
    icon: "server",
  },
  {
    slug: "network-deployment",
    label: "Network Deployment",
    title: "Network Deployment",
    summary:
      "Switching, routing, wireless and VLAN rollout — configured, tested and documented.",
    intro: [
      "A network cutover is one of the few changes that can take an entire site offline at once, so it is planned in detail: staged configuration, a tested sequence, a defined maintenance window and a back-out that genuinely works.",
      "We configure off-site where possible, label as we install, verify each layer before moving to the next, and leave behind a port map and configuration set the internal team can maintain.",
    ],
    highlights: [
      {
        title: "Staged configuration",
        body: "Device configs built and reviewed before the maintenance window opens.",
        icon: "blueprint",
      },
      {
        title: "Verified per layer",
        body: "Each layer proven — link, VLAN, routing, services — before the next is enabled.",
        icon: "check",
      },
      {
        title: "Handover you can use",
        body: "Port maps, VLAN plans and configuration backups delivered as part of closure.",
        icon: "network",
      },
    ],
    capabilities: [
      "Switch installation, stacking and uplink configuration",
      "VLAN, routing and QoS implementation",
      "Wireless access point deployment and tuning",
      "Structured cabling and patching",
      "Cutover planning and execution",
      "Configuration backup and documentation",
    ],
    visual: "switch",
    icon: "network",
  },
  {
    slug: "firewall-deployment",
    label: "Firewall Deployment",
    title: "Firewall Deployment",
    summary:
      "Policy design, migration, rollout and tuning — including the rule-base cleanup nobody wants to do.",
    intro: [
      "Migrating a firewall is rarely a hardware exercise. The work is in the policy: identifying which rules are still needed, which flows were never documented, and which shadow rules can be removed without breaking a business process.",
      "We map the flows, rebuild the policy against them, deploy in high availability, run a monitored bedding-in period, then tune before signing off.",
    ],
    highlights: [
      {
        title: "Flows mapped first",
        body: "Application and management flows documented before rules are written.",
        icon: "eye",
      },
      {
        title: "Clean rule base",
        body: "Shadowed, duplicate and expired rules removed rather than carried across.",
        icon: "lock",
      },
      {
        title: "Tuned after cutover",
        body: "A monitored period after go-live, with adjustments made from observed traffic.",
        icon: "gauge",
      },
    ],
    capabilities: [
      "Firewall installation and HA pairing",
      "Policy design and rule-base migration",
      "NAT, routing and interface configuration",
      "VPN setup for sites and remote users",
      "IPS and threat prevention enablement",
      "Logging, alerting and post-cutover tuning",
    ],
    visual: "security",
    icon: "shield",
  },
  {
    slug: "data-center-services",
    label: "Data Center Services",
    title: "Data Center Services",
    summary:
      "Server room and data center build-out — layout, racks, power, cooling and structured cabling.",
    intro: [
      "Whether it is a single comms room or a full white-space build, the same fundamentals decide whether it works: enough power with a real redundant path, cooling that reaches the intakes, cabling that can be traced, and access control that holds.",
      "We handle the physical build end to end and coordinate with electrical and civil trades so the IT fit-out is not waiting on somebody else's schedule.",
    ],
    highlights: [
      {
        title: "Designed to load",
        body: "Power and cooling specified against connected load with headroom, not rack count.",
        icon: "power",
      },
      {
        title: "Airflow managed",
        body: "Blanking, containment and layout planned so cold air reaches equipment intakes.",
        icon: "cooling",
      },
      {
        title: "Traceable cabling",
        body: "Structured, labelled and tested cabling with documentation handed over.",
        icon: "cable",
      },
    ],
    capabilities: [
      "Server room design and fit-out",
      "Rack and cabinet installation",
      "UPS, PDU and power distribution",
      "Precision cooling and containment",
      "Structured cabling and patching",
      "Environmental monitoring and access control",
    ],
    visual: "datacenter",
    icon: "datacenter",
  },
  {
    slug: "migration",
    label: "Migration",
    title: "Migration Services",
    summary:
      "Workload, storage and site migrations planned around the downtime the business can actually absorb.",
    intro: [
      "Migrations are judged on one thing: whether the business noticed. That means the plan starts from the acceptable downtime window and dependency map, and works backwards to a method that fits inside it.",
      "We discover dependencies properly, sequence the moves, rehearse where the risk justifies it, and keep the source available until the target is verified.",
    ],
    highlights: [
      {
        title: "Dependencies mapped",
        body: "Application and data dependencies discovered before the move sequence is set.",
        icon: "migrate",
      },
      {
        title: "Sequenced in waves",
        body: "Workloads grouped and moved in waves, each with its own validation gate.",
        icon: "layers",
      },
      {
        title: "Source kept warm",
        body: "The original platform stays available until the target is verified and accepted.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Physical-to-virtual and virtual-to-virtual migration",
      "Server and application workload moves",
      "Storage and data migration",
      "Data center and office relocation",
      "Cutover planning and rehearsal",
      "Post-migration validation and decommissioning",
    ],
    visual: "topology",
    icon: "migrate",
  },
  {
    slug: "amc-support",
    label: "AMC & Support",
    title: "AMC & Support",
    summary:
      "Contracted maintenance, response commitments, spares handling and periodic health reviews.",
    intro: [
      "Support contracts are worth what their response terms say and no more. We keep the terms explicit — what is covered, what the response commitment is, how escalation works and how spares are handled.",
      "Alongside reactive support, scheduled preventive maintenance and health reviews catch the failing power supply, the filling volume and the expired subscription before they become an incident.",
    ],
    highlights: [
      {
        title: "Explicit terms",
        body: "Coverage, response commitments and escalation paths written into the contract.",
        icon: "check",
      },
      {
        title: "Preventive schedule",
        body: "Periodic health checks on hardware, firmware, capacity and licence status.",
        icon: "gauge",
      },
      {
        title: "Spares handled",
        body: "Critical spares identified and sourcing arranged so a failure is a swap.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Annual maintenance contracts for servers, network and security",
      "Preventive maintenance and health checks",
      "Remote and on-site technical support",
      "Firmware, patch and configuration management",
      "Spare parts planning and replacement handling",
      "Infrastructure monitoring and periodic reporting",
    ],
    visual: "signal",
    icon: "support",
  },
];

export const industryPages: DetailPage[] = [
  {
    slug: "banking-finance",
    label: "Banking & Finance",
    title: "Banking & Finance",
    summary:
      "Segmented networks, audited change control and infrastructure that can prove what it did.",
    intro: [
      "Financial environments carry two constant pressures: continuity of service and the ability to evidence controls. Infrastructure has to be resilient, and it has to be documented well enough to withstand an audit.",
      "We design with segmentation and inspection between zones, keep change records that stand up to review, and plan recovery so that restoring service is a rehearsed procedure rather than an improvisation.",
    ],
    highlights: [
      {
        title: "Segmented estate",
        body: "Zones separated and inspected, limiting the reach of any single compromised system.",
        icon: "shield",
      },
      {
        title: "Evidenced changes",
        body: "Change records, approvals and as-built documentation kept to an auditable standard.",
        icon: "blueprint",
      },
      {
        title: "Rehearsed recovery",
        body: "Recovery objectives agreed and restore procedures tested, not assumed.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Branch and data center network design",
      "Firewall segmentation and secure remote access",
      "Resilient server and storage platforms",
      "Backup, replication and recovery testing",
      "Structured change and configuration control",
      "Maintenance contracts with defined response",
    ],
    visual: "circuit",
    icon: "bank",
  },
  {
    slug: "government-psu",
    label: "Government & PSU",
    title: "Government & PSU",
    summary:
      "Procurement-compliant supply, documented deployment and infrastructure built to be handed over.",
    intro: [
      "Public sector work runs on documentation and process as much as on technology. Specifications have to be met precisely, supply has to be traceable, and the deployment has to be handed over in a state the department can operate independently.",
      "We work to the tender specification, supply through authorised channels with the paperwork intact, and deliver complete as-built documentation and knowledge transfer at closure.",
    ],
    highlights: [
      {
        title: "Specification matched",
        body: "Configurations mapped line by line to the technical specification issued.",
        icon: "check",
      },
      {
        title: "Traceable supply",
        body: "Authorised sourcing with documentation, warranty registration and serial records.",
        icon: "blueprint",
      },
      {
        title: "Handed over completely",
        body: "As-built documents, configuration backups and knowledge transfer at project closure.",
        icon: "building",
      },
    ],
    capabilities: [
      "Tender-specification compliant configurations",
      "Server, network and security supply and installation",
      "Data center and server room build-out",
      "Documentation packs and warranty registration",
      "On-site knowledge transfer and training",
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
      "Clinical systems that stay available, with maintenance planned around patient-facing hours.",
    intro: [
      "Clinical infrastructure has an unusual constraint: the maintenance window is narrow, sometimes nonexistent, and the systems are in use around the clock. Redundancy has to carry the load during planned work.",
      "We build platforms that tolerate component-level maintenance without service interruption, keep imaging and record data protected and recoverable, and schedule work around clinical operations.",
    ],
    highlights: [
      {
        title: "Maintainable live",
        body: "Redundancy designed so routine maintenance does not require a service outage.",
        icon: "refresh",
      },
      {
        title: "Data protected",
        body: "Record and imaging data backed up and recoverable to agreed objectives.",
        icon: "storage",
      },
      {
        title: "Scheduled sensitively",
        body: "Change windows planned around clinical hours and departmental workflows.",
        icon: "clock",
      },
    ],
    capabilities: [
      "Highly available server and virtualization platforms",
      "Imaging and record storage infrastructure",
      "Segmented networks for clinical and administrative traffic",
      "Wireless coverage across wards and departments",
      "Backup and recovery for patient data systems",
      "Support contracts aligned to clinical hours",
    ],
    visual: "signal",
    icon: "health",
  },
  {
    slug: "education",
    label: "Education",
    title: "Education",
    summary:
      "Campus networks, labs and wireless that hold up under term-time peak load.",
    intro: [
      "Campus infrastructure has a distinctive demand curve — long quiet periods punctuated by dense, concentrated peaks when everybody connects at once. Design for the average and it will fail in the first week of term.",
      "We size wireless and switching for peak concurrency, separate academic, administrative and guest traffic, and build labs that can be reimaged quickly between cohorts.",
    ],
    highlights: [
      {
        title: "Peak-sized wireless",
        body: "Access point density and controller capacity planned for concurrent term-time load.",
        icon: "bolt",
      },
      {
        title: "Traffic separated",
        body: "Academic, administrative, hostel and guest networks kept apart by design.",
        icon: "network",
      },
      {
        title: "Labs that reset",
        body: "Lab and classroom systems built for rapid reimaging between cohorts.",
        icon: "refresh",
      },
    ],
    capabilities: [
      "Campus-wide switching and wireless design",
      "Computer lab and classroom infrastructure",
      "Server and virtualization platforms for academic systems",
      "Segmented networks with guest access control",
      "Storage and backup for institutional data",
      "Maintenance contracts across multiple buildings",
    ],
    visual: "topology",
    icon: "education",
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    title: "Manufacturing",
    summary:
      "Plant-floor networks kept cleanly separate from enterprise IT, built for the physical conditions.",
    intro: [
      "Factory environments punish equipment specified for an office — dust, temperature swings, vibration and electrical noise all shorten the life of standard hardware in unprotected locations.",
      "We specify appropriately rated equipment for plant areas, keep operational technology segmented from enterprise IT with controlled interconnects, and design for continuity across production shifts.",
    ],
    highlights: [
      {
        title: "Rated for the floor",
        body: "Equipment and enclosures specified for the temperature, dust and vibration present.",
        icon: "factory",
      },
      {
        title: "OT separated",
        body: "Production networks segmented from enterprise IT with controlled, inspected interconnects.",
        icon: "shield",
      },
      {
        title: "Shift-aware work",
        body: "Change windows planned around production schedules and shift patterns.",
        icon: "clock",
      },
    ],
    capabilities: [
      "Plant-floor and enterprise network design",
      "OT / IT segmentation and secure interconnect",
      "Industrial-grade switching and cabling",
      "Server and storage infrastructure for production systems",
      "Multi-site and warehouse connectivity",
      "Maintenance aligned to production schedules",
    ],
    visual: "circuit",
    icon: "factory",
  },
  {
    slug: "it-ites",
    label: "IT & ITES",
    title: "IT & ITES",
    summary:
      "Dense compute, delivery-floor infrastructure and platforms that scale with headcount.",
    intro: [
      "Service delivery organisations grow in steps — a new client, a new floor, a new shift — and infrastructure has to absorb that without a redesign each time. Density and repeatability matter more than any single specification.",
      "We build standardised, repeatable floor and rack configurations, size for growth in defined increments, and keep the network resilient enough that a delivery floor never sits idle.",
    ],
    highlights: [
      {
        title: "Repeatable builds",
        body: "Standard rack and floor configurations that can be replicated as the business grows.",
        icon: "layers",
      },
      {
        title: "Growth in steps",
        body: "Capacity planned in defined increments so expansion is additive, not disruptive.",
        icon: "chart",
      },
      {
        title: "Floor uptime",
        body: "Redundant paths and rapid-response support so delivery floors keep working.",
        icon: "support",
      },
    ],
    capabilities: [
      "High-density server and virtualization platforms",
      "Delivery-floor network and cabling infrastructure",
      "Redundant internet and WAN connectivity",
      "Firewall, VPN and secure access for distributed teams",
      "Storage and backup for client environments",
      "Rapid-response support arrangements",
    ],
    visual: "stack",
    icon: "code",
  },
  {
    slug: "retail",
    label: "Retail",
    title: "Retail",
    summary:
      "Consistent store builds, centrally managed connectivity and infrastructure that scales by rollout.",
    intro: [
      "Retail infrastructure is a repetition problem. What matters is that store number sixty is built exactly like store number one, can be supported remotely, and can be commissioned by a small team in a day.",
      "We define a standard store build, pre-stage equipment to it, and manage connectivity and security centrally so each new site is a rollout rather than a project.",
    ],
    highlights: [
      {
        title: "One store standard",
        body: "A defined build applied identically across sites, so support knows every location.",
        icon: "retail",
      },
      {
        title: "Pre-staged kit",
        body: "Equipment configured before despatch so on-site commissioning is quick.",
        icon: "chip",
      },
      {
        title: "Managed centrally",
        body: "Connectivity, policy and monitoring administered from one place across all sites.",
        icon: "gauge",
      },
    ],
    capabilities: [
      "Standardised store network and hardware builds",
      "Centrally managed firewalls and connectivity",
      "Point-of-sale and back-office infrastructure",
      "Wireless coverage for stores and warehouses",
      "Central servers, storage and backup",
      "Multi-site rollout and support contracts",
    ],
    visual: "signal",
    icon: "retail",
  },
  {
    slug: "data-centers",
    label: "Data Centers",
    title: "Data Centers",
    summary:
      "White-space build-out, structured cabling and capacity expansion for facility operators.",
    intro: [
      "Facility work is unforgiving about detail. Rack elevations, power paths, containment and cabling all have to be right before equipment lands, because correcting them afterwards means touching live infrastructure.",
      "We plan and execute white-space build-out to a documented standard, and support ongoing expansion so growth follows the original design rather than working around it.",
    ],
    highlights: [
      {
        title: "Planned white space",
        body: "Elevations, weight, power and airflow resolved before the first cabinet is placed.",
        icon: "datacenter",
      },
      {
        title: "Structured throughout",
        body: "Cabling, containment and labelling executed to a single documented standard.",
        icon: "cable",
      },
      {
        title: "Built to expand",
        body: "Expansion routes designed in, so the next phase extends the design rather than fighting it.",
        icon: "chart",
      },
    ],
    capabilities: [
      "White-space layout and rack elevation planning",
      "Cabinet, containment and cable tray installation",
      "Power distribution and UPS integration",
      "High-density structured cabling and testing",
      "Top-of-rack and core switching deployment",
      "Ongoing capacity expansion and support",
    ],
    visual: "datacenter",
    icon: "datacenter",
  },
];

export const catalog: Record<CatalogSection, DetailPage[]> = {
  solutions,
  products,
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
