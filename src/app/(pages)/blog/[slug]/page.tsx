import Link from "next/link";
import { notFound } from "next/navigation";

const ARTICLES: Record<
  string,
  { title: string; desc: string; bullets: string[]; sections: { h: string; p: string }[] }
> = {
  "estimate-fba-fees-without-api": {
    title: "How to estimate FBA fees (no API)",
    desc: "A simple way to estimate fees using the same structure as Amazon’s calculator, without pulling live ASIN data.",
    bullets: [
      "Use your selling price + referral fee %",
      "Add estimated FBA fulfillment + storage",
      "Optional: VAT + PPC toggle",
      "Result: profit, margin, ROI, break-even PPC",
    ],
    sections: [
      {
        h: "Step 1 — Start with the selling price",
        p: "Enter the listing price customers pay. This is your top-line revenue for one unit.",
      },
      {
        h: "Step 2 — Referral fee (category %)",
        p: "Use a category referral % (example: 15%). Your referral fee is selling price × referral %. This matches the Amazon calculator structure.",
      },
      {
        h: "Step 3 — Fulfillment + storage",
        p: "Add the FBA fulfillment fee (pick & pack + shipping) and storage estimate per unit. If you don’t know exact fees yet, start with a conservative estimate.",
      },
      {
        h: "Step 4 — VAT and PPC (optional)",
        p: "If VAT applies, enable VAT and use the default (UAE 5%, KSA 15%). If you plan ads, enable PPC and set an ACOS % to see break-even limits.",
      },
    ],
  },

  "uae-ksa-vat-basics": {
    title: "UAE vs KSA VAT basics (simple)",
    desc: "Understand the VAT toggle and when to include VAT in your calculation.",
    bullets: [
      "UAE VAT default: 5%",
      "KSA VAT default: 15%",
      "VAT is optional in calculator because sellers differ",
      "Use VAT when you need a safe, realistic estimate",
    ],
    sections: [
      {
        h: "Why VAT is a toggle",
        p: "Some sellers price VAT-included, others treat it differently depending on setup. Toggle keeps the tool flexible and accurate for your situation.",
      },
      {
        h: "When you should enable VAT",
        p: "Enable VAT when you want a conservative estimate or when you know VAT affects your final margin for the product.",
      },
      {
        h: "UAE vs KSA",
        p: "For UAE use 5% by default. For KSA use 15% by default. You can adjust if rules or your scenario differs.",
      },
    ],
  },

  "pricing-strategy-roi-margin": {
    title: "Pricing strategy: target ROI & margin",
    desc: "Use profit, ROI, and margin together to decide a safer selling price.",
    bullets: [
      "Margin helps you compare products",
      "ROI helps you compare capital efficiency",
      "Break-even PPC shows how much ads you can afford",
      "Raise price or reduce costs to hit targets",
    ],
    sections: [
      {
        h: "Margin vs ROI (in one line)",
        p: "Margin = profit ÷ revenue. ROI = profit ÷ total cost. Both matter, but they answer different questions.",
      },
      {
        h: "Use break-even PPC as a safety rule",
        p: "If your break-even PPC is too low, ads will kill profit. Either improve cost structure or raise price.",
      },
      {
        h: "Practical workflow",
        p: "Start with your cost estimates → check profit/margin/ROI → adjust price or costs until it becomes safe.",
      },
    ],
  },
};

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = ARTICLES[params.slug];
  if (!article) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="text-sm font-semibold text-orange-600 hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
        {article.title}
      </h1>

      <p className="mt-3 text-base text-slate-600">{article.desc}</p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="text-sm font-semibold text-slate-900">Quick summary</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {article.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-7">
        {article.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-lg font-semibold text-slate-900">{s.h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.p}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-500">
        Disclaimer: Estimates only. Amazon fees and VAT rules can change, and final
        fees may vary by category and seller settings.
      </div>
    </main>
  );
}
