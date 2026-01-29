import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Amazon Seller Guides (UAE & KSA) | FBA Calculator",
  description:
    "Short practical guides for Amazon sellers: fees, VAT, ROI, PPC strategy and pricing decisions for UAE & KSA markets.",
};

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <div className="card-premium">
        <div className="badge-accent w-fit">
          <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
          SEO • Authority • Short guides
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-[var(--ink)]">Blog</h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-[var(--brand)]" />
        <p className="mt-4 text-sm text-zinc-600">
          We publish short, high-value guides for Amazon sellers in UAE & Saudi Arabia.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-premium">
          <div className="text-lg font-extrabold text-[var(--ink)]">
            How to estimate FBA fees without API
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Learn the right structure for profit calculations and avoid common mistakes.
          </p>
          <div className="mt-4 text-xs text-zinc-500">Coming soon</div>
        </div>

        <div className="card-premium">
          <div className="text-lg font-extrabold text-[var(--ink)]">
            UAE vs KSA VAT basics (simple)
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            VAT explained for sellers: when it applies and how to model it.
          </p>
          <div className="mt-4 text-xs text-zinc-500">Coming soon</div>
        </div>

        <div className="card-premium">
          <div className="text-lg font-extrabold text-[var(--ink)]">
            Pricing strategy using ROI & margin
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Set a target margin and ROI and build a price that makes sense.
          </p>
          <div className="mt-4 text-xs text-zinc-500">Coming soon</div>
        </div>

        <div className="card-premium">
          <div className="text-lg font-extrabold text-[var(--ink)]">
            Break-even PPC: how much can you spend?
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Understand ads cost limits so you don’t sell at a loss.
          </p>
          <div className="mt-4 text-xs text-zinc-500">Coming soon</div>
        </div>
      </div>
    </div>
  );
}
