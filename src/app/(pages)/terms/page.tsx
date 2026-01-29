import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — FBA Calculator",
  description:
    "Terms of use for the free FBA calculator tool. Estimates only; fees and VAT can change over time.",
};
export default function TermsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold tracking-tight">Terms</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        This is a placeholder. We’ll write your final terms before launch.
      </p>

      <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-950/60">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          All results are estimates. Amazon fees and VAT rules may change.
        </p>
      </div>
    </div>
  );
}
