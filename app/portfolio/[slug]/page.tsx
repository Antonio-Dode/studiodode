import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import CtaFinal from "@/components/sections/CtaFinal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — DODÉ Studio Criativo`,
    description: project.challenge.text,
  };
}

const categoryLabel: Record<string, string> = {
  branddesign: "brandDESIGN",
  websites: "WEBsites",
  campanhas: "campanhasADS",
  fotovideo: "FOTOvídeo",
};

const categoryColor: Record<string, string> = {
  branddesign: "var(--amarelo)",
  websites: "var(--roxo)",
  campanhas: "var(--verde)",
  fotovideo: "var(--coral)",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const accent = categoryColor[project.category];

  return (
    <>
      {/* HERO */}
      <section
        style={{
          padding: "140px 0 80px",
          borderBottom: "1px solid var(--line)",
          background: `linear-gradient(180deg, ${accent}18 0%, var(--bg) 100%)`,
        }}
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <Link href="/portfolio" style={{ fontSize: "13px", color: "var(--muted)" }} className="hover-muted">
              ← Portfólio
            </Link>
            <span style={{ color: "var(--line)" }}>/</span>
            <span
              style={{
                fontSize: "11px",
                padding: "4px 12px",
                borderRadius: "4px",
                color: accent,
                border: `1px solid ${accent}50`,
                background: "transparent",
                letterSpacing: "0.06em",
              }}
            >
              {categoryLabel[project.category]}
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 4vw, 50px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "28px",
              maxWidth: "700px",
              animation: "fade 0.8s ease both",
            }}
          >
            {project.title}
          </h1>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { label: "Cliente", value: project.client },
              { label: "Ano", value: project.year },
              { label: "Serviços", value: project.services.join(" · ") },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "4px" }}>{item.label}</p>
                <p style={{ fontSize: "15px", fontWeight: 500 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ aspectRatio: "16/7", background: "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", color: accent, opacity: 0.3, fontWeight: 700, letterSpacing: "-0.04em" }}>
              {project.title}
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted2)", marginTop: "8px" }}>⚠️ Imagem principal do projeto</p>
          </div>
        </div>
      </section>

      {/* DESAFIO + SOLUÇÃO */}
      <section style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--col-gap)" }} className="project-grid">
            <div className="rev-l">
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "16px" }}>O desafio</p>
              <h2 style={{ fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                {project.challenge.headline}
              </h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75 }}>
                {project.challenge.text}
              </p>
            </div>
            <div className="rev-r">
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "16px" }}>A solução</p>
              <h2 style={{ fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                {project.solution.headline}
              </h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75 }}>
                {project.solution.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      {project.results.length > 0 && (
        <section style={{ padding: "80px 0", background: "var(--bg2)", borderBottom: "1px solid var(--line)" }}>
          <div className="container">
            <p className="kicker rev">Resultados</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "24px", marginTop: "40px" }}>
              {project.results.map((r, i) => (
                <div key={i} className="rev" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div
                    style={{
                      fontSize: "clamp(26px, 4vw, 42px)",
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      background: "var(--aurora)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {r.value}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "8px" }}>{r.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALERIA */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <p className="kicker rev">Galeria</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginTop: "40px" }}>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rev"
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-box)",
                  aspectRatio: "4/3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transitionDelay: `${(n - 1) * 0.1}s`,
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted2)" }}>⚠️ Imagem {n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAV ENTRE PROJETOS */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`} className="proj-nav-link" style={{ borderRight: "1px solid var(--line)" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "8px" }}>← Anterior</p>
              <p style={{ fontSize: "16px", fontWeight: 600 }}>{prev.title}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/portfolio/${next.slug}`} className="proj-nav-link" style={{ textAlign: "right" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "8px" }}>Próximo →</p>
              <p style={{ fontSize: "16px", fontWeight: 600 }}>{next.title}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
