import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — FBA Calculator (UAE & KSA)",
  description:
    "Learn why this free FBA calculator exists and how it helps Amazon sellers in UAE and Saudi Arabia.",
};
export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold tracking-tight">About</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        This free tool helps sellers estimate profitability clearly. No login, no paywall.
      </p>

      <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-950/60">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Built for Amazon sellers in UAE and Saudi Arabia who want clean, fast calculations
          without confusion.
        </p>
      </div>
    </div>
  );
}
