import type { IconName } from "@/components/icons/Icon";
import type { VisualKey } from "@/lib/data/catalog";

/**
 * Engineering notes. Deliberately no publication dates — these are evergreen
 * positions rather than news, and inventing a posting history would be dishonest.
 * Add a `date` field here if the business starts publishing on a schedule.
 */
export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  icon: IconName;
  visual: VisualKey;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
  takeaway: string;
};

export const insights: Insight[] = [
  {
    slug: "integration-is-where-projects-fail",
    title: "Integration is where projects fail",
    category: "Systems Integration",
    excerpt:
      "Individual platforms rarely cause the delay. The schedule goes on making them agree with each other.",
    readTime: "4 min read",
    icon: "workflow",
    visual: "integration",
    intro: [
      "Ask why a technology programme slipped and the answer is almost never that a platform failed to install. Installation is the well-documented part. What consumes the schedule is the space between systems: certificates that do not chain, identity attributes that do not match, two products that both believe they own the same record.",
      "Integration is treated as a task at the end of a plan when it is really the plan itself.",
    ],
    sections: [
      {
        heading: "The boundary is nobody's default responsibility",
        paragraphs: [
          "Each vendor is accountable for their own product working. None is accountable for the interface between two products, which is precisely where the difficulty concentrates. When something breaks across that line, the honest answer from both sides is that their component is behaving as designed.",
          "The fix is contractual as much as technical: one party has to own the boundary, and it has to be written down before anyone starts.",
        ],
      },
      {
        heading: "Name every interface before you build",
        paragraphs: [
          "A useful architecture document lists interfaces explicitly — what data moves, in which direction, how often, who owns the record, and what should happen when the other end is unavailable. That last question is the one most often skipped, and the one that determines whether a failure is noticed in minutes or at month end.",
          "Interfaces discovered during implementation are always more expensive than interfaces designed before it.",
        ],
      },
      {
        heading: "Test the failure, not just the success",
        paragraphs: [
          "An integration that has only ever been tested on the happy path is untested. Proving that a message retries, that a duplicate is rejected, and that somebody is alerted when a queue stops draining is worth more than another demonstration of a record moving cleanly.",
        ],
      },
    ],
    takeaway:
      "Design the boundaries first, give them an owner, and test how they fail — not only how they work.",
  },
  {
    slug: "what-cloud-readiness-actually-means",
    title: "What cloud readiness actually means",
    category: "Cloud & Infrastructure",
    excerpt:
      "The useful question is not whether to move, but which workloads belong where — and what each costs to run there.",
    readTime: "5 min read",
    icon: "cloud",
    visual: "cloud",
    intro: [
      "Cloud programmes tend to start with a destination rather than an assessment. The decision is made at a strategic level, and the engineering team is left to discover which workloads will not fit — usually during migration, when the options have narrowed.",
      "A readiness assessment inverts that. It looks at what each workload actually needs before deciding where it should live.",
    ],
    sections: [
      {
        heading: "Placement is a per-workload decision",
        paragraphs: [
          "Latency between an application and its database, licensing that is priced per physical core, data that must remain in a jurisdiction, and dependencies on hardware that has no cloud equivalent — each of these can determine placement on its own, and none of them appears on a strategy slide.",
          "Assessed properly, most estates split rather than move wholesale. That is a legitimate outcome, not a failure of ambition.",
        ],
      },
      {
        heading: "Hybrid is only cheap if it is designed",
        paragraphs: [
          "A split estate costs more to run than either extreme if identity, networking, monitoring and change control are duplicated across both sides. It costs less than either if those layers are designed once and applied consistently.",
          "The difference between the two outcomes is almost entirely architectural, and it is decided early.",
        ],
      },
      {
        heading: "Operating model, not just landing zone",
        paragraphs: [
          "Migration finishes; operation does not. Cost governance, capacity review, patching and access management all need an owner and a rhythm. Programmes that treat these as a phase-two concern generally discover the bill before they discover the process.",
        ],
      },
    ],
    takeaway:
      "Assess per workload, design the shared layers once, and agree who operates the result before you migrate.",
  },
  {
    slug: "identity-is-the-real-perimeter",
    title: "Identity is the real perimeter",
    category: "Cybersecurity",
    excerpt:
      "Once applications and users are distributed, network location stops being a useful proxy for trust.",
    readTime: "4 min read",
    icon: "identity",
    visual: "security",
    intro: [
      "Perimeter security assumed that being inside the network implied legitimacy. That assumption held when applications and users were both in the building. It does not survive cloud applications, remote work and third-party access.",
      "What replaces it is not a product. It is making identity authoritative and then actually integrating it.",
    ],
    sections: [
      {
        heading: "One directory, genuinely connected",
        paragraphs: [
          "Most estates have an identity platform. Fewer have one that every significant application authenticates against. The gap between those two states is where orphaned accounts, inconsistent password policy and slow leaver processes live.",
          "Integration is the work here — not procurement.",
        ],
      },
      {
        heading: "Privilege is the highest-value target",
        paragraphs: [
          "Shared administrative credentials remain common, and they defeat attribution entirely: an audit can establish that something was changed, but not by whom. Brokering privileged access, recording sessions and making elevation time-bound changes that, and it is usually achievable without touching the applications themselves.",
        ],
      },
      {
        heading: "Segmentation still matters",
        paragraphs: [
          "Identity does not replace network controls; it complements them. Strong authentication limits who gets in, and segmentation limits where a compromised session can go. Environments that invest in one and neglect the other tend to discover the imbalance during an incident.",
        ],
      },
    ],
    takeaway:
      "Make identity authoritative, integrate it everywhere, control privilege — and keep segmenting.",
  },
  {
    slug: "the-handover-problem",
    title: "The handover problem",
    category: "Managed Services",
    excerpt:
      "Most environments do not fail on day one. They drift, quietly, from the design they were built to.",
    readTime: "3 min read",
    icon: "monitor",
    visual: "signal",
    intro: [
      "A well-run implementation ends with documentation, test evidence and a working environment. Eighteen months later that environment frequently bears only a partial resemblance to what was handed over — not through negligence, but through ordinary accumulated change.",
    ],
    sections: [
      {
        heading: "Drift is normal and mostly invisible",
        paragraphs: [
          "A firewall rule added during an incident and never reviewed. A monitoring agent that stopped reporting after a rebuild. A certificate renewed manually by someone who has since left. None of these is dramatic; together they mean the documented design no longer describes the running system.",
        ],
      },
      {
        heading: "Monitoring only helps if someone reads it",
        paragraphs: [
          "Alert volume is the usual failure. A platform that produces hundreds of notifications a day trains its audience to ignore all of them. Correlating events into a small number of actionable alerts, each with a defined recipient and escalation, is worth more than broader coverage.",
        ],
      },
      {
        heading: "Review the architecture, not just the tickets",
        paragraphs: [
          "A periodic service review that covers capacity, risk and whether the architecture still fits what the business is doing will catch the structural problems that incident counts never surface.",
        ],
      },
    ],
    takeaway:
      "Assume drift, monitor for signal rather than volume, and review the design — not only the incidents.",
  },
  {
    slug: "sizing-against-evidence",
    title: "Sizing against evidence, not habit",
    category: "Architecture",
    excerpt:
      "Most platforms are specified from the last one that was bought, adjusted upward for comfort.",
    readTime: "4 min read",
    icon: "gauge",
    visual: "server",
    intro: [
      "Ask how a platform was sized and the honest answer is often that it resembles the previous one with more of everything. It is a defensible instinct — over-provisioning rarely causes an outage — but it produces estates that are expensive in aggregate and still wrong in specific places.",
    ],
    sections: [
      {
        heading: "Measure before you specify",
        paragraphs: [
          "Utilisation, peak concurrency, IOPS profile and growth trend are usually available from the existing environment and rarely consulted. A fortnight of collection ahead of a design produces better decisions than any amount of vendor sizing guidance.",
        ],
      },
      {
        heading: "Headroom is a design decision",
        paragraphs: [
          "Failover capacity, growth allowance and burst headroom should each be stated explicitly and justified, rather than bundled into a general margin. Stated separately, they can be discussed; bundled, they are simply cost nobody can defend.",
        ],
      },
      {
        heading: "Right-sizing is not a one-off",
        paragraphs: [
          "Workloads change. A platform sized correctly at design time will not stay correct, which is an argument for periodic capacity review rather than for buying three years of margin up front.",
        ],
      },
    ],
    takeaway:
      "Collect real utilisation, state each margin separately, and revisit capacity as a routine.",
  },
  {
    slug: "ot-it-convergence-without-collapse",
    title: "OT/IT convergence without collapsing the boundary",
    category: "Industry",
    excerpt:
      "Production data has to reach business systems. That is not the same as putting both on one flat network.",
    readTime: "4 min read",
    icon: "factory",
    visual: "circuit",
    intro: [
      "Manufacturing and utility environments face a genuine tension. The business needs production data in its reporting and planning systems; the plant needs determinism, long equipment lifecycles and continuity. Meeting the first requirement by flattening the two networks together satisfies nobody safely.",
    ],
    sections: [
      {
        heading: "Different requirements, not different maturity",
        paragraphs: [
          "Operational technology is often described as behind, when in practice it is optimised for a different objective. Equipment with a fifteen-year life and a patching window measured in hours per year is not badly managed; it is managed against continuity rather than change.",
        ],
      },
      {
        heading: "Integrate through a controlled path",
        paragraphs: [
          "A governed integration layer — inspected, segmented, monitored, and carrying only the data the business actually needs — lets production information reach enterprise systems without giving enterprise systems reach into the plant.",
        ],
      },
      {
        heading: "Design for the failure case",
        paragraphs: [
          "The important question is what happens to production when the integration path is unavailable. If the answer is anything other than 'production continues', the coupling is too tight.",
        ],
      },
    ],
    takeaway:
      "Move the data, not the boundary — and make sure production survives the integration being down.",
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
