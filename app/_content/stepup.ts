import type { Metadata } from "next";
import type { Language } from "./chairwoman";

export const stepUpPaths: Record<Language, string> = {
  es: "/stepup-company/",
  pt: "/pt/stepup-company/",
  en: "/en/stepup-company/",
};

type StepUpCopy = {
  role: string;
  thesis: string;
  perspective: { kicker: string; title: string; accent: string; body: string[]; statement: string };
  relations: { kicker: string; title: string; intro: string; items: Array<{ label: string; title: string; body: string }> };
  expansion: { kicker: string; title: string; intro: string; items: Array<{ label: string; title: string; body: string }> };
  partner: { kicker: string; title: string; body: string; boundary: string; action: string };
  footer: string;
};

export const stepUpCopy: Record<Language, StepUpCopy> = {
  es: {
    role: "Socia & Partner · Relaciones estratégicas · Expansión internacional",
    thesis: "Nina participa en StepUp desde la mesa donde contexto, confianza y ejecución deben convertirse en una misma agenda empresarial.",
    perspective: {
      kicker: "Perspectiva empresarial",
      title: "Las empresas cruzan fronteras.",
      accent: "La confianza sostiene el camino.",
      body: [
        "En StepUp & Company, Nina trabaja en la intersección entre empresa, mercados, relaciones e instituciones.",
        "Su papel es comprender a los actores, preparar el contexto de decisiones relevantes y construir continuidad para que una conversación avance con dirección, responsabilidad y próximos pasos claros.",
      ],
      statement: "Pensar como socia es proteger la calidad de la decisión y la relación que deberá sostenerla.",
    },
    relations: {
      kicker: "Relaciones estratégicas",
      title: "Contexto antes del contacto.",
      intro: "La relación empresarial adquiere valor cuando existe una tesis, una agenda y una responsabilidad definida para cada siguiente paso.",
      items: [
        { label: "01", title: "Arquitectura de stakeholders", body: "Mapear influencia, confianza, riesgos, intereses y responsables antes de iniciar una conversación crítica." },
        { label: "02", title: "Contexto ejecutivo", body: "Preparar objetivos, preguntas, evidencias y límites para que el CEO llegue a la mesa con claridad." },
        { label: "03", title: "Agenda gobernada", body: "Organizar conversaciones y compromisos con propósito, consentimiento y seguimiento definido." },
        { label: "04", title: "Continuidad", body: "Transformar una aproximación inicial en una secuencia responsable de decisiones, responsables y próximos actos." },
      ],
    },
    expansion: {
      kicker: "Negocios internacionales",
      title: "Expandir exige leer el mercado y sus relaciones.",
      intro: "Una expansión internacional no comienza con una presentación. Comienza al entender el contexto, preparar la empresa y ordenar las relaciones que harán posible la ejecución.",
      items: [
        { label: "01", title: "Lectura de contexto", body: "Mercado, actores, reputación, reglas, cultura empresarial e hipótesis que deben ser verificadas." },
        { label: "02", title: "Plan relacional", body: "Prioridades, mensajes, secuencia de aproximación, responsables y cadencia para cada frente estratégico." },
        { label: "03", title: "Ejecución coordinada", body: "Interfaces claras entre empresa, especialistas y aliados, sin confundir coordinación con actividades reguladas." },
      ],
    },
    partner: {
      kicker: "La socia",
      title: "Criterio, confianza y continuidad desde la mesa de decisión.",
      body: "Como socia y partner, Nina aporta lectura institucional, preparación relacional y disciplina de seguimiento a las conversaciones de StepUp sobre crecimiento, expansión y transición empresarial.",
      boundary: "Su papel no promete acceso, capital ni resultados. Construye el contexto, la gobernanza relacional y la continuidad que una decisión internacional exige.",
      action: "Visitar StepUp & Company",
    },
    footer: "Relaciones estratégicas al servicio de decisiones empresariales entre mercados.",
  },
  pt: {
    role: "Sócia & Partner · Relações estratégicas · Expansão internacional",
    thesis: "Nina participa da StepUp a partir da mesa onde contexto, confiança e execução precisam se tornar uma mesma agenda empresarial.",
    perspective: {
      kicker: "Perspectiva empresarial",
      title: "Empresas atravessam fronteiras.",
      accent: "A confiança sustenta o caminho.",
      body: [
        "Na StepUp & Company, Nina atua na interseção entre empresa, mercados, relações e instituições.",
        "Seu papel é compreender os atores, preparar o contexto de decisões relevantes e construir continuidade para que uma conversa avance com direção, responsabilidade e próximos passos claros.",
      ],
      statement: "Pensar como sócia é proteger a qualidade da decisão e da relação que deverá sustentá-la.",
    },
    relations: {
      kicker: "Relações estratégicas",
      title: "Contexto antes do contato.",
      intro: "A relação empresarial ganha valor quando existe uma tese, uma agenda e responsabilidade definida para cada próximo passo.",
      items: [
        { label: "01", title: "Arquitetura de stakeholders", body: "Mapear influência, confiança, riscos, interesses e responsáveis antes de uma conversa crítica." },
        { label: "02", title: "Contexto executivo", body: "Preparar objetivos, perguntas, evidências e limites para que o CEO chegue à mesa com clareza." },
        { label: "03", title: "Agenda governada", body: "Organizar conversas e compromissos com propósito, consentimento e acompanhamento definido." },
        { label: "04", title: "Continuidade", body: "Transformar uma aproximação inicial em uma sequência responsável de decisões, responsáveis e próximos atos." },
      ],
    },
    expansion: {
      kicker: "Negócios internacionais",
      title: "Expandir exige ler o mercado e suas relações.",
      intro: "Uma expansão internacional não começa com uma apresentação. Começa ao compreender o contexto, preparar a empresa e ordenar as relações que tornarão a execução possível.",
      items: [
        { label: "01", title: "Leitura de contexto", body: "Mercado, atores, reputação, regras, cultura empresarial e hipóteses que precisam ser verificadas." },
        { label: "02", title: "Plano relacional", body: "Prioridades, mensagens, sequência de aproximação, responsáveis e cadência para cada frente estratégica." },
        { label: "03", title: "Execução coordenada", body: "Interfaces claras entre empresa, especialistas e aliados, sem confundir coordenação com atividades reguladas." },
      ],
    },
    partner: {
      kicker: "A sócia",
      title: "Critério, confiança e continuidade a partir da mesa de decisão.",
      body: "Como sócia e partner, Nina agrega leitura institucional, preparação relacional e disciplina de acompanhamento às conversas da StepUp sobre crescimento, expansão e transição empresarial.",
      boundary: "Seu papel não promete acesso, capital ou resultados. Constrói o contexto, a governança relacional e a continuidade que uma decisão internacional exige.",
      action: "Visitar StepUp & Company",
    },
    footer: "Relações estratégicas a serviço de decisões empresariais entre mercados.",
  },
  en: {
    role: "Partner · Strategic relations · International expansion",
    thesis: "Nina contributes to StepUp from the table where context, trust and execution must become one coherent business agenda.",
    perspective: {
      kicker: "Business perspective",
      title: "Companies cross borders.",
      accent: "Trust sustains the path.",
      body: [
        "At StepUp & Company, Nina works at the intersection of business, markets, relationships and institutions.",
        "Her role is to understand the actors, prepare the context for consequential decisions and build continuity so a conversation advances with direction, accountability and clear next steps.",
      ],
      statement: "Thinking as a partner means protecting the quality of the decision and the relationship that must sustain it.",
    },
    relations: {
      kicker: "Strategic relations",
      title: "Context before contact.",
      intro: "A business relationship gains value when there is a thesis, an agenda and clear accountability for every next step.",
      items: [
        { label: "01", title: "Stakeholder architecture", body: "Map influence, trust, risks, interests and owners before a critical conversation begins." },
        { label: "02", title: "Executive context", body: "Prepare objectives, questions, evidence and boundaries so the CEO arrives at the table with clarity." },
        { label: "03", title: "Governed agenda", body: "Structure conversations and commitments around purpose, consent and defined follow-through." },
        { label: "04", title: "Continuity", body: "Turn an initial approach into a responsible sequence of decisions, owners and next actions." },
      ],
    },
    expansion: {
      kicker: "International business",
      title: "Expansion requires reading the market and its relationships.",
      intro: "International expansion does not begin with an introduction. It begins by understanding the context, preparing the company and ordering the relationships that will support execution.",
      items: [
        { label: "01", title: "Context reading", body: "Market, actors, reputation, rules, business culture and the hypotheses that must be verified." },
        { label: "02", title: "Relationship plan", body: "Priorities, messages, approach sequence, owners and cadence for each strategic front." },
        { label: "03", title: "Coordinated execution", body: "Clear interfaces among company, specialists and allies, without confusing coordination with regulated activity." },
      ],
    },
    partner: {
      kicker: "The partner",
      title: "Judgment, trust and continuity from the decision table.",
      body: "As a partner, Nina brings institutional reading, relationship preparation and follow-through discipline to StepUp conversations about growth, expansion and business transition.",
      boundary: "Her role does not promise access, capital or outcomes. It builds the context, relationship governance and continuity that an international decision requires.",
      action: "Visit StepUp & Company",
    },
    footer: "Strategic relationships in service of business decisions across markets.",
  },
};

export function stepUpMetadata(language: Language): Metadata {
  const site = "https://chairwoman.ninaquisinski.com";
  const url = `${site}${stepUpPaths[language]}`;
  const title = `StepUp & Company | Nina Quisinski`;
  const description = stepUpCopy[language].role;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "es-PA": `${site}${stepUpPaths.es}`,
        "pt-BR": `${site}${stepUpPaths.pt}`,
        "en-US": `${site}${stepUpPaths.en}`,
        "x-default": `${site}${stepUpPaths.es}`,
      },
    },
    openGraph: { title, description, url, type: "profile" },
  };
}
