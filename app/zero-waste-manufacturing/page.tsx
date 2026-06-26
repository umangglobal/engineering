// app/zero-waste-manufacturing/page.tsx

import { Box, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Types ----
interface PolicySection {
  heading: string;
  content: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                      url: "/"                            },
  { title: "Resources",                 url: "/resources"                   },
  { title: "Media",                     url: "/media"                       },
  { title: "Sustainability",            url: "/sustainability"              },
  { title: "Zero Waste Manufacturing",  url: "/zero-waste-manufacturing"    },
];

const ZeroWasteManufacturingPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

const sections: PolicySection[] = [
  {
    heading: "Circular Approach to Materials",
    content: "We follow a closed-loop mindset where every input is accounted for, reused, or repurposed. Raw materials are carefully measured, tracked, and optimized using AI-based systems to eliminate excess. Trimmings, off-cuts, and by-products are reintroduced into the production cycle or converted into secondary use materials.",
  },
  {
    heading: "Efficient Formulation & Process Design",
    content: "Our formulation scientists and process engineers collaborate to create manufacturing protocols that minimize waste at the formulation stage. From small-batch prototyping to full-scale production, we ensure that every step is resource-conscious and lean.",
  },
  {
    heading: "Recycling & Recovery Systems",
    content: "We have installed in-house segregation, recycling, and material recovery units to handle packaging waste, water reuse, and chemical residue treatment. All recyclable materials are processed responsibly, while hazardous waste is disposed of according to strict regulatory standards.",
  },
  {
    heading: "AI-Driven Waste Reduction",
    content: "Using real-time data monitoring and machine learning, our systems can predict and prevent material overuse, process inefficiencies, and equipment-related losses. AI suggestions help reduce material scrap, batch rejections, and energy waste, pushing us closer to our zero-waste targets.",
  },
  {
    heading: "Employee Engagement & Training",
    content: "Our zero-waste mission is embedded in our culture. We conduct regular awareness sessions, training, and idea workshops so that every team member—from R&D to operations—is aligned and empowered to reduce waste in their function.",
  },
  {
    heading: "Outcome-Oriented & Audited",
    content: "We measure our waste generation metrics monthly and continuously improve through third-party audits and internal reviews. Our goal is not just compliance—but a regenerative production model that contributes positively to people and the planet.",
  },
];

// ---- Shared styles ----
const headingStyle = {
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "Jost-sb",
  color: "#21272A",
  whiteSpace: "pre-line",
  paddingBottom: "10px",
} as const;

const bodyStyle = {
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "Jost",
  color: "#21272A",
  whiteSpace: "pre-line",
  paddingBottom: "24px",
} as const;

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Zero Waste Manufacturing | Umang Engineering",
  description: "Learn about Umang Engineering's commitment to zero waste manufacturing, where advanced techniques meet environmental responsibility for a greener tomorrow.",
  alternates: {
    canonical: "https://www.umangengineering.com/zero-waste-manufacturing",
  },
};

// ---- Page ----
export default function ZeroWasteManufacturingPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ZeroWasteManufacturingPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Zero Waste Manufacturing"
        BannerImg="sustainability/ZeroWasteManufacturing-banner.png"
        BannerHeading="No Wastage"
        BannerCaption="Decrease the Wastage"
      />

      <Box py={2}>
        <Container>
          {/* Page Title */}
          <Typography sx={{ fontSize: 32, fontWeight: 500, fontFamily: "Jost-sb", lineHeight: { xs: "32px", md: "25px" }, color: "#21272A", py: "24px" }}>
            Zero Waste Manufacturing
          </Typography>

          {/* Intro */}
          <Typography sx={{ ...headingStyle, paddingBottom: "10px" }}>
            Transforming Resources Responsibly, Leaving Nothing Behind
          </Typography>
          <Typography sx={bodyStyle}>
            At Umang Global Group, our commitment to zero-waste manufacturing goes beyond reducing waste—it's about rethinking every step of the production process to ensure maximum efficiency, minimum environmental impact, and total resource accountability.
          </Typography>

          {/* Sections */}
          {sections.map((section, index) => (
            <Box key={index}>
              <Typography sx={headingStyle}>{section.heading}</Typography>
              <Typography sx={bodyStyle}>{section.content}</Typography>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}