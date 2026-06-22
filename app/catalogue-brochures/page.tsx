// app/catalogue-brochures/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                url: "/"                     },
  { title: "Resources",           url: "/resources"            },
  { title: "Downloads",           url: "/downloads"            },
  { title: "Catalogue Brochures", url: "/catalogue-brochures"  },
];

const cardData = [
  {
    title: "Nutraceutical Brochure",
    description: "Explore our range of encapsulated nutraceutical ingredients, available in multiple delivery formats for diverse application purposes.",
    img: "/assets/images/resources/catalog.webp",
    ctr_url: "/assets/pdf/Nutraceutical.pdf",
  },
  {
    title: "Sample Brochure: Nutraceutical",
    description: "Get actual visuals of our finished encapsulated products to understand their appearance and behavior in various formulations. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample.webp",
    ctr_url: "/assets/pdf/nutra-sample.pdf",
  },
  // {
  //   title: "Sample Brochure: Excipients",
  //   description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
  //   img: "/assets/images/resources/sample1.webp",
  //   ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  // },
];

const CatalogueBrochuresPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Catalogue Brochures | Umang Nutraceuticals",
  description: "Explore Umang Nutraceuticals's comprehensive catalogue brochures, showcasing innovative solutions and cutting-edge research in particle technology.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/catalogue-brochures",
  },
};

// ---- Page ----
export default function CatalogueBrochuresPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CatalogueBrochuresPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Catalogue Brochures"
        BannerImg="resources/CatalogueBrochures-banner.png"
        BannerHeading="Catalogue Brochures"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} justifyContent={{ xs: "space-around", md: "start" }}>
          {cardData.map((data, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6}} key={index}>
              <CommonCardsOne cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}