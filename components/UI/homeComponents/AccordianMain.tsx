'use client'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { FAQItem } from './AccordianFAQHome';

interface AccordianMainProps {
  FAQdata: FAQItem[];
}

export const AccordianMain = ({ FAQdata }: AccordianMainProps) => {
  return (
    <Container>
      {FAQdata.map((item, index) => (
        <Accordion
          key={index}
          defaultExpanded={item.defaultExpanded === "defaultExpanded"}
          sx={{
            background: "#C3E9ED",
            borderBottom: "1px solid #41939C",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography
              component="span"
              sx={{ fontFamily: "jost-sb", fontWeight: 500 }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ fontWeight: 400 }}>
            {item.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};