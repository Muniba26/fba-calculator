"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();

  const navItem = (href: string, label: string) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`px-4 py-2 rounded-full transition-all duration-200 font-semibold
${
  isActive
    ? "bg-black/10 text-black"
    : "text-black hover:bg-black/5"
}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full bg-orange-100 border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-400" />
          <div className="leading-tight">
            <div className="font-bold text-black">FBA Calculator</div>
            <div className="text-xs text-black/70">UAE • KSA</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItem("/", "Home")}
          {navItem("/articles", "Guides")}
          {navItem("/about", "About")}
          {navItem("/contact", "Contact")}
        </nav>

        {/* CTA */}
        <Link
          href="/calculator"
          className="ml-4 px-5 py-2 rounded-full bg-black text-white font-medium hover:scale-105 transition-transform"
        >
          Use Calculator
        </Link>
      </div>
    </header>
  );
}
