import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>

        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5 text-slate-700 leading-relaxed">

        <p>
          This Privacy Policy explains how amazonfba collects, uses, and protects information when you use our website and tools.
        </p>

        <h2 className="font-semibold">1) What we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Calculator inputs used only to show results on screen</li>
          <li>Basic analytics for performance improvement</li>
        </ul>

        <h2 className="font-semibold">2) What we do NOT collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Amazon login or passwords</li>
          <li>Personal sensitive data</li>
          <li>We do not sell any data</li>
        </ul>

        <h2 className="font-semibold">3) Cookies</h2>
        <p>
          We may use cookies for basic functionality and analytics.
        </p>

        <h2 className="font-semibold">4) Data security</h2>
        <p>
          We take reasonable steps to protect data but cannot guarantee 100% internet security.
        </p>

        <h2 className="font-semibold">5) Third-party links</h2>
        <p>
          Our site may link to external resources like Amazon pages. We are not responsible for their privacy practices.
        </p>

      </div>

    </main>
  );
}
