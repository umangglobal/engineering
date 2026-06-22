// app/case-studies/page.tsx

import { Box, Button, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",         url: "/"              },
  { title: "Resources",    url: "/resources"     },
  { title: "Downloads",    url: "/downloads"     },
  { title: "Case Studies", url: "/case-studies"  },
];

const CaseStudiesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Case Studies | Umang Nutraceuticals",
  description: "Explore in-depth case studies from Umang Nutraceuticals, showcasing innovative solutions and real-world applications in particle technology.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/case-studies",
  },
};

// ---- Page ----
export default function CaseStudiesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CaseStudiesPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Case Studies"
        BannerImg="resources/CaseStudies-banner.png"
        BannerHeading="Case Studies"
        BannerCaption="Case Studies"
      />

      <Box sx={{ p: 4, alignItems: "center", background: "#fff", borderRadius: "20px" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>

          {/* Image */}
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gap: "50px",
              gridTemplateColumns: "1fr",
              justifyContent: "space-between",
              alignItems: "stretch",
              justifyItems: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/assets/images/resources/careers-page.png"
              alt="Case Studies Coming Soon"
              sx={{
                width: 432,
                height: 288,
                background: "#DDE1E6",
                borderRadius: "36px",
                position: "relative",
              }}
            />
          </Box>

          {/* Content */}
          <Box display="flex" justifyContent="space-around" alignItems="center" pt="20px">
            <Box width="100%" maxWidth={981} display="flex" flexDirection="column" alignItems="center" gap={1}>

              <Typography
                sx={{
                  fontSize: 32,
                  fontWeight: 500,
                  fontFamily: "Jost-sb",
                  color: "#21272A",
                  whiteSpace: "pre-line",
                }}
              >
                Soon We Will Publish a Case Study
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  mb: 3,
                  whiteSpace: "pre-line",
                  textAlign: "center",
                }}
              >
                {`We are under process of writing and publishing the case studies,\nSubscribe to our newsletter to stay updated\nabout our recent publications!`}
              </Typography>

              {/* CTA Buttons */}
              <Box
                sx={{
                  width: { xs: "380.51px", md: "537.51px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* Go Home */}
                <Link href="/" style={{ flex: "1 1 0" }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      height: "46px",
                      px: "24px",
                      py: "10px",
                      borderRadius: "26px",
                      borderWidth: "1.5px",
                      borderColor: "#41939C",
                      color: "#41939C",
                      fontSize: "18px",
                      fontFamily: "Jost-sb",
                      fontWeight: 500,
                      letterSpacing: "0.36px",
                      textTransform: "none",
                      gap: "8px",
                      "&:hover": {
                        borderColor: "#41939C",
                        backgroundColor: "#fff0f3",
                      },
                    }}
                    startIcon={
                      <Box sx={{ width: "24px", height: "24px", position: "relative", overflow: "hidden" }}>
                        <Box sx={{ width: "13px", height: "12px", position: "absolute", top: "6px", left: "2px", border: "1.5px solid #41939C" }} />
                        <Box sx={{ width: "5px", height: "11px", position: "absolute", top: "6.5px", left: "17px", border: "1.5px solid #41939C" }} />
                      </Box>
                    }
                  >
                    Go Home
                  </Button>
                </Link>

                {/* Subscribe */}
                <Button
                  variant="contained"
                  sx={{
                    flex: "1 1 0",
                    height: "46px",
                    px: "24px",
                    py: "10px",
                    borderRadius: "26px",
                    backgroundColor: "#41939C",
                    fontSize: "18px",
                    fontFamily: "Jost-sb",
                    fontWeight: 500,
                    letterSpacing: "0.36px",
                    textTransform: "none",
                    gap: "8px",
                    "&:hover": { backgroundColor: "#b45868" },
                  }}
                  startIcon={
                    <Box sx={{ width: "24px", height: "24px", position: "relative", overflow: "hidden" }}>
                      <Box sx={{ width: "20px", height: "20px", position: "absolute", top: "2px", left: "2px", border: "1.5px solid white" }} />
                      <Box sx={{ width: "10px", height: "10px", position: "absolute", top: "7px", left: "7px", border: "1.5px solid white" }} />
                    </Box>
                  }
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}