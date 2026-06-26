// app/company/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Company",   url: "/company"   },
];

const cardData = [
  {
    title: "Leadership & Team",
    description: "Meet the brains behind our unique services, where knowledge, teamwork, and a passion for solving problems define all we do.",
    img: "/assets/images/resources/company1.png",
    ctr_url: "/leadership-team",
  },
  {
    title: "Services",
    description: "Our team provides comprehensive process engineering services, customized to meet the needs of diverse manufacturing processes across industries.",
    img: "/assets/images/resources/company2.png",
    ctr_url: "/services",
  },
  {
    title: "Encapsulation Technology",
    description: "AI-powered encapsulation and precision technology. Efficient, green, and performance driven.",
    img: "/assets/images/resources/company3.png",
    ctr_url: "/encapsulation-technology",
  },
  {
    title: "Our Other Brands",
    description: "Discover our family of specialty brands, built for providing quality innovations.",
    img: "/assets/images/resources/company4.png",
    ctr_url: "/our-other-brands",
  },
  {
    title: "Careers",
    description: "Join a team shaping the future of manufacturing technology. Grow with us to create a greater impact.",
    img: "/assets/images/resources/company5.png",
    ctr_url: "/careers",
  },
];

const CompanyPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Company Success Starts | Umang Engineering",
  description: "Achieve remarkable success with Umang Engineering. Learn how our expertise in process engineering can transform your business and drive growth.",
  alternates: {
    canonical: "https://www.umangengineering.com/company",
  },
};

// ---- Page ----
export default function CompanyPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CompanyPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Company"
        BannerImg="resources/company-banner.png"
        BannerHeading="Company"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} justifyContent={{ xs: "space-around", md: "start" }}>
          {cardData.map((data, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <CommonCardsOne cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}