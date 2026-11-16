// components/UI/Translator/GoogleTranslate.tsx
"use client";
import Script from "next/script";

export default function GoogleTranslate() {
  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <Script id="gt-init" strategy="afterInteractive">{`
        function googleTranslateElementInit() {
          new google.translate.TranslateElement(
            { pageLanguage: 'en', includedLanguages: 'hi,fr,de', autoDisplay: false },
            'google_translate_element'
          );
        }
      `}</Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}