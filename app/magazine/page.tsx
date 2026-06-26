// app/magazine/page.tsx

import { BannerCommon } from "@/components/UI/BannerCommon";
import { MagazineCards } from "@/components/UI/ResourcesComponent/MagazineCards";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Media",     url: "/media"     },
  { title: "Magazine",  url: "/magazine"  },
];

const MagazinePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Future of Magazine Publishing | Umang Engineering",
  description: "Explore the future of magazine publishing with Umang Engineering. Discover innovative trends, technologies, and insights shaping the industry.",
  alternates: {
    canonical: "https://www.umangengineering.com/magazine",
  },
};

// ---- Page ----
export default function MagazinePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MagazinePageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Magazine"
        BannerImg="resources/Magazinebanner.png"
        BannerHeading="Magazine"
        BannerCaption="In-depth About Encapsulated Ingredients"
      />

      <MagazineCards />
    </>
  );
}