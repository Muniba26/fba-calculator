import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FBA Calculator",
  description:
    "Privacy policy for the FBA calculator. No login required; calculator works without collecting personal data.",
};
export default function PrivacyPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold tracking-tight">Privacy Policy</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        This is a placeholder. We’ll write your final policy before launch.
      </p>

      <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-950/60">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          We do not collect personal data in this free calculator version.
        </p>
      </div>
    </div>
  );
}
