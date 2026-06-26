// app/privacy-policy/page.tsx

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
  { title: "Home",           url: "/"                 },
  { title: "Resources",      url: "/resources"        },
  { title: "Information",    url: "/information"      },
  { title: "Privacy Policy", url: "/privacy-policy"   },
];

const PrivacyPolicyPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

const policySections: PolicySection[] = [
  {
    heading: "1. Information We Collect",
    content: `We collect information such as\n\nPersonal Information: Name, Company Details, Contact Details, Email ID, Job Title, and other information provided by choice\n\nBusiness Information: Project details, Inquiry data, or Service Information you voluntarily share with us\n\nTechnical Data: Information such as IP address, browser, and device details, referral sources, pages viewed, and usage duration collected through cookies and analytical tools`,
  },
  {
    heading: "2. How We Use Your Information",
    content: "Your information is used to respond to inquiries, provide product or service details, improve our website and offerings, send marketing communications where permitted, and comply with legal obligations.",
  },
  {
    heading: "3. Sharing Your Information",
    content: "We do not sell personal data. Information may be shared with internal teams, trusted third-party service providers (e.g., email platforms and analytical tools), or government authorities when required by law, subject to confidentiality obligations.",
  },
  {
    heading: "4. Cookies and Tracking Technologies",
    content: "Cookies and analytics tools help us understand user behavior and enhance site performance. You may manage cookie preferences through your browser settings.",
  },
  {
    heading: "5. Data Security and Retention",
    content: "Reasonable security measures are implemented to protect your data from unauthorized access. Information is retained only for as long as necessary for business or legal purposes.",
  },
  {
    heading: "6. Your Rights",
    content: "Subject to applicable laws, you may request access to, correction of, or deletion of your data, or withdraw from marketing communications. You may exercise your right, please contact us at info@umangglobal.com",
  },
  {
    heading: "7. External Links",
    content: "We are not responsible for the privacy practices of third-party websites linked from our site. Please review their privacy policy independently.",
  },
  {
    heading: "8. Children's Privacy",
    content: "This website is intended for business users and not for individuals under 18 years of age.",
  },
  {
    heading: "9. Policy Updates",
    content: "This policy may be updated periodically. Continued use of the website indicates acceptance of any changes.",
  },
  {
    heading: "10. Contact Information",
    content: `For privacy-related questions, please contact us at info@umangglobal.com\n\nUmang Encapsulation Solutions Pvt. Ltd.\ninfo@umangglobal.com\n+91 95183 49134\n\nUnit 1, Unit 2, 2nd Floor, Vicino (Mega Mall),\nNew link road, Oshiwara, Andheri West,\nMumbai, Maharashtra 400102.`,
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
  title: "Our Privacy Policy: Clear & Simple | Umang Engineering",
  description: "At Umang Engineering, our privacy policy is straightforward and transparent. Understand how we safeguard your information with clarity and care.",
  alternates: {
    canonical: "https://www.umangengineering.com/privacy-policy",
  },
};

// ---- Page ----
export default function PrivacyPolicyPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PrivacyPolicyPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Privacy Policy"
        BannerImg="resources/PrivacyPolicy-banner.png"
        BannerHeading="Privacy Policy"
        BannerCaption="Explore. Inform. Support."
      />

      <Box py={2}>
        <Container>
          {/* Page Title */}
          <Typography sx={{ fontSize: 32, fontWeight: 500, fontFamily: "Jost-sb", lineHeight: "20px", color: "#21272A", py: "24px" }}>
            Privacy Policy
          </Typography>

          {/* Intro */}
          <Typography sx={bodyStyle}>
            {`Effective Date: July, 11th 2020\nLast Updated: August, 10th 2025\n\nAt Umang encapsulation solutions, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us.`}
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