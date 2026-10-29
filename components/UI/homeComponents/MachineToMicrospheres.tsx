'use client'

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Theme tokens (same as SustainabilityHome)                          */
/* ------------------------------------------------------------------ */
const GREEN = "#2C997A";
const BLUE = "#41939c";
const TEXT = "#21272A";
const MUTED = "#5A6169";
const CARD_BG = "#F2F4F8";
const LINE_BG = "#D5DBE1";



/* ------------------------------------------------------------------ */
/*  Content                                                            */
/*  TODO before publishing: confirm every figure with the Umang team. */
/* ------------------------------------------------------------------ */
interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface StageData {
  title: string;
  description: string;
  altdescription: string;
  icon: string;
  url: string;
  external?: boolean;
  stat?: Stat;
}

const stages: StageData[] = [
  {
    title: "Machines",
    altdescription: "Machines for pharmaceutical manufacturing",
    description:
      "Extruders, spheronizers, fluid bed dryers, solid drug layering, and pelletization and granulation lines.",
     icon: "/assets/icons/machines.svg",
    url: "/product",
  },
  {
    title: "Cores",
    altdescription: "Cores for pharmaceutical applications",
    description:
      "The foundation for efficient drug layering, functional coating, and advanced pellet development.",
    icon: "/assets/icons/cores.svg",
    url: "https://www.umangpharmaceuticals.com/products/excipient-pellets",
    external: true,
    // stat: { value: 337, suffix: " t/yr", label: "MCC spheres to the US" },
  },
  {
    title: "Formulation",
    altdescription: "Formulation solutions for pharmaceutical applications",
    description: "Formulation solutions tailored to specific release profiles, color, and particle size requirements.",
    icon: "/assets/icons/formulation.svg",
    url: "https://www.umangnutraceuticals.com/product",
    external: true,
    // stat: { value: 300, suffix: "+", label: "Catalogue beadlets" },
  },
  {
    title: "Microspheres",
    altdescription: "Microspheres for pharmaceutical, nutraceutical, and personal care applications",
    // TODO: confirm the sphericity claim wording with the team
    description:
      "Versatile microsphere solutions for pharmaceutical, nutraceutical, and personal care applications.",
    icon: "/assets/icons/microspheres.svg",
    url: "/encapsulation-technology",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const STAGGER_MS = 150;
const LINE_MS = 1200;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Renders the final value on the server (good for SEO), then counts up once in view. */
const CountUp: FC<{ end: number; run: boolean; animate: boolean }> = ({
  end,
  run,
  animate,
}) => {
  const [value, setValue] = useState(end);

  useEffect(() => {
    if (animate && !run) setValue(0);
  }, [animate, run]);

  useEffect(() => {
    if (!run || !animate) {
      if (run) setValue(end);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / LINE_MS, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, animate, end]);

  return <>{value.toLocaleString("en-IN")}</>;
};

const CardLink: FC<{ href: string; external?: boolean; children: ReactNode }> = ({
  href,
  external,
  children,
}) =>
  external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      {children}
    </a>
  ) : (
    <Link href={href} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export const MachineToMicrospheres = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // play once
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = mounted && !reducedMotion;
  const hidden = animate && !inView; // content is fully visible without JS
  const lineDuration = reducedMotion ? 0 : LINE_MS;

  return (
    <Box
      component="section"
      aria-labelledby="m2m-heading"
      ref={sectionRef}
      sx={{ my: 2, py: { xs: 1, md: 3 }, backgroundColor: "#C3E9ED", }}
    >
      <Container>
        {/* Heading */}
        <Box sx={{ mb: { xs: 2, md: 3 } }}>
          
          
          <Typography
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "black",
            fontSize: { xs: "20px", md: "32px" },
            fontFamily: "Jost-sb",
            fontWeight: 500,
            wordWrap: "break-word",
            marginBottom: "15px",
          }}
        >
           MACHINE TO MICROSPHERES
        </Typography>
          <Typography
            sx={{
              mt: 1.5,
              textAlign: "center",
              color: MUTED,
              fontFamily: "Jost",
              fontSize: { xs: "15px", md: "18px" },
            
            }}
          >
          From Manufacturing Equipment to finished Microspheres, we bring engineering, processing expertise and production capabilities together.
          </Typography>
        </Box>

        {/* CTAs */}
        <Box
          sx={{
            mb: 2,
            mt: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/contact-us">
            <Button
              variant="contained"
              sx={{
                width: { xs: "252px", md: "260px" },
                height: 48,
                backgroundColor: BLUE,
                borderRadius: "32px",
                color: "white",
                fontFamily: "Jost",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                letterSpacing: "0.5px",
                textTransform: "none",
                boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
                "&:hover": { backgroundColor: "#41939Ca8" },
              }}
            >
              Build your line
            </Button>
          </Link>
          {/* TODO: point this to the ingredient / contract-manufacturing enquiry page */}
          <Link href="/free-quote">
            <Button
              variant="outlined"
              sx={{
                width: { xs: "252px", md: "260px" },
                height: 48,
                borderRadius: "32px",
                borderColor: BLUE,
                color: BLUE,
                fontFamily: "Jost",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                letterSpacing: "0.5px",
                textTransform: "none",
                "&:hover": { background: BLUE, color: "#fff", borderColor: BLUE },
              }}
            >
              Source finished spheres
            </Button>
          </Link>
        </Box>

        {/* Stages */}
        <Box
          component="ol"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            position: "relative",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: { xs: "16px", md: "32px" },
          }}
        >
          {/* Connector track + fill (sits behind the cards, shows in the gaps) */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              zIndex: 0,
              background: LINE_BG,
              borderRadius: 2,
              top: { xs: 0, md: 56 },
              bottom: { xs: 0, md: "auto" },
              left: { xs: 56, md: "12.5%" },
              right: { xs: "auto", md: "12.5%" },
              width: { xs: 3, md: "auto" },
              height: { xs: "auto", md: 3 },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: BLUE,
                transformOrigin: { xs: "top", md: "left" },
                transform: {
                  xs: hidden ? "scaleY(0)" : "scaleY(1)",
                  md: hidden ? "scaleX(0)" : "scaleX(1)",
                },
                transition: `transform ${lineDuration}ms ease-out`,
              }}
            />
          </Box>

          {stages.map((stage, index) => {
            const delay = reducedMotion ? 0 : index * STAGGER_MS;
            const iconDelay = reducedMotion ? 0 : (LINE_MS / stages.length) * index;

            return (
              <Box component="li" key={stage.title} sx={{ position: "relative", zIndex: 1 }}>
                <CardLink href={stage.url} external={stage.external}>
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 2.5, md: 3 },
                      backgroundColor: CARD_BG,
                      borderRadius: "20px",
                      border: "1px solid transparent",
                      display: "flex",
                      flexDirection: { xs: "row", md: "column" },
                      alignItems: "flex-start",
                      gap: { xs: 2, md: 0 },
                      opacity: hidden ? 0 : 1,
                      transform: hidden ? "translateY(16px)" : "none",
                      transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms, border-color 200ms, box-shadow 200ms`,
                      "&:hover": {
                        borderColor: BLUE,
                        boxShadow: "0px 6px 16px -6px rgba(44, 153, 122, 0.35)",
                      },
                      "&:hover .m2m-explore": { gap: "10px" },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        backgroundColor: hidden ? "#AEB7BF" : BLUE,
                        transition: `background-color 300ms ease ${iconDelay}ms`,
                      }}
                    >
                     {/* Icon */}
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: hidden ? "#AEB7BF" : BLUE,
                        transition: `background-color 300ms ease ${iconDelay}ms`,
                      }}
                    >
                      <Box
                        component="img"
                        src={stage.icon}
                        alt={stage.altdescription}            // decorative: the h3 title already names the stage
                        aria-hidden
                        loading="lazy"
                        sx={{ width: 50, height: 50, objectFit: "contain" }}
                      />
                    </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}>
                      {/* Title */}
                      <Typography
                        component="h3"
                        sx={{
                          mt: { xs: 0, md: 3 },
                          fontSize: { xs: "19px", md: "22px" },
                          fontFamily: "Jost-sb",
                          fontWeight: 500,
                          color: TEXT,
                          lineHeight: 1.2,
                        }}
                      >
                        {stage.title}
                      </Typography>

                      {/* Stat */}
                      {stage.stat && (
                        <Box sx={{ mt: 1 }}>
                          <Typography
                            sx={{
                              fontFamily: "Jost-sb",
                              fontWeight: 500,
                              fontSize: { xs: "26px", md: "30px" },
                              color: BLUE,
                              lineHeight: 1.1,
                            }}
                          >
                            {stage.stat.prefix}
                            <CountUp end={stage.stat.value} run={inView} animate={animate} />
                            {stage.stat.suffix}
                          </Typography>
                          <Typography sx={{ fontFamily: "Jost", fontSize: "13px", color: MUTED }}>
                            {stage.stat.label}
                          </Typography>
                        </Box>
                      )}

                      {/* Description */}
                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: "15px",
                          fontFamily: "Jost",
                          fontWeight: 400,
                          color: MUTED,
                          lineHeight: 1.5,
                        }}
                      >
                        {stage.description}
                      </Typography>

                      {/* Explore link */}
                      <Box
                        className="m2m-explore"
                        sx={{
                          mt: "auto",
                          pt: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: BLUE,
                          fontFamily: "Jost",
                          fontWeight: 500,
                          fontSize: "15px",
                          transition: "gap 200ms",
                        }}
                      >
                        Explore <span aria-hidden>→</span>
                      </Box>
                    </Box>
                  </Box>
                </CardLink>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default MachineToMicrospheres;
