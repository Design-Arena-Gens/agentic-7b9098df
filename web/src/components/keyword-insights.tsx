const keywordRows = [
  {
    intent: "High intent (কল ফোকাস)",
    keyword: '“curtain installation riyadh”',
    copy: "হেডলাইন: “রিয়াদে ২৪ ঘন্টার মধ্যে পর্দা ইনস্টলেশন”",
    bid: "SAR 5.5",
    note: "Call button + সিটিএ “ফ্রি মেজারমেন্ট বুক করুন”",
  },
  {
    intent: "Local Arabic mix",
    keyword: "تركيب ستائر الرياض",
    copy: "বর্ণনা: “سريع • قياس مجاني • تفصيل سعودي”",
    bid: "SAR 4.8",
    note: "আরবি কীওয়ার্ডে dedicated ad group রাখুন।",
  },
  {
    intent: "Price sensitive",
    keyword: '“parda fitting price riyadh”',
    copy: "হেডলাইন: “পর্দা ফিটিং SAR 120 থেকে শুরু”",
    bid: "SAR 4.2",
    note: "বিজ্ঞাপনে starting price স্পষ্ট করুন।",
  },
  {
    intent: "Commercial projects",
    keyword: "hotel curtain supplier riyadh",
    copy: "বর্ণনা: “Bulk order discount + onsite consultation”",
    bid: "SAR 6.0",
    note: "কাস্টম ল্যান্ডিং পেজ থাকলে যুক্ত করুন।",
  },
];

export function KeywordInsights() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          কীওয়ার্ড ও অ্যাড কপি গাইড
        </h2>
        <p className="text-base leading-7 text-slate-600">
          উচ্চ ইন্টেন্ট সার্চ টার্মের সাথে মিল রেখে বিজ্ঞাপন সাজান। নিচের
          টেমপ্লেটগুলো কপি করে ব্যবহার করতে পারেন।
        </p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Intent</th>
              <th className="px-4 py-3 font-semibold">Keyword</th>
              <th className="px-4 py-3 font-semibold">Suggested Copy</th>
              <th className="px-4 py-3 font-semibold">Max CPC</th>
              <th className="px-4 py-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
            {keywordRows.map((row) => (
              <tr key={row.keyword}>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                  {row.intent}
                </td>
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-700">
                  {row.keyword}
                </td>
                <td className="px-4 py-3 text-sm leading-6">{row.copy}</td>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-emerald-700">
                  {row.bid}
                </td>
                <td className="px-4 py-3 text-sm leading-6 text-slate-600">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
