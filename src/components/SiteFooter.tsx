"use client";

import Link from "next/link";

export default function SiteFooter() {
  const linkClass =
    "px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 " +
    "transition-all duration-200 cursor-pointer " +
    "hover:-translate-y-[1px] active:translate-y-0 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

  return (
    <footer className="w-full bg-[#0B1B2A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/80">
          © {new Date().getFullYear()} AmazonFBA UAE • KSA. All rights reserved.
        </div>

        <nav className="flex items-center gap-2 text-sm">
          <Link className={linkClass} href="/about">
            About
          </Link>
          <Link className={linkClass} href="/contact">
            Contact
          </Link>
          <Link className={linkClass} href="/privacy">
            Privacy
          </Link>
          <Link className={linkClass} href="/terms">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
