import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Online Palm Reading | Personalized Palmistry Report",
  description:
    "Experience online palm reading by uploading your palm photo. Get palmistry-inspired insights about love, career, emotions, personality, and life direction.",
  alternates: {
    canonical: "/online-palm-reading",
  },
};

export default function OnlinePalmReadingPage() {
  return (
    <main className="min-h-screen bg-[#fff8e8] text-[#421b0d]">
      <Header />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
            Online Palm Reading
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Online Palm Reading for Love, Career & Life Path
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#823616]">
            Discover a modern palmistry experience online. Upload your palm
            photo and receive personalized insights inspired by traditional palm
            reading.
          </p>

          <a
            href="/#upload"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40"
          >
            Upload Palm Photo
          </a>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-[#eadcc6] bg-white/75 p-8 leading-9 text-[#823616] shadow-xl shadow-orange-100/30">
          <h2 className="text-4xl font-bold text-[#421b0d]">
            How Online Palm Reading Works
          </h2>

          <p>
            Online palm reading makes palmistry accessible from your phone or
            computer. Instead of visiting a palm reader in person, you can upload
            your palm photo and receive a digital interpretation based on visible
            palm features.
          </p>

          <p>
            PALM looks at major palmistry elements such as the heart line, head
            line, life line, fate line, hand shape, and palm mounts. These are
            interpreted to create a reading focused on self-reflection,
            personality, emotional tendencies, relationships, and career
            direction.
          </p>

          <h2 className="text-4xl font-bold text-[#421b0d]">
            Why Choose an Online Palmistry Report?
          </h2>

          <p>
            An online palmistry report is private, instant, and easy to access.
            You can begin with a free preview and decide whether to unlock the
            complete detailed report. The full report includes deeper sections
            such as love compatibility, career path, wealth energy, emotional
            pattern, life direction, and personal guidance.
          </p>

          <p>
            This makes PALM useful for anyone searching for palm reading online,
            palm reading by photo, palm reading near me, best palm reading
            online, or Indian palmistry readings from anywhere in the world.
          </p>

          <h2 className="text-4xl font-bold text-[#421b0d]">
            For Reflection, Not Certainty
          </h2>

          <p>
            Palm reading should be experienced as a reflective and entertaining
            tradition. PALM does not provide guaranteed predictions or
            professional advice. Use your reading as a mirror for curiosity,
            clarity, and self-awareness.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}