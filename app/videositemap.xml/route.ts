// app/video-sitemap.xml/route.ts
export async function GET() {
  const videos = [
    {
      loc: "https://www.umangengineering.com/videos-single/transforming-formulations-with_advanced-solid-drug-layering-technology-umang-engineering",
      title: "Transforming Formulations with Advanced Solid Drug Layering Technology | Umang Engineering",
      description: "Discover the future of pharmaceutical and nutraceutical manufacturing with our advanced solid drug layering technology.",
      thumbnail: "https://img.youtube.com/vi/ow91P2M3oSk/hqdefault.jpg",
      player: "https://www.youtube.com/embed/ow91P2M3oSk",
      duration: 97,
      publication_date: "2025-01-09T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/fluid-bed-multiprocessor-ufbm120-umang-engineering-drying-granulation-coating-spheronizing",
      title: "Fluid Bed MultiProcessor | UFBM120 | Umang Engineering | Drying, Granulation, Coating & Spheronizing",
      description: "Explore the advanced technology of Umang's Fluid Bed Multi Processor through this 3D working video! ",
      thumbnail: "https://img.youtube.com/vi/FAgTNbvAGPY/hqdefault.jpg",
      player: "https://www.youtube.com/embed/FAgTNbvAGPY",
      duration: 100,
      publication_date: "2024-09-21T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/utde-140-umang-twin-dome-extruder-umang-engineering",
      title: "UTDE 140 | Umang Twin Dome Extruder | Umang Engineering",
      description: "Discover the efficiency and versatility of the Twin Dome Extruder, a cutting-edge solution for uniform and high-quality pellet production.",
      thumbnail: "https://img.youtube.com/vi/d07qvOd2scY/hqdefault.jpg",
      player: "https://www.youtube.com/embed/d07qvOd2scY",
      duration: 112,
      publication_date: "2024-05-22T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/utce-110-umang-twin-cone-extruder-umang-engineering",
      title: "UTCE 110 | Umang Twin Cone Extruder | Umang Engineering",
      description: "Discover the efficiency and versatility of the Twin Cone Extruder, a cutting-edge solution for uniform and high-quality pellet production.",
      thumbnail: "https://img.youtube.com/vi/XmGgM3M_WF8/hqdefault.jpg",
      player: "https://www.youtube.com/embed/XmGgM3M_WF8",
      duration: 72,
      publication_date: "2024-05-22T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/utae-umang-twin-axial-extruder-machine-umang-engineering",
      title: "UTAE | Umang Twin Axial Extruder Machine | Umang Engineering",
      description: "The UTAE Machine stands for Umang Twin Axial Extruder Machine.",
      thumbnail: "https://img.youtube.com/vi/8ONgv3QYhTk/hqdefault.jpg",
      player: "https://www.youtube.com/embed/8ONgv3QYhTk",
      duration: 135,
      publication_date: "2024-05-22T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/uice-lab12-pelletization-process-umang-engineering",
      title: "UICE LAB12 | Pelletization Process | Umang Engineering",
      description: "The UICELAB12 is a specific model of a laboratory tablet coater designed for use in pharmaceutical research and development.",
      thumbnail: "https://img.youtube.com/vi/VxVDylhVyzo/hqdefault.jpg",
      player: "https://www.youtube.com/embed/VxVDylhVyzo",
      duration: 176,
      publication_date: "2024-05-22T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/usdl-umang-solid-drug-layering-machine-umang-engineering",
      title: "USDL | Umang Solid Drug Layering Machine | Umang Engineering",
      description: "The USDL Machine refers to a Umang Solid Drug Layering machine, which is typically used in the pharmaceutical industry to ensure uniform coating and layering of tablets.",
      thumbnail: "https://img.youtube.com/vi/CwbECCZm_-8/hqdefault.jpg",
      player: "https://www.youtube.com/embed/CwbECCZm_-8",
      duration: 125,
      publication_date: "2024-05-21T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/laboratory-tablet-coater-umang-engineering",
      title: "Laboratory Tablet Coater | Umang Engineering",
      description: "A laboratory tablet coater is a specialized piece of equipment used in pharmaceutical and research laboratories to apply coatings to tablets.",
      thumbnail: "https://img.youtube.com/vi/-c2o3iYmgnE/hqdefault.jpg",
      player: "https://www.youtube.com/embed/-c2o3iYmgnE",
      duration: 128,
      publication_date: "2024-05-21T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/pharmaceutical-lab-scale-processing-machines-umang-engineering",
      title: "Pharmaceutical Lab Scale Processing Machines | Umang Engineering",
      description: "Step into the world of advanced pharmaceutical R&D with our lab-scale processing machines.",
      thumbnail: "https://img.youtube.com/vi/7yNPYSJbOAY/hqdefault.jpg",
      player: "https://www.youtube.com/embed/7yNPYSJbOAY",
      duration: 53,
      publication_date: "2024-05-21T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/uice-71-installation-integrated-extruder-spheronizer-continues-process-umang-engineering",
      title: "UICE 71 Installation | Integrated Extruder & Spheronizer Continues Process | Umang Engineering",
      description: "Explore the seamless efficiency of the Integrated Extruder & Spheronizer for continuous pellet production. ",
      thumbnail: "https://img.youtube.com/vi/_plpN0K-8D0/hqdefault.jpg",
      player: "https://www.youtube.com/embed/_plpN0K-8D0",
      duration: 112,
      publication_date: "2024-05-21T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/umang-die-roller-extruder-130-umang-engineering",
      title: "Umang Die Roller Extruder 130 | Umang Engineering",
      description: "Die roller extruder is the oldest extruder range that builds on the proven Umang technology and its benefits.",
      thumbnail: "https://img.youtube.com/vi/2l2I9ePt2UU/hqdefault.jpg",
      player: "https://www.youtube.com/embed/2l2I9ePt2UU",
      duration: 60,
      publication_date: "2024-05-21T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/production-scale-extrusion-and-spheronization-umang-engineering",
      title: "Production Scale: Extrusion and Spheronization | Umang Engineering",
      description: "Extrusion and spheronization in machine processes.",
      thumbnail: "https://img.youtube.com/vi/OtITgmnkONc/hqdefault.jpg",
      player: "https://www.youtube.com/embed/OtITgmnkONc",
      duration: 70,
      publication_date: "2023-12-05T00:00:00+00:00",
    },
    {
      loc: "https://www.umangengineering.com/videos-single/extruder-and-spheronizer-pellet-processor-umang-engineering",
      title: "Extruder and Spheronizer Pellet Processor | Umang Engineering",
      description: "Discover the efficiency and precision of our Extruder and Spheronizer Pellet Processor.",
      thumbnail: "https://img.youtube.com/vi/vjcMekpDfxQ/hqdefault.jpg",
      player: "https://www.youtube.com/embed/vjcMekpDfxQ",
      duration: 177,
      publication_date: "2023-12-01T00:00:00+00:00",
    }
  ];

  const urlEntries = videos
    .map(
      (v) => `
  <url>
    <loc>${v.loc}</loc>
    <video:video>
      <video:title><![CDATA[${v.title}]]></video:title>
      <video:description><![CDATA[${v.description}]]></video:description>
      <video:thumbnail_loc>${v.thumbnail}</video:thumbnail_loc>
      <video:player_loc allow_embed="yes">${v.player}</video:player_loc>
      ${v.duration ? `<video:duration>${v.duration}</video:duration>` : ""}
      <video:publication_date>${v.publication_date}</video:publication_date>
    </video:video>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}