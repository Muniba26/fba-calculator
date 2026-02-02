import Link from "next/link";

export default function FbaCalculator() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">

      <section className="bg-white rounded-3xl p-10 shadow-lg grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="space-y-4">

          <h3 className="font-semibold text-lg tracking-wide">
            Start Amazon Now
          </h3>

          <div className="p-4 border rounded-xl hover:shadow transition">
            <b>How to start Amazon FBA in UAE</b>
            <p className="text-sm text-gray-500">Step by step guide</p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow transition">
            <b>How to rank a product (2026)</b>
            <p className="text-sm text-gray-500">Keywords + PPC</p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow transition">
            <b>Optimize your listing</b>
            <p className="text-sm text-gray-500">Images, A+ content</p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow transition">
            <b>Price for profit</b>
            <p className="text-sm text-gray-500">ROI strategy</p>
          </div>

          <button className="btn-secondary w-full mt-4">
            View all guides
          </button>

        </div>

        {/* CENTER */}
        <div className="bg-[#fff6ec] rounded-3xl p-10 text-center">

          <span className="text-sm bg-white px-4 py-1 rounded-full shadow">
            Built for UAE & Saudi sellers
          </span>

          <h1 className="text-4xl font-semibold mt-6 leading-tight">
            Amazon FBA Profit Calculator
          </h1>

          <p className="text-gray-600 mt-4">
            Calculate profit, ROI, margin, and PPC break-even in seconds.
          </p>

          <Link
            href="/calculator"
            target="_blank"
            className="btn-primary inline-block mt-8"
          >
            Open Calculator
          </Link>

          <p className="text-xs mt-4 text-gray-500">
            No login • Fast • Estimates only
          </p>

        </div>

        {/* RIGHT — PREMIUM BULLETS */}
        <div>

          <h3 className="text-xl font-semibold mb-6 tracking-wide">
            Learn without paid courses
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-400"></span>
              Updated for 2026 Amazon fees & rules
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-400"></span>
              Free A-Z step-by-step guides
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-400"></span>
              No paid courses — save money
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-400"></span>
              Real UAE & Saudi calculator
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-400"></span>
              Simple, fast, no login
            </li>

          </ul>

        </div>

      </section>

    </main>
  );
}
