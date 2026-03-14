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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!categories[category]) {
    notFound();
  }

  const name = categories[category];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Amazon FBA Fees for {name} (UAE)
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Learn the Amazon FBA referral fees and selling costs for {name} products
        in UAE. Use our free calculator to estimate your real Amazon profit.
      </p>

      <div className="border rounded-2xl p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">
          Estimate your {name} FBA profit
        </h2>

        <p className="text-gray-700 mb-6">
          Use our calculator to estimate referral fees, fulfillment fees, and
          profit margins for {name} items in UAE and Saudi Arabia.
        </p>

        <a
          href="/calculator"
          className="inline-block bg-black text-white px-6 py-3 rounded-full"
        >
          Open FBA Calculator
        </a>
      </div>
    </main>
  );
}