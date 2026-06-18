export type ProjectCategory = "branddesign" | "websites" | "campanhas" | "fotovideo";

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  client: string;
  year: string;
  category: ProjectCategory;
  services: string[];
  externalUrl?: string;
  description?: string[];
  heroImage: string;
  gallery: string[];
  video?: { youtubeId?: string; thumbnail: string };
  challenge: { headline: string; text: string };
  solution: { headline: string; text: string; image?: string };
  results: { metric: string; value: string }[];
  testimonial?: { text: string; name: string; role: string; photo: string };
}

export const projects: Project[] = [
  {
    slug: "vila-marau-ii",
    title: "Vila Maraú II",
    subtitle: "Complexo residencial e turístico na costa do dendê, Bahia.",
    client: "Vila Maraú II",
    year: "2024",
    category: "branddesign",
    services: ["Brand Design", "Identidade Visual", "Construção de Marca"],
    description: [
      "Maraú não é um lugar que se explica. É um lugar que se sente.",
      "O desafio era transformar essa sensação em marca. Criar uma identidade que carregasse luxo sem peso, natureza sem rusticidade, Bahia sem clichê.",
      "A solução veio do próprio lugar. A brisa que move as palmeiras e desenha sombras no chão virou ícone. O verde profundo da mata costeira e o dourado da areia iluminada viraram paleta. A tipografia encontrou o equilíbrio entre o clássico e o contemporâneo, elegante como quem mora bem e leve como quem vive à beira mar.",
      "Vila Maraú II é uma marca que não precisa gritar para ser notada. Ela existe com a mesma naturalidade do lugar que representa.",
    ],
    heroImage: "/assets/images/portfolio/vila-marau-ii/port_vila_marau_1.jpg",
    gallery: [
      "/assets/images/portfolio/vila-marau-ii/port_vila_marau_2.jpg",
      "/assets/images/portfolio/vila-marau-ii/port_vila_marau_3.jpg",
      "/assets/images/portfolio/vila-marau-ii/port_vila_marau_5.jpg",
      "/assets/images/portfolio/vila-marau-ii/port_vila_marau_6.jpg",
      "/assets/images/portfolio/vila-marau-ii/port_vila_marau_7.jpg",
    ],
    video: {
      thumbnail: "/assets/images/portfolio/vila-marau-ii/port_vila_marau_4.jpg",
    },
    challenge: {
      headline: "Transformar uma sensação em marca.",
      text: "Criar uma identidade que carregasse luxo sem peso, natureza sem rusticidade, Bahia sem clichê.",
    },
    solution: {
      headline: "Uma identidade nascida do próprio lugar.",
      text: "Do ícone à paleta, da tipografia ao sistema de marca — cada elemento encontrou seu referente no próprio território.",
    },
    results: [],
  },
  {
    slug: "projeto-placeholder-1",
    title: "Identidade Visual — Placeholder",
    client: "Cliente A",
    year: "2024",
    category: "branddesign",
    services: ["Identidade Visual", "Logotipo", "Brand System"],
    heroImage: "/assets/images/placeholder-project.jpg",
    gallery: [],
    challenge: {
      headline: "O desafio",
      text: "Placeholder — conteúdo real a inserir.",
    },
    solution: {
      headline: "A solução",
      text: "Placeholder — conteúdo real a inserir.",
      image: "/assets/images/placeholder-project.jpg",
    },
    results: [
      { metric: "Reconhecimento de marca", value: "+80%" },
    ],
  },
  {
    slug: "projeto-placeholder-2",
    title: "Website Institucional — Placeholder",
    client: "Cliente B",
    year: "2024",
    category: "websites",
    services: ["Web Design", "Desenvolvimento", "UX/UI"],
    heroImage: "/assets/images/placeholder-project.jpg",
    gallery: [],
    challenge: {
      headline: "O desafio",
      text: "Placeholder — conteúdo real a inserir.",
    },
    solution: {
      headline: "A solução",
      text: "Placeholder — conteúdo real a inserir.",
      image: "/assets/images/placeholder-project.jpg",
    },
    results: [
      { metric: "Tráfego orgânico", value: "+120%" },
    ],
  },
  {
    slug: "projeto-placeholder-3",
    title: "Campanha ADS — Placeholder",
    client: "Cliente C",
    year: "2023",
    category: "campanhas",
    services: ["Meta Ads", "Google Ads", "Criação de Peças"],
    heroImage: "/assets/images/placeholder-project.jpg",
    gallery: [],
    challenge: {
      headline: "O desafio",
      text: "Placeholder — conteúdo real a inserir.",
    },
    solution: {
      headline: "A solução",
      text: "Placeholder — conteúdo real a inserir.",
      image: "/assets/images/placeholder-project.jpg",
    },
    results: [
      { metric: "ROAS", value: "4.2x" },
    ],
  },
  {
    slug: "projeto-placeholder-4",
    title: "Produção Visual — Placeholder",
    client: "Cliente D",
    year: "2023",
    category: "fotovideo",
    services: ["Fotografia de Produto", "Vídeo Institucional", "Edição"],
    heroImage: "/assets/images/placeholder-project.jpg",
    gallery: [],
    challenge: {
      headline: "O desafio",
      text: "Placeholder — conteúdo real a inserir.",
    },
    solution: {
      headline: "A solução",
      text: "Placeholder — conteúdo real a inserir.",
      image: "/assets/images/placeholder-project.jpg",
    },
    results: [
      { metric: "Engajamento", value: "+200%" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
