// app/encapsulation-technology/page.tsx

import { Box, Container, Grid, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Types ----
interface CardItem {
  title: string;
  description: string;
  img: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                     url: "/"                          },
  { title: "Resources",                url: "/resources"                 },
  { title: "Company",                  url: "/company"                   },
  { title: "Encapsulation Technology", url: "/encapsulation-technology"  },
];

const bottomCards: CardItem[] = [
  {
    title: "Protective Shell",
    description: "- Usually selected from a list of materials 'generally regarded as safe' (GRAS) to meet the needs of the application as well as regulatory demands e.g.. Biodegradability\n\n - USP Grade",
    img: "/assets/images/resources/encap2.png",
  },
  {
    title: "Core",
    description: "- Ingredients\n\n - Encapsulated Includes : Colors, Fragrances, Flavors, Vitamins & Oils etc.",
    img: "/assets/images/resources/encap3.png",
  },
  {
    title: "Target Delivery",
    description: "- Skin, hair and mucosal surfaces are useful targets for the delivery of active compounds.",
    img: "/assets/images/resources/encap4.png",
  },
];

const sphereCardsRow1: CardItem[] = [
  {
    title: "pH Responsive Spheres",
    img: "/assets/images/resources/encap6.png",
    description: "In this technique Spheres are coated with ionic pH sensitive polymers having as main feature that they release protons in response to pH change.\nHaving a structure acid or basic groups that can accept or release protons in response to pH change in surrounding environment.",
  },
  {
    title: "Color in Color Spheres",
    img: "/assets/images/resources/encap7.png",
    description: "These Spheres gives color changing effect on rubbing.\nColor in color Spheres is a simple concept where in the core is of one color and the out shell can be of different color.\nThe process consists essentially of spraying a color solution fluid on to particles of substrate material undergoing encapsulation.\nThis is achieved by fluid bed coating.",
  },
];

const sphereCardsRow2: CardItem[] = [
  {
    title: "Oil Encapsulation",
    img: "/assets/images/resources/encap8.png",
    description: "The encapsulation method provided Spheres where oil droplets were well dispersed and protected.\nThe wall material used commonly includes synthetic polymer and natural biomaterials (usually carbohydrates).",
  },
  {
    title: "Flavor Encapsulation",
    img: "/assets/images/resources/encap9.png",
    description: "Encapsulation of flavor and fragrance in dedicated shell.\nIt can limit the degradation or loss of the flavor during the various product process and storage.\nThe shell can also provide the functional properties such as control release of aromatic molecules in given environment.",
  },
];

const sphereCardSx = {
  width: { xs: "320px", md: "525px" },
  alignSelf: "stretch",
  padding: "36px",
  backgroundColor: "white",
  boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
  borderRadius: "36px",
  outline: "2px solid #E9E8E8",
  outlineOffset: "-2px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: { xs: "center", md: "flex-start" },
  alignItems: "flex-start",
  gap: "10px",
};

const EncapsulationTechnologyPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Umang Encapsulation Technology | Umang engineering",
  description: "Explore cutting-edge Umang Encapsulation Technology and pharma, designed to optimize formulations and improve efficiency in various applications.",
  alternates: {
    canonical: "https://www.umangengineering.com/encapsulation-technology",
  },
};

// ---- Page ----
export default function EncapsulationTechnologyPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EncapsulationTechnologyPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Encapsulation Technology"
        BannerImg="resources/encapsulation-technology-banner.png"
        BannerHeading="Encapsulation"
        BannerCaption="Technology"
      />

      <Container>
        {/* Top Section */}
        <Box sx={{ py: 4, width: "100%", display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap", justifyContent: "space-around" }}>
          <Box sx={{ width: "525px", height: "240px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px", position: "relative" }}>
            <Box component="img" src="/assets/images/resources/encap1.png" alt="Encapsulation" sx={{ width: "459px", height: "272px" }} />
          </Box>

          <Box sx={{ width: "525px", display: "flex", flexDirection: "column", gap: "142px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
              <Typography sx={{ fontSize: "32px", fontFamily: "Jost-sb", fontWeight: 500, color: "#091610" }}>
                Encapsulation Technology
              </Typography>
              <Typography sx={{ fontSize: "16px", fontFamily: "Jost", fontWeight: 400, color: "#091610", whiteSpace: "pre-line" }}>
                {"Encapsulation technology essentially deals with the incorporation of commercially available active material into protective system that can deliver the active to specific site.\nSkin, hair and mucosal surfaces are useful targets for the delivery of active compounds.\nThe core is covered by solid shell which is used to deliver, protect stabilize or control the release of the core/active."}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Bottom Cards */}
        <Grid container spacing={3} mt={4} justifyContent="space-around">
          {bottomCards.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box sx={{ p: 1, width: "333px", backgroundColor: "white", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "14px" }}>
                <Box sx={{ height: "204px", backgroundColor: "white", borderRadius: "36px", outline: "1px solid white", outlineOffset: "-1px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Box component="img" src={item.img} alt={item.title} sx={{ height: "204px", width: "100%" }} />
                </Box>
                <Typography sx={{ color: "#091610", fontSize: "20px", fontFamily: "Jost-sb", fontWeight: 500, lineHeight: "20px" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, whiteSpace: "pre-line" }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Reasons Section */}
        <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-end", gap: "24px", mt: 4 }}>
          <Box sx={{ width: "891px", display: "flex", flexDirection: "column", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-start", gap: "24px", px: 2 }}>
            <Typography sx={{ color: "black", fontSize: "32px", fontFamily: "Jost-sb", fontWeight: 500, wordWrap: "break-word" }}>
              Reasons to Employ an Encapsulation
            </Typography>
            <Typography sx={{ color: "black", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, whiteSpace: "pre-line", wordWrap: "break-word" }}>
              {"1.Superior handling of active material (e.g. conversion of liquid active agent into a powder).\n 2. Improved stability in final products during processing (e.g. less evaporation of volatile active).\n 3. Creation of visible effects.\n 4. Adjustable properties of active components (particle size, structure, oil or water soluble color.\n 5. Off taste masking. \n 6. Controlled release."}
            </Typography>
          </Box>
        </Box>

        {/* Types of Encapsulated Spheres */}
        <Box sx={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-end", gap: "24px", mt: 4 }}>
          <Box sx={{ width: "891px", display: "flex", flexDirection: "column", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-start", gap: "24px", px: 2 }}>
            <Typography sx={{ color: "black", fontSize: "32px", fontFamily: "Jost-sb", fontWeight: 500, wordWrap: "break-word" }}>
              Types of Encapsulated Spheres
            </Typography>
            <Typography sx={{ color: "black", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, whiteSpace: "pre-line", wordWrap: "break-word" }}>
              {"1. Pressure release / burst release / water penetration control system.\n 2. This is design as water as the main agent controlling the release of the active.\n 3. In this system active molecules cannot physically diffuse out the device without water molecule diffusing in\n 4. This is usually achieved by incorporating actives in hydrophilic polymer that is stiff when dry but swells when placed in aqueous environment."}
            </Typography>
          </Box>
          <Box component="img" src="/assets/images/resources/encap5.png" alt="Encapsulated Spheres" sx={{ width: "159px", height: "159px", borderRadius: "12px" }} />
        </Box>

        {/* Sphere Type Cards */}
        <Box sx={{ py: 4, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-start", gap: "24px" }}>

          {/* Row 1 */}
          <Box sx={{ alignSelf: "stretch", display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-start", gap: "24px", flexWrap: "wrap", px: 2 }}>
            {sphereCardsRow1.map((item, index) => (
              <Box key={index} sx={sphereCardSx}>
                <Box sx={{ width: { xs: "275px", md: "453px" }, display: "flex", flexDirection: "column", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-start", gap: "24px" }}>
                  <Box component="img" src={item.img} alt={item.title} sx={{ width: { xs: "88%", md: "200px" }, height: { xs: "auto", md: "200px" }, borderRadius: "12px" }} />
                  <Typography sx={{ fontSize: "20px", fontFamily: "Jost-sb", fontWeight: 500, color: "black", lineHeight: "20px" }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: "16px", fontFamily: "Jost", fontWeight: 400, color: "black", whiteSpace: "pre-line" }}>{item.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Row 2 */}
          <Box sx={{ alignSelf: "stretch", display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center", gap: "24px", flexWrap: "wrap", px: 2 }}>
            {sphereCardsRow2.map((item, index) => (
              <Box key={index} sx={sphereCardSx}>
                <Box sx={{ width: { xs: "275px", md: "453px" }, display: "flex", flexDirection: "column", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-start", gap: "24px" }}>
                  <Box component="img" src={item.img} alt={item.title} sx={{ width: { xs: "88%", md: "200px" }, height: { xs: "auto", md: "200px" }, borderRadius: "12px" }} />
                  <Typography sx={{ fontSize: "20px", fontFamily: "Jost-sb", fontWeight: 500, color: "black", lineHeight: "20px" }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: "16px", fontFamily: "Jost", fontWeight: 400, color: "black", whiteSpace: "pre-line" }}>{item.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}