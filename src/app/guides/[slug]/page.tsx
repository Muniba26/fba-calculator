import type { Metadata } from "next";
import Image from "next/image";
import { GUIDES, getGuideBySlug } from "@/lib/guides";
import BackToGuides from "@/components/BackToGuides";
import RelatedGuides from "@/components/RelatedGuides";
import ProductResearchLinks from "@/components/ProductResearchLinks";
import CalculatorPreview from "@/components/CalculatorPreview";
import AutoRelatedGuides from "@/components/AutoRelatedGuides";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractHeadingsFromHtml(html: string) {
  const matches = [...html.matchAll(/<h2>(.*?)<\/h2>|<h3>(.*?)<\/h3>/g)];
  return matches.map((match) => {
    const raw = match[1] || match[2] || "";
    const text = raw.replace(/<[^>]+>/g, "").trim();
    return {
      text,
      id: slugify(text),
      level: match[1] ? 2 : 3,
    };
  });
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found | FBA Calculator UAE & KSA",
      description: "The requested guide could not be found.",
    };
  }

  return {
    title: guide.seoTitle || guide.title,
    description: guide.seoDescription || guide.excerpt,
    alternates: {
      canonical: `https://www.fbacalculatoruae.com/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.seoTitle || guide.title,
      description: guide.seoDescription || guide.excerpt,
      url: `https://www.fbacalculatoruae.com/guides/${guide.slug}`,
      siteName: "FBA Calculator UAE & KSA",
      images: [
        {
          url: guide.ogImage || guide.heroImage || "/og-image-1200x630.png",
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seoTitle || guide.title,
      description: guide.seoDescription || guide.excerpt,
      images: [guide.ogImage || guide.heroImage || "/og-image-1200x630.png"],
    },
  };
}

export default async function GuideSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const faqSchema = guide?.faq?.length
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }
  : null;
const tocItems = extractHeadingsFromHtml(guide?.contentHtml || "");

  if (!guide) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-red-600">Guide not found</h1>
        <p className="mt-3 text-neutral-700">
          Slug received: <b>{slug}</b>
        </p>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {faqSchema ? (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
  />
) : null}

      <div className="mb-6">
        <BackToGuides />
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-neutral-900">{guide.title}</h1>

        {guide.subtitle ? (
          <p className="mt-3 text-lg text-neutral-600">{guide.subtitle}</p>
        ) : null}

        {guide.authorLine ? (
          <p className="mt-4 text-sm text-neutral-500">{guide.authorLine}</p>
        ) : null}

        {guide.updatedAt ? (
          <p className="mt-2 text-sm text-neutral-500">
            Last updated: {guide.updatedAt}
          </p>
        ) : null}
      </header>

      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="self-start lg:sticky lg:top-24">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
  <h2 className="text-xl font-bold text-neutral-900">Table of Contents</h2>

  <div className="mt-4 space-y-3">
    {tocItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        className={`block text-neutral-700 hover:text-black ${
          item.level === 3 ? "ml-4 text-sm" : "text-base font-medium"
        }`}
      >
        {item.text}
      </a>
    ))}
  </div>
</div>
        </aside>

        <div className="min-w-0">
          <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200">
            <Image
  src={guide.heroImage}
  alt={guide.title}
  width={1200}
  height={700}
  priority
  fetchPriority="high"
  loading="eager"
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc3MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEyMDAnIGhlaWdodD0nNzAwJyBmaWxsPScjZjVmMGU3Jy8+PC9zdmc+"
  sizes="(max-width: 768px) 100vw, 900px"
  className="h-auto w-full"
/>
          </div>

          <article
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{
  __html: guide.contentHtml
    .replace(/<h2>(.*?)<\/h2>/g, (_, text) => {
      const clean = String(text).replace(/<[^>]+>/g, "").trim();
      return `<h2 id="${slugify(clean)}">${text}</h2>`;
    })
    .replace(/<h3>(.*?)<\/h3>/g, (_, text) => {
      const clean = String(text).replace(/<[^>]+>/g, "").trim();
      return `<h3 id="${slugify(clean)}">${text}</h3>`;
    }),
}}
          />

          <div className="mt-14">
            <RelatedGuides currentSlug={guide.slug} />
          </div>

          <div className="mt-14">
       <AutoRelatedGuides relatedSlugs={guide.relatedSlugs} />
         </div>
        
          <div className="mt-14">
            <ProductResearchLinks />
          </div>

          <div className="mt-14">
            <CalculatorPreview />
          </div>
        </div>
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.seoDescription || guide.excerpt,
      author: {
        "@type": "Organization",
        name: "FBA Calculator UAE",
      },
      publisher: {
        "@type": "Organization",
        name: "FBA Calculator UAE",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fbacalculatoruae.com/og-image-1200x630.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.fbacalculatoruae.com/guides/${guide.slug}`,
      },
      url: `https://www.fbacalculatoruae.com/guides/${guide.slug}`,
      inLanguage: "en",
    }),
  }}
/>
{guide.howToSteps && guide.howToSteps.length > 0 && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: guide.title,
        description: guide.seoDescription || guide.excerpt,
        image: guide.ogImage || guide.heroImage || "https://www.fbacalculatoruae.com/og-image-1200x630.png",
        totalTime: "PT30M",
        step: guide.howToSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step,
          text: step,
        })),
      }),
    }}
  />
)}
    </main>
  );
}