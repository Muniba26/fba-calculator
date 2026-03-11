import "./globals.css";
import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fbacalculatoruae.com"),
  title: "Amazon FBA Profit Calculator UAE & Saudi | Free Seller Tool",
  description:
    "Free Amazon FBA profit calculator for UAE and Saudi Arabia sellers. Calculate Amazon referral fees, fulfillment fees, margins, and net profit instantly.",
  keywords: [
    "amazon fba calculator uae",
    "amazon fba calculator saudi arabia",
    "amazon seller fees uae",
    "amazon seller fees saudi",
    "amazon profit calculator uae",
    "amazon fba calculator gcc",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
