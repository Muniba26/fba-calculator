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
];

export default function HomeProductResearchSection() {
  return (
    <section className="mt-8 rounded-[28px] border border-neutral-200  p-8 md:p-10">
      <p className="text-2xl font-semibold text-neutral-900 mb-8">
        New to Amazon FBA? Start here.
      </p>

      <h2 className="text-3xl font-bold text-neutral-900 mb-3">
        Popular Amazon Product Research Guides
      </h2>

      <p className="text-neutral-700 mb-8 max-w-4xl text-base md:text-lg">
        Learn how to find profitable products for Amazon UAE using real demand,
        competition analysis, and profit calculations.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {researchPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition bg-white"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4 leading-snug">
              {page.title}
            </h3>
            <p className="text-neutral-700 text-lg leading-8">
              {page.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start gap-4">
        <p className="text-neutral-700 text-base md:text-lg max-w-3xl">
          A simple path that saves beginners from common mistakes — check profit first, then learn, then decide.
        </p>

        <Link
          href="/guides"
          className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-white font-semibold hover:opacity-90 transition"
        >
          View All Guides
        </Link>
      </div>
    </section>
  );
}