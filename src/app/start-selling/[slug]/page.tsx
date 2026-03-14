import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const pages: Record<
  string,
  {
    title: string;
    intro: string;
    bullets: string[];
    articleHref: string;
    articleText: string;
  }
> = {
  "how-to-start-amazon-uae": {
    title: "How to Start Amazon UAE",
    intro:
      "Starting on Amazon UAE is easier when you understand the basic steps first. This page gives beginners a simple overview before moving to the full guide.",
    bullets: [
      "Choose a product category carefully",
      "Understand referral and FBA fees before investing",
      "Estimate profit using a calculator before ordering stock",
      "Prepare listings, pricing, and launch strategy properly",
    ],
    articleHref: "/guides/how-to-start-amazon-uae-2026",
    articleText: "Read the full guide: How to Start Selling on Amazon UAE in 2026",
  },

  "how-to-start-amazon-uae-in-2026": {
    title: "How to Start Amazon UAE in 2026",
    intro:
      "If you want to start selling on Amazon UAE in 2026, the right approach is to validate profit first, understand fees, and then move to supplier sourcing and listing setup.",
    bullets: [
      "Check product margins before ordering inventory",
      "Learn Amazon UAE fee structure first",
      "Start with lower-risk product research",
      "Read a complete launch guide before opening inventory",
    ],
    articleHref: "/guides/how-to-start-amazon-uae-2026",
    articleText: "Open the complete Amazon UAE 2026 beginner guide",
  },
};

export default async function StartSellingPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
        {page.title}
      </h1>

      <p className="text-lg text-gray-700 leading-8 mb-8">{page.intro}</p>

      <div className="rounded-2xl border border-black/10 bg-white p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">What to focus on first</h2>

        <ul className="space-y-3 text-gray-700 list-disc pl-6">
          {page.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-[#F8F6F2] border border-black/10 p-6">
        <h2 className="text-2xl font-semibold mb-3">Next step</h2>

        <p className="text-gray-700 mb-5">
          For the full step-by-step process, open the main guide below.
        </p>

        <Link
          href={page.articleHref}
          className="inline-block rounded-full bg-black text-white px-6 py-3 font-medium hover:opacity-90 transition"
        >
          {page.articleText}
        </Link>
      </div>
    </main>
  );
}