// app/manufacturing-site-transfer-projects/page.tsx

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import MailIcon from "@/assets/icons/homepage/mail.svg";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                                  url: "/"                                       },
  { title: "Resources",                             url: "/resources"                              },
  { title: "Capabilities",                          url: "/capabilities"                           },
  { title: "Manufacturing Site Transfer Projects",  url: "/manufacturing-site-transfer-projects"   },
];

const ManufacturingSiteTransferProjectsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Manufacturing Site Transfer Projects | Umang Engineering",
  description: "Umang Engineering specializes in seamless manufacturing site transfer projects. Optimize your production processes with our expert guidance and support.",
  alternates: {
    canonical: "https://www.umangengineering.com/manufacturing-site-transfer-projects",
  },
};

// ---- Page ----
export default function ManufacturingSiteTransferProjectsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ManufacturingSiteTransferProjectsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Manufacturing Site Transfer Projects"
        BannerImg="resources/ManufacturingSiteTransferProjects-banner.png"
        BannerHeading="Manufacturing Site Transfer Projects"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Box py={2}>
        <Container>
          <Grid container spacing={4} sx={{ mt: 3 }}>

            {/* Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/assets/images/resources/ManufacturingSiteTransferProjects.png"
                alt="Manufacturing Site Transfer Projects"
                sx={{ width: "100%", height: "100%", objectFit: "scale-down" }}
              />
            </Grid>

            {/* Text */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ margin: "auto", textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontFamily: "Jost-sb",
                  fontSize: "32px",
                  fontWeight: 500,
                  paddingTop: "15px",
                }}
              >
                Manufacturing Site Transfer Projects
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
                {`Umang Global Group has successfully executed many site transfers for our non-regulated market customers.

Frequently, we support our customers during the development phase to manufacture the required 'Exhibit Batches' at our facilities.

Our project leaders ensure smooth communication and efficient project execution to ensure every project is seamless.`}
              </Typography>

              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "85%", md: "70%" },
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
      </Box>
    </>
  );
}