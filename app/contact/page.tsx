import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact PALM for support related to palm readings, payments, refunds, and digital report delivery.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#fff8e8] px-5 py-16 text-[#421b0d]">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc6] bg-white/80 p-8 shadow-xl">
          <p className="text-sm font-semibold text-[#087c54]">Contact Us</p>
  
          <h1 className="mt-3 text-4xl font-bold">Need Help With Your Report?</h1>
  
          <p className="mt-5 leading-8 text-[#823616]">
            If you have questions about your palm reading, payment, refund, or PDF
            report, contact us using the details below.
          </p>
  
          <div className="mt-8 rounded-2xl bg-[#e8fff4] p-6">
            <p className="font-bold text-[#087c54]">Email</p>
            <p className="mt-2 text-[#823616]">support@readpalm.in</p>
          </div>
  
          <div className="mt-5 rounded-2xl bg-[#fff8e8] p-6">
            <p className="font-bold">Support Hours</p>
            <p className="mt-2 text-[#823616]">
              Monday to Saturday, 10:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>
      </main>
    );
  }