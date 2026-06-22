'use client'

// src/components/UI/CookiePreferences.tsx
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export interface Preferences {
  necessary: boolean;
  performance: boolean;
  functional: boolean;
  targeting: boolean;
  analytics: boolean;
}

interface CookiePreferencesProps {
  open: boolean;
  onClose: () => void;
  onSave: (prefs: Preferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
}

const CookiePreferences = ({
  open,
  onClose,
  onSave,
  onAcceptAll,
  onRejectAll,
}: CookiePreferencesProps) => {
  const [preferences, setPreferences] = useState<Preferences>({
    necessary: true,
    performance: false,
    functional: false,
    targeting: false,
    analytics: false,
  });

  const handleChange = (name: keyof Preferences) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({ ...preferences, [name]: event.target.checked });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "8px",
          m: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: "Jost",
          fontSize: "32px",
          fontWeight: 500,
          color: "rgba(0,0,0,0.87)",
          p: 3,
          pb: 1,
        }}
      >
        Manage Cookie Preferences
      </DialogTitle>

      <DialogContent sx={{ px: 3, pb: 2 }}>
        <Typography sx={{ fontFamily: "Jost", fontSize: "16px", mb: 2, lineHeight: 1.5 }}>
          Select which categories of cookies you would like to allow. You can
          update your preferences at any time.
        </Typography>

        <FormGroup>
          {/* Necessary — always on */}
          <FormControlLabel
            control={
              <Checkbox
                checked
                disabled
                sx={{ color: "#41939C", "&.Mui-checked.Mui-disabled": { color: "#41939C" } }}
              />
            }
            label="Strictly Necessary Cookies"
          />
          <Typography sx={{ ml: 4, fontSize: "14px", color: "#6A8076", mb: 2 }}>
            These cookies are essential for the website to function and cannot be switched off in our systems.
          </Typography>

          {/* Performance */}
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.performance}
                onChange={handleChange("performance")}
                sx={{ color: "#41939C" }}
              />
            }
            label="Performance Cookies"
          />
          <Typography sx={{ ml: 4, fontSize: "14px", color: "#6A8076", mb: 2 }}>
            Help us understand how visitors interact with the website by collecting and reporting anonymous information.
          </Typography>

          {/* Functional */}
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.functional}
                onChange={handleChange("functional")}
                sx={{ color: "#41939C" }}
              />
            }
            label="Functional Cookies"
          />
          <Typography sx={{ ml: 4, fontSize: "14px", color: "#6A8076", mb: 2 }}>
            Enable the website to provide enhanced functionality and personalization.
          </Typography>

          {/* Targeting */}
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.targeting}
                onChange={handleChange("targeting")}
                sx={{ color: "#41939C" }}
              />
            }
            label="Targeting & Advertising Cookies"
          />
          <Typography sx={{ ml: 4, fontSize: "14px", color: "#6A8076", mb: 2 }}>
            Used by advertising partners to build a profile of your interests and show you relevant ads on other sites.
          </Typography>

          {/* Analytics */}
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.analytics}
                onChange={handleChange("analytics")}
                sx={{ color: "#41939C" }}
              />
            }
            label="Analytics Cookies"
          />
          <Typography sx={{ ml: 4, fontSize: "14px", color: "#6A8076" }}>
            Help us measure traffic sources and improve our content based on aggregated user behavior.
          </Typography>
        </FormGroup>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "flex-end", p: 2, gap: 1.5, flexWrap: "wrap" }}>
        <Button
          onClick={() => onSave(preferences)}
          variant="outlined"
          sx={{
            borderColor: "#41939C", color: "#41939C", borderRadius: "26px",
            textTransform: "none", fontFamily: "Jost", fontSize: "18px",
            px: 3, height: 36, "&:hover": { backgroundColor: "#fff5f7" },
          }}
        >
          Save Preferences
        </Button>

        <Button
          onClick={onRejectAll}
          variant="outlined"
          sx={{
            borderColor: "#41939C", color: "#41939C", borderRadius: "26px",
            textTransform: "none", fontFamily: "Jost", fontSize: "18px",
            px: 3, height: 36, "&:hover": { backgroundColor: "#fff5f7" },
          }}
        >
          Reject All
        </Button>

        <Button
          onClick={onAcceptAll}
          variant="contained"
          sx={{
            backgroundColor: "#41939C", borderRadius: "26px",
            textTransform: "none", fontFamily: "Jost", fontSize: "18px",
            px: 3, height: 36, "&:hover": { backgroundColor: "#b6576b" },
          }}
        >
          Accept All
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookiePreferences;