// app/white-labelling-co-branding/page.tsx

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import MailIcon from "@/assets/icons/homepage/mail.svg";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                        url: "/"                              },
  { title: "Resources",                   url: "/resources"                     },
  { title: "Capabilities",               url: "/capabilities"                  },
  { title: "White Labelling Co Branding", url: "/white-labelling-co-branding"  },
];

const WhiteLabellingCoBrandingPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "White Labeling & Co-Branding Partner | Umang Nutraceuticals",
  description: "Partner with Umang Nutraceuticals for exceptional white labeling and co-branding services. Transform your product offerings with our advanced particle solutions.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/white-labelling-co-branding",
  },
};

// ---- Page ----
export default function WhiteLabellingCoBrandingPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WhiteLabellingCoBrandingPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="White Labelling Co Branding"
        BannerImg="resources/WhiteLabellingCoBranding-banner.png"
        BannerHeading="White Labelling Co Branding"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Container>
        <Grid container spacing={4} sx={{ mt: 3, mb: 2 }}>

          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/assets/images/resources/WhiteLabellingCoBranding.png"
              alt="White Labelling and Co-Branding"
              sx={{ width: "100%", height: "100%", objectFit: "scale-down" }}
            />
          </Grid>

          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ margin: "auto" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontFamily: "Jost-sb", fontSize: "32px", fontWeight: 500, paddingTop: "15px" }}
            >
              White Labelling & Co Branding
            </Typography>

            <Typography
              sx={{
                color: "#091610",
                fontSize: "16px",
                fontFamily: "Jost",
                fontWeight: 400,
                lineHeight: "1.5",
                paddingTop: "15px",
                whiteSpace: "pre-line",
                py: 2,
              }}
            >
              We will assist in making your concepts marketable through strong manufacturing capabilities, streamlined processing, and efficient supply chain management. Our strengths lie in proven formulations and engineering. We ensure your smooth journey from concept to commercial success.
            </Typography>

            <Link href="/contact-us" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", md: "70%" },
                  padding: "10px 24px",
                  backgroundColor: "#41939C",
                  borderRadius: "26px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  textTransform: "none",
                  fontSize: "18px",
                  fontFamily: "Jost",
                  fontWeight: 500,
                  letterSpacing: "0.36px",
                  "&:hover": { backgroundColor: "#b85c6d" },
                }}
              >
                Contact Us to Know More
                <Box sx={{ width: "24px", height: "24px", position: "relative", overflow: "hidden" }}>
                  <MailIcon style={{ width: "24px", height: "24px" }} />
                </Box>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}