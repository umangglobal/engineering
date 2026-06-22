import { AccordianMain } from "../homeComponents/AccordianMain";
import { FAQItem } from "../homeComponents/AccordianFAQHome";

interface AccordianFaqProductProps {
  formattedFAQ: FAQItem[];
}

export const AccordianFaqProduct = ({ formattedFAQ }: AccordianFaqProductProps) => {
  return <AccordianMain FAQdata={formattedFAQ} />;
};