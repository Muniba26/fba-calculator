"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname() || "";
  const isCalculator = pathname.startsWith("/calculator");

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-orange-400" />
          <div>
            <div className="font-bold text-slate-900">FBA Calculator</div>
            <div className="text-xs text-slate-500">UAE • KSA</div>
          </div>
        </div>

        {isCalculator ? (
          <Link href="/">
            <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold">
              Back To Home
            </button>
          </Link>
        ) : (
          <Link href="/calculator">
            <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold">
              Use Calculator
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
