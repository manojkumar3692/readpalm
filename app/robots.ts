import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/success/",
        "/payment-error/",
      ],
    },
    sitemap: "https://palmai.com/sitemap.xml",
  };
}