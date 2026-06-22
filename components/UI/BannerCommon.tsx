import { Box, Grid, Typography } from "@mui/material";
import { Breadcrumb } from "./Breadcrumb";

interface BreadcrumbUrl {
  title: string;
  url: string;
}

interface BannerCommonProps {
  BreadcrumbsUrls: BreadcrumbUrl[];
  BreadcrumbsCurrent: string;
  BannerImg: string;
  BannerHeading: React.ReactNode; // ReactNode allows string OR JSX (e.g. with <sup>TM</sup>)
  BannerCaption: string | null;
}

export const BannerCommon = ({
  BreadcrumbsUrls,
  BreadcrumbsCurrent,
  BannerImg,
  BannerHeading,
  BannerCaption,
}: BannerCommonProps) => {
  return (
    <Box
      sx={{
        maxWidth: "1392px",
        maxHeight: { xs: "534px", md: "287px" },
        mx: "auto",
        my: 1,
        borderRadius: "16px",
        backgroundColor: "#FFF",
        backgroundImage: `url(/assets/images/home/pattern.webp), linear-gradient(272deg, #41939Ca8 0%, #41939C 100%)`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          p: 2,
          borderRadius: "16px",
          background: "linear-gradient(272deg, #41939C00 0%, #41939C 100%)",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          {/* Left Side - Text */}
          <Grid
            size={{ xs: 6, md: 6 }}
            sx={{
              maxWidth: "100%",
              maxHeight: "256px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "right",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Jost-sb",
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 500,
                paddingTop: "16px",
                color: "#fff",
              }}
            >
              {BannerHeading}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "Jost",
                fontSize: { xs: "21px", md: "32px" },
                fontWeight: 500,
                color: "#fff",
                marginBottom: "27px",
              }}
            >
              {BannerCaption}
            </Typography>

            <Breadcrumb
              BreadcrumbsUrls={BreadcrumbsUrls}
              BreadcrumbsCurrent={BreadcrumbsCurrent}
            />
          </Grid>

          {/* Right Side - Image */}
          <Grid
            size={{ xs: 6, md: 6 }}
            sx={{ display: "flex", gap: 2 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={`/assets/images/${BannerImg}`}
                alt={typeof BannerHeading === "string" ? BannerHeading : "Banner Image"}
                loading="lazy"
                sx={{
                  width: "616px",
                  borderRadius: "12px",
                  height: { xs: "160px", md: "222px" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};