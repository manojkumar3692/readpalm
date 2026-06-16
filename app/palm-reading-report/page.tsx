import type { Metadata } from "next";
import PalmReadingTool from "@/components/PalmReadingTool";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import InternalLinks from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Palm Reading Report PDF | Personalized AI Palmistry Report",
  description:
    "Get a personalized AI palm reading report PDF for ₹99. Upload your palm photo and receive insights about love, career, personality, and palm lines.",
  alternates: {
    canonical: "/palm-reading-report",
  },
};

export default function PalmReadingReportPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#421b0d]">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="mb-5 inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
          Personalized Palmistry PDF
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Get Your Personalized Palm Reading Report
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#823616]">
          Upload your palm photo, get a free preview, and unlock your full
          detailed palm reading PDF report for ₹99.
        </p>

        <a
          href="#upload"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40"
        >
          Generate My Report
        </a>
      </section>

      <PalmReadingTool />

      <section className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-4xl font-bold md:text-6xl">
          What Your Full Report Includes
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Life Line Analysis",
            "Heart Line Reading",
            "Career & Fate Line Insights",
            "Personality Traits",
            "Love & Emotional Patterns",
            "Life Path Guidance",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#eadcc6] bg-white/75 p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#421b0d]">{item}</h3>
              <p className="mt-3 leading-7 text-[#823616]">
                Your personalized report explains this area based on your palm
                image and palmistry-inspired interpretation.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <InternalLinks />
      <Footer />
    </main>
  );
}