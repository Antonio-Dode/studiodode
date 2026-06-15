export type ProjectCategory = "branddesign" | "websites" | "campanhas" | "fotovideo";

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  services: string[];
  externalUrl?: string;
  heroImage: string;
  gallery: string[];
  challenge: { headline: string; text: string };
  solution: { headline: string; text: string; image: string };
  results: { metric: string; value: string }[];
  testimonial?: { text: string; name: string; role: string; photo: string };
}

// Projetos reais serão inseridos aqui
export const projects: Project[] = [
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
