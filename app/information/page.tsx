// app/information/page.tsx

import { Container, Grid } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { CommonCardsOne } from "@/components/UI/ResourcesComponent/CommonCardsOne";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",        url: "/"             },
  { title: "Resources",   url: "/resources"    },
  { title: "Information", url: "/information"  },
];

const cardData = [
  { title: "FAQs",                 img: "/assets/images/resources/info1.png", ctr_url: "/faqs"              },
  { title: "Terms & Conditions",   img: "/assets/images/resources/info2.png", ctr_url: "/terms-conditions"  },
  { title: "Privacy Policy",       img: "/assets/images/resources/info3.png", ctr_url: "/privacy-policy"    },
  { title: "Mission & Vision",     img: "/assets/images/resources/info4.png", ctr_url: "/mission-vision"    },
  { title: "Certificates",         img: "/assets/images/resources/info5.png", ctr_url: "/certificates"      },
  { title: "Cookies Policy",       img: "/assets/images/resources/info6.png", ctr_url: "/cookies-policy"    },
];

const InformationPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Clear Information Available | Umang Engineering",
  description: "Get clear insights into pharma with Umang. Our comprehensive resources provide the information you need to excel in your studies and research.",
  alternates: {
    canonical: "https://www.umangengineering.com/information",
  },
};

// ---- Page ----
export default function InformationPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(InformationPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Information"
        BannerImg="resources/resource-information.webp"
        BannerHeading="Information"
        BannerCaption="Explore. Inform. Support."
      />

      <Container sx={{ py: 5 }}>
        <Grid container spacing={2} justifyContent={{ xs: "space-around", md: "start" }}>
          {cardData.map((data, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <CommonCardsOne cardData={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}