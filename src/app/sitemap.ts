import type { MetadataRoute } from "next";
import { catalog } from "@/lib/data/catalog";
import { insights } from "@/lib/data/insights";
import { site } from "@/lib/site";

const COMPANY_PAGES = [
  "about-us",
  "why-choose-us",
  "partners",
  "case-studies",
  "privacy-policy",
  "terms-and-conditions",
];

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
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.9 },
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
