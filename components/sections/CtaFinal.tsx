import Link from "next/link";

interface CtaFinalProps {
  headline?: string;
  subhead?: string;
  cta1Label?: string;
  cta1Href?: string;
  cta2Label?: string;
  cta2Href?: string;
}

export default function CtaFinal({
  headline = "Pare de pagar caro por pouco.",
  subhead = "Converse comigo. Sem formulário chato, sem reunião de alinhamento. Comigo você tem o que precisa ser feito.",
  cta1Label = "Falar no WhatsApp",
  cta1Href = "https://wa.me/5511974531399",
  cta2Label = "Ver o portfólio",
  cta2Href = "/portfolio",
}: CtaFinalProps) {
  return (
    <section
      style={{
        background: "var(--sunset)",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2
          className="rev"
          style={{
            fontSize: "clamp(26px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#000",
            marginBottom: "16px",
            lineHeight: 1.05,
          }}
        >
          {headline}
        </h2>
        <p
          className="rev"
          style={{
            fontSize: "15px",
            color: "rgba(0,0,0,0.7)",
            maxWidth: "520px",
            margin: "0 auto 52px",
            lineHeight: 1.6,
            transitionDelay: "0.1s",
          }}
        >
          {subhead}
        </p>
        <div
          className="rev"
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
            transitionDelay: "0.2s",
          }}
        >
          <a
            href={cta1Href}
            target={cta1Href.startsWith("http") ? "_blank" : undefined}
            rel={cta1Href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="btn btn-dark"
          >
            {cta1Label}
          </a>
          <Link href={cta2Href} className="btn" style={{ background: "rgba(0,0,0,0.15)", color: "#000", border: "1px solid rgba(0,0,0,0.2)" }}>
            {cta2Label}
          </Link>
        </div>
      </div>
    </section>
  );
}
