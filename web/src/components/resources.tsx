const resources = [
  {
    title: "Call Asset Reporting",
    description: "কল ট্র্যাকিং চালু করার পর এই রিপোর্ট থেকে কোন কীওয়ার্ড কত কল দিল বুঝুন।",
    link: "https://support.google.com/google-ads/answer/2454052",
  },
  {
    title: "Performance Max Local Services",
    description: "লোকাল ক্যাম্পেইনে ভিডিও ও ম্যাপস ভিজিবিলিটি বাড়াতে চাইলে এই গাইড অনুসরণ করুন।",
    link: "https://support.google.com/google-ads/answer/9423230",
  },
  {
    title: "Business Profile Optimization",
    description: "গুগল ম্যাপসে উচ্চ র‍্যাঙ্ক ধরে রাখতে সাপ্তাহিক রুটিন।",
    link: "https://support.google.com/business/answer/7091",
  },
];

export function Resources() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          হাতে রাখুন এই রিসোর্সগুলো
        </h2>
        <p className="text-base leading-7 text-slate-600">
          নিয়মিত ব্যবহারে শেখার গতি বাড়বে এবং পারফরম্যান্স স্থিতিশীল থাকবে।
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600">
              {resource.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {resource.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
              অফিসিয়াল গাইড দেখুন →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
