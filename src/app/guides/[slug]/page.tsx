"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GUIDES } from "@/lib/guides";
import GuideFaqSchema from "@/components/GuideFaqSchema";
import GuideToc from "@/components/GuideToc";
import RelatedGuides from "@/components/RelatedGuides";
import ProductResearchLinks from "@/components/ProductResearchLinks";

export default function GuidePage() {
  const params = useParams();
  const slug = (params?.slug as string) || "";

  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return (
  <main className="mx-auto max-w-7xl px-4 py-10">
       <GuideFaqSchema items={[]} />
        <Link
          href="/guides"
          className="mb-6 inline-flex items-center text-sm font-medium text-neutral-700 hover:text-black"
        >
          ← Back
        </Link>

        <h1 className="text-2xl font-bold text-red-600">Guide not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/guides"
        className="mb-6 inline-flex items-center text-sm font-medium text-neutral-700 hover:text-black"
      >
        ← Back
      </Link>

      <header className="mb-8">
  <h1 className="text-4xl font-bold text-neutral-900">{guide.title}</h1>

  {guide.updatedAt ? (
    <p className="mt-3 text-sm text-neutral-500">
      Last updated: {guide.updatedAt}
    </p>
  ) : null}
</header>
<div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
  <div className="lg:sticky lg:top-24 lg:self-start">
    <GuideToc />
  </div>

  <div>
    {guide.heroImage ? (
      <div className="my-8">
        <Image
          src={guide.heroImage}
          alt={guide.title}
          width={1200}
          height={700}
          className="h-auto w-full rounded-2xl"
        />
      </div>
    ) : null}

    <article
      data-guide-content
      className="prose prose-neutral max-w-none"
      dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
    />
    <RelatedGuides currentSlug={guide.slug} />
    <ProductResearchLinks />
    <section className="mt-16 rounded-2xl bg-neutral-100 p-8 text-center">
  <h2 className="text-2xl font-bold mb-4">
    Calculate Amazon FBA Profit Before Selling
  </h2>

  <p className="text-neutral-600 mb-6">
    Use our Amazon UAE FBA Calculator to estimate fees, profit margins, and
    selling costs before launching your product.
  </p>

  <Link
    href="/calculator"
    className="inline-block rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-neutral-800"
  >
    Use FBA Calculator
  </Link>
</section>
  </div>
</div>
    </main>
  );
}