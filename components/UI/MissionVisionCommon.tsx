import { Box, List, ListItem, Typography } from "@mui/material";

const values = [
  "Integrity",
  "Accountability: driven by data, speed, and efficiency",
  "Customer Delight",
  "Pioneering Spirit",
  "Commitment to Excellence",
];

export const MissionVisionCommon = () => {
  return (
    <>
      {/* Mission Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          mb: 6,
        }}
      >
        <Box
          component="img"
          src="/assets/images/about/mission.webp"
          alt="Our Mission"
          sx={{ width: { xs: "100%", md: "50%" }, objectFit: "scale-down" }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: { xs: "20px", md: "48px" }, fontWeight: 500, pt: "15px" }}>
            Our Mission
          </Typography>
          <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", pt: "15px" }}>
            Our mission is to become a trusted global partner by achieving outstanding results based on a deep understanding of our customers’ needs, by offering customized encapsulation solutions in faster and more efficient ways. We are equally committed to becoming a “responsible and value-driven organization” in all our stakeholder relationships.
          </Typography>
        </Box>
      </Box>

      {/* Vision Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: 4,
          mb: 6,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: { xs: "20px", md: "48px" }, fontWeight: 500, pt: "15px" }}>
            Our Vision
          </Typography>
          <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", pt: "15px" }}>
            Our vision is to become a global leader in the microencapsulation market by 2030 through sustainable growth with the help of data-driven insights, agile decision-making, and execution.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/assets/images/about/vision.webp"
          alt="Our Vision"
          sx={{ width: { xs: "100%", md: "50%" }, objectFit: "scale-down" }}
        />
      </Box>

      {/* Values Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          component="img"
          src="/assets/images/about/values.webp"
          alt="Our Values"
          sx={{ width: { xs: "100%", md: "50%" }, objectFit: "scale-down" }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: { xs: "20px", md: "48px" }, fontWeight: 500, pt: "15px" }}>
            Our Values
          </Typography>
          <List component="ul" sx={{ listStyleType: "disc", pl: 2 }}>
            {values.map((value, index) => (
              <ListItem key={index} sx={{ display: "list-item", py: 0.5 }}>
                <Typography sx={{ fontFamily: "Jost", fontSize: { xs: "16px", md: "16px" } }}>
                  {value}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};