// app/planting-for-every-life/page.tsx

import { Box, Container } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import ImageUIList from "@/components/UI/ResourcesComponent/ImageUIList";
import { SustainabilityChildText } from "@/components/UI/ResourcesComponent/SustainabilityChildText";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                    url: "/"                          },
  { title: "Resources",               url: "/resources"                 },
  { title: "Media",                   url: "/media"                     },
  { title: "Sustainability",          url: "/sustainability"            },
  { title: "Planting For Every Life", url: "/planting-for-every-life"   },
];

const images = Array.from(
  { length: 16 },
  (_, i) => `/assets/images/sustainability/birthdayplantation/birthdayplantation${i + 1}.png`
);

const heading1 = "Planting for Every Life";
const heading2 = "Rooted in Purpose: One Tree at a Time";
const caption = `At Umang Global Group, we believe every life deserves to leave a positive mark on the planet. Through our initiative "Planting for Every Life," we plant a tree in our manufacturing facility area to celebrate each employee's birthday—both in the office and on the factory floor.\n 
This living tribute not only honors our people but contributes to a greener, healthier environment for future generations. Over time, these trees stand as a reminder that sustainability starts with small, consistent actions rooted in care and responsibility.`;

const PlantingForEveryLifePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Planting For Every Life | Umang Nutraceuticals",
  description: "At Umang Nutraceuticals, we offer planting solutions designed for every lifestyle. Join us to cultivate your green space with expert guidance and quality tools.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/planting-for-every-life",
  },
};

// ---- Page ----
export default function PlantingForEveryLifePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PlantingForEveryLifePageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Planting For Every Life"
        BannerImg="sustainability/PlantingForEveryLife-banner.png"
        BannerHeading="Green Birthday Celebration"
        BannerCaption="Turning Birthdays Into Shades of Green"
      />

      <Box py={2}>
        <Container>
          <SustainabilityChildText
            heading1={heading1}
            heading2={heading2}
            caption={caption}
          />
          <ImageUIList images={images} />
        </Container>
      </Box>
    </>
  );
}