// app/resources/page.tsx

import { Container } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { ResourcesCards } from "@/components/UI/ResourcesComponent/ResourcesCards";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
];

const cardData = [
  {
    title: "Media",
    description: "Gain access to our blogs, informative videos, magazines, news updates, exhibition highlights, and insights into our sustainability initiatives, all in one place.",
    image: "/assets/images/resources/media.png",
    url: "/media",
  },
  {
    title: "Capabilities",
    description: "From advanced manufacturing and quality control to co-development and white-label solutions, we deliver end-to-end expertise.",
    image: "/assets/images/resources/capabilities.png",
    url: "/capabilities",
  },
  {
    title: "Information",
    description: "Everything you need to know — from FAQs and policies to our mission of driving innovation with integrity.",
    image: "/assets/images/resources/information.png",
    url: "/information",
    border: true,
  },
  {
    title: "Downloads",
    description: "Explore & download our latest brochures, flyers, and publications in one place",
    image: "/assets/images/resources/downloads.png",
    url: "/downloads",
    border: true,
  },
  {
    title: "Company",
    description: "Meet our team, explore what we do, and discover how you can grow with us.",
    image: "/assets/images/resources/company.png",
    url: "/company",
  },
];

const ResourcesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Get the Best Resources Now | Umang Nutraceuticals",
  description: "Explore Umang Nutraceuticals for premier resources that empower your understanding of pharma. Start your journey to excellence now!",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/resources",
  },
};

// ---- Page ----
export default function ResourcesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ResourcesPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Resources"
        BannerImg="resources/resource.webp"
        BannerHeading="Resources"
        BannerCaption="Our History, Present & Future"
      />

      <Container>
        <ResourcesCards cardData={cardData} />
      </Container>
    </>
  );
}