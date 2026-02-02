import Link from "next/link";

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const titleMap: Record<string, string> = {
    "how-to-start-amazon-fba-2026": "How to Start Amazon FBA in 2026 (UAE & KSA)",
    "how-to-rank-amazon-product-2026": "How to Rank Your Amazon Product in 2026",
    "how-to-optimize-amazon-listing-2026": "How to Optimize Your Listing in 2026",
    "amazon-pricing-strategy-2026": "Pricing Strategy in 2026 (Profit + Fees + Competition)",
  };

  const title = titleMap[slug] ?? "Article";

  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        {/* ✅ Back To Home button INSIDE article page */}
        <div className="flex justify-end">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            Back To Home
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-8 backdrop-blur">
          <h1 className="text-3xl font-extrabold tracking-tight text-black md:text-4xl">
            {title}
          </h1>

          <p className="mt-4 text-sm text-black/70">
            SEO article content will be added here.
          </p>
        </div>
      </section>
    </main>
  );
}
