import type { Metadata } from "next";
import SEOLandingPage from "@/components/SEOLandingPage";

export const metadata: Metadata = {
  title: "Career Palm Reading | Fate Line & Work Direction",
  description:
    "Get a career palm reading online. Explore fate line, ambition, leadership signs, work patterns, and career direction through palmistry.",
  alternates: { canonical: "/career-palm-reading" },
};

export default function CareerPalmReadingPage() {
  return (
    <SEOLandingPage
      badge="Career Palm Reading"
      title="Career Palm Reading Online"
      description="Discover palmistry-inspired insights about career direction, ambition, leadership, and work energy."
      cta="Start Career Palm Reading"
      sections={[
        {
          heading: "What Is Career Palm Reading?",
          paragraphs: [
            "Career palm reading focuses on work direction, ambition, responsibility, discipline, leadership, and major changes in professional life. In palmistry, the fate line is often connected with career path and life direction.",
            "PALM creates a career-focused reading from your palm photo, giving you a personalized interpretation in simple language.",
          ],
        },
        {
          heading: "Fate Line and Career Direction",
          paragraphs: [
            "The fate line is traditionally associated with responsibility, career movement, timing of life changes, and a person’s relationship with work. A clear, broken, faint, or changing fate line may be interpreted differently in palmistry.",
            "Your report may also consider the head line, hand shape, palm mounts, and visible patterns that suggest decision-making style, leadership energy, creativity, or practical focus.",
          ],
        },
        {
          heading: "Work, Wealth Energy and Strengths",
          paragraphs: [
            "A career palm reading can help you reflect on natural strengths, motivation style, and the kind of work environment where you may feel more aligned.",
            "PALM does not provide financial guarantees or professional advice. The reading is for entertainment, reflection, and self-awareness.",
          ],
        },
      ]}
    />
  );
}