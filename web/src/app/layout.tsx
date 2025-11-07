import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riyadh Curtain Ads Rescue",
  description:
    "গুগল মাই বিজনেস বিজ্ঞাপন থেকে কল বাড়ানোর জন্য রিয়াদ-ভিত্তিক পর্দা ব্যবসার সম্পূর্ণ স্ট্র্যাটেজি প্ল্যান।",
  metadataBase: new URL("https://agentic-7b9098df.vercel.app"),
  openGraph: {
    title: "Riyadh Curtain Ads Rescue",
    description:
      "লোকাল লিড জেনারেশনের জন্য অপ্টিমাইজড চেকলিস্ট, কীওয়ার্ড ও ROI ক্যালকুলেটর।",
    url: "https://agentic-7b9098df.vercel.app",
    locale: "bn_BD",
    siteName: "Riyadh Curtain Ads Rescue",
  },
  alternates: {
    canonical: "https://agentic-7b9098df.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyadh Curtain Ads Rescue",
    description:
      "গুগল অ্যাডস থেকে কল না এলে দ্রুত সমাধানের গাইডলাইন ও ক্যালকুলেটর।",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoBengali.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
