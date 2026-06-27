import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // Core Pages - Priority 1.0
    {
      url: "https://www.umangengineering.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Main Pages - Priority 0.8
    {
      url: "https://www.umangengineering.com/about-us",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/product",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/news-exhibition",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/distributor",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/customize",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/resources",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/free-quote",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/case-studies",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/white-papers",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/leadership-team",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/mission-vision",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/sustainability",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/encapsulation-technology",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/our-other-brands",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/catalogue-brochures",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/ingredient-books",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/media",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/blogs",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.u.com/faqs",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/contact-us",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/formulations",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Legal Pages - Priority 0.8
    {
      url: "https://www.umangengineering.com/terms-conditions",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/cookies-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },

    // Product Single Pages - Priority 0.9
    {
      url: "https://www.umangengineering.com/product-single/single-screw-extruder",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/twin-screw-extruder",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/hot-melt-extruder",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/basket-extruder",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/die-roller-extruder",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/cold-extrusion-machine",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/extruder-attachments",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/spheronizer-or-twin-spheronizer",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/auto-coater",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/solid-drug-layering",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/powder-rotor-processor",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/rapid-mixer-granulator",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/roller-compactor",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/fluid-bed-processor-or-fluid-bed-multi-processor",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/fluid-bed-dryer",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/tapered-discharge-or-auto-discharge",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/integrated-extruder-and-spheronizer-continues-process",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/granulation-line",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/pelletization-line",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/water-dispersible-granules-continues-production-line",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/film-casting-machine",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.umangengineering.com/product-single/spare-parts",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
   
    // Product Pages - Priority 0.8
   
    
    {
      url: "https://www.umangengineering.com/products/extrusion-systems",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/products/pelletization-and-spheronization-systems",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/products/granulation-systems",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/products/drying-and-processing-equipment",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/products/continuous-manufacturing-systems",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/products/film-processing",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/products/spare-parts",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
    // Sustainability Pages - Priority 0.8
    {
      url: "https://www.umangengineering.com/planting-for-every-life",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/green-visitor-program",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/ai-driven-sustainability",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.umangengineering.com/zero-waste-manufacturing",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Secondary Pages - Priority 0.64
    {
      url: "https://www.umangengineering.com/capabilities",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/information",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/downloads",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/company",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/videos",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/magazine",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },

    // News & Exhibition Pages - Priority 0.64
    {
      url: "https://www.umangengineering.com/news-exhibitions/vitafoods-europe-2025",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/in-cosmetics-amsterdam-2025",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/pharmaconex-2024",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/cosmohome-tech-expo-2024",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/cospack-cosmetic-packaging-expo-2024",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/arab-pharma-manufactures-2024",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/in-cosmetics-asia-2023",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/cphi-europe-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/cosmotech-expo-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/medi-pharma-expo-vietnam-2018",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/incosmetic-global-amsterdam-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/cphi-china-shanghai-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/fce-pharma-sao-paulo-brazil-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/incosmetic-global-paris-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/hpci-india-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/pchi-china-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/duphat-exhibition-dubai-2019",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },
    {
      url: "https://www.umangengineering.com/news-exhibitions/hpci-exhibition-india-2018",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.64,
    },

    // Services Pages - Priority 0.51
    {
      url: "https://www.umangengineering.com/bulk-contract-manufacturing",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/quality-control",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/co-development-project",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/manufacturing-site-transfer-projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/white-labelling-co-branding",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/certificates",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/flyers",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/services",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/careers",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.51,
    },

    // Video Pages - Priority 0.51
    {
      url: "https://www.umangengineering.com/videos-single/transforming-formulations-with_advanced-solid-drug-layering-technology-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/fluid-bed-multiprocessor-ufbm120-umang-engineering-drying-granulation-coating-spheronizing",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/utde-140-umang-twin-dome-extruder-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/utce-110-umang-twin-cone-extruder-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/utae-umang-twin-axial-extruder-machine-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/usdl-umang-solid-drug-layering-machine-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/uice-lab12-pelletization-process-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/laboratory-tablet-coater-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/pharmaceutical-lab-scale-processing-machines-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/uice-71-installation-integrated-extruder-spheronizer-continues-process-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/umang-die-roller-extruder-130-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/production-scale-extrusion-and-spheronization-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
    {
      url: "https://www.umangengineering.com/videos-single/extruder-and-spheronizer-pellet-processor-umang-engineering",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.51,
    },
  ];
}