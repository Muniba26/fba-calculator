import Link from "next/link";

const researchPages = [
  {
    title: "How to Find Winning Products",
    href: "/product-research/how-to-find-winning-products",
    description:
      "Learn practical strategies to identify profitable Amazon UAE products with real demand.",
  },
  {
    title: "How to Find High Sale Products in Amazon UAE",
    href: "/product-research/how-to-find-high-sale-products-amazon-uae",
    description:
      "Discover how to identify products that consistently generate high sales volume.",
  },
  {
    title: "How to Find Most Sold Products on Amazon UAE",
    href: "/product-research/how-to-find-most-sell-products-amazon-uae",
    description:
      "Analyze Amazon UAE categories to discover top selling items and product opportunities.",
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
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Product Research Guides for Amazon UAE
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {researchPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block rounded-xl border border-neutral-200 p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">{page.title}</h3>
            <p className="text-sm text-neutral-600">{page.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}