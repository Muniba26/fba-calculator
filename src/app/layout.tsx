import "./globals.css";
import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import SiteFooter from "@/components/SiteFooter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fbacalculatoruae.com"),
  title: "Amazon FBA Profit Calculator UAE & Saudi | Free Seller Tool",
  description:
    "Free Amazon FBA profit calculator for UAE and Saudi Arabia sellers. Calculate Amazon referral fees, fulfillment fees, margins and profits accurately.",
  keywords: [
    "amazon fba calculator uae",
    "amazon fba calculator saudi arabia",
    "amazon seller fees uae",
    "amazon seller fees saudi",
    "amazon profit calculator uae",
    "amazon fba calculator gcc",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Amazon FBA Profit Calculator UAE & KSA",
    description:
      "Calculate Amazon fees, margins and profits for UAE & Saudi sellers.",
    url: "https://www.fbacalculatoruae.com",
    siteName: "FBA Calculator UAE & KSA",
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Amazon FBA Profit Calculator UAE & KSA",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA Profit Calculator UAE & KSA",
    description:
      "Calculate Amazon fees, margins and profits for UAE & Saudi sellers.",
    images: ["/og-image-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6375973173510379"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
      <body className="bg-[#FFF7ED] min-h-screen flex flex-col">
        <TopBar />

        {/* 🔒 GLOBAL CONTENT WRAPPER */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[1440px]">
            {children}
          </div>
        </div>

        <SiteFooter />
      </body>
    </html>
  );
}
