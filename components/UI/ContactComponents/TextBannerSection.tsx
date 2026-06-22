import { Box, Typography } from "@mui/material";

// ---- Types ----
interface TextBannerSectionProps {
  TextBannerHeading: string;
  TextBannerCaption: string;
}

export const TextBannerSection = ({
  TextBannerHeading,
  TextBannerCaption,
}: TextBannerSectionProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        px: "60px",
        py: "46px",
        backgroundColor: "#FFDAC1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "1034px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "black",
            fontSize: { xs: "21px", md: "32px" },
            fontFamily: "Jost-sb",
            fontWeight: 500,
            wordWrap: "break-word",
          }}
        >
          {TextBannerHeading}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "black",
            fontSize: "16px",
            fontFamily: "Jost",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          {TextBannerCaption}
        </Typography>
      </Box>
    </Box>
  );
};