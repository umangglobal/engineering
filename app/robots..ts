import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: [
      "https://www.umangnutraceuticals.com/sitemap.xml",
      "https://www.umangnutraceuticals.com/video-sitemap.xml",
    ],
  };
}