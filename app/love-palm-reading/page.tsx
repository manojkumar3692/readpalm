import type { Metadata } from "next";
import SEOLandingPage from "@/components/SEOLandingPage";

export const metadata: Metadata = {
  title: "Love Palm Reading | Relationship & Heart Line Insights",
  description:
    "Get a love palm reading online. Explore heart line meanings, relationship patterns, emotional tendencies, and compatibility insights.",
  alternates: { canonical: "/love-palm-reading" },
};

export default function LovePalmReadingPage() {
  return (
    <SEOLandingPage
      badge="Love Palm Reading"
      title="Love Palm Reading Online"
      description="Explore what your palm may suggest about love, emotions, trust, and relationship patterns."
      cta="Start Love Palm Reading"
      sections={[
        {
          heading: "What Is Love Palm Reading?",
          paragraphs: [
            "Love palm reading focuses on emotional patterns, relationship tendencies, trust, affection, and compatibility. In traditional palmistry, the heart line is one of the most important lines for understanding emotional expression.",
            "PALM creates a personalized love-focused reading from your uploaded palm photo, using palmistry-inspired interpretation in a clear and modern format.",
          ],
        },
        {
          heading: "Heart Line and Emotional Patterns",
          paragraphs: [
            "The heart line is commonly associated with affection, emotional depth, relationship choices, and how a person gives or receives love. Its length, curve, clarity, and position are often interpreted in palmistry.",
            "Your love palm reading may include insights about emotional openness, loyalty, selectiveness, communication style, and relationship expectations.",
          ],
        },
        {
          heading: "Relationship Reflection",
          paragraphs: [
            "A love palm reading should be experienced as a reflective tool, not as a fixed prediction. It can help you think about how you connect, where you may need emotional clarity, and what kind of relationship energy you naturally carry.",
            "PALM readings are for entertainment and self-reflection only.",
          ],
        },
      ]}
    />
  );
}