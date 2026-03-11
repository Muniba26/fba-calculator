import Link from "next/link";
import { GUIDES } from "@/lib/guides";

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          Amazon FBA Guides
        </h1>

        <p className="mt-4 text-base text-neutral-600 md:text-lg">
          Practical guides for Amazon UAE & KSA sellers.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {GUIDES.map((guide, index) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />

            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                Guide {index + 1}
              </span>

              <span className="text-neutral-300 transition group-hover:text-neutral-500">
                →
              </span>
            </div>

            <h2 className="text-xl font-semibold leading-snug text-neutral-900">
              {guide.title}
            </h2>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-600">
              {guide.excerpt}
            </p>

            <div className="mt-6">
              <span className="text-sm font-semibold text-neutral-900 underline underline-offset-4">
                Open Guide
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
