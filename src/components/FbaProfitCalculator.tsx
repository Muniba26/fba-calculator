"use client";

import { useMemo, useState } from "react";

function n(v: string) {
  const x = Number(String(v).replace(/,/g, ""));
  return Number.isFinite(x) ? x : 0;
}
function money(v: number) {
  return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function FbaProfitCalculator() {
  const [currency, setCurrency] = useState<"AED" | "SAR">("AED");

  const [sellingPrice, setSellingPrice] = useState("79");
  const [referralPct, setReferralPct] = useState("15");

  const [fbaFee, setFbaFee] = useState("16");
  const [storageFee, setStorageFee] = useState("0");

  const [productCost, setProductCost] = useState("34");
  const [inbound, setInbound] = useState("0");
  const [packaging, setPackaging] = useState("0");
  const [otherCosts, setOtherCosts] = useState("0");

  const [vatPct, setVatPct] = useState("5");
  const [ppc, setPpc] = useState("0");

  const calc = useMemo(() => {
    const price = n(sellingPrice);
    const ref = (price * n(referralPct)) / 100;

    const fees = ref + n(fbaFee) + n(storageFee);
    const costs = n(productCost) + n(inbound) + n(packaging) + n(otherCosts);

    const vat = (price * n(vatPct)) / 100; // simple estimate
    const total = fees + costs + vat + n(ppc);

    const profit = price - total;
    const margin = price > 0 ? (profit / price) * 100 : 0;
    const roi = costs > 0 ? (profit / costs) * 100 : 0;

    const breakevenAcos = price > 0 ? Math.max(0, ((profit + n(ppc)) / price) * 100) : 0;

    return { price, ref, fees, costs, vat, total, profit, margin, roi, breakevenAcos };
  }, [sellingPrice, referralPct, fbaFee, storageFee, productCost, inbound, packaging, otherCosts, vatPct, ppc]);

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(255,180,120,0.25),transparent_60%),linear-gradient(#faf7f2,#faf7f2)]">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur">
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-950">
                  FBA Profit Calculator
                </h1>
                <p className="mt-1 text-sm text-slate-600">
                  Enter costs + fees to estimate net profit, margin, ROI, and PPC break-even.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrency("AED")}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold ring-1 transition ${
                    currency === "AED"
                      ? "bg-black text-white ring-black"
                      : "bg-white text-slate-700 ring-black/10 hover:bg-black/5"
                  }`}
                >
                  AED
                </button>
                <button
                  onClick={() => setCurrency("SAR")}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold ring-1 transition ${
                    currency === "SAR"
                      ? "bg-black text-white ring-black"
                      : "bg-white text-slate-700 ring-black/10 hover:bg-black/5"
                  }`}
                >
                  SAR
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              {/* Inputs */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6">
                  <h2 className="text-sm font-semibold text-slate-900">Inputs</h2>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Field label="Selling price" prefix={currency} value={sellingPrice} onChange={setSellingPrice} />
                    <Field label="Referral fee %" suffix="%" value={referralPct} onChange={setReferralPct} />
                    <Field label="FBA fulfillment fee" prefix={currency} value={fbaFee} onChange={setFbaFee} />
                    <Field label="Storage fee (per unit)" prefix={currency} value={storageFee} onChange={setStorageFee} />

                    <div className="sm:col-span-2 pt-2">
                      <div className="text-xs font-semibold text-slate-500">Your costs</div>
                    </div>

                    <Field label="Product cost" prefix={currency} value={productCost} onChange={setProductCost} />
                    <Field label="Inbound shipping" prefix={currency} value={inbound} onChange={setInbound} />
                    <Field label="Packaging / prep" prefix={currency} value={packaging} onChange={setPackaging} />
                    <Field label="Other costs" prefix={currency} value={otherCosts} onChange={setOtherCosts} />

                    <div className="sm:col-span-2 pt-2">
                      <div className="text-xs font-semibold text-slate-500">VAT + PPC</div>
                    </div>

                    <Field label="VAT estimate %" suffix="%" value={vatPct} onChange={setVatPct} />
                    <Field label="PPC estimate" prefix={currency} value={ppc} onChange={setPpc} />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-slate-900">Results</h2>
                    <span className="text-xs text-slate-500">Live</span>
                  </div>

                  <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5">
                    <div className="text-xs text-slate-500">Net Profit (per unit)</div>
                    <div className={`mt-2 text-3xl font-extrabold tracking-tight ${calc.profit < 0 ? "text-red-600" : "text-slate-950"}`}>
                      {currency} {money(calc.profit)}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Margin: {money(calc.margin)}% • ROI: {money(calc.roi)}%
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <Row label="Revenue" value={`${currency} ${money(calc.price)}`} />
                    <Row label="Amazon fees (total)" value={`${currency} ${money(calc.fees)}`} />
                    <Row label="Your costs (total)" value={`${currency} ${money(calc.costs)}`} />
                    <Row label="VAT estimate" value={`${currency} ${money(calc.vat)}`} />
                    <Row label="PPC estimate" value={`${currency} ${money(n(ppc))}`} />
                    <Row label="Total costs" value={`${currency} ${money(calc.total)}`} bold />
                  </div>

                  <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5">
                    <div className="text-xs text-slate-500">Break-even PPC (ACoS max)</div>
                    <div className="mt-2 text-2xl font-bold text-slate-950">{money(calc.breakevenAcos)}%</div>
                    <div className="mt-1 text-xs text-slate-500">
                      Approx. maximum ACoS before profit hits zero.
                    </div>
                  </div>

                  <div className="mt-4 text-[11px] text-slate-500">
                    Estimates only. Always verify fees/VAT for your category.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold text-slate-600">{label}</div>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2">
        {prefix ? <span className="text-xs font-semibold text-slate-500">{prefix}</span> : null}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          inputMode="decimal"
          className="w-full bg-transparent text-sm text-slate-900 outline-none"
        />
        {suffix ? <span className="text-xs font-semibold text-slate-500">{suffix}</span> : null}
      </div>
    </label>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3">
      <div className="text-xs text-slate-600">{label}</div>
      <div className={`text-xs ${bold ? "font-semibold text-slate-950" : "text-slate-700"}`}>
        {value}
      </div>
    </div>
  );
}
