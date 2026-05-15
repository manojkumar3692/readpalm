import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Free Palm Reading Online by Photo",
  description:
    "Get a free palm reading online by uploading your palm photo. Discover palmistry-inspired insights about personality, love, career, and life path.",
  alternates: {
    canonical: "/free-palm-reading",
  },
};

export default function FreePalmReadingPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#421b0d]">
      <Header />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
            Free Palm Reading Online
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Free Palm Reading by Photo
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#823616]">
            Upload your palm photo and receive a free palmistry-inspired preview
            about your personality, emotions, love patterns, career direction,
            and life path.
          </p>

          <a
            href="/#upload"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40"
          >
            Start Free Palm Reading
          </a>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-[#eadcc6] bg-white/75 p-8 leading-9 text-[#823616] shadow-xl shadow-orange-100/30">
          <h2 className="text-4xl font-bold text-[#421b0d]">
            What Is a Free Palm Reading?
          </h2>

          <p>
            A free palm reading is a simple way to explore traditional palmistry
            through your palm lines, hand shape, and visible palm patterns.
            PALM gives you an online palm reading experience where you can upload
            a palm photo and receive a personalized preview instantly.
          </p>

          <p>
            Palmistry traditionally studies the heart line, head line, life line,
            fate line, and palm mounts. These features are often interpreted for
            emotional tendencies, thinking style, relationship patterns, career
            direction, and personal strengths.
          </p>

          <h2 className="text-4xl font-bold text-[#421b0d]">
            Online Palm Reading from Anywhere
          </h2>

          <p>
            Whether you are searching for free palm reading online, palm reading
            by photo, online palmistry, palm reading near me, or an Indian
            palmistry-inspired reading, PALM allows you to begin from anywhere.
            You only need a clear photo of your palm.
          </p>

          <p>
            Your free preview gives you a first glimpse. If you want deeper
            details, you can unlock the full personalized report with sections
            for love, career, emotional patterns, wealth energy, life path, and
            personal guidance.
          </p>

          <h2 className="text-4xl font-bold text-[#421b0d]">
            Important Note
          </h2>

          <p>
            PALM readings are created for entertainment, self-reflection, and
            personal insight. They are not medical, legal, financial, or
            guaranteed future advice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}