import { Box, Container, Typography } from "@mui/material";
import { AccordianMain } from "./AccordianMain";

export interface FAQItem {
  title: string;
  description: string;
  defaultExpanded: string;
}

const faqData: FAQItem[] = [
  {
    title: "What does Umang Engineering specialize in?",
    description: "Umang Engineering is a company that designs, develops, and manufactures innovative process machinery and manufacturing plants for industries such as pharma, nutra, food, chemical, and related sectors. Some of our processes include extrusion, spheronization, fluid-bed processes, granulation, coating, pelletizing, and more.",
    defaultExpanded: "defaultExpanded",
  },
  {
    title: "Why is process engineering important in modern manufacturing?",
    description: "Advanced process engineering enables maintaining product quality, improving production processes, optimizing resources, and scaling up production. Good equipment design helps industries improve operational reliability and adhere to industry standards.",
    defaultExpanded: "",
  },
  {
    title: "How does Umang Engineering support its partners?",
    description: "We collaborate with our clients to understand the processes they require and their manufacturing objectives. Through engineering, specialized machinery, technical services, and process optimization, we help our partners improve their productivity and efficiency.",
    defaultExpanded: "",
  },
  {
    title: "What types of equipment does Umang Engineering offer?",
    description: "The product range comprises extruders, spheronizers, fluid bed processors, granulators, coating plants, machinery for the production of oral thin films, integrated pelletization lines, and customized solutions that cater to different manufacturing needs.",
    defaultExpanded: "",
  },
  {
    title: "Where is Umang Engineering located?",
    description: "Umang Engineering is situated in India, with its headquarters at Unit No. 1, 2nd Floor, Vicino (Mega Mall), New Link Road, Oshiwara, Andheri West, Mumbai, Maharashtra - 400102. With our state-of-the-art manufacturing facilities and engineering capabilities, we serve clients worldwide.",
    defaultExpanded: "",
  },
];

export const AccordianFAQHome = () => {
  return (
    <Box sx={{ my: 8 }}>
      <Container>
        <Typography
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
            marginBottom: "15px",
          }}
        >
          FAQs
        </Typography>
      </Container>
      <AccordianMain FAQdata={faqData} />
    </Box>
  );
};