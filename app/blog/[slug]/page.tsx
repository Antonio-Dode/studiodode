import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/posts";
import BlogCard from "@/components/ui/BlogCard";
import CtaFinal from "@/components/sections/CtaFinal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — DODÉ Studio Criativo`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "140px 0 60px", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <Link href="/blog" style={{ fontSize: "13px", color: "var(--muted)" }} className="hover-muted">
              ← Blog
            </Link>
          </div>
          <h1
            style={{
              fontSize: "clamp(22px, 3.5vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "24px",
              animation: "fade 0.8s ease both",
            }}
          >
            {post.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src="/assets/brand/icon_dode.svg" alt="Dodé" style={{ width: "36px", height: "36px" }} />
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600 }}>Dodé</p>
                <p style={{ fontSize: "11px", color: "var(--muted)" }}>DODÉ Studio Criativo</p>
              </div>
            </div>
            <span style={{ color: "var(--line)" }}>·</span>
            <p style={{ fontSize: "13px", color: "var(--muted2)" }}>{post.date}</p>
            <span style={{ color: "var(--line)" }}>·</span>
            <p style={{ fontSize: "13px", color: "var(--muted2)" }}>{post.readTime}</p>
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ aspectRatio: "21/9", background: "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontSize: "13px", color: "var(--muted2)" }}>⚠️ Imagem de capa do post</p>
        </div>
      </section>

      {/* CONTEÚDO + SIDEBAR */}
      <section style={{ padding: "120px 0", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "var(--col-gap)", alignItems: "start" }} className="post-layout">
            {/* Content */}
            <article>
              <p style={{ fontSize: "17px", color: "#fff", lineHeight: 1.65, marginBottom: "24px", fontWeight: 500 }}>
                {post.excerpt}
              </p>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.8 }}>
                {post.content.replace(/^#.*\n/, "")}
              </p>
              <p style={{ color: "var(--muted2)", fontStyle: "italic", marginTop: "40px", fontSize: "15px" }}>
                ⚠️ Conteúdo completo a inserir em <code>/data/posts.ts</code>.
              </p>
            </article>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "100px" }}>
              <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "var(--r-box)", padding: "24px", marginBottom: "20px" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "16px" }}>Compartilhar</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://studiodode.com.br/blog/${slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + " https://studiodode.com.br/blog/" + slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn"
                  >
                    WhatsApp →
                  </a>
                </div>
              </div>

              <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "var(--r-box)", padding: "24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, marginBottom: "10px" }}>Precisa de criação?</p>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Me chama no WhatsApp. Sem enrolação.
                </p>
                <a
                  href="https://wa.me/5511974531399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-aurora"
                  style={{ width: "100%", justifyContent: "center", fontSize: "13px" }}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SOBRE O AUTOR */}
      <section style={{ padding: "100px 0", background: "var(--bg2)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <img src="/assets/brand/icon_dode.svg" alt="Dodé" style={{ width: "72px", height: "72px", flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "6px" }}>Sobre o autor</p>
              <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "10px" }}>Antonio José Alves — o Dodé</h3>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "16px" }}>
                Designer, diretor de arte e estrategista com quase 20 anos de mercado. Fundador do DODÉ Studio Criativo.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { label: "Instagram", href: "https://instagram.com/studiodode" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/antoniojosealves" },
                  { label: "Behance", href: "https://behance.net/antoniojosealves" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "var(--muted2)", letterSpacing: "0.08em" }} className="hover-muted2">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSTS RELACIONADOS */}
      {related.length > 0 && (
        <section style={{ padding: "100px 0", borderBottom: "1px solid var(--line)" }}>
          <div className="container">
            <p className="kicker rev">Continue lendo</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--card-gap)", marginTop: "52px" }}>
              {related.map((p) => (
                <BlogCard key={p.slug} {...p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaFinal />
    </>
  );
}
