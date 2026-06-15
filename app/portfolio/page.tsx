"use client";
import { useState } from "react";
import PortfolioCard from "@/components/ui/PortfolioCard";
import CtaFinal from "@/components/sections/CtaFinal";
import { projects, type ProjectCategory } from "@/data/projects";
import Link from "next/link";

type Filter = "all" | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "branddesign", label: "brandDESIGN" },
  { value: "websites", label: "WEBsites" },
  { value: "campanhas", label: "campanhasADS" },
  { value: "fotovideo", label: "FOTOvídeo" },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "160px 0 80px", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <p className="kicker" style={{ animation: "fade 0.7s ease both" }}>Portfólio</p>
          <h1 style={{ fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "20px", animation: "fade 0.8s ease both 0.15s", maxWidth: "700px" }}>
            Trabalhos que <span className="serif-it" style={{ color: "var(--coral)" }}>dispensam</span> explicação.
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.65, animation: "fade 0.8s ease both 0.3s" }}>
            Uma seleção de projetos reais, para clientes reais, com resultados reais.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "52px" }}>
            {filters.map((f) => (
              <button
                key={f.value}
                className={`filter-btn${active === f.value ? " active" : ""}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--card-gap)" }}>
              {filtered.map((project) => (
                <PortfolioCard key={project.slug} {...project} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
              <p>Nenhum projeto nesta categoria ainda.</p>
            </div>
          )}

          {/* Placeholder notice */}
          <p style={{ marginTop: "40px", fontSize: "12px", color: "var(--muted2)", textAlign: "center" }}>
            ⚠️ Projetos reais a inserir em <code>/data/projects.ts</code>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="rev" style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Gostou do que viu?
          </h2>
          <p className="rev" style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "52px", transitionDelay: "0.1s" }}>
            Imagine o que posso fazer pelo seu negócio.
          </p>
          <div className="rev" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", transitionDelay: "0.2s" }}>
            <a href="https://wa.me/5511974531399" target="_blank" rel="noopener noreferrer" className="btn btn-aurora">
              Falar no WhatsApp
            </a>
            <Link href="/o-que-eu-faco" className="btn btn-ghost">
              Ver o que eu faço
            </Link>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
