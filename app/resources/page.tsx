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
    description: "Discover engineering insights, industry trends, technical resources, exhibition highlights, company updates, and sustainability initiatives—all in one place.",
    image: "/assets/images/resources/media.png",
    url: "/media",
  },
  {
    title: "Capabilities",
    description: "From innovative equipment design to integrated process solutions and ongoing technical support, we bring end-to-end engineering expertise to manufacturers worldwide.",
    image: "/assets/images/resources/capabilities.png",
    url: "/capabilities",
  },
  {
    title: "Information",
    description: "Everything you need to know, from FAQs and policies to our commitment to engineering excellence, innovation, and customer success.",
    image: "/assets/images/resources/information.png",
    url: "/information",
    border: true,
  },
  {
    title: "Downloads",
    description: "Browse & download our latest brochures, flyers, and publications in one place.",
    image: "/assets/images/resources/downloads.png",
    url: "/downloads",
    border: true,
  },
  {
    title: "Company",
    description: "Know about our team, find what we do, and discover how we can help you achieve your engineering goals.",
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
  title: "Get the Best Resources Now | Umang Engineering",
  description: "Explore Umang Engineering for premier resources that empower your understanding of engineering. Start your journey to excellence now!",
  alternates: {
    canonical: "https://www.umangengineering.com/resources",
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