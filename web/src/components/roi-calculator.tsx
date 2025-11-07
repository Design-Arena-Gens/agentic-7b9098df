'use client';

import { useMemo, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "SAR",
  maximumFractionDigits: 0,
});

type SliderConfig = {
  id: keyof CalculatorInputs;
  label: string;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  helper: string;
};

type CalculatorInputs = {
  budget: number;
  cpc: number;
  callRate: number;
  closeRate: number;
  ticket: number;
};

const sliders: SliderConfig[] = [
  {
    id: "budget",
    label: "মাসিক বিজ্ঞাপন বাজেট (SAR)",
    min: 500,
    max: 6000,
    step: 100,
    helper: "কত SAR ব্যয় করছেন ক্লিকের জন্য।",
  },
  {
    id: "cpc",
    label: "গড় CPC (SAR)",
    min: 2,
    max: 12,
    step: 0.2,
    helper: "প্রতি ক্লিকে খরচ।",
  },
  {
    id: "callRate",
    label: "ক্লিক থেকে কল কনভার্শন (%)",
    min: 2,
    max: 35,
    step: 1,
    helper: "কত শতাংশ ক্লিক ফোন কল করে।",
    suffix: "%",
  },
  {
    id: "closeRate",
    label: "কল থেকে বিক্রি (%)",
    min: 10,
    max: 70,
    step: 1,
    helper: "কেনাকাটা বা সার্ভিস বুকিং এ রূপান্তর।",
    suffix: "%",
  },
  {
    id: "ticket",
    label: "গড় ডিল ভ্যালু (SAR)",
    min: 200,
    max: 4000,
    step: 50,
    helper: "প্রতি সেল থেকে আপনি কত উপার্জন করছেন।",
  },
];

export function RoiCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    budget: 1800,
    cpc: 4.5,
    callRate: 12,
    closeRate: 38,
    ticket: 950,
  });

  const metrics = useMemo(() => {
    const clicks = inputs.budget / inputs.cpc;
    const calls = clicks * (inputs.callRate / 100);
    const deals = calls * (inputs.closeRate / 100);
    const revenue = deals * inputs.ticket;
    const profit = revenue - inputs.budget;
    const roi =
      inputs.budget === 0 ? 0 : Math.round((profit / inputs.budget) * 100);

    return {
      clicks: Math.floor(clicks),
      calls: Math.floor(calls),
      deals: Math.floor(deals),
      revenue,
      profit,
      roi,
    };
  }, [inputs]);

  const status =
    metrics.calls >= 40
      ? "দারুণ! কল ভলিউম লক্ষ্য পূরণ হচ্ছে। বাজেট বাড়িয়ে আরও স্কেল করা যাবে।"
      : metrics.calls >= 25
      ? "ঠিক পথে আছেন। কল বাড়াতে অ্যাড কপি ও লোকেশন টার্গেটিং আরও শানিত করুন।"
      : "কল সংখ্যা কম। কীওয়ার্ড নেগেটিভ, অফার এবং কল এক্সটেনশন অবসারভ করুন।";

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          কল ও আর ও আই ক্যালকুলেটর
        </h2>
        <p className="text-base leading-7 text-slate-600">
          নিচের সংখ্যাগুলো নিজের ব্যবসার হিসেব অনুযায়ী সামঞ্জস্য করুন এবং দেখুন
          বাস্তবে কত কল উচিত।
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {sliders.map((slider) => (
            <div key={slider.id} className="space-y-2">
              <div className="flex justify-between text-sm font-medium text-slate-700">
                <label htmlFor={slider.id}>{slider.label}</label>
                <span className="text-slate-900">
                  {slider.suffix === "%"
                    ? `${(inputs[slider.id] as number).toFixed(0)}%`
                    : slider.id === "cpc"
                    ? inputs.cpc.toFixed(1)
                    : Math.round(inputs[slider.id] as number)}
                </span>
              </div>
              <input
                id={slider.id}
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={inputs[slider.id]}
                onChange={(event) =>
                  setInputs((prev) => ({
                    ...prev,
                    [slider.id]: parseFloat(event.target.value),
                  }))
                }
                className="w-full accent-orange-500"
              />
              <p className="text-xs text-slate-500">{slider.helper}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-slate-900 p-6 text-slate-100 shadow-lg">
          <div>
            <p className="text-sm uppercase tracking-wide text-orange-200">
              প্রত্যাশিত ফলাফল
            </p>
            <p className="mt-1 text-3xl font-semibold">
              {formatter.format(metrics.revenue)}
            </p>
            <p className="text-sm text-slate-300">
              সম্ভাব্য মাসিক বিক্রি, কলের রূপান্তর ধরে।
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-slate-400">ক্লিক</dt>
              <dd className="text-lg font-semibold text-white">
                {metrics.clicks}
              </dd>
            </div>
            <div>
              <dt className="text-slate-400">কল</dt>
              <dd className="text-lg font-semibold text-white">
                {metrics.calls}
              </dd>
            </div>
            <div>
              <dt className="text-slate-400">সাকসেসফুল ডিল</dt>
              <dd className="text-lg font-semibold text-white">
                {metrics.deals}
              </dd>
            </div>
            <div>
              <dt className="text-slate-400">ROI</dt>
              <dd className="text-lg font-semibold text-emerald-300">
                {metrics.roi}%
              </dd>
            </div>
          </dl>
          <div className="rounded-xl bg-white/15 p-4 text-sm leading-6 text-orange-100">
            {status}
          </div>
          <div className="rounded-xl bg-white/10 p-4 text-xs text-slate-200">
            <p className="font-semibold text-orange-100">প্রো টিপ</p>
            <p>
              কল ট্র্যাকিং ডেটা দেখে সপ্তাহে কমপক্ষে একবার বিড ও অ্যাড কপি আপডেট
              করুন। কল অভ্যন্তরীণভাবে রেকর্ড করলে স্ক্রিপ্ট বিশ্লেষণ সহজ হবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
