"use client";

import { useMemo, useState } from "react";

type Currency = "AED" | "SAR";

/** -----------------------------
 *  UAE Referral Fee Rules (from your table)
 *  ----------------------------- */
type ReferralRule =
  | { kind: "flat"; rate: number; minFee: number } // rate as decimal (0.15 = 15%)
  | { kind: "threshold"; lowRate: number; highRate: number; threshold: number; minFee: number } // <=threshold uses lowRate
  | { kind: "tiered"; tiers: Array<{ upTo: number; rate: number }>; aboveRate: number; minFee: number }; // progressive

const REFERRAL_RULES: Record<string, ReferralRule> = {
  "Apparel": { kind: "flat", rate: 0.15, minFee: 1 },
  "Automotive": { kind: "flat", rate: 0.12, minFee: 1 },

  "Baby": { kind: "threshold", lowRate: 0.08, highRate: 0.15, threshold: 50, minFee: 1 },
  "Beauty": { kind: "threshold", lowRate: 0.08, highRate: 0.15, threshold: 50, minFee: 1 },
  "Health & Personal Care": { kind: "threshold", lowRate: 0.08, highRate: 0.15, threshold: 50, minFee: 1 },
  "Personal care Appliances": { kind: "threshold", lowRate: 0.08, highRate: 0.15, threshold: 50, minFee: 1 },
  "Pet Products": { kind: "threshold", lowRate: 0.08, highRate: 0.15, threshold: 50, minFee: 0 }, // table shows "-"
  "Grocery": { kind: "threshold", lowRate: 0.05, highRate: 0.11, threshold: 50, minFee: 0 }, // table shows "-"

  "Business, Industrial, and Scientific Supplies": { kind: "flat", rate: 0.11, minFee: 0 }, // table shows "-"
  "Books": { kind: "flat", rate: 0.15, minFee: 1 },
  "Camera": { kind: "flat", rate: 0.08, minFee: 1 },
  "Consumer Electronics": { kind: "flat", rate: 0.07, minFee: 1 },

  "Electronics Accessories (incl. PC and Camera Accessories)": {
    kind: "tiered",
    tiers: [{ upTo: 250, rate: 0.15 }],
    aboveRate: 0.08,
    minFee: 1,
  },

  "Furniture": {
    kind: "tiered",
    tiers: [{ upTo: 750, rate: 0.15 }],
    aboveRate: 0.10,
    minFee: 1,
  },

  "Gift Cards": { kind: "flat", rate: 0.05, minFee: 1 },
  "Home": { kind: "flat", rate: 0.15, minFee: 1 },
  "Home Entertainment": { kind: "flat", rate: 0.05, minFee: 1 },

  "Jewelry": {
    kind: "tiered",
    tiers: [{ upTo: 1000, rate: 0.16 }],
    aboveRate: 0.05,
    minFee: 1,
  },

  "Kitchen": { kind: "flat", rate: 0.15, minFee: 1 },
  "Luggage": { kind: "flat", rate: 0.15, minFee: 1 },
  "Major appliances": { kind: "flat", rate: 0.06, minFee: 1 },
  "Mobile Phones": { kind: "flat", rate: 0.05, minFee: 1 },
  "Music": { kind: "flat", rate: 0.10, minFee: 1 },
  "Music instruments": { kind: "flat", rate: 0.15, minFee: 1 },
  "Office products": { kind: "flat", rate: 0.14, minFee: 1 },
  "Outdoor": { kind: "flat", rate: 0.15, minFee: 1 },
  "PC store": { kind: "flat", rate: 0.06, minFee: 1 },
  "Perfumes": { kind: "flat", rate: 0.15, minFee: 1 },
  "Shoes": { kind: "flat", rate: 0.15, minFee: 1 },
  "Small Appliances": { kind: "flat", rate: 0.13, minFee: 1 },
  "Software": { kind: "flat", rate: 0.10, minFee: 1 },
  "Sports": { kind: "flat", rate: 0.14, minFee: 1 },
  "Stamps collectibles": { kind: "flat", rate: 0.10, minFee: 1 },
  "Tools & Home Improvement": { kind: "flat", rate: 0.15, minFee: 1 },
  "Toys": { kind: "flat", rate: 0.14, minFee: 1 },
  "Video & DVD": { kind: "flat", rate: 0.10, minFee: 1 },
  "Video Game Consoles": { kind: "flat", rate: 0.06, minFee: 1 },
  "Video Games": { kind: "flat", rate: 0.15, minFee: 1 },

  "Watches": {
    kind: "tiered",
    tiers: [{ upTo: 5000, rate: 0.15 }],
    aboveRate: 0.05,
    minFee: 1,
  },

  "All Other Categories": { kind: "flat", rate: 0.10, minFee: 1 },
};

const CATEGORY_LIST = Object.keys(REFERRAL_RULES);

/** -----------------------------
 *  UAE Fulfillment Fee Rules (your screenshots)
 *  Fee depends on:
 *   - size tier
 *   - weight bracket
 *   - selling price <= 25 OR > 25
 *  ----------------------------- */

type SizeTier = "Small envelope" | "Standard envelope" | "Large envelope" | "Standard parcel" | "Oversize";

type WeightRow = { maxKg: number; feeLE25: number; feeGT25: number };

const FULFILLMENT_TABLE: Record<SizeTier, WeightRow[]> = {
  "Small envelope": [{ maxKg: 0.1, feeLE25: 5.5, feeGT25: 7.5 }],

  "Standard envelope": [
    { maxKg: 0.1, feeLE25: 6.0, feeGT25: 8.0 },
    { maxKg: 0.2, feeLE25: 6.2, feeGT25: 8.2 },
    { maxKg: 0.5, feeLE25: 6.5, feeGT25: 8.5 },
  ],

  "Large envelope": [{ maxKg: 1.0, feeLE25: 7.0, feeGT25: 9.0 }],

  "Standard parcel": [
    { maxKg: 0.25, feeLE25: 7.2, feeGT25: 9.2 },
    { maxKg: 0.5, feeLE25: 7.5, feeGT25: 9.5 },
    { maxKg: 1.0, feeLE25: 8.5, feeGT25: 10.5 },
    { maxKg: 1.5, feeLE25: 9.0, feeGT25: 11.0 },
    { maxKg: 2.0, feeLE25: 9.5, feeGT25: 11.5 },
    { maxKg: 3.0, feeLE25: 10.5, feeGT25: 12.5 },
    { maxKg: 4.0, feeLE25: 11.5, feeGT25: 13.5 },
    { maxKg: 5.0, feeLE25: 12.5, feeGT25: 14.5 },
    { maxKg: 6.0, feeLE25: 13.5, feeGT25: 15.5 },
    { maxKg: 7.0, feeLE25: 14.5, feeGT25: 16.5 },
    { maxKg: 8.0, feeLE25: 15.5, feeGT25: 17.5 },
    { maxKg: 9.0, feeLE25: 16.5, feeGT25: 18.5 },
    { maxKg: 10.0, feeLE25: 17.5, feeGT25: 19.5 },
    { maxKg: 11.0, feeLE25: 18.5, feeGT25: 20.5 },
    { maxKg: 12.0, feeLE25: 19.5, feeGT25: 21.5 },
  ],

  "Oversize": [
    { maxKg: 1.0, feeLE25: 10.5, feeGT25: 12.5 },
    { maxKg: 2.0, feeLE25: 11.5, feeGT25: 13.5 },
    { maxKg: 3.0, feeLE25: 12.5, feeGT25: 14.5 },
    { maxKg: 4.0, feeLE25: 13.5, feeGT25: 15.5 },
    { maxKg: 5.0, feeLE25: 14.5, feeGT25: 16.5 },
    { maxKg: 6.0, feeLE25: 15.5, feeGT25: 17.5 },
    { maxKg: 7.0, feeLE25: 16.5, feeGT25: 18.5 },
    { maxKg: 8.0, feeLE25: 17.5, feeGT25: 19.5 },
    { maxKg: 9.0, feeLE25: 18.5, feeGT25: 20.5 },
    { maxKg: 10.0, feeLE25: 19.5, feeGT25: 21.5 },
    { maxKg: 15.0, feeLE25: 24.5, feeGT25: 26.5 },
    { maxKg: 20.0, feeLE25: 29.5, feeGT25: 31.5 },
    { maxKg: 25.0, feeLE25: 34.5, feeGT25: 36.5 },
    { maxKg: 30.0, feeLE25: 39.5, feeGT25: 41.5 },
  ],
};

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function formatMoney(amount: number, currency: Currency) {
  const v = round2(amount);
  return `${currency} ${v.toFixed(2)}`;
}

function calcReferralFee(category: string, price: number) {
  const rule = REFERRAL_RULES[category] ?? REFERRAL_RULES["All Other Categories"];

  let fee = 0;
  let effectiveRate = 0;

  if (rule.kind === "flat") {
    fee = price * rule.rate;
    effectiveRate = rule.rate;
    if (rule.minFee > 0) fee = Math.max(fee, rule.minFee);
    return { fee: round2(fee), effectiveRate, minFee: rule.minFee };
  }

  if (rule.kind === "threshold") {
    const rate = price <= rule.threshold ? rule.lowRate : rule.highRate;
    fee = price * rate;
    effectiveRate = rate;
    if (rule.minFee > 0) fee = Math.max(fee, rule.minFee);
    return { fee: round2(fee), effectiveRate, minFee: rule.minFee };
  }

  // tiered progressive
  let remaining = price;
  let prevCap = 0;
  let total = 0;

  for (const t of rule.tiers) {
    const cap = t.upTo;
    const slice = Math.max(0, Math.min(remaining, cap - prevCap));
    total += slice * t.rate;
    remaining -= slice;
    prevCap = cap;
    if (remaining <= 0) break;
  }
  if (remaining > 0) total += remaining * rule.aboveRate;

  fee = total;
  // effective rate shown as fee/price
  effectiveRate = price > 0 ? fee / price : 0;

  if (rule.minFee > 0) fee = Math.max(fee, rule.minFee);

  return { fee: round2(fee), effectiveRate, minFee: rule.minFee };
}

function parseWeightMax(text: string) {
  // expects like "≤ 0.5 kg" -> 0.5
  const m = text.match(/([\d.]+)/);
  return m ? Number(m[1]) : NaN;
}

function buildWeightOptions(tier: SizeTier): string[] {
  const rows = FULFILLMENT_TABLE[tier] || [];
  return rows.map((r) => `≤ ${r.maxKg} kg`);
}

function calcFulfillmentFee(tier: SizeTier, weightBracketLabel: string, price: number) {
  const rows = FULFILLMENT_TABLE[tier] || [];
  const maxKg = parseWeightMax(weightBracketLabel);

  // Oversize: if > 30kg (not in dropdown), add AED 1/kg after 30kg. (UI dropdown stops at 30)
  const row = rows.find((r) => r.maxKg === maxKg);

  if (!row) return 0;

  const isLE25 = price <= 25;
  return isLE25 ? row.feeLE25 : row.feeGT25;
}

/** -----------------------------
 *  UI
 *  ----------------------------- */
export default function FbaProfitCalculator() {
  const [currency, setCurrency] = useState<Currency>("AED");

  const [category, setCategory] = useState<string>("Health & Personal Care");
  const [sellingPrice, setSellingPrice] = useState<string>("32");

  const [sizeTier, setSizeTier] = useState<SizeTier>("Standard parcel");
  const weightOptions = useMemo(() => buildWeightOptions(sizeTier), [sizeTier]);
  const [weightBracket, setWeightBracket] = useState<string>(weightOptions[0] || "≤ 0.5 kg");

  // When tier changes, reset weight bracket to first available
  // (prevents blank fee)
  useMemo(() => {
    if (!weightOptions.includes(weightBracket)) {
      setWeightBracket(weightOptions[0] || "≤ 0.5 kg");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeTier]);

  const priceNum = useMemo(() => {
    const n = Number(sellingPrice);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }, [sellingPrice]);

  const referral = useMemo(() => calcReferralFee(category, priceNum), [category, priceNum]);
  const fulfillmentFee = useMemo(
    () => calcFulfillmentFee(sizeTier, weightBracket, priceNum),
    [sizeTier, weightBracket, priceNum]
  );

  const amazonFeesTotal = useMemo(() => referral.fee + fulfillmentFee, [referral.fee, fulfillmentFee]);
  const netProceeds = useMemo(() => Math.max(0, priceNum - amazonFeesTotal), [priceNum, amazonFeesTotal]);

  const margin = useMemo(() => (priceNum > 0 ? (netProceeds / priceNum) * 100 : 0), [netProceeds, priceNum]);

  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">FBA Profit Calculator</h1>
          <p className="text-sm text-slate-600 mt-1">
            UAE calculator (Referral fee + FBA Fulfillment fee). No VAT/PPC.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className={`px-3 py-1.5 rounded-full text-sm font-semibold border ${
              currency === "AED" ? "bg-black text-white border-black" : "bg-white text-slate-700"
            }`}
            onClick={() => setCurrency("AED")}
            type="button"
          >
            AED
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm font-semibold border ${
              currency === "SAR" ? "bg-black text-white border-black" : "bg-white text-slate-700"
            }`}
            onClick={() => setCurrency("SAR")}
            type="button"
          >
            SAR
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="rounded-2xl border p-5">
            <div className="font-bold text-slate-900 mb-4">Inputs</div>

            <label className="block text-sm font-semibold text-slate-800 mb-2">Choose Category</label>
            <select
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORY_LIST.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-slate-800 mb-2">Selling price (AED)</label>
              <input
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                inputMode="decimal"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                placeholder="e.g. 32"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Size tier</label>
                <select
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  value={sizeTier}
                  onChange={(e) => setSizeTier(e.target.value as SizeTier)}
                >
                  <option>Small envelope</option>
                  <option>Standard envelope</option>
                  <option>Large envelope</option>
                  <option>Standard parcel</option>
                  <option>Oversize</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">Weight bracket</label>
                <select
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  value={weightBracket}
                  onChange={(e) => setWeightBracket(e.target.value)}
                >
                  {weightOptions.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              Tip: If you don’t know dimensions, select the tier + weight bracket (same way people estimate using Amazon’s rules).
            </p>
          </div>

          {/* Results */}
          <div className="rounded-2xl border p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="font-bold text-slate-900">Results</div>
              <div className="text-xs text-slate-500">Live</div>
            </div>

            <div className="rounded-2xl border p-5 mb-4">
              <div className="text-sm text-slate-600">Net proceeds (per unit)</div>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">{formatMoney(netProceeds, currency)}</div>
              <div className="text-xs text-slate-500 mt-1">Margin: {round2(margin)}%</div>
            </div>

            <div className="space-y-3">
              <Row label="Selling price" value={formatMoney(priceNum, currency)} />
              <Row
                label="Referral fee (auto)"
                value={`${formatMoney(referral.fee, currency)} (${round2(referral.effectiveRate * 100)}%)`}
              />
              <Row
                label="Fulfillment fee (auto)"
                value={`${formatMoney(fulfillmentFee, currency)}  •  ${sizeTier}, ${weightBracket}`}
              />
              <Row label="Amazon fees (total)" value={formatMoney(amazonFeesTotal, currency)} bold />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-xl border px-4 py-3">
      <div className="text-sm text-slate-700">{label}</div>
      <div className={`text-sm ${bold ? "font-extrabold text-slate-900" : "font-semibold text-slate-900"}`}>
        {value}
      </div>
    </div>
  );
}
