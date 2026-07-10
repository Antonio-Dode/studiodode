"use client";
import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Como funciona o orçamento?",
    a: "Você me conta o projeto pelo WhatsApp ou formulário. Em até 24h úteis envio uma proposta clara, sem surpresas no meio do caminho.",
  },
  {
    q: "Você atende fora de Itu?",
    a: "Sim. Atendo remotamente em todo o Brasil. A maioria dos projetos acontece 100% online — sem perda de qualidade ou comunicação.",
  },
  {
    q: "Qual o prazo médio de entrega?",
    a: "Depende do projeto. Mas sempre defino o prazo antes de começar — e cumpro o que combino. Sem &ldquo;está quase pronto&rdquo; eterno.",
  },
  {
    q: "Você faz contrato?",
    a: "Sempre. Todo projeto tem proposta e contrato formal. Segurança para os dois lados.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim. Trabalhamos com entrada e parcelamento conforme o escopo. Conversamos caso a caso.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        <span className={`faq-icon${open ? " open" : ""}`}>+</span>
      </button>
      <div className={`faq-answer${open ? " open" : ""}`}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "160px 0 80px", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <p className="kicker" style={{ animation: "fade 0.7s ease both" }}>Contato</p>
          <h1 style={{ fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "20px", animation: "fade 0.8s ease both 0.15s", maxWidth: "700px" }}>
            Vamos fazer algo <span className="serif-it" style={{ color: "var(--verde)" }}>incrível</span> juntos?
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "460px", lineHeight: 1.65, marginBottom: "20px", animation: "fade 0.8s ease both 0.3s" }}>
            Me conta o que você precisa. Sem burocracia, sem enrolação.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", animation: "fade 0.8s ease both 0.45s" }}>
            {[
              { label: "Itu, SP", icon: "📍" },
              { label: "(11) 97453-1399", icon: "📱" },
              { label: "studiodode.com.br", icon: "🌐" },
            ].map((item) => (
              <span key={item.label} style={{ fontSize: "14px", color: "var(--muted2)" }}>{item.icon} {item.label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CANAIS + FORMULÁRIO */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--col-gap)", alignItems: "start" }} className="contact-grid">
            {/* Canais */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
                {/* WhatsApp — destaque */}
                <a
                  href="https://wa.me/5511974531399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-card sc-verde"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--verde)" }} />
                    <span style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--verde)", fontWeight: 600 }}>WhatsApp · Canal principal</span>
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>(11) 97453-1399</h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)" }}>Resposta rápida. Canal principal de comunicação.</p>
                </a>

                {/* E-mail */}
                <a href="mailto:contato@studiodode.com.br" className="svc-card sc-roxo" style={{ display: "block", textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--roxo)" }} />
                    <span style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#A156DE", fontWeight: 600 }}>E-mail</span>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>contato@studiodode.com.br</h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)" }}>Para projetos mais complexos ou detalhados.</p>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/studiodode" target="_blank" rel="noopener noreferrer" className="svc-card sc-coral" style={{ display: "block", textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--coral)" }} />
                    <span style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#FF6F8E", fontWeight: 600 }}>Instagram</span>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>@studiodode</h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)" }}>Acompanhe o processo e os bastidores.</p>
                </a>
              </div>

              {/* Info */}
              <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8 }}>
                <p>📍 Itu, São Paulo — atendo presencialmente e remotamente em todo Brasil</p>
                <p style={{ marginTop: "8px" }}>🕐 Segunda a sexta, 09h às 18h</p>
                <p style={{ marginTop: "8px", fontSize: "13px", color: "var(--verde)" }}>Respondo em até 24 horas úteis. Geralmente muito antes disso.</p>
              </div>
            </div>

            {/* Formulário */}
            <div>
              {submitted ? (
                <div style={{ background: "var(--bg3)", border: "1px solid var(--verde)40", borderRadius: "var(--r-box)", padding: "48px", textAlign: "center" }}>
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>✓</div>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>Mensagem enviada!</h2>
                  <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.6 }}>
                    Vou responder em até 24 horas úteis. Geralmente muito antes disso.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", letterSpacing: "0.06em" }}>Nome completo *</label>
                      <input type="text" placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", letterSpacing: "0.06em" }}>E-mail *</label>
                      <input type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", letterSpacing: "0.06em" }}>WhatsApp</label>
                    <input type="tel" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", letterSpacing: "0.06em" }}>Qual serviço?</label>
                    <select>
                      <option value="">Selecione...</option>
                      <option value="websites">WEBsites</option>
                      <option value="branddesign">brandDESIGN</option>
                      <option value="campanhas">campanhasADS</option>
                      <option value="fotovideo">FOTOvídeo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", color: "var(--muted)", marginBottom: "6px", letterSpacing: "0.06em" }}>Conte mais sobre o projeto *</label>
                    <textarea placeholder="Me conta o que você precisa..." rows={5} required style={{ resize: "vertical" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <input type="checkbox" required style={{ width: "auto", marginTop: "3px", flexShrink: 0 }} id="privacy" />
                    <label htmlFor="privacy" style={{ fontSize: "13px", color: "var(--muted)", cursor: "pointer", lineHeight: 1.55 }}>
                      Li e concordo com a{" "}
                      <Link href="/politica-de-privacidade" style={{ color: "var(--verde)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                        Política de Privacidade
                      </Link>
                      {" "}e autorizo o uso dos meus dados para retorno de contato, conforme a LGPD (Lei 13.709/2018). *
                    </label>
                  </div>
                  <button type="submit" className="btn btn-aurora" style={{ width: "100%", justifyContent: "center", fontSize: "15px", padding: "16px" }}>
                    Enviar mensagem →
                  </button>
                  <p style={{ fontSize: "13px", color: "var(--muted2)", textAlign: "center" }}>
                    Ou me chama direto no{" "}
                    <a href="https://wa.me/5511974531399" target="_blank" rel="noopener noreferrer" style={{ color: "var(--verde)" }}>
                      WhatsApp
                    </a>
                    . É mais rápido.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "120px 0", background: "var(--bg2)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <p className="kicker rev">Dúvidas frequentes</p>
          <h2 className="rev" style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: "48px", transitionDelay: "0.1s" }}>
            Antes de perguntar,{" "}
            <span className="serif-it">talvez já tenha a resposta.</span>
          </h2>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "140px 0", background: "var(--sunset)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="rev" style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#000", marginBottom: "16px" }}>
            Pare de pagar caro por pouco.
          </h2>
          <p className="rev" style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", maxWidth: "520px", margin: "0 auto 52px", lineHeight: 1.6, transitionDelay: "0.1s" }}>
            Converse comigo. Sem formulário chato, sem reunião de alinhamento. Comigo você tem o que precisa ser feito.
          </p>
          <div className="rev" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", transitionDelay: "0.2s" }}>
            <a href="https://wa.me/5511974531399" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
