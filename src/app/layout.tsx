import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "FBA Calculator — UAE & KSA",
  description: "Amazon FBA profit calculator for UAE & Saudi sellers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fbf7f1] text-slate-900">
        {/* Top Bar */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-xl bg-orange-400" />
              <div className="leading-tight">
                <div className="text-sm font-extrabold">FBA Calculator</div>
                <div className="text-xs text-slate-500">UAE • KSA</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {[
                "Warehouse vibe",
                "Pick & pack",
                "Delivery ready",
                "Referral + FBA + VAT + PPC (optional)",
                "Fast, simple inputs",
                "AED & SAR support",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {t}
                </span>
              ))}
            </nav>

            <a
              href="/calculator"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Use Calculator
            </a>
          </div>
        </header>

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
