import { Typography } from "@mui/material";

// ---- Types ----
interface SustainabilityChildTextProps {
  heading1: string;
  heading2: string;
  caption: string;
}

export const SustainabilityChildText = ({
  heading1,
  heading2,
  caption,
}: SustainabilityChildTextProps) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: 32,
          fontWeight: 500,
          fontFamily: "Jost-sb",
          lineHeight: "20px",
          color: "#21272A",
          py: "24px",
        }}
      >
        {heading1}
      </Typography>

      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 400,
          fontFamily: "Jost",
          color: "#21272A",
          whiteSpace: "pre-line",
        }}
      >
        {caption}
      </Typography>

      <Typography
        sx={{
          fontSize: 32,
          fontWeight: 500,
          fontFamily: "Jost-sb",
          lineHeight: "40px",
          color: "#21272A",
          py: "24px",
        }}
      >
        {heading2}
      </Typography>
    </>
  );
};