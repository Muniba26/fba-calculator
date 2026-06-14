import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About FBA Calculator UAE | Amazon Seller Profit Tool",
  description:
    "Learn about FBA Calculator UAE, a simple Amazon seller fee and profit estimation tool built for UAE and KSA marketplace sellers.",
};

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
    FBA Calculator UAE is built to help Amazon sellers in the UAE and KSA quickly estimate selling fees,
    FBA charges, profit margin, and ROI before launching or pricing products.
  </p>

  <p>
    Our goal is to keep the calculator simple, fast, and useful for everyday Amazon sellers. The calculations
    are designed for estimation purposes only, and sellers should always verify final fees inside Amazon
    Seller Central before making business decisions.
  </p>

  <p>
    The content and tools on this website are maintained by the FBA Calculator UAE team and updated to support
    sellers who want clearer visibility on Amazon marketplace costs.
  </p>
</div>

    </main>
  );
}
