// app/page.tsx
import dynamic from 'next/dynamic'
import { BannerHome } from '@/components/UI/homeComponents/BannerHome'
import { CounterStatsHome } from '@/components/UI/homeComponents/CounterStatsHome'
import { OrganizationSchema, WebSiteSchema } from '@/lib/api/SeoSchemas'
import type { Metadata } from 'next'

// ---- SEO ----
const HomePageSchema = {
  "@context": "https://schema.org",
  "@graph": [OrganizationSchema, WebSiteSchema]
}

export const metadata: Metadata = {
  title: "High-Performance Nutraceuticlas Formulations | Umang Nutraceuticals",
  description: "Expert insights from Umang Nutraceuticals for Nutra products. Understand encapsulation of active particles like never before. Visit us now for clear explanations.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/",
  },
  openGraph: {
    title: "Umang Nutraceuticals",
    description: "Leading provider of innovative encapsulation solutions.",
    images: ["https://www.umangnutraceuticals.com/assets/images/home/release_profiles.webp"],
    url: "https://www.umangnutraceuticals.com/",
  },
}

// ---- Lazy loaded components (replaces React.lazy + Suspense) ----
const SliderHome = dynamic(() => import('@/components/UI/homeComponents/SliderHome').then(m => ({ default: m.SliderHome })), { loading: () => <div style={{ height: 400 }}>Loading Section...</div> })
const MeetingHome = dynamic(() => import('@/components/UI/homeComponents/MeetingHome').then(m => ({ default: m.MeetingHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const ApplicationHome = dynamic(() => import('@/components/UI/homeComponents/ApplicationHome').then(m => ({ default: m.ApplicationHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const VideoBannerHome = dynamic(() => import('@/components/UI/homeComponents/VideoBannerHome').then(m => ({ default: m.VideoBannerHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const CustomizationHome = dynamic(() => import('@/components/UI/homeComponents/CustomizationHome').then(m => ({ default: m.CustomizationHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const AboutTabsHome = dynamic(() => import('@/components/UI/homeComponents/AboutTabsHome').then(m => ({ default: m.AboutTabsHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const BrandsTrustHome = dynamic(() => import('@/components/UI/homeComponents/BrandsTrustHome').then(m => ({ default: m.BrandsTrustHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const SegmentsHome = dynamic(() => import('@/components/UI/homeComponents/SegmentsHome').then(m => ({ default: m.SegmentsHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const SustainabilityHome = dynamic(() => import('@/components/UI/homeComponents/SustainabilityHome').then(m => ({ default: m.SustainabilityHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const AccordianFAQHome = dynamic(() => import('@/components/UI/homeComponents/AccordianFAQHome').then(m => ({ default: m.AccordianFAQHome })), { loading: () => <div style={{ minHeight: 200 }} /> })
const ContactUsHome = dynamic(() => import('@/components/UI/homeComponents/ContactUsHome').then(m => ({ default: m.ContactUsHome })), { loading: () => <div style={{ minHeight: 200 }} /> })

// ---- Page ----
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HomePageSchema) }}
      />

      <BannerHome />
      <CounterStatsHome />
      <SliderHome />
      <MeetingHome />
      <ApplicationHome />
      <VideoBannerHome />
      <CustomizationHome />
      <AboutTabsHome />
      <BrandsTrustHome />
      <SegmentsHome />
      <SustainabilityHome />
      <AccordianFAQHome />
      <ContactUsHome />
    </>
  )
}