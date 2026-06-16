"use client";

import { useState } from "react";

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FreeSnapshot from "@/components/FreeSnapshot";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import PalmLinesGuide from "@/components/PalmLinesGuide";
import PalmUploader from "@/components/PalmUploader";
import PremiumReport from "@/components/PremiumReport";
import SEOContent from "@/components/SEOContent";
import TrustMetrics from "@/components/TrustMetrics";
import SchemaMarkup from "@/components/SchemaMarkup";
import Testimonials from "@/components/Testimonials";
import InternalLinks from "@/components/InternalLinks";
type PalmReadingResult = {
  teaser: {
    personality: string;
    love: string;
    career: string;
  };
  fullReport: {
    overview: string;
    palmTraits: {
      heartLine: string;
      headLine: string;
      lifeLine: string;
      fateLine: string;
      handShape: string;
      mounts: string;
    };
    personality: string;
    love: string;
    career: string;
    wealth: string;
    emotionalPattern: string;
    lifePath: string;
    guidance: string;
  };
};

export default function Home() {
  const [result, setResult] = useState<PalmReadingResult | null>(null);

  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#421b0d]">
      <Header />
      <SchemaMarkup />
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center overflow-hidden px-5 py-20 text-center">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f6b94b]/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-[#72dfb0]/20 blur-3xl" />
        <div className="absolute left-10 top-1/2 h-40 w-40 rounded-full bg-[#087c54]/10 blur-3xl" />

        <p className="relative mb-5 rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54] shadow-sm">
          Modern Palmistry • Personal Life Insight
        </p>

        <h1 className="relative max-w-4xl text-5xl font-bold tracking-tight text-[#421b0d] sm:text-6xl md:text-7xl">
          Free Palm Reading Online.
          <span className="block text-[#087c54]">
            Upload Your Palm Photo.
          </span>
        </h1>

        <p className="relative mt-6 max-w-2xl text-lg leading-8 text-[#823616]">
          Get an instant personalized palmistry preview for love, career,
          personality, emotional patterns, and life path reflection.
        </p>

        <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#upload"
            className="rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40"
          >
            Start Free Palm Reading
          </a>

          <a
            href="/palm-reading-by-photo"
            className="rounded-full border border-[#72dfb0] bg-[#e8fff4] px-8 py-4 font-bold text-[#087c54]"
          >
            Palm Reading by Photo
          </a>
        </div>
      </section>

      <section className="px-5 py-16">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-center text-4xl font-bold text-[#421b0d] md:text-5xl">
      Popular Palm Reading Tools
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        ["AI Palm Reading", "/ai-palm-reading"],
        ["Palm Reading Report", "/palm-reading-report"],
        ["Online Palm Reading", "/online-palm-reading"],
        ["Palm Reading By Photo", "/palm-reading-by-photo"],
        ["Career Palm Reading", "/career-palm-reading"],
        ["Love Palm Reading", "/love-palm-reading"],
      ].map(([title, href]) => (
        <a
          key={href}
          href={href}
          className="rounded-3xl border border-[#eadcc6] bg-white/75 p-6 text-center text-xl font-bold text-[#421b0d] shadow-lg transition hover:-translate-y-1 hover:border-[#72dfb0]"
        >
          {title}
        </a>
      ))}
    </div>
  </div>
</section>

      <PalmUploader setResult={setResult} />

      <TrustMetrics />

      <Testimonials />

      <HowItWorks />

      <PalmLinesGuide />

      <FreeSnapshot result={result?.teaser ?? null} />

      {result && <PremiumReport result={result} />}

      <FAQ />

      <SEOContent />

      <InternalLinks/>
      <Footer />
    </main>
  );
}