import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-[70vh] bg-[#f6f0e6]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Back to Home button */}
        <div className="flex justify-end mb-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white font-semibold shadow-sm
                       hover:-translate-y-0.5 hover:shadow-md transition"
          >
            Back To Home
          </Link>
        </div>

        {/* Article card */}
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            How to Rank Your Amazon Product in 2026
          </h1>
          <p className="mt-4 text-lg text-black/60">
            Article page ready. Next step: I will write the full SEO article content here.
          </p>
        </div>
      </div>
    </main>
  );
}
