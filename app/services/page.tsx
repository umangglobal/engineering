// app/services/page.tsx

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
  { title: "Services",  url: "/services"  },
];

const cardData = [
  {
    title: "Contract Manufacturing",
    description: "End-to-end manufacturing solutions designed to your specifications for quality, efficiency, and scalability.",
    img: "/assets/images/resources/services1.png",
    ctr_url: "/bulk-contract-manufacturing",
    ctr: { ctr_name: "Know More", ctr_url: "/bulk-contract-manufacturing" },
  },
  {
    title: "Customization",
    description: "Encapsulated ingredients with custom colors, sizes, and formats to fit your brand and functional requirements.",
    img: "/assets/images/resources/services2.png",
    ctr_url: "/customize",
    ctr: { ctr_name: "Customize Active", ctr_url: "/customize" },
  },
  {
    title: "New Product Development",
    description: "From concept to market, our experts help you develop innovative products with technical accuracy.",
    img: "/assets/images/resources/services3.png",
    ctr_url: "/manufacturing-site-transfer-projects",
    ctr: { ctr_name: "Check Products", ctr_url: "/manufacturing-site-transfer-projects" },
  },
  {
    title: "White Labelling",
    description: "Ready-to-launch products with your brand name, leveraging our trusted formulas and manufacturing expertise.",
    img: "/assets/images/resources/services4.png",
    ctr_url: "/white-labelling-co-branding",
    ctr: { ctr_name: "White Label Products", ctr_url: "/white-labelling-co-branding" },
  },
  {
    title: "Research & Development",
    description: "State-of-the-art R&D work on new ingredients, delivery systems, and performance improvements for future products.",
    img: "/assets/images/resources/services5.png",
    ctr_url: "/co-development-project",
    ctr: { ctr_name: "Our R&D Development", ctr_url: "/co-development-project" },
  },
];

const ServicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Expert Services You Can Trust | Umang Engineering",
  description: "Trust Umang Engineering for expert services in particle technology. Our dedicated professionals provide innovative solutions to meet your scientific needs.",
  alternates: {
    canonical: "https://www.umangengineering.com/services",
  },
};

// ---- Page ----
export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ServicesPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Services"
        BannerImg="resources/services-banner.png"
        BannerHeading="Services"
        BannerCaption="Our Expertise"
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          {cardData.map((data, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <CommonCardsOne cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}