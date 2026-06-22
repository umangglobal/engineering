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
  title: "Professional Certificates | Umang Nutraceuticals",
  description: "Advance your knowledge and career with Umang Nutraceuticals's Professional Certificates. Discover specialized training that sets you apart in the industry.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/certificates",
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
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <CommonCardsOne cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}