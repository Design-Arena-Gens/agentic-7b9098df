const steps = [
  {
    title: "ক্যাম্পেইন পুনরায় সেটআপ (Day 0)",
    bullets: [
      "Search Network only + Riyadh location + Bengali/Arabic/English ভাষা টার্গেট।",
      "বাজেটকে কল অপ্টিমাইজেশনের জন্য ‘Maximize conversions’ + Target CPA সেট করুন (SAR 30-35)।",
      "কমপক্ষে ৩টি Responsive Search Ads, প্রতিটিতে ১৫টি হেডলাইন এবং ৪টি বর্ণনা ব্যবহার করুন।",
    ],
  },
  {
    title: "অফার ও যোগাযোগ আপগ্রেড (Day 1-2)",
    bullets: [
      "Business Profile ছবিতে সৌদি স্টাইলের কার্টেন শোরুম ও বাস্তব ইনস্টলেশনের ছবি আপলোড করুন।",
      "Welcome offer: “ফ্রি মেজারমেন্ট + ২৪ ঘন্টার মধ্যে ইনস্টলেশন” বার্তাটি সব জায়গায় রাখুন।",
      "কল এক্সটেনশনে ভয়েসমেইল রেকর্ডিং আপডেট করুন যাতে জরুরী অফার রিপিট হয়।",
    ],
  },
  {
    title: "কনভার্শন ট্র্যাকিং মেজারমেন্ট (Day 3-4)",
    bullets: [
      "Call reporting enabled হলে গুগল স্বয়ংক্রিয়ভাবে ক্রস-ডিভাইস কল ট্র্যাক করবে।",
      "Website অথবা Landing Page থাকলে কল বাটনে Google Tag Manager ইভেন্ট ট্র্যাকিং চালু করুন।",
      "যে কল ৩০ সেকেন্ডের বেশি, তাকে ‘Qualified lead’ কনভার্শন হিসেবে কাউন্ট করুন।",
    ],
  },
  {
    title: "ডাটা-ড্রিভেন অপ্টিমাইজেশন (Day 5-7)",
    bullets: [
      "Search Terms রিপোর্টে ‘curtain installation riyadh’, ‘parda fixing near me’ জাতীয় কীওয়ার্ড রেখে বাকি অপ্রাসঙ্গিক জিনিস Negative করুন।",
      "Asset Performance কলাম দেখে best performing হেডলাইন পিন করুন এবং Low performing গুলো পাল্টান।",
      "Call details রিপোর্ট থেকে একাধিকবার মিসড কল থাকলে কল সেন্টার স্লট বাড়ান।",
    ],
  },
];

export function ActionPlan() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          ৭ দিনের অ্যাক্সেলারেশন প্ল্যান
        </h2>
        <p className="text-base leading-7 text-slate-600">
          নির্দিষ্ট দিনে কোন কাজ করবেন তা স্পষ্টভাবে সাজানো হল। এই সিরিজ
          অনুসরণ করলে দ্রুত ফলাফল পাবেন।
        </p>
      </div>
      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <li
            key={step.title}
            className="flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-emerald-900">
              {step.title}
            </h3>
            <ul className="space-y-2 text-sm leading-6 text-emerald-800">
              {step.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-4">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-emerald-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
