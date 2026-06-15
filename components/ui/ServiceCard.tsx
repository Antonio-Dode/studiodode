"use client";
import Link from "next/link";

type ServiceColor = "roxo" | "amarelo" | "verde" | "coral";

interface ServiceCardProps {
  color: ServiceColor;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  icon?: string;
}

const colorMap: Record<ServiceColor, string> = {
  roxo: "var(--roxo)",
  amarelo: "var(--amarelo)",
  verde: "var(--verde)",
  coral: "var(--coral)",
};

export default function ServiceCard({
  color,
  title,
  description,
  href,
  ctaLabel = "Saiba mais",
}: ServiceCardProps) {
  const accent = colorMap[color];

  return (
    <div className={`svc-card sc-${color} rev`}>
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: accent,
          marginBottom: "24px",
        }}
      />
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "12px",
          color: "inherit",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, marginBottom: "28px" }}>
        {description}
      </p>
      <Link
        href={href}
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: accent,
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          transition: "gap 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget.style.gap) = "10px")}
        onMouseLeave={(e) => ((e.currentTarget.style.gap) = "6px")}
      >
        {ctaLabel}
        <span>→</span>
      </Link>
    </div>
  );
}
