export default function HomeFaqSection() {
  const faqs = [
    {
      question: "What does this Amazon FBA calculator include?",
      answer:
        "This calculator includes Amazon referral fees and FBA fulfillment fees for UAE and Saudi Arabia, helping sellers estimate profit and margin.",
    },
    {
      question: "Does this calculator work for both UAE and Saudi Arabia?",
      answer:
        "Yes. It supports both AED for UAE and SAR for Saudi Arabia.",
    },
    {
      question: "Are VAT and PPC costs included?",
      answer:
        "VAT and PPC are not included in quick preview. Add them manually for full profit calculation.",
    },
    {
      question: "How do I calculate Amazon FBA profit?",
      answer:
        "Enter selling price, costs and fees. Subtract total cost from revenue to get profit.",
    },
  ];

  return (
    <section className="mt-1 rounded-[28px] border border-neutral-200 p-8 md:p-10">
      <p className="text-2xl font-semibold text-neutral-900 mb-8">
        Frequently Asked Questions
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-neutral-200 p-6 bg-white"
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-4 leading-snug">
              {faq.question}
            </h3>
            <p className="text-neutral-700 text-lg leading-8">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}