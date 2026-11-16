// components/UI/LanguageSwitcher.tsx
"use client";

import { Box, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useLingoContext } from "@lingo.dev/compiler/react";

type LocaleCode = Parameters<ReturnType<typeof useLingoContext>["setLocale"]>[0];

// flag = ISO country code for flagcdn, google = code Google Translate expects
const LANGUAGES = {
  en: { label: "English",   flag: "gb", google: "en" },
  hi: { label: "हिन्दी",      flag: "in", google: "hi" },
  fr: { label: "Français",  flag: "fr", google: "fr" },
  de: { label: "Deutsch",   flag: "de", google: "de" },
  es: { label: "Español",   flag: "es", google: "es" },
  zh: { label: "中文",       flag: "cn", google: "zh-CN" },
  ar: { label: "العربية",    flag: "sa", google: "ar" },
  pt: { label: "Português", flag: "pt", google: "pt" },
  ja: { label: "日本語",     flag: "jp", google: "ja" },
  ru: { label: "Русский",   flag: "ru", google: "ru" },
} as const;

type SupportedLang = keyof typeof LANGUAGES;

function isSupportedLang(value: string): value is SupportedLang {
  return Object.prototype.hasOwnProperty.call(LANGUAGES, value);
}

function setGoogleLanguage(lang: SupportedLang) {
  const host = window.location.hostname;
  const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";

  document.cookie = `googtrans=; path=/; ${expire}`;
  document.cookie = `googtrans=; path=/; domain=.${host}; ${expire}`;

  if (lang !== "en") {
    const code = LANGUAGES[lang].google;
    document.cookie = `googtrans=/en/${code}; path=/`;
    document.cookie = `googtrans=/en/${code}; path=/; domain=.${host}`;
  }
}

function Flag({ code }: { code: string }) {
  return (
    <Box
      component="img"
      src={`https://flagcdn.com/w20/${code}.png`}
      srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
      alt=""
      sx={{ width: 20, height: 15, objectFit: "cover", borderRadius: "2px", flexShrink: 0 }}
    />
  );
}

function LanguageOption({ lang }: { lang: SupportedLang }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Flag code={LANGUAGES[lang].flag} />
      <Typography component="span" sx={{ fontSize: 15, fontFamily: "Jost" }}>
        {LANGUAGES[lang].label}
      </Typography>
    </Box>
  );
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLingoContext();
  const current: SupportedLang = isSupportedLang(locale) ? locale : "en";

  const handleChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    if (!isSupportedLang(value)) return;

    setGoogleLanguage(value);         // Google: database content
    setLocale(value as LocaleCode);   // Lingo: static content (reloads page)
  };

  return (
    <Select
      value={current}
      onChange={handleChange}
      size="small"
      variant="outlined"
      className="notranslate"
      renderValue={(value) => <LanguageOption lang={value as SupportedLang} />}
      MenuProps={{ sx: { zIndex: 1400 } }}   // above your sticky header (zIndex 1300)
      sx={{
        minWidth: 150,
        borderRadius: "20px",
        "& .MuiSelect-select": { py: "6px" },
      }}
    >
      {(Object.keys(LANGUAGES) as SupportedLang[]).map((code) => (
        <MenuItem key={code} value={code}>
          <LanguageOption lang={code} />
        </MenuItem>
      ))}
    </Select>
  );
}