import { navigation } from "@/lib/navigation";

export type SearchEntry = {
  label: string;
  href: string;
  section: string;
  description?: string;
  keywords?: string;
};

/** Flattened index built from the navigation tree plus a few page anchors. */
export const searchIndex: SearchEntry[] = [
  ...navigation.flatMap((item) =>
    (item.menu?.columns ?? []).flatMap((column) =>
      column.links.map((link) => ({
        label: link.label,
        href: link.href,
        section: item.label,
        description: link.description,
      })),
    ),
  ),
  {
    label: "Talk to an Expert",
    href: "/contact",
    section: "Contact",
    description: "Discuss your requirement with a consultant",
    keywords: "contact consultation enquiry requirement expert",
  },
  {
    label: "Engagement Model",
    href: "/#process",
    section: "Services",
    description: "Consulting, architecture, integration, implementation, security, managed services, support",
    keywords: "process methodology lifecycle delivery steps",
  },
  {
    label: "Technology Ecosystem",
    href: "/#partners",
    section: "Company",
    description: "The platform categories we build on",
    keywords: "partners vendors platforms ecosystem",
  },
];

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const scored = searchIndex
    .map((entry) => {
      const haystack = [
        entry.label,
        entry.section,
        entry.description ?? "",
        entry.keywords ?? "",
      ]
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(q)) return null;

      // Label matches outrank description matches; prefix beats substring.
      const label = entry.label.toLowerCase();
      const score = label.startsWith(q) ? 0 : label.includes(q) ? 1 : 2;
      return { entry, score };
    })
    .filter((item): item is { entry: SearchEntry; score: number } => item !== null)
    .sort((a, b) => a.score - b.score);

  return scored.slice(0, limit).map((item) => item.entry);
}
