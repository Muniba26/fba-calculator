import Link from "next/link";

const chips = [
  "Warehouse vibe",
  "Pick & pack",
  "Delivery ready",
  "Referral + FBA + VAT + PPC (optional)",
  "Fast, simple inputs",
  "AED & SAR support",
];

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-orange-400" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">
                FBA Calculator
              </div>
              <div className="text-[11px] text-slate-500">UAE • KSA</div>
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 justify-center overflow-hidden">
            <div className="flex gap-2 flex-wrap justify-center">
              {chips.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/calculator"
            className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Use Calculator
          </Link>
        </div>
      </div>
    </header>
  );
}
