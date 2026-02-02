"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();

  // ✅ Hide the header black button on ALL article pages
  const isArticlePage = pathname?.startsWith("/articles");

  return (
    <header className="w-full bg-white border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Left: logo / brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-orange-400" />
          <div className="leading-tight">
            <div className="font-semibold text-black">FBA Calculator</div>
            <div className="text-xs text-black/60">UAE • KSA</div>
          </div>
        </Link>

        {/* Right: button (hide on articles) */}
        {!isArticlePage && (
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            Use Calculator
          </Link>
        )}
      </div>
    </header>
  );
}
