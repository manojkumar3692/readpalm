import type { Metadata } from "next";
import SEOLandingPage from "@/components/SEOLandingPage";

export const metadata: Metadata = {
  title: "Palm Reading by Photo | Upload Your Palm Online",
  description:
    "Upload your palm photo and receive a personalized palmistry-inspired reading about love, career, personality, and life path.",
  alternates: { canonical: "/palm-reading-by-photo" },
};

export default function PalmReadingByPhotoPage() {
  return (
    <SEOLandingPage
      badge="Palm Reading by Photo"
      title="Palm Reading by Photo Online"
      description="Upload a clear palm photo and receive a personalized palmistry-inspired reading instantly."
      cta="Upload Palm Photo"
      sections={[
        {
          heading: "How Palm Reading by Photo Works",
          paragraphs: [
            "Palm reading by photo allows you to experience palmistry online without visiting a reader in person. You simply upload a clear image of your palm, and PALM creates a personalized reading based on visible palm lines, hand shape, and traditional palmistry concepts.",
            "The reading focuses on major features such as the heart line, head line, life line, fate line, palm mounts, and overall hand structure.",
          ],
        },
        {
          heading: "What Your Palm Photo Can Reveal",
          paragraphs: [
            "A palm photo can offer symbolic insight into emotional tendencies, thinking patterns, relationship style, personal strengths, and career direction. PALM turns these observations into a clear and easy-to-understand digital report.",
            "Your free preview gives a short glimpse, while the full report includes deeper sections on love, career, wealth energy, emotional patterns, and life path reflection.",
          ],
        },
        {
          heading: "Private and Convenient",
          paragraphs: [
            "Online palm reading is convenient because you can begin from anywhere using your phone. For best results, upload a well-lit image where your palm lines are clearly visible.",
            "PALM readings are for entertainment, self-reflection, and personal insight only, not guaranteed predictions or professional advice.",
          ],
        },
      ]}
    />
  );
}