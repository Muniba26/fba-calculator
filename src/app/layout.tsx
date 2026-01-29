import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FBA Calculator (UAE & KSA) — Free Premium Tool",
  description:
    "Free, premium Amazon FBA calculator for UAE & Saudi sellers. Estimate profit, ROI, margin, and break-even PPC.",
  metadataBase: new URL("https://example.com"),
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-zinc-600 hover:text-[var(--ink)] transition"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-zinc-900">
        {/* Amazon-style soft background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[var(--brand-soft)] blur-3xl" />
          <div className="absolute right-[-220px] top-[140px] h-[560px] w-[560px] rounded-full bg-zinc-100/80 blur-3xl" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              {/* Orange brand square */}
              <div className="h-8 w-8 rounded-xl bg-[var(--brand)]" />
              <span className="font-semibold tracking-tight">FBA Calculator</span>
              <span className="hidden sm:inline text-xs text-zinc-500">
                UAE • KSA • Free
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="/calculator">Calculator</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              {/* Navy premium button */}
              <Link href="/calculator" className="btn-primary">
                Use Calculator
              </Link>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-200/70">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-[var(--brand)]" />
                  <div className="font-semibold">FBA Calculator</div>
                </div>
                <p className="mt-3 text-sm text-zinc-600">
                  A free, premium profit calculator for Amazon sellers in UAE & Saudi Arabia.
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold">Tools</div>
                <div className="mt-3 flex flex-col gap-2">
                  <NavLink href="/calculator">FBA Calculator</NavLink>
                  <NavLink href="/blog">Seller Guides (Blog)</NavLink>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold">Legal</div>
                <div className="mt-3 flex flex-col gap-2">
                  <NavLink href="/privacy">Privacy</NavLink>
                  <NavLink href="/terms">Terms</NavLink>
                </div>
                <p className="mt-3 text-xs text-zinc-500">
                  Disclaimer: Estimates only. Final fees vary by category and Amazon updates.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-zinc-500">
                © {new Date().getFullYear()} FBA Calculator. All rights reserved.
              </p>
              <p className="text-xs text-zinc-500">
                Built for modern sellers • UAE (AED) & KSA (SAR)
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
