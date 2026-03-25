import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CalculatorPreview from "@/components/CalculatorPreview";
import HomeProductResearchSection from "@/components/HomeProductResearchSection";
import HomeFaqSection from "@/components/HomeFaqSection";

export const metadata: Metadata = {
  title: "Amazon FBA Calculator UAE & KSA – Free Profit & Fee Tool",
  description:
    "Free Amazon FBA calculator for UAE and KSA sellers. Calculate referral fees, fulfillment fees, profit and margins instantly. No signup required.",
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
  Amazon FBA Calculator UAE & KSA
</h1>

            {/* SEO TEXT */}
            <p className="mt-4 text-gray-600">
  Calculate Amazon referral fees, FBA charges, profit and margin instantly
  for UAE and Saudi Arabia sellers. Free tool built for Amazon UAE & KSA
  sellers with no signup required.
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
                width={700}
                height={700}
                priority
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