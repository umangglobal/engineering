// app/co-development-project/page.tsx

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import MailIcon from "@/assets/icons/homepage/mail.svg";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                   url: "/"                        },
  { title: "Resources",              url: "/resources"               },
  { title: "Capabilities",           url: "/capabilities"            },
  { title: "Co-Development Project", url: "/co-development-project"  },
];

const CoDevelopmentProjectPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Co-Development: Grow Your Ideas | Umang Nutraceuticals",
  description: "Umang Nutraceuticals can help you co-develop innovative ideas. Collaborate with experts to turn your concepts into reality today!",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/co-development-project",
  },
};

// ---- Page ----
export default function CoDevelopmentProjectPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CoDevelopmentProjectPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Co-Development Project"
        BannerImg="resources/CoDevelopmentProject-banner.png"
        BannerHeading="Co-Development Project"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Box py={2}>
        <Container>
          <Grid container spacing={4} sx={{ mt: 3 }}>

            {/* Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/assets/images/resources/codevelopment.png"
                alt="Co-Development Project"
                sx={{ width: "100%", height: "100%", objectFit: "scale-down" }}
              />
            </Grid>

            {/* Text */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ margin: "auto" }}>
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
                Co-Development Projects
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
               We work with clients worldwide on exclusive product development, offering profit-sharing opportunities, full regulatory support, and project management to ensure timely and efficient project delivery.
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
      </Box>
    </>
  );
}