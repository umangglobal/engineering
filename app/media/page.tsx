// app/media/page.tsx

import { Container } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { ResourcesCards } from "@/components/UI/ResourcesComponent/ResourcesCards";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Media",     url: "/media"     },
];

const cardData = [
  {
    title: "Blogs",
    image: "/assets/images/resources/blogs.png",
    description: "Discover the science behind what goes into your medicine.",
    url: "/blogs",
  },
  {
    title: "Videos",
    image: "/assets/images/resources/videos.png",
    description: "Know formulation-enhancing innovations with our expert videos",
    url: "/videos",
  },
  {
    title: "Magazine",
    image: "/assets/images/resources/magazine.png",
    description: "Deeper insights for smarter pharmaceutical decisions",
    url: "/magazine",
  },
  {
    title: "News & Exhibitions",
    image: "/assets/images/resources/news.png",
    description: "Latest insights on innovative pharmaceutical solutions",
    url: "/news-exhibition",
  },
  {
    title: "Sustainability",
    image: "/assets/images/resources/sustainability.png",
    description: "Every small change can make a big difference towards nature.",
    url: "/sustainability",
  },
];

const MediaPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Content Innovative Media Strategies | Umang Nutraceuticals",
  description: "Transform your media approach with Umang Nutraceuticals. Learn innovative strategies that captivate audiences and elevate your content to new heights.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/media",
  },
};

// ---- Page ----
export default function MediaPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MediaPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Media"
        BannerImg="resources/resource-media.webp"
        BannerHeading="Media"
        BannerCaption="Insights on encapsulated drug ingredients."
      />

      <Container>
        <ResourcesCards cardData={cardData} />
      </Container>
    </>
  );
}