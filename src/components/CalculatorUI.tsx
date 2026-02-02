"use client";

import { useMemo, useState } from "react";

type Currency = "AED" | "SAR";

type Tier =
  | "Small envelope"
  | "Standard envelope"
  | "Large envelope"
  | "Standard parcel"
  | "Oversize";

type PriceBand = "le25" | "gt25";

type Rule = {
  maxKg: number | "over";
  feeLe25: number; // selling price <= 25
  feeGt25: number; // selling price > 25
};

function round2(n: number) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

const TIERS: Tier[] = [
  "Small envelope",
  "Standard envelope",
  "Large envelope",
  "Standard parcel",
  "Oversize",
];

/**
 * Fulfillment fee rules based on the screenshots you shared:
 * - Two price bands: <= AED 25 and > AED 25
 * - Tier + weight bracket -> fee
 *
 * Notes:
 * - Oversize has "30kg+" with +AED 1 per kg (your screenshot).
 * - If Amazon updates fees later, you’ll update these numbers here.
 */
const FBA_RULES: Record<Tier, Rule[]> = {
  "Small envelope": [
    { maxKg: 0.1, feeLe25: 5.5, feeGt25: 7.5 },
  ],

  "Standard envelope": [
    { maxKg: 0.1, feeLe25: 6.0, feeGt25: 8.0 },
    { maxKg: 0.2, feeLe25: 6.2, feeGt25: 8.2 },
    { maxKg: 0.5, feeLe25: 6.5, feeGt25: 8.5 },
  ],

  "Large envelope": [
    { maxKg: 1.0, feeLe25: 7.0, feeGt25: 9.0 },
  ],

  "Standard parcel": [
    { maxKg: 0.25, feeLe25: 7.2, feeGt25: 9.2 },
    { maxKg: 0.5, feeLe25: 7.5, feeGt25: 9.5 },
    { maxKg: 1, feeLe25: 8.5, feeGt25: 10.5 },
    { maxKg: 1.5, feeLe25: 9.0, feeGt25: 11.0 },
    { maxKg: 2, feeLe25: 9.5, feeGt25: 11.5 },
    { maxKg: 3, feeLe25: 10.5, feeGt25: 12.5 },
    { maxKg: 4, feeLe25: 11.5, feeGt25: 13.5 },
    { maxKg: 5, feeLe25: 12.5, feeGt25: 14.5 },
    { maxKg: 6, feeLe25: 13.5, feeGt25: 15.5 },
    { maxKg: 7, feeLe25: 14.5, feeGt25: 16.5 },
    { maxKg: 8, feeLe25: 15.5, feeGt25: 17.5 },
    { maxKg: 9, feeLe25: 16.5, feeGt25: 18.5 },
    { maxKg: 10, feeLe25: 17.5, feeGt25: 19.5 },
    { maxKg: 11, feeLe25: 18.5, feeGt25: 20.5 },
    { maxKg: 12, feeLe25: 19.5, feeGt25: 21.5 },
  ],

  "Oversize": [
    { maxKg: 1, feeLe25: 10.5, feeGt25: 12.5 },
    { maxKg: 2, feeLe25: 11.5, feeGt25: 13.5 },
    { maxKg: 3, feeLe25: 12.5, feeGt25: 14.5 },
    { maxKg: 4, feeLe25: 13.5, feeGt25: 15.5 },
    { maxKg: 5, feeLe25: 14.5, feeGt25: 16.5 },
    { maxKg: 6, feeLe25: 15.5, feeGt25: 17.5 },
    { maxKg: 7, feeLe25: 16.5, feeGt25: 18.5 },
    { maxKg: 8, feeLe25: 17.5, feeGt25: 19.5 },
    { maxKg: 9, feeLe25: 18.5, feeGt25: 20.5 },
    { maxKg: 10, feeLe25: 19.5, feeGt25: 21.5 },
    { maxKg: 15, feeLe25: 24.5, feeGt25: 26.5 },
    { maxKg: 20, feeLe25: 29.5, feeGt25: 31.5 },
    { maxKg: 25, feeLe25: 34.5, feeGt25: 36.5 },
    { maxKg: 30, feeLe25: 39.5, feeGt25: 41.5 },
    // 30kg+ handled separately: +AED 1 per kg over 30
    { maxKg: "over", feeLe25: 39.5, feeGt25: 41.5 },
  ],
};

function getPriceBand(sellingPrice: number): PriceBand {
  return sellingPrice <= 25 ? "le25" : "gt25";
}

function formatTierShort(tier: Tier) {
  return tier;
}

function weightOptionsForTier(tier: Tier): { label: string; value: string }[] {
  const rules = FBA_RULES[tier];
  const opts: { label: string; value: string }[] = [];

  for (const r of rules) {
    if (r.maxKg === "over") {
      opts.push({ label: "30kg+", value: "over" });
    } else {
      opts.push({ label: `≤ ${r.maxKg} kg`, value: String(r.maxKg) });
    }
  }

  return opts;
}

/**
 * Returns fulfillment fee.
 * - For most tiers: choose bracket by selected maxKg
 * - For Oversize "30kg+": base fee at 30kg + extra 1 AED per kg over 30
 */
function calcFulfillmentFee(params: {
  tier: Tier;
  selectedMaxKg: number | "over";
  actualOverKg?: number; // only used when selectedMaxKg = "over"
  sellingPrice: number;
}): { fee: number; note?: string } {
  const { tier, selectedMaxKg, actualOverKg, sellingPrice } = params;
  const band = getPriceBand(sellingPrice);
  const rules = FBA_RULES[tier];

  if (selectedMaxKg === "over") {
    // Only valid for Oversize according to your screenshot.
    const baseRule = rules.find((r) => r.maxKg === 30);
    const overRule = rules.find((r) => r.maxKg === "over");
    const base = baseRule ? (band === "le25" ? baseRule.feeLe25 : baseRule.feeGt25) : 0;
    const start = overRule ? (band === "le25" ? overRule.feeLe25 : overRule.feeGt25) : base;

    const w = Number.isFinite(actualOverKg) ? (actualOverKg as number) : 30;
    const extra = Math.max(0, Math.ceil(w - 30)); // +AED 1 per kg (rounded up)
    return { fee: round2(start + extra), note: "Oversize 30kg+ includes +AED 1/kg over 30kg" };
  }

  // Standard bracket selection
  const rule = rules.find((r) => r.maxKg !== "over" && r.maxKg === selectedMaxKg);
  if (!rule) return { fee: 0 };

  const fee = band === "le25" ? rule.feeLe25 : rule.feeGt25;
  return { fee: round2(fee) };
}

export default function CalculatorUI() {
  const [currency, setCurrency] = useState<Currency>("AED");

  // keep typing smooth: store as string, parse when calculating
  const [sellingPriceStr, setSellingPriceStr] = useState<string>("32");

  // Referral fee category selection (already working in your UI)
  const [category, setCategory] = useState<string>("Health & Personal Care");

  // Tier + weight bracket dropdowns (NEW, replaces weight/length/width/height)
  const [tier, setTier] = useState<Tier>("Standard parcel");
  const [selectedMaxKgStr, setSelectedMaxKgStr] = useState<string>("0.5"); // dropdown value
  const [actualOverKgStr, setActualOverKgStr] = useState<string>("31"); // only used when 30kg+

  // === Referral fee logic (your UAE referral fee table)
  // Keep simple: map category -> percent + minimum AED 1.0 (from your list).
  // Categories with special rules are handled here as well.
  const referralConfig = useMemo(() => {
    const price = Number(sellingPriceStr) || 0;

    const base: Record<string, { pct: number; min: number }> = {
      Apparel: { pct: 15, min: 1.0 },
      Automotive: { pct: 12, min: 1.0 },
      Books: { pct: 15, min: 1.0 },
      Camera: { pct: 8, min: 1.0 },
      "Consumer Electronics": { pct: 7, min: 1.0 },
      "Gift Cards": { pct: 5, min: 1.0 },
      Home: { pct: 15, min: 1.0 },
      "Home Entertainment": { pct: 5, min: 1.0 },
      Kitchen: { pct: 15, min: 1.0 },
      Luggage: { pct: 15, min: 1.0 },
      "Major appliances": { pct: 6, min: 1.0 },
      "Mobile Phones": { pct: 5, min: 1.0 },
      Music: { pct: 10, min: 1.0 },
      "Music instruments": { pct: 15, min: 1.0 },
      "Office products": { pct: 14, min: 1.0 },
      Outdoor: { pct: 15, min: 1.0 },
      "PC store": { pct: 6, min: 1.0 },
      Perfumes: { pct: 15, min: 1.0 },
      Shoes: { pct: 15, min: 1.0 },
      "Small Appliances": { pct: 13, min: 1.0 },
      Software: { pct: 10, min: 1.0 },
      Sports: { pct: 14, min: 1.0 },
      "Stamps collectibles": { pct: 10, min: 1.0 },
      "Tools & Home Improvement": { pct: 15, min: 1.0 },
      Toys: { pct: 14, min: 1.0 },
      "Video & DVD": { pct: 10, min: 1.0 },
      "Video Game Consoles": { pct: 6, min: 1.0 },
      "Video Games": { pct: 15, min: 1.0 },
      "All Other Categories": { pct: 10, min: 1.0 },

      // Using your table: many categories are “8% <= 50 AED else 15%”
      Baby: { pct: price <= 50 ? 8 : 15, min: 1.0 },
      Beauty: { pct: price <= 50 ? 8 : 15, min: 1.0 },
      "Health & Personal Care": { pct: price <= 50 ? 8 : 15, min: 1.0 },
      "Personal care Appliances": { pct: price <= 50 ? 8 : 15, min: 1.0 },
      "Pet Products": { pct: price <= 50 ? 8 : 15, min: 0 }, // your list shows "-" min in some
      Grocery: { pct: price <= 50 ? 5 : 11, min: 0 },

      // Complex tiers from your table (we keep basic correct behavior)
      "Electronics Accessories": { pct: price <= 250 ? 15 : 8, min: 1.0 },
      Furniture: { pct: price <= 750 ? 15 : 10, min: 1.0 },
      Jewelry: { pct: price <= 1000 ? 16 : 5, min: 1.0 },
      Watches: { pct: price <= 5000 ? 15 : 5, min: 1.0 },
      "Business, Industrial, and Scientific Supplies": { pct: 11, min: 0 },
    };

    const cfg = base[category] ?? base["All Other Categories"];
    return cfg;
  }, [category, sellingPriceStr]);

  const computed = useMemo(() => {
    const sellingPrice = Number(sellingPriceStr) || 0;

    // Referral fee (auto)
    const referralFeeRaw = (sellingPrice * referralConfig.pct) / 100;
    const referralFee = Math.max(referralConfig.min, referralFeeRaw);

    // Fulfillment fee (auto by tier+weight bracket)
    const selectedMaxKg: number | "over" =
      selectedMaxKgStr === "over" ? "over" : Number(selectedMaxKgStr);

    const actualOverKg =
      selectedMaxKg === "over" ? Number(actualOverKgStr || "0") : undefined;

    const ff = calcFulfillmentFee({
      tier,
      selectedMaxKg,
      actualOverKg,
      sellingPrice,
    });

    const fulfillmentFee = ff.fee;

    // Total (simple version like Amazon panel: selling price - amazon fees)
    const amazonFeesTotal = referralFee + fulfillmentFee;

    const netProfit = sellingPrice - amazonFeesTotal;
    const margin = sellingPrice > 0 ? (netProfit / sellingPrice) * 100 : 0;

    return {
      sellingPrice: round2(sellingPrice),
      referralFee: round2(referralFee),
      referralPct: referralConfig.pct,
      fulfillmentFee: round2(fulfillmentFee),
      fulfillmentNote: ff.note,
      amazonFeesTotal: round2(amazonFeesTotal),
      netProfit: round2(netProfit),
      margin: round2(margin),
    };
  }, [sellingPriceStr, referralConfig, tier, selectedMaxKgStr, actualOverKgStr]);

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

  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            FBA Profit Calculator
          </h1>
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

          <div className="mt-4 space-y-4">
            {/* Category */}
            <label className="block">
              <div className="mb-1 text-sm font-medium text-slate-700">Choose Category</div>
              <select
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-black/10"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {/* Keep list clean: most used first */}
                <option>Health & Personal Care</option>
                <option>Kitchen</option>
                <option>Beauty</option>
                <option>Baby</option>
                <option>Grocery</option>
                <option>Home</option>
                <option>Office products</option>
                <option>Tools & Home Improvement</option>
                <option>Sports</option>
                <option>Consumer Electronics</option>
                <option>Electronics Accessories</option>
                <option>Furniture</option>
                <option>Jewelry</option>
                <option>Watches</option>
                <option>Apparel</option>
                <option>Automotive</option>
                <option>Mobile Phones</option>
                <option>Perfumes</option>
                <option>Small Appliances</option>
                <option>All Other Categories</option>
              </select>
            </label>

            {/* Selling price */}
            <label className="block">
              <div className="mb-1 text-sm font-medium text-slate-700">
                Selling price ({currency})
              </div>
              <input
                inputMode="decimal"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-black/10"
                value={sellingPriceStr}
                onChange={(e) => setSellingPriceStr(e.target.value)}
                placeholder="e.g. 32"
              />
            </label>

            {/* Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <div className="mb-1 text-sm font-medium text-slate-700">Size tier</div>
                <select
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-black/10"
                  value={tier}
                  onChange={(e) => {
                    const next = e.target.value as Tier;
                    setTier(next);

                    // reset weight option to first available for that tier
                    const opts = weightOptionsForTier(next);
                    setSelectedMaxKgStr(opts[0]?.value ?? "0.5");
                  }}
                >
                  {TIERS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <div className="mb-1 text-sm font-medium text-slate-700">Weight bracket</div>
                <select
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-black/10"
                  value={selectedMaxKgStr}
                  onChange={(e) => setSelectedMaxKgStr(e.target.value)}
                >
                  {weightOptionsForTier(tier).map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Oversize 30kg+ optional actual weight */}
            {tier === "Oversize" && selectedMaxKgStr === "over" ? (
              <label className="block">
                <div className="mb-1 text-sm font-medium text-slate-700">
                  If 30kg+, enter actual weight (kg)
                </div>
                <input
                  inputMode="decimal"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-black/10"
                  value={actualOverKgStr}
                  onChange={(e) => setActualOverKgStr(e.target.value)}
                  placeholder="e.g. 31"
                />
                <div className="mt-1 text-xs text-slate-500">
                  Amazon adds +AED 1 per kg over 30kg.
                </div>
              </label>
            ) : null}
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
              Margin: {computed.margin.toFixed(2)}%
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Row label="Selling price" value={`${currency} ${computed.sellingPrice.toFixed(2)}`} />

            <Row
              label="Referral fee (auto)"
              value={`${currency} ${computed.referralFee.toFixed(2)} (${computed.referralPct.toFixed(0)}%)`}
            />

            <Row
              label="Fulfillment fee (auto)"
              value={`${currency} ${computed.fulfillmentFee.toFixed(2)}`}
              sub={`Tier: ${formatTierShort(tier)}`}
            />

            <Row
              label="Amazon fees (total)"
              value={`${currency} ${computed.amazonFeesTotal.toFixed(2)}`}
              bold
            />
          </div>

          {computed.fulfillmentNote ? (
            <div className="mt-3 text-xs text-slate-500">{computed.fulfillmentNote}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  bold,
  sub,
}: {
  label: string;
  value: string;
  bold?: boolean;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-slate-600">{label}</span>
        <span className={bold ? "text-sm font-bold text-slate-900" : "text-sm font-semibold text-slate-900"}>
          {value}
        </span>
      </div>
      {sub ? <div className="mt-1 text-xs text-slate-500">{sub}</div> : null}
    </div>
  );
}
