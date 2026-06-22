'use client'

import { Box, Button, TextField, Typography } from "@mui/material";

interface IFormData {
  fullname: string;
  phone: string;
  email: string;
  companyName: string;
  website: string;
  message: string;
  country_code: string;
  city: string;
  country: string;
  formUrl: string;
  reasonDownload: string;
  productIntrested: string;
  productSize: string;
  productApplication: string;
  productActives: string;
  productColor: string;
  recaptcha_token: string;
  mode: string;
}

interface FormContactProps {
  formData: IFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  loading: boolean;
  HeadingBlack?: string;
  HeadingColor?: string;
  SubHeading?: string;
}

export const FormContact = ({
  formData,
  handleChange,
  loading,
  HeadingBlack,
  HeadingColor,
  SubHeading,
}: FormContactProps) => {
  return (
    <>
      <Box sx={{ position: "absolute", top: 25, left: { xs: 14, md: 72 } }}>
        <Typography fontSize={{ xs: 27, md: 32 }} fontFamily="Jost" fontWeight={500} color="#222">
          {HeadingBlack}{" "}
          <Box component="span" color="#41939C">
            {HeadingColor}
          </Box>
        </Typography>
      </Box>

      <Typography
        sx={{ width: { xs: "100%", md: "35%" }, position: "absolute", top: 72, left: { xs: 14, md: 72 } }}
        fontSize={{ xs: 14, md: 16 }}
        fontFamily="Jost"
        fontWeight={500}
        color="#222"
      >
        {SubHeading}
      </Typography>

      <Box sx={{ position: "absolute", top: 132, left: { xs: 14, md: 72 }, width: { xs: "92%", md: 363 } }}>
        <TextField
          fullWidth
          label="Full Name"
          size="small"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ position: "absolute", top: 194, left: { xs: 14, md: 72 }, width: { xs: "92%", md: 363 } }}>
        <TextField
          fullWidth
          label="Email Id"
          size="small"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ position: "absolute", top: 260, left: { xs: 14, md: 72 }, width: { xs: 106, md: 106 } }}>
        <TextField
          fullWidth
          label="Country Code"
          size="small"
          name="country_code"
          value={formData.country_code}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ position: "absolute", top: 260, left: { xs: 130, md: 190 }, width: { xs: 250, md: 245 } }}>
        <TextField
          fullWidth
          label="Contact Number"
          size="small"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ position: "absolute", top: 325, left: { xs: 14, md: 72 }, width: { xs: 173, md: 173 } }}>
        <TextField
          fullWidth
          label="City"
          size="small"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ position: "absolute", top: 325, left: { xs: 200, md: 255 }, width: { xs: 180, md: 180 } }}>
        <TextField
          fullWidth
          label="Country"
          size="small"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ position: "absolute", top: 390, left: { xs: 14, md: 72 }, width: { xs: "92%", md: 363 } }}>
        <TextField
          fullWidth
          label="Company Name"
          size="small"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ position: "absolute", top: 453, left: { xs: 14, md: 72 }, width: { xs: "92%", md: 363 } }}>
        <TextField
          fullWidth
          label="Message"
          size="small"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{
          textTransform: "none",
          width: { xs: "92%", md: 363 },
          height: 32,
          position: "absolute",
          left: { xs: 14, md: 72 },
          top: 578,
          fontFamily: "Jost-sb",
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: "0.28px",
          background: "#41939C",
          borderRadius: "30px",
          "&:hover": { background: "#41939CA8" },
        }}
      >
        {loading ? "Sending..." : "SUBMIT"}
      </Button>
    </>
  );
};