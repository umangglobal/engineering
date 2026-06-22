// app/our-other-brands/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",            url: "/"                  },
  { title: "Resources",       url: "/resources"         },
  { title: "Company",         url: "/company"           },
  { title: "Our Other Brands",url: "/our-other-brands"  },
];

const cardData = [
  {
    title: "Umang Consumer Products",
    description: "We also offer White Labelling, Finished Products & Bulk Ordering",
    img: "/assets/images/resources/brands1.png",
    ctr_url: "https://www.umangconsumer.com",
    ctr: {
      ctr_name: "Visit Website",
      ctr_url: "https://www.umangconsumer.com",
    },
  },
  {
    title: "Beyond Tablets",
    description: "Nutraceutical Encapsulated Capsules Available for End Consumers",
    img: "/assets/images/resources/brands2.png",
    ctr_url: "https://www.beyond-tablets.com",
    ctr: {
      ctr_name: "Visit Website",
      ctr_url: "https://www.beyond-tablets.com",
    },
  },
  {
    title: "Aadar",
    description: "Our Ayurvedic & Herbal Wellness Brand Focus on Men's Sexual Wellness",
    img: "/assets/images/resources/brands3.png",
    ctr_url: "https://www.aadar.co",
    ctr: {
      ctr_name: "Visit Website",
      ctr_url: "https://www.aadar.co",
    },
  },
];

const OurOtherBrandsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Find Our Other Brands | Umang Nutraceuticals",
  description: "Explore the other brands of Umang Nutraceuticals. Innovative offerings and find the perfect solutions for your pharma needs.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/our-other-brands",
  },
};

// ---- Page ----
export default function OurOtherBrandsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OurOtherBrandsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Our Other Brands"
        BannerImg="resources/Our-Other-Brands-banner.png"
        BannerHeading="Our Other Brands"
        BannerCaption="Branded Products"
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} sx={{ mt: 3, justifyContent: { xs: "center", md: "left" } }}>
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