// app/terms-conditions/page.tsx

import { Box, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Types ----
interface PolicySection {
  heading: string;
  content: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",               url: "/"                    },
  { title: "Resources",          url: "/resources"           },
  { title: "Information",        url: "/information"         },
  { title: "Terms & Conditions", url: "/terms-conditions"    },
];

const TermsConditionsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

const policySections: PolicySection[] = [
  {
    heading: "1. Acceptance of Terms",
    content: "By accessing this website, you agree to comply with our Terms & Conditions and Privacy Policy. If you do not accept these terms, please do not use the site.",
  },
  {
    heading: "2. Website Usage",
    content: "This website has to be used only for lawful purposes. Any misuse, interference with site operations, or violation of third-party rights is strictly prohibited.",
  },
  {
    heading: "3. Intellectual Property",
    content: "All content, including text, logos, graphics, visuals, trademarks, and product information on the site, is the intellectual property of Umang Nutraceuticals and may not be copied, shared, or modified without prior written permission.",
  },
  {
    heading: "4. Product Information",
    content: "Product details and technical information present on the site are provided for general reference only. We hold the authority to modify or discontinue products or specifications at any time without prior notice.",
  },
  {
    heading: "5. User Submissions",
    content: "Any feedback or materials submitted to us are to be used by Umang Nutraceuticals. We hold the rights to use them without the obligation of compensation or attribution.",
  },
  {
    heading: "6. Disclaimer of Warranties",
    content: `The website and its content are provided "as is" without warranties of any kind, whether express or implied. Umang Nutraceuticals makes no representation or warranties regarding the accuracy, completeness, or reliability of any content or product information.`,
  },
  {
    heading: "7. Limitation of Liability",
    content: "Umang Nutraceuticals shall not be responsible for any losses or damages arising from access to or use of this website, including direct, indirect, incidental, or consequential damages, system failures, or loss of data, arising from the use or inability to use this site.",
  },
  {
    heading: "8. Links to Third-Party Sites",
    content: "Our website may contain links to third-party sites, for which we assume no responsibility. We encourage you to learn their terms and policies before use.",
  },
  {
    heading: "9. Privacy",
    content: "Your use of this website is also subject to our Privacy Policy, which outlines how personal information is collected, processed, and safeguarded.",
  },
  {
    heading: "10. Governing Law",
    content: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Jurisdiction, and any disputes shall fall under the exclusive jurisdiction of the relevant courts.",
  },
  {
    heading: "11. Changes to Terms",
    content: "Umang Nutraceuticals reserves the right to amend these Terms at any time. Continued use of the website following updates signifies acceptance of the revised terms.",
  },
  {
    heading: "12. Contact Us",
    content: `For any questions or concerns regarding these Terms, please contact us at:\n\nUmang Encapsulation Solutions Pvt. Ltd.\ninfo@umangglobal.com\n+91 95183 49134\n\nUnit 1, Unit 2, 2nd Floor, Vicino (Mega Mall),\nNew link road, Oshiwara, Andheri West,\nMumbai, Maharashtra 400102.`,
  },
];

// ---- Shared styles ----
const headingStyle = {
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "Jost-sb",
  color: "#21272A",
  whiteSpace: "pre-line",
  paddingBottom: "10px",
} as const;

const bodyStyle = {
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "Jost",
  color: "#21272A",
  whiteSpace: "pre-line",
  paddingBottom: "24px",
} as const;

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Read Our Site Terms & Conditions | Umang Nutraceuticals",
  description: "Read the terms and conditions for Umang Nutraceuticals to understand your rights and responsibilities. Navigate our site with confidence and clarity.",
  alternates: {
    canonical: "https://www.umangNutraceuticals.com/terms-conditions",
  },
};

// ---- Page ----
export default function TermsConditionsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TermsConditionsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Terms & Conditions"
        BannerImg="resources/TermsConditions-banner.png"
        BannerHeading="Terms & Conditions"
        BannerCaption="Explore. Inform. Support."
      />

      <Box py={2}>
        <Container>
          {/* Page Title */}
          <Typography sx={{ fontSize: 32, fontWeight: 500, fontFamily: "Jost-sb", lineHeight: "20px", color: "#21272A", py: "24px" }}>
            Terms & Conditions
          </Typography>

          {/* Intro */}
          <Typography sx={bodyStyle}>
            Welcome to Umang Nutraceuticals. By accessing or using our website (the “Site”), you agree to comply with and be bound by the following terms and conditions. Please read them carefully.    
          </Typography>

          {/* Sections */}
          {policySections.map((section, index) => (
            <Box key={index}>
              <Typography sx={headingStyle}>{section.heading}</Typography>
              <Typography sx={bodyStyle}>{section.content}</Typography>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}