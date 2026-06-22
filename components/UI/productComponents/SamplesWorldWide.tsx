import { Box, Grid, Typography } from "@mui/material";
import GlobalIcon from "@/assets/icons/product/global.svg";
import SamplesIcon from "@/assets/icons/product/samples.svg";

export const SamplesWorldWide = () => {
  return (
    <>
      {/* Free Samples */}
      <Grid size={{ xs: 12, md: 12 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                p: "13px",
                backgroundColor: "#41939C21",
                borderRadius: "28px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  color: "#41939C",
                }}
              >
                <SamplesIcon style={{ width: "30px", height: "30px" }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: 20, fontWeight: 500, color: "#091610", fontFamily: "Jost" }}>
                Industry Standard Machinery 
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Jost", color: "#091610" }}>
                For production and research
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Worldwide Delivery */}
      <Grid size={{ xs: 12, md: 12 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                p: "13px",
                backgroundColor: "#41939C21",
                borderRadius: "28px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  position: "relative",
                  color: "#41939C",
                }}
              >
                <GlobalIcon style={{ width: "30px", height: "30px" }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: 20, fontWeight: 500, color: "#091610", fontFamily: "Jost" }}>
                Worldwide Delivery
              </Typography>
              <Typography sx={{ fontSize: 16, fontFamily: "Jost", color: "#091610" }}>
                Your order, at your doorstep
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};