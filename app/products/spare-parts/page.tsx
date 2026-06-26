// app/catalogue-brochures/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                url: "/"                     },
  { title: "Product",           url: "/product"            },
  { title: "Spare Parts",         url: "/spare-parts"          },
];

const cardData = [
  {
    title: "Chequered Plate",
    description: "Explore our range of encapsulated nutraceutical ingredients, available in multiple delivery formats for diverse application purposes.",
    img: "/assets/images/resources/catalog.webp",
    ctr_url: "/assets/pdf/Nutraceutical.pdf",
  },
  {
    title: "Circle feeder drum",
    description: "Get actual visuals of our finished encapsulated products to understand their appearance and behavior in various formulations. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample.webp",
    ctr_url: "/assets/pdf/nutra-sample.pdf",
  },
  {
    title: "Cone mesh",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Die roller mesh",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Dome Mesh",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Extrusion Chamber",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "filter bag",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Radial mesh",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Screw",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "1 mm cone mesh",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "1 mm Radial Mesh",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Axial Mesh",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Axial Mesh holder",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
  {
    title: "Axial Pressing Cam",
    description: "Experience the look and feel of our wide range of Excipients, Ingredients, Edible items and encapsulated solutions for Various segments. Contact us to request a physical brochure.",
    img: "/assets/images/resources/sample1.webp",
    ctr_url: "/assets/pdf/excipients-four-fold.pdf",
  },
];

const SparePartsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Spare Parts | Umang Engineering",
  description: "Explore Umang Engineering's comprehensive spare parts catalog, showcasing high-quality components for your manufacturing needs.",
  alternates: {
    canonical: "https://www.umangengineering.com/spare-parts",
  },
};

// ---- Page ----
export default function SparePartsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SparePartsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Spare Parts"
        BannerImg="resources/SpareParts-banner.png"
        BannerHeading="Spare Parts"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} justifyContent={{ xs: "space-around", md: "start" }}>
          {cardData.map((data, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 4}} key={index}>
              <CommonCardsOne cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}