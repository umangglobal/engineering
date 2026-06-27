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
    description: "Industrial-grade chequered plates engineered for superior grip, durability, and long-lasting performance",
    img: "/assets/images/products/spare-parts/Chequered-Plate.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Circle feeder drum",
    description: "Circle feeder drums designed for smooth, uniform, and continuous material feeding.",
    img: "/assets/images/products/spare-parts/Circle-feeder-drum.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Cone mesh",
    description: "Cone mesh designed for efficient screening, uniform particle sizing, and reliable material processing.",
    img: "/assets/images/products/spare-parts/Cone-mesh.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Die roller mesh",
    description: "Die roller mesh designed for uniform extrusion, consistent material flow, and long-lasting performance.",
    img: "/assets/images/products/spare-parts/Die-roller-mesh.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Dome Mesh",
    description: "Dome mesh designed for efficient screening, uniform material flow, and long-lasting performance",
    img: "/assets/images/products/spare-parts/Dome-Mesh.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Extrusion Chamber",
    description: "Extrusion chambers designed for uniform material flow, efficient processing, and consistent extrusion performance.",
    img: "/assets/images/products/spare-parts/Extrusion-Chamber.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "filter bag",
    description: "Filter bags designed for high-efficiency filtration, reliable particle retention, and long-lasting performance.",
    img: "/assets/images/products/spare-parts/filter-bag.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Radial mesh",
    description: "Radial mesh designed for uniform material flow, efficient extrusion, and long-lasting performance.",
    img: "/assets/images/products/spare-parts/Radial-mesh.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Screw",
    description: "Extruder screws designed for efficient material conveying, uniform extrusion, and long-lasting performance.",
    img: "/assets/images/products/spare-parts/Screw.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "1 mm cone mesh",
    description: "1 mm cone mesh designed for accurate particle sizing, efficient screening, and consistent material processing.",
    img: "/assets/images/products/spare-parts/1-mm-cone-mesh.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "1 mm Radial Mesh",
    description: "1 mm radial mesh designed for uniform material flow, efficient screening, and consistent extrusion performance.",
    img: "/assets/images/products/spare-parts/1-mm-Radial-Mesh.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Axial Mesh",
    description: "Axial mesh designed for uniform material flow, efficient extrusion, and long-lasting performance.",
    img: "/assets/images/products/spare-parts/Axial-Mesh.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Axial Mesh holder",
    description: "Axial mesh holders designed for secure mesh support, precise alignment, and consistent extrusion performance.",
    img: "/assets/images/products/spare-parts/Axial-Mesh-holder.webp",
    ctr_url: "/contact-us",
  },
  {
    title: "Axial Pressing Cam",
    description: "Axial pressing cams designed for accurate pressure control, smooth operation, and consistent extrusion performance.",
    img: "/assets/images/products/spare-parts/Axial-Pressing-Cam.webp",
    ctr_url: "/contact-us",
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