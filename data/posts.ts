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

export const posts: Post[] = [
  {
    slug: "brasil-lider-investimento-publicitario-2026",
    title: "Brasil lidera crescimento publicitário global em 2026 — e o que isso significa para o seu negócio",
    excerpt: "O Brasil é o país que mais cresce em investimento publicitário no mundo em 2026, segundo relatório da WPP Media. Entenda por que momentos de incerteza são, na verdade, os melhores para investir em comunicação.",
    category: "mercado",
    coverImage: "/assets/images/placeholder-blog.jpg",
    date: "18 Jun 2026",
    readTime: "4 min de leitura",
    featured: true,
    content: `<p>O relatório <em>This Year Next Year</em>, publicado pela WPP Media nesta semana, trouxe um dado que me chamou atenção: o Brasil é o país que mais cresce em investimento publicitário entre os dez maiores mercados do mundo em 2026. A projeção é de <strong>+15,2%</strong>, bem acima da média global de 8,9%, e à frente até dos Estados Unidos.</p>
<p>Os motores desse crescimento são conhecidos: a infraestrutura de inteligência artificial sendo construída em ritmo acelerado, o aquecimento para grandes eventos esportivos como a Copa do Mundo e a expansão do <em>retail media</em>, o modelo em que plataformas de comércio se tornam veículos de publicidade.</p>
<p>Mas o que me interessa não é o número em si. É o contexto em que ele aparece.</p>

<hr />

<h2>Publicidade cresce justamente quando o cenário aperta</h2>
<p>O mesmo relatório aponta que a economia global opera, nas palavras do FMI, "à sombra da guerra". Incerteza geopolítica, pressão sobre cadeias produtivas, volatilidade cambial. E mesmo assim, o investimento em publicidade sobe.</p>
<p>Isso não é coincidência. É um padrão que se repete.</p>
<p>Durante a pandemia de COVID-19, as marcas que mantiveram presença de comunicação saíram na frente quando o mercado reabriu. Na crise de 2008, estudos posteriores mostraram que empresas que não cortaram publicidade recuperaram participação de mercado muito mais rápido do que concorrentes que sumiram. A lógica é simples: quando todo mundo recua, o espaço que sobra é seu.</p>

<hr />

<h2>O erro que vejo se repetir</h2>
<p>Quando o cenário fica incerto, a primeira coisa que muita empresa corta é comunicação. Marketing vai para o bloco de "despesas não essenciais". A verba some. A presença some junto.</p>
<p>O problema é que o consumidor não para de existir. Ele continua comprando, comparando, escolhendo. Sem comunicação ativa, a sua marca simplesmente não está na lista de opções dele.</p>
<p>Quem entende publicidade como investimento, e não como custo, age diferente. Aproveita o silêncio dos concorrentes para ocupar espaço, construir autoridade e, quando o mercado acelera de novo, já estar na cabeça de quem decide.</p>

<hr />

<h2>O que os dados de 2026 dizem para o seu negócio</h2>
<p>O crescimento projetado para o Brasil não é só uma boa notícia para grandes anunciantes. É um sinal de temperatura de mercado. Significa que há demanda ativa por comunicação, que os canais estão em expansão e que o custo de aparecer bem — com uma marca sólida, uma presença digital consistente e campanhas bem direcionadas — ainda é acessível para empresas de todos os portes.</p>
<p>Pequenas e médias empresas têm hoje acesso às mesmas ferramentas que grandes marcas usavam exclusivamente há dez anos. A diferença entre quem cresce e quem fica parado raramente está no tamanho do orçamento. Está em quem decide agir.</p>

<hr />

<p>Momentos de incerteza são, historicamente, os melhores para construir presença. O Brasil está crescendo. A questão é: o seu negócio vai crescer junto?</p>

<div class="article-cta">
  <p><strong>Seu negócio está aproveitando esse momento?</strong></p>
  <p>Se você quer entender como transformar esse cenário em crescimento real — com branding, campanhas e comunicação que vendem de verdade — me chama no WhatsApp. Sem enrolação, sem proposta genérica. Só uma conversa direta sobre o seu negócio agora.</p>
  <p>Fale comigo, vamos crescer juntos.</p>
</div>`,
  },
  {
    slug: "por-que-sua-marca-nao-converte",
    title: "Por que sua marca não converte — e o que fazer com isso",
    excerpt: "Você tem logo, tem cores, tem cartão de visita. Mas quando o cliente chega, algo não fecha. Aqui está o que geralmente está errado.",
    category: "branding",
    coverImage: "/assets/images/placeholder-blog.jpg",
    date: "06 Jan 2025",
    readTime: "5 min de leitura",
    featured: false,
    content: "<p>Conteúdo em breve.</p>",
  },
  {
    slug: "quanto-custa-um-site-ruim",
    title: "Quanto custa um site ruim para o seu negócio",
    excerpt: "Não é só estética. Um site lento, confuso ou sem foco em conversão drena verba silenciosamente — e a maioria das empresas não percebe.",
    category: "criacao",
    coverImage: "/assets/images/placeholder-blog.jpg",
    date: "20 Jan 2025",
    readTime: "4 min de leitura",
    featured: false,
    content: "<p>Conteúdo em breve.</p>",
  },
  {
    slug: "agencias-overhead-que-voce-paga",
    title: "O overhead de agência que você está pagando sem saber",
    excerpt: "Gerente de conta, reunião de kick-off, relatório de processo. Quem paga por isso? Você. E nada disso entrega resultado.",
    category: "mercado",
    coverImage: "/assets/images/placeholder-blog.jpg",
    date: "10 Fev 2025",
    readTime: "6 min de leitura",
    featured: false,
    content: "<p>Conteúdo em breve.</p>",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
