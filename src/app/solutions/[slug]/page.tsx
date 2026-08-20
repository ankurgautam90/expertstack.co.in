import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/DetailPageView";
import { catalog, getDetailPage, getSiblings } from "@/lib/data/catalog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return catalog.solutions.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = getDetailPage("solutions", params.slug);
  if (!page) return { title: "Solution not found" };

  return { title: page.title, description: page.summary };
}

export default function SolutionPage({ params }: Params) {
  const page = getDetailPage("solutions", params.slug);
  if (!page) notFound();

  return (
    <DetailPageView
      section="solutions"
      page={page}
      siblings={getSiblings("solutions", params.slug)}
    />
  );
}
