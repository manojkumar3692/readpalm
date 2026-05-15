import type { Metadata } from "next";

export const metadata: Metadata = {

  title: "Privacy Policy",

  description:

    "Read PALM's privacy policy to understand how palm images, payment details, and personal information are handled.",

  alternates: {

    canonical: "/privacy-policy",

  },

};

export default function PrivacyPolicyPage() {
    return (
      <main className="min-h-screen bg-[#fff8e8] px-5 py-16 text-[#421b0d]">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc6] bg-white/80 p-8 shadow-xl">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
  
          <div className="mt-6 space-y-5 leading-8 text-[#823616]">
            <p>
              PALM AI respects your privacy. This policy explains how we collect,
              use, and protect information when you use our palm reading service.
            </p>
  
            <p>
              We may collect your palm image, reading inputs, payment confirmation
              details, and contact information when required to generate or deliver
              your report.
            </p>
  
            <p>
              Your palm image is used to create your personalized reading. We do
              not sell your personal data.
            </p>
  
            <p>
              Payments are processed securely through third-party payment providers
              such as Razorpay. We do not store your card or UPI details.
            </p>
  
            <p>
              For privacy questions, contact us at: support@readpalm.in
            </p>
          </div>
        </div>
      </main>
    );
  }