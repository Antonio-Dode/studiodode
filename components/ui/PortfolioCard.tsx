"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Category = "branddesign" | "websites" | "campanhas" | "fotovideo";

interface PortfolioCardProps {
  slug: string;
  title: string;
  client: string;
  category: Category;
  heroImage: string;
  year: string;
}

const categoryLabel: Record<Category, string> = {
  branddesign: "brandDESIGN",
  websites: "WEBsites",
  campanhas: "campanhasADS",
  fotovideo: "FOTOvídeo",
};

const categoryColor: Record<Category, string> = {
  branddesign: "var(--amarelo)",
  websites: "var(--roxo)",
  campanhas: "var(--verde)",
  fotovideo: "var(--coral)",
};

export default function PortfolioCard({ slug, title, client, category, heroImage, year }: PortfolioCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/portfolio/${slug}`}
      style={{
        display: "block",
        borderRadius: "var(--r-box)",
        overflow: "hidden",
        position: "relative",
        aspectRatio: "4/3",
        background: "var(--bg3)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Image
        src={heroImage}
        alt={title}
        fill
        style={{
          objectFit: "cover",
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Overlay — hidden at rest, fades in on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.82) 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Category — top left, only on hover */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          fontSize: "10px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          padding: "5px 12px",
          borderRadius: "4px",
          background: "rgba(0,0,0,0.55)",
          color: categoryColor[category],
          border: `1px solid ${categoryColor[category]}50`,
          backdropFilter: "blur(8px)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(-6px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        {categoryLabel[category]}
      </div>

      {/* Info — bottom, slides up on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px 20px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
        }}
      >
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginBottom: "5px", letterSpacing: "0.04em" }}>
          {client} · {year}
        </p>
        <h3 style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.2 }}>
          {title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: categoryColor[category],
            marginTop: "10px",
            letterSpacing: "0.04em",
          }}
        >
          Ver projeto →
        </p>
      </div>
    </Link>
  );
}
