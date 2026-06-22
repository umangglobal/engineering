import { Box, Container, Typography } from "@mui/material";

const brands = [
  'Brands_torrent-pharma',
  'Brands_FDC',
  'Brands_dr-reddys',
  'Brands_graviti',
  'Brands_USV',
  'Brands_biocon',
];

export const BrandsTrustHome = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Typography
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          color: "black",
          fontSize: { xs: "20px", md: "32px" },
          fontFamily: "Jost-sb",
          fontWeight: 500,
          wordWrap: "break-word",
          marginBottom: "15px",
        }}
      >
        BRANDS WHO TRUSTS US
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(6, 1fr)",
          },
          justifyItems: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {brands.map((brand) => (
          <Box
            key={brand}
            sx={{
              width: "100%",
              height: "108px",
              border: "1px solid #80808096",
              borderRadius: "5px",
              justifyItems: "center",
              alignContent: "center",
            }}
          >
            <Box
              component="img"
              src={`/assets/images/brand/${brand}.webp`}
              alt={`Brand ${brand}`}
              loading="lazy"
              sx={{
                width: "auto",
                height: "-webkit-fill-available",
                m: 1,
              }}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default BrandsTrustHome;