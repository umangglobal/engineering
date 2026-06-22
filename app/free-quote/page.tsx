// app/free-quote/page.tsx

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
  title: string;
  description: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",       url: "/"            },
  { title: "Free Quote", url: "/free-quote"  },
];

const CardData: CardItem[] = [
  {
    title: "Quick Response",
    description: "We value your time and ensure every query is addressed promptly. Our team provides quick responses within 24 hours, helping you move forward without delays. With us, support is always just a message away. Our dedicated experts are always ready to guide you with accurate solutions.",
  },
  {
    title: "World Wide Network",
    description: "Umang Nutraceuticals has established a strong global footprint, serving clients across diverse markets. Our extensive distribution network ensures seamless access to innovative products. With trusted partnerships worldwide, we deliver consistent quality and support wherever your business operates.",
  },
  {
    title: "Experienced Team",
    description: "Our team brings decades of expertise in encapsulation and formulation science. With deep industry knowledge and hands-on experience, we deliver innovative, reliable, and customized solutions. You can trust our experts to support your product from concept to commercialization.",
  },
];

const FreeQuotePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Free Quote: Quick & Easy | Umang Nutraceuticals",
  description: "Experience hassle-free service with Umang Nutraceuticals. Request your free quote now and unlock customized solutions for your projects!",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/free-quote",
  },
};

// ---- Page ----
export default function FreeQuotePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FreeQuotePageSchema) }}
      />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent="Free Quote" />

        <Box
          sx={{
            width: "100%",
            height: { xs: "1258px", md: "707px" },
            position: "relative",
          }}
        >
          <UmangForm
            formType="contact"
            HeadingBlack="Get a Free"
            HeadingColor="Quote"
            SubHeading="Interested in product pricing? Send us a message and our team will get back to you within 24 hours."
          />
          <FormContactSider ContactImage="free-quote" />
        </Box>
      </Container>

      <TextBannerSection
        TextBannerHeading="Benefits of ordering product/sample from us"
        TextBannerCaption="Ordering a product or sample from us lets you experience the quality, stability, and performance of our encapsulation solutions firsthand. It helps you evaluate suitability before bulk orders, explore customization options, and save time in product development — all with dedicated expert support."
      />

      <ContactCards CardData={CardData} />
    </>
  );
}