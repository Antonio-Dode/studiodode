"use client";
import Link from "next/link";
import Image from "next/image";

type BlogCategory = "criacao" | "branding" | "marketing" | "mercado" | "processo";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  coverImage: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const categoryLabel: Record<BlogCategory, string> = {
  criacao: "Criação",
  branding: "Branding",
  marketing: "Marketing",
  mercado: "Mercado",
  processo: "Processo",
};

const categoryColor: Record<BlogCategory, string> = {
  criacao: "var(--roxo)",
  branding: "var(--amarelo)",
  marketing: "var(--coral)",
  mercado: "var(--coral)",
  processo: "var(--muted)",
};

export default function BlogCard({ slug, title, excerpt, category, coverImage, date, readTime, featured }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      style={{
        display: "block",
        background: "var(--bg2)",
        borderRadius: "var(--r-box)",
        border: "1px solid var(--line)",
        overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--muted2)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
        (e.currentTarget as HTMLElement).style.transform = "none";
      }}
    >
      <div style={{ position: "relative", aspectRatio: featured ? "21/9" : "16/9", background: "var(--bg3)" }}>
        <Image
          src={coverImage}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "4px",
              border: `1px solid ${categoryColor[category]}60`,
              color: categoryColor[category],
            }}
          >
            {categoryLabel[category]}
          </span>
          <span style={{ fontSize: "11px", color: "var(--muted2)" }}>{readTime}</span>
        </div>
        <h3
          style={{
            fontSize: featured ? "22px" : "18px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "10px",
            lineHeight: 1.2,
            color: "inherit",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "16px" }}>
          {excerpt}
        </p>
        <p style={{ fontSize: "11px", color: "var(--muted2)", letterSpacing: "0.04em" }}>{date}</p>
      </div>
    </Link>
  );
}
