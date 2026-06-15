import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaFinal from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "Quem Sou — DODÉ Studio Criativo",
  description: "Antonio José Alves — Designer, diretor de arte e estrategista com quase 20 anos nas melhores agências do interior de São Paulo.",
};

const timeline = [
  {
    year: "2006",
    title: "O começo pelo começo.",
    text: "Produção gráfica, diagramação e identidade visual. Aprendi que o melhor jeito de aprender é fazendo — e não parei mais.",
  },
  {
    year: "2010–2018",
    title: "Digital como segundo idioma.",
    text: "Web design, UX/UI e criação para performance. São Paulo como escola acelerada.",
  },
  {
    year: "2018–2024",
    title: "Liderança e visão de negócio.",
    text: "Head de Criação nas agências mais relevantes do interior de SP. Gestão de times, campanhas e marcas que importam.",
  },
  {
    year: "2024 →",
    title: "DODÉ Studio Criativo.",
    text: "Direto ao ponto. Direto com você.",
  },
];

const formacao = [
  { color: "roxo", school: "Panamericana", course: "Criação e Arte para Web", city: "São Paulo", year: "2016" },
  { color: "amarelo", school: "CEUNSP", course: "Publicidade e Propaganda", city: "Salto", year: "2012" },
  { color: "verde", school: "Cefet/PR", course: "Produção Gráfica", city: "Curitiba", year: "2003" },
];

const competencias = {
  criacao: ["Direção de Arte", "Identidade Visual e Branding", "Design Gráfico Digital e Impresso", "Fotografia e Vídeo", "Animação e Motion"],
  digital: ["UX/UI e Produto Digital", "Campanhas de Performance", "Gestão de Projetos Criativos", "Web Design e Desenvolvimento", "Adobe Creative Suite · Figma"],
};

const chips = ["Diretor de Arte", "Branding", "UX/UI", "Campanhas ADS", "Web", "Foto/Vídeo"];

export default function QuemSou() {
  return (
    <>
      <div className="page-light">
      {/* HERO */}
      <section
        style={{
          padding: "160px 0 80px",
          borderBottom: "1px solid var(--line)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-100px", left: "-200px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(50,255,171,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container">
          <p className="kicker" style={{ animation: "fade 0.7s ease both" }}>Quem sou</p>
          <h1
            style={{
              fontSize: "clamp(30px, 4.5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "20px",
              animation: "fade 0.8s ease both 0.15s",
              maxWidth: "700px",
            }}
          >
            Quase duas décadas formando o olhar.{" "}
            <span className="serif-it" style={{ color: "var(--verde)" }}>Agora direto com você.</span>
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "var(--muted)",
              maxWidth: "520px",
              lineHeight: 1.65,
              animation: "fade 0.8s ease both 0.3s",
            }}
          >
            Sem intermediários. Sem overhead de agência. Só criação com direção e entrega com responsabilidade.
          </p>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--col-gap)",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Foto */}
            <div className="rev-l">
              <div
                style={{
                  borderRadius: "var(--r-box)",
                  aspectRatio: "3/4",
                  position: "relative",
                  overflow: "hidden",
                  maxWidth: "400px",
                }}
              >
                <Image
                  src="/assets/images/dode_perfil.webp"
                  alt="Dodé — Antonio José Alves"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>

            {/* Texto */}
            <div className="rev-r">
              <p className="kicker">A história</p>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                }}
              >
                Sou o <span className="serif-it" style={{ color: "var(--verde)" }}>Dodé.</span>
              </h2>
              <div style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "16px" }}>
                  Antonio José Alves. Designer, diretor de arte e estrategista.
                </p>
                <p style={{ marginBottom: "16px" }}>
                  Passei quase 20 anos dentro das agências mais relevantes do interior de São Paulo. Aprendi, liderei e entreguei.
                </p>
                <p style={{ marginBottom: "16px" }}>
                  Em algum momento ficou claro: o cliente pagava pelo tamanho da estrutura, não pelo resultado.
                </p>
                <p>
                  O DODÉ nasceu para mudar isso. Criação de alto nível, acesso direto a quem faz, sem o peso de quem não faz.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "32px" }}>
                {chips.map((chip) => (
                  <span key={chip} className="tag-pill tp-verde">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section style={{ padding: "140px 0", background: "var(--bg2)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <p className="kicker rev">Trajetória</p>
          <h2 className="rev" style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "64px", transitionDelay: "0.1s" }}>
            Quase 20 anos de <span className="serif-it">mercado real.</span>
          </h2>
          <div style={{ maxWidth: "600px" }}>
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item rev" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="timeline-dot" />
                <div>
                  <div style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--verde)", marginBottom: "6px", fontWeight: 600 }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <p className="kicker rev">Formação</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--card-gap)", marginTop: "52px" }}>
            {formacao.map((f, i) => (
              <div
                key={i}
                className={`svc-card sc-${f.color} rev`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "16px" }}>
                  {f.city} · {f.year}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "8px" }}>
                  {f.school}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.5 }}>
                  {f.course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETÊNCIAS */}
      <section style={{ padding: "140px 0", background: "var(--bg2)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <p className="kicker rev">O que domino</p>
          <h2 className="rev" style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "64px", maxWidth: "500px", transitionDelay: "0.1s" }}>
            <span className="serif-it">Estética</span> e estratégia. Os dois lados do mesmo trabalho.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--col-gap)" }} className="skills-grid">
            <div className="rev">
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "20px" }}>Criação</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {competencias.criacao.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--aurora)", flexShrink: 0, display: "block" }} />
                    <span style={{ fontSize: "15px", color: "var(--muted)" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rev" style={{ transitionDelay: "0.1s" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "20px" }}>Estratégia e Digital</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {competencias.digital.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--sunset)", flexShrink: 0, display: "block" }} />
                    <span style={{ fontSize: "15px", color: "var(--muted)" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        style={{
          padding: "160px 0",
          background: "var(--aurora)",
          borderBottom: "1px solid var(--line)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <blockquote>
            <p
              className="rev"
              style={{
                fontSize: "clamp(16px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#000",
                marginBottom: "32px",
              }}
            >
              "Não acredito em processo que serve de desculpa para atraso.<br />
              Não acredito em reunião que poderia ser uma mensagem.<br />
              Acredito em trabalho bem feito, entregue no prazo, por quem assina embaixo."
            </p>
            <footer className="rev" style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(0,0,0,0.6)", transitionDelay: "0.15s" }}>
              — Dodé
            </footer>
          </blockquote>
        </div>
      </section>

      </div>
      <CtaFinal
        headline="Vamos trabalhar juntos?"
        subhead="Sem intermediários. Sem enrolação."
        cta1Label="Falar no WhatsApp"
        cta1Href="https://wa.me/5511974531399"
        cta2Label="Ver o que eu faço"
        cta2Href="/o-que-eu-faco"
      />
    </>
  );
}
