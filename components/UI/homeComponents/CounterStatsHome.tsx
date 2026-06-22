'use client'

import { Box, Container, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";

interface Stat {
  number: number;
  label: string;
  suffix: string;
}

interface StatCardProps {
  number: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { number: 44,   label: "Years in the Industry",      suffix: ""  },
  { number: 10000, label: "Successful Projects",        suffix: "+" },
  { number: 2500,  label: "Happy Customers",            suffix: "+" },
  { number: 2000,  label: "Ingredients Encapsulated",   suffix: "+" },
];

const StatCard = ({ number, label, suffix }: StatCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        py: { xs: "6px", md: "14px" },
        px: { xs: "20px", md: "34px" },
        backgroundColor: "#fff",
        boxShadow: "0px 1px 2px rgba(0,0,0,0.4)",
        borderRadius: "12px",
        outline: "1px solid #E9E8E8",
        outlineOffset: "-1px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          width: { xs: 123, md: 196 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            fontFamily: "Jost",
            fontWeight: 700,
            textAlign: "center",
            color: "black",
            mb: 1,
            lineHeight: 1.1,
          }}
        >
          <CountUp end={number} duration={2.0} separator="," suffix={suffix} />
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontFamily: "Jost",
            fontWeight: { xs: 400, md: 500 },
            textAlign: "center",
            color: "black",
            lineHeight: 1.4,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export const CounterStatsHome = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        justifyContent="space-evenly"
        sx={{ width: "100%", mt: "48px" }}
      >
        {stats.map((stat, index) => (
          <Grid
            key={index}
            size={{ xs: 6, md: 3 }} 
            sx={{ display: "flex" }}
          >
            <StatCard
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};