import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import Link from "next/link";

// ---- Types ----
interface Ctr {
  ctr_name: string;
  ctr_url: string;
}

interface CardDataProps {
  title?: string;
  description?: string;
  img: string;
  ctr?: Ctr;
  ctr_url: string;
}

interface CommonCardsOneProps {
  cardData: CardDataProps;
}

export const CommonCardsOne = ({ cardData }: CommonCardsOneProps) => {
  const { title, description, img, ctr, ctr_url } = cardData;

  return (
    <Link href={ctr_url} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          position: "relative",
          width: "370px",
          height: "auto",
          minHeight: "290px",
          pb: 2,
          boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.3)",
          borderRadius: "12px",
          border: "1px solid #F4F4F5",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Card Image */}
        <Card
          sx={{
            background: "#fff",
            borderRadius: "12px",
            outline: "1px solid white",
            outlineOffset: "-1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={img}
            alt={title ?? "Card image"}
            sx={{
              height: "auto",
              width: "100%",
              borderRadius: "12px",
              backgroundColor: "#DDE1E6",
            }}
          />
        </Card>

        {/* Title */}
        {title && (
          <Typography
            sx={{
              py: 1.5,
              px: 1,
              position: "relative",
              width: "100%",
              color: "#091610",
              fontSize: "18px",
              fontFamily: "Jost-sb",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            {title}
          </Typography>
        )}

        {/* Description */}
        {description && (
          <Typography
            sx={{
              px: 1,
              py: 1,
              position: "relative",
              width: "100%",
              color: "#6A8076",
              fontSize: "16px",
              fontFamily: "Jost",
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
        )}

        {/* Conditional Button */}
        {ctr?.ctr_name && ctr?.ctr_url && (
          <Button
            href={ctr.ctr_url}
            variant="contained"
            sx={{
              position: "relative",
              top: "2px",
              left: 15,
              fontFamily: "Jost",
              textTransform: "none",
              borderRadius: "8px",
              backgroundColor: "#41939C",
              "&:hover": { backgroundColor: "#b45868" },
            }}
          >
            {ctr.ctr_name}
          </Button>
        )}
      </Box>
    </Link>
  );
};