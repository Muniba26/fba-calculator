import Link from "next/link";

const researchPages = [
  {
    title: "How to Find Winning Products",
    href: "/product-research/how-to-find-winning-products",
    description:
      "Practical rules to identify profitable Amazon products before investing.",
  },
  {
    title: "How to Find High Sale Products in Amazon UAE",
    href: "/product-research/how-to-find-high-sale-products-amazon-uae",
    description:
      "Identify categories with strong demand and stable sales patterns.",
  },
  {
    title: "How to Find Most Sold Products on Amazon UAE",
    href: "/product-research/how-to-find-most-sell-products-amazon-uae",
    description:
      "Learn how to analyze top-selling items without falling into saturated niches.",
  },
  {
    title: "How to Check Product Demand on Amazon UAE",
    href: "/product-research/how-to-check-product-demand-amazon-uae",
    description:
      "Learn how to validate buyer demand before investing in stock for Amazon UAE.",
  },
  {
    title: "How to Avoid Bad Products on Amazon UAE",
    href: "/product-research/how-to-avoid-bad-products-amazon-uae",
    description:
      "Avoid common beginner mistakes by filtering out weak product ideas early.",
  },
  {
    title: "How to Choose Profitable Products on Amazon UAE",
    href: "/product-research/how-to-choose-profitable-products-amazon-uae",
    description:
      "Use margin-based thinking to select products that can stay profitable after Amazon fees.",
  },
];

export default function ProductResearchLinks() {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        Product Research Guides for Amazon UAE
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {researchPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-4 leading-snug">
              {page.title}
            </h3>
            <p className="text-neutral-700 leading-7">
              {page.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start gap-4">
        <p className="text-neutral-700 max-w-2xl">
          A simple path that saves beginners from common mistakes — check profit first, then learn, then decide.
        </p>

        <Link
          href="/guides"
          className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-white font-semibold hover:opacity-90 transition"
        >
          Browse Guides
        </Link>
      </div>
    </section>
  );
}