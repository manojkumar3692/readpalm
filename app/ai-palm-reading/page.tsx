import type { Metadata } from "next";
import PalmReadingTool from "@/components/PalmReadingTool";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import TrustMetrics from "@/components/TrustMetrics";
import Testimonials from "@/components/Testimonials";
import InternalLinks from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "AI Palm Reading Online | Free Palm Analysis by Photo",
  description:
    "Upload your palm photo and get an AI palm reading online. Discover love, career, personality, life path, and palm line insights.",
  alternates: {
    canonical: "/ai-palm-reading",
  },
};

export default function AIPalmReadingPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#421b0d]">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="mb-5 inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
          AI Palm Reading Online
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          AI Palm Reading From Your Palm Photo
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#823616]">
          Upload your palm photo and get an instant AI-powered palmistry preview
          for love, career, personality, emotional patterns, and life path.
        </p>

        <a
          href="#upload"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40"
        >
          Start AI Palm Reading
        </a>
      </section>

      <PalmReadingTool />

      <TrustMetrics />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <InternalLinks />
      <Footer />
    </main>
  );
}