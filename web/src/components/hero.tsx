const highlights = [
  {
    title: "রিয়াদ ফোকাসড লিড জেনারেশন",
    detail:
      "পর্দা ও কার্টেন ইনস্টলেশনের জন্য শুধুমাত্র সেই ভোক্তাদের কাছে পৌঁছান যারা রিয়াদে সার্ভিস খুঁজছেন।",
  },
  {
    title: "কল কনভার্শনে অগ্রাধিকার",
    detail:
      "কল এক্সটেনশন ও কনভার্শন ট্র্যাকিং-শিল্পের মানদণ্ডে অপ্টিমাইজেশন প্ল্যান।",
  },
  {
    title: "গুগল ম্যাপস দৃশ্যমানতা বৃদ্ধি",
    detail:
      "বিজনেস প্রোফাইল আপডেট, রিভিউ ও ফটো ম্যানেজমেন্টের মাধ্যমে বিশ্বাসযোগ্যতা গড়ে তুলুন।",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-emerald-50 p-10 shadow-sm ring-1 ring-orange-100/70">
      <div className="max-w-3xl space-y-6">
        <p className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-orange-600 shadow-sm ring-1 ring-orange-200">
          Riyadh Curtain Business • Google Ads SOS
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          “ক্লিক হচ্ছে, কল না!” — এখনই গুগল মাই বিজনেস এডসকে ফোন-ড্রাইভিং
          মেশিনে পরিণত করুন।
        </h1>
        <p className="text-lg leading-8 text-slate-700">
          নিখুঁত লোকেশন টার্গেটিং, শক্তিশালী কল-টু-অ্যাকশন এবং স্পষ্ট অফার
          উপস্থাপনের মাধ্যমে রিয়াদে পর্দা ইন্সটলেশন সার্ভিসের জন্য মানসম্মত লিড
          পেতে শুরু করুন। নিচের নির্দেশনা অনুসরণ করুন এবং ধাপে ধাপে আপনার
          ক্যাম্পেইনকে অপ্টিমাইজ করুন।
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white/90 p-4 shadow ring-1 ring-orange-100/80"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            জরুরি পর্যালোচনা
          </p>
          <p className="text-2xl font-semibold text-slate-900">
            প্রথম ৭ দিনে কমপক্ষে ৪০টি লোকাল কল লক্ষ্য করুন
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900 px-5 py-4 text-slate-100 shadow">
          <p className="text-sm uppercase tracking-wide text-orange-200">
            বেঞ্চমার্ক
          </p>
          <p className="text-2xl font-semibold">
            CTR ≥ 5% • কল/কনভার্শন ≥ 10%
          </p>
        </div>
      </div>
    </section>
  );
}
