import Link from "next/link";
import { GUIDES } from "@/lib/guides";

export default function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  const related = GUIDES.filter((g) => g.slug !== currentSlug).slice(0, 3);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Related Amazon FBA Guides</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {related.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block rounded-xl border border-neutral-200 p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
            <p className="text-sm text-neutral-600">{guide.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}