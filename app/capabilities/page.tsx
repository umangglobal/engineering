// app/capabilities/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",         url: "/"              },
  { title: "Resources",    url: "/resources"     },
  { title: "Capabilities", url: "/capabilities"  },
];

const cardData = [
  {
    title: "Bulk & Contract Manufacturing",
    description: "A trusted manufacturer of advanced process equipment, delivering high-performance engineering solutions for pharmaceutical, nutraceutical, food, chemical, and allied industries.",
    img: "/assets/images/resources/cap1.png",
    ctr_url: "/bulk-contract-manufacturing",
  },
  {
    title: "Quality Control",
    description: "Our strict quality systems and precise manufacturing practices guarantee consistent performance, durability, and adherence to worldwide industry standards.",
    img: "/assets/images/resources/cap2.png",
    ctr_url: "/quality-control",
  },
  {
    title: "Co-Development Projects",
    description: "Through global collaboration with manufacturers, we offer customized solutions for equipment and processes, leveraging our engineering expertise, technical advice, and project management.",
    img: "/assets/images/resources/cap3.png",
    ctr_url: "/co-development-project",
  },
  {
    title: "Manufacturing Site Transfer Projects",
    description: "Umang Global Group supports site transfer projects for non-regulated markets, often starting at the development stage with Exhibit Batches, led by dedicated project managers for seamless execution.",
    img: "/assets/images/resources/cap4.png",
    ctr_url: "/manufacturing-site-transfer-projects",
  },
  {
    title: "White Labelling & Co Branding",
    description: "From your vision to marketplace success, we offer the power of robust manufacturing, scalability, and effective inventory control.",
    img: "/assets/images/resources/cap5.png",
    ctr_url: "/white-labelling-co-branding",
  },
];

const CapabilitiesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Engineering & Manufacturing Capabilities | Umang Engineering",
  description: "Discover UMANG Global Equipment's advanced engineering, manufacturing, automation, and process solutions. We provide high-quality equipment and turnkey systems for pharmaceutical and nutraceutical production.",
  alternates: {
    canonical: "https://www.umangengineering.com/capabilities",
  },
};

// ---- Page ----
export default function CapabilitiesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CapabilitiesPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Capabilities"
        BannerImg="resources/resource-capabilities.webp"
        BannerHeading="Capabilities"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} justifyContent={{ xs: "space-around", md: "start" }}>
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