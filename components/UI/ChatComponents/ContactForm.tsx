'use client'

import { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

// ---- Types ----
interface ContactFormProps {
  onSubmit: (email: string, phone: string) => void;
  onCancel: () => void;
}

// ---- Shared styles ----
const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#49c6b0" },
    "&:hover fieldset": { borderColor: "#49c6b0" },
    "&.Mui-focused fieldset": { borderColor: "#49c6b0", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#49c6b0",
    "&.Mui-focused": { color: "#49c6b0 !important" },
  },
} as const;

export const ContactForm = ({ onSubmit, onCancel }: ContactFormProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, phone);
  };

  return (
    <Box p={2} borderTop="1px solid #ddd" bgcolor="#fff">
      <Typography variant="subtitle2" mb={1}>
        Connect with our sales team
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={1.5}>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            sx={textFieldStyles}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone"
            variant="outlined"
            size="small"
            fullWidth
            value={phone}
            sx={textFieldStyles}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Stack direction="row" spacing={1}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#49c6b0",
                "&:hover": { backgroundColor: "#3aa899" },
              }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={onCancel}
              sx={{
                color: "#49c6b0",
                borderColor: "#49c6b0",
                "&:hover": {
                  borderColor: "#49c6b0",
                  backgroundColor: "rgba(73, 198, 176, 0.04)",
                },
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};