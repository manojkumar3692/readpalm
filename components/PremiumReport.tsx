"use client";

import RazorpayPaymentButton from "@/components/RazorpayPaymentButton";

type PalmReadingResult = {
  userProfile?: {
    name: string;
    dob: string;
    gender: string;
    uploadedHand: string;
    recommendedHand: string;
  };
  teaser: {
    greeting?: string;
    personality: string;
    love: string;
    career: string;
    characterSignals?: string[];
    conversionHook?: string;
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

type Props = {
  result?: PalmReadingResult | null;
};

export default function PremiumReport({ result }: Props) {
  return (
    <section id="report" className="px-5 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#eadcc6] bg-gradient-to-br from-[#fffaf0] via-[#fff8e8] to-[#fdf2dd] shadow-[0_20px_80px_rgba(243,107,5,0.12)]">
        <div className="grid items-center gap-12 p-6 md:grid-cols-2 md:p-12">
          <div>
            <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#087c54]">
            Does This Feel True ?
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#421b0d] md:text-6xl">
              Your Complete Palm Report Is Ready
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#823616]">
            Discover what your unique palm lines reveal about your deeper life path and hidden talents.
            Know more about Relationship Compatibility , Hidden Emotional Patterns , Wealth & Career Direction , Life Path Guidance
            </p>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-5xl font-black text-[#f36b05]">₹99</span>
              <span className="mb-1 text-[#823616]/40 line-through">₹499</span>
            </div>

            <div className="mt-8 max-w-sm">
              {result ? (
                <RazorpayPaymentButton visible={true} result={result} />
              ) : (
                <a
                  href="#upload"
                  className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-5 text-lg font-bold text-white shadow-xl shadow-orange-300/40 transition hover:scale-[1.02]"
                >
                  Generate Free Preview First
                </a>
              )}
            </div>

            <p className="mt-4 text-sm text-[#823616]/70">
              Instant PDF access • Secure payment • Personalized insight
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#f1b739] bg-white px-4 py-2 text-sm text-[#9b3d08] shadow-sm">
                ✨ Detailed Full Report
              </div>

              <div className="rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm text-[#087c54] shadow-sm">
                🌿 Traditional Palmistry Inspired
              </div>

              <div className="rounded-full border border-[#f1b739] bg-white px-4 py-2 text-sm text-[#9b3d08] shadow-sm">
                📄 Downloadable PDF
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-[#f6b94b]/10 blur-2xl" />

            <div className="relative rounded-[32px] border border-[#eadcc6] bg-white/70 p-8 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-transparent via-transparent to-[#fff8e8]/90 backdrop-blur-[2px]" />

              <div className="relative space-y-6">
                <div>
                  <p className="text-sm font-medium text-[#087c54]">
                    Palm Line Observations
                  </p>
                  <div className="mt-3 h-4 w-3/4 rounded-full bg-[#f7e9ce]" />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#f36b05]">
                    Love Compatibility
                  </p>
                  <div className="mt-3 h-4 w-full rounded-full bg-[#f7e9ce]" />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#c77c12]">
                    Wealth & Career Direction
                  </p>
                  <div className="mt-3 h-4 w-2/3 rounded-full bg-[#f7e9ce]" />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#087c54]">
                    Emotional Pattern Reading
                  </p>
                  <div className="mt-3 h-4 w-5/6 rounded-full bg-[#f7e9ce]" />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#f36b05]">
                    Life Path Guidance
                  </p>
                  <div className="mt-3 h-4 w-4/5 rounded-full bg-[#f7e9ce]" />
                </div>
              </div>

              <div className="relative mt-10 rounded-2xl border border-[#72dfb0] bg-[#e8fff4] p-5">
                <p className="text-sm font-medium leading-6 text-[#087c54]">
                  Your full report includes palm trait observations, emotional
                  tendencies, love patterns, career direction, wealth energy,
                  and personal guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}