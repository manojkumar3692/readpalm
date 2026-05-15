import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellations & Refund Policy",
  description:
    "Read PALM's cancellation and refund policy for personalized digital palm reading reports.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
    return (
      <main className="min-h-screen bg-[#fff8e8] px-5 py-16 text-[#421b0d]">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc6] bg-white/80 p-8 shadow-xl">
          <h1 className="text-4xl font-bold">Cancellations & Refunds</h1>
  
          <div className="mt-6 space-y-5 leading-8 text-[#823616]">
            <p>
              PALM AI sells personalized digital palm reading reports.
            </p>
  
            <p>
              Because the report is generated instantly after successful payment,
              cancellations are not available after the report has been delivered.
            </p>
  
            <p>
              Refunds are generally not available for successfully generated and
              delivered digital reports.
            </p>
  
            <p>
              If payment was deducted but your report was not generated, please
              contact us with your payment screenshot, payment ID, email, and phone
              number.
            </p>
  
            <p>
              Contact: support@readpalm.in
            </p>
          </div>
        </div>
      </main>
    );
  }