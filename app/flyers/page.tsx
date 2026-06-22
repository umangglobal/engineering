// app/flyers/page.tsx

import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import Link from "next/link";
import PackageProductIcon from "@/assets/icons/product/packageproduct.svg";
import WhatsappIcon from "@/assets/icons/homepage/whatsapp.svg";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Downloads", url: "/downloads" },
  { title: "Flyers",    url: "/flyers"    },
];

const FlyersPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

const cardData = [
  {
    title: "Encapsulated Actispheres",
    description: "Encapsulated Actispheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/actispheres.webp",
    ctr_url: "/assets/pdf/umangencapsulation-actispheres.pdf",
  },
  {
    title: "Encapsulated Aminospheres",
    description: "Encapsulated Aminospheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/aminospheres.webp",
    ctr_url: "/assets/pdf/umangencapsulation-aminospheres.pdf",
  },
  {
    title: "Encapsulated Botanispheres",
    description: "Encapsulated Botanispheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/botanispheres.webp",
    ctr_url: "/assets/pdf/umangencapsulation-botanispheres.pdf",
  },
  {
    title: "Encapsulated Caratospheres",
    description: "Encapsulated Caratospheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/caratospheres.webp",
    ctr_url: "/assets/pdf/umangencapsulation-caratospheres.pdf",
  },
  {
    title: "Encapsulated Fiberspheres",
    description: "Encapsulated Fiberspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/fiberspheres.webp",
    ctr_url: "/assets/pdf/umangencapsulation-fiberspheres.pdf",
  },
  {
    title: "Encapsulated Minospheres",
    description: "Encapsulated Minospheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/minospheres.webp",
    ctr_url: "/assets/pdf/umangencapsulation-minospheres.pdf",
  },
  {
    title: "Encapsulated Taste-masking",
    description: "Encapsulated Taste-masking in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/taste-masking.webp",
    ctr_url: "/assets/pdf/umangencapsulation-taste-masking.pdf",
  },
  {
    title: "Encapsulated Vitaspheres",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/vitaspheres.webp",
    ctr_url: "/assets/pdf/umangencapsulation-vitaspheres.pdf",
  },
];

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Design & Print Flyers Easily | Umang Nutraceuticals",
  description: "Design and print eye-catching flyers with ease at Umang Nutraceuticals. Discover user-friendly tools and professional quality for all your promotional needs.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/flyers",
  },
};

// ---- Page ----
export default function FlyersPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FlyersPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Flyers"
        BannerImg="resources/Flyers-banner.png"
        BannerHeading="Flyers"
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