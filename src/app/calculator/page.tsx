import Link from "next/link";
import CalculatorUI from "@/components/CalculatorUI";

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center justify-end gap-2">
        <Link
          href="/"
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-400"
        >
          Back to Home
        </Link>
        <Link
          href="/blog"
          className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Read Guides
        </Link>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white/60 p-6 md:p-8 shadow-sm">
        <CalculatorUI />
      </div>
    </main>
  );
}
