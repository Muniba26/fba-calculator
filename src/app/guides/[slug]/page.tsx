"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GUIDES } from "@/lib/guides";

export default function GuidePage() {
  const params = useParams();
  const slug = (params?.slug as string) || "";

  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
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
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
      />
    </main>
  );
}