// app/sustainability/page.tsx

import { Box, Button, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import GreenBioEnergyIcon from "@/assets/icons/homepage/green-bio-energy.svg";
import NaturalIcon from "@/assets/icons/homepage/Natural.svg";
import GreenEcoEnergyIcon from "@/assets/icons/homepage/green-eco-energy.svg";
import HealthCareIcon from "@/assets/icons/homepage/healtcare.svg";
import Link from "next/link";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { FC, SVGProps } from "react";
import type { Metadata } from "next";

// ---- Types ----
interface SustainedItem {
  title: string;
  description: string;
  buttonTitle: string;
  iconKey: string;
  url: string;
}

// ---- Icon map ----
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  NaturalIcon,
  HealthCareIcon,
  GreenBioEnergyIcon,
  GreenEcoEnergyIcon,
};

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",           url: "/"                },
  { title: "Resources",      url: "/resources"       },
  { title: "Media",          url: "/media"           },
  { title: "Sustainability", url: "/sustainability"  },
];

const sustainedData: SustainedItem[] = [
  {
    title: "Planting for Every Life",
    description: "We plant a tree for every worker's birthday - growing our workforce and forests together.",
    buttonTitle: "See Our Impact",
    iconKey: "NaturalIcon",
    url: "/planting-for-every-life",
  },
  {
    title: "Green Visitor Program",
    description: "Visitors from around the world plant trees at our campus as a memory of their journey.",
    buttonTitle: "Join the Movement",
    iconKey: "HealthCareIcon",
    url: "/green-visitor-program",
  },
  {
    title: "AI-Driven Sustainability",
    description: "Using smart automation to reduce emissions, optimize energy, and track our green goals.",
    buttonTitle: "How AI Helps",
    iconKey: "GreenBioEnergyIcon",
    url: "/ai-driven-sustainability",
  },
  {
    title: "Zero Waste Manufacturing",
    description: "Umang Engineering is committed to achieving zero-waste manufacturing by 2030 through the recycling, reuse, and repurposing of materials.",
    buttonTitle: "See the Plan",
    iconKey: "GreenEcoEnergyIcon",
    url: "/zero-waste-manufacturing",
  },
];

const SustainabilityPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Simple Sustainability Ideas | Umang Engineering",
  description: "Join Umang Engineering for innovative sustainability ideas. Transform your daily habits with simple steps that benefit both you and the planet.",
  alternates: {
    canonical: "https://www.umangengineering.com/sustainability",
  },
};

// ---- Page ----
export default function SustainabilityPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SustainabilityPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Sustainability"
        BannerImg="resources/resource-sustainability.webp"
        BannerHeading="Sustainability"
        BannerCaption="Shaping a Safer Future"
      />

      <Box sx={{ p: 4, alignItems: "center", background: "#fff", borderRadius: "20px" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>

          {/* Hero Image */}
          <Box sx={{ width: "100%", display: "grid", gap: "50px", gridTemplateColumns: "1fr", justifyContent: "space-between", alignItems: "stretch", justifyItems: "center", position: "relative" }}>
            <Box
              component="img"
              src="/assets/images/sustainability/sustainability-main.png"
              alt="Sustainability at Umang Engineering"
              sx={{ width: "100%", height: { xs: "466px", md: "530px" }, background: "#DDE1E6", borderRadius: "36px", position: "relative" }}
            />

            <Box sx={{ width: "100%", height: { xs: "466px", md: "530px" }, background: "linear-gradient(7deg, #2C997A 7%, rgba(44, 153, 122, 0) 100%)", borderRadius: "36px", position: "absolute" }} />

            <Box sx={{ width: "85%", display: "flex", flexDirection: "column", gap: "14px", position: "absolute", bottom: 0, p: "30px" }}>
              <Typography sx={{ color: "white", fontSize: { xs: "21px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500 }}>
                Sustainability at the Core of Every Particle
              </Typography>
              <Typography sx={{ color: "white", fontSize: { xs: "16px", md: "20px" }, fontFamily: "Jost", fontWeight: 500, lineHeight: "20px" }}>
                We believe innovation should serve both people and the planet. Our encapsulation technologies are designed with sustainability, efficiency, and environmental responsibility at their core.
              </Typography>
              <Link href="/resources" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "100%", md: "315px" },
                    height: { xs: "100%", md: "48px" },
                    backgroundColor: "#2C997A",
                    borderRadius: "30px",
                    color: "white",
                    fontFamily: "Jost, Jost-fallback, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                    textTransform: "none",
                    boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
                    outline: "2px solid #2C997A",
                    outlineOffset: "-2px",
                  }}
                >
                  Explore Our Other Resources
                </Button>
              </Link>
            </Box>
          </Box>

          {/* Description */}
          <Box display="flex" justifyContent="space-around" alignItems="center" pt="20px">
            <Box width="100%" maxWidth={1134} display="flex" flexDirection="column" gap={4}>
              <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", paddingTop: "15px", whiteSpace: "pre-line", py: 2 }}>
                {`"At Umang Engineering, we are of the firm belief that sustainability and innovation are two sides of the same coin. With over four decades of expertise in high-tech engineering and manufacturing technology, we are committed to providing efficient and sustainable solutions for the engineering, pharmaceutical, and personal care industries
\nAt Umang Engineering, our production process is geared towards optimizing resource utilization, minimizing energy consumption, and ensuring maximum stability and efficacy of our active ingredients. This not only increases bioavailability but also reduces the formulation and thereby helps in waste reduction. Through our expertise in precision engineering and the use of materials and technology, we are committed to an environmentally friendly production process.
\nWe are passionately investing in green technologies, biologically recyclable packaging materials, and plant-based excipients. We are optimizing our operations to take us closer and closer to zero-waste manufacturing. With every engineering application and encapsulated form of delivery that we manufacture, our passion is to provide more intelligent, safe, and sustainable pharmaceutical solutions.
\nTogether with our entire team of Umang Engineering, we are working with our partners and our clients to contribute to sustainable innovation in making the future a healthier place for our planet and its inhabitants."`}
              </Typography>
            </Box>
          </Box>

          {/* Sustainability Cards */}
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gap: "25px",
              p: "25px",
              mt: "20px",
              borderRadius: "20px",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              background: "#C7EADF",
            }}
          >
            {sustainedData.map((susdata, index) => {
              const Icon = iconMap[susdata.iconKey];
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    p: 2,
                    pt: 2,
                    pb: 3.5,
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Icon */}
                  <Box sx={{ p: "14px 12px 12px 14px", backgroundColor: "#2C997A", borderRadius: "8px 4px 4px 4px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ width: 24, height: 24, position: "relative" }}>
                      {Icon && <Icon style={{ width: "24px", height: "24px", color: "#fff" }} />}
                    </Box>
                  </Box>

                  {/* Title */}
                  <Box sx={{ mt: 2, display: "flex", gap: "10px", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "20px", fontFamily: "Jost", fontWeight: 500, color: "#21272A", lineHeight: "20px" }}>
                      {susdata.title}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography sx={{ mt: 1, fontSize: "14px", fontFamily: "Jost", fontWeight: 400, color: "#21272A" }}>
                    {susdata.description}
                  </Typography>

                  {/* Button */}
                  <Box sx={{ mt: 2, width: "100%" }}>
                    <Link href={susdata.url} style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          height: "48px",
                          padding: "10px 24px",
                          borderRadius: "26px",
                          borderColor: "#2C997A",
                          color: "#2C997A",
                          fontSize: "18px",
                          fontFamily: "Jost",
                          fontWeight: 500,
                          letterSpacing: "0.36px",
                          textTransform: "none",
                        }}
                      >
                        {susdata.buttonTitle}
                      </Button>
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}