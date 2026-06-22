'use client'

import { useState } from "react";
import { Box, Slider, SliderValueLabelProps, Tooltip, Typography } from "@mui/material";

// ---- Types ----
const beadSizes: Record<number, string> = {
  0:   "XS",
  16:  "VVS",
  33:  "VS",
  49:  "S",
  66:  "M",
  82:  "L",
  100: "XL",
};

// ---- Value Label Component ----
function ValueLabelComponent({ children, open }: SliderValueLabelProps) {
  const numericValue = (children?.props as { "aria-valuenow"?: number })?.["aria-valuenow"] ?? 0;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={beadSizes[numericValue] ?? ""}
      arrow
    >
      {children}
    </Tooltip>
  );
}

// ---- Component ----
export default function BeadSizeSlider() {
  const [value, setValue] = useState(33);

  return (
    <Box display="flex" gap={2} alignItems="flex-start">
      {/* Stepper number and line */}
      <Box
        width={24}
        height={189}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        gap={3}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            backgroundColor: "#41939C",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontFamily: "Jost, Jost-fallback, system-ui, sans-serif",
            color: "white",
          }}
        >
          3
        </Box>
        <Box sx={{ width: "1px", height: 120, backgroundColor: "#BDBDBD" }} />
      </Box>

      {/* Content Section */}
      <Box width={493} display="flex" flexDirection="column" gap={1.5}>
        <Box>
          <Typography fontSize={32} fontWeight={500} fontFamily="Jost">
            Select Bead Size
          </Typography>
          <Typography fontSize={16} fontWeight={400} fontFamily="Jost">
            Contact us if bead size is not mentioned below
          </Typography>
        </Box>

        {/* Slider */}
        <Box sx={{ width: { xs: 290, md: 463 } }} position="relative">
          <Slider
            value={value}
            onChange={(_, newValue) => setValue(newValue as number)}
            valueLabelDisplay="auto"
            slots={{ valueLabel: ValueLabelComponent }}
            marks={[
              { value: 0,   label: "<0.2mm"    },
              { value: 16,  label: "0.2-0.3mm" },
              { value: 33,  label: "0.3-0.6mm" },
              { value: 49,  label: "0.6-0.8mm" },
              { value: 66,  label: "0.8-1.4mm" },
              { value: 82,  label: "1.4-2.0mm" },
              { value: 100, label: "2.0-5.0mm" },
            ]}
            step={null}
            sx={{
              color: "#41939C",
              height: { xs: 4, sm: 6 },
              "& .MuiSlider-thumb": {
                width: { xs: 14, sm: 20 },
                height: { xs: 14, sm: 20 },
                bgcolor: "#41939C",
                boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
              },
              "& .MuiSlider-track": { height: { xs: 4, sm: 6 } },
              "& .MuiSlider-rail": { height: { xs: 3, sm: 4 }, opacity: 0.38 },
              "& .MuiSlider-markLabel": { fontSize: { xs: "0.55rem", sm: "0.75rem" } },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}