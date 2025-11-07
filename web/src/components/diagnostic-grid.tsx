const issues = [
  {
    title: "লোকেশন টার্গেটিং ত্রুটি",
    description:
      "রিয়াদের বাইরে সার্চাররা যদি এড দেখে, বাজেট নষ্ট হয়। শুধুমাত্র রিয়াদ সিটির রেডিয়াস বা নির্দিষ্ট জিপ কোড টার্গেট করুন।",
    recommendation: "Campaign → Settings → Locations → Advanced search → Radius: Riyadh (10-15 km).",
  },
  {
    title: "কল এক্সটেনশন অপ্টিমাইজ নয়",
    description:
      "কল এক্সটেনশনে রিয়াদ-ভিত্তিক মোবাইল নম্বর, অফিস টাইমিং ও কল রিপোর্ট ট্র্যাকিং সক্রিয় করুন।",
    recommendation: "Assets → Call → নতুন নম্বর যোগ করুন এবং ‘Count calls as phone call conversions’ সিলেক্ট করুন।",
  },
  {
    title: "অস্পষ্ট অফার",
    description:
      "বিজ্ঞাপনে ডেলিভারি সময়, পর্দার ধরন বা ইনস্টলেশন চার্জ উল্লেখ না করলে মানুষ কল করতে দ্বিধা করে।",
    recommendation: "হেডলাইন ও ডেসক্রিপশনে ‘Free Measurement’, ‘Saudi-matching Designs’ ইত্যাদি যোগ করুন।",
  },
  {
    title: "গুগল বিজনেস প্রোফাইল অসম্পূর্ণ",
    description:
      "পোস্ট, ফটো ও রিভিউ আপডেট না থাকলে ব্যবহারকারী কল করার আগে বিশ্বাস হারায়।",
    recommendation: "প্রতি সপ্তাহে ৩টি পোস্ট, নতুন ইনস্টলেশনের ছবি এবং রিভিউ রিপ্লাই বাধ্যতামূলক করুন।",
  },
];

export function DiagnosticGrid() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          কেন কল আসছে না? দ্রুত ডায়াগনস্টিক চেকলিস্ট
        </h2>
        <p className="text-base leading-7 text-slate-600">
          নিচের প্রতিটি জোন ঠিকঠাক করলে আপনি ক্লিক থেকে কল কনভার্শন বেড়ে যেতে
          দেখবেন। প্রতিটি কার্ড রিভিউ করে অ্যাকশন নিন।
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {issues.map((issue) => (
          <article
            key={issue.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {issue.title}
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              {issue.description}
            </p>
            <div className="rounded-xl bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700">
              {issue.recommendation}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
