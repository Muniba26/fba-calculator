import Link from "next/link";
import { getGuideBySlug } from "@/lib/guides";

type AutoRelatedGuidesProps = {
  relatedSlugs?: string[];
};

export default function AutoRelatedGuides({
  relatedSlugs = [],
}: AutoRelatedGuidesProps) {
  const relatedGuides = relatedSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean);

  if (!relatedGuides.length) return null;

  return (
    <section className="mt-14 rounded-2xl border border-neutral-200 bg-white p-6">
      <h2 className="text-2xl font-bold text-neutral-900">Related Guides</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {relatedGuides.map((guide) => (
          <Link
            key={guide!.slug}
            href={`/guides/${guide!.slug}`}
            className="block rounded-xl border border-neutral-200 p-4 hover:shadow-sm transition"
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              {guide!.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-700">{guide!.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}