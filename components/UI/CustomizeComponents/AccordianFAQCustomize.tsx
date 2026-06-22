import { Box, Typography } from "@mui/material";
import { AccordianMain } from "../homeComponents/AccordianMain";
import { FAQItem } from "../homeComponents/AccordianFAQHome";

interface AccordianFAQCustomizeProps {
  FAQdata: FAQItem[];
}

export const AccordianFAQCustomize = ({ FAQdata }: AccordianFAQCustomizeProps) => {
  return (
    <Box my={8}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "left",
          display: "flex",
          justifyContent: "left",
          flexDirection: "column",
          color: "black",
          fontSize: { xs: "20px", md: "32px" },
          fontFamily: "Jost-sb",
          fontWeight: 500,
          wordWrap: "break-word",
          marginBottom: "50px",
        }}
      >
        FAQs on Customizations
      </Typography>
      <AccordianMain FAQdata={FAQdata} />
    </Box>
  );
};