import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: [
      "https://www.umangengineering.com/sitemap.xml",
      "https://www.umangengineering.com/video-sitemap.xml",
    ],
  };
}