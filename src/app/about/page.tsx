import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">About Us</h1>

        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4 text-slate-700 leading-relaxed">
        <p>
          Amazonfba is built to help UAE and Saudi sellers calculate real Amazon FBA profits easily.
        </p>

        <p>
          Our goal is to provide free tools, clear guides, and simple calculations without paid courses.
        </p>

        <p>
          This platform is designed for beginners and experienced sellers who want fast and accurate estimates.
        </p>
      </div>

    </main>
  );
}
