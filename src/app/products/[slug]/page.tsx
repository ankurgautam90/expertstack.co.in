import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/DetailPageView";
import { catalog, getDetailPage, getSiblings } from "@/lib/data/catalog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return catalog.products.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = getDetailPage("products", params.slug);
  if (!page) return { title: "Product not found" };

  return { title: page.title, description: page.summary };
}

export default function ProductPage({ params }: Params) {
  const page = getDetailPage("products", params.slug);
  if (!page) notFound();

  return (
    <DetailPageView
      section="products"
      page={page}
      siblings={getSiblings("products", params.slug)}
    />
  );
}
