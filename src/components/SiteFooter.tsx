import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} FBA Calculator UAE • KSA. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <Link className="text-slate-700 hover:text-black" href="/about">About</Link>
            <Link className="text-slate-700 hover:text-black" href="/contact">Contact</Link>
            <Link className="text-slate-700 hover:text-black" href="/privacy">Privacy</Link>
            <Link className="text-slate-700 hover:text-black" href="/terms">Terms</Link>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Disclaimer: Estimates only. Amazon fees can change—always verify in Seller Central.
        </p>
      </div>
    </footer>
  );
}
