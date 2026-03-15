import Link from "next/link";
import Image from "next/image";
import CalculatorPreview from "@/components/CalculatorPreview";

export default function HomePage() {
  return (
    <main className="px-6 md:px-10 lg:px-16">
      {/* HERO */}
      <section className="pt-10 md:pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* TEXT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Amazon FBA Profit <br /> Calculator
            </h1>

            {/* SEO TEXT */}
            <p className="mt-4 text-gray-600">
              Calculate Amazon FBA profit, fees, and margins instantly for UAE &
              KSA sellers. Get accurate Amazon referral fees, FBA charges, and
              real profit estimates for UAE and Saudi Arabia — no paid courses,
            </p>

            {/* ✅ CLICKABLE SEO LINE (TEXT ONLY, NO CARD) */}
  <Link href="/guides/how-to-start-amazon-uae-2026" className="block ...">
  <p className="...">Some text</p>
  <h3 className="text-2xl font-bold text-neutral-900 underline hover:no-underline">
    How To Start Amazon UAE in 2026
  </h3>
</Link>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/calculator">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                  Open Calculator
                </button>
              </Link>

              <Link href="/guides">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full border hover:bg-black/5 transition">
                  Read Guides
                </button>
              </Link>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Free tool. Built for UAE & KSA sellers.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px] lg:-ml-10">
              <div className="absolute -inset-8 rounded-full bg-black/5 blur-3xl"></div>

              <Image
                src="/hero-image.webp"
                alt="Amazon FBA boxes"
                width={700}
                height={700}
                priority
                className="relative w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOOK SECTION */}
      <section className="pb-12">
        <div className="bg-white border rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                New to Amazon FBA? Start here.
              </h2>
              <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-6">
    Popular Amazon Product Research Guides
  </h2>

  <p className="text-gray-600 mb-10">
    Learn how to find profitable products for Amazon UAE using real demand,
    competition analysis, and profit calculations.
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    <Link href="/product-research/how-to-find-winning-products"
      className="block border rounded-xl p-6 hover:shadow-md transition">

      <h3 className="text-xl font-semibold mb-2">
        How to Find Winning Products
      </h3>

      <p className="text-gray-600 text-sm">
        Practical rules to identify profitable Amazon products before investing.
      </p>

    </Link>

    <Link href="/product-research/how-to-find-high-sale-products-amazon-uae"
      className="block border rounded-xl p-6 hover:shadow-md transition">

      <h3 className="text-xl font-semibold mb-2">
        How to Find High Sale Products in Amazon UAE
      </h3>

      <p className="text-gray-600 text-sm">
        Identify categories with strong demand and stable sales patterns.
      </p>

    </Link>

    <Link href="/product-research/how-to-find-most-sell-products-amazon-uae"
      className="block border rounded-xl p-6 hover:shadow-md transition">

      <h3 className="text-xl font-semibold mb-2">
        How to Find Most Sold Products on Amazon UAE
      </h3>

      <p className="text-gray-600 text-sm">
        Learn how to analyze top-selling items without falling into saturated niches.
      </p>

    </Link>

  </div>
</section>
              <p className="mt-2 text-gray-600 max-w-2xl">
                A simple path that saves beginners from common mistakes — check
                profit first, then learn, then decide.
              </p>
            </div>

            <Link
              href="/articles"
              className="inline-flex items-center justify-center bg-black text-white px-5 py-3 rounded-full hover:opacity-90 transition"
            >
              Browse Guides
            </Link>
          </div>
        </div>
      </section>

      {/* CALCULATOR PREVIEW */}
      <CalculatorPreview />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Amazon FBA Profit Calculator UAE & Saudi",
      url: "https://www.fbacalculatoruae.com",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Free Amazon FBA profit calculator for UAE and Saudi sellers. Calculate Amazon referral fees, fulfillment fees, and profit margins instantly.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }),
  }}
  />
    <script 
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does this Amazon FBA calculator include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This calculator includes Amazon referral fees and FBA fulfillment fees for UAE and Saudi Arabia sellers. It shows selling price, Amazon fees, net proceeds, and margin per unit.",
          },
        },
        {
          "@type": "Question",
          name: "Does this calculator work for both UAE and Saudi Arabia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The calculator supports both AED for UAE and SAR for Saudi Arabia, with separate fee logic for each marketplace.",
          },
        },
        {
          "@type": "Question",
          name: "Are VAT and PPC costs included in the calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This calculator currently includes referral fees and FBA fulfillment fees only. VAT and PPC costs are not included.",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate Amazon FBA profit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To calculate Amazon FBA profit, enter your product category, selling price, size tier, and weight bracket. The calculator will estimate Amazon fees and show your net proceeds and margin.",
          },
        },
      ],
    }),
  }}
/>
    </main>
  );
}