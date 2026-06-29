'use client'

import {
  Box, Button, Container, IconButton, Typography,
  Drawer, List, ListItem, ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { TopHeaderProductNavItem } from "./TopHeaderProductNavItem";
import { TopHeaderResourcesNavItem } from "./TopHeaderResourcesNavItem";
import NewsIcon from "@/assets/icons/homepage/news.svg";
import AvatarCircle from "@/assets/icons/homepage/avatar-circle.svg";
import MailIcon from "@/assets/icons/homepage/mail.svg";
import HomeIcon from "@/assets/icons/homepage/home.svg";
import DropDownIcon from "@/assets/icons/homepage/basic-down.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchPopup } from "./SearchPopup";
import { FC, SVGProps } from "react";

interface NavItem {
  label: string | React.ReactNode;
  path: string;
  hasDropdown?: boolean;
}

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close dropdown on route change
  useEffect(() => {
    setHoveredItem(null);
    setMobileOpen(false);
  }, [pathname]);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navItems: NavItem[] = [
    {
      label: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <HomeIcon style={{ width: "21px", height: "21px", color: "#141B34" }} />
          Home
        </Box>
      ),
      path: "/",
    },
    { label: "Products",    path: "/product" , hasDropdown: true  },
    { label: "Spare Parts",          path: "/products/spare-parts"  },
    { label: "Solutions",          path: "/solutions"  },
    { label: "Resources",         path: "/resources", hasDropdown: true  },
    { label: "About Us",          path: "/about-us" },
  ];

  // Helper to check active route
  const isActive = (path: string) => pathname === path;

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1300,
        backgroundColor: "white",
        boxShadow: isScrolled ? "0px 2px 8px rgba(0,0,0,0.1)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            my: 2,
          }}
        >
          {/* Logo */}
          <Box sx={{ mb: { xs: 2, md: 0 } }}>
            <Link href="/">
              <Box
                component="img"
                sx={{ height: 64, width: "auto" }}
                alt="Umang Engineering Logo"
                src="/assets/images/logo.svg"
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "8px",
              width: "95%",
            }}
          >
            {/* Top icons row */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "36px" }}>
              <Link href="/news-exhibition" style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  <NewsIcon style={{ width: "23px", height: "23px", color: "#141B34" }} />
                  <Typography sx={{ fontSize: "16px", fontFamily: "Jost" }}>News</Typography>
                </Box>
              </Link>

              <Link href="/distributor" style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  <AvatarCircle style={{ width: "23px", height: "23px", color: "#141B34" }} />
                  <Typography sx={{ fontSize: "16px", fontFamily: "Jost" }}>Distributors Wanted</Typography>
                </Box>
              </Link>

              <Link href="mailto:info@umangglobal.com" style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  <MailIcon style={{ width: "23px", height: "23px", color: "#141B34" }} />
                  <Typography sx={{ fontSize: "16px", fontFamily: "Jost" }}>info@umangglobal.com</Typography>
                </Box>
              </Link>
            </Box>

            {/* Navigation Row */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "90px", flexWrap: "wrap" }}>
              {/* Left navigation */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
                {navItems.map((item, index) => {
                  const itemLabel = typeof item.label === "string" ? item.label : "";
                  const active = isActive(item.path);

                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                        fontFamily: "Jost-sb",
                        position: "relative",
                        padding: "3px",
                        "&:hover": { background: "#41939C21", borderRadius: "5px" },
                      }}
                      onMouseEnter={() => setHoveredItem(itemLabel)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Link
                        href={item.path}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontWeight: active ? 600 : 400,
                          fontSize: "18px",
                          fontFamily: "Jost",
                          color: active ? "#41939C" : "#141B34",
                        }}
                      >
                        <Typography component="span">{item.label}</Typography>
                        {item.hasDropdown && (
                          <DropDownIcon style={{ width: "21px", height: "21px", color: "#141B34" }} />
                        )}
                      </Link>

                      {/* Active underline */}
                      {active && (
                        <Box sx={{ width: "100%", borderBottom: "1px solid #41939C" }} />
                      )}

                      {/* Dropdowns */}
                      {itemLabel === "Products" && hoveredItem === "Products" && (
                        <Box sx={{ position: "absolute", top: "85%", left: "-300%", zIndex: 999, mt: 0.4, width: "1050px" }}>
                          <TopHeaderProductNavItem />
                        </Box>
                      )}
                      {itemLabel === "Resources" && hoveredItem === "Resources" && (
                        <Box sx={{ position: "absolute", top: "80%", left: "-200%", zIndex: 999, mt: 0.4, width: "680px" }}>
                          <TopHeaderResourcesNavItem />
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>

              {/* Right buttons */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Link href="/contact-us" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      height: "46px",
                      px: "24px",
                      background: "white",
                      borderRadius: "26px",
                      border: "1.5px solid #41939C",
                      color: "#41939C",
                      fontSize: "18px",
                      fontFamily: "Jost-sb",
                      fontWeight: 500,
                      textTransform: "none",
                      "&:hover": { background: "#41939C21" },
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
                <SearchPopup />
              </Box>
            </Box>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, position: "absolute", top: 20, right: 20 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer sx={{ zIndex: 9999 }} anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
            <Box sx={{ width: 250, p: 2 }}>
              <List>
                {navItems.map((item, index) => (
                  <ListItem key={index} onClick={handleDrawerToggle}>
                    <Link href={item.path} style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
                      <ListItemText primary={item.label} />
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button fullWidth sx={{ mt: 2, color: "#41939C", border: "1.5px solid #41939C" }}>
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
}