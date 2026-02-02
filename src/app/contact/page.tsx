import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Contact</h1>

        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm text-slate-700 space-y-4">
        <p>
          For now, we do not have a public email address.
        </p>

        <p>
          Once the website domain is live, contact information will be added here.
        </p>
      </div>

    </main>
  );
}
