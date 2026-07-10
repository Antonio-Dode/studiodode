"use client";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/quem-sou", label: "Quem Sou" },
  { href: "/o-que-eu-faco", label: "O Que Eu Faço" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/studiodode" },
  { label: "LinkedIn", href: "https://linkedin.com/in/antoniojosealves" },
  { label: "Behance", href: "https://behance.net/antoniojosealves" },
  { label: "WhatsApp", href: "https://wa.me/5511974531399" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--preto)",
        borderTop: "1px solid var(--line)",
        padding: "60px 0 32px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "16px" }}>
              <Logo width={150} />
            </Link>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "220px" }}>
              Resultado sem enrolação. Criação de alto nível, direto com quem faz.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--muted2)",
                marginBottom: "20px",
              }}
            >
              Navegação
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: "14px", color: "var(--muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--muted2)",
                marginBottom: "20px",
              }}
            >
              Contato
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://wa.me/5511974531399"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "14px", color: "var(--verde)", transition: "opacity 0.2s" }}
              >
                (11) 97453-1399
              </a>
              <a
                href="mailto:contato@studiodode.com.br"
                style={{ fontSize: "14px", color: "var(--muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                contato@studiodode.com.br
              </a>
              <span style={{ fontSize: "13px", color: "var(--muted2)" }}>Itu, São Paulo</span>
            </div>
            <div style={{ display: "flex", gap: "14px", marginTop: "24px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted2)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted2)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--muted2)" }}>
            © 2025 DODÉ Studio Criativo — Antonio José Alves · CNPJ 32.638.568/0001-29
          </p>
          <Link
            href="/politica-de-privacidade"
            style={{ fontSize: "12px", color: "var(--muted2)", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted2)")}
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
