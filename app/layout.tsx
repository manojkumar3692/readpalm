import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://readpalm.in"),
  title: {
    default:
      "PALM AI | Free Palm Reading Online by Photo",
    template: "%s | PALM AI",
  },
  description:
    "Get a free palm reading online by uploading your palm photo. Discover palmistry insights about love, career, personality, life path, and download a full personalized palm report.",
  keywords: [
    "free palm reading",
    "AI palm reading",
    "online palm reading",
    "palm reading by photo",
    "instant palm reading",
    "palmistry reading",
    "palm reading online free",
    "best palm reading India",
    "palm reading Chennai",
    "palm reading near me",
    "love palm reading",
    "career palm reading",
    "hasta rekha reading online",
  ],
  authors: [{ name: "PALM AI" }],
  creator: "PALM AI",
  publisher: "PALM AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PALM AI | Free AI Palm Reading Online",
    description:
      "Upload your palm photo and get an instant AI-powered palmistry reading for love, career, personality, and life path.",
    url: "https://readpalm.in",
    siteName: "PALM AI",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "PALM AI | Free AI Palm Reading Online",
    description:
      "Get a free palm reading online by photo and unlock your full personalized palmistry report.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">

      <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-00H4BFFPK1"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-00H4BFFPK1');
  `}
</Script>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}