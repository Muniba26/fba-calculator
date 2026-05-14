import FbaProfitCalculator from "@/components/FbaProfitCalculator";
export const metadata = {
  title: "Amazon UAE Profit Calculator | FBA Fees, ROI & Margin Calculator",
  description:
    "Free Amazon UAE and KSA FBA calculator to estimate referral fees, profit margins, ROI and selling costs.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-[#f6f0e6]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <FbaProfitCalculator />
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
