export type PostCategory = "criacao" | "branding" | "marketing" | "mercado" | "processo";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  coverImage: string;
  date: string;
  readTime: string;
  content: string;
  featured: boolean;
}

// Posts reais serão inseridos aqui
export const posts: Post[] = [
  {
    slug: "por-que-sua-marca-nao-converte",
    title: "Por que sua marca não converte — e o que fazer com isso",
    excerpt: "Você tem logo, tem cores, tem cartão de visita. Mas quando o cliente chega, algo não fecha. Aqui está o que geralmente está errado.",
    category: "branding",
    coverImage: "/assets/images/placeholder-blog.jpg",
    date: "06 Jan 2025",
    readTime: "5 min de leitura",
    content: "# Por que sua marca não converte\n\nConteúdo real a inserir...",
    featured: true,
  },
  {
    slug: "quanto-custa-um-site-ruim",
    title: "Quanto custa um site ruim para o seu negócio",
    excerpt: "Não é só estética. Um site lento, confuso ou sem foco em conversão drena verba silenciosamente — e a maioria das empresas não percebe.",
    category: "criacao",
    coverImage: "/assets/images/placeholder-blog.jpg",
    date: "20 Jan 2025",
    readTime: "4 min de leitura",
    content: "# Quanto custa um site ruim\n\nConteúdo real a inserir...",
    featured: false,
  },
  {
    slug: "agencias-overhead-que-voce-paga",
    title: "O overhead de agência que você está pagando sem saber",
    excerpt: "Gerente de conta, reunião de kick-off, relatório de processo. Quem paga por isso? Você. E nada disso entrega resultado.",
    category: "mercado",
    coverImage: "/assets/images/placeholder-blog.jpg",
    date: "10 Fev 2025",
    readTime: "6 min de leitura",
    content: "# O overhead de agência\n\nConteúdo real a inserir...",
    featured: false,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
