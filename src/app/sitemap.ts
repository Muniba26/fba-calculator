import { GUIDES } from "@/lib/guides";

const FEE_CATEGORIES = [
  "electronics",
  "books",
  "beauty",
  "fashion",
  "kitchen",
];

export default function sitemap() {
  const baseUrl = "https://www.fbacalculatoruae.com";

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];

  const guidePages = GUIDES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
  }));

  const feePages = FEE_CATEGORIES.map((category) => ({
    url: `${baseUrl}/fees/${category}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...guidePages, ...feePages];
}