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

      <div className="mt-6 text-gray-700 leading-relaxed">
  <p>
    For inquiries, partnerships, or feedback regarding FBA Calculator UAE,
    please contact us at the email below.
  </p>

  <p className="mt-4 font-semibold">
    Email: contact@fbacalculatoruae.com
  </p>

  <p className="mt-4">
    We aim to respond to all genuine messages as soon as possible.
  </p>
</div>

    </main>
  );
}
