"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function CalculatorPreview() {
  const [currency, setCurrency] = useState<"AED" | "SAR">("AED");
  const [sellingPrice, setSellingPrice] = useState<string>("129");
  const [productCost, setProductCost] = useState<string>("55");

  const result = useMemo(() => {
    const price = Number(sellingPrice);
    const cost = Number(productCost);

    if (!Number.isFinite(price) || !Number.isFinite(cost) || price <= 0) {
      return {
        valid: false,
        referralFee: 0,
        fbaEstimate: 0,
        profit: 0,
        margin: 0,
      };
    }

    // ✅ Preview-only estimates (not full Amazon fee logic)
    // Referral fee estimate: 15% of selling price
    const referralFee = price * 0.15;

    // Simple FBA estimate (placeholder): depends on price bucket
    // This is just to give users a "feel" on the homepage.
    const fbaEstimate =
      price < 50 ? 12 : price < 100 ? 15 : price < 200 ? 18 : 22;

    const profit = price - cost - referralFee - fbaEstimate;
    const margin = (profit / price) * 100;

    return {
      valid: true,
      referralFee,
      fbaEstimate,
      profit,
      margin,
    };
  }, [sellingPrice, productCost]);

  const fmt = (n: number) => {
    if (!Number.isFinite(n)) return "-";
    return `${n.toFixed(2)} ${currency}`;
  };

  return (
    <section className="py-10">
      <div className="bg-white border rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Quick Profit Preview
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Enter a selling price and product cost to get a fast estimate. For
              accurate UAE/KSA fees and full breakdown, use the full calculator.
            </p>
          </div>

          <Link
            href="/calculator"
            className="inline-flex items-center justify-center bg-black text-white px-5 py-3 rounded-full hover:opacity-90 transition"
          >
            Open Full Calculator
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="border rounded-xl p-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-gray-900">Inputs</h3>

              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => setCurrency("AED")}
                  className={`px-3 py-1 rounded-full border transition ${
                    currency === "AED"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 hover:bg-black/5"
                  }`}
                >
                  AED
                </button>
                <button
                  onClick={() => setCurrency("SAR")}
                  className={`px-3 py-1 rounded-full border transition ${
                    currency === "SAR"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 hover:bg-black/5"
                  }`}
                >
                  SAR
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <div className="text-sm font-medium text-gray-800">
                  Selling price ({currency})
                </div>
                <input
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  inputMode="decimal"
                  className="mt-2 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder={`e.g. 129 ${currency}`}
                />
              </label>

              <label className="block">
                <div className="text-sm font-medium text-gray-800">
                  Product cost ({currency})
                </div>
                <input
                  value={productCost}
                  onChange={(e) => setProductCost(e.target.value)}
                  inputMode="decimal"
                  className="mt-2 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder={`e.g. 55 ${currency}`}
                />
              </label>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              * Preview uses simple estimates. Full calculator shows accurate
              fee rules and detailed breakdown.
            </div>
          </div>

          {/* Output */}
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold text-gray-900">Preview Result</h3>

            {!result.valid ? (
              <div className="mt-4 text-sm text-gray-600">
                Enter valid numbers to see the estimate.
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <Row label="Estimated referral fee (15%)" value={fmt(result.referralFee)} />
                <Row label="Estimated FBA fee (preview)" value={fmt(result.fbaEstimate)} />

                <div className="h-px bg-black/10 my-2" />

                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">
                    Estimated profit
                  </div>
                  <div
                    className={`text-sm font-semibold ${
                      result.profit >= 0 ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {fmt(result.profit)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">Estimated margin</div>
                  <div className="text-sm font-medium text-gray-900">
                    {Number.isFinite(result.margin) ? result.margin.toFixed(1) : "-"}%
                  </div>
                </div>

                <div className="mt-3 rounded-lg bg-black/5 border p-3 text-xs text-gray-700">
                  For accurate UAE/KSA fee tiers, size/weight, storage, and
                  category referral rules — open the full calculator.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-sm text-gray-700">{label}</div>
      <div className="text-sm font-medium text-gray-900">{value}</div>
    </div>
  );
}