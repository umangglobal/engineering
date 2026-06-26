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
    title: "What does Umang Engineering specialize in?",
    description: "Umang Engineering is a company that designs, develops, and manufactures innovative process machinery and manufacturing plants for industries such as pharma, nutra, food, chemical, and related sectors. Some of our processes include extrusion, spheronization, fluid-bed processes, granulation, coating, pelletizing, and more.",
    defaultExpanded: "defaultExpanded",
  },
  {
    title: "Why is process engineering important in modern manufacturing?",
    description: "Advanced process engineering enables maintaining product quality, improving production processes, optimizing resources, and scaling up production. Good equipment design helps industries improve operational reliability and adhere to industry standards.",
    defaultExpanded: "",
  },
  {
    title: "How does Umang Engineering support its partners?",
    description: "We collaborate with our clients to understand the processes they require and their manufacturing objectives. Through engineering, specialized machinery, technical services, and process optimization, we help our partners improve their productivity and efficiency.",
    defaultExpanded: "",
  },
  {
    title: "What types of equipment does Umang Engineering offer?",
    description: "The product range comprises extruders, spheronizers, fluid bed processors, granulators, coating plants, machinery for the production of oral thin films, integrated pelletization lines, and customized solutions that cater to different manufacturing needs.",
    defaultExpanded: "",
  },
  {
    title: "Where is Umang Engineering located?",
    description: "Umang Engineering is situated in India, with its headquarters at Unit No. 1, 2nd Floor, Vicino (Mega Mall), New Link Road, Oshiwara, Andheri West, Mumbai, Maharashtra - 400102. With our state-of-the-art manufacturing facilities and engineering capabilities, we serve clients worldwide.",
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
  title: "FAQs: Get the Info You Need | Umang Engineering",
  description: "Get quick answers to your queries with our detailed FAQs. Empower your research and understanding with reliable information at your fingertips!",
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