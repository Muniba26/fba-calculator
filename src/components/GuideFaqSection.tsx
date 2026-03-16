type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

export default function GuideFaqSection({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              {item.question}
            </h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}