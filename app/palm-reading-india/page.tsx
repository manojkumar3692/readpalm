import type { Metadata } from "next";
import SEOLandingPage from "@/components/SEOLandingPage";

export const metadata: Metadata = {
  title: "Palm Reading India | Online Palmistry by Photo",
  description:
    "Get online palm reading in India by uploading your palm photo. Explore palmistry-inspired insights about love, career, personality, and life path.",
  alternates: { canonical: "/palm-reading-india" },
};

export default function PalmReadingIndiaPage() {
  return (
    <SEOLandingPage
      badge="Palm Reading India"
      title="Online Palm Reading in India"
      description="Experience a modern palmistry reading from anywhere in India by uploading your palm photo."
      cta="Start Palm Reading"
      sections={[
        {
          heading: "Palm Reading in India, Now Online",
          paragraphs: [
            "Palmistry has a long cultural presence in India, where people often look to palm lines for reflection on personality, relationships, career, and life direction. PALM brings this experience online in a simple digital format.",
            "Instead of searching for a palm reader near you, you can upload a palm photo and receive a personalized palmistry-inspired preview instantly.",
          ],
        },
        {
          heading: "Indian Palmistry-Inspired Interpretation",
          paragraphs: [
            "PALM readings are inspired by traditional palmistry concepts such as the heart line, head line, life line, fate line, hand shape, and mounts. The result is written in a clear, modern style for easy understanding.",
            "Whether you are in Chennai, Mumbai, Bengaluru, Delhi, Hyderabad, Pune, Dubai, or anywhere worldwide, you can begin your reading online.",
          ],
        },
        {
          heading: "Free Preview and Full Report",
          paragraphs: [
            "Start with a free palm reading preview, then unlock a full personalized report if you want deeper insight into love, career, emotional patterns, wealth energy, and life path.",
            "The report is for entertainment and self-reflection only, not guaranteed future prediction or professional advice.",
          ],
        },
      ]}
    />
  );
}