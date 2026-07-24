import type { Metadata } from "next";

export type Language = "es" | "pt" | "en";

type LinkItem = { label: string; detail: string; href?: string };
type Pillar = { title: string; body: string };

export type LandingCopy = {
  languageName: string;
  nav: { mandate: string; stepup: string; ideas: string; media: string; lifestyle: string };
  menu: string;
  skip: string;
  hero: {
    eyebrow: string;
    title: string;
    descriptor: string;
    thesis: string;
    primary: string;
    secondary: string;
    alt: string;
    caption: string;
    signal: string;
  };
  proofLabel: string;
  proof: LinkItem[];
  executive: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: Pillar[];
  };
  mandate: {
    eyebrow: string;
    title: string;
    body: string;
    alt: string;
    caption: string;
    sourcesLabel: string;
    archiveTitle: string;
    archiveBody: string;
    archiveNote: string;
  };
  stepup: {
    eyebrow: string;
    title: string;
    body: string;
    alt: string;
    caption: string;
    pillars: Pillar[];
    note: string;
    cta: string;
  };
  ideas: {
    eyebrow: string;
    title: string;
    body: string;
    topics: string[];
    primary: string;
    secondary: string;
  };
  media: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ outlet: string; date: string; title: string; href: string }>;
  };
  lifestyle: {
    eyebrow: string;
    title: string;
    body: string;
    criteria: string[];
    cta: string;
    alt: string;
  };
  channels: {
    eyebrow: string;
    title: string;
    body: string;
    links: Array<{ label: string; detail: string; href: string }>;
  };
  footer: { statement: string; evidence: string; rights: string };
};

const sharedMedia = [
  {
    outlet: "Investor Lifestyle",
    date: "08.10.2025",
    href: "https://investor.com.pa/business/panama-y-brasil-construyen-un-puente-estrategico-global/",
  },
  {
    outlet: "Telemetro",
    date: "09.09.2025",
    href: "https://www.telemetro.com/nacionales/panama-y-brasil-anuncian-primer-foro-comercial-ingreso-al-mercosur-n6053628",
  },
  {
    outlet: "Quijano & Associates",
    date: "30.09.2025",
    href: "https://quijano.com/business-investors-day-2025-organized-by-the-panama-brazil-chamber-of-commerce-and-industry/",
  },
];

export const landingCopy: Record<Language, LandingCopy> = {
  es: {
    languageName: "Español",
    nav: { mandate: "Chairwoman", stepup: "StepUp & Company", ideas: "Ideas", media: "Prensa", lifestyle: "Lifestyle" },
    menu: "Menú",
    skip: "Ir al contenido",
    hero: {
      eyebrow: "FUNDADORA Y PRESIDENTA · CCI BRASIL–PANAMÁ / SOCIA · STEPUP & COMPANY",
      title: "Liderazgo que conecta estrategias con resultados sostenibles.",
      descriptor: "Liderazgo institucional · Relaciones estratégicas · Expansión empresarial",
      thesis: "Las oportunidades cruzan fronteras cuando existe confianza para sostenerlas.",
      primary: "Ver el mandato",
      secondary: "Leer su perspectiva",
      alt: "Nina Quisinski durante una intervención institucional en Panamá",
      caption: "Panamá · liderazgo institucional",
      signal: "MANDATO · CRITERIO · CONTEXTO",
    },
    proofLabel: "Evidencia y canales",
    proof: [
      { label: "CCI Brasil–Panamá", detail: "Fundadora y presidenta", href: "https://ccibrasilpanama.org/2026-lid-nina/" },
      { label: "StepUp & Company", detail: "Socia", href: "https://site.stepup10x.com/" },
      { label: "Investor Lifestyle", detail: "Perspectiva publicada", href: sharedMedia[0].href },
      { label: "Telemetro", detail: "Agenda empresarial", href: sharedMedia[1].href },
    ],
    executive: {
      eyebrow: "LA PREGUNTA EJECUTIVA",
      title: "La confianza no reemplaza la estrategia. La hace posible.",
      body: "Antes de cruzar un mercado, abrir una conversación de capital o sentarse con una institución, una empresa necesita contexto, preparación y relaciones capaces de sostener una decisión.",
      pillars: [
        { title: "Mandato", body: "¿Quién puede convocar la mesa y con qué legitimidad?" },
        { title: "Preparación", body: "¿Qué debe ordenar la empresa antes de buscar expansión o capital?" },
        { title: "Relación", body: "¿Cómo se gobierna la confianza antes y después de decidir?" },
      ],
    },
    mandate: {
      eyebrow: "PRESIDENCIA",
      title: "Una agenda empresarial entre Brasil y Panamá.",
      body: "Nina es fundadora y presidenta de la Cámara de Comercio e Industria Brasil–Panamá. Desde ese mandato articula empresas, instituciones y conversaciones que requieren comprensión de ambos mercados.",
      alt: "Nina Quisinski atendiendo a medios durante una agenda de la CCI Brasil–Panamá",
      caption: "Prensa · Cámara de Comercio e Industria Brasil–Panamá",
      sourcesLabel: "Fuentes verificables",
      archiveTitle: "Contextos institucionales documentados",
      archiveBody: "El archivo público de la Cámara registra actuaciones y correspondencia institucional vinculadas con el MICI y las representaciones diplomáticas de Brasil y Panamá.",
      archiveNote: "La relación pertenece al mandato de la Cámara; no constituye un aval personal, comercial o de inversión.",
    },
    stepup: {
      eyebrow: "STEPUP & COMPANY",
      title: "Relaciones que preparan a la empresa para conversaciones de otro nivel.",
      body: "Como socia, Nina aporta lectura institucional, relaciones internacionales y contexto de mercado a conversaciones donde empresa, propietarios y capital necesitan alinearse.",
      alt: "Nina Quisinski participando en una conversación empresarial",
      caption: "Conversación empresarial · trabajo entre pares",
      pillars: [
        { title: "Relaciones internacionales", body: "Embajadas, gobiernos, cámaras y actores empresariales con contexto." },
        { title: "Comercio internacional", body: "Condiciones y conexiones para iniciar expansión con criterio." },
        { title: "Capital inteligente", body: "Preparación para conversaciones responsables entre empresa, propietarios y capital." },
        { title: "Confianza institucional", body: "Alineación de intereses antes y después de una decisión." },
      ],
      note: "Este sitio no ofrece intermediación financiera, recomendación de inversiones ni promesas de acceso a capital.",
      cta: "Conocer StepUp & Company",
    },
    ideas: {
      eyebrow: "PENSAMIENTO RECURRENTE",
      title: "Capital & Ownership Brief",
      body: "Un briefing editorial para CEOs, propietarios, boards, inversores y líderes institucionales que necesitan pensar mejor antes de moverse entre mercados.",
      topics: ["Capital & Ownership", "Institutional Trust", "Across Markets", "Women & Economic Agency", "Lifestyle & Cultural Capital"],
      primary: "Suscribirse en LinkedIn",
      secondary: "Ver conversaciones en YouTube",
    },
    media: {
      eyebrow: "PRENSA Y REGISTRO",
      title: "Presencia que deja evidencia.",
      intro: "Apariciones verificadas que permiten evaluar el mandato y el pensamiento de Nina en su contexto original.",
      items: [
        { ...sharedMedia[0], title: "Panamá y Brasil construyen un puente estratégico global" },
        { ...sharedMedia[1], title: "Panamá y Brasil anuncian su primer foro comercial" },
        { ...sharedMedia[2], title: "Business & Investors Day 2025" },
      ],
    },
    lifestyle: {
      eyebrow: "LIFESTYLE Y COLABORACIONES",
      title: "Afinidad real. Contexto visible. Ninguna colaboración vacía.",
      body: "Nina abre un territorio editorial para marcas compatibles con liderazgo, hospitalidad, movilidad, cultura, diseño y agencia económica femenina. Las colaboraciones futuras deberán aportar significado, no solo exposición.",
      criteria: ["Relevancia cultural", "Calidad material", "Historia verificable", "Afinidad con la audiencia"],
      cta: "Explorar Instagram",
      alt: "Nina Quisinski en un contexto de hospitalidad y conversación",
    },
    channels: {
      eyebrow: "CANALES OFICIALES",
      title: "La relación continúa después de la primera impresión.",
      body: "Cada canal cumple una función distinta: pensamiento, conversación, registro visual y archivo profesional.",
      links: [
        { label: "LinkedIn", detail: "Criterio ejecutivo", href: "https://www.linkedin.com/in/ninaquisinski/?locale=es" },
        { label: "Instagram", detail: "Presencia y contexto", href: "https://www.instagram.com/ninaquisinski/" },
        { label: "YouTube", detail: "Conversaciones", href: "https://www.youtube.com/@NinaQuisinski" },
        { label: "Newsletter", detail: "Archivo recurrente", href: "https://www.linkedin.com/newsletters/7460722642883522560/" },
      ],
    },
    footer: {
      statement: "Liderazgo institucional · Relaciones estratégicas · Expansión empresarial",
      evidence: "Claims y fuentes revisados el 22 de julio de 2026.",
      rights: "Fotografías sujetas al gate final de derechos antes de publicación.",
    },
  },
  pt: {
    languageName: "Português",
    nav: { mandate: "Chairwoman", stepup: "StepUp & Company", ideas: "Ideias", media: "Imprensa", lifestyle: "Lifestyle" },
    menu: "Menu",
    skip: "Ir para o conteúdo",
    hero: {
      eyebrow: "FUNDADORA E PRESIDENTE · CCI BRASIL–PANAMÁ / SÓCIA · STEPUP & COMPANY",
      title: "Liderança que conecta estratégias a resultados sustentáveis.",
      descriptor: "Liderança institucional · Relações estratégicas · Expansão empresarial",
      thesis: "Oportunidades atravessam fronteiras quando existe confiança para sustentá-las.",
      primary: "Ver o mandato",
      secondary: "Ler sua perspectiva",
      alt: "Nina Quisinski durante uma intervenção institucional no Panamá",
      caption: "Panamá · liderança institucional",
      signal: "MANDATO · CRITÉRIO · CONTEXTO",
    },
    proofLabel: "Evidências e canais",
    proof: [
      { label: "CCI Brasil–Panamá", detail: "Fundadora e presidente", href: "https://ccibrasilpanama.org/2026-lid-nina/" },
      { label: "StepUp & Company", detail: "Sócia", href: "https://site.stepup10x.com/" },
      { label: "Investor Lifestyle", detail: "Perspectiva publicada", href: sharedMedia[0].href },
      { label: "Telemetro", detail: "Agenda empresarial", href: sharedMedia[1].href },
    ],
    executive: {
      eyebrow: "A PERGUNTA EXECUTIVA",
      title: "Confiança não substitui estratégia. Ela torna a estratégia possível.",
      body: "Antes de entrar em um mercado, abrir uma conversa de capital ou sentar-se com uma instituição, a empresa precisa de contexto, preparação e relações capazes de sustentar uma decisão.",
      pillars: [
        { title: "Mandato", body: "Quem pode convocar a mesa e com qual legitimidade?" },
        { title: "Preparação", body: "O que a empresa precisa organizar antes de buscar expansão ou capital?" },
        { title: "Relação", body: "Como governar a confiança antes e depois de decidir?" },
      ],
    },
    mandate: {
      eyebrow: "PRESIDÊNCIA",
      title: "Uma agenda empresarial entre Brasil e Panamá.",
      body: "Nina é fundadora e presidente da Câmara de Comércio e Indústria Brasil–Panamá. A partir desse mandato, articula empresas, instituições e conversas que exigem compreensão dos dois mercados.",
      alt: "Nina Quisinski atendendo à imprensa durante uma agenda da CCI Brasil–Panamá",
      caption: "Imprensa · Câmara de Comércio e Indústria Brasil–Panamá",
      sourcesLabel: "Fontes verificáveis",
      archiveTitle: "Contextos institucionais documentados",
      archiveBody: "O arquivo público da Câmara registra atuações e correspondência institucional ligadas ao MICI e às representações diplomáticas do Brasil e do Panamá.",
      archiveNote: "A relação pertence ao mandato da Câmara; não constitui endosso pessoal, comercial ou de investimento.",
    },
    stepup: {
      eyebrow: "STEPUP & COMPANY",
      title: "Relações que preparam a empresa para conversas de outro nível.",
      body: "Como sócia, Nina leva leitura institucional, relações internacionais e contexto de mercado a conversas nas quais empresa, proprietários e capital precisam se alinhar.",
      alt: "Nina Quisinski participando de uma conversa empresarial",
      caption: "Conversa empresarial · trabalho entre pares",
      pillars: [
        { title: "Relações internacionais", body: "Embaixadas, governos, câmaras e atores empresariais com contexto." },
        { title: "Comércio internacional", body: "Condições e conexões para iniciar a expansão com critério." },
        { title: "Capital inteligente", body: "Preparação para conversas responsáveis entre empresa, proprietários e capital." },
        { title: "Confiança institucional", body: "Alinhamento de interesses antes e depois de uma decisão." },
      ],
      note: "Este site não oferece intermediação financeira, recomendação de investimentos ou promessa de acesso a capital.",
      cta: "Conhecer a StepUp & Company",
    },
    ideas: {
      eyebrow: "PENSAMENTO RECORRENTE",
      title: "Capital & Ownership Brief",
      body: "Um briefing editorial para CEOs, proprietários, boards, investidores e líderes institucionais que precisam pensar melhor antes de se mover entre mercados.",
      topics: ["Capital & Ownership", "Institutional Trust", "Across Markets", "Women & Economic Agency", "Lifestyle & Cultural Capital"],
      primary: "Assinar no LinkedIn",
      secondary: "Ver conversas no YouTube",
    },
    media: {
      eyebrow: "IMPRENSA E REGISTRO",
      title: "Presença que deixa evidência.",
      intro: "Aparições verificadas que permitem avaliar o mandato e o pensamento de Nina em seu contexto original.",
      items: [
        { ...sharedMedia[0], title: "Panamá e Brasil constroem uma ponte estratégica global" },
        { ...sharedMedia[1], title: "Panamá e Brasil anunciam seu primeiro fórum comercial" },
        { ...sharedMedia[2], title: "Business & Investors Day 2025" },
      ],
    },
    lifestyle: {
      eyebrow: "LIFESTYLE E COLABORAÇÕES",
      title: "Afinidade real. Contexto visível. Nenhuma colaboração vazia.",
      body: "Nina abre um território editorial para marcas compatíveis com liderança, hospitalidade, mobilidade, cultura, design e agência econômica feminina. Futuras colaborações devem gerar significado, não apenas exposição.",
      criteria: ["Relevância cultural", "Qualidade material", "História verificável", "Afinidade com a audiência"],
      cta: "Explorar o Instagram",
      alt: "Nina Quisinski em um contexto de hospitalidade e conversa",
    },
    channels: {
      eyebrow: "CANAIS OFICIAIS",
      title: "A relação continua depois da primeira impressão.",
      body: "Cada canal cumpre uma função: pensamento, conversa, registro visual e arquivo profissional.",
      links: [
        { label: "LinkedIn", detail: "Critério executivo", href: "https://www.linkedin.com/in/ninaquisinski/?locale=pt_BR" },
        { label: "Instagram", detail: "Presença e contexto", href: "https://www.instagram.com/ninaquisinski/" },
        { label: "YouTube", detail: "Conversas", href: "https://www.youtube.com/@NinaQuisinski" },
        { label: "Newsletter", detail: "Arquivo recorrente", href: "https://www.linkedin.com/newsletters/7460722642883522560/" },
      ],
    },
    footer: {
      statement: "Liderança institucional · Relações estratégicas · Expansão empresarial",
      evidence: "Claims e fontes revisados em 22 de julho de 2026.",
      rights: "Fotografias sujeitas ao gate final de direitos antes da publicação.",
    },
  },
  en: {
    languageName: "English",
    nav: { mandate: "Chairwoman", stepup: "StepUp & Company", ideas: "Ideas", media: "Press", lifestyle: "Lifestyle" },
    menu: "Menu",
    skip: "Skip to content",
    hero: {
      eyebrow: "FOUNDER & PRESIDENT · CCI BRAZIL–PANAMA / PARTNER · STEPUP & COMPANY",
      title: "Leadership that connects strategy to sustainable results.",
      descriptor: "Institutional leadership · Strategic relationships · Business expansion",
      thesis: "Opportunities cross borders when trust is strong enough to sustain them.",
      primary: "See the mandate",
      secondary: "Read her perspective",
      alt: "Nina Quisinski speaking in an institutional setting in Panama",
      caption: "Panama · institutional leadership",
      signal: "MANDATE · JUDGMENT · CONTEXT",
    },
    proofLabel: "Evidence and channels",
    proof: [
      { label: "CCI Brazil–Panama", detail: "Founder and president", href: "https://ccibrasilpanama.org/2026-lid-nina/" },
      { label: "StepUp & Company", detail: "Partner", href: "https://site.stepup10x.com/" },
      { label: "Investor Lifestyle", detail: "Published perspective", href: sharedMedia[0].href },
      { label: "Telemetro", detail: "Business agenda", href: sharedMedia[1].href },
    ],
    executive: {
      eyebrow: "THE EXECUTIVE QUESTION",
      title: "Trust does not replace strategy. It makes strategy possible.",
      body: "Before entering a market, opening a capital conversation or sitting down with an institution, a company needs context, preparation and relationships that can sustain a decision.",
      pillars: [
        { title: "Mandate", body: "Who can convene the table, and with what legitimacy?" },
        { title: "Readiness", body: "What must the company prepare before pursuing expansion or capital?" },
        { title: "Relationship", body: "How is trust governed before and after a decision?" },
      ],
    },
    mandate: {
      eyebrow: "CHAIRMANSHIP",
      title: "A business agenda between Brazil and Panama.",
      body: "Nina is founder and president of the Brazil–Panama Chamber of Commerce and Industry. Through that mandate, she connects companies, institutions and conversations that demand fluency in both markets.",
      alt: "Nina Quisinski speaking with the press during a CCI Brazil–Panama agenda",
      caption: "Press · Brazil–Panama Chamber of Commerce and Industry",
      sourcesLabel: "Verifiable sources",
      archiveTitle: "Documented institutional contexts",
      archiveBody: "The Chamber's public archive records institutional activity and correspondence involving Panama's MICI and the diplomatic representations of Brazil and Panama.",
      archiveNote: "These relationships belong to the Chamber's mandate; they are not personal, commercial or investment endorsements.",
    },
    stepup: {
      eyebrow: "STEPUP & COMPANY",
      title: "Relationships that prepare companies for higher-level conversations.",
      body: "As a partner, Nina brings institutional judgment, international relationships and market context to conversations where companies, owners and capital need to align.",
      alt: "Nina Quisinski taking part in a business conversation",
      caption: "Business conversation · working among peers",
      pillars: [
        { title: "International relations", body: "Embassies, governments, chambers and business actors understood in context." },
        { title: "International trade", body: "Conditions and connections for beginning expansion with judgment." },
        { title: "Intelligent capital", body: "Preparation for responsible conversations among companies, owners and capital." },
        { title: "Institutional trust", body: "Alignment of interests before and after a decision." },
      ],
      note: "This site does not offer financial intermediation, investment recommendations or promises of access to capital.",
      cta: "Explore StepUp & Company",
    },
    ideas: {
      eyebrow: "RECURRENT THINKING",
      title: "Capital & Ownership Brief",
      body: "An editorial briefing for CEOs, owners, boards, investors and institutional leaders who need to think more clearly before moving across markets.",
      topics: ["Capital & Ownership", "Institutional Trust", "Across Markets", "Women & Economic Agency", "Lifestyle & Cultural Capital"],
      primary: "Subscribe on LinkedIn",
      secondary: "Watch conversations on YouTube",
    },
    media: {
      eyebrow: "PRESS AND RECORD",
      title: "Presence that leaves evidence.",
      intro: "Verified appearances that allow readers to evaluate Nina's mandate and thinking in their original context.",
      items: [
        { ...sharedMedia[0], title: "Panama and Brazil build a strategic global bridge" },
        { ...sharedMedia[1], title: "Panama and Brazil announce their first trade forum" },
        { ...sharedMedia[2], title: "Business & Investors Day 2025" },
      ],
    },
    lifestyle: {
      eyebrow: "LIFESTYLE AND COLLABORATIONS",
      title: "Real affinity. Visible context. No empty collaborations.",
      body: "Nina is opening an editorial territory for brands aligned with leadership, hospitality, mobility, culture, design and women's economic agency. Future collaborations must create meaning, not exposure alone.",
      criteria: ["Cultural relevance", "Material quality", "Verifiable story", "Audience alignment"],
      cta: "Explore Instagram",
      alt: "Nina Quisinski in a hospitality and conversation setting",
    },
    channels: {
      eyebrow: "OFFICIAL CHANNELS",
      title: "The relationship continues after the first impression.",
      body: "Each channel has a distinct job: thinking, conversation, visual record and professional archive.",
      links: [
        { label: "LinkedIn", detail: "Executive judgment", href: "https://www.linkedin.com/in/ninaquisinski/?locale=en_US" },
        { label: "Instagram", detail: "Presence and context", href: "https://www.instagram.com/ninaquisinski/" },
        { label: "YouTube", detail: "Conversations", href: "https://www.youtube.com/@NinaQuisinski" },
        { label: "Newsletter", detail: "Recurrent archive", href: "https://www.linkedin.com/newsletters/7460722642883522560/" },
      ],
    },
    footer: {
      statement: "Institutional leadership · Strategic relationships · Business expansion",
      evidence: "Claims and sources reviewed on July 22, 2026.",
      rights: "Photography remains subject to the final rights gate before publication.",
    },
  },
};

const descriptions: Record<Language, string> = {
  es: "Nina Quisinski: fundadora y presidenta de la CCI Brasil–Panamá, socia de StepUp & Company y voz sobre relaciones estratégicas y expansión empresarial.",
  pt: "Nina Quisinski: fundadora e presidente da CCI Brasil–Panamá, sócia da StepUp & Company e voz sobre relações estratégicas e expansão empresarial.",
  en: "Nina Quisinski: founder and president of CCI Brazil–Panama, partner at StepUp & Company, and a voice on strategic relationships and business expansion.",
};

export function metadataFor(language: Language, path: string): Metadata {
  const titles: Record<Language, string> = {
    es: "Nina Quisinski | Liderazgo institucional y expansión",
    pt: "Nina Quisinski | Liderança institucional e expansão",
    en: "Nina Quisinski | Institutional leadership and expansion",
  };
  return {
    title: titles[language],
    description: descriptions[language],
    alternates: {
      canonical: path,
      languages: { "es-PA": "/", "pt-BR": "/pt/", "en-US": "/en/", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      title: titles[language],
      description: descriptions[language],
      images: [{ url: "/images/nina-hero-original.jpg", width: 2400, height: 1600, alt: landingCopy[language].hero.alt }],
    },
  };
}
