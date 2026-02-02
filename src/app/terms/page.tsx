import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Terms & Conditions</h1>

        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm text-slate-700 space-y-4 leading-relaxed">
        <p>
          This website provides estimates only. Results may vary based on real Amazon fees and costs.
        </p>

        <p>
          Users are responsible for verifying all calculations before making business decisions.
        </p>

        <p>
          We are not affiliated with Amazon.
        </p>
      </div>

    </main>
  );
}
