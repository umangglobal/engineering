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

function cookieDomains(): (string | null)[] {
  const host = window.location.hostname;           // www.umangengineering.com
  const parts = host.split(".");
  const root = parts.length > 2 ? parts.slice(-2).join(".") : host; // umangengineering.com
  // null = no domain attribute (current host only)
  return [null, host, `.${host}`, root, `.${root}`];
}

function writeCookie(name: string, value: string, domain: string | null, maxAge: number) {
  document.cookie =
    `${name}=${value}; path=/; max-age=${maxAge}` + (domain ? `; domain=${domain}` : "");
}

function setGoogleLanguage(lang: SupportedLang) {
  // 1. Remove every old googtrans cookie (host, www, root domain)
  for (const d of cookieDomains()) writeCookie("googtrans", "", d, 0);

  // 2. Set the new one (skip for English = no translation)
  if (lang !== "en") {
    const value = `/en/${LANGUAGES[lang].google}`;
    writeCookie("googtrans", value, null, 31536000);
    writeCookie("googtrans", value, `.${cookieDomains()[3]}`, 31536000); // root domain
  }
}

function Flag({ code }: { code: string }) {
  return (
    <Box
      component="img"
      src={`https://flagcdn.com/w20/${code}.png`}
      srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
      alt={""}
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
  if (!isSupportedLang(value) || value === current) return;

  // Google: database content
  setGoogleLanguage(value);

  // Lingo: static content - write its cookie directly (default name "locale", 1 year)
  writeCookie("locale", value, null, 31536000);

  // One full reload so both Lingo and Google start fresh with the new language
  window.location.reload();
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