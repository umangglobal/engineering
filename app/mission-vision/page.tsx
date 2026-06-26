// app/mission-vision/page.tsx

import { Box, Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { MissionVisionCommon } from "@/components/UI/MissionVisionCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",             url: "/"                 },
  { title: "Resources",        url: "/resources"        },
  { title: "Information",      url: "/information"      },
  { title: "Mission & Vision", url: "/mission-vision"   },
];

const MissionVisionPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Clear Mission, Bold Vision | Umang Engineering",
  description: "Explore Umang Engineering, where a clear mission meets a bold vision. Learn how we're revolutionizing particle technology for a better tomorrow.",
  alternates: {
    canonical: "https://www.umangengineering.com/mission-vision",
  },
};

// ---- Page ----
export default function MissionVisionPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MissionVisionPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Mission & Vision"
        BannerImg="resources/MissionVision-banner.png"
        BannerHeading="Mission & Vision"
        BannerCaption="Explore. Inform. Support."
      />

      <Box py={2}>
        <Container>
          <Grid container spacing={4} sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
            <MissionVisionCommon />
          </Grid>
        </Container>
      </Box>
    </>
  );
}