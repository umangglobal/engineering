// app/contact-us/page.tsx

import { Box, Typography, Container } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import { FormContactSider } from "@/components/UI/ContactComponents/FormContactSider";
import UmangForm from "@/components/UI/UmangForm";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Types ----
interface LocationCardProps {
  title: string;
  address: string;
  imageUrl: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",       url: "/"           },
  { title: "Contact Us", url: "/contact-us" },
];

const ContactUsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Contact Us | Umang Nutraceuticals",
  description: "Umang Nutraceuticals offers pharmaceutical solutions. Contact us now to explore exclusive deals and find what you're looking for.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/contact-us",
  },
};

// ---- LocationCard component ----
const LocationCard = ({ title, address, imageUrl }: LocationCardProps) => (
  <Box
    sx={{
      width: { xs: "100%", sm: "90%", md: "525.33px" },
      p: 3,
      backgroundColor: "white",
      borderRadius: "20px",
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: "16px",
    }}
  >
    {/* Map iframe */}
    <Box
      sx={{
        width: { xs: "100%", sm: 211 },
        height: { xs: 200, sm: 270 },
        backgroundColor: "#DDE1E6",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <iframe
        src={imageUrl}
        width="100%"
        height="100%"
        style={{ borderRadius: 20 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>

    {/* Content */}
    <Box
      sx={{
        flex: "1 1 0",
        py: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "20px", md: "36px" } }}>
        <Typography fontSize={{ xs: 22, sm: 28, md: 32 }} fontWeight={500} color="#21272A" fontFamily="Jost">
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography fontSize={{ xs: 16, md: 20 }} fontWeight={500} color="#21272A" fontFamily="Jost">
            Address:
          </Typography>
          <Typography fontSize={{ xs: 13, sm: 14 }} fontWeight={500} color="#21272A" fontFamily="Jost">
            {address}
          </Typography>
        </Box>
      </Box>

      {/* Directions */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: 2 }}>
        <Box sx={{ width: "100%", height: 0, outline: "2px solid #41939CA8", outlineOffset: "-1px" }} />
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            height: 48,
            width: { xs: "100%", sm: 194 },
            borderRadius: "26px",
            py: "10px",
            px: 1,
          }}
        >
          <Typography fontSize={{ xs: 16, sm: 18 }} fontWeight={500} color="#41939C" letterSpacing="0.36px" fontFamily="Jost">
            Directions
          </Typography>
          <NearMeRoundedIcon sx={{ fontSize: 24, color: "#41939C" }} />
        </Box>
      </Box>
    </Box>
  </Box>
);

// ---- Page ----
export default function ContactUsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ContactUsPageSchema) }}
      />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent="Contact Us" />

        <Box
          sx={{
            width: "100%",
            height: { xs: "1258px", md: "707px" },
            position: "relative",
          }}
        >
          <UmangForm
            formType="contact"
            HeadingBlack="Let's Talk,"
            HeadingColor="Reach Out to Us"
            SubHeading="Have a question about our products? Drop us a message and our team will get back to you within 24 hours."
          />
          <FormContactSider ContactImage="contact" />
        </Box>
      </Container>

      {/* All Locations */}
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: { xs: 28, sm: 34, md: 40 },
          fontWeight: 500,
          color: "black",
          backgroundColor: "#FFDAC1",
          py: 4,
        }}
      >
        All Locations
      </Typography>

      <Box
        sx={{
          width: "100%",
          py: "46px",
          backgroundColor: "#FFDAC1",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "24px", md: "46px" },
          fontFamily: "Jost, sans-serif",
        }}
      >
        <LocationCard
          title="Head Office"
          address="Unit 1, Unit 2, 2nd Floor, Vicino (Mega Mall), New link road, Oshiwara, Andheri West, Mumbai, Maharashtra 400102."
          imageUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.999904951174!2d72.83178857346185!3d19.151481449601985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b797a6f6e621%3A0xd82a09f154e1e943!2sUmang%20Global%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1724298683102!5m2!1sen!2sin"
        />
        <LocationCard
          title="Facility"
          address="Unit No. 1, Survey No. 52/2, NH8, Shirsad, Village - Mandvi, Taluka- Vasai, District- Palghar 401 303, India."
          imageUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7523.050256133776!2d72.90154844357076!3d19.47603048386803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a700222a759f%3A0xd201ec9d5d7d98c1!2sUmang%20Encapsulation%20Solutions!5e0!3m2!1sen!2sin!4v1770356293566!5m2!1sen!2sin"
        />
      </Box>
    </>
  );
}