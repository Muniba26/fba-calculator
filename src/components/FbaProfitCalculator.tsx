"use client";

import { useEffect, useMemo, useState } from "react";

type Market = "AED" | "SAR";

type Tier =
  | "Small envelope"
  | "Standard envelope"
  | "Large envelope"
  | "Standard parcel"
  | "Oversize";

type Category =
  | "Apparel"
  | "Automotive"
  | "Baby"
  | "Beauty"
  | "Books"
  | "Camera"
  | "Consumer Electronics"
  | "Electronics Accessories"
  | "Furniture"
  | "Gift Cards"
  | "Grocery"
  | "Headphones & Portable audio"
  | "Health & Personal Care"
  | "Home"
  | "Home Entertainment"
  | "Jewelry"
  | "Kitchen"
  | "Luggage"
  | "Major appliances"
  | "Mobiles & Tablets"
  | "Music"
  | "Music instruments"
  | "Office products"
  | "Outdoor"
  | "Perfumes"
  | "Personal Care Appliances"
  | "Personal Computers"
  | "Pet Products"
  | "Shoes"
  | "Small Appliances"
  | "Software"
  | "Sports"
  | "Stamps collectibles"
  | "Tools & Home Improvement"
  | "Toys"
  | "Video & DVD"
  | "Video Game Consoles"
  | "Video Games"
  | "Watches"
  | "Wireless"
  | "All Other Categories";

const ALL_CATEGORIES: Category[] = [
  "Apparel",
  "Automotive",
  "Baby",
  "Beauty",
  "Books",
  "Camera",
  "Consumer Electronics",
  "Electronics Accessories",
  "Furniture",
  "Gift Cards",
  "Grocery",
  "Headphones & Portable audio",
  "Health & Personal Care",
  "Home",
  "Home Entertainment",
  "Jewelry",
  "Kitchen",
  "Luggage",
  "Major appliances",
  "Mobiles & Tablets",
  "Music",
  "Music instruments",
  "Office products",
  "Outdoor",
  "Perfumes",
  "Personal Care Appliances",
  "Personal Computers",
  "Pet Products",
  "Shoes",
  "Small Appliances",
  "Software",
  "Sports",
  "Stamps collectibles",
  "Tools & Home Improvement",
  "Toys",
  "Video & DVD",
  "Video Game Consoles",
  "Video Games",
  "Watches",
  "Wireless",
  "All Other Categories",
];

const TIER_OPTIONS: Tier[] = [
  "Small envelope",
  "Standard envelope",
  "Large envelope",
  "Standard parcel",
  "Oversize",
];

const WEIGHT_OPTIONS: Record<Tier, string[]> = {
  "Small envelope": ["≤ 0.1 kg"],
  "Standard envelope": ["≤ 0.1 kg", "≤ 0.2 kg", "≤ 0.5 kg"],
  "Large envelope": ["≤ 1 kg"],
  "Standard parcel": [
    "≤ 0.25 kg",
    "≤ 0.5 kg",
    "≤ 1 kg",
    "≤ 1.5 kg",
    "≤ 2 kg",
    "≤ 3 kg",
    "≤ 4 kg",
    "≤ 5 kg",
    "≤ 6 kg",
    "≤ 7 kg",
    "≤ 8 kg",
    "≤ 9 kg",
    "≤ 10 kg",
    "≤ 11 kg",
    "≤ 12 kg",
  ],
  Oversize: [
    "≤ 1 kg",
    "≤ 2 kg",
    "≤ 3 kg",
    "≤ 4 kg",
    "≤ 5 kg",
    "≤ 6 kg",
    "≤ 7 kg",
    "≤ 8 kg",
    "≤ 9 kg",
    "≤ 10 kg",
    "≤ 15 kg",
    "≤ 20 kg",
    "≤ 25 kg",
    "≤ 30 kg",
  ],
};

const SAUDI_FBA_LOW: Record<Tier, Record<string, number>> = {
  "Small envelope": {
    "≤ 0.1 kg": 5.5,
  },
  "Standard envelope": {
    "≤ 0.1 kg": 6.0,
    "≤ 0.2 kg": 6.2,
    "≤ 0.5 kg": 6.5,
  },
  "Large envelope": {
    "≤ 1 kg": 7.0,
  },
  "Standard parcel": {
    "≤ 0.25 kg": 7.2,
    "≤ 0.5 kg": 7.5,
    "≤ 1 kg": 8.0,
    "≤ 1.5 kg": 8.5,
    "≤ 2 kg": 9.0,
    "≤ 3 kg": 10.0,
    "≤ 4 kg": 11.0,
    "≤ 5 kg": 12.0,
    "≤ 6 kg": 13.0,
    "≤ 7 kg": 14.0,
    "≤ 8 kg": 15.0,
    "≤ 9 kg": 16.0,
    "≤ 10 kg": 17.0,
    "≤ 11 kg": 18.0,
    "≤ 12 kg": 19.0,
  },
  Oversize: {
    "≤ 1 kg": 10.0,
    "≤ 2 kg": 11.0,
    "≤ 3 kg": 12.0,
    "≤ 4 kg": 13.0,
    "≤ 5 kg": 14.0,
    "≤ 6 kg": 15.0,
    "≤ 7 kg": 16.0,
    "≤ 8 kg": 17.0,
    "≤ 9 kg": 18.0,
    "≤ 10 kg": 19.0,
    "≤ 15 kg": 24.0,
    "≤ 20 kg": 29.0,
    "≤ 25 kg": 34.0,
    "≤ 30 kg": 39.0,
  },
};

const SAUDI_FBA_HIGH: Record<Tier, Record<string, number>> = {
  "Small envelope": {
    "≤ 0.1 kg": 7.5,
  },
  "Standard envelope": {
    "≤ 0.1 kg": 8.0,
    "≤ 0.2 kg": 8.2,
    "≤ 0.5 kg": 8.5,
  },
  "Large envelope": {
    "≤ 1 kg": 9.0,
  },
  "Standard parcel": {
    "≤ 0.25 kg": 9.2,
    "≤ 0.5 kg": 9.5,
    "≤ 1 kg": 10.0,
    "≤ 1.5 kg": 11.5,
    "≤ 2 kg": 12.0,
    "≤ 3 kg": 13.0,
    "≤ 4 kg": 14.0,
    "≤ 5 kg": 15.0,
    "≤ 6 kg": 16.0,
    "≤ 7 kg": 17.0,
    "≤ 8 kg": 18.0,
    "≤ 9 kg": 19.0,
    "≤ 10 kg": 20.0,
    "≤ 11 kg": 21.0,
    "≤ 12 kg": 22.0,
  },
  Oversize: {
    "≤ 1 kg": 14.0,
    "≤ 2 kg": 15.0,
    "≤ 3 kg": 16.0,
    "≤ 4 kg": 17.0,
    "≤ 5 kg": 18.0,
    "≤ 6 kg": 19.0,
    "≤ 7 kg": 20.0,
    "≤ 8 kg": 21.0,
    "≤ 9 kg": 22.0,
    "≤ 10 kg": 23.0,
    "≤ 15 kg": 28.0,
    "≤ 20 kg": 33.0,
    "≤ 25 kg": 38.0,
    "≤ 30 kg": 43.0,
  },
};

const UAE_FBA: Record<Tier, Record<string, number>> = {
  "Small envelope": {
    "≤ 0.1 kg": 7.5,
  },
  "Standard envelope": {
    "≤ 0.1 kg": 8.0,
    "≤ 0.2 kg": 8.2,
    "≤ 0.5 kg": 8.5,
  },
  "Large envelope": {
    "≤ 1 kg": 9.0,
  },
  "Standard parcel": {
    "≤ 0.25 kg": 9.2,
    "≤ 0.5 kg": 9.5,
    "≤ 1 kg": 10.0,
    "≤ 1.5 kg": 11.5,
    "≤ 2 kg": 12.0,
    "≤ 3 kg": 13.0,
    "≤ 4 kg": 14.0,
    "≤ 5 kg": 15.0,
    "≤ 6 kg": 16.0,
    "≤ 7 kg": 17.0,
    "≤ 8 kg": 18.0,
    "≤ 9 kg": 19.0,
    "≤ 10 kg": 20.0,
    "≤ 11 kg": 21.0,
    "≤ 12 kg": 22.0,
  },
  Oversize: {
    "≤ 1 kg": 14.0,
    "≤ 2 kg": 15.0,
    "≤ 3 kg": 16.0,
    "≤ 4 kg": 17.0,
    "≤ 5 kg": 18.0,
    "≤ 6 kg": 19.0,
    "≤ 7 kg": 20.0,
    "≤ 8 kg": 21.0,
    "≤ 9 kg": 22.0,
    "≤ 10 kg": 23.0,
    "≤ 15 kg": 28.0,
    "≤ 20 kg": 33.0,
    "≤ 25 kg": 38.0,
    "≤ 30 kg": 43.0,
  },
};

function getSaudiReferral(category: Category, price: number) {
  let fee = 0;
  let label = "";

  switch (category) {
    case "Baby":
      fee = price <= 50 ? price * 0.08 : price * 0.15;
      label = price <= 50 ? "8%" : "15%";
      break;

    case "Beauty":
    case "Health & Personal Care":
      fee = price <= 50 ? price * 0.085 : price * 0.11;
      label = price <= 50 ? "8.5%" : "11%";
      break;

    case "Personal Care Appliances":
      fee = price <= 50 ? price * 0.08 : price * 0.13;
      label = price <= 50 ? "8%" : "13%";
      break;

    case "Grocery":
      fee = price <= 25 ? price * 0.03 : price * 0.09;
      label = price <= 25 ? "3%" : "9%";
      return {
        fee,
        label,
      };

    case "Electronics Accessories":
    case "Wireless":
      fee =
        Math.min(price, 250) * 0.15 + Math.max(price - 250, 0) * 0.08;
      label = price <= 250 ? "15%" : "15% up to 250, then 8%";
      break;

    case "Furniture":
      fee =
        Math.min(price, 750) * 0.15 + Math.max(price - 750, 0) * 0.10;
      label = price <= 750 ? "15%" : "15% up to 750, then 10%";
      break;

    case "Jewelry":
      fee =
        Math.min(price, 1000) * 0.16 + Math.max(price - 1000, 0) * 0.05;
      label = price <= 1000 ? "16%" : "16% up to 1000, then 5%";
      break;

    case "Watches":
      fee =
        Math.min(price, 5000) * 0.15 + Math.max(price - 5000, 0) * 0.05;
      label = price <= 5000 ? "15%" : "15% up to 5000, then 5%";
      break;

    case "Apparel":
    case "Books":
    case "Luggage":
    case "Music":
    case "Music instruments":
    case "Office products":
    case "Perfumes":
    case "Pet Products":
    case "Shoes":
      fee = price * 0.15;
      label = "15%";
      break;

    case "Automotive":
    case "Small Appliances":
      fee = price * 0.12;
      label = "12%";
      break;

    case "Camera":
      fee = price * 0.08;
      label = "8%";
      break;

    case "Consumer Electronics":
    case "Mobiles & Tablets":
      fee = price * 0.055;
      label = "5.5%";
      break;

    case "Gift Cards":
    case "Software":
    case "Stamps collectibles":
    case "All Other Categories":
      fee = price * 0.10;
      label = "10%";
      break;

    case "Headphones & Portable audio":
      fee = price * 0.10;
      label = "10%";
      break;

    case "Home":
    case "Kitchen":
    case "Outdoor":
    case "Tools & Home Improvement":
    case "Toys":
    case "Video Games":
      fee = price * 0.14;
      label = "14%";
      break;

    case "Home Entertainment":
      fee = price * 0.065;
      label = "6.5%";
      break;

    case "Major appliances":
    case "Personal Computers":
    case "Video Game Consoles":
      fee = price * 0.06;
      label = "6%";
      break;

    case "Sports":
    case "Video & DVD":
      fee = price * 0.13;
      label = "13%";
      break;

    default:
      fee = price * 0.10;
      label = "10%";
      break;
  }

  return {
    fee: Math.max(fee, 1),
    label,
  };
}

function getUaeReferral(category: Category, price: number) {
  let fee = 0;
  let label = "";

  switch (category) {
    case "Baby":
    case "Beauty":
    case "Health & Personal Care":
      fee = price <= 50 ? price * 0.08 : price * 0.15;
      label = price <= 50 ? "8%" : "15%";
      break;

    case "Grocery":
      fee = price <= 25 ? price * 0.03 : price * 0.09;
      label = price <= 25 ? "3%" : "9%";
      break;

    case "Electronics Accessories":
    case "Wireless":
      fee =
        Math.min(price, 250) * 0.15 + Math.max(price - 250, 0) * 0.08;
      label = price <= 250 ? "15%" : "15% up to 250, then 8%";
      break;

    case "Furniture":
      fee =
        Math.min(price, 250) * 0.10 + Math.max(price - 250, 0) * 0.15;
      label = price <= 250 ? "10%" : "10% up to 250, then 15%";
      break;

    case "Jewelry":
      fee =
        Math.min(price, 250) * 0.05 + Math.max(price - 250, 0) * 0.15;
      label = price <= 250 ? "5%" : "5% up to 250, then 15%";
      break;

    case "Consumer Electronics":
    case "Mobiles & Tablets":
    case "Personal Computers":
    case "Major appliances":
    case "Video Game Consoles":
      fee = price * 0.05;
      label = "5%";
      break;

    case "Apparel":
    case "Books":
    case "Luggage":
    case "Music":
    case "Music instruments":
    case "Office products":
    case "Perfumes":
    case "Pet Products":
    case "Shoes":
    case "Toys":
    case "Home":
    case "Kitchen":
    case "Outdoor":
    case "Tools & Home Improvement":
    case "Video Games":
    case "Video & DVD":
    case "Sports":
    case "Software":
    case "Gift Cards":
    case "Stamps collectibles":
    case "Headphones & Portable audio":
    case "All Other Categories":
      fee = price * 0.15;
      label = "15%";
      break;

    case "Automotive":
      fee = price * 0.12;
      label = "12%";
      break;

    case "Camera":
      fee = price * 0.08;
      label = "8%";
      break;

    case "Home Entertainment":
      fee = price * 0.10;
      label = "10%";
      break;

    case "Personal Care Appliances":
      fee = price <= 50 ? price * 0.08 : price * 0.13;
      label = price <= 50 ? "8%" : "13%";
      break;

    case "Small Appliances":
      fee = price * 0.12;
      label = "12%";
      break;

    default:
      fee = price * 0.15;
      label = "15%";
      break;
  }

  return {
    fee: Math.max(fee, 1),
    label,
  };
}

function getFulfillmentFee(
  market: Market,
  sellingPrice: number,
  tier: Tier,
  weight: string
) {
  if (market === "SAR") {
    const table = sellingPrice <= 25 ? SAUDI_FBA_LOW : SAUDI_FBA_HIGH;
    return table[tier]?.[weight] ?? 0;
  }

  return UAE_FBA[tier]?.[weight] ?? 0;
}

function formatMoney(value: number, market: Market) {
  const symbol = market === "AED" ? "AED" : "SAR";
  return `${symbol} ${value.toFixed(2)}`;
}

export default function FbaProfitCalculator() {
  const [market, setMarket] = useState<Market>("AED");
  const [category, setCategory] =
    useState<Category>("Health & Personal Care");
  const [sellingPrice, setSellingPrice] = useState<number>(32);
  const [tier, setTier] = useState<Tier>("Standard parcel");
  const [weight, setWeight] = useState<string>("≤ 0.25 kg");

  useEffect(() => {
    const weights = WEIGHT_OPTIONS[tier];
    if (!weights.includes(weight)) {
      setWeight(weights[0]);
    }
  }, [tier, weight]);

  useEffect(() => {
    if (market === "SAR" && sellingPrice === 32) {
      setSellingPrice(32);
    }
  }, [market, sellingPrice]);

  const result = useMemo(() => {
    const referral =
      market === "SAR"
        ? getSaudiReferral(category, sellingPrice)
        : getUaeReferral(category, sellingPrice);

    const fulfillmentFee = getFulfillmentFee(
      market,
      sellingPrice,
      tier,
      weight
    );

    const totalAmazonFees = referral.fee + fulfillmentFee;
    const netProceeds = sellingPrice - totalAmazonFees;
    const margin = sellingPrice > 0 ? (netProceeds / sellingPrice) * 100 : 0;

    return {
      referralFee: referral.fee,
      referralLabel: referral.label,
      fulfillmentFee,
      totalAmazonFees,
      netProceeds,
      margin,
    };
  }, [market, category, sellingPrice, tier, weight]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">
            FBA Profit Calculator
          </h1>
          <p className="mt-2 text-neutral-600">
            {market === "AED"
              ? "UAE calculator (Referral fee + FBA Fulfillment fee). No VAT/PPC."
              : "Saudi calculator (Referral fee + FBA Fulfillment fee). No VAT/PPC."}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-transparent">
          <button
            onClick={() => setMarket("AED")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              market === "AED"
                ? "bg-black text-white"
                : "bg-white text-neutral-700 border border-neutral-300"
            }`}
          >
            AED
          </button>

          <button
            onClick={() => setMarket("SAR")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              market === "SAR"
                ? "bg-black text-white"
                : "bg-white text-neutral-700 border border-neutral-300"
            }`}
          >
            SAR
          </button>
        </div>
      </div>

      <div className="grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 p-6">
          <h2 className="mb-6 text-xl font-bold text-neutral-900">Inputs</h2>

          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Choose Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="mb-6 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none"
          >
            {ALL_CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Selling price ({market})
          </label>
          <input
            type="number"
            min={0}
            step="0.01"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(Number(e.target.value))}
            className="mb-6 w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Size tier
              </label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value as Tier)}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none"
              >
                {TIER_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Weight bracket
              </label>
              <select
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none"
              >
                {WEIGHT_OPTIONS[tier].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            Tip: choose the correct marketplace first, then select the product
            size tier and weight bracket exactly as Amazon classifies it.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-200 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900">Results</h2>
            <span className="text-sm text-neutral-500">Live</span>
          </div>

          <div className="mb-4 rounded-3xl border border-neutral-200 p-5">
            <p className="text-sm text-neutral-500">Net proceeds (per unit)</p>
            <p className="mt-2 text-5xl font-bold text-neutral-900">
              {market === "AED" ? "AED" : "SAR"}{" "}
              {result.netProceeds.toFixed(2)}
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Margin: {result.margin.toFixed(2)}%
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-4">
              <span className="text-neutral-700">Selling price</span>
              <span className="font-semibold">
                {formatMoney(sellingPrice, market)}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-4">
              <span className="text-neutral-700">Referral fee (auto)</span>
              <span className="font-semibold">
                {formatMoney(result.referralFee, market)} ({result.referralLabel})
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-4">
              <span className="text-neutral-700">Fulfillment fee (auto)</span>
              <span className="font-semibold">
                {formatMoney(result.fulfillmentFee, market)} • {tier}, {weight}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-4">
              <span className="text-neutral-700">Amazon fees (total)</span>
              <span className="font-semibold">
                {formatMoney(result.totalAmazonFees, market)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}