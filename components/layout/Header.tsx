"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Sidebar from "./Sidebar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/quem-sou", label: "Quem Sou" },
  { href: "/o-que-eu-faco", label: "O Que Eu Faço" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const LIGHT_PAGES = ["/quem-sou", "/blog"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isLight = LIGHT_PAGES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const fg = isLight ? "#111111" : "#ffffff";
  const fgMuted = isLight ? "#666666" : "var(--muted)";
  const activeBg = isLight ? "#e8e8e8" : "var(--bg3)";
  const borderColor = isLight ? "#D5D3CE" : "var(--line)";
  const headerBg = scrolled
    ? (isLight ? "rgba(255,255,255,0.96)" : "rgba(10,10,10,0.95)")
    : (isLight ? "rgba(255,255,255,0.85)" : "transparent");

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: "all 0.3s ease",
          borderBottom: scrolled ? `1px solid ${borderColor}` : "1px solid transparent",
          background: headerBg,
          backdropFilter: scrolled ? "blur(12px)" : (isLight ? "blur(8px)" : "none"),
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "120px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", color: fg }}>
            <Logo width={110} />
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{ alignItems: "center", gap: "4px" }}
            className="hidden lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "13px",
                  padding: "8px 14px",
                  borderRadius: "var(--r-btn)",
                  color: pathname === link.href ? fg : fgMuted,
                  background: pathname === link.href ? activeBg : "transparent",
                  transition: "all 0.2s",
                  fontWeight: pathname === link.href ? 600 : 400,
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href)
                    (e.target as HTMLElement).style.color = fg;
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href)
                    (e.target as HTMLElement).style.color = fgMuted;
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="btn btn-pri"
              style={{ marginLeft: "12px", padding: "10px 20px", fontSize: "13px" }}
            >
              Fale comigo
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
            style={{
              background: "transparent",
              border: `1px solid ${borderColor}`,
              borderRadius: "6px",
              padding: "9px 10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Abrir menu"
          >
            <span style={{ width: "20px", height: "1.5px", background: fg, display: "block" }} />
            <span style={{ width: "14px", height: "1.5px", background: fg, display: "block" }} />
            <span style={{ width: "20px", height: "1.5px", background: fg, display: "block" }} />
          </button>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} links={navLinks} />
    </>
  );
}
