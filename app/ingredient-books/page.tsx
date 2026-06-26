// app/ingredient-books/page.tsx

import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import PackageProductIcon from "@/assets/icons/product/packageproduct.svg";
import WhatsappIcon from "@/assets/icons/homepage/whatsapp.svg";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",             url: "/"                  },
  { title: "Resources",        url: "/resources"         },
  { title: "Downloads",        url: "/downloads"         },
  { title: "Ingredient Books", url: "/ingredient-books"  },
];

const IngredientBooksPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

const cardData = [
  {
    title: "Body Nourishment",
    description: "Explore our range of encapsulated nutraceutical Body Nourishment ingredients.",
    img: "/assets/images/resources/body-nourishment.webp",
    ctr_url: "https://www.umangglobal.com/books/nutraceutical/body-nourishment/",
  },
  {
    title: "Immunity Booster",
    description: "Explore our range of encapsulated nutraceutical Immunity Booster ingredients.",
    img: "/assets/images/resources/immunity-booster.webp",
    ctr_url: "https://www.umangglobal.com/books/nutraceutical/immunity-booster/",
  },
  {
    title: "Weight Management",
    description: "Explore our range of encapsulated nutraceutical Weight Management ingredients.",
    img: "/assets/images/resources/weight-management.webp",
    ctr_url: "https://www.umangglobal.com/books/nutraceutical/weight-management/",
  },
  {
    title: "Men And Women Health",
    description: "Explore our range of encapsulated nutraceutical Men And Women Health ingredients.",
    img: "/assets/images/resources/men-and-women-health.webp",
    ctr_url: "https://www.umangglobal.com/books/nutraceutical/men-and-women-health/",
  },
  {
    title: "Mental Wellbeing",
    description: "Explore our range of encapsulated nutraceutical Mental Wellbeing ingredients.",
    img: "/assets/images/resources/mental-wellbeing.webp",
    ctr_url: "https://www.umangglobal.com/books/nutraceutical/mental-wellbeing/",
  },
  {
    title: "Gut Health",
    description: "Explore our range of encapsulated nutraceutical Gut Health ingredients.",
    img: "/assets/images/resources/gut-health.webp",
    ctr_url: "https://www.umangglobal.com/books/nutraceutical/gut-health/",
  },
  {
    title: "Sports Nutrition",
    description: "Explore our range of encapsulated nutraceutical Body Nourishment ingredients.",
    img: "/assets/images/resources/sports-nutrition.webp",
    ctr_url: "https://www.umangglobal.com/books/nutraceutical/sports-nutrition/",
  },
];

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Discover Essential Ingredient Books | Umang Engineering",
  description: "Discover a world of essential ingredient books at Umang Engineering. Elevate your understanding of pharma with expert insights and resources.",
  alternates: {
    canonical: "https://www.umangengineering.com/ingredient-books",
  },
};

// ---- Page ----
export default function IngredientBooksPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(IngredientBooksPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Ingredient Books"
        BannerImg="resources/IngredientBooks-banner.png"
        BannerHeading="Ingredient Books"
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