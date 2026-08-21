import type { MetadataRoute } from "next";
import { catalog } from "@/lib/data/catalog";
import { insights } from "@/lib/data/insights";
import { site } from "@/lib/site";

/** Top-level pages of the multi-page site. */
const TOP_LEVEL = [
  "solutions",
  "services",
  "technology",
  "industries",
  "about",
  "case-studies",
  "contact",
];

/** Legal pages that still live under /company. */
const COMPANY_PAGES = ["privacy-policy", "terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  const detailRoutes = (
    Object.keys(catalog) as (keyof typeof catalog)[]
  ).flatMap((section) =>
    catalog[section].map((page) => ({
      url: `${site.url}/${section}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  const insightRoutes = insights.map((insight) => ({
    url: `${site.url}/insights/${insight.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...TOP_LEVEL.map((slug) => ({
      url: `${site.url}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${site.url}/insights`, changeFrequency: "weekly", priority: 0.7 },
    ...detailRoutes,
    ...insightRoutes,
    ...COMPANY_PAGES.map((slug) => ({
      url: `${site.url}/company/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
