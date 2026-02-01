"use client";

import { useMemo, useState } from "react";

type Currency = "AED" | "SAR";

function round2(n: number) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

export default function CalculatorUI() {
  const [currency, setCurrency] = useState<Currency>("AED");

  // Inputs (example defaults like your screenshot)
  const [sellingPrice, setSellingPrice] = useState<number>(79);
  const [referralPct, setReferralPct] = useState<number>(15);

  const [fbaFee, setFbaFee] = useState<number>(16);
  const [storageFee, setStorageFee] = useState<number>(0);

  const [productCost, setProductCost] = useState<number>(34);
  const [inboundShipping, setInboundShipping] = useState<number>(0);
  const [packagingPrep, setPackagingPrep] = useState<number>(0);
  const [otherCosts, setOtherCosts] = useState<number>(0);

  const [vatPct, setVatPct] = useState<number>(5);
  const [ppcEstimate, setPpcEstimate] = useState<number>(0);

  const computed = useMemo(() => {
    const referralFee = (sellingPrice * referralPct) / 100;
    const amazonFeesTotal = referralFee + fbaFee + storageFee;

    const yourCostsTotal = productCost + inboundShipping + packagingPrep + otherCosts;

    // Simple VAT estimate (you can refine later)
    const vatEstimate = (sellingPrice * vatPct) / 100;

    const totalCosts = amazonFeesTotal + yourCostsTotal + vatEstimate + ppcEstimate;
    const netProfit = sellingPrice - totalCosts;

    const margin = sellingPrice > 0 ? (netProfit / sellingPrice) * 100 : 0;
    const roi = productCost > 0 ? (netProfit / productCost) * 100 : 0;

    // Break-even PPC (max) before profit becomes zero
    const breakEvenPpc = sellingPrice - (amazonFeesTotal + yourCostsTotal + vatEstimate);

    return {
      referralFee: round2(referralFee),
      amazonFeesTotal: round2(amazonFeesTotal),
      yourCostsTotal: round2(yourCostsTotal),
      vatEstimate: round2(vatEstimate),
      totalCosts: round2(totalCosts),
      netProfit: round2(netProfit),
      margin: round2(margin),
      roi: round2(roi),
      breakEvenPpc: round2(Math.max(0, breakEvenPpc)),
    };
  }, [
    sellingPrice,
    referralPct,
    fbaFee,
    storageFee,
    productCost,
    inboundShipping,
    packagingPrep,
    otherCosts,
    vatPct,
    ppcEstimate,
  ]);

  const currencyChip = (c: Currency) => {
    const active = currency === c;
    return (
      <button
        type="button"
        onClick={() => setCurrency(c)}
        className={[
          "px-3 py-1.5 text-sm font-semibold rounded-full border transition",
          active
            ? "bg-black text-white border-black"
            : "bg-white text-slate-700 border-slate-200 hover:border-slate-400",
        ].join(" ")}
      >
        {c}
      </button>
    );
  };

  const Field = ({
    label,
    value,
    onChange,
    rightText,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    rightText?: string;
  }) => (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        {rightText ? <span className="text-xs text-slate-500">{rightText}</span> : null}
      </div>
      <div className="relative">
        <input
          inputMode="decimal"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-black/10"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value || 0))}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">
          {rightText ?? currency}
        </span>
      </div>
    </label>
  );

  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            FBA Profit Calculator
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Enter costs + fees to estimate net profit, margin, ROI, and PPC break-even.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {currencyChip("AED")}
          {currencyChip("SAR")}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold tracking-wide text-slate-900">Inputs</h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Selling price" value={sellingPrice} onChange={setSellingPrice} />
            <Field label="Referral fee %" value={referralPct} onChange={setReferralPct} rightText="%" />

            <Field label="FBA fulfillment fee" value={fbaFee} onChange={setFbaFee} />
            <Field label="Storage fee (per unit)" value={storageFee} onChange={setStorageFee} />

            <Field label="Product cost" value={productCost} onChange={setProductCost} />
            <Field label="Inbound shipping" value={inboundShipping} onChange={setInboundShipping} />

            <Field label="Packaging / prep" value={packagingPrep} onChange={setPackagingPrep} />
            <Field label="Other costs" value={otherCosts} onChange={setOtherCosts} />

            <Field label="VAT estimate %" value={vatPct} onChange={setVatPct} rightText="%" />
            <Field label="PPC estimate" value={ppcEstimate} onChange={setPpcEstimate} />
          </div>
        </div>

        {/* Results */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold tracking-wide text-slate-900">Results</h2>
            <span className="text-xs text-slate-500">Live</span>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 p-5">
            <div className="text-xs text-slate-500">Net Profit (per unit)</div>
            <div className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
              {currency} {computed.netProfit.toFixed(2)}
            </div>
            <div className="mt-1 text-xs text-slate-600">
              Margin: {computed.margin.toFixed(2)}% · ROI: {computed.roi.toFixed(2)}%
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Row label="Revenue" value={`${currency} ${round2(sellingPrice).toFixed(2)}`} />
            <Row label="Amazon fees (total)" value={`${currency} ${computed.amazonFeesTotal.toFixed(2)}`} />
            <Row label="Your costs (total)" value={`${currency} ${computed.yourCostsTotal.toFixed(2)}`} />
            <Row label="VAT estimate" value={`${currency} ${computed.vatEstimate.toFixed(2)}`} />
            <Row label="PPC estimate" value={`${currency} ${round2(ppcEstimate).toFixed(2)}`} />
            <Row label="Total costs" value={`${currency} ${computed.totalCosts.toFixed(2)}`} bold />
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 p-5">
            <div className="text-xs text-slate-500">Break-even PPC (max)</div>
            <div className="mt-1 text-xl font-bold text-slate-900">
              {currency} {computed.breakEvenPpc.toFixed(2)}
            </div>
            <div className="mt-1 text-xs text-slate-600">
              Approx maximum PPC before profit hits zero.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={bold ? "text-sm font-bold text-slate-900" : "text-sm font-semibold text-slate-900"}>
        {value}
      </span>
    </div>
  );
}
