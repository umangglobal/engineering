// components/UI/JsonLd.tsx
"use client";

import { useEffect } from "react";

interface JsonLdProps {
  schema: object;
  id: string;
}

export function JsonLd({ schema, id }: JsonLdProps) {
  useEffect(() => {
    // Remove existing script with same id to prevent duplicates
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [schema, id]);

  return null;
}