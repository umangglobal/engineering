// app/distributor/page.tsx

import { Box, Container } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { FormContactSider } from "@/components/UI/ContactComponents/FormContactSider";
import { TextBannerSection } from "@/components/UI/ContactComponents/TextBannerSection";
import { ContactCards } from "@/components/UI/ContactComponents/ContactCards";
import UmangForm from "@/components/UI/UmangForm";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Types ----
interface CardItem {
  title: React.ReactNode;
  description: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",        url: "/"             },
  { title: "Distributor", url: "/distributor"  },
];

const CardData: CardItem[] = [
  {
    title: "Own Manufacturing",
    description: "With our in-house manufacturing, we maintain direct control over every step of the procedure, offering better quality, faster turnaround, and full flexibility for your needs. Our robust logistics network ensures reliable worldwide delivery. Our commitment to excellence guarantees that every shipment meets the highest standards of safety.",
  },
  {
    title: "World Wide Network",
    description: "Umang Engineering has established a strong global footprint, serving clients across diverse markets. Our extensive distribution network ensures seamless access to innovative products and reliable supply chains. With trusted partnerships worldwide, we deliver consistent quality and support wherever your business operates.",
  },
  {
    title: <>44 Years of Experience</>,
    description: "For over four decades, Umang Engineering has been shaping innovation with engineering technology and bringing unmatched knowledge, technical expertise, and consistency to every project. Our journey reflects a commitment to quality, innovation, and customer success, making us a trusted partner for leading brands worldwide.",
  },
];

const DistributorsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Connect Trusted Distributors | Umang Engineering",
  description: "Umang Engineering connects you with trusted distributors. Explore our network to find reliable partners and elevate your engineering projects.",
  alternates: {
    canonical: "https://www.umangengineering.com/distributor",
  },
};

// ---- Page ----
export default function DistributorsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DistributorsPageSchema) }}
      />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent="Distributor" />

        <Box
          sx={{
            width: "100%",
            height: { xs: "1258px", md: "707px" },
            position: "relative",
          }}
        >
          <UmangForm
            formType="contact"
            HeadingBlack="Become a"
            HeadingColor="Distributor"
            SubHeading="Interested in our products? We're here to help, send us a message to get started."
          />
          <FormContactSider ContactImage="distributor" />
        </Box>
      </Container>

      <TextBannerSection
        TextBannerHeading="Perks of becoming distributor with Umang Engineering"
        TextBannerCaption="Partnering with us means access to innovative engineering solutions, bulk supply at competitive pricing, and products backed by global quality standards. We support our distributors with customization options, technical guidance, and long-term growth opportunities."
      />

      <ContactCards CardData={CardData} />
    </>
  );
}