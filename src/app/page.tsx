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
            <Link
              href="/articles/how-to-start-amazon-fba-2026"
              className="inline-block mt-3 text-base md:text-lg font-semibold text-gray-900 hover:underline cursor-pointer"
            >
              <Link
  href="/guides/how-to-start-amazon-uae-2026"
  className="text-2xl font-bold text-neutral-900 hover:underline"
>
  How To Start Amazon UAE in 2026
</Link>
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