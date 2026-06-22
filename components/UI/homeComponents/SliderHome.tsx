'use client'

import ProductCategories from "../../../lib/api/ProductCategoriesFormat.json";
import { Box, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ProductCard } from "../productComponents/ProductCard";

export const SliderHome = () => {
  return (
    <>
      <Box sx={{ px: 2, py: 6 }}>
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
          OUR ENGINEERING PRODUCT LINE
        </Typography>

        
          <Swiper
          modules={[Autoplay]}
           loop={true}
          //slidesPerView={5} // show 3 cards per row
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2, // for small screens (mobile)
              spaceBetween: 195,
            },
            500: {
              slidesPerView: 2.5, // for md screens (>= 500px)
              spaceBetween: 170,
            },
            900: {
              slidesPerView: 3.5, // for md screens (>= 900px)
              spaceBetween: 70,
            },
            1200: {
              slidesPerView: 4.5, // for xl screens (>= 1200px)
              spaceBetween: 40,
            },
            1600: {
              slidesPerView: 5.5, // for xxl screens (>= 1200px)
              spaceBetween: 40,
            },
          }}
        >
            {ProductCategories.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard item={item} outer="home" />
              </SwiperSlide>
            ))}
          </Swiper>
       
      </Box>
    </>
  );
};