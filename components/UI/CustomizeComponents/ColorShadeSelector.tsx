'use client'

import { Box, Typography, TextField } from "@mui/material";
import ColorPickerButton from "./ColorPickerButton";

// ---- Types ----
interface ColorShadeSelectorProps {
  fillColor: string;
  setFillColor: (color: string) => void;
}

const colors: string[] = [
  "#29CC6A", "#0077B6", "#0099FF", "#D9ED92", "#FC5555", "#FBC231", "#7B61FF",
  "#D924A0", "#D06D11", "#91BCFF", "#EB8F9F", "#FDC500", "#5774B9", "#FFB5E8",
  "#DCBF44", "#70D6FF", "#EC807B", "#F9AB55", "#B1CF88", "#FDDC4F", "#CAFFBF",
  "#FFB5C0", "#FFDAC1", "#41939C", "#00B4D8", "#C6497F", "#B63E53",
];

const ColorShadeSelector = ({ fillColor, setFillColor }: ColorShadeSelectorProps) => {
  return (
    <Box display="inline-flex" alignItems="flex-start" gap={1} paddingRight={2.5}>

      {/* Stepper */}
      <Box
        width={24}
        height={292}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        gap={3}
      >
        <Box
          minWidth={24}
          minHeight={24}
          px={1}
          bgcolor="#41939C"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize={12} color="white" fontFamily="Jost, Jost-fallback, system-ui, sans-serif">2</Typography>
        </Box>

        <Box position="relative" height={219} width="100%">
          <Box
            position="absolute"
            top={0}
            left="11px"
            width="1px"
            height="100%"
            bgcolor="#BDBDBD"
          />
        </Box>
      </Box>

      {/* Content */}
      <Box width={{ xs: 318, md: 482.49 }} display="flex" flexDirection="column" gap={1.5}>

        {/* Title */}
        <Box>
          <Typography fontSize={32} fontFamily="Jost" fontWeight={500}>
            Select Color Shade
          </Typography>
          <Typography fontSize={16} fontFamily="Jost" fontWeight={400}>
            Select from a wide range of available colors
          </Typography>
        </Box>

        {/* Color Circles */}
        <Box
          display="flex"
          flexWrap="wrap"
          gap={{ xs: 0.75, sm: 1, md: 1.5 }}
          sx={{ width: { xs: 318, md: 450 } }}
        >
          {colors.map((color, index) => (
            <label key={index}>
              <input
                type="radio"
                name="color"
                value={color}
                checked={fillColor === color}
                onChange={() => setFillColor(color)}
                style={{ display: "none" }}
              />
              <Box
                width={{ xs: 22, sm: 26, md: 30 }}
                height={{ xs: 22, sm: 26, md: 30 }}
                borderRadius="50%"
                position="relative"
                sx={{
                  cursor: "pointer",
                  boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: color,
                    borderRadius: "50%",
                    border: fillColor === color ? "2px solid black" : "none",
                    boxShadow: fillColor === color
                      ? "0px 2px 4px -2px rgba(0, 0, 0, 0.10)"
                      : "none",
                  }}
                />
              </Box>
            </label>
          ))}

          {/* Custom color picker */}
          <ColorPickerButton
            color={fillColor}
            onChange={(newColor) => setFillColor(newColor)}
          />
        </Box>

        {/* Pantone Code Entry */}
        <Box mt={2} width={300} display="flex" flexDirection="column" gap={1}>
          <Typography fontSize={16} fontFamily="Jost">
            Or enter your desired Pantone code below:
          </Typography>
          <TextField
            placeholder="Enter Pantone Code"
            variant="outlined"
            size="small"
            value={fillColor}
            onChange={(e) => setFillColor(e.target.value)}
            sx={{
              borderRadius: "24px",
              "& .MuiOutlinedInput-root": { borderRadius: "24px", paddingRight: "8px" },
              "& input": { fontFamily: "Jost", fontSize: 14, padding: "10px 12px" },
            }}
          />
          <Typography fontSize={12} fontFamily="Jost" color="#091610">
            Note: The actual visuals with Pantone shades will be provided later by our R&D team.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ColorShadeSelector;