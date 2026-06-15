"use client";
import Link from "next/link";
import { useEffect } from "react";
import Logo from "@/components/ui/Logo";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function Sidebar({ open, onClose, links }: SidebarProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          zIndex: 300,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(320px, 90vw)",
          background: "var(--bg2)",
          borderLeft: "1px solid var(--line)",
          zIndex: 301,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "32px 28px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Logo width={110} />
          </Link>
          <button
            onClick={onClose}
            style={{ background: "transparent", border: "1px solid var(--line)", borderRadius: "var(--r-btn)", width: "36px", height: "36px", cursor: "pointer", color: "var(--muted)", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--muted)",
                padding: "12px 0",
                borderBottom: "1px solid var(--line)",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {link.label}
              <span style={{ fontSize: "12px", opacity: 0.4 }}>→</span>
            </Link>
          ))}
        </nav>

        {/* Footer info */}
        <div style={{ marginTop: "40px", borderTop: "1px solid var(--line)", paddingTop: "28px" }}>
          <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "16px" }}>
            Itu, São Paulo<br />
            Atendo em todo o Brasil
          </p>
          <a
            href="https://wa.me/5511974531399"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-aurora"
            style={{ width: "100%", justifyContent: "center", fontSize: "13px" }}
          >
            Falar no WhatsApp
          </a>
          <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
            {["Instagram", "LinkedIn", "Behance"].map((r) => (
              <span key={r} style={{ fontSize: "11px", color: "var(--muted2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
