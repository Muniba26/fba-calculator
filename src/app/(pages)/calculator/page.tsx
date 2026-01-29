import type { Metadata } from "next";
import Link from "next/link";
import FbaCalculator from "@/components/FbaCalculator";

export const metadata: Metadata = {
  title: "FBA Calculator — UAE & KSA (AED/SAR) | Free Premium Tool",
  description:
    "Free Amazon FBA calculator for UAE & Saudi sellers. Estimate profit, ROI, margin, and break-even PPC with Amazon-style presets.",
};

export default function CalculatorPage() {
  return (
    <div className="space-y-6">
      {/* Premium hero header */}
      <div className="card-premium">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="badge-accent w-fit">
              <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
              Amazon-style • UAE & KSA • Free
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
              FBA Profit Calculator
            </h1>

            <div className="mt-3 h-1 w-16 rounded-full bg-[var(--brand)]" />

            <p className="mt-4 max-w-2xl text-sm text-zinc-600">
              Enter your costs and fees to get Net Profit, Margin, ROI, and Break-even PPC.
              No API required. Fast and reliable.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="btn-soft">
              Back to Home
            </Link>
            <Link href="/blog" className="btn-soft">
              Read Guides
            </Link>
          </div>
        </div>
      </div>

      <FbaCalculator />
    </div>
  );
}
