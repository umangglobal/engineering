// app/green-visitor-program/page.tsx

import { Box, Container } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import ImageUIList from "@/components/UI/ResourcesComponent/ImageUIList";
import { SustainabilityChildText } from "@/components/UI/ResourcesComponent/SustainabilityChildText";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                  url: "/"                        },
  { title: "Resources",             url: "/resources"               },
  { title: "Media",                 url: "/media"                   },
  { title: "Sustainability",        url: "/sustainability"          },
  { title: "Green Visitor Program", url: "/green-visitor-program"   },
];

const images = Array.from(
  { length: 8 },
  (_, i) => `/assets/images/sustainability/plantvisitor/plantvisitor${i + 1}.png`
);

const heading1 = "Green Visitor Program";
const heading2 = "Growing Global Partnerships with Every Tree";
const caption = `At Umang Global Group, every visit plants the seed of change. Through our Green Visitor Program, we welcome our global visitors, be it distributors, customers, or suppliers, to be a part of our green initiative by planting a tree during their visit to our manufacturing facility.\n 
This symbolic gesture not only reflects our commitment to sustainability but also honors the global relationships we nurture. Each tree becomes a living memory of collaboration, responsibility, and our shared goal of creating a healthier planet—together.`;

const GreenVisitorProgramPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Green Visitor Program | Umang Engineering",
  description: "Explore Umang Engineering's Green Visitor Program, designed to promote sustainability and environmental awareness. Join us for an enlightening experience!",
  alternates: {
    canonical: "https://www.umangengineering.com/green-visitor-program",
  },
};

// ---- Page ----
export default function GreenVisitorProgramPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GreenVisitorProgramPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Green Visitor Program"
        BannerImg="sustainability/GreenVisitorProgram-banner.png"
        BannerHeading="Plant Visitor"
        BannerCaption="Plants a Tree"
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