const checklist = [
  {
    title: "Google Business Profile",
    items: [
      "প্রোফাইলে Location pin ও Service areas আপডেট আছে",
      "ফটো গ্যালারিতে অন্তত ১২টি সাম্প্রতিক কাজের ছবি",
      "Review reply টেমপ্লেট (আরবি + বাংলা) প্রস্তুত",
    ],
  },
  {
    title: "Call Handling",
    items: [
      "কল এলে ৪ রিং এর মধ্যে রিসিভ করার প্রশিক্ষণ",
      "মিসড কলের জন্য অটো-এসএমএস ফলোআপ সেটআপ",
      "বিকেল ৪টা থেকে রাত ১০টা পর্যন্ত ওভারফ্লো সাপোর্ট",
    ],
  },
  {
    title: "Landing Experience",
    items: [
      "মোবাইল ফার্স্ট ডিজাইন এবং কল বাটন উপরে স্থাপন",
      "হোয়াটসঅ্যাপ ক্লিক-টু-চ্যাট বাটন সক্রিয়",
      "Arabic ও English দুই ভাষায় কন্টেন্ট",
    ],
  },
  {
    title: "Measurement",
    items: [
      "Call conversions (৩০ সেকেন্ড+) count হচ্ছে",
      "Google Analytics 4 এ Traffic source রিপোর্ট দেখুন",
      "শীর্ষ সার্চ টার্মগুলোর উপর সাপ্তাহিক নোট",
    ],
  },
];

export function ExecutionChecklist() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          অপারেশনস চেকলিস্ট
        </h2>
        <p className="text-base leading-7 text-slate-600">
          বিজ্ঞাপনের পাশাপাশি অফলাইন সেটআপও গুরুত্বপূর্ণ। প্রতিটি ব্লক সম্পন্ন
          হলে টিক দিন।
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {checklist.map((block) => (
          <div
            key={block.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {block.title}
            </h3>
            <ul className="space-y-2 text-sm leading-6 text-slate-700">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
