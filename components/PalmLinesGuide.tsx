"use client";

import { useState } from "react";

const lines = [
  {
    id: "heart",
    name: "Heart Line",
    position: "left-[42%] top-[27%]",
    color: "bg-[#f36b05]",
    title: "Heart Line",
    text: "The heart line is associated with emotions, affection, trust, and relationship patterns.",
  },
  {
    id: "head",
    name: "Head Line",
    position: "left-[48%] top-[42%]",
    color: "bg-[#087c54]",
    title: "Head Line",
    text: "The head line is linked with thinking style, decision-making, focus, and mental clarity.",
  },
  {
    id: "life",
    name: "Life Line",
    position: "left-[34%] top-[58%]",
    color: "bg-[#c77c12]",
    title: "Life Line",
    text: "The life line is traditionally read for vitality, grounding, resilience, and life energy.",
  },
  {
    id: "fate",
    name: "Fate Line",
    position: "left-[55%] top-[62%]",
    color: "bg-[#72dfb0]",
    title: "Fate Line",
    text: "The fate line is often connected with career direction, responsibility, ambition, and life path changes.",
  },
];

export default function PalmLinesGuide() {
  const [active, setActive] = useState(lines[0]);

  return (
<section id="palm-lines" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="inline-flex rounded-full border border-[#72dfb0] bg-[#e8fff4] px-4 py-2 text-sm font-medium text-[#087c54]">
            Palm Line Guide
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#421b0d] md:text-6xl">
            Understand the Lines on Your Palm
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#823616]">
            Palmistry studies major palm lines such as the heart line, head
            line, life line, and fate line to explore emotional patterns,
            personality traits, and life direction.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-[#eadcc6] bg-gradient-to-br from-[#fffaf0] to-[#f7e9ce] p-8 shadow-2xl shadow-orange-100/40">
            <div className="absolute inset-6 rounded-[2rem] border border-[#eadcc6]/70" />

            <svg
              viewBox="0 0 260 340"
              className="relative h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128 318C85 318 55 285 55 238V130C55 108 69 94 88 94C96 94 103 97 108 102V62C108 44 119 32 134 32C149 32 160 44 160 62V105C165 99 173 96 181 98C195 101 204 113 204 129V165C209 160 216 158 224 160C238 164 246 176 244 191L236 252C231 292 195 318 128 318Z"
                fill="#fff8e8"
                stroke="#823616"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M85 128C112 145 145 146 183 130"
                stroke="#f36b05"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M82 173C120 165 154 173 194 196"
                stroke="#087c54"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M95 210C80 240 90 280 126 300"
                stroke="#c77c12"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M145 208C150 245 148 274 140 302"
                stroke="#72dfb0"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            {lines.map((line) => (
              <button
                key={line.id}
                onClick={() => setActive(line)}
                className={`absolute ${line.position} h-5 w-5 rounded-full ${line.color} shadow-lg ring-4 ring-white transition hover:scale-125`}
                aria-label={line.name}
              />
            ))}
          </div>

          <div>
            <div className="rounded-[2rem] border border-[#eadcc6] bg-white/75 p-8 shadow-xl shadow-orange-100/30">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#087c54]">
                Selected Line
              </p>

              <h3 className="mt-4 text-4xl font-bold text-[#421b0d]">
                {active.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-[#823616]">
                {active.text}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {lines.map((line) => (
                  <button
                    key={line.id}
                    onClick={() => setActive(line)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                      active.id === line.id
                        ? "border-[#087c54] bg-[#e8fff4] text-[#087c54]"
                        : "border-[#eadcc6] bg-[#fff8e8] text-[#823616] hover:bg-[#fff2cc]"
                    }`}
                  >
                    {line.name}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#823616]/70">
              This guide is educational and palmistry-inspired. Your full report
              interprets your uploaded palm image in a personalized way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}