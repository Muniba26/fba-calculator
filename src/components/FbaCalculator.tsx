import Link from "next/link";

export default function FbaCalculator() {
  const points = [
    "Updated for 2026 Amazon fees & rules",
    "Free A–Z step-by-step guides for beginners & sellers",
    "No paid courses — learn everything here (save money)",
    "Real profit calculator for UAE & Saudi marketplace",
    "Simple, fast, no login required",
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-[36px] border border-slate-200 bg-white/70 p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: Seller Library */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-extrabold tracking-wide text-slate-900">Seller Library</h3>

            <div className="mt-4 space-y-3">
              <Card
                title="How to start Amazon FBA in UAE (step-by-step)"
                sub="Step by step guide"
              />
              <Card
                title="How to rank a product (2026 seller basics)"
                sub="Keywords + PPC"
              />
              <Card
                title="Optimize your listing for sales"
                sub="Images, A+ content"
              />
              <Card
                title="Price for profit"
                sub="ROI strategy"
              />
            </div>

            <Link
              href="/blog"
              className="mt-5 block w-full rounded-2xl bg-black px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
            >
              View all guides
            </Link>
          </aside>

          {/* Center: Hero */}
          <div className="rounded-3xl border border-slate-200 bg-[#fff6ea] p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Built for UAE & Saudi sellers
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
              Amazon FBA Profit Calculator{" "}
              <span className="text-slate-500">for UAE & Saudi sellers</span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-slate-700">
              Calculate profit, ROI, margin, and PPC break-even in seconds. Simple inputs, clean results,
              seller-friendly defaults.
            </p>

            {/* IMPORTANT: open in new tab */}
            <a
              href="/calculator"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Open Calculator
            </a>

            <p className="mt-3 text-xs text-slate-500">No login • Fast • Built for decision-making (estimates)</p>
          </div>

          {/* Right: Premium bullet card */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
              2026 • Free Learning
            </div>

            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900">
              Learn without paid courses
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Practical guides + UAE/KSA calculator—built for real sellers.
            </p>

            <div className="mt-4 space-y-3">
              {points.map((text) => (
                <div key={text} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Card({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-500">{sub}</div>
    </div>
  );
}
