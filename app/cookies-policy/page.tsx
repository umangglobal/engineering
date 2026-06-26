// app/cookies-policy/page.tsx

import { Box, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Types ----
interface PolicySectionProps {
  heading: string;
  content: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",           url: "/"                 },
  { title: "Resources",      url: "/resources"        },
  { title: "Information",    url: "/resources"        },
  { title: "Cookies Policy", url: "/cookies-policy"  },
];

const CookiesPolicyPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

const policySections: PolicySectionProps[] = [
  {
    heading: "1. What Are Cookies?",
    content: "Cookies are small data files placed on your device when you visit a website. They allow the site to remember your preferences, recognize your device, and improve overall functionality.",
  },
  {
    heading: "2. Cookies We Use",
    content: `Essential Cookies:\nRequired for core website functions such as navigation, secure access, and form submission.\n\nAnalytics Cookies:\nHelp us understand how visitors interact with the site so we can enhance performance.\n\nFunctional Cookies:\nThese store your settings preferences, such as language or region, for a personalized experience.\n\nMarketing Cookies:\nSet by third-party tools we use to help deliver relevant content and assess campaign effectiveness.`,
  },
  {
    heading: "3. Third-Party Cookies",
    content: "Third-party platforms such as analytics, marketing, or media service providers may place cookies on your device to support website functionality and performance. These providers manage their own cookie practices.",
  },
  {
    heading: "4. Managing Cookies",
    content: `You may manage or disable cookies through your browser settings. Most browsers allow you to block or remove cookies, customize cookie preferences for specific websites, and receive notifications when cookies are placed.\n\nPlease be aware that restricting cookies may limit certain website features and impact your overall browsing experience.`,
  },
  {
    heading: "5. Changes to This Policy",
    content: "This Cookies Policy may be revised periodically to reflect legal or operational changes. We recommend checking this page from time to time for updates.",
  },
  {
    heading: "6. Contact Us",
    content: `If you have any questions about our cookie practices, feel free to reach out:\n\nUmang Encapsulation Solutions Pvt. Ltd.\ninfo@umangglobal.com\n+91 95183 49134\n\nUnit 1, Unit 2, 2nd Floor, Vicino (Mega Mall),\nNew link road, Oshiwara, Andheri West,\nMumbai, Maharashtra 400102.`,
  },
];

// ---- Shared text styles ----
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
  title: "Cookies Policy | Umang Engineering",
  description: "Learn how UMANG Engineering uses cookies, analytics tools, and tracking technologies to optimize website performance, personalize user experiences, and ensure secure browsing.",
  alternates: {
    canonical: "https://www.umangengineering.com/cookies-policy",
  },
};

// ---- Page ----
export default function CookiesPolicyPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CookiesPolicyPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Cookies Policy"
        BannerImg="resources/CookiesPolicy-banner.png"
        BannerHeading="Cookies Policy"
        BannerCaption="Explore. Inform. Support."
      />

      <Box py={2}>
        <Container>
          {/* Page Title */}
          <Typography sx={{ fontSize: 32, fontWeight: 500, fontFamily: "Jost-sb", lineHeight: "20px", color: "#21272A", py: "24px" }}>
            Cookies Policy
          </Typography>

          {/* Intro */}
          <Typography sx={bodyStyle}>
            This Cookies Policy explains how Umang Engineering ("we", "our", or "us") uses cookies and similar technologies on our website to improve your browsing experience, analyze traffic, and personalize content.
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