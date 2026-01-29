import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Amazon FBA Calculator UAE & KSA (AED/SAR) — Premium Tool",
  description:
    "Free Amazon FBA calculator for UAE & Saudi sellers. Calculate profit, ROI, margin, and break-even PPC with a modern Amazon-style UI.",
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="badge-accent mb-5 w-fit">
            <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
            Free tool • Premium experience • 2026 style
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
            Amazon FBA Profit Calculator
            <span className="block mt-2 text-zinc-500 font-extrabold">
              for UAE & Saudi sellers
            </span>
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-[var(--brand)]" />

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600">
            Estimate profit, ROI, margin, and break-even PPC in seconds. No login.
            No paywall. Built for real decision-making.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/calculator" className="btn-accent">
              Open Calculator
            </Link>

            <Link href="/blog" className="btn-soft">
              Read Guides
            </Link>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Tip: Launch now, then add ASIN auto-fill later when API access is available.
          </p>
        </div>

        <div className="card-premium">
          <div className="text-sm font-bold text-[var(--ink)] mb-4">What you’ll get</div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
              <div className="font-semibold text-[var(--ink)]">Accurate structure</div>
              <div className="mt-1 text-sm text-zinc-600">
                Revenue → Amazon fees → VAT → total costs → profit metrics.
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
              <div className="font-semibold text-[var(--ink)]">UAE & KSA friendly</div>
              <div className="mt-1 text-sm text-zinc-600">
                AED/SAR support, VAT toggles, and seller-style inputs.
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
              <div className="font-semibold text-[var(--ink)]">Modern SaaS UI</div>
              <div className="mt-1 text-sm text-zinc-600">
                Premium layout with clean cards, buttons, and spacing.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card-premium">
          <div className="text-lg font-bold text-[var(--ink)]">Free forever</div>
          <p className="mt-2 text-sm text-zinc-600">
            Your calculator stays free to use for everyone.
          </p>
        </div>

        <div className="card-premium">
          <div className="text-lg font-bold text-[var(--ink)]">Built for SEO</div>
          <p className="mt-2 text-sm text-zinc-600">
            Blog + clean pages + fast performance for authority growth.
          </p>
        </div>

        <div className="card-premium">
          <div className="text-lg font-bold text-[var(--ink)]">Ready to host</div>
          <p className="mt-2 text-sm text-zinc-600">
            Deploy to Vercel and connect your custom domain in minutes.
          </p>
        </div>
      </section>
    </div>
  );
}
