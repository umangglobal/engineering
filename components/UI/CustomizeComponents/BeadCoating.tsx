'use client'

import { Box, Checkbox, FormControlLabel, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

// ---- Types ----
interface CoatingOption {
  value: string;
  tooltip: string;
}

// ---- Static data ----
const coatingOptions: CoatingOption[] = [
  { value: "MCC",     tooltip: "Microcrystalline Cellulose" },
  { value: "Lactose", tooltip: "Lactose Coating"            },
  { value: "Silica",  tooltip: "Silica Coating"             },
  { value: "Other",   tooltip: "Other custom coatings"      },
];

const checkboxSx = {
  color: "#707070",
  "&.Mui-checked": { color: "#41939C" },
};

export const BeadCoating = () => {
  const [selectedCoatings, setSelectedCoatings] = useState<string[]>(["MCC"]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedCoatings((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <Box
      display="flex"
      gap={{ xs: 1, sm: 4 }}
      flexDirection={{ sm: "row" }}
    >
      {coatingOptions.map(({ value, tooltip }) => (
        <Tooltip key={value} title={tooltip} arrow>
          <FormControlLabel
            control={
              <Checkbox
                value={value}
                checked={selectedCoatings.includes(value)}
                onChange={handleChange}
                sx={checkboxSx}
              />
            }
            label={
              <Typography
                fontFamily="Jost"
                fontSize={{ xs: 14, sm: 16 }}
                color="rgba(0, 0, 0, 0.87)"
              >
                {value}
              </Typography>
            }
          />
        </Tooltip>
      ))}
    </Box>
  );
};