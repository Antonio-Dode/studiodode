import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import PortfolioCard from "@/components/ui/PortfolioCard";
import Marquee from "@/components/ui/Marquee";
import CtaFinal from "@/components/sections/CtaFinal";
import { projects } from "@/data/projects";

const clientBrands = [
  { src: "/assets/images/clientes/logos_clientes_website_acia.jpg",       alt: "ACIA" },
  { src: "/assets/images/clientes/logos_clientes_website_dfc.jpg",        alt: "DFC" },
  { src: "/assets/images/clientes/logos_clientes_website_joy.jpg",        alt: "Joy" },
  { src: "/assets/images/clientes/logos_clientes_website_papa_mosca.jpg", alt: "Papa Mosca" },
  { src: "/assets/images/clientes/logos_clientes_website_sala03.jpg",     alt: "Sala 03" },
  { src: "/assets/images/clientes/logos_clientes_website_trio.jpg",       alt: "Trio" },
  { src: "/assets/images/clientes/logos_clientes_website_unicenter.jpg",  alt: "Unicenter" },
  { src: "/assets/images/clientes/logos_clientes_website_wolf.jpg",       alt: "Wolf" },
];

const testimonials = [
  { text: "Placeholder — depoimento real a inserir.", name: "Nome do Cliente", role: "Cargo · Empresa" },
  { text: "Placeholder — depoimento real a inserir.", name: "Nome do Cliente", role: "Cargo · Empresa" },
  { text: "Placeholder — depoimento real a inserir.", name: "Nome do Cliente", role: "Cargo · Empresa" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "160px 0 120px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--line)",
          backgroundImage: "linear-gradient(to right, var(--bg) 55%, transparent 78%), url('/assets/images/ilustra_dode_hero.png')",
          backgroundSize: "100% 100%, auto 100%",
          backgroundPosition: "0 0, right center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div style={{ position: "absolute", top: "-200px", right: "-100px", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(114,0,204,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/ilustra_dode_hero.png"
          alt=""
          aria-hidden="true"
          className="hero-mobile-img"
        />

        <div className="container">
          <div className="hero-text" style={{ maxWidth: "min(calc(58vw - 80px), 680px)" }}>
            <div className="kicker" style={{ animation: "fade 0.7s ease both", animationDelay: "0.1s" }}>
              DODÉ Studio Criativo
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "28px", animation: "fade 0.8s ease both", animationDelay: "0.2s" }}>
              Resultado sem enrolação,{" "}
              <span className="serif-it" style={{ color: "var(--verde)" }}>direto com quem faz.</span>
            </h1>
            <p style={{ fontSize: "17px", color: "var(--muted)", maxWidth: "540px", lineHeight: 1.7, marginBottom: "52px", animation: "fade 0.8s ease both", animationDelay: "0.35s" }}>
              Sem agência no meio. Sem processo que atrasa. Criação de alto nível, entregue por quem assina embaixo.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", animation: "fade 0.8s ease both", animationDelay: "0.5s" }}>
              <Link href="/contato" className="btn btn-pri">Vamos conversar</Link>
              <Link href="/portfolio" className="btn btn-ghost">Ver portfólio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── APRESENTAÇÃO ── */}
      <section style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ maxWidth: "640px" }}>
            <p className="kicker rev">Quem está por trás</p>
            <h2 className="rev" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "24px", transitionDelay: "0.1s" }}>
              Um criativo que <span className="serif-it">age antes</span> de teorizar.
            </h2>
            <p className="rev" style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75, marginBottom: "52px", transitionDelay: "0.2s" }}>
              Sou o Dodé. Designer, diretor de arte e estrategista. Quase 20 anos nas melhores agências do interior de São Paulo — aprendendo, criando e entregando. Hoje faço isso diretamente para você.
            </p>
            <Link href="/quem-sou" className="rev" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 600, color: "var(--verde)", transitionDelay: "0.3s" }}>
              Conhecer minha história →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="section-light" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <p className="kicker rev">O que eu faço</p>
          <h2 className="rev" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "64px", transitionDelay: "0.1s" }}>
            Do <span className="serif-it">conceito</span> à entrega.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--card-gap)", marginBottom: "28px" }}>
            <ServiceCard color="roxo"    title="WEBsites"      description="Sites com propósito. Bonito que não converte é só despesa."  href="/o-que-eu-faco#websites"    />
            <ServiceCard color="amarelo" title="brandDESIGN"   description="Marca que comunica antes de abrir a boca."                   href="/o-que-eu-faco#branddesign" />
            <ServiceCard color="verde"   title="campanhasADS"  description="Verba com direção. Resultado com número."                    href="/o-que-eu-faco#campanhas"   />
            <ServiceCard color="coral"   title="FOTOvídeo"     description="Imagem ruim é prejuízo visível."                             href="/o-que-eu-faco#fotovideo"   />
          </div>
          {/* Guarda-chuva */}
          <div className="rev" style={{ background: "var(--aurora)", borderRadius: "var(--r-box)", padding: "56px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.02em", color: "#000", marginBottom: "12px" }}>
                E tudo mais que criação precisar ser.
              </h3>
              <p style={{ fontSize: "16px", color: "rgba(0,0,0,0.7)", maxWidth: "500px", lineHeight: 1.65 }}>
                Digital ou impresso. Animado ou estático. Pequeno ou grande. Se existe dentro de publicidade e marketing — eu faço.
              </p>
            </div>
            <Link href="/o-que-eu-faco" className="btn btn-dark" style={{ flexShrink: 0 }}>Ver todos os serviços</Link>
          </div>
        </div>
      </section>

      {/* ── PORTFÓLIO EM DESTAQUE ── */}
      <section className="section-light" style={{ padding: "140px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="kicker rev">Portfólio</p>
              <h2 className="rev" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.1, transitionDelay: "0.1s" }}>
                Trabalhos que <span className="serif-it">dispensam</span> explicação.
              </h2>
            </div>
            <Link href="/portfolio" className="btn btn-ghost rev" style={{ transitionDelay: "0.2s" }}>Ver portfólio completo</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--card-gap)" }}>
            {projects.slice(0, 4).map((project) => (
              <PortfolioCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section style={{ padding: "140px 0", background: "var(--bg2)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <p className="kicker rev">O que dizem</p>
          <h2 className="rev" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: "64px", transitionDelay: "0.1s" }}>
            Quem já trabalhou comigo, <span className="serif-it">conta.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--card-gap)" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="rev" style={{ background: "var(--bg3)", border: "1px solid var(--line)", borderRadius: "var(--r-box)", padding: "44px", transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: "24px", color: "var(--verde)", marginBottom: "20px" }}>"</div>
                <p style={{ fontSize: "16px", color: "#ddd", lineHeight: 1.75, marginBottom: "28px" }}>{t.text}</p>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 600 }}>{t.name}</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "5px" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "28px", fontSize: "12px", color: "var(--muted2)", textAlign: "center" }}>⚠️ Depoimentos reais a inserir</p>
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section className="section-light" style={{ padding: "80px 0", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
        <div className="container" style={{ marginBottom: "40px" }}>
          <p className="kicker">Marcas com quem já trabalhei</p>
        </div>
        <Marquee items={clientBrands} />
      </section>

      <CtaFinal />
    </>
  );
}
