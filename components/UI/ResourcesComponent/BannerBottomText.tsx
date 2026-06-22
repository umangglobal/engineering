import { Box, Chip, Typography } from "@mui/material";

// ---- Types ----
interface BannerBottomTextProps {
  BannerDate: string;
  BannerTag: string;
  Bannertitle: string;
  BannerCaption: string;
  BannerAuthor?: string;
}

export const BannerBottomText = ({
  BannerDate,
  BannerTag,
  Bannertitle,
  BannerCaption,
  BannerAuthor,
}: BannerBottomTextProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "24px",
        py: 3,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {/* Date and Tag */}
        <Box sx={{ display: "inline-flex", justifyContent: "flex-start", alignItems: "center", gap: "36px" }}>
          <Typography sx={{ color: "black", fontSize: "12px", fontFamily: "Jost", fontWeight: 400 }}>
            {BannerDate}
          </Typography>

          <Chip
            label={BannerTag}
            size="small"
            sx={{
              height: "18px",
              padding: "5px 8px",
              backgroundColor: "transparent",
              borderRadius: "15px",
              color: "white",
              fontSize: "12px",
              fontFamily: "Jost",
              fontWeight: 400,
              "& .MuiChip-label": { padding: 0 },
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            alignSelf: "stretch",
            textAlign: "left",
            color: "black",
            fontSize: { xs: "32px", md: "48px" },
            fontFamily: "Jost-sb",
            fontWeight: 500,
            mt: 2,
          }}
        >
          {Bannertitle}
        </Typography>

        {/* Caption */}
        <Typography
          sx={{
            color: "black",
            fontSize: "16px",
            fontFamily: "Jost",
            fontWeight: 500,
            mt: 1,
            whiteSpace: "pre-line",
          }}
        >
          {BannerCaption}
        </Typography>
      </Box>

      {/* Author Info — rendered only if provided */}
      {BannerAuthor && (
        <Box sx={{ display: "inline-flex", justifyContent: "flex-start", alignItems: "center", gap: "36px" }}>
          <Typography sx={{ color: "black", fontSize: "14px", fontFamily: "Jost", fontWeight: 500 }}>
            {BannerAuthor}
          </Typography>
        </Box>
      )}
    </Box>
  );
};