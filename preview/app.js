/* =============================================================================
   Expertstack — static design preview
   Mirrors the data + behaviour of the Next.js app in ../src so the design can be
   reviewed without a build step. No dependencies.
   ========================================================================== */

/* --------------------------------------------------------------- icon set */

const ICONS = {
  server: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M6.5 7h.01M6.5 17h.01"/><path d="M10 7h5M10 17h5"/>',
  network: '<rect x="3" y="15" width="18" height="5" rx="1.5"/><path d="M12 4v6M7 10V8.5A1.5 1.5 0 0 1 8.5 7h7A1.5 1.5 0 0 1 17 8.5V10"/><circle cx="12" cy="3.5" r="1.5"/><path d="M7 10v5M12 10v5M17 10v5"/>',
  shield: '<path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V6l-7-3Z"/><path d="m9.5 12 1.8 1.9L15 10"/>',
  storage: '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/>',
  datacenter: '<rect x="3" y="3" width="7" height="18" rx="1.5"/><rect x="14" y="3" width="7" height="18" rx="1.5"/><path d="M5.5 7h2M5.5 11h2M5.5 15h2M16.5 7h2M16.5 11h2M16.5 15h2"/>',
  layers: '<path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 16.5 8.5 4.5 8.5-4.5"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  cable: '<path d="M5 3v4a3 3 0 0 0 3 3h1a3 3 0 0 1 3 3v3"/><rect x="3" y="17" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><path d="M18 7v3a4 4 0 0 1-4 4"/>',
  blueprint: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M9 9v11M9 14h6"/>',
  migrate: '<path d="M3 8h11M10.5 4.5 14 8l-3.5 3.5"/><path d="M21 16H10M13.5 12.5 10 16l3.5 3.5"/>',
  support: '<path d="M4 13a8 8 0 0 1 16 0"/><rect x="2.5" y="13" width="4" height="6" rx="1.5"/><rect x="17.5" y="13" width="4" height="6" rx="1.5"/><path d="M20 19v.5a2.5 2.5 0 0 1-2.5 2.5H13"/>',
  bank: '<path d="m12 3 9 4.5H3L12 3Z"/><path d="M5.5 11v6M10 11v6M14 11v6M18.5 11v6"/><path d="M3 20.5h18"/>',
  government: '<path d="M4 20.5h16M5 20.5V9l7-5 7 5v11.5"/><path d="M9.5 20.5v-6h5v6"/><path d="M12 8.5h.01"/>',
  health: '<rect x="3.5" y="5.5" width="17" height="14" rx="2"/><path d="M12 9v7M8.5 12.5h7"/><path d="M8.5 5.5V3.5h7v2"/>',
  education: '<path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z"/><path d="M7 11v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5"/><path d="M21 8.5V14"/>',
  factory: '<path d="M3 20.5h18"/><path d="M3 20.5V10l6 3.5V10l6 3.5V6h6v14.5"/><path d="M18 10.5h.01M18 15h.01"/>',
  code: '<path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5"/><path d="m13.5 5-3 14"/>',
  retail: '<path d="M4 8h16l-1 12.5H5L4 8Z"/><path d="M8.5 10.5V7a3.5 3.5 0 0 1 7 0v3.5"/>',
  building: '<rect x="4" y="3" width="16" height="17.5" rx="1.5"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2"/><path d="M10 20.5v-2.5h4v2.5"/>',
  check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12 2.4 2.5L15.5 9.5"/>',
  handshake: '<path d="m3 11 4-4 3 1 2-1 2 1 3-1 4 4-3.5 4-2-2"/><path d="m8.5 15 2 2 2-2 2 2"/><path d="M6.5 14.5 9 17"/>',
  chart: '<path d="M4 20h16"/><rect x="5.5" y="11" width="3.5" height="6" rx="1"/><rect x="11" y="7" width="3.5" height="10" rx="1"/><rect x="16.5" y="13" width="3.5" height="4" rx="1"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  phone: '<path d="M5 3.5h3.5l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V17a2.5 2.5 0 0 1-2.7 2.5A16 16 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5Z"/>',
  location: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.2 2"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  menu: '<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>',
  arrowRight: '<path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5"/>',
  arrowUpRight: '<path d="M7 17 17 7m0 0h-7m7 0v7"/>',
  chevronDown: '<path d="m6 9.5 6 5.5 6-5.5"/>',
  bolt: '<path d="M13 3 5.5 13.5H11l-1 7.5L18.5 10H13l1-7Z"/>',
  gauge: '<path d="M4 17a8.5 8.5 0 1 1 16 0"/><path d="m12 13 4-3.5"/><circle cx="12" cy="14" r="1.5"/>',
  cooling: '<path d="M12 3v18M4 7.5l16 9M20 7.5l-16 9"/><path d="m9.5 4.5 2.5 2 2.5-2M9.5 19.5l2.5-2 2.5 2"/>',
  power: '<path d="M12 3v9"/><path d="M7 6.5a7 7 0 1 0 10 0"/>',
  lock: '<rect x="4.5" y="10" width="15" height="10.5" rx="2"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.75"/>',
  refresh: '<path d="M20 8a8.5 8.5 0 0 0-15-1.5M4 16a8.5 8.5 0 0 0 15 1.5"/><path d="M20 3.5V8h-4.5M4 20.5V16h4.5"/>',
};

function icon(name, size = 24, cls = "") {
  return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* ------------------------------------------------------------------- data */

const SITE = {
  name: "Expertstack",
  legalName: "Expertstack Technologies",
  tagline: "Enterprise Infrastructure Solutions",
  email: "sales@expertstack.co.in",
  supportEmail: "support@expertstack.co.in",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  hours: "Monday – Saturday, 09:30 – 18:30",
};

const NAV = [
  { label: "Home", href: "#top" },
  {
    label: "Solutions",
    href: "#core-solutions",
    feature: {
      eyebrow: "Solution areas",
      title: "Infrastructure designed as one system",
      body: "Compute, network, security and storage planned together so capacity, resilience and support all line up.",
      cta: "See how we build",
    },
    columns: [
      { heading: "By capability", links: [
        { label: "Compute Infrastructure", desc: "Rack servers, virtualization hosts and GPU nodes", icon: "server" },
        { label: "Network Infrastructure", desc: "Campus, branch and data center switching", icon: "network" },
        { label: "Network Security", desc: "Firewalls, segmentation and secure access", icon: "shield" },
      ]},
      { heading: "By platform", links: [
        { label: "Storage Solutions", desc: "SAN, NAS, backup and data protection", icon: "storage" },
        { label: "Data Center Infrastructure", desc: "Racks, power, cooling and cabling", icon: "datacenter" },
        { label: "Virtualization", desc: "Hypervisor platforms and consolidation", icon: "layers" },
      ]},
    ],
  },
  {
    label: "Products",
    href: "#categories",
    feature: {
      eyebrow: "Hardware catalogue",
      title: "Specified for the workload, not the price list",
      body: "Configurations sized against real utilisation, with a clear upgrade path and supported lifecycle.",
      cta: "Request a configuration",
    },
    columns: [
      { heading: "Core hardware", links: [
        { label: "Rack Servers", desc: "1U – 4U enterprise compute", icon: "server" },
        { label: "Network Switches", desc: "Access, aggregation and core", icon: "network" },
        { label: "Firewalls", desc: "Next-generation perimeter and internal", icon: "shield" },
      ]},
      { heading: "Storage & accessories", links: [
        { label: "Storage", desc: "Block, file and backup appliances", icon: "storage" },
        { label: "Server Accessories", desc: "Memory, drives, controllers, rails", icon: "chip" },
        { label: "Network Accessories", desc: "Optics, cabling, PDUs, patching", icon: "cable" },
      ]},
    ],
  },
  {
    label: "Services",
    href: "#process",
    feature: {
      eyebrow: "Delivery",
      title: "From design review to signed handover",
      body: "The team that scopes the environment is the team that racks, configures and supports it.",
      cta: "See our delivery model",
    },
    columns: [
      { heading: "Build", links: [
        { label: "IT Infrastructure", desc: "Assessment, architecture and roadmap", icon: "blueprint" },
        { label: "Server Deployment", desc: "Racking, firmware, OS and hypervisor", icon: "server" },
        { label: "Network Deployment", desc: "Switching, routing, wireless, VLANs", icon: "network" },
        { label: "Firewall Deployment", desc: "Policy design, rollout and tuning", icon: "shield" },
      ]},
      { heading: "Operate", links: [
        { label: "Data Center Services", desc: "Server room and DC build-out", icon: "datacenter" },
        { label: "Migration", desc: "Workload, storage and site moves", icon: "migrate" },
        { label: "AMC & Support", desc: "Contracted maintenance and spares", icon: "support" },
      ]},
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    feature: {
      eyebrow: "Sector experience",
      title: "The constraints change with the sector",
      body: "Regulated uptime, procurement rules, clinical hours or shop-floor conditions all shape the design.",
      cta: "Browse industries",
    },
    columns: [
      { heading: "Regulated", links: [
        { label: "Banking & Finance", icon: "bank" },
        { label: "Government & PSU", icon: "government" },
        { label: "Healthcare", icon: "health" },
        { label: "Education", icon: "education" },
      ]},
      { heading: "Commercial", links: [
        { label: "Manufacturing", icon: "factory" },
        { label: "IT & ITES", icon: "code" },
        { label: "Retail", icon: "retail" },
        { label: "Data Centers", icon: "datacenter" },
      ]},
    ],
  },
  {
    label: "Company",
    href: "#about",
    feature: {
      eyebrow: "About us",
      title: "A system integrator, not a reseller",
      body: "We are measured on whether the environment runs — not on what left the warehouse.",
      cta: "About the company",
    },
    columns: [
      { heading: "Who we are", links: [
        { label: "About Us", desc: "What we do and how we work", icon: "building" },
        { label: "Why Choose Us", desc: "How we are different to a box supplier", icon: "check" },
        { label: "Partners", desc: "Our technology ecosystem", icon: "handshake" },
      ]},
      { heading: "Proof & contact", links: [
        { label: "Case Studies", desc: "Deployments and outcomes", icon: "chart" },
        { label: "Contact", desc: "Talk to an engineer", icon: "mail" },
      ]},
    ],
  },
];

const CATEGORIES = [
  { title: "Compute", icon: "server", blurb: "Server platforms sized to the workload rather than the catalogue.",
    items: ["Rack Servers", "Physical Servers", "Virtualization", "GPU Infrastructure"] },
  { title: "Network", icon: "network", blurb: "Switching and routing built for uptime across campus and branch.",
    items: ["Network Switches", "Routers", "Wireless", "Enterprise Networking"] },
  { title: "Security", icon: "shield", blurb: "Perimeter and internal controls that hold under real traffic.",
    items: ["Firewalls", "VPN", "IDS / IPS", "Network Security"] },
  { title: "Storage", icon: "storage", blurb: "Capacity, performance and recovery planned as one design.",
    items: ["Enterprise Storage", "SAN", "NAS", "Backup"] },
  { title: "Data Center", icon: "datacenter", blurb: "The physical layer — racks, power, cooling and structured cabling.",
    items: ["Server Racks", "Power Infrastructure", "Cooling", "Data Center Deployment"] },
  { title: "Managed Infrastructure", icon: "support", blurb: "Contracted upkeep so the environment stays in the state we left it.",
    items: ["Monitoring", "Maintenance", "AMC", "Technical Support"] },
];

const CORE_SOLUTIONS = [
  { title: "Smart Infrastructure", icon: "layers", variant: "stack",
    body: "Build reliable and scalable enterprise infrastructure with servers, networking and data center technologies working as a single platform.",
    points: ["Capacity planning", "Standardised builds", "Documented handover"] },
  { title: "Cyber Defense", icon: "shield", variant: "signal",
    body: "Protect enterprise networks and infrastructure with advanced firewall and security solutions, from the perimeter through to internal segmentation.",
    points: ["Policy design", "Segmentation", "Secure remote access"] },
  { title: "Data Management", icon: "storage", variant: "circuit",
    body: "Deploy scalable storage, backup and data protection infrastructure with recovery objectives agreed before anything is purchased.",
    points: ["Tiered storage", "Backup targets", "Restore testing"] },
  { title: "Compute Infrastructure", icon: "server", variant: "stack",
    body: "High-performance servers and virtualization infrastructure for enterprise workloads, including consolidation and GPU-backed platforms.",
    points: ["Rack servers", "Hypervisor hosts", "GPU nodes"] },
  { title: "Network Infrastructure", icon: "network", variant: "topology",
    body: "Design and deploy secure, high-performance enterprise networks across core, distribution, access and wireless layers.",
    points: ["Core and access", "Redundant uplinks", "Wireless coverage"] },
  { title: "Data Center Infrastructure", icon: "datacenter", variant: "circuit",
    body: "Build reliable server-room and data-center environments — racks, power distribution, cooling, cabling and structured layout.",
    points: ["Rack layout", "Power and UPS", "Cooling and airflow"] },
];

const SERVER_FEATURES = [
  { icon: "chip", title: "High-performance processors", body: "Single and dual socket platforms matched to thread and clock requirements." },
  { icon: "layers", title: "Enterprise memory", body: "ECC configurations populated across channels for full bandwidth." },
  { icon: "storage", title: "RAID storage", body: "SAS, SATA and NVMe with controller cache sized to the workload." },
  { icon: "eye", title: "Remote management", body: "Out-of-band controllers for console, power and firmware access." },
  { icon: "server", title: "Virtualization support", body: "Certified platforms for hypervisor clusters with failover headroom." },
  { icon: "chart", title: "Scalable configurations", body: "Memory, drive and slot headroom so growth is an upgrade, not a rebuild." },
];

const SWITCH_PRODUCTS = [
  { title: "Managed Switches", body: "Full configuration, monitoring and backup control." },
  { title: "Layer 2 Switches", body: "Access-layer density with VLAN and PoE support." },
  { title: "Layer 3 Switches", body: "Inter-VLAN routing at the distribution layer." },
  { title: "Data Center Switches", body: "Low-latency top-of-rack and spine connectivity." },
  { title: "PoE Switches", body: "Power budgets sized for phones, APs and cameras." },
  { title: "Enterprise Switching", body: "Stackable and chassis platforms for the core." },
];

const SECURITY_CAPS = [
  { icon: "shield", title: "Firewall", body: "Next-generation platforms deployed in high-availability pairs." },
  { icon: "lock", title: "VPN", body: "Site-to-site and remote access built on a consistent method." },
  { icon: "eye", title: "IDS / IPS", body: "Inspection enabled and tuned against observed traffic." },
  { icon: "bolt", title: "Threat Prevention", body: "Subscription services configured, licensed and kept current." },
  { icon: "layers", title: "Network Segmentation", body: "Internal zones separated so lateral movement is constrained." },
  { icon: "support", title: "Secure Remote Access", body: "Controlled access for staff, vendors and support engineers." },
];

const DC_ELEMENTS = [
  { icon: "datacenter", label: "Server Racks" }, { icon: "server", label: "Servers" },
  { icon: "network", label: "Switches" }, { icon: "shield", label: "Firewalls" },
  { icon: "storage", label: "Storage" }, { icon: "power", label: "UPS" },
  { icon: "bolt", label: "Power Distribution" }, { icon: "cooling", label: "Cooling" },
];

const PROCESS = [
  { number: "01", title: "Consult", icon: "eye", body: "We review the current environment, the workloads it carries and the constraints you are working within — budget, downtime windows, compliance." },
  { number: "02", title: "Design", icon: "blueprint", body: "An architecture and bill of materials sized against real utilisation, with the redundancy and growth headroom written down and agreed." },
  { number: "03", title: "Supply", icon: "chip", body: "Hardware procured through authorised channels, staged and configured before it reaches site so rack time stays short." },
  { number: "04", title: "Deploy", icon: "server", body: "Racking, cabling, firmware, configuration and cutover — executed to a plan with rollback steps for every change." },
  { number: "05", title: "Manage", icon: "gauge", body: "Monitoring, patching and change control keep the environment in the state it was handed over in, not drifting away from it." },
  { number: "06", title: "Support", icon: "support", body: "Contracted response with named escalation paths, spare handling and periodic health reviews under AMC." },
];

const INDUSTRIES = [
  { title: "Banking & Finance", icon: "bank", variant: "circuit", blurb: "Segmented networks, audited change control and recoverable data." },
  { title: "Government & PSU", icon: "government", variant: "stack", blurb: "Procurement-compliant supply and documented deployments." },
  { title: "Healthcare", icon: "health", variant: "signal", blurb: "Clinical systems that stay available through maintenance windows." },
  { title: "Education", icon: "education", variant: "topology", blurb: "Campus networks and labs that survive peak-term load." },
  { title: "Manufacturing", icon: "factory", variant: "circuit", blurb: "Plant-floor networks separated cleanly from enterprise IT." },
  { title: "IT & ITES", icon: "code", variant: "stack", blurb: "Dense compute and delivery-floor infrastructure at scale." },
  { title: "Retail", icon: "retail", variant: "signal", blurb: "Consistent branch builds and centrally managed connectivity." },
  { title: "Data Centers", icon: "datacenter", variant: "topology", blurb: "White-space build-out, structured cabling and capacity growth." },
];

const REASONS = [
  { icon: "blueprint", title: "Enterprise Expertise", body: "Professional IT infrastructure solutions, scoped by people who have run production environments rather than only sold to them." },
  { icon: "check", title: "Reliable Technology", body: "Enterprise-grade hardware and infrastructure sourced through authorised channels, with supported firmware and lifecycle paths." },
  { icon: "layers", title: "End-to-End Solutions", body: "From consultation to deployment and support — one accountable team across design, supply, installation and aftercare." },
  { icon: "chart", title: "Scalable Infrastructure", body: "Solutions designed to grow with your business, with headroom and expansion routes agreed at design time instead of discovered later." },
  { icon: "support", title: "Technical Support", body: "Responsive technical assistance and maintenance under clear contracts, with named escalation and defined response commitments." },
  { icon: "gauge", title: "Business-Focused Approach", body: "Technology aligned with business requirements — we start from what the workload has to deliver, then specify the platform." },
];

const PARTNERS = [
  { title: "Server Partners", body: "Rack, tower and GPU server platforms", icon: "server" },
  { title: "Networking Partners", body: "Switching, routing and wireless", icon: "network" },
  { title: "Security Partners", body: "Firewalls and network security", icon: "shield" },
  { title: "Storage Partners", body: "SAN, NAS and backup platforms", icon: "storage" },
  { title: "Cloud / Virtualization Partners", body: "Hypervisors and hybrid platforms", icon: "layers" },
];

const CASES = [
  { title: "Enterprise Server Deployment", sector: "Server infrastructure", icon: "server", variant: "stack",
    summary: "Server infrastructure deployment for enterprise workloads.",
    challenge: "Ageing standalone servers were carrying business applications with no consistent build, no spare capacity and maintenance windows that kept overrunning.",
    solution: "A consolidated rack-server platform with a hypervisor layer, standardised builds, out-of-band management and documented capacity headroom for planned growth.",
    result: "Workloads moved onto a single supported platform with repeatable builds, shorter maintenance windows and a clear route to add capacity without redesign." },
  { title: "Network Infrastructure Upgrade", sector: "Campus networking", icon: "network", variant: "topology",
    summary: "Modernised switching and networking infrastructure.",
    challenge: "A flat network built up over years had unmanaged switches, inconsistent uplinks and no segmentation between user, server and guest traffic.",
    solution: "A redesigned core and access layer with managed switching, redundant uplinks, VLAN segmentation and structured cabling to a documented port plan.",
    result: "A resilient topology with traffic separated by function, faults isolated to a segment, and a port map the internal team can actually maintain." },
  { title: "Secure Network Deployment", sector: "Network security", icon: "shield", variant: "signal",
    summary: "Firewall and network-security implementation.",
    challenge: "Perimeter rules had accumulated without review, remote access relied on inconsistent methods, and internal traffic moved without inspection.",
    solution: "Next-generation firewalls deployed in a high-availability pair, a rebuilt policy set written against documented flows, secure remote access and internal segmentation.",
    result: "A reviewed policy base with inspection between zones, consistent remote access, and logging that gives the team visibility of what the perimeter is doing." },
];

const FOOTER_COLUMNS = [
  { heading: "Solutions", links: ["Compute", "Networking", "Security", "Storage", "Data Center"] },
  { heading: "Products", links: ["Rack Servers", "Switches", "Firewalls", "Storage", "Accessories"] },
  { heading: "Services", links: ["Infrastructure", "Deployment", "Migration", "AMC", "Support"] },
  { heading: "Company", links: ["About", "Industries", "Partners", "Case Studies", "Contact"] },
];

const REQUIREMENTS = ["Rack Server", "Network Switch", "Firewall", "Storage", "Data Center",
  "Networking", "Cybersecurity", "IT Infrastructure", "AMC / Support", "Other"];

/* ------------------------------------------------------------- SVG visuals */

function serverRackVisual() {
  const units = [];
  for (let i = 0; i < 11; i++) {
    const y = 48 + i * 40;
    const isSwitch = i === 0 || i === 5;
    const isStorage = i === 3 || i === 7;
    let inner = "";

    if (isSwitch) {
      for (let p = 0; p < 16; p++) {
        inner += `<rect x="${74 + p * 15}" y="${y + 7}" width="9" height="7" rx="1" fill="#050E1B"/>
                  <rect x="${74 + p * 15}" y="${y + 18}" width="9" height="7" rx="1" fill="#050E1B"/>`;
      }
      inner += `<circle cx="330" cy="${y + 11}" r="2.4" fill="#4ADE80"/>
                <circle cx="330" cy="${y + 22}" r="2.4" fill="#1F5BEF"/>
                <rect x="342" y="${y + 8}" width="12" height="16" rx="2" fill="#F26522"/>`;
    } else if (isStorage) {
      for (let b = 0; b < 12; b++) {
        inner += `<rect x="${70 + b * 24}" y="${y + 5}" width="20" height="22" rx="2" fill="#0D1E38" stroke="#33507D" stroke-opacity="0.5"/>
                  <rect x="${73 + b * 24}" y="${y + 9}" width="8" height="2" rx="1" fill="#5C7399"/>
                  <circle cx="${85 + b * 24}" cy="${y + 22}" r="1.6" fill="${b % 3 === 0 ? "#4ADE80" : "#33507D"}"/>`;
      }
    } else {
      inner += `<rect x="62" y="${y + 4}" width="10" height="24" rx="2" fill="#0D1E38"/>
                <circle cx="67" cy="${y + 10}" r="1.6" fill="#1F5BEF"/>
                <circle cx="67" cy="${y + 16}" r="1.6" fill="#4ADE80"/>`;
      for (let b = 0; b < 8; b++) {
        inner += `<rect x="${80 + b * 28}" y="${y + 6}" width="22" height="20" rx="2" fill="#0D1E38" stroke="#33507D" stroke-opacity="0.45"/>
                  <rect x="${84 + b * 28}" y="${y + 10}" width="9" height="2" rx="1" fill="#5C7399"/>`;
      }
      inner += `<rect x="310" y="${y + 8}" width="34" height="16" rx="2" fill="#050E1B"/>
                <circle cx="352" cy="${y + 16}" r="3.2" fill="#F26522" opacity="0.9"/>`;
    }

    units.push(`<rect x="58" y="${y}" width="304" height="32" rx="3" fill="url(#rack-unit)" stroke="#33507D" stroke-opacity="0.4"/>${inner}`);
  }

  return `<svg viewBox="0 0 420 540" role="img" aria-label="Illustration of a populated enterprise server rack">
    <defs>
      <linearGradient id="rack-frame" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#142B4C"/><stop offset="100%" stop-color="#050E1B"/>
      </linearGradient>
      <linearGradient id="rack-unit" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1E3A63"/><stop offset="100%" stop-color="#0D1E38"/>
      </linearGradient>
      <linearGradient id="rack-glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1F5BEF" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#1F5BEF" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <ellipse cx="210" cy="518" rx="150" ry="14" fill="#050E1B" opacity="0.18"/>
    <rect x="26" y="18" width="368" height="484" rx="10" fill="url(#rack-frame)"/>
    <rect x="26" y="18" width="368" height="484" rx="10" fill="none" stroke="#33507D" stroke-opacity="0.55"/>
    <rect x="42" y="34" width="336" height="452" rx="5" fill="#050E1B"/>
    <rect x="48" y="40" width="6" height="440" rx="3" fill="#1E3A63"/>
    <rect x="366" y="40" width="6" height="440" rx="3" fill="#1E3A63"/>
    ${units.join("")}
    <rect x="42" y="34" width="336" height="180" fill="url(#rack-glow)" opacity="0.35"/>
  </svg>`;
}

function rackServerVisual() {
  let bays = "";
  for (let i = 0; i < 16; i++) {
    const col = i % 8, row = Math.floor(i / 8);
    const x = 122 + col * 62, y = 66 + row * 100;
    let vents = "";
    for (let v = 0; v < 5; v++) vents += `<rect x="${x + 8}" y="${y + 44 + v * 8}" width="38" height="3" rx="1.5" fill="#132A4A"/>`;
    bays += `<rect x="${x}" y="${y}" width="54" height="92" rx="4" fill="url(#srv-bay)" stroke="#33507D" stroke-opacity="0.45"/>
             <rect x="${x + 8}" y="${y + 12}" width="26" height="5" rx="2.5" fill="#5C7399"/>
             <rect x="${x + 8}" y="${y + 24}" width="16" height="3" rx="1.5" fill="#33507D"/>${vents}
             <circle cx="${x + 44}" cy="${y + 16}" r="2.6" fill="${i % 4 === 0 ? "#1F5BEF" : "#4ADE80"}"/>`;
  }
  let grille = "";
  for (let i = 0; i < 40; i++) {
    grille += `<circle cx="${634 + (i % 5) * 10}" cy="${74 + Math.floor(i / 5) * 22}" r="3" fill="#132A4A"/>`;
  }
  return `<svg viewBox="0 0 720 320" role="img" aria-label="Illustration of a 2U enterprise rack server front panel">
    <defs>
      <linearGradient id="srv-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1E3A63"/><stop offset="55%" stop-color="#132A4A"/><stop offset="100%" stop-color="#0A1730"/>
      </linearGradient>
      <linearGradient id="srv-bay" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0F2140"/><stop offset="100%" stop-color="#070F1F"/>
      </linearGradient>
      <linearGradient id="srv-sheen" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="50%" stop-color="#fff" stop-opacity="0.09"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="8" y="46" width="26" height="228" rx="4" fill="#0D1E38"/>
    <rect x="686" y="46" width="26" height="228" rx="4" fill="#0D1E38"/>
    <circle cx="21" cy="70" r="4" fill="#33507D"/><circle cx="21" cy="250" r="4" fill="#33507D"/>
    <circle cx="699" cy="70" r="4" fill="#33507D"/><circle cx="699" cy="250" r="4" fill="#33507D"/>
    <rect x="30" y="46" width="660" height="228" rx="8" fill="url(#srv-body)"/>
    <rect x="30" y="46" width="660" height="228" rx="8" fill="none" stroke="#33507D" stroke-opacity="0.6"/>
    <rect x="30" y="46" width="660" height="40" fill="url(#srv-sheen)"/>
    <rect x="46" y="62" width="58" height="196" rx="5" fill="#0A1730"/>
    <circle cx="75" cy="90" r="9" fill="none" stroke="#1F5BEF" stroke-width="2.5"/>
    <path d="M75 84v10" stroke="#1F5BEF" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="62" y="112" width="26" height="4" rx="2" fill="#33507D"/>
    <circle cx="68" cy="132" r="3.2" fill="#4ADE80"/><circle cx="82" cy="132" r="3.2" fill="#F26522"/>
    <rect x="62" y="150" width="26" height="30" rx="3" fill="#050E1B"/>
    <rect x="62" y="196" width="26" height="46" rx="3" fill="#050E1B"/>
    ${bays}
    <rect x="622" y="62" width="54" height="196" rx="5" fill="#0A1730"/>
    <g opacity="0.65">${grille}</g>
  </svg>`;
}

function networkSwitchVisual() {
  let ports = "";
  const active = [2, 5, 9, 14, 18, 27, 31, 38, 44];
  for (let i = 0; i < 48; i++) {
    const col = i % 24, row = Math.floor(i / 24);
    const x = 100 + col * 21, y = 118 + row * 38;
    ports += `<rect x="${x}" y="${y}" width="16" height="30" rx="2" fill="#050E1B" stroke="#33507D" stroke-opacity="0.4"/>
              <rect x="${x + 4}" y="${y + 3}" width="8" height="10" rx="1" fill="#0F2140"/>
              <circle cx="${x + 8}" cy="${y + 23}" r="2.2" fill="${active.includes(i) ? "#4ADE80" : "#1E3A63"}"/>`;
  }
  let sfp = "";
  for (let i = 0; i < 4; i++) {
    sfp += `<rect x="${616 + (i % 2) * 36}" y="${122 + Math.floor(i / 2) * 34}" width="30" height="26" rx="2" fill="#0F2140" stroke="#33507D" stroke-opacity="0.5"/>
            <rect x="${622 + (i % 2) * 36}" y="${130 + Math.floor(i / 2) * 34}" width="18" height="4" rx="2" fill="${i === 0 ? "#F26522" : "#1E3A63"}"/>`;
  }
  return `<svg viewBox="0 0 720 260" role="img" aria-label="Illustration of a 48-port managed network switch">
    <defs>
      <linearGradient id="sw-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1E3A63"/><stop offset="100%" stop-color="#0A1730"/>
      </linearGradient>
      <linearGradient id="sw-link" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1F5BEF" stop-opacity="0"/>
        <stop offset="45%" stop-color="#4A82FB" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#1F5BEF" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <g stroke="#33507D" stroke-opacity="0.55" stroke-width="1.5" fill="none">
      <path d="M360 24v22M360 46c-90 0-140 0-200 24M360 46c90 0 140 0 200 24"/>
    </g>
    <circle cx="360" cy="20" r="9" fill="#0D1E38" stroke="#4A82FB" stroke-width="1.5"/>
    <circle cx="160" cy="72" r="6" fill="#0D1E38" stroke="#33507D" stroke-width="1.5"/>
    <circle cx="560" cy="72" r="6" fill="#0D1E38" stroke="#33507D" stroke-width="1.5"/>
    <rect x="18" y="96" width="684" height="112" rx="8" fill="url(#sw-body)"/>
    <rect x="18" y="96" width="684" height="112" rx="8" fill="none" stroke="#33507D" stroke-opacity="0.6"/>
    <rect x="4" y="104" width="16" height="96" rx="3" fill="#0D1E38"/>
    <rect x="700" y="104" width="16" height="96" rx="3" fill="#0D1E38"/>
    <rect x="34" y="114" width="52" height="76" rx="4" fill="#050E1B"/>
    <circle cx="48" cy="130" r="3" fill="#4ADE80"/><circle cx="48" cy="146" r="3" fill="#1F5BEF"/><circle cx="48" cy="162" r="3" fill="#F26522"/>
    <rect x="60" y="126" width="18" height="2.5" rx="1.25" fill="#33507D"/>
    <rect x="60" y="142" width="18" height="2.5" rx="1.25" fill="#33507D"/>
    <rect x="60" y="158" width="18" height="2.5" rx="1.25" fill="#33507D"/>
    ${ports}
    <rect x="608" y="114" width="80" height="76" rx="4" fill="#050E1B"/>${sfp}
    <rect x="100" y="150" width="504" height="2" fill="url(#sw-link)" opacity="0.7"/>
    <g stroke="#33507D" stroke-opacity="0.45" stroke-width="1.5" fill="none">
      <path d="M200 208v20M360 208v30M520 208v20"/>
    </g>
    <rect x="176" y="228" width="48" height="18" rx="3" fill="#0D1E38"/>
    <rect x="330" y="238" width="60" height="18" rx="3" fill="#0D1E38"/>
    <rect x="496" y="228" width="48" height="18" rx="3" fill="#0D1E38"/>
  </svg>`;
}

function securityVisual() {
  const zones = [
    { y: 70, label: "SERVER ZONE" }, { y: 160, label: "USER ZONE" },
    { y: 250, label: "DMZ" }, { y: 340, label: "REMOTE ACCESS" },
  ];
  let zoneMarkup = "";
  zones.forEach((z, i) => {
    zoneMarkup += `<path d="M344 ${210 - i * 6}C384 ${210 - i * 6} 384 ${z.y + 22} 404 ${z.y + 22}" fill="none" stroke="#1F5BEF" stroke-opacity="0.55" stroke-width="1.5"/>
      <rect x="404" y="${z.y}" width="96" height="46" rx="7" fill="#0D1E38" stroke="#33507D" stroke-opacity="0.7"/>
      <circle cx="418" cy="${z.y + 23}" r="4" fill="#4ADE80"/>
      <text x="430" y="${z.y + 27}" fill="#C2CFE4" font-size="9" font-family="Inter, system-ui, sans-serif" letter-spacing="1">${z.label}</text>`;
  });
  let inbound = "";
  [70, 110, 150].forEach((y, i) => {
    inbound += `<path d="M20 ${y}h${120 + i * 14}" stroke="#5C7399" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="4 6" fill="none"/>
                <circle cx="${20 + i * 6}" cy="${y}" r="3.5" fill="${i === 1 ? "#F26522" : "#5C7399"}"/>`;
  });
  let rules = "";
  for (let i = 0; i < 8; i++) rules += `<path d="M176 ${72 + i * 40}h168" stroke="#33507D" stroke-width="1"/>`;

  return `<svg viewBox="0 0 520 420" role="img" aria-label="Diagram of a segmented network protected by a firewall">
    <defs>
      <radialGradient id="sec-glow" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stop-color="#1F5BEF" stop-opacity="0.45"/><stop offset="100%" stop-color="#1F5BEF" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="sec-shield" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A82FB"/><stop offset="100%" stop-color="#0A34A0"/>
      </linearGradient>
    </defs>
    <rect width="520" height="420" fill="url(#sec-glow)" opacity="0.6"/>
    ${inbound}
    <text x="20" y="44" fill="#93A8C9" font-size="11" font-family="Inter, system-ui, sans-serif" letter-spacing="1.6">UNTRUSTED</text>
    <rect x="176" y="40" width="168" height="340" rx="12" fill="#0A1730" stroke="#33507D" stroke-opacity="0.6"/>
    <g opacity="0.35">${rules}</g>
    <g transform="translate(260 178)">
      <path d="M0-64 56-38v40C56 40 32 70 0 84-32 70-56 40-56 2v-40L0-64Z" fill="url(#sec-shield)" opacity="0.18"/>
      <path d="M0-64 56-38v40C56 40 32 70 0 84-32 70-56 40-56 2v-40L0-64Z" fill="none" stroke="#4A82FB" stroke-width="2"/>
      <path d="m-20 6 14 15L24-14" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="260" y="322" fill="#fff" font-size="12" font-weight="600" text-anchor="middle" font-family="Inter, system-ui, sans-serif" letter-spacing="1.4">INSPECTION</text>
    <text x="260" y="344" fill="#93A8C9" font-size="10.5" text-anchor="middle" font-family="Inter, system-ui, sans-serif">IPS · VPN · Policy · Logging</text>
    ${zoneMarkup}
  </svg>`;
}

function dataCenterVisual() {
  function row(count, leftToRight) {
    let out = "";
    for (let i = 0; i < count; i++) {
      const x = leftToRight ? 46 + i * 46 : 674 - i * 46;
      const height = 190 - i * 6;
      const y = 250 - height + i * 4;
      let units = "";
      for (let u = 0; u < 9; u++) {
        units += `<rect x="${x + 5}" y="${y + 10 + u * ((height - 24) / 9)}" width="30" height="8" rx="1.5" fill="#050E1B"/>`;
      }
      let leds = "";
      for (let l = 0; l < 3; l++) {
        const cx = leftToRight ? x + 33 : x + 7;
        leds += `<circle cx="${cx}" cy="${y + 16 + l * 34}" r="1.8" fill="${l === 1 ? "#F26522" : "#4ADE80"}"/>`;
      }
      out += `<rect x="${x}" y="${y}" width="40" height="${height}" rx="4" fill="url(#dc-rack)"/>
              <rect x="${x}" y="${y}" width="40" height="${height}" rx="4" fill="none" stroke="#33507D" stroke-opacity="0.55"/>${units}${leds}`;
    }
    return out;
  }
  let floor = "";
  for (let i = 0; i < 9; i++) floor += `<path d="M${60 + i * 80} 440 L${300 + i * 20} 250"/>`;
  for (let i = 0; i < 5; i++) floor += `<path d="M0 ${268 + i * 44}h760"/>`;
  let busway = "";
  for (let i = 0; i < 14; i++) {
    busway += `<rect x="${44 + i * 50}" y="44" width="6" height="14" rx="2" fill="${i % 4 === 0 ? "#F26522" : "#1E3A63"}"/>`;
  }
  let arrows = "";
  [340, 380, 420].forEach((x, i) => {
    arrows += `<path d="M${x} ${400 - i * 10}v-70m0-14 6 10m-6-10-6 10"/>`;
  });

  return `<svg viewBox="0 0 760 440" role="img" aria-label="Illustration of a data center cold aisle with two rack rows">
    <defs>
      <linearGradient id="dc-floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0D1E38"/><stop offset="100%" stop-color="#050E1B"/>
      </linearGradient>
      <linearGradient id="dc-aisle" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1F5BEF" stop-opacity="0.35"/><stop offset="100%" stop-color="#1F5BEF" stop-opacity="0.02"/>
      </linearGradient>
      <linearGradient id="dc-rack" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1E3A63"/><stop offset="100%" stop-color="#0A1730"/>
      </linearGradient>
    </defs>
    <rect width="760" height="440" fill="url(#dc-floor)"/>
    <g stroke="#1E3A63" stroke-opacity="0.5" stroke-width="1" fill="none">${floor}</g>
    <path d="M300 250 460 250 640 440 120 440Z" fill="url(#dc-aisle)"/>
    ${row(5, true)}${row(5, false)}
    <path d="M300 250 460 250" stroke="#4A82FB" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"/>
    <rect x="30" y="34" width="700" height="10" rx="5" fill="#132A4A"/>${busway}
    <g stroke="#4A82FB" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" fill="none">${arrows}</g>
  </svg>`;
}

/** Abstract card artwork, four variants. */
function pattern(variant, iconName) {
  const faint = "#33507D", stroke = "#4A82FB";
  let art = "";

  if (variant === "circuit") {
    art = `<g fill="none" stroke="${faint}" stroke-opacity="0.55" stroke-width="1.25">
      <path d="M-20 60h120l30 30h130l40-40h140"/><path d="M-20 150h80l40-40h90l30 30h180"/>
      <path d="M60 -20v60l30 30v90l-30 30v60"/><path d="M300 -20v40l-30 30v70l40 40v100"/>
      <circle cx="100" cy="60" r="4" fill="${stroke}" stroke="none"/><circle cx="260" cy="50" r="4" fill="${stroke}" stroke="none"/>
      <circle cx="120" cy="110" r="4" fill="${stroke}" stroke="none"/><circle cx="310" cy="180" r="4" fill="${stroke}" stroke="none"/>
    </g>`;
  } else if (variant === "topology") {
    let feet = "";
    [40, 120, 200, 280, 360].forEach((x) => { feet += `<rect x="${x - 14}" y="200" width="28" height="14" rx="3" fill="#0D1E38"/>`; });
    art = `<g fill="none" stroke="${faint}" stroke-opacity="0.5" stroke-width="1.25">
      <path d="M200 40 80 140M200 40l120 100M200 40v60M80 140v60M320 140v60M80 140h240"/>
      <circle cx="200" cy="40" r="9" fill="#0A1730" stroke="${stroke}" stroke-width="1.5"/>
      <circle cx="80" cy="140" r="7" fill="#0A1730"/><circle cx="320" cy="140" r="7" fill="#0A1730"/>
      <circle cx="200" cy="100" r="5" fill="${stroke}" stroke="none" opacity="0.8"/>${feet}
    </g>`;
  } else if (variant === "stack") {
    for (let i = 0; i < 4; i++) {
      let bays = "";
      for (let b = 0; b < 6; b++) {
        bays += `<rect x="${112 + i * 8 + b * 26}" y="${46 + i * 42}" width="18" height="18" rx="2" fill="#050E1B"/>`;
      }
      art += `<rect x="${70 + i * 8}" y="${40 + i * 42}" width="${260 - i * 16}" height="30" rx="4" fill="#0D1E38" stroke="${faint}" stroke-opacity="0.5"/>
              <circle cx="${92 + i * 8}" cy="${55 + i * 42}" r="3" fill="${i === 1 ? "#F26522" : stroke}"/>${bays}`;
    }
  } else {
    let rings = "";
    [40, 70, 100, 130, 160].forEach((r, i) => {
      rings += `<circle cx="200" cy="240" r="${r}" stroke-opacity="${0.5 - i * 0.07}"/>`;
    });
    art = `<g fill="none" stroke="${faint}" stroke-opacity="0.5" stroke-width="1.25">${rings}
      <path d="M0 200h60l20-40 24 80 26-120 24 160 22-90 20 10h204" stroke="${stroke}"/></g>`;
  }

  const badge = iconName
    ? `<span class="pattern__badge">${icon(iconName, 21)}</span>`
    : "";

  return `<div class="pattern">
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${art}</svg>
    <span class="pattern__scrim"></span>${badge}
  </div>`;
}

/* --------------------------------------------------------------- renderers */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function renderHeader() {
  $("#nav-list").innerHTML = NAV.map((item, i) => `
    <li class="nav__item" data-menu="${i}">
      <a class="nav__link" href="${item.href}">
        ${item.label}
        ${item.columns ? icon("chevronDown", 14, "chev") : ""}
      </a>
    </li>`).join("");

  $("#panels").innerHTML = NAV.map((item, i) => {
    if (!item.columns) return "";
    return `<div class="panel" data-panel="${i}" hidden>
      <div class="container mega">
        <a class="mega__feature" href="${item.href}">
          <span class="grid-blueprint"></span>
          <div>
            <span class="mega__eyebrow">${item.feature.eyebrow}</span>
            <h3>${item.feature.title}</h3>
            <p>${item.feature.body}</p>
          </div>
          <span class="mega__cta">${item.feature.cta}${icon("arrowRight", 16, "arrow")}</span>
        </a>
        <div class="mega__cols">
          ${item.columns.map((col) => `
            <div>
              <p class="mega__heading">${col.heading}</p>
              <ul>${col.links.map((l) => `
                <li><a class="mega__link" href="${item.href}">
                  <span class="mega__icon">${icon(l.icon, 17)}</span>
                  <span>
                    <span class="mega__label">${l.label}</span>
                    ${l.desc ? `<span class="mega__desc">${l.desc}</span>` : ""}
                  </span>
                </a></li>`).join("")}
              </ul>
            </div>`).join("")}
        </div>
      </div>
    </div>`;
  }).join("");

  $("#drawer-list").innerHTML = NAV.map((item, i) => {
    if (!item.columns) {
      return `<li class="drawer__item"><a class="drawer__trigger" href="${item.href}" data-close>${item.label}${icon("arrowRight", 18)}</a></li>`;
    }
    return `<li class="drawer__item" data-drawer="${i}">
      <button class="drawer__trigger" type="button" aria-expanded="false">
        ${item.label}${icon("chevronDown", 20, "chev")}
      </button>
      <div class="drawer__body"><div class="drawer__inner">
        ${item.columns.map((col) => `
          <div class="drawer__group">
            <p class="drawer__heading">${col.heading}</p>
            <ul>${col.links.map((l) => `
              <li><a class="drawer__link" href="${item.href}" data-close>${icon(l.icon, 18)}${l.label}</a></li>`).join("")}
            </ul>
          </div>`).join("")}
      </div></div>
    </li>`;
  }).join("");
}

function renderSections() {
  /* Hero */
  $("#hero-rack").innerHTML = serverRackVisual();

  /* Categories */
  $("#categories-grid").innerHTML = CATEGORIES.map((c) => `
    <a class="card cat reveal" href="#contact">
      <span class="cat__icon">${icon(c.icon, 23)}</span>
      <h3>${c.title}</h3>
      <p>${c.blurb}</p>
      <ul class="cat__items">${c.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      <span class="card__more">View details${icon("arrowRight", 15, "arrow")}</span>
    </a>`).join("");

  /* Core solutions */
  $("#solutions-grid").innerHTML = CORE_SOLUTIONS.map((s) => `
    <a class="card reveal" href="#contact">
      <div class="sol__media">${pattern(s.variant, s.icon)}</div>
      <div class="sol__body">
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        <ul class="tags">${s.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        <span class="card__more">Explore solution${icon("arrowRight", 16, "arrow")}</span>
      </div>
    </a>`).join("");

  /* Rack server visual + features */
  $("#rack-server-visual").innerHTML = rackServerVisual();
  $("#server-features").innerHTML = SERVER_FEATURES.map((f) => `
    <div class="feature reveal">
      <span class="feature__icon">${icon(f.icon, 18)}</span>
      <div><dt>${f.title}</dt><dd>${f.body}</dd></div>
    </div>`).join("");

  /* Switch */
  $("#switch-visual").innerHTML = networkSwitchVisual();
  $("#switch-products").innerHTML = SWITCH_PRODUCTS.map((p) => `
    <div class="card reveal" style="padding:1.5rem">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem">
        <h3 style="font-size:1rem;font-weight:700">${p.title}</h3>
        ${icon("arrowUpRight", 16)}
      </div>
      <p style="margin-top:0.5rem;font-size:0.8125rem;line-height:1.6;color:var(--ink-soft)">${p.body}</p>
    </div>`).join("");

  /* Security */
  $("#security-visual").innerHTML = securityVisual();
  $("#security-caps").innerHTML = SECURITY_CAPS.map((c) => `
    <div class="cap reveal">
      <span class="cap__icon">${icon(c.icon, 18)}</span>
      <h3>${c.title}</h3><p>${c.body}</p>
    </div>`).join("");

  /* Data center */
  $("#dc-visual").innerHTML = dataCenterVisual();
  $("#dc-legend").innerHTML = DC_ELEMENTS.map((e) => `<li>${icon(e.icon, 16)}${e.label}</li>`).join("");
  $("#dc-legend-mobile").innerHTML = DC_ELEMENTS.map((e) => `<li>${icon(e.icon, 17)}${e.label}</li>`).join("");

  /* Process */
  $("#process-grid").innerHTML = PROCESS.map((s) => `
    <div class="reveal"><div class="step">
      <div class="step__top">
        <span class="step__num">${s.number}</span>
        <span class="step__icon">${icon(s.icon, 21)}</span>
      </div>
      <h3>${s.title}</h3><p>${s.body}</p>
    </div></div>`).join("");

  /* Industries */
  $("#industries-grid").innerHTML = INDUSTRIES.map((i) => `
    <a class="ind reveal" href="#contact">
      <span class="ind__art">${pattern(i.variant)}</span>
      <span class="ind__scrim"></span>
      <span class="ind__body">
        <span class="ind__icon">${icon(i.icon, 20)}</span>
        <h3>${i.title}</h3>
        <span class="ind__blurb"><p>${i.blurb}</p></span>
        <span class="ind__more">View sector${icon("arrowUpRight", 15)}</span>
      </span>
    </a>`).join("");

  /* Why choose us */
  $("#reasons-grid").innerHTML = REASONS.map((r) => `
    <div class="reveal"><div class="reason">
      <span class="reason__icon">${icon(r.icon, 21)}</span>
      <h3>${r.title}</h3><p>${r.body}</p>
    </div></div>`).join("");

  /* Partners */
  $("#partner-rows").innerHTML = PARTNERS.map((p) => `
    <div class="partner-row reveal">
      <div class="partner__head">
        <span class="partner__icon">${icon(p.icon, 20)}</span>
        <div><h3>${p.title}</h3><p>${p.body}</p></div>
      </div>
      <ul class="slots">${"<li class=\"slot\">Logo slot</li>".repeat(4)}</ul>
    </div>`).join("");

  /* Case studies */
  $("#cases-grid").innerHTML = CASES.map((c) => `
    <article class="card reveal">
      <div class="case__media">${pattern(c.variant, c.icon)}<span class="case__sector">${c.sector}</span></div>
      <div class="case__body">
        <h3>${c.title}</h3>
        <p class="case__summary">${c.summary}</p>
        <dl class="case__rows">
          <div><dt>Challenge</dt><dd>${c.challenge}</dd></div>
          <div><dt>Solution</dt><dd>${c.solution}</dd></div>
          <div><dt>Result</dt><dd>${c.result}</dd></div>
        </dl>
        <span class="card__more">View Case Study${icon("arrowRight", 16, "arrow")}</span>
      </div>
    </article>`).join("");

  /* About artwork */
  $("#about-art").innerHTML = pattern("topology");

  /* Footer columns */
  $("#footer-nav").innerHTML = FOOTER_COLUMNS.map((c) => `
    <div>
      <h3>${c.heading}</h3>
      <ul>${c.links.map((l) => `<li><a href="#contact">${l}</a></li>`).join("")}</ul>
    </div>`).join("");

  /* Requirement options */
  const select = $("#requirement");
  REQUIREMENTS.forEach((r) => {
    const option = document.createElement("option");
    option.value = r;
    option.textContent = r;
    select.append(option);
  });
}

/* ---------------------------------------------------------------- header UX */

function initHeader() {
  const header = $("#header");
  const panels = $$("[data-panel]");
  const items = $$("[data-menu]");
  const backdrop = $("#backdrop");
  const searchPanel = $("#search-panel");
  const drawer = $("#drawer");
  let openIndex = null;
  let closeTimer = null;

  function showPanel(index) {
    clearTimeout(closeTimer);
    if (openIndex === index) return;
    openIndex = index;
    panels.forEach((p) => { p.hidden = p.dataset.panel !== String(index); });
    items.forEach((it) => it.classList.toggle("is-active", it.dataset.menu === String(index)));
    searchPanel.hidden = true;
    backdrop.hidden = false;
    header.classList.add("is-open");
  }

  function closePanels() {
    openIndex = null;
    panels.forEach((p) => { p.hidden = true; });
    items.forEach((it) => it.classList.remove("is-active"));
    backdrop.hidden = true;
    if (searchPanel.hidden) header.classList.remove("is-open");
  }

  items.forEach((item) => {
    const index = Number(item.dataset.menu);
    const hasPanel = $(`[data-panel="${index}"]`);
    item.addEventListener("mouseenter", () => hasPanel ? showPanel(index) : closePanels());
    item.addEventListener("focusin", () => hasPanel ? showPanel(index) : closePanels());
  });

  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => clearTimeout(closeTimer));
  });
  searchPanel.addEventListener("mouseenter", () => clearTimeout(closeTimer));

  header.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(closePanels, 140);
  });

  // The backdrop is a descendant of <header> and covers the viewport below it,
  // so the header's own mouseleave never fires once a panel is open. Treat
  // entering the backdrop as leaving the header.
  // Search is opened by an explicit click, so it closes on click-outside or
  // Escape only — never on hover-out, which would fight the user mid-typing.
  backdrop.addEventListener("mouseenter", () => {
    closeTimer = setTimeout(closePanels, 140);
  });

  backdrop.addEventListener("click", () => { closePanels(); closeSearch(); });

  // Sticky condense
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Search
  const searchBtn = $("#search-btn");
  const searchInput = $("#search-input");

  function openSearch() {
    closePanels();
    searchPanel.hidden = false;
    backdrop.hidden = false;
    header.classList.add("is-open");
    searchBtn.innerHTML = icon("close", 20);
    searchInput.focus();
  }
  function closeSearch() {
    searchPanel.hidden = true;
    backdrop.hidden = openIndex !== null ? false : true;
    if (openIndex === null) header.classList.remove("is-open");
    searchBtn.innerHTML = icon("search", 20);
  }
  searchBtn.addEventListener("click", () => (searchPanel.hidden ? openSearch() : closeSearch()));
  $("#search-close").addEventListener("click", closeSearch);

  // Search index built from the nav tree, exactly like lib/search.ts
  const index = NAV.flatMap((item) =>
    (item.columns || []).flatMap((col) =>
      col.links.map((l) => ({ label: l.label, desc: l.desc || "", section: item.label, href: item.href })),
    ),
  ).concat([
    { label: "Request a Quote", desc: "Send us your requirement", section: "Contact", href: "#contact" },
    { label: "Delivery Process", desc: "Consult, design, supply, deploy, manage, support", section: "Services", href: "#process" },
    { label: "Technology Ecosystem", desc: "Our OEM and platform partner categories", section: "Company", href: "#partners" },
  ]);

  const results = $("#search-results");
  const suggest = $("#search-suggest");

  function runSearch(value) {
    const q = value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = ""; results.hidden = true; suggest.hidden = false; return; }
    suggest.hidden = true;
    results.hidden = false;
    const hits = index
      .map((e) => {
        const hay = `${e.label} ${e.section} ${e.desc}`.toLowerCase();
        if (!hay.includes(q)) return null;
        const label = e.label.toLowerCase();
        return { e, score: label.startsWith(q) ? 0 : label.includes(q) ? 1 : 2 };
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score)
      .slice(0, 8);

    results.innerHTML = hits.length
      ? hits.map(({ e }) => `<li><a class="search__result" href="${e.href}" data-close-search>
          <span><strong>${e.label}</strong><span>${e.desc || e.section}</span></span>
          <span class="search__tag">${e.section}</span></a></li>`).join("")
      : `<li class="search__empty">No matches for “${value}”. Try a product category, or
         <a href="#contact" style="color:var(--accent-600);font-weight:600">send us the requirement</a>.</li>`;
  }

  searchInput.addEventListener("input", (e) => runSearch(e.target.value));
  $$(".chip").forEach((chip) => chip.addEventListener("click", () => {
    searchInput.value = chip.textContent.trim();
    runSearch(searchInput.value);
  }));
  results.addEventListener("click", (e) => { if (e.target.closest("[data-close-search]")) closeSearch(); });

  // Mobile drawer
  const burger = $("#burger");
  function closeDrawer() {
    drawer.hidden = true;
    document.body.style.overflow = "";
    burger.innerHTML = icon("menu", 22);
  }
  burger.addEventListener("click", () => {
    if (drawer.hidden) {
      closePanels(); closeSearch();
      drawer.hidden = false;
      document.body.style.overflow = "hidden";
      burger.innerHTML = icon("close", 22);
    } else closeDrawer();
  });
  drawer.addEventListener("click", (e) => {
    const trigger = e.target.closest(".drawer__trigger");
    if (trigger && trigger.tagName === "BUTTON") {
      const item = trigger.closest(".drawer__item");
      const open = item.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(open));
    }
    if (e.target.closest("[data-close]")) closeDrawer();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closePanels(); closeSearch(); closeDrawer(); }
  });
}

/* -------------------------------------------------------------- reveal + form */

function initReveal() {
  const nodes = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.children].filter((c) => c.classList.contains("reveal"));
      const delay = Math.min(siblings.indexOf(entry.target), 3) * 80;
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });
  nodes.forEach((n) => observer.observe(n));
}

function initForm() {
  const form = $("#enquiry-form");
  const shell = $("#form-shell");

  const rules = {
    fullName: (v) => (!v.trim() ? "Please enter your name." : ""),
    company: (v) => (!v.trim() ? "Please enter your company." : ""),
    email: (v) => (!v.trim() ? "Please enter a business email."
      : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "That email address does not look right." : ""),
    phone: (v) => (!v.trim() ? "Please enter a phone number."
      : v.replace(/\D/g, "").length < 8 ? "Please enter a complete phone number." : ""),
    requirement: (v) => (!v ? "Please select a requirement." : ""),
    message: (v) => (!v.trim() ? "Tell us briefly what you need." : ""),
  };

  function setError(name, message) {
    const field = form.querySelector(`[name="${name}"]`).closest(".field");
    field.classList.toggle("has-error", Boolean(message));
    let node = field.querySelector(".field__error");
    if (message) {
      if (!node) {
        node = document.createElement("p");
        node.className = "field__error";
        node.setAttribute("role", "alert");
        field.append(node);
      }
      node.textContent = message;
    } else if (node) node.remove();
  }

  form.addEventListener("input", (e) => {
    if (rules[e.target.name]) setError(e.target.name, "");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    let valid = true;
    Object.keys(rules).forEach((name) => {
      const message = rules[name](String(data[name] || ""));
      setError(name, message);
      if (message) valid = false;
    });
    if (!valid) {
      form.querySelector(".has-error [name]")?.focus();
      return;
    }
    // The real app POSTs to /api/enquiry; this preview has no server.
    shell.innerHTML = `<div class="form__success">
      <span class="tick">${icon("check", 28)}</span>
      <h3>Enquiry received</h3>
      <p>Thank you — an engineer will review your requirement and respond with a
      configuration or a set of clarifying questions.</p>
      <p style="font-size:0.75rem;color:var(--ink-soft);margin-top:1rem">
      (Preview only — nothing was sent. The Next.js app posts this to <code>/api/enquiry</code>.)</p>
      <button type="button" id="reset-form">Submit another enquiry</button>
    </div>`;
    $("#reset-form").addEventListener("click", () => location.reload());
  });
}

/* -------------------------------------------------------------------- boot */

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderSections();
  initHeader();
  initReveal();
  initForm();
  $$("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon, Number(el.dataset.size || 18));
  });
  $("#year").textContent = new Date().getFullYear();
});
