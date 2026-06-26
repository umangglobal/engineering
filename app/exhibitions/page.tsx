// app/exhibitions/page.tsx

import { Box, Container } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { BannerFluidResources } from "@/components/UI/ResourcesComponent/BannerFluidResources";
import { BannerBottomText } from "@/components/UI/ResourcesComponent/BannerBottomText";
import { RecentBlogsCards } from "@/components/UI/ResourcesComponent/RecentBlogsCards";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",               url: "/"                  },
  { title: "Resources",          url: "/resources"         },
  { title: "Media",              url: "/media"             },
  { title: "News & Exhibitions", url: "/news-exhibitions"  },
  { title: "Exhibitions",        url: "/exhibitions"       },
];

const ExhibitionsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Exhibitions Happening Soon | Umang engineering",
  description: "Umang Engineering's next exhibitions are almost here! Prepare for innovation. Get your advance passes. See you there!",
  alternates: {
    canonical: "https://www.umangengineering.com/exhibitions",
  },
};

// ---- Page ----
export default function ExhibitionsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ExhibitionsPageSchema) }}
      />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent="Exhibitions" />
      </Container>

      <Box sx={{ pt: 2 }}>
        <BannerFluidResources imageName="resources/exhibitionbannermain.png" />
      </Box>

      <Container>
        <BannerBottomText
          BannerDate="March 23, 2025"
          BannerTag="Exhibition"
          Bannertitle="Exhibition Name"
          BannerCaption={`Lorem ipsum dolor sit amet consectetur. Blandit dui odio morbi urna.\nNisl morbi pellentesque velit dictum purus tristique integer.`}
        />

        <Box
          component="img"
          src="/assets/images/resources/exhibitionpicture1.png"
          alt="Exhibition Picture"
          sx={{
            backgroundColor: "#DDE1E6",
            borderRadius: "36px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <Box sx={{ py: 4 }}>
          <RecentBlogsCards />
        </Box>
      </Container>
    </>
  );
}