"use client";

import { motion } from "framer-motion";

type Props = {
  result: {
    greeting?: string;
    personality: string;
    love: string;
    career: string;
    characterSignals?: string[];
    conversionHook?: string;
  } | null;
};

export default function FreeSnapshot({ result }: Props) {
  if (!result) return null;

  const signals =
    result.characterSignals?.length
      ? result.characterSignals
      : [
          "Emotionally deep",
          "Selective with trust",
          "Strong inner drive",
        ];

  return (
    <section id="free-preview" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54] shadow-sm">
            Your Free Palm Preview
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#421b0d] md:text-6xl">
            {result.greeting || "Your Palm Has a Message"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#823616]">
            Read these first signals carefully. If they feel true to you, your
            complete palm report may reveal much deeper patterns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-10 rounded-[32px] border border-[#72dfb0] bg-[#e8fff4] p-7 shadow-xl shadow-green-100/40"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087c54]">
            Character Signals
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#72dfb0] bg-white px-4 py-2 text-sm font-semibold text-[#087c54]"
              >
                ✦ {signal}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Core Nature",
              content: result.personality,
              color: "border-[#eadcc6] bg-white/70",
            },
            {
              title: "Love & Emotion",
              content: result.love,
              color: "border-[#72dfb0] bg-[#f9fffc]",
            },
            {
              title: "Career Energy",
              content: result.career,
              color: "border-[#eadcc6] bg-white/70",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`rounded-[28px] border p-7 shadow-xl backdrop-blur ${item.color}`}
            >
              <h3 className="text-2xl font-bold text-[#421b0d]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#823616]">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-[32px] border border-[#eadcc6] bg-white/80 p-8 shadow-2xl"
        >
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087c54]">
              Does This Feel True?
            </p>

            <h3 className="mt-4 text-3xl font-bold text-[#421b0d]">
              {result.conversionHook ||
                "If this preview feels connected to you, your full report may reveal the deeper story behind your palm."}
            </h3>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Relationship Compatibility",
                "Hidden Emotional Patterns",
                "Wealth & Career Direction",
                "Life Path Guidance",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#fff8e8] p-5">
                  <p className="font-semibold text-[#421b0d]">{item}</p>
                  <div className="mt-3 h-3 w-4/5 rounded-full bg-[#eadcc6]" />
                </div>
              ))}
            </div>

            <a
              href="#report"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f36b05] px-8 py-4 font-bold text-white shadow-xl shadow-orange-300/40 md:w-auto"
            >
              Unlock Full Report for ₹99
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}