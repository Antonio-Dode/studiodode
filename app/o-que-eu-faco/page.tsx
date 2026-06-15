import type { Metadata } from "next";
import Link from "next/link";
import CtaFinal from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "O Que Eu Faço — DODÉ Studio Criativo",
  description: "WEBsites, brandDESIGN, campanhasADS e FOTOvídeo. Criação com direção, do conceito à entrega.",
};

const services = [
  {
    id: "websites",
    num: "01",
    color: "var(--roxo)",
    colorClass: "roxo",
    title: "WEBsites",
    tagClass: "tp-roxo",
    headline: "Sites que vendem, não só existem.",
    text: "Site bonito que não converte é só uma despesa bem apresentada. Desenvolvo com foco em experiência, performance e resultado — do layout ao ar, com você acompanhando cada etapa.",
    deliverables: ["Landing pages", "Sites institucionais", "Portfólios digitais", "E-commerce", "UX/UI e prototipagem"],
    cta: "Quero um site",
  },
  {
    id: "branddesign",
    num: "02",
    color: "var(--amarelo)",
    colorClass: "amarelo",
    title: "brandDESIGN",
    tagClass: "tp-amarelo",
    headline: "Marca que comunica antes de abrir a boca.",
    text: "Sua marca é a primeira impressão que você nunca vai poder dar de novo. Construo identidades que transmitem credibilidade e personalidade — consistentes em qualquer superfície, em qualquer tamanho.",
    deliverables: ["Identidade visual completa", "Logotipo e variações", "Brand System e guia de marca", "Papelaria e aplicações", "Social media design"],
    cta: "Quero uma marca forte",
  },
  {
    id: "campanhas",
    num: "03",
    color: "var(--verde)",
    colorClass: "verde",
    title: "campanhasADS",
    tagClass: "tp-verde",
    headline: "Verba com direção. Resultado com número.",
    text: "Campanha sem criação forte é dinheiro que some no feed. Crio e gerencio campanhas que combinam estratégia de mídia com peças que param o scroll — para você ver retorno de verdade.",
    deliverables: ["Criação de peças para ADS", "Google Ads e Meta Ads", "Estratégia de mídia paga", "Relatórios e otimização", "Conteúdo para social media"],
    cta: "Quero campanhas que vendem",
  },
  {
    id: "fotovideo",
    num: "04",
    color: "var(--coral)",
    colorClass: "coral",
    title: "FOTOvídeo",
    tagClass: "tp-coral",
    headline: "Imagem ruim é prejuízo visível.",
    text: "Na era da atenção fragmentada, visual sem qualidade afasta antes de atrair. Produzo fotos e vídeos com direção de arte — não só registro, mas construção de uma narrativa que representa sua marca do jeito certo.",
    deliverables: ["Fotografia de produto e marca", "Vídeos institucionais", "Reels e conteúdo para social", "Direção de arte em set", "Edição e pós-produção"],
    cta: "Quero produção visual",
  },
];

const steps = [
  { num: "01", title: "Você me chama", sub: "Sem reunião de alinhamento com 8 pessoas." },
  { num: "02", title: "Alinhamos escopo e prazo", sub: "Sem surpresa no orçamento." },
  { num: "03", title: "Eu crio, você acompanha", sub: "Com você no processo." },
  { num: "04", title: "Você recebe e aprova", sub: "Sem enrolação no final." },
];

export default function OQueFaco() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "160px 0 80px", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <p className="kicker" style={{ animation: "fade 0.7s ease both" }}>O que eu faço</p>
          <h1 style={{ fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "20px", animation: "fade 0.8s ease both 0.15s", maxWidth: "700px" }}>
            Criação com direção. Do <span className="serif-it" style={{ color: "var(--amarelo)" }}>conceito</span> à entrega.
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.65, marginBottom: "24px", animation: "fade 0.8s ease both 0.3s" }}>
            Digital ou impresso. Animado ou estático. Pequeno ou grande. Se existe dentro de publicidade e marketing — eu faço.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", animation: "fade 0.8s ease both 0.45s" }}>
            {["Design", "Branding", "Web", "Campanhas", "Foto", "Vídeo"].map((tag) => (
              <span key={tag} className="tag-pill" style={{ background: "var(--bg3)", border: "1px solid var(--line)", color: "var(--muted)", fontSize: "12px", padding: "6px 14px", borderRadius: "var(--r-btn)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS ÂNCORA */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          style={{ padding: "140px 0", borderBottom: "1px solid var(--line)", background: i % 2 === 1 ? "var(--bg2)" : "var(--bg)" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--col-gap)",
                alignItems: "center",
                direction: i % 2 === 1 ? "rtl" : "ltr",
              }}
              className="service-grid"
            >
              {/* Image placeholder */}
              <div className={i % 2 === 1 ? "rev-r" : "rev-l"} style={{ direction: "ltr" }}>
                <div
                  style={{
                    background: "var(--bg3)",
                    border: `1px solid ${svc.color}40`,
                    borderRadius: "var(--r-box)",
                    aspectRatio: "4/3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at center, ${svc.color}20 0%, transparent 70%)` }} />
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "-0.04em", color: svc.color, opacity: 0.3 }}>{svc.num}</div>
                    <div style={{ fontSize: "13px", color: "var(--muted2)", marginTop: "8px" }}>⚠️ Imagem do serviço</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "rev-l" : "rev-r"} style={{ direction: "ltr" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>{svc.num}</span>
                  <span className={`tag-pill ${svc.tagClass}`}>{svc.title}</span>
                </div>
                <h2 style={{ fontSize: "clamp(20px, 2.8vw, 32px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "18px" }}>
                  {svc.headline}
                </h2>
                <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, marginBottom: "32px" }}>
                  {svc.text}
                </p>
                <div style={{ marginBottom: "36px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "14px" }}>Entregáveis</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {svc.deliverables.map((d) => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#ddd" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: svc.color, flexShrink: 0, display: "block" }} />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/contato" className="btn btn-ghost" style={{ borderColor: `${svc.color}60`, color: svc.color }}>
                  {svc.cta} →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* GUARDA-CHUVA */}
      <section style={{ padding: "140px 0", background: "var(--aurora)", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p className="kicker rev" style={{ justifyContent: "center", color: "rgba(0,0,0,0.5)" }}>
            <span style={{ background: "rgba(0,0,0,0.1)", width: "30px", height: "1px" }} />
            Além dos 4
          </p>
          <h2 className="rev" style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#000", marginBottom: "18px", transitionDelay: "0.1s" }}>
            E tudo mais que o seu negócio precisar.
          </h2>
          <p className="rev" style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", lineHeight: 1.7, marginBottom: "40px", transitionDelay: "0.2s" }}>
            Folder ou outdoor. Catálogo ou apresentação. Embalagem ou sinalização. Animação ou motion graphics. PDV ou campanha sazonal. Se existe dentro de criação para publicidade e marketing — eu faço. E faço bem.
          </p>
          <Link href="/contato" className="btn btn-dark rev" style={{ transitionDelay: "0.3s" }}>
            Tem algo específico? Me conta →
          </Link>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <p className="kicker rev">Como trabalhamos</p>
          <h2 className="rev" style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: "64px", transitionDelay: "0.1s" }}>
            <span className="serif-it">Simples</span> assim.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", position: "relative" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="rev"
                style={{
                  padding: "44px",
                  borderLeft: i > 0 ? "1px solid var(--line)" : "none",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--verde)", marginBottom: "16px", fontWeight: 600 }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        cta2Label="Ver o portfólio"
        cta2Href="/portfolio"
      />
    </>
  );
}
