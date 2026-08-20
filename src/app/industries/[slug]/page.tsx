import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/DetailPageView";
import { catalog, getDetailPage, getSiblings } from "@/lib/data/catalog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return catalog.industries.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = getDetailPage("industries", params.slug);
  if (!page) return { title: "Industry not found" };

  return { title: page.title, description: page.summary };
}

export default function IndustryPage({ params }: Params) {
  const page = getDetailPage("industries", params.slug);
  if (!page) notFound();

  return (
    <DetailPageView
      section="industries"
      page={page}
      siblings={getSiblings("industries", params.slug)}
    />
  );
}
