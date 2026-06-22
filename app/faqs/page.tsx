// app/faqs/page.tsx

import { Box, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { AccordianMain } from "@/components/UI/homeComponents/AccordianMain";
import { createBreadcrumbSchema, createFaqSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { FAQItem } from "@/components/UI/homeComponents/AccordianFAQHome";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",        url: "/"          },
  { title: "Resources",   url: "/resources" },
  { title: "Information", url: "/resources" },
  { title: "FAQs",        url: "/faqs"      },
];

const FAQdata: FAQItem[] = [
  {
    title: "What does Umang Nutraceuticals specialize in?",
    description: "Umang Nutraceuticals focuses on the development and manufacturing of advanced encapsulated ingredients for pharmaceutical formulations, helping improve stability and deliver high-performance solutions.",
    defaultExpanded: "defaultExpanded",
  },
  {
    title: "Why are encapsulation technologies essential in pharmaceutical formulations?",
    description: "Encapsulation helps safeguard the sensitive pharmaceutical active ingredients from environmental stress, and reduces ingredient incompatibilities, prevents loss of volatile components, improve handling, and maintains product potency throughout shelf-life.",
    defaultExpanded: "",
  },
  {
    title: "How can encapsulation improve pharmaceutical product performance?",
    description: "Encapsulation enhances drug stability, supports controlled or targeted release, minimizes irritation or degradation of active ingredient, and enables development of more efficient and reliable pharmaceutical formulations.",
    defaultExpanded: "",
  },
  {
    title: "What does Umang Nutraceuticals aim to deliver?",
    description: "Umang Nutraceuticals aims to deliver customized, high-quality pharmaceutical solutions with enhanced efficacy, speed, and long-term value, supporting its partners with reliable, performance-driven outcomes.",
    defaultExpanded: "",
  },
  {
    title: "Where is Umang Pharmaceutical located?",
    description: "Umang Pharmaceutical is based in India, with its corporate office located at Unit No. 1, 2nd Floor, Vicino (Mega Mall), New Link Road, Oshiwara, Andheri West, Mumbai, Maharashtra 400102.",
    defaultExpanded: "",
  },
];

const FAQsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
    createFaqSchema(FAQdata),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "FAQs: Get the Info You Need | Umang Nutraceuticals",
  description: "Get quick answers to your pharma queries with our detailed FAQs. Empower your research and understanding with reliable information at your fingertips!",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/faqs",
  },
};

// ---- Page ----
export default function FAQsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="FAQs"
        BannerImg="resources/FAQs-banner.png"
        BannerHeading="FAQs"
        BannerCaption="Explore. Inform. Support."
      />

      <Container>
        <Box my={8}>
          <Box sx={{ textAlign: "center", py: 2 }}>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 500,
                fontFamily: "Jost-sb",
                lineHeight: "20px",
                color: "#21272A",
                py: "24px",
              }}
            >
              Doubts? We're Here to Help.
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Jost-sb",
                color: "#21272A",
                whiteSpace: "pre-line",
                paddingBottom: "10px",
              }}
            >
              Can't find what you're looking for? Email us at info@umangglobal.com or call us at +91 95183 49134.
            </Typography>
          </Box>

          <AccordianMain FAQdata={FAQdata} />
        </Box>
      </Container>
    </>
  );
}