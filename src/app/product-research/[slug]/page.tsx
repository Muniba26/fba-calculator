import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const pages: Record<
  string,
  {
    title: string;
    intro: string;
    bullets: string[];
    articleHref: string;
    articleText: string;
  }
> = {
  "how-to-find-winning-products": {
    title: "How to Find Winning Products",
    intro:
      "Finding winning products is not about luck. The best products usually have steady demand, healthy margin, manageable competition, and clear customer demand in the local market.",
    bullets: [
      "Look for products with stable demand",
      "Avoid overcrowded categories at the start",
      "Check Amazon fees before choosing a product",
      "Focus on practical, repeatable product research rules",
    ],
    articleHref: "/guides/how-to-find-winning-products-for-amazon-uae",
    articleText: "Browse product research guides",
  },

  "how-to-find-high-sale-products-amazon-uae": {
    title: "How to Find High Sale Products in Amazon UAE",
    intro:
      "High-sale products on Amazon UAE usually sit in active categories with proven customer demand, decent pricing power, and a realistic margin after fees.",
    bullets: [
      "Study demand before chasing trends",
      "Compare selling price with total Amazon fees",
      "Check if the product can survive price competition",
      "Prioritize demand plus margin, not demand alone",
    ],
    articleHref: "/guides/how-to-find-winning-products-for-amazon-uae",
    articleText: "Open product research related guides",
  },

  "how-to-find-most-sell-products-amazon-uae": {
    title: "How to Find Most Sold Products on Amazon UAE",
    intro:
      "The most sold products on Amazon UAE are not always the best products for beginners. A better strategy is to identify products that combine demand, lower competition, and workable profit margins.",
    bullets: [
      "Avoid choosing products only because they sell a lot",
      "Estimate margin before supplier sourcing",
      "Shortlist categories with room for differentiation",
      "Use a calculator before making stock decisions",
    ],
    articleHref: "/guides/how-to-find-winning-products-for-amazon-uae",
    articleText: "See more Amazon UAE research guides",
  },
  "how-to-check-product-demand-amazon-uae": {
  title: "How to Check Product Demand on Amazon UAE",
  intro:
    "Checking product demand is one of the most important parts of Amazon UAE product research. You should understand whether buyers are already searching for the product before investing money in stock.",
  bullets: [
    "Search the product keyword directly on Amazon UAE",
    "Check whether multiple sellers are actively competing",
    "Look for consistent listing quality and review activity",
    "Prefer products with visible buyer demand, not random guesses",
  ],
  articleHref: "/guides/how-to-find-winning-products-for-amazon-uae",
  articleText: "Read the full guide on finding winning products",
},

"how-to-avoid-bad-products-amazon-uae": {
  title: "How to Avoid Bad Products on Amazon UAE",
  intro:
    "Many beginners fail because they choose products with weak demand, poor margins, or too much competition. Good research is not only about finding winners, but also avoiding bad products early.",
  bullets: [
    "Avoid products with heavy competition from large brands",
    "Avoid fragile, bulky, or complex items at the start",
    "Stay away from products with very low margins",
    "Do not choose products only because they look popular",
  ],
  articleHref: "/guides/how-to-rank-product-amazon-uae",
  articleText: "Read the Amazon UAE ranking guide",
},

"how-to-choose-profitable-products-amazon-uae": {
  title: "How to Choose Profitable Products on Amazon UAE",
  intro:
    "A profitable Amazon UAE product should have healthy margins after referral fees, fulfilment fees, shipping, and packaging. Smart sellers calculate before buying inventory.",
  bullets: [
    "Estimate Amazon fees before making any product decision",
    "Prefer products with room for profit after all costs",
    "Compare product cost, selling price, and net margin",
    "Use your calculator before placing any stock order",
  ],
  articleHref: "/calculator",
  articleText: "Use the Amazon FBA profit calculator",
},
};

export default async function ProductResearchPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
        {page.title}
      </h1>

      <p className="text-lg text-gray-700 leading-8 mb-8">{page.intro}</p>

      <div className="rounded-2xl border border-black/10 bg-white p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key points</h2>

        <ul className="space-y-3 text-gray-700 list-disc pl-6">
          {page.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-[#F8F6F2] border border-black/10 p-6">
        <h2 className="text-2xl font-semibold mb-3">Next step</h2>

        <p className="text-gray-700 mb-5">
          Open the related guide section to continue product research.
        </p>

        <Link
          href={page.articleHref}
          className="inline-block rounded-full bg-black text-white px-6 py-3 font-medium hover:opacity-90 transition"
        >
          {page.articleText}
        </Link>
      </div>
    </main>
  );
}