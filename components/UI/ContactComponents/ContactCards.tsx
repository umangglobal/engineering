import { Box, Typography } from "@mui/material";

// ---- Types ----
interface CardItem {
  title: React.ReactNode;
  description: string;
}

interface ContactCardsProps {
  CardData: CardItem[];
}

export const ContactCards = ({ CardData }: ContactCardsProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        py: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      {CardData.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "342px",
            px: "34px",
            py: "55px",
            backgroundColor: "#41939CA8",
            borderRadius: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                color: "black",
                fontSize: "27px",
                fontFamily: "Jost",
                fontWeight: 500,
                wordWrap: "break-word",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                color: "black",
                fontSize: "16px",
                fontFamily: "Jost",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};