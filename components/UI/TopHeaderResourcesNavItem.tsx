'use client'

import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import MediaIcon from "@/assets/icons/navigation/media.svg";
import CapabilitiesIcon from "@/assets/icons/navigation/capabilities.svg";
import CompanyIcon from "@/assets/icons/navigation/company.svg";
import DownloadsIcon from "@/assets/icons/navigation/downloads.svg";
import InformationIcon from "@/assets/icons/navigation/information.svg";
import Link from 'next/link';
import { FC, SVGProps } from 'react';

// ---- Types ----
interface TabLabel {
  title: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  url: string;
}

interface TabLinkItem {
  label: string;
  url: string;
}

// ---- Data ----
const tabLab: TabLabel[] = [
  {
    title: "Media",
    description: "Material which explains our products and brand",
    icon: MediaIcon,
    url: "/media",
  },
  {
    title: "Downloads",
    description: "Literature for your queries and our publications",
    icon: DownloadsIcon,
    url: "/downloads",
  },
  {
    title: "Company",
    description: "What we stand for, our leadership and employees",
    icon: CompanyIcon,
    url: "/company",
  },
  {
    title: "Capabilities",
    description: "How we will fulfill your order requirements with ease",
    icon: CapabilitiesIcon,
    url: "/capabilities",
  },
  {
    title: "Information",
    description: "Technical specifications and other helpful data",
    icon: InformationIcon,
    url: "/information",
  },
];

const tabLabels: TabLinkItem[][] = [
  [
    { label: "Blogs",              url: "/blogs"            },
    { label: "Videos",             url: "/videos"           },
    { label: "Magazine",           url: "/magazine"         },
    { label: "News & Exhibitions", url: "/news-exhibition"  },
    { label: "Sustainability",     url: "/sustainability"   },
  ],
  [
    { label: "Catalog & Brochures", url: "/catalogue-brochures" },
    { label: "Flyers",              url: "/flyers"              },
    { label: "Ingredient Books",    url: "/ingredient-books"    },
    { label: "Formulations",        url: "/formulations"        },
    { label: "White Papers",        url: "/white-papers"        },
  ],
  [
    { label: "Leadership & Team",  url: "/leadership-team"          },
    { label: "Services",           url: "/services"                 },
    { label: "Technology",         url: "/encapsulation-technology" },
    { label: "Our Other Brands",   url: "/our-other-brands"         },
    { label: "Careers",            url: "/careers"                  },
  ],
  [
    { label: "Bulk & Contract Manufacturing",       url: "/bulk-contract-manufacturing"          },
    { label: "Quality Control",                     url: "/quality-control"                      },
    { label: "Co-Development Projects",             url: "/co-development-project"               },
    { label: "Manufacturing Site Transfer Projects",url: "/manufacturing-site-transfer-projects" },
    { label: "White Labelling & Co Branding",       url: "/white-labelling-co-branding"          },
  ],
  [
    { label: "FAQs",                url: "/faqs"              },
    { label: "Terms & Conditions",  url: "/terms-conditions"  },
    { label: "Privacy Policy",      url: "/privacy-policy"    },
    { label: "Mission & Vision",    url: "/mission-vision"    },
    { label: "Certificates",        url: "/certificates"      },
  ],
];

// ---- Component ----
export const TopHeaderResourcesNavItem = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        fontFamily: "Jost",
      }}
    >
      {/* Background Card */}
      <Box
        sx={{
          width: 600,
          height: 520,
          position: "absolute",
          backgroundColor: "white",
          boxShadow: "1px 1px 10px 4px rgba(0, 0, 0, 0.10)",
          borderRadius: "24px",
        }}
      />

      {/* Title */}
      <Box
        sx={{
          position: "absolute",
          top: 29,
          left: 70,
          fontSize: 12,
          color: "#7B7275",
          fontWeight: 400,
        }}
      >
        Resources
      </Box>

      {/* Tabs — LEFT side */}
      <Box sx={{ position: "absolute", top: 61, left: 25, width: "40.9%" }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{
            ".MuiTab-root": {
              fontSize: "16px",
              fontFamily: "Jost",
              fontWeight: 400,
              color: "black",
              alignItems: "flex-start",
              textTransform: "none",
              minHeight: "24px",
              textAlign: "left",
              padding: "12px",
            },
            ".Mui-selected": {
              color: "black",
              fontWeight: 600,
              borderRadius: "12px",
              backgroundColor: "#E9E8E8",
            },
          }}
        >
          {tabLab.map((label, index) => {
            const IconNav = label.icon;
            return (
              <Tab
                key={index}
                onMouseEnter={() => setValue(index)}
                label={
                  <Box sx={{ textAlign: "left", display: "flex", gap: "10px" }}>
                    <Box>
                      <IconNav style={{ width: "24px", height: "24px", color: "#141B34" }} />
                    </Box>
                    <Box>
                      <Link href={label.url} style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            fontFamily: "Jost",
                            color: "#091610",
                          }}
                        >
                          {label.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            fontFamily: "Jost",
                            color: "#7B7275",
                          }}
                        >
                          {label.description}
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                }
              />
            );
          })}
        </Tabs>
      </Box>

      {/* Tab Content — RIGHT side */}
      <Box
        sx={{
          position: "absolute",
          top: 50,
          left: 325,
          width: "40%",
          minHeight: "300px",
          padding: 3,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ mb: 2 }}>
          {tabLabels[value].map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Jost",
                  px: 1.5,
                  py: 1,
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#41939C",
                    transform: "translateX(5px)",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>

      {/* Vertical Divider */}
      <Box
        sx={{
          position: "absolute",
          top: 55,
          left: 310,
          height: 455,
          width: 0,
          borderLeft: "1px solid #E8E9E8",
        }}
      />
    </Box>
  );
};