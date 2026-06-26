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
          As a company, our goal is to become a reliable engineering partner on the global market by providing innovative, dependable, and customized process solutions tailored to meet the changing needs of various manufacturers. With a strong understanding of the processes and challenges our customers face, we can provide our clients with engineering expertise and innovative machines to improve their productivity and efficiency.
          </Typography>
          <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", pt: "15px" }}>
          In addition, as a company, we believe in becoming a reliable, value-driven organization with strong relationships with our clients, employees, partners, and communities. We intend to use engineering, innovation, and integrity to provide sustainable value to our stakeholders in the modern manufacturing industry.
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
            To become a global leader in process engineering solutions by 2030 through innovation, sustainable growth, data-driven insights, and engineering excellence.
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