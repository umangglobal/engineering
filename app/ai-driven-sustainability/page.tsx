// app/ai-driven-sustainability/page.tsx

import { Box, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                    url: "/"                        },
  { title: "Resources",               url: "/resources"               },
  { title: "Media",                   url: "/media"                   },
  { title: "Sustainability",          url: "/sustainability"          },
  { title: "AI-Driven Sustainability",url: "/ai-driven-sustainability"},
];

const AiDrivenSustainabilityPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Section data ----
const sections = [
  {
    img: "/assets/images/sustainability/AiDriven1.png",
    alt: "AI Driven Optimizing Resources",
    title: "Optimizing Resources with AI",
    description: "We use AI to track, monitor, and optimize energy, water, and raw material usage across our manufacturing plants. Smart sensors and data analytics help us minimize waste, reduce overproduction, and lower our carbon footprint—without compromising output quality.",
    reverse: false,
  },
  {
    img: "/assets/images/sustainability/AiDriven2.png",
    alt: "AI Driven Predictive Maintenance",
    title: "Predictive Maintenance for Energy Efficiency",
    description: "Our AI systems continuously monitor machine health and predict potential failures before they occur. This reduces downtime, saves energy, and extends equipment life—contributing to both operational efficiency and environmental sustainability.",
    reverse: true,
  },
  {
    img: "/assets/images/sustainability/AiDriven3.png",
    alt: "AI Driven Supply Chain",
    title: "Sustainable Supply Chain Management",
    description: "From procurement to packaging, AI helps us analyze vendor sustainability, track logistics emissions, and choose the most eco-friendly shipping routes and materials. This ensures our entire supply chain supports our green commitment.",
    reverse: false,
  },
  {
    img: "/assets/images/sustainability/AiDriven4.png",
    alt: "AI Driven Environmental Compliance",
    title: "Smart Decision-Making for Environmental Compliance",
    description: "AI models assist in ensuring compliance with environmental regulations and safety protocols. They provide real-time alerts and suggestions to keep operations aligned with sustainability goals and certifications.",
    reverse: true,
  },
  {
    img: "/assets/images/sustainability/AiDriven5.png",
    alt: "AI Driven Eco-Conscious Innovation",
    title: "Eco-Conscious Product Innovation",
    description: "Through AI-driven R&D, we explore greener materials, recyclable packaging formats, and cleaner production processes. This allows us to continuously develop high-performing products that meet both customer needs and environmental standards.",
    reverse: false,
  },
];

// ---- Metadata ----
export const metadata: Metadata = {
  title: "AI Driven Sustainability | Umang Nutraceuticals",
  description: "Discover how AI-driven solutions from Umang Nutraceuticals are revolutionizing sustainability. Explore innovative technologies for a greener future.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/ai-driven-sustainability",
  },
};

// ---- Page ----
export default function AiDrivenSustainabilityPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AiDrivenSustainabilityPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="AI-Driven Sustainability"
        BannerImg="sustainability/AiDrivenSustainability-banner.png"
        BannerHeading="AI For Optimization"
        BannerCaption="Decrease the Resources"
      />

      <Box py={2}>
        <Container>
          {/* Section Title */}
          <Typography sx={{ fontSize: 32, fontWeight: 500, fontFamily: "Jost-sb", lineHeight: "20px", color: "#21272A", py: "24px" }}>
            AI-Driven Sustainability
          </Typography>

          {/* Description */}
          <Typography sx={{ fontSize: 16, fontWeight: 400, fontFamily: "Jost", color: "#21272A", whiteSpace: "pre-line" }}>
            Empowering a Greener Future with Intelligent Automation
          </Typography>

          {/* Sections */}
          {sections.map((section, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: section.reverse ? "column-reverse" : "column",
                  md: section.reverse ? "row-reverse" : "row",
                },
                alignItems: "center",
                gap: 4,
                mt: index === 0 ? 3 : 0,
                mb: 6,
              }}
            >
              <Box
                component="img"
                src={section.img}
                alt={section.alt}
                sx={{ width: { xs: "100%", md: "50%" }, objectFit: "scale-down" }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h2" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: "32px", fontWeight: 500, pt: "15px" }}>
                  {section.title}
                </Typography>
                <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", pt: "15px" }}>
                  {section.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}