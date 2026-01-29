"use client";

import { useEffect, useMemo, useState } from "react";

type Marketplace = "UAE" | "KSA";

type CategoryKey =
  | "general"
  | "electronics"
  | "beauty"
  | "home"
  | "grocery"
  | "fashion"
  | "toys";

type SizeTier =
  | "small_standard"
  | "large_standard"
  | "small_oversize"
  | "medium_oversize"
  | "large_oversize";

const STORAGE_KEY = "fba_calc_amz_v2";

/** Referral fee presets (editable by user) */
const CATEGORY_PRESETS: Record<CategoryKey, { label: string; referralPct: number }> = {
  general: { label: "General (default)", referralPct: 15 },
  electronics: { label: "Electronics", referralPct: 8 },
  beauty: { label: "Beauty & Personal Care", referralPct: 15 },
  home: { label: "Home & Kitchen", referralPct: 15 },
  grocery: { label: "Grocery", referralPct: 12 },
  fashion: { label: "Fashion / Apparel", referralPct: 17 },
  toys: { label: "Toys & Games", referralPct: 15 },
};

/** Simple FBA fulfillment fee presets (estimates) */
const FBA_FEE_AED: Record<SizeTier, { label: string; fee: number }> = {
  small_standard: { label: "Small Standard", fee: 12.0 },
  large_standard: { label: "Large Standard", fee: 16.0 },
  small_oversize: { label: "Small Oversize", fee: 22.0 },
  medium_oversize: { label: "Medium Oversize", fee: 30.0 },
  large_oversize: { label: "Large Oversize", fee: 45.0 },
};

function money(n: number, currency: string) {
  const v = Number.isFinite(n) ? n : 0;
  return `${currency} ${v.toFixed(2)}`;
}

function pct(n: number) {
  const v = Number.isFinite(n) ? n : 0;
  return `${v.toFixed(2)}%`;
}

function clamp0(n: number) {
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-lg font-extrabold text-[var(--ink)]">{children}</div>;
}

function Field({
  label,
  hint,
  prefix,
  value,
  onChange,
  disabled,
}: {
  label: string;
  hint?: string;
  prefix?: string;
  value: number;
  onChange: (v: number) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-[var(--ink)]">{label}</label>
      {hint ? <div className="mt-1 text-xs text-zinc-500">{hint}</div> : null}

      <div className="mt-2 flex items-center gap-2">
        {prefix ? <span className="text-xs font-extrabold text-zinc-500">{prefix}</span> : null}
        <input
          className="input-premium"
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

function Select({
  label,
  hint,
  value,
  onChange,
  children,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-[var(--ink)]">{label}</label>
      {hint ? <div className="mt-1 text-xs text-zinc-500">{hint}</div> : null}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[var(--ink)] outline-none transition focus:border-[rgba(255,153,0,0.65)]"
      >
        {children}
      </select>
    </div>
  );
}

function MiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white px-4 py-3">
      <div className="text-sm font-semibold text-zinc-600">{label}</div>
      <div className="text-sm font-extrabold text-[var(--ink)]">{value}</div>
    </div>
  );
}

export default function FbaCalculator() {
  const [market, setMarket] = useState<Marketplace>("UAE");
  const currency = market === "UAE" ? "AED" : "SAR";

  // Presets
  const [category, setCategory] = useState<CategoryKey>("general");
  const [sizeTier, setSizeTier] = useState<SizeTier>("large_standard");

  // Inputs
  const [sellPrice, setSellPrice] = useState(0);
  const [referralPct, setReferralPct] = useState(CATEGORY_PRESETS.general.referralPct);
  const [fbaFee, setFbaFee] = useState(FBA_FEE_AED.large_standard.fee);
  const [storageFee, setStorageFee] = useState(0);

  const [vatEnabled, setVatEnabled] = useState(true);
  const [vatPct, setVatPct] = useState(5);

  const [productCost, setProductCost] = useState(0);
  const [inboundShipping, setInboundShipping] = useState(0);
  const [customs, setCustoms] = useState(0);
  const [packaging, setPackaging] = useState(0);
  const [otherCost, setOtherCost] = useState(0);

  const [ppcEnabled, setPpcEnabled] = useState(false);
  const [ppcPct, setPpcPct] = useState(10);

  // Auto apply category referral preset
  useEffect(() => {
    setReferralPct(CATEGORY_PRESETS[category].referralPct);
  }, [category]);

  // Auto apply size tier FBA fee preset (+ small multiplier for KSA)
  useEffect(() => {
    const baseAed = FBA_FEE_AED[sizeTier].fee;
    const fee = market === "UAE" ? baseAed : baseAed * 1.05;
    setFbaFee(Number(fee.toFixed(2)));
  }, [sizeTier, market]);

  // Market defaults
  useEffect(() => {
    setVatPct(market === "UAE" ? 5 : 15);
  }, [market]);

  // Load saved
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);

      if (s.market === "UAE" || s.market === "KSA") setMarket(s.market);
      if (CATEGORY_PRESETS[s.category as CategoryKey]) setCategory(s.category);
      if (FBA_FEE_AED[s.sizeTier as SizeTier]) setSizeTier(s.sizeTier);

      setSellPrice(s.sellPrice ?? 0);
      setReferralPct(s.referralPct ?? CATEGORY_PRESETS.general.referralPct);
      setFbaFee(s.fbaFee ?? FBA_FEE_AED.large_standard.fee);
      setStorageFee(s.storageFee ?? 0);

      setVatEnabled(s.vatEnabled ?? true);
      setVatPct(s.vatPct ?? (s.market === "KSA" ? 15 : 5));

      setProductCost(s.productCost ?? 0);
      setInboundShipping(s.inboundShipping ?? 0);
      setCustoms(s.customs ?? 0);
      setPackaging(s.packaging ?? 0);
      setOtherCost(s.otherCost ?? 0);

      setPpcEnabled(s.ppcEnabled ?? false);
      setPpcPct(s.ppcPct ?? 10);
    } catch {
      // ignore
    }
  }, []);

  const saveNow = () => {
    const payload = {
      market,
      category,
      sizeTier,
      sellPrice,
      referralPct,
      fbaFee,
      storageFee,
      vatEnabled,
      vatPct,
      productCost,
      inboundShipping,
      customs,
      packaging,
      otherCost,
      ppcEnabled,
      ppcPct,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    alert("Saved on this device ✅");
  };

  const clearAll = () => {
    setSellPrice(0);
    setStorageFee(0);

    setProductCost(0);
    setInboundShipping(0);
    setCustoms(0);
    setPackaging(0);
    setOtherCost(0);

    setVatEnabled(true);
    setVatPct(market === "UAE" ? 5 : 15);

    setPpcEnabled(false);
    setPpcPct(10);
  };

  const loadExample = () => {
    if (market === "UAE") {
      setCategory("general");
      setSizeTier("large_standard");
      setSellPrice(79);
      setStorageFee(1.2);
      setVatEnabled(true);
      setVatPct(5);
      setProductCost(22);
      setInboundShipping(4.5);
      setCustoms(2);
      setPackaging(0.8);
      setOtherCost(1.5);
      setPpcEnabled(true);
      setPpcPct(12);
    } else {
      setCategory("general");
      setSizeTier("large_standard");
      setSellPrice(89);
      setStorageFee(1.4);
      setVatEnabled(true);
      setVatPct(15);
      setProductCost(24);
      setInboundShipping(5);
      setCustoms(3);
      setPackaging(1);
      setOtherCost(2);
      setPpcEnabled(true);
      setPpcPct(12);
    }
  };

  const results = useMemo(() => {
    const revenue = clamp0(sellPrice);

    const referralFee = revenue * (clamp0(referralPct) / 100);
    const amazonFees = referralFee + clamp0(fbaFee) + clamp0(storageFee);

    const vat = vatEnabled ? revenue * (clamp0(vatPct) / 100) : 0;
    const ppc = ppcEnabled ? revenue * (clamp0(ppcPct) / 100) : 0;

    const costs =
      amazonFees +
      vat +
      ppc +
      clamp0(productCost) +
      clamp0(inboundShipping) +
      clamp0(customs) +
      clamp0(packaging) +
      clamp0(otherCost);

    const profit = revenue - costs;

    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
    const roi = productCost > 0 ? (profit / productCost) * 100 : 0;

    const breakEvenPpcPct =
      revenue > 0 ? ((revenue - (costs - ppc)) / revenue) * 100 : 0;

    return {
      revenue,
      referralFee,
      amazonFees,
      vat,
      ppc,
      costs,
      profit,
      margin,
      roi,
      breakEvenPpcPct,
    };
  }, [
    sellPrice,
    referralPct,
    fbaFee,
    storageFee,
    vatEnabled,
    vatPct,
    productCost,
    inboundShipping,
    customs,
    packaging,
    otherCost,
    ppcEnabled,
    ppcPct,
  ]);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* LEFT */}
      <div className="space-y-6 lg:col-span-2">
        {/* Top toolbar */}
        <div className="card-premium">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <SectionTitle>Quick Setup</SectionTitle>
              <div className="mt-1 text-sm text-zinc-600">
                Use presets, then adjust numbers. Save your settings on this device.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setMarket("UAE")}
                className={`rounded-xl px-4 py-2 text-sm font-extrabold transition ${
                  market === "UAE"
                    ? "bg-[var(--ink)] text-white"
                    : "border border-black/10 bg-white text-[var(--ink)] hover:bg-black/[0.03]"
                }`}
              >
                UAE
              </button>
              <button
                type="button"
                onClick={() => setMarket("KSA")}
                className={`rounded-xl px-4 py-2 text-sm font-extrabold transition ${
                  market === "KSA"
                    ? "bg-[var(--ink)] text-white"
                    : "border border-black/10 bg-white text-[var(--ink)] hover:bg-black/[0.03]"
                }`}
              >
                KSA
              </button>

              <button type="button" onClick={loadExample} className="btn-soft">
                Load Example
              </button>

              <button type="button" onClick={saveNow} className="btn-accent">
                Save
              </button>

              <button type="button" onClick={clearAll} className="btn-soft">
                Clear
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Select
              label="Category preset"
              hint="Auto-sets referral fee % (editable)."
              value={category}
              onChange={(v) => setCategory(v as CategoryKey)}
            >
              {Object.entries(CATEGORY_PRESETS).map(([k, item]) => (
                <option key={k} value={k}>
                  {item.label} — {item.referralPct}%
                </option>
              ))}
            </Select>

            <Select
              label="Size tier preset"
              hint="Auto-sets FBA fulfillment fee (editable)."
              value={sizeTier}
              onChange={(v) => setSizeTier(v as SizeTier)}
            >
              {Object.entries(FBA_FEE_AED).map(([k, item]) => (
                <option key={k} value={k}>
                  {item.label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Revenue */}
        <div className="card-premium">
          <SectionTitle>Revenue</SectionTitle>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field
              label="Selling price"
              hint="Your listing price (customer pays)."
              prefix={currency}
              value={sellPrice}
              onChange={setSellPrice}
            />
            <Field
              label="Referral fee %"
              hint="Auto-set by category (you can edit)."
              prefix="%"
              value={referralPct}
              onChange={setReferralPct}
            />
          </div>
        </div>

        {/* Amazon Fees */}
        <div className="card-premium">
          <SectionTitle>Amazon Fees</SectionTitle>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field
              label="FBA fulfillment fee"
              hint="Auto-set by size tier (you can edit)."
              prefix={currency}
              value={fbaFee}
              onChange={setFbaFee}
            />
            <Field
              label="Storage fee"
              hint="Monthly storage estimate per unit."
              prefix={currency}
              value={storageFee}
              onChange={setStorageFee}
            />
          </div>
        </div>

        {/* Costs */}
        <div className="card-premium">
          <SectionTitle>Your Costs</SectionTitle>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Field label="Product cost" hint="Supplier cost per unit." prefix={currency} value={productCost} onChange={setProductCost} />
            <Field label="Inbound shipping" hint="To Amazon prep/warehouse." prefix={currency} value={inboundShipping} onChange={setInboundShipping} />
            <Field label="Customs / duties" hint="Import duties per unit." prefix={currency} value={customs} onChange={setCustoms} />
            <Field label="Packaging / prep" hint="Labeling, polybag, etc." prefix={currency} value={packaging} onChange={setPackaging} />
            <Field label="Other costs" hint="Returns, coupons, misc." prefix={currency} value={otherCost} onChange={setOtherCost} />
          </div>
        </div>

        {/* VAT + PPC */}
        <div className="card-premium">
          <SectionTitle>VAT & Ads</SectionTitle>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-extrabold text-[var(--ink)]">VAT</div>
                  <div className="mt-1 text-xs text-zinc-500">Apply VAT % on selling price.</div>
                </div>
                <label className="flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                  <input
                    type="checkbox"
                    checked={vatEnabled}
                    onChange={(e) => setVatEnabled(e.target.checked)}
                  />
                  Enabled
                </label>
              </div>

              <div className="mt-4">
                <Field
                  label="VAT %"
                  hint="UAE 5%, KSA 15% (change if needed)."
                  prefix="%"
                  value={vatPct}
                  onChange={setVatPct}
                  disabled={!vatEnabled}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-extrabold text-[var(--ink)]">PPC (Ads)</div>
                  <div className="mt-1 text-xs text-zinc-500">Estimate ads as % of price.</div>
                </div>
                <label className="flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                  <input
                    type="checkbox"
                    checked={ppcEnabled}
                    onChange={(e) => setPpcEnabled(e.target.checked)}
                  />
                  Enabled
                </label>
              </div>

              <div className="mt-4">
                <Field
                  label="PPC %"
                  hint="Try 8%–18% (depends on niche)."
                  prefix="%"
                  value={ppcPct}
                  onChange={setPpcPct}
                  disabled={!ppcEnabled}
                />
              </div>
            </div>
          </div>

          <div className="mt-3 text-xs text-zinc-500">
            Break-even PPC% is an estimate assuming other inputs remain constant.
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-1">
        <div className="card-premium sticky top-24">
          <div className="flex items-center justify-between">
            <SectionTitle>Results</SectionTitle>
            <span className="badge-accent">Live</span>
          </div>

          <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5">
            <div className="text-xs font-semibold text-zinc-500">Net Profit</div>
            <div className={`mt-1 text-3xl font-extrabold ${results.profit >= 0 ? "text-[var(--ink)]" : "text-red-600"}`}>
              {money(results.profit, currency)}
            </div>
            <div className="mt-2 text-sm text-zinc-600">
              Margin: {pct(results.margin)} • ROI: {pct(results.roi)}
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <MiniRow label="Revenue" value={money(results.revenue, currency)} />
            <MiniRow label="Referral fee" value={money(results.referralFee, currency)} />
            <MiniRow label="Amazon fees (total)" value={money(results.amazonFees, currency)} />
            <MiniRow label="VAT estimate" value={money(results.vat, currency)} />
            <MiniRow label="PPC estimate" value={money(results.ppc, currency)} />
            <MiniRow label="Total costs" value={money(results.costs, currency)} />
          </div>

          <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5">
            <div className="text-xs font-semibold text-zinc-500">Break-even PPC</div>
            <div className="mt-1 text-xl font-extrabold text-[var(--ink)]">
              {pct(results.breakEvenPpcPct)}
            </div>
            <div className="mt-2 text-xs text-zinc-500">
              Approx. maximum ad spend % before profit becomes zero.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
