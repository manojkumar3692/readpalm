"use client";

import { useState } from "react";
import PalmUploader from "@/components/PalmUploader";
import FreeSnapshot from "@/components/FreeSnapshot";
import PremiumReport from "@/components/PremiumReport";

type PalmReadingResult = {
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

export default function PalmReadingTool() {
  const [result, setResult] = useState<PalmReadingResult | null>(null);

  return (
    <>
      <PalmUploader setResult={setResult} />

      <FreeSnapshot result={result?.teaser ?? null} />

      {result && <PremiumReport result={result} />}
    </>
  );
}