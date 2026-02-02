import "./globals.css";
import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "FBA Calculator UAE & KSA",
  description: "Amazon FBA calculator for UAE and KSA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
