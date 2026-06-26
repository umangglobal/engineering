// app/certificates/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",         url: "/"              },
  { title: "Resources",    url: "/resources"     },
  { title: "Information",  url: "/resources"     },
  { title: "Certificates", url: "/certificates"  },
];

const cardData = [
  {
    title: "GMP",
    img: "/assets/images/resources/certificate1.png",
    ctr_url: "/certificates",
  },
  {
    title: "Halal",
    img: "/assets/images/resources/certificate2.png",
    ctr_url: "/certificates",
  },
  {
    title: "Kosher",
    img: "/assets/images/resources/certificate3.png",
    ctr_url: "/certificates",
  },
];

const CertificatesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Professional Certificates | Umang engineering",
  description: "Advance your knowledge and career with Umang engineering's Professional Certificates. Discover specialized training that sets you apart in the industry.",
  alternates: {
    canonical: "https://www.umangengineering.com/certificates",
  },
};

// ---- Page ----
export default function CertificatesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CertificatesPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Certificates"
        BannerImg="resources/Certificates-banner.png"
        BannerHeading="Certificates"
        BannerCaption="Explore. Inform. Support."
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} justifyContent={{ xs: "space-around", md: "start" }}>
          {cardData.map((data, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
              <CommonCardsOne cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}