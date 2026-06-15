"use client";
import { useState } from "react";
import BlogCard from "@/components/ui/BlogCard";
import CtaFinal from "@/components/sections/CtaFinal";
import { posts, type PostCategory } from "@/data/posts";

type Filter = "all" | PostCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "criacao", label: "Criação" },
  { value: "branding", label: "Branding" },
  { value: "marketing", label: "Marketing" },
  { value: "mercado", label: "Mercado" },
  { value: "processo", label: "Processo" },
];

export default function Blog() {
  const [active, setActive] = useState<Filter>("all");

  const featured = posts.find((p) => p.featured);
  const filtered = (active === "all" ? posts : posts.filter((p) => p.category === active)).filter((p) => !p.featured);

  return (
    <>
      <div className="page-light">
      {/* HERO */}
      <section style={{ padding: "160px 0 80px", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <p className="kicker" style={{ animation: "fade 0.7s ease both" }}>Blog</p>
          <h1 style={{ fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "20px", animation: "fade 0.8s ease both 0.15s", maxWidth: "700px" }}>
            Bastidores, processo e <span className="serif-it" style={{ color: "var(--amarelo)" }}>ponto de vista.</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.65, animation: "fade 0.8s ease both 0.3s" }}>
            Sem mimimi de agência. Conteúdo direto sobre criação, branding e o mercado como ele realmente é.
          </p>
        </div>
      </section>

      {/* DESTAQUE */}
      {featured && (
        <section style={{ padding: "100px 0", borderBottom: "1px solid var(--line)" }}>
          <div className="container">
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "20px" }}>Em destaque</p>
            <BlogCard {...featured} featured />
          </div>
        </section>
      )}

      {/* GRID */}
      <section style={{ padding: "100px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "52px" }}>
            {filters.map((f) => (
              <button key={f.value} className={`filter-btn${active === f.value ? " active" : ""}`} onClick={() => setActive(f.value)}>
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--card-gap)" }}>
              {filtered.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--muted)" }}>
              <p>Nenhum post nesta categoria ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: "120px 0", background: "var(--bg2)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <p className="kicker rev" style={{ justifyContent: "center" }}>Newsletter</p>
          <h2 className="rev" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px", transitionDelay: "0.1s" }}>
            Conteúdo direto na sua caixa.
          </h2>
          <p className="rev" style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "52px", transitionDelay: "0.2s" }}>
            Sem spam. Sem enrolação. Só quando tiver algo que vale o seu tempo.
          </p>
          <form
            className="rev"
            style={{ display: "flex", gap: "8px", transitionDelay: "0.3s" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="seu@email.com" required style={{ flex: 1 }} />
            <button type="submit" className="btn btn-aurora" style={{ flexShrink: 0, padding: "14px 24px" }}>
              Quero receber
            </button>
          </form>
          <p className="rev" style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "14px", transitionDelay: "0.4s" }}>
            Seus dados ficam com você.
          </p>
        </div>
      </section>

      </div>
      <CtaFinal />
    </>
  );
}
