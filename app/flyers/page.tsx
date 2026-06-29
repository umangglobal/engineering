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
    title: "Umang Engineering Introduction",
    description: "Encapsulated Actispheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/introduction-flyer.webp",
    ctr_url: "/assets/pdf/introduction-flyer.pdf",
  },
  {
    title: "Rapid Mixer Granulator",
    description: "Encapsulated Aminospheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/rapid-mixer-granulator.webp",
    ctr_url: "/assets/pdf/rapid-mixer-granulator.pdf",
  },
  {
    title: "Single Screw Extruders",
    description: "Encapsulated Botanispheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/single-screw-extruders.webp",
    ctr_url: "/assets/pdf/single-screw-extruders.pdf",
  },
  {
    title: "Twin Screw Extruders",
    description: "Encapsulated Caratospheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/twin-screw-extruder.webp",
    ctr_url: "/assets/pdf/twin-screw-extruder.pdf",
  },
  {
    title: "Die Roller Extruder",
    description: "Encapsulated Fiberspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/die-roller-extruder.webp",
    ctr_url: "/assets/pdf/die-roller-extruder.pdf",
  },
  {
    title: "Basket Extruder",
    description: "Encapsulated Minospheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/basket-extruder.webp",
    ctr_url: "/assets/pdf/basket-extruder.pdf",
  },
  {
    title: "Spheronizer",
    description: "Encapsulated Taste-masking in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/spheronizer.webp",
    ctr_url: "/assets/pdf/spheronizer.pdf",
  },
  {
    title: "Integrated Extruder and Spheronizer",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/integrated-extruder-and-spheronizer.webp",
    ctr_url: "/assets/pdf/integrated-extruder-and-spheronizer.pdf",
  },
  {
    title: "Solid Drug Layering",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/solid-drug-layering.webp",
    ctr_url: "/assets/pdf/solid-drug-layering.pdf",
  },
  {
    title: "Fluid Bed Dryer",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/fluid-bed-dryer.webp",
    ctr_url: "/assets/pdf/fluid-bed-dryer.pdf",
  },
  {
    title: "Fluid Bed Multi-Processor",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/fluid-bed-multi-processor.webp",
    ctr_url: "/assets/pdf/fluid-bed-multi-processor.pdf",
  },
  {
    title: "Pellet Processor",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/pellet-processor.webp",
    ctr_url: "/assets/pdf/pellet-processor.pdf",
  },
  {
    title: "Roll Compactor",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/roll-compactor.webp",
    ctr_url: "/assets/pdf/roll-compactor.pdf",
  },
  {
    title: "Film Casting Machine",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/film-casting-machine.webp",
    ctr_url: "/assets/pdf/film-casting-machine.pdf",
  },
  {
    title: "Hot Melt Extruder",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/hot-melt-extruder.webp",
    ctr_url: "/assets/pdf/hot-melt-extruder.pdf",
  },
  {
    title: "Cold Extrusion Machine",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/cold-extrusion-machine.webp",
    ctr_url: "/assets/pdf/cold-extrusion-machine.pdf",
  },
  {
    title: "Pelletization Line - Layering Process",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/pelletization-line-layering-process.webp",
    ctr_url: "/assets/pdf/pelletization-line-layering-process.pdf",
  },
  {
    title: "Pelletization Line - Extruder Spheronizer Process",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/pelletization-line-extruder-spheronizer-process.webp",
    ctr_url: "/assets/pdf/pelletization-line-extruder-spheronizer-process.pdf",
  },
  {
    title: "Water Dispersible Granules (WDG) Line",
    description: "Encapsulated Vitaspheres in powder/beadlets form available in various SR/EC release form..",
    img: "/assets/images/resources/water-dispersible-granules-WDG-line.webp",
    ctr_url: "/assets/pdf/water-dispersible-granules-WDG-line.pdf",
  },
];

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Design & Print Flyers Easily | Umang Engineering",
  description: "Design and print eye-catching flyers with ease at Umang Engineering. Discover user-friendly tools and professional quality for all your promotional needs.",
  alternates: {
    canonical: "https://www.umangengineering.com/flyers",
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
        BannerImg="resources/Flyers-banner.webp"
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