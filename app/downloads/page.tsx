// app/downloads/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"           },
  { title: "Resources", url: "/resources"  },
  { title: "Downloads", url: "/downloads"  },
];

const cardData = [
  {
    title: "Catalogue & Brochure",
    img: "/assets/images/resources/catalog.webp",
    ctr_url: "/catalogue-brochures",
  },
  {
    title: "Flyers",
    img: "/assets/images/resources/f.webp",
    ctr_url: "/flyers",
  },
  // {
  //   title: "Ingredients Books",
  //   img: "/assets/images/resources/books.webp",
  //   ctr_url: "/ingredient-books",
  // },
  // {
  //   title: "Formulations",
  //   img: "/assets/images/resources/formulation-book.webp",
  //   ctr_url: "/formulations",
  // },
  // {
  //   title: "White Papers",
  //   img: "/assets/images/resources/downloads5.png",
  //   ctr_url: "/white-papers",
  // },
  {
    title: "Case Studies",
    img: "/assets/images/resources/downloads6.png",
    ctr_url: "/case-studies",
  },
];

const DownloadsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Get The Latest Downloads | Umang Engineering",
  description: "Get the latest downloads on pharma at Umang. Enhance your research and stay informed with our up-to-date resources and expert insights.",
  alternates: {
    canonical: "https://www.umangengineering.com/downloads",
  },
};

// ---- Page ----
export default function DownloadsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DownloadsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Downloads"
        BannerImg="resources/Downloads-banner.png"
        BannerHeading="Downloads"
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