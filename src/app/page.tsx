import Link from "next/link";

const articles = [
  {
    title: "How to Start Amazon FBA in 2026 (UAE & KSA)",
    desc: "Beginner-friendly roadmap: product research, sourcing, pricing, and first shipment.",
    href: "/articles/how-to-start-amazon-fba-2026",
  },
  {
    title: "How to Rank Your Amazon Product in 2026",
    desc: "Practical ranking strategy: keywords, PPC structure, reviews, and conversion.",
    href: "/articles/how-to-rank-amazon-product-2026",
  },
  {
    title: "How to Optimize Your Listing in 2026",
    desc: "Title, images, A+ content, and SEO that improves CTR + conversion rate.",
    href: "/articles/how-to-optimize-amazon-listing-2026",
  },
  {
    title: "Pricing Strategy in 2026 (Profit + Fees + Competition)",
    desc: "Price smarter using fees, margin targets, and competitor positioning.",
    href: "/articles/amazon-pricing-strategy-2026",
  },
];

const icons = [
  // 0 check
  <svg key="i0" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path
      d="M20 7L9 18l-5-5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // 1 list
  <svg key="i1" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path
      d="M4 7h16M4 12h10M4 17h16"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>,
  // 2 clock
  <svg key="i2" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path
      d="M12 6v6l4 2"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12a9 9 0 1 1-9-9"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>,
  // 3 square
  <svg key="i3" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
    <path
      d="M7 7h10v10H7z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4h16v16H4z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.35"
    />
  </svg>,
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F1EA]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
          <div className="absolute top-16 -right-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-[999px] bg-white/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20">
          {/* ✅ 1) REMOVED the small text line above heading (the “Live calculator…” badge) */}

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-black md:text-5xl">
            Amazon FBA Profit Calculator
            <span className="block text-black/70">
              Clean, fast, and accurate fee estimates for UAE + KSA.
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Open Calculator
            </Link>
          </div>

          {/* Mini stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
              <div className="text-xs font-semibold text-black/60">Focus</div>
              <div className="mt-1 text-lg font-bold text-black">Fees + Profit</div>
              <div className="mt-1 text-sm text-black/70">
                Only what sellers actually need.
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
              <div className="text-xs font-semibold text-black/60">Speed</div>
              <div className="mt-1 text-lg font-bold text-black">Instant updates</div>
              <div className="mt-1 text-sm text-black/70">
                Results update as you change inputs.
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
              <div className="text-xs font-semibold text-black/60">Design</div>
              <div className="mt-1 text-lg font-bold text-black">2026 style</div>
              <div className="mt-1 text-sm text-black/70">
                Clean UI with subtle animations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            {/* ✅ 3) REPLACE heading + add your text line */}
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              Start Amazon Now
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-black/70 md:text-base">
              Do not Waste Money In Paid Courses
            </p>
          </div>

          {/* ✅ 2) REMOVED the “Use calculator →” tab completely */}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {articles.map((a, idx) => (
            <Link
              key={a.href}
              href={a.href}
              className="group rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-sm transition group-hover:scale-[1.02]">
                  {icons[idx] ?? icons[0]}
                </div>
                <div className="min-w-0">
                  <div className="text-lg font-bold text-black">{a.title}</div>
                  <div className="mt-1 text-sm text-black/70">{a.desc}</div>
                  <div className="mt-3 text-sm font-semibold text-black/80">
                    Read article →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
