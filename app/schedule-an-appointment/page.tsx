// app/videos/page.tsx

import { BannerCommon } from "@/components/UI/BannerCommon";
import Appointment from "@/components/UI/ResourcesComponent/Appointment";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Company",     url: "/company"     },
];

const SchedulePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Schedule an Appointment | Umang Engineering",
  description: "Schedule a consultation with our experts to learn more about our products and services.",
  alternates: {
    canonical: "https://www.umangengineering.com/schedule-an-appointment",
  },
};

// ---- Page ----
export default function ScheduleAnAppointmentPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchedulePageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Schedule an Appointment"
        BannerImg="resources/appointmentbanner.webp"
        BannerHeading="Schedule an Appointment"
        BannerCaption="Book a consultation with our experts"
      />

      <Appointment />
    </>
  );
}