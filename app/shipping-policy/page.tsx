import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Delivery Policy",
  description:
    "Learn how PALM delivers personalized palm reading reports digitally after successful payment.",
  alternates: {
    canonical: "/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
    return (
      <main className="min-h-screen bg-[#fff8e8] px-5 py-16 text-[#421b0d]">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc6] bg-white/80 p-8 shadow-xl">
          <h1 className="text-4xl font-bold">Digital Delivery Policy</h1>
  
          <div className="mt-6 space-y-5 leading-8 text-[#823616]">
            <p>
              PALM AI provides digital products only. No physical product is
              shipped.
            </p>
  
            <p>
              After successful payment, your personalized palm reading report is
              displayed on the success page and can be downloaded as a PDF.
            </p>
  
            <p>
              In most cases, digital delivery is instant. If there is a technical
              issue, contact support with your payment details.
            </p>
  
            <p>
              Contact: support@readpalm.in
            </p>
          </div>
        </div>
      </main>
    );
  }