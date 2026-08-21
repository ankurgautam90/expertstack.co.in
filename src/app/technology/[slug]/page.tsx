import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/DetailPageView";
import { catalog, getDetailPage, getSiblings } from "@/lib/data/catalog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return catalog.technology.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = getDetailPage("technology", params.slug);
  if (!page) return { title: "Technology layer not found" };

  return { title: page.title, description: page.summary };
}

export default function TechnologyPage({ params }: Params) {
  const page = getDetailPage("technology", params.slug);
  if (!page) notFound();

  return (
    <DetailPageView
      section="technology"
      page={page}
      siblings={getSiblings("technology", params.slug)}
    />
  );
}
