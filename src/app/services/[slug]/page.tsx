import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/DetailPageView";
import { catalog, getDetailPage, getSiblings } from "@/lib/data/catalog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return catalog.services.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = getDetailPage("services", params.slug);
  if (!page) return { title: "Service not found" };

  return { title: page.title, description: page.summary };
}

export default function ServicePage({ params }: Params) {
  const page = getDetailPage("services", params.slug);
  if (!page) notFound();

  return (
    <DetailPageView
      section="services"
      page={page}
      siblings={getSiblings("services", params.slug)}
    />
  );
}
