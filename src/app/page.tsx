import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CalculatorPreview from "@/components/CalculatorPreview";
import HomeProductResearchSection from "@/components/HomeProductResearchSection";
import HomeFaqSection from "@/components/HomeFaqSection";

export const metadata = {
  title: "Amazon FBA Calculator UAE (2026) – Calculate Fees & Profit Instantly",
  description: "Free Amazon UAE FBA calculator. Estimate fees, profit margins, and costs before selling your product."
};
export default function HomePage() {
  return (
    <main className="px-6 md:px-10 lg:px-16">
      {/* HERO */}
      <section className="pt-10 md:pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* TEXT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
  Amazon FBA Calculator UAE & KSA (2026) | Free Profit & ROI Tool
</h1>

            {/* SEO TEXT */}
            <p className="mt-4 text-gray-600">
  "Free Amazon FBA calculator for UAE and Saudi sellers. Calculate Amazon fees, profit, ROI and margins instantly for UAE & KSA marketplaces"
</p>

            {/* ✅ CLICKABLE SEO LINE (TEXT ONLY, NO CARD) */}
  <Link
  href="/calculator"
  className="block"
>
  <h3 className="text-2xl font-bold text-neutral-900 underline hover:no-underline">
    Free Amazon FBA Calculator for UAE & KSA Sellers
  </h3>
</Link>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/calculator">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                  Calculate FBA Profit Now
                </button>
              </Link>

              <Link href="/guides">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full border hover:bg-black/5 transition">
                  Learn Amazon UAE & KSA Selling
                </button>
              </Link>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-700">
  Free Amazon FBA calculator for UAE & KSA sellers
</p>
<p className="mt-2 text-sm text-gray-600">
  Estimate fees, profit and ROI in seconds — no signup required.
</p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px] lg:-ml-10">
              <div className="absolute -inset-8 rounded-full bg-black/5 blur-3xl"></div>

              <Image
  src="/hero-image.webp"
  alt="Amazon FBA boxes"
  width={600}
  height={600}
  priority
  fetchPriority="high"
  sizes="(max-width: 768px) 90vw, 600px"
  className="relative w-full h-auto object-contain"
/>
            </div>
          </div>
        </div>
      </section>
      <HomeFaqSection />

      {/* HOOK SECTION */}
      <HomeProductResearchSection />

      {/* CALCULATOR PREVIEW */}
      <CalculatorPreview />
      {/* HOMEPAGE SEO AUTHORITY SECTION */}
<section className="mt-16 rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-gray-100 space-y-8">
  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
      Amazon FBA Calculator UAE & KSA for Real Seller Profit
    </h2>
    <p className="mt-4 text-gray-700 leading-7">
      Selling on Amazon UAE or Amazon Saudi Arabia is not only about finding a
      product and listing it online. Before you send stock to Amazon FBA, you
      need to understand your real selling cost, Amazon referral fee, fulfillment
      fee, product cost, shipping cost, VAT impact, advertising cost and final
      profit margin. This Amazon FBA calculator is made for UAE and KSA sellers
      who want to check profit before buying inventory.
    </p>
    <p className="mt-4 text-gray-700 leading-7">
      Many new sellers make the mistake of checking only the sale price and
      product cost. In reality, Amazon fees, delivery charges, storage fees,
      returns and PPC advertising can reduce profit very quickly. A product that
      looks profitable at first can become weak after all costs are added. That
      is why using an Amazon UAE profit calculator before launching a product is
      important.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      How Amazon UAE FBA Fees Work
    </h2>
    <p className="mt-4 text-gray-700 leading-7">
      Amazon UAE sellers usually deal with two major types of fees. The first is
      the referral fee, which is a percentage Amazon charges from the selling
      price. The second is the FBA fulfillment fee, which depends on product
      size, weight and fulfillment method. Some products may also have storage
      costs, return costs or other selling expenses depending on the category and
      business model.
    </p>
    <p className="mt-4 text-gray-700 leading-7">
      For example, if you sell a product for AED 100, your real profit is not
      simply AED 100 minus product cost. You also need to subtract Amazon
      referral fee, FBA fee, shipping cost, packaging cost, VAT effect and any
      advertising spend. This is why calculating net profit, ROI and margin
      before ordering stock can protect you from bad product decisions.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      How to Calculate Amazon Profit in UAE and Saudi Arabia
    </h2>
    <p className="mt-4 text-gray-700 leading-7">
      To calculate Amazon profit properly, start with your selling price. Then
      subtract your product cost, supplier shipping cost, Amazon referral fee,
      FBA fulfillment fee, packaging cost and expected advertising cost. The
      remaining amount is your estimated net profit. From that number, you can
      calculate your profit margin and ROI.
    </p>
    <p className="mt-4 text-gray-700 leading-7">
      Profit margin shows how much profit you keep from the selling price. ROI
      shows how much return you make compared with your investment. Both numbers
      are important. A product can have good margin but weak ROI, or good ROI but
      low total profit. Serious Amazon UAE and KSA sellers should check both
      before launching any product.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Amazon UAE vs Amazon KSA: Why Sellers Should Calculate Separately
    </h2>
    <p className="mt-4 text-gray-700 leading-7">
      Amazon UAE and Amazon Saudi Arabia are different marketplaces. Product
      demand, competition, delivery costs, customer behavior and category fees
      can be different in each country. A product that works well in UAE may not
      always give the same profit in KSA. This is why sellers should calculate
      UAE and Saudi profit separately before sending inventory.
    </p>
    <p className="mt-4 text-gray-700 leading-7">
      From practical selling experience, UAE can be easier for testing products
      because the market is smaller and faster to understand. KSA has bigger
      demand in many categories, but logistics, competition and pricing pressure
      can be different. Before expanding from UAE to Saudi Arabia, always compare
      landed cost, Amazon fees, expected selling price and advertising budget.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Common Mistakes New Amazon UAE Sellers Make
    </h2>
    <ul className="mt-4 list-disc pl-6 text-gray-700 leading-7 space-y-2">
      <li>Choosing products only because they look popular.</li>
      <li>Ignoring Amazon referral fees and FBA fulfillment fees.</li>
      <li>Not calculating PPC advertising cost before launch.</li>
      <li>Buying inventory before checking real net profit.</li>
      <li>Copying product ideas from competitors without checking demand.</li>
      <li>Forgetting return cost, storage cost and price competition.</li>
    </ul>
    <p className="mt-4 text-gray-700 leading-7">
      The safest approach is to calculate every product before ordering stock.
      Even a simple calculation can save you from losing money on slow-moving or
      low-margin products.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Why Use This Amazon FBA Calculator Before Selling?
    </h2>
    <p className="mt-4 text-gray-700 leading-7">
      This calculator is designed for sellers who want a quick estimate before
      making a product decision. It helps you understand whether a product has
      enough room for profit after Amazon fees and selling costs. It is useful
      for beginners starting on Amazon UAE, sellers comparing UAE and KSA
      marketplaces, and anyone checking product ideas before buying inventory.
    </p>
    <p className="mt-4 text-gray-700 leading-7">
      The calculator gives an estimate, not a final guaranteed result. Actual
      profit can change because of Amazon fee updates, promotion discounts,
      returns, exchange rates, VAT treatment, shipping cost and advertising
      performance. Always use the calculator as a planning tool and confirm final
      numbers inside your Amazon Seller Central account.
    </p>
  </div>
</section>
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
        priceCurrency: "AED",
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
          name: "What is Amazon FBA calculator UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It helps UAE sellers calculate Amazon fees, profit and margins before selling.",
          },
        },
        {
          "@type": "Question",
          name: "Does this work for Saudi Arabia (KSA)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, this calculator supports both UAE and KSA marketplaces.",
          },
        },
        {
          "@type": "Question",
          name: "Is this calculator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it is completely free with no signup required.",
          },
        },
      ],
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.fbacalculatoruae.com",
        },
      ],
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Amazon FBA Calculator UAE & KSA",
      url: "https://www.fbacalculatoruae.com/",
      description:
        "Free Amazon FBA calculator for UAE and KSA sellers. Calculate referral fees, fulfillment fees, profit and margins instantly.",
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        name: "FBA Calculator UAE",
        url: "https://www.fbacalculatoruae.com",
      },
      about: {
        "@type": "Thing",
        name: "Amazon FBA Calculator for UAE and KSA sellers",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.fbacalculatoruae.com/og-image-1200x630.png",
      },
    }),
  }}
/>
    </main>
  );
}