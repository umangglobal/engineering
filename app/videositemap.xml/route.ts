// app/video-sitemap.xml/route.ts
export async function GET() {
  const videos = [
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/glow-with-the-power-of-turmeric",
      title: "Glow with the Power of Turmeric",
      description: "Encapsulated Curcumin Beads by Umang Nutraceuticals deliver enhanced stability, better absorption, and sustained release for health and wellness products.",
      thumbnail: "https://img.youtube.com/vi/VTL2iHj_6Ks/hqdefault.jpg",
      player: "https://www.youtube.com/embed/VTL2iHj_6Ks",
      duration: 12,
      publication_date: "2025-09-10T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/micro-encapsulated-ingredients-for-nutraceuticals-umang-global-group-pvt-ltd",
      title: "Micro Encapsulated Ingredients for Nutraceuticals | Umang Global Group Pvt Ltd",
      description: "Explore the world of cutting-edge micro encapsulated ingredients of Nutraceuticals applications.",
      thumbnail: "https://img.youtube.com/vi/YpH1or9d2Mc/hqdefault.jpg",
      player: "https://www.youtube.com/embed/YpH1or9d2Mc",
      duration: 67,
      publication_date: "2023-11-16T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/capsicum-without-the-burn-meet-capsiencap-the-smarter-way-to-deliver-heat",
      title: "Capsicum Without the Burn? Meet Capsiencap™ - The Smarter Way to Deliver Heat",
      description: "Introducing Capsiencap™ by UMANG — our patented encapsulation solution that delivers controlled, sustained heat release while being completely irritation-free.",
      thumbnail: "https://img.youtube.com/vi/HIS18FCSwqY/hqdefault.jpg",
      player: "https://www.youtube.com/embed/HIS18FCSwqY",
      duration: 40,
      publication_date: "2026-01-14T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/aminospheres-nutrition-made-smarter-nutraceuticals-umang-global-group",
      title: "Aminospheres: Nutrition Made Smarter | Nutraceuticals | Umang Global Group",
      description: "Welcome to our video on Aminospheres, innovative encapsulated amino acids that enhance protein synthesis, support immune function, and provide superior nutrition.",
      thumbnail: "https://img.youtube.com/vi/i_bowkhh00A/hqdefault.jpg",
      player: "https://www.youtube.com/embed/i_bowkhh00A",
      duration: 145,
      publication_date: "2025-01-21T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/l-leucine-beadlets-precision-delivery-in-action",
      title: "L-Leucine Beadlets: Precision Delivery in Action",
      description: "L-Leucine plays a role in muscle and protein synthesis — but delivery matters. Watch how beadlets can help in delivering it more precisely.",
      thumbnail: "https://img.youtube.com/vi/x_03I4WGlRw/hqdefault.jpg",
      player: "https://www.youtube.com/embed/x_03I4WGlRw",
      duration: 30,
      publication_date: "2025-10-16T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/want-brahmi-beadlets-that-deliver-not-just-promise",
      title: "Want Brahmi beadlets that deliver - not just promise?",
      description: "Discover how Umang Encapsulation patented beadlet technology transforms Bacopa monnieri (Brahmi) into a stable, palatable, high-potency ingredient for cognitive health supplements.",
      thumbnail: "https://img.youtube.com/vi/-7F8VYKfpoM/hqdefault.jpg",
      player: "https://www.youtube.com/embed/-7F8VYKfpoM",
      duration: 38,
      publication_date: "2026-02-18T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/actispheres-precision-encapsulation-for-wellness-nutraceuticals-umang-global-group",
      title: "Actispheres: Precision Encapsulation for Wellness | Nutraceuticals | Umang Global Group",
      description: "This video explains how Actispheres improves product effectiveness by ensuring precise, sustained release of active ingredients, enhancing bioavailability, and preserving product integrity.",
      thumbnail: "https://img.youtube.com/vi/YCvG75JxQGI/hqdefault.jpg",
      player: "https://www.youtube.com/embed/YCvG75JxQGI",
      duration: 137,
      publication_date: "2025-01-17T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/struggling-to-sleep-this-tiny-beadlet-changed-everything",
      title: "Struggling to Sleep? This Tiny Beadlet Changed Everything",
      description: "Encapsulated Melatonin SR Beadlet by UMANG designed for smooth, sustained release so you fall asleep faster and stay asleep longer.",
      thumbnail: "https://img.youtube.com/vi/7eLAowoJTFE/hqdefault.jpg",
      player: "https://www.youtube.com/embed/7eLAowoJTFE",
      duration: 36,
      publication_date: "2026-01-07T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/boost-your-wellness-with-botanispheres-ashwagandha-nutraceuticals-umang-global-group",
      title: "Boost Your Wellness with Botanispheres Ashwagandha | Nutraceuticals | Umang Global Group",
      description: "In this video, we have demonstrated how the botanospheres offer exceptional nutrient delivery for a wide range of uses.",
      thumbnail: "https://img.youtube.com/vi/_stgAsGB7rU/hqdefault.jpg",
      player: "https://www.youtube.com/embed/_stgAsGB7rU",
      duration: 146,
      publication_date: "2025-01-29T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/the-growing-impact-of-carotenoids-on-human-health-nutraceuticals-umang-global-group",
      title: "The Growing Impact of Carotenoids on Human Health | Nutraceuticals | Umang Global Group",
      description: "These encapsulated carotenoids support immune health by enhancing stability and bioavailability while shielding the active ingredients from light, oxidation, and other environmental factors.",
      thumbnail: "https://img.youtube.com/vi/rUSUJ8yq5AQ/hqdefault.jpg",
      player: "https://www.youtube.com/embed/rUSUJ8yq5AQ",
      duration: 139,
      publication_date: "2025-03-04T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/shilajit-beadlets-the-future-of-ancient-wellness-encapsulation-innovation-in-nutraceuticals",
      title: "Shilajit Beadlets: The Future of Ancient Wellness | Encapsulation Innovation in Nutraceuticals",
      description: "Discover how Shilajit, the legendary Himalayan adaptogen, is being transformed for the modern world through advanced encapsulation technology.",
      thumbnail: "https://img.youtube.com/vi/PsKH-llk4_I/hqdefault.jpg",
      player: "https://www.youtube.com/embed/PsKH-llk4_I",
      duration: 107,
      publication_date: "2025-11-01T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/minerals-small-nutrients-big-impact-on-your-health-nutraceuticals-umang-global-group",
      title: "Minerals: Small Nutrients, Big Impact on Your Health | Nutraceuticals | Umang Global Group",
      description: "Minospheres is an innovative encapsulation technology for essential minerals like copper, zinc, and calcium.",
      thumbnail: "https://img.youtube.com/vi/NZ_PL_epQPw/hqdefault.jpg",
      player: "https://www.youtube.com/embed/NZ_PL_epQPw",
      duration: 139,
      publication_date: "2025-03-12T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/encapsulated-capsaicin-metabolism-and-weight-management",
      title: "Encapsulated Capsaicin: Metabolism & Weight Management",
      description: "Discover how Umang's advanced encapsulation technology transforms capsaicin active into user-friendly, high-performance beadlets.",
      thumbnail: "https://img.youtube.com/vi/c2O6tRyqN_s/hqdefault.jpg",
      player: "https://www.youtube.com/embed/c2O6tRyqN_s",
      duration: 176,
      publication_date: "2026-02-03T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/micro-encapsulated-heart-care-for-nutraceuticals-umang-global-group-pvt-ltd",
      title: "Micro Encapsulated Heart Care for Nutraceuticals | Umang Global Group Pvt Ltd",
      description: "Explore the world of cutting-edge micro encapsulated Heart Care of Nutraceuticals applications.",
      thumbnail: "https://img.youtube.com/vi/xgT5n-e0aPs/hqdefault.jpg",
      player: "https://www.youtube.com/embed/xgT5n-e0aPs",
      duration: 88,
      publication_date: "2023-11-29T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/nutraceuticals-for-sports-nutrition-fuel-your-performance",
      title: "Nutraceuticals for Sports Nutrition: Fuel Your Performance",
      description: "Take your fitness and performance to the next level with advanced sports nutrition nutraceuticals.",
      thumbnail: "https://img.youtube.com/vi/qu8L164hYng/hqdefault.jpg",
      player: "https://www.youtube.com/embed/qu8L164hYng",
      duration: 199,
      publication_date: "2024-11-29T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/micro-encapsulated-gut-care-for-nutraceuticals-umang-global-group-pvt-ltd",
      title: "Micro Encapsulated Gut Care for Nutraceuticals | Umang Global Group Pvt Ltd",
      description: "Explore the world of cutting-edge micro encapsulated Gut Care of Nutraceuticals applications.",
      thumbnail: "https://img.youtube.com/vi/zJ_TIIysWPg/hqdefault.jpg",
      player: "https://www.youtube.com/embed/zJ_TIIysWPg",
      duration: 183,
      publication_date: "2023-11-29T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/enhance-your-well-being-by-nourishing-your-body-with-nutraceuticals",
      title: "Enhance Your Well-Being by Nourishing Your Body with Nutraceuticals",
      description: "Integrating nutraceuticals foods or standardized supplements that provide medical or health benefits can be a powerful way to bridge the gap between basic nutrition and optimal wellness.",
      thumbnail: "https://img.youtube.com/vi/Izxzen1OABQ/hqdefault.jpg",
      player: "https://www.youtube.com/embed/Izxzen1OABQ",
      duration: 172,
      publication_date: "2024-11-27T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/gut-care-nutraceuticals-support-your-digestive-health-naturally",
      title: "Gut Care Nutraceuticals: Support Your Digestive Health Naturally",
      description: "A healthy gut is the foundation of overall wellness! Discover how gut care nutraceuticals combine science and nature to support digestion.",
      thumbnail: "https://img.youtube.com/vi/hWnLXWzz6tc/hqdefault.jpg",
      player: "https://www.youtube.com/embed/hWnLXWzz6tc",
      duration: 172,
      publication_date: "2024-11-30T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/taste-masking-making-medicines-more-palatable-for-all-nutraceuticals-umang-global-group",
      title: "Taste-Masking: Making Medicines More Palatable for All | Nutraceuticals | Umang Global Group",
      description: "In this video, we explore Taste Masking, a technique designed to improve the flavor of nutraceutical ingredients with unpleasant tastes.",
      thumbnail: "https://img.youtube.com/vi/SbaujnivVN4/hqdefault.jpg",
      player: "https://www.youtube.com/embed/SbaujnivVN4",
      duration: 151,
      publication_date: "2025-09-20T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/nutraceuticals-for-weight-management-your-partner-in-achieving-a-healthier-lifestyle",
      title: "Nutraceuticals for Weight Management: Your Partner in Achieving a Healthier Lifestyle",
      description: "Achieve your weight management goals with the power of nutraceuticals! These scientifically formulated supplements support metabolism, energy balance, and appetite control.",
      thumbnail: "https://img.youtube.com/vi/9o3_LT4sLBM/hqdefault.jpg",
      player: "https://www.youtube.com/embed/9o3_LT4sLBM",
      duration: 161,
      publication_date: "2024-12-09T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/boost-your-immunity-with-advanced-nutraceuticals",
      title: "Boost Your Immunity with Advanced Nutraceuticals",
      description: "Discover the power of nutraceuticals designed to strengthen your immune system naturally.",
      thumbnail: "https://img.youtube.com/vi/Kr7eg1jPswI/hqdefault.jpg",
      player: "https://www.youtube.com/embed/Kr7eg1jPswI",
      duration: 178,
      publication_date: "2024-12-02T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/l-arginine-beadlets-technolog-taste-masked-and-custom-release-solutions",
      title: "L-Arginine Beadlets Technology | Taste Masked & Custom Release Solutions",
      description: "Transform Your L-Arginine Products with Advanced Encapsulation Technology — solving challenges around bitterness, high dosage requirements, and moisture sensitivity.",
      thumbnail: "https://img.youtube.com/vi/_kG2bI6tMQM/hqdefault.jpg",
      player: "https://www.youtube.com/embed/_kG2bI6tMQM",
      duration: null, // duration missing in source XML
      publication_date: "2026-03-17T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/naturally-support-your-mind-with-nutraceuticals-for-mental-wellbeing",
      title: "Naturally Support Your Mind with Nutraceuticals for Mental Wellbeing",
      description: "Discover how nutraceuticals can help enhance your mental wellness, supporting stress relief, focus, and emotional balance.",
      thumbnail: "https://img.youtube.com/vi/bjnK3J3mMxs/hqdefault.jpg",
      player: "https://www.youtube.com/embed/bjnK3J3mMxs",
      duration: 177,
      publication_date: "2024-12-06T00:00:00+00:00",
    },
    {
      loc: "https://www.umangnutraceuticals.com/videos-single/nutraceuticals-for-men-and-women-unlock-your-health-potential",
      title: "Nutraceuticals for Men & Women: Unlock Your Health Potential",
      description: "Discover tailored nutraceutical solutions designed to meet the unique health needs of both men and women.",
      thumbnail: "https://img.youtube.com/vi/Lw5BKwKn_TU/hqdefault.jpg",
      player: "https://www.youtube.com/embed/Lw5BKwKn_TU",
      duration: 179,
      publication_date: "2024-12-04T00:00:00+00:00",
    },
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