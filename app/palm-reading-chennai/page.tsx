import type { Metadata } from "next";
import SEOLandingPage from "@/components/SEOLandingPage";

export const metadata: Metadata = {
  title: "Palm Reading Chennai | Online Palmistry Reading",
  description:
    "Looking for palm reading in Chennai? Upload your palm photo and get an online palmistry-inspired reading for love, career, and life path.",
  alternates: { canonical: "/palm-reading-chennai" },
};

export default function PalmReadingChennaiPage() {
  return (
    <SEOLandingPage
      badge="Palm Reading Chennai"
      title="Palm Reading in Chennai, Online"
      description="Get a palmistry-inspired reading from Chennai or anywhere by uploading your palm photo online."
      cta="Start Online Palm Reading"
      sections={[
        {
          heading: "Looking for Palm Reading in Chennai?",
          paragraphs: [
            "Many people search for palm reading in Chennai, palmists near me, or online palmistry consultation when they want guidance, reflection, or curiosity-based insight. PALM gives you a modern way to begin with just a palm photo.",
            "You can upload your palm image and receive a personalized preview without needing to visit a physical location.",
          ],
        },
        {
          heading: "Online Palmistry for Love, Career and Life Path",
          paragraphs: [
            "PALM readings are inspired by traditional palmistry elements such as the heart line, head line, life line, fate line, hand shape, and mounts. These are interpreted for personality, relationships, emotional tendencies, career direction, and life path reflection.",
            "This page is especially useful for people searching for best palm reading Chennai, palm reading near me Chennai, online palmistry Chennai, or palm reading by photo.",
          ],
        },
        {
          heading: "Instant Digital Palm Report",
          paragraphs: [
            "Start with a free palm reading preview. If the reading resonates, you can unlock your full personalized report with detailed sections and a downloadable PDF.",
            "PALM readings are for entertainment and self-reflection only and should not be treated as professional or guaranteed future advice.",
          ],
        },
      ]}
    />
  );
}