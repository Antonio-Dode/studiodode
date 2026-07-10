import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — DODÉ Studio Criativo",
  description: "Saiba como o DODÉ Studio Criativo coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
  robots: { index: true, follow: true },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "52px" }}>
    <h2 style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px", color: "#fff" }}>
      {title}
    </h2>
    <div style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.85 }}>
      {children}
    </div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: "14px" }}>{children}</p>
);

export default function PoliticaDePrivacidade() {
  return (
    <>
      <section style={{ padding: "140px 0 60px", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <Link href="/" style={{ fontSize: "13px", color: "var(--muted)", display: "inline-block", marginBottom: "32px" }} className="hover-muted">
            ← Voltar ao início
          </Link>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "16px" }}>
            Última atualização: Julho de 2026
          </p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
            Política de Privacidade
          </h1>
          <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7 }}>
            Esta Política de Privacidade descreve como o <strong style={{ color: "#fff" }}>DODÉ Studio Criativo</strong> coleta, utiliza, armazena e protege seus dados pessoais, em conformidade com a <strong style={{ color: "#fff" }}>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)</strong>.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0 120px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>

          <Section title="1. Identificação do Controlador">
            <P>O controlador responsável pelo tratamento dos seus dados pessoais é:</P>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "var(--r-box)", padding: "24px 28px", marginBottom: "14px" }}>
              <p style={{ marginBottom: "6px" }}><strong style={{ color: "#fff" }}>DODÉ Studio Criativo</strong></p>
              <p style={{ marginBottom: "6px" }}>CNPJ: 32.638.568/0001-29</p>
              <p style={{ marginBottom: "6px" }}>Responsável: Antonio José Alves</p>
              <p style={{ marginBottom: "6px" }}>Cidade: Itu, São Paulo — Brasil</p>
              <p style={{ marginBottom: "0" }}>E-mail: <a href="mailto:privacidade@studiodode.com.br" style={{ color: "var(--verde)" }}>privacidade@studiodode.com.br</a></p>
            </div>
          </Section>

          <Section title="2. Dados pessoais que coletamos">
            <P>Coletamos os seguintes tipos de dados, conforme a interação que você realiza em nosso site:</P>
            <p style={{ marginBottom: "8px" }}><strong style={{ color: "#fff" }}>Via formulário de contato:</strong></p>
            <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
              {["Nome completo", "Endereço de e-mail", "Número de WhatsApp/telefone (opcional)", "Descrição do projeto ou mensagem"].map(item => (
                <li key={item} style={{ marginBottom: "6px" }}>{item}</li>
              ))}
            </ul>
            <p style={{ marginBottom: "8px" }}><strong style={{ color: "#fff" }}>Via cookies e tecnologias de rastreamento (apenas com seu consentimento):</strong></p>
            <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
              {["Dados de navegação (páginas visitadas, tempo de sessão)", "Informações do dispositivo e navegador", "Endereço IP (anonimizado pelo Google Analytics)"].map(item => (
                <li key={item} style={{ marginBottom: "6px" }}>{item}</li>
              ))}
            </ul>
            <P>Não coletamos dados sensíveis (saúde, origem racial, opiniões políticas, dados biométricos ou similares).</P>
          </Section>

          <Section title="3. Finalidade e base legal do tratamento">
            <P>Tratamos seus dados pessoais com as seguintes finalidades e bases legais previstas na LGPD:</P>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "14px" }}>
              {[
                { fin: "Responder ao seu contato e elaborar propostas comerciais", base: "Consentimento (Art. 7º, I) / Legítimo interesse (Art. 7º, IX)" },
                { fin: "Análise de tráfego e desempenho do site (Google Analytics via GTM)", base: "Consentimento (Art. 7º, I)" },
                { fin: "Cumprimento de obrigações fiscais e contratuais", base: "Cumprimento de obrigação legal (Art. 7º, II)" },
              ].map(({ fin, base }) => (
                <div key={fin} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "8px", padding: "16px 20px" }}>
                  <p style={{ marginBottom: "4px", color: "#fff", fontWeight: 500 }}>{fin}</p>
                  <p style={{ fontSize: "13px", color: "var(--muted2)", marginBottom: 0 }}>Base legal: {base}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. Cookies e rastreamento">
            <P>Nosso site utiliza o <strong style={{ color: "#fff" }}>Google Tag Manager (GTM)</strong> para gerenciar tags de análise. Esse recurso só é ativado após o seu consentimento expresso, por meio do banner exibido na primeira visita.</P>
            <P>Se você recusar os cookies, nenhuma tag de rastreamento será carregada e seus dados de navegação não serão coletados. O site continuará funcionando normalmente.</P>
            <P>Você pode alterar sua preferência a qualquer momento limpando os dados do navegador (localStorage) ou entrando em contato conosco.</P>
          </Section>

          <Section title="5. Compartilhamento de dados">
            <P>Seus dados poderão ser compartilhados exclusivamente com:</P>
            <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
              <li style={{ marginBottom: "8px" }}><strong style={{ color: "#fff" }}>Google LLC</strong> — para análise de tráfego via Google Analytics/GTM, com dados de navegação anonimizados. Sujeito à Política de Privacidade do Google.</li>
              <li style={{ marginBottom: "8px" }}><strong style={{ color: "#fff" }}>Plataformas de hospedagem</strong> (Vercel Inc.) — para o funcionamento técnico do site.</li>
            </ul>
            <P>Não vendemos, alugamos ou cedemos seus dados pessoais a terceiros para fins de marketing ou publicidade.</P>
          </Section>

          <Section title="6. Armazenamento e prazo de retenção">
            <P>Os dados coletados via formulário de contato são armazenados de forma segura e retidos pelo tempo necessário para atender à finalidade de contato comercial ou até que você solicite a exclusão.</P>
            <P>Dados de navegação anonimizados retidos pelo Google Analytics seguem a política de retenção configurada (padrão: 14 meses).</P>
            <P>Após o encerramento da relação comercial, os dados são excluídos em até <strong style={{ color: "#fff" }}>2 (dois) anos</strong>, salvo obrigação legal de guarda por prazo superior.</P>
          </Section>

          <Section title="7. Seus direitos como titular">
            <P>Nos termos da LGPD (Art. 18), você tem direito a:</P>
            <ul style={{ paddingLeft: "20px", marginBottom: "14px" }}>
              {[
                "Confirmar a existência de tratamento dos seus dados",
                "Acessar os dados que temos sobre você",
                "Corrigir dados incompletos, inexatos ou desatualizados",
                "Solicitar a anonimização, bloqueio ou eliminação dos seus dados",
                "Solicitar a portabilidade dos seus dados a outro fornecedor",
                "Revogar o consentimento a qualquer momento",
                "Opor-se ao tratamento baseado em legítimo interesse",
                "Solicitar informações sobre compartilhamento com terceiros",
              ].map(right => (
                <li key={right} style={{ marginBottom: "6px" }}>{right}</li>
              ))}
            </ul>
            <P>Para exercer qualquer um desses direitos, entre em contato pelo e-mail <a href="mailto:privacidade@studiodode.com.br" style={{ color: "var(--verde)" }}>privacidade@studiodode.com.br</a>. Responderemos em até <strong style={{ color: "#fff" }}>15 dias úteis</strong>.</P>
          </Section>

          <Section title="8. Segurança dos dados">
            <P>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo transmissão segura via HTTPS e restrição de acesso às informações.</P>
          </Section>

          <Section title="9. Menores de idade">
            <P>Nosso site não é direcionado a menores de 18 anos e não coletamos intencionalmente dados de crianças ou adolescentes. Se identificarmos dados de menores coletados sem o devido consentimento dos responsáveis, os excluiremos imediatamente.</P>
          </Section>

          <Section title="10. Alterações nesta política">
            <P>Esta política pode ser atualizada periodicamente. Em caso de alterações relevantes, publicaremos a nova versão nesta página com a data de atualização. Recomendamos que você a consulte regularmente.</P>
          </Section>

          <Section title="11. Contato e Encarregado (DPO)">
            <P>Para dúvidas, solicitações ou reclamações relacionadas à privacidade e proteção de dados, entre em contato:</P>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "var(--r-box)", padding: "24px 28px" }}>
              <p style={{ marginBottom: "6px" }}><strong style={{ color: "#fff" }}>DODÉ Studio Criativo — Encarregado de Proteção de Dados</strong></p>
              <p style={{ marginBottom: "6px" }}>Antonio José Alves</p>
              <p style={{ marginBottom: "0" }}>E-mail: <a href="mailto:privacidade@studiodode.com.br" style={{ color: "var(--verde)" }}>privacidade@studiodode.com.br</a></p>
            </div>
            <p style={{ marginTop: "16px", fontSize: "15px", color: "var(--muted)", lineHeight: 1.85 }}>
              Você também pode registrar reclamações perante a <strong style={{ color: "#fff" }}>Autoridade Nacional de Proteção de Dados (ANPD)</strong> em <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" style={{ color: "var(--verde)" }}>www.gov.br/anpd</a>.
            </p>
          </Section>

          <div style={{ borderTop: "1px solid var(--line)", paddingTop: "32px", fontSize: "13px", color: "var(--muted2)" }}>
            <p>Esta política está em vigor desde <strong style={{ color: "var(--muted)" }}>Julho de 2026</strong>.</p>
            <p style={{ marginTop: "8px" }}>
              <Link href="/contato" style={{ color: "var(--verde)" }}>← Voltar ao formulário de contato</Link>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
