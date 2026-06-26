// app/videos/page.tsx

import { BannerCommon } from "@/components/UI/BannerCommon";
import { VideoCards } from "@/components/UI/ResourcesComponent/VideoCards";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Media",     url: "/media"     },
  { title: "Videos",    url: "/videos"    },
];

const VideosPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Latest Encapsulation Technology Videos | Umang Engineering",
  description: "Stay updated on encapsulation technology! Explore Umang Engineering's latest videos featuring advancements, insights, and expert discussions in the field.",
  alternates: {
    canonical: "https://www.umangengineering.com/videos",
  },
};

// ---- Page ----
export default function VideosPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VideosPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Videos"
        BannerImg="resources/resource-video.webp"
        BannerHeading="Videos"
        BannerCaption="Our Story and Product Line"
      />

      <VideoCards />
    </>
  );
}