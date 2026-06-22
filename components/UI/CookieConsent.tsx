'use client'

// src/components/UI/CookieConsent.tsx
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Fade,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CookiePreferences, { Preferences } from "./CookiePreferences";

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  bottom: 20,
  left: 20,
  right: 20,
  backgroundColor: "#fff",
  color: "#000",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
  borderRadius: "8px",
  overflow: "hidden",
  maxWidth: 800,
  margin: "0 auto",
  zIndex: theme.zIndex.drawer + 1,
  [theme.breakpoints.up("sm")]: {
    borderRadius: "8px",
  },
}));

const COOKIE_KEY = "cookieConsentengineering";
const EXPIRATION_DAYS = 180;

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [openPreferences, setOpenPreferences] = useState(false);

  const isExpired = (timestamp: number) => {
    const now = new Date().getTime();
    return now - timestamp > EXPIRATION_DAYS * 24 * 60 * 60 * 1000;
  };

  const applyCookiePreferences = (prefs: Preferences) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.targeting ? "granted" : "denied",
        functionality_storage: prefs.functional ? "granted" : "denied",
        personalization_storage: prefs.performance ? "granted" : "denied",
      });
    }
  };

  useEffect(() => {
    const consentData = JSON.parse(localStorage.getItem(COOKIE_KEY) || "null");

    if (!consentData || !consentData.preferences || isExpired(consentData.timestamp)) {
      setOpen(true);
    } else {
      applyCookiePreferences(consentData.preferences);
    }
  }, []);

  const savePreferences = (prefs: Preferences) => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({
        preferences: prefs,
        timestamp: new Date().getTime(),
      })
    );
    applyCookiePreferences(prefs);
  };

  const handleAcceptAll = () => {
    savePreferences({ necessary: true, performance: true, functional: true, targeting: true, analytics: true });
    setOpen(false);
  };

  const handleRejectAll = () => {
    savePreferences({ necessary: true, performance: false, functional: false, targeting: false, analytics: false });
    setOpen(false);
  };

  const handleSavePreferences = (prefs: Preferences) => {
    savePreferences(prefs);
    setOpenPreferences(false);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <>
      <Fade in={open} timeout={600}>
        <StyledPaper elevation={4}>
          <Container
            maxWidth="xl"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              p: 0,
            }}
          >
            <Box sx={{ alignSelf: "stretch", px: 3, py: 2, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <Typography variant="h6" sx={{ fontFamily: "Jost, sans-serif", fontSize: "32px", fontWeight: 500, color: "#000" }}>
                Cookies Policy
              </Typography>
            </Box>

            <Box sx={{ alignSelf: "stretch", borderTop: "1px solid rgba(0,0,0,0.12)", borderBottom: "1px solid rgba(0,0,0,0.12)", py: 2, px: 3 }}>
              <Typography sx={{ color: "var(--text-primary, rgba(0, 0, 0, 0.87))", fontSize: "16px", fontFamily: "Jost, sans-serif", lineHeight: 1.5, wordWrap: "break-word" }}>
                We use cookies to enhance your browsing experience, analyze website traffic, and personalize content.
                You can accept all cookies or customize your preferences. For more details, read our{" "}
                <Link href="/cookies-policy" target="_blank" rel="noopener" sx={{ color: "#41939C", fontWeight: 500, textDecoration: "underline", "&:hover": { color: "#B85A6A", textDecoration: "underline" } }}>
                  Cookies Policy
                </Link>
                .
              </Typography>
            </Box>

            <Box sx={{ alignSelf: "stretch", p: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1.5, flexWrap: "wrap", px: 2 }}>
              <Button onClick={() => setOpenPreferences(true)} sx={{ height: 36, px: 3, borderRadius: "26px", color: "#41939C", background: "#fff", border: "1.5px solid #41939C", fontFamily: "Jost, sans-serif", fontSize: "18px", fontWeight: 500, letterSpacing: "0.36px", textTransform: "none", "&:hover": { backgroundColor: "#fff5f7" } }}>
                Customize Settings
              </Button>

              <Button onClick={handleRejectAll} sx={{ height: 36, px: 3, borderRadius: "26px", color: "#41939C", background: "#fff", border: "1.5px solid #41939C", fontFamily: "Jost, sans-serif", fontSize: "18px", fontWeight: 500, letterSpacing: "0.36px", textTransform: "none", "&:hover": { backgroundColor: "#fff5f7" } }}>
                Reject All
              </Button>

              <Button onClick={handleAcceptAll} sx={{ height: 36, px: 3, borderRadius: "26px", background: "#41939C", color: "#fff", fontFamily: "Jost, sans-serif", fontSize: "18px", fontWeight: 500, letterSpacing: "0.36px", textTransform: "none", "&:hover": { backgroundColor: "#b6576b" } }}>
                Accept All
              </Button>
            </Box>
          </Container>
        </StyledPaper>
      </Fade>

      <CookiePreferences
        open={openPreferences}
        onClose={() => setOpenPreferences(false)}
        onSave={handleSavePreferences}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectAll}
      />
    </>
  );
};

export default CookieConsent;