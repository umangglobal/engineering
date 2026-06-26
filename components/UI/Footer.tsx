import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    title: "COMPANY",
    links: [
      { label: "About Us",           url: "/about-us"       },
      { label: "Case Studies",        url: "/case-studies"   },
      { label: "White Papers",        url: "/white-papers"   },
      { label: "Through Leadership",  url: "/leadership-team"},
      { label: "Our Mission & Vision",url: "/mission-vision" },
    ],
  },
  {
    title: "INNOVATIONS",
    links: [
      { label: "Sustainability", url: "/sustainability"          },
      { label: "Technology",     url: "/encapsulation-technology"},
      { label: "Brands",         url: "/our-other-brands"        },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Brochures",    url: "/catalogue-brochures"},
      { label: "Our Books",    url: "/ingredient-books"   },
      { label: "News & Media", url: "/media"              },
      { label: "Blogs",        url: "/blogs"              },
    ],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "FAQs",               url: "/faqs"             },
      { label: "Terms & Conditions", url: "/terms-conditions" },
      { label: "Privacy Policy",     url: "/privacy-policy"   },
      { label: "Cookie Preference",  url: "/cookies-policy"   },
      { label: "Sitemap",            url: "/sitemap"          },
    ],
  },
];

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#41939C",
        p: { xs: 3, md: 7 },
      }}
    >
      <Container>
        {/* Top Section: Address + Logo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 3, md: 14 },
            my: 2,
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              width: { xs: "100%", md: "200px" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 2, md: 0 },
              order: { xs: "inherit", md: 3 },
            }}
          >
            <Link href="/">
              <Box
                component="img"
                sx={{ width: { xs: "200px", md: "200px" } }}
                alt="Umang Engineering Footer Logo"
                src="/assets/images/footerLogo.svg"
              />
            </Link>
          </Box>

          {/* India Office */}
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: 500, mb: 1 }}>
              INDIA - CORPORATE OFFICE
            </Typography>
            <Typography sx={{ color: "white", fontSize: "14px", lineHeight: "20px" }}>
              Unit No. 1, 2nd Floor, Vicino (Mega Mall), New Link Rd, Oshiwara, Andheri West,
              Mumbai, Maharashtra, India. 400102
            </Typography>
          </Box>

          {/* Manufacturing Facility */}
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: 500, mb: 1 }}>
              MANUFACTURING FACILITY
            </Typography>
            <Typography sx={{ color: "white", fontSize: "14px", lineHeight: "20px" }}>
              Unit No. 1, Survey No. 52/2, NH8, Shirsad, Vajreshwari Road, Opp. Mandvi Police
              Station, Village - Mandvi, Taluka- Vasai, District- Palghar 401 303, India.
            </Typography>
          </Box>
        </Box>

        {/* Bottom Section: Links + Get In Touch */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: { xs: 2, md: 4 },
            my: 3,
          }}
        >
          {footerData.map((section, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 150px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "Jost-sb",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>

              {section.links.map((link, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 400,
                    mb: 1,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  <Link
                    href={link.url}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                </Typography>
              ))}
            </Box>
          ))}

          {/* Get In Touch */}
          <Box
            sx={{
              flex: "1 1 180px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontFamily: "Jost-sb",
                fontWeight: 500,
                mb: 1,
              }}
            >
              GET IN TOUCH
            </Typography>

            <Box
              sx={{
                height: "46px",
                bgcolor: "white",
                borderRadius: "30px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    height: "46px",
                    px: "24px",
                    py: "10px",
                    background: "white",
                    borderRadius: "26px",
                    color: "#41939C",
                    fontSize: "18px",
                    fontFamily: "Jost-sb",
                    textTransform: "none",
                    "&:hover": { background: "#41939C21" },
                  }}
                >
                  Drop us line
                </Button>
              </Link>
            </Box>

            <Typography sx={{ color: "white", fontSize: "14px", mb: 2 }}>
              <Link
                href="mailto:info@umangglobal.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                info@umangglobal.com
              </Link>
            </Typography>

            <SocialLinks />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};