import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

const categories: Record<string, string> = {
  electronics: "Electronics",
  books: "Books",
  fashion: "Fashion",
  beauty: "Beauty",
  toys: "Toys",
  home: "Home",
  kitchen: "Kitchen",
  baby: "Baby",
  pet: "Pet",
  sports: "Sports",
  office: "Office",
  tools: "Tools & Home Improvement",
  grocery: "Grocery",
  "personal-care": "Personal Care",
  automotive: "Automotive",
};

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const name = categories[category];

  if (!name) {
    return {};
  }

  return {
    title: `Amazon ${name} FBA Fees UAE | Referral Fee & Profit Guide`,
    description: `Learn Amazon UAE FBA fees, referral fees, selling costs and profit calculation for ${name} products. Use the free UAE & KSA FBA calculator.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!categories[category]) {
    notFound();
  }

  const name = categories[category];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
      <section className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-gray-100">
        <p className="text-sm font-semibold text-orange-600 mb-3">
          Amazon UAE Fees Guide
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Amazon FBA Fees for {name} Products in UAE
        </h1>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          Selling {name.toLowerCase()} products on Amazon UAE can be profitable,
          but only if you calculate referral fees, FBA fulfillment fees,
          shipping cost, VAT impact, advertising cost and final margin before
          buying inventory. This guide explains how sellers should think about
          Amazon fees for {name.toLowerCase()} products and when to use a profit
          calculator before launching.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Main costs to check
            </h2>
            <ul className="list-disc pl-5 text-gray-700 leading-7 space-y-2">
              <li>Amazon referral fee</li>
              <li>FBA fulfillment fee</li>
              <li>Product cost and supplier shipping</li>
              <li>VAT, packaging and return allowance</li>
              <li>PPC advertising cost</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why calculation matters
            </h2>
            <p className="text-gray-700 leading-7">
              A product may look profitable when you compare selling price and
              product cost only. But after Amazon fees, fulfillment cost,
              advertising and returns, the real net profit can become much
              lower. Always calculate margin and ROI before ordering stock.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Estimate {name} FBA Profit
        </h2>

        <p className="text-gray-700 leading-8 mb-5">
          To estimate profit for {name.toLowerCase()} products, start with your
          expected selling price. Then subtract the product cost, shipping cost,
          Amazon referral fee, FBA fulfillment fee, packaging cost and expected
          advertising spend. The remaining amount is your estimated net profit.
        </p>

        <p className="text-gray-700 leading-8 mb-8">
          For Amazon UAE and Saudi Arabia, sellers should also compare the same
          product across both marketplaces. Demand, competition, delivery cost
          and pricing pressure can be different in UAE and KSA. A product that
          gives good margin in UAE may need different pricing in Saudi Arabia.
        </p>

        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Seller tip from experience
          </h2>
          <p className="text-gray-700 leading-8">
            Do not choose a {name.toLowerCase()} product only because it has
            high demand. Check whether the product has enough profit after
            Amazon fees and PPC cost. New sellers should avoid very low-margin
            products because one price drop or return can remove most of the
            profit.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Use the Amazon UAE & KSA FBA Calculator
        </h2>

        <p className="text-gray-700 leading-8 mb-6">
          Use the free calculator to estimate referral fees, fulfillment fees,
          ROI and profit margin for {name.toLowerCase()} products before
          launching. This helps you compare product ideas and avoid buying stock
          with weak margins.
        </p>

        <a
          href="/calculator"
          className="inline-block bg-black text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Open FBA Calculator
        </a>
      </section>
    </main>
  );
}