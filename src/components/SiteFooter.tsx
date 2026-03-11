"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#FDEAD2] border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left side */}
        <div className="text-sm text-black font-semibold">
          © {new Date().getFullYear()} AmazonFBA UAE • KSA. All rights reserved.
        </div>

        {/* Right side links – SAME style as TopBar */}
        <nav className="flex items-center gap-6 text-sm text-black font-semibold">
          <Link
            href="/about"
            className="hover:bg-black/10 px-3 py-1 rounded-md transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:bg-black/10 px-3 py-1 rounded-md transition"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="hover:bg-black/10 px-3 py-1 rounded-md transition"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:bg-black/10 px-3 py-1 rounded-md transition"
          >
            Terms
          </Link>
        </nav>

      </div>
    </footer>
  );
}
