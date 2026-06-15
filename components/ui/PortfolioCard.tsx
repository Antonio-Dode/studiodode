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
      style={{ display: "block", borderRadius: "var(--r-box)", overflow: "hidden", position: "relative", aspectRatio: "4/3", background: "var(--bg3)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={heroImage}
        alt={title}
        fill
        style={{ objectFit: "cover", transition: "transform 0.6s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered ? "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)" : "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)",
          transition: "background 0.4s ease",
        }}
      />
      {/* Category pill */}
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
          background: "rgba(0,0,0,0.6)",
          color: categoryColor[category],
          border: `1px solid ${categoryColor[category]}40`,
          backdropFilter: "blur(8px)",
        }}
      >
        {categoryLabel[category]}
      </div>
      {/* Info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "transform 0.4s ease",
        }}
      >
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>
          {client} · {year}
        </p>
        <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff" }}>
          {title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "var(--verde)",
            marginTop: "8px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "all 0.3s ease 0.05s",
          }}
        >
          Ver projeto →
        </p>
      </div>
    </Link>
  );
}
