import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using PALM online palm reading and digital palmistry report services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
    return (
      <main className="min-h-screen bg-[#fff8e8] px-5 py-16 text-[#421b0d]">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc6] bg-white/80 p-8 shadow-xl">
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
  
          <div className="mt-6 space-y-5 leading-8 text-[#823616]">
            <p>
              By using PALM Reading, you agree to these terms and conditions.
            </p>
  
            <p>
              PALM Reading provides palmistry-inspired readings for entertainment,
              reflection, and personal insight only. Readings are not professional,
              medical, legal, financial, or guaranteed future advice.
            </p>
  
            <p>
              You are responsible for uploading a clear palm image. Poor image
              quality may affect the reading experience.
            </p>
  
            <p>
              Paid reports are digital personalized products. Once generated and
              delivered, they are considered consumed.
            </p>
  
            <p>
              We may update these terms from time to time.
            </p>
          </div>
        </div>
      </main>
    );
  }