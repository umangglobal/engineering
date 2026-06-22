'use client'

import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import Link from "next/link";

// ---- Types ----
interface Product {
  product_id: string | number;
  product_name: string;
  product_slug: string;
  product_active: string;
}

interface ProductsCardsProps {
  data: Product[];
}

export const ProductsCards = ({ data }: ProductsCardsProps) => {
  return (
    <Box my={8}>
      <Grid container spacing={3} justifyContent="space-around">
        {data?.map((curElem) => {
          const { product_id, product_name, product_slug, product_active } = curElem;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product_id}>
              <Link
                href={`/product-single/${product_slug}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    width: "342px",
                    height: "100%",
                    backgroundColor: "white",
                    boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.70)",
                    borderRadius: "12px",
                    border: "1px solid #F4F4F5",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 195.4,
                      position: "relative",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={`/assets/images/products/outer-cards/${product_active.replace(/ /g, "-")}.webp`}
                      alt={product_name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderRadius: "12px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4F4348",
                        fontSize: 14,
                        fontWeight: 500,
                        opacity: 0.6,
                        fontFamily: "Jost",
                      }}
                    >
                      {product_active}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "#091610",
                        fontSize: 24,
                        fontWeight: 500,
                        fontFamily: "Jost-sb",
                      }}
                    >
                      {product_name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};