import { Box, Typography } from "@mui/material";
import Link from "next/link";

// ---- Types ----
interface CardData {
  title: string;
  image: string;
  description: string;
  url: string;
  border?: boolean;
}

interface ResourcesCardsProps {
  cardData: CardData[];
}

export const ResourcesCards = ({ cardData }: ResourcesCardsProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        flexWrap: "wrap",
        alignContent: "space-around",
        justifyContent: { xs: "space-around", md: "start" },
        py: 8,
      }}
    >
      {cardData.map((card, index) => (
        <Link key={index} href={card.url} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              width: 342,
              backgroundColor: "transparent",
              borderRadius: "20px",
              px: 2,
              pt: 2,
              pb: 3.5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 2,
              height: 314,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: "100%",
                height: "80%",
                backgroundColor: "#DDE1E6",
                borderRadius: "8px",
                ...(card.border && { border: "1px solid #D5D5D5" }),
              }}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  flex: "1 1 0",
                  color: "#21272A",
                  fontSize: "20px",
                  fontFamily: "Jost-sb",
                  fontWeight: 500,
                  lineHeight: "20px",
                  wordWrap: "break-word",
                }}
              >
                {card.title}
              </Typography>
            </Box>
            <Typography
              sx={{
                alignSelf: "stretch",
                color: "#21272A",
                fontSize: "16px",
                fontFamily: "Jost",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              {card.description}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};