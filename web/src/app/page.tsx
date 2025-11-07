import { ActionPlan } from "@/components/action-plan";
import { DiagnosticGrid } from "@/components/diagnostic-grid";
import { ExecutionChecklist } from "@/components/execution-checklist";
import { Hero } from "@/components/hero";
import { KeywordInsights } from "@/components/keyword-insights";
import { Resources } from "@/components/resources";
import { RoiCalculator } from "@/components/roi-calculator";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-orange-100/40 via-white to-emerald-50/30">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
        <Hero />
        <DiagnosticGrid />
        <ActionPlan />
        <KeywordInsights />
        <RoiCalculator />
        <ExecutionChecklist />
        <Resources />
        <footer className="rounded-3xl bg-slate-900 px-6 py-8 text-slate-200 shadow-lg">
          <p className="text-sm uppercase tracking-wide text-orange-200">
            দ্রুত এগিয়ে যেতে চান?
          </p>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-200">
            সপ্তাহে অন্তত একবার এই ড্যাশবোর্ডে ফিরে আসুন, মেট্রিক আপডেট করুন এবং
            কোন পদক্ষেপ ফল দিচ্ছে তা নোট করুন। নিয়মিত বিশ্লেষণই টেকসই কল ভলিউম
            নিশ্চিত করবে।
          </p>
        </footer>
      </main>
    </div>
  );
}
