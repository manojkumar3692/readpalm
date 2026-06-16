import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://readpalm.in";

  const pages = [
    "",

    "/ai-palm-reading",
    "/palm-reading-report",

    // SEO Landing Pages
    "/free-palm-reading",
    "/online-palm-reading",
    "/palm-reading-by-photo",
    "/love-palm-reading",
    "/career-palm-reading",
    "/palm-reading-india",
    "/palm-reading-chennai",

    // Blog Pages
    "/blog/heart-line-meaning",
    "/blog/life-line-meaning",
    "/blog/fate-line-meaning",

    // Legal Pages
    "/privacy-policy",
    "/terms",
    "/refund-policy",
    "/shipping-policy",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),

    changeFrequency:
      page === ""
        ? "daily"
        : page.startsWith("/blog")
        ? "monthly"
        : "weekly",

        priority:
        page === ""
          ? 1.0
          : ["/ai-palm-reading", "/palm-reading-report"].includes(page)
          ? 0.95
          : page.includes("palm-reading")
          ? 0.9
          : page.startsWith("/blog")
          ? 0.8
          : 0.5,
  }));
}