import { Container, Grid } from "@mui/material";
import { CommonCardsOne } from "./CommonCardsOne";

// ---- Static data ----
const cardData = [
  {
    title: "Formats of Encapsulated Ashwagandha",
    description: "Lorem ipsum dolor sit amet consectetur. Dui tellus ut vitae diam. Venenatis fringilla aliquam quam risus aliquet metus pellentesque sit quis.",
    img: "/assets/images/resources/Magazinepicture.png",
    ctr_url: "/magazine",
  },
];

export const MagazineCards = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={2} justifyContent={{ xs: "space-around", md: "start" }}>
        {cardData.map((data, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
            <CommonCardsOne cardData={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};