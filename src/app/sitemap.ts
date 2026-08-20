import type { MetadataRoute } from "next";
import { catalog } from "@/lib/data/catalog";
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
      priority: 0.7,
    })),
  );

  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...detailRoutes,
    ...COMPANY_PAGES.map((slug) => ({
      url: `${site.url}/company/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
