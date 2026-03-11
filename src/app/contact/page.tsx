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
    If you have questions, feedback, or suggestions about the FBA Calculator,
    feel free to reach out. We are continuously improving this tool to help
    Amazon sellers in the UAE and Saudi Arabia make better profit decisions.
  </p>

  <p className="mt-4">
    For inquiries, partnerships, or support requests, please contact us at:
  </p>

  <p className="mt-2 font-semibold">
    Email: support@fbacalculatoruae.com
  </p>

  <p className="mt-4">
    We aim to respond to all messages as soon as possible.
  </p>
</div>

    </main>
  );
}
