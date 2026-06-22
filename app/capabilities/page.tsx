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
    description: "A trusted contract manufacturer for leading pharmaceutical companies, delivering audit-approved, high-quality products across diverse therapeutic segments and advanced dosage forms.",
    img: "/assets/images/resources/cap1.png",
    ctr_url: "/bulk-contract-manufacturing",
  },
  {
    title: "Quality Control",
    description: "We operate a modern QC laboratory, ensuring product purity, safety, and efficacy through rigorous testing aligned with international standards.",
    img: "/assets/images/resources/cap2.png",
    ctr_url: "/quality-control",
  },
  {
    title: "Co-Development Projects",
    description: "We partner with customers worldwide on exclusive product development, offering profit-sharing models, comprehensive regulatory support, and dedicated project leadership to ensure efficient and timely execution.",
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
    description: "From Your Vision to Market Success – We Bring Production Strength, Scalability, and Inventory Precision.",
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
  title: "Our Capabilities Explained | Umang Nutraceuticals",
  description: "Explore the capabilities of Umang Nutraceuticals. From research to application, see how our expertise in particle technology can benefit your industry.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/capabilities",
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