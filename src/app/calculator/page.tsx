import type { Metadata } from "next";
import FbaProfitCalculator from "@/components/FbaProfitCalculator";

export const metadata: Metadata = {
  title: "FBA Profit Calculator UAE | Amazon Seller Fees & ROI Tool",
  description:
    "Calculate Amazon UAE selling fees, FBA charges, net profit, profit margin and ROI with our simple FBA profit calculator for Amazon.ae sellers.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-[#f6f0e6]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <FbaProfitCalculator />
        <section className="mt-16 rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-gray-100 space-y-8">

  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
      Amazon UAE FBA Calculator for Profit, ROI and Fee Estimation
    </h2>

    <p className="mt-4 text-gray-700 leading-7">
      This Amazon FBA calculator helps UAE and Saudi Arabia sellers estimate
      Amazon referral fees, FBA fulfillment fees, profit margins, ROI and
      expected net profit before launching a product. Whether you sell on
      Amazon.ae or Amazon.sa, calculating your costs before buying inventory is
      one of the most important parts of building a profitable business.
    </p>

    <p className="mt-4 text-gray-700 leading-7">
  This calculator focuses on the core Amazon selling calculation: selling price,
  product cost, referral fee, FBA fulfillment fee, net profit, profit margin,
  and ROI. It is designed to stay simple so UAE and KSA sellers can quickly
  check product profitability without entering too many complex fields.
</p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      How Amazon FBA Fees Work in UAE and Saudi Arabia
    </h2>

    <p className="mt-4 text-gray-700 leading-7">
      Amazon FBA fees usually include referral fees and fulfillment fees.
      Referral fees are percentage-based commissions charged by Amazon depending
      on the product category. Fulfillment fees are charged when Amazon stores,
      packs and delivers your product through FBA warehouses.
    </p>

    <p className="mt-4 text-gray-700 leading-7">
      In addition to Amazon fees, sellers should also calculate shipping,
      customs, VAT, return rates and PPC advertising costs. Ignoring these
      expenses is one of the biggest reasons new Amazon UAE sellers lose money
      after launching products.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      How to Calculate Amazon Profit Correctly
    </h2>

    <p className="mt-4 text-gray-700 leading-7">
      To calculate Amazon profit properly, start with your expected selling
      price. Then subtract product cost, supplier shipping cost, Amazon referral
      fee, FBA fulfillment fee, VAT impact and advertising spend. The remaining
      amount is your estimated net profit.
    </p>

    <p className="mt-4 text-gray-700 leading-7">
      Serious Amazon sellers also calculate ROI and profit margin before
      launching inventory. A product may look profitable at first, but after all
      fees and advertising costs are included, the margin may become too low to
      scale safely.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Amazon UAE vs Amazon KSA Profit Comparison
    </h2>

    <p className="mt-4 text-gray-700 leading-7">
      Amazon UAE and Amazon Saudi Arabia are different marketplaces with
      different customer behavior, competition levels and logistics costs. A
      product performing well in UAE may not always give the same results in
      Saudi Arabia. This is why sellers should calculate UAE and KSA profit
      separately before sending inventory.
    </p>

    <p className="mt-4 text-gray-700 leading-7">
      UAE is often easier for beginners because the market is smaller and easier
      to test. Saudi Arabia has larger demand in many categories, but pricing,
      shipping and competition can also be more aggressive depending on the
      niche.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Common Mistakes Amazon UAE Sellers Make
    </h2>

    <ul className="mt-4 list-disc pl-6 text-gray-700 leading-7 space-y-2">
      <li>Ignoring Amazon referral fees before ordering inventory.</li>
      <li>Not calculating PPC advertising cost.</li>
      <li>Launching products with weak profit margins.</li>
      <li>Choosing products only because competitors sell them.</li>
      <li>Ignoring shipping and customs costs.</li>
      <li>Calculating revenue but not real net profit.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-6">

      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          Is this Amazon FBA calculator free?
        </h3>

        <p className="mt-2 text-gray-700 leading-7">
          Yes. The calculator is completely free for Amazon UAE and Saudi Arabia
          sellers.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          Does this calculator work for Amazon Saudi Arabia?
        </h3>

        <p className="mt-2 text-gray-700 leading-7">
          Yes. The calculator supports both UAE (AED) and Saudi Arabia (SAR)
          marketplaces.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          Can I calculate ROI and profit margin?
        </h3>

        <p className="mt-2 text-gray-700 leading-7">
          Yes. The calculator helps estimate ROI, net profit and expected profit
          margins before launching products.
        </p>
      </div>

    </div>
  </div>

</section>
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Amazon FBA Calculator UAE & KSA",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.fbacalculatoruae.com/calculator",
      description:
        "Free Amazon FBA calculator for UAE and KSA sellers. Calculate referral fees, fulfillment fees, profit, margin and ROI.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "AED",
      },
      featureList: [
        "Amazon referral fee calculation",
        "FBA fulfillment fee calculation",
        "Profit calculation",
        "Margin calculation",
        "ROI estimation",
        "UAE marketplace support",
        "KSA marketplace support",
      ],
      provider: {
        "@type": "Organization",
        name: "FBA Calculator UAE",
        url: "https://www.fbacalculatoruae.com",
      },
    }),
  }}
/>
    </main>
  );
}
