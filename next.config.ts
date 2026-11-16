import type { NextConfig } from "next";
import { withLingo } from "@lingo.dev/compiler/next";

const svgRule = {
  loaders: ["@svgr/webpack"],
  as: "*.js",
};

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": svgRule,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default async function (): Promise<NextConfig> {
  const config = await withLingo(nextConfig, {
    sourceRoot: ".",
    sourceLocale: "en",
    targetLocales: ["hi", "fr", "de"],
    models: {
      "en:*": "google:gemini-3.5-flash-lite",
    },
    prompt:
      "You are translating a marketing SaaS website UI from {SOURCE_LOCALE} to {TARGET_LOCALE}. Keep translations natural and concise. Keep brand names, product names and technical terms in English.",
    dev: {
      usePseudotranslator: false,
    },
  });

  // Re-apply SVG rule in case withLingo replaced turbopack.rules
  config.turbopack = {
    ...config.turbopack,
    rules: {
      ...(config.turbopack?.rules ?? {}),
      "*.svg": svgRule,
    },
  };

  return config;
}