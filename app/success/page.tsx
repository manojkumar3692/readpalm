"use client";

import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type PalmReadingResult = {
  userProfile?: {
    name: string;
    dob: string;
    gender: string;
    uploadedHand: string;
    recommendedHand: string;
  };
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

type PaidReport = {
  paymentId: string;
  report: PalmReadingResult;
};

export default function SuccessPage() {
  const reportRef = useRef<HTMLDivElement>(null);
  const [paidReport, setPaidReport] = useState<PaidReport | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("palm_paid_report");
    if (saved) setPaidReport(JSON.parse(saved));
  }, []);

  async function downloadPdf() {
    if (!reportRef.current) return;

    const canvas = await html2canvas(reportRef.current, {
      scale: 2,
      backgroundColor: "#fff8e8",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = pdfHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= 297;

    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= 297;
    }

    pdf.save("PALM-Full-Reading-Report.pdf");
  }

  if (!paidReport) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff8e8] px-5 text-[#421b0d]">
        <div className="max-w-xl rounded-[2rem] border border-[#eadcc6] bg-white/80 p-8 text-center shadow-2xl">
          <p className="text-sm font-semibold text-[#087c54]">
            Report Not Found
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Your report could not be loaded
          </h1>

          <p className="mt-5 leading-8 text-[#823616]">
            If your payment was completed, please contact support with your
            payment screenshot.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#087c54] px-6 py-3 font-semibold text-white"
          >
            Back Home
          </a>
        </div>
      </main>
    );
  }

  const report = paidReport.report.fullReport;
  const profile = paidReport.report.userProfile;

  return (
    <main className="min-h-screen bg-[#fff8e8] px-5 py-10 text-[#421b0d]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border border-[#72dfb0] bg-[#e8fff4] p-6 text-center shadow-xl shadow-green-100/40">
          <p className="text-sm font-semibold text-[#087c54]">
            Payment Successful
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Your Full Palm Reading Report Is Ready
          </h1>

          <p className="mt-3 text-sm text-[#087c54]">
            Payment ID: {paidReport.paymentId}
          </p>

          <button
            onClick={downloadPdf}
            className="mt-6 rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40"
          >
            Download Full PDF Report
          </button>
        </div>

        <div
          ref={reportRef}
          className="overflow-hidden rounded-[2rem] border border-[#eadcc6] bg-white shadow-2xl shadow-orange-200/30"
        >
          <div className="bg-gradient-to-br from-[#421b0d] via-[#5a2410] to-[#087c54] px-8 py-12 text-center text-[#fff8e8]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f6b94b]">
              PALM
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Personalized Palm Reading Report
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#f7e9ce]/85">
              A modern palmistry-inspired interpretation for reflection,
              emotional clarity, and personal discovery.
            </p>
          </div>

          <div className="p-8">
            {profile && (
              <section className="rounded-[2rem] border border-[#eadcc6] bg-[#fff8e8] p-6">
                <h3 className="text-2xl font-bold text-[#421b0d]">
                  Reading Details
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <Detail label="Name" value={profile.name} />
                  <Detail label="Date of Birth" value={profile.dob} />
                  <Detail label="Gender" value={profile.gender} />
                  <Detail label="Uploaded Hand" value={profile.uploadedHand} />
                  <Detail
                    label="Traditional Hand"
                    value={profile.recommendedHand}
                  />
                  <Detail label="Report Type" value="Personal Palm Reading" />
                </div>
              </section>
            )}

            <ReportSection title="Overview" content={report.overview} />

            <section className="mt-10">
              <h3 className="text-3xl font-bold">Palm Line Observations</h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Trait title="Heart Line" value={report.palmTraits.heartLine} />
                <Trait title="Head Line" value={report.palmTraits.headLine} />
                <Trait title="Life Line" value={report.palmTraits.lifeLine} />
                <Trait title="Fate Line" value={report.palmTraits.fateLine} />
                <Trait title="Hand Shape" value={report.palmTraits.handShape} />
                <Trait title="Mounts" value={report.palmTraits.mounts} />
              </div>
            </section>

            <ReportSection
              title="Personality Reading"
              content={report.personality}
            />
            <ReportSection title="Love & Relationships" content={report.love} />
            <ReportSection title="Career Direction" content={report.career} />
            <ReportSection title="Wealth Energy" content={report.wealth} />
            <ReportSection
              title="Emotional Pattern"
              content={report.emotionalPattern}
            />
            <ReportSection
              title="Life Path Direction"
              content={report.lifePath}
            />
            <ReportSection title="Personal Guidance" content={report.guidance} />

            <div className="mt-12 rounded-2xl border border-[#72dfb0] bg-[#e8fff4] p-6">
              <h3 className="text-xl font-bold text-[#087c54]">
                Reflection Note
              </h3>

              <p className="mt-3 leading-8 text-[#087c54]">
                This report is intended for entertainment, reflection, and
                personal insight. Use it as a mirror for self-awareness, not as
                a guaranteed prediction or professional advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#eadcc6] bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087c54]">
        {label}
      </p>
      <p className="mt-2 font-semibold capitalize text-[#421b0d]">{value}</p>
    </div>
  );
}

function ReportSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="mt-10 border-t border-[#eadcc6] pt-8">
      <h3 className="text-3xl font-bold text-[#421b0d]">{title}</h3>

      <p className="mt-4 text-lg leading-9 text-[#823616]">{content}</p>
    </section>
  );
}

function Trait({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#eadcc6] bg-[#fff8e8] p-5">
      <h4 className="font-bold text-[#421b0d]">{title}</h4>

      <p className="mt-2 leading-7 text-[#823616]">{value}</p>
    </div>
  );
}