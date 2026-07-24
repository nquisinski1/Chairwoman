import type { Metadata } from "next";
import type { Language } from "./landing";

type Pillar = {
  title: string;
  body: string;
};

type RecordItem = {
  date: string;
  origin: string;
  title: string;
  body: string;
  href: string;
};

type LetterItem = {
  date: string;
  category: string;
  issuer: string;
  title: string;
  body: string;
  href: string;
};

export type ChairwomanCopy = {
  menu: string;
  skip: string;
  nav: {
    home: string;
    mandate: string;
    record: string;
    letters: string;
    protocol: string;
    chamber: string;
  };
  hero: {
    role: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    descriptor: string;
    primary: string;
    secondary: string;
    alt: string;
  };
  mandate: {
    title: string;
    lead: string;
    body: string;
    pillars: Pillar[];
  };
  record: {
    title: string;
    intro: string;
    sourceAction: string;
    items: RecordItem[];
  };
  letters: {
    title: string;
    intro: string;
    sourceAction: string;
    archiveAction: string;
    disclaimer: string;
    items: LetterItem[];
  };
  protocol: {
    title: string;
    body: string;
    labels: Pillar[];
    note: string;
  };
  chamber: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    statement: string;
    evidence: string;
    rights: string;
  };
};

export const chairwomanPaths: Record<Language, string> = {
  es: "/chairwoman/",
  pt: "/pt/chairwoman/",
  en: "/en/chairwoman/",
};

export const homePaths: Record<Language, string> = {
  es: "/",
  pt: "/pt/",
  en: "/en/",
};

const sources = {
  profile: "https://ccibrasilpanama.org/2026-lid-nina/",
  pbid: "https://ccibrasilpanama.org/eventos/panama-business-investors-days-2025/",
  miciLaunch: "https://mici.gob.pa/2024/10/31/panama-destaca-como-puerta-estrategica-para-la-inversion-brasilena/",
  miciAugust: "https://mici.gob.pa/2025/08/18/panama-afianza-vinculos-comerciales-con-brasil-en-el-marco-de-su-acercamiento-al-mercosur/",
  miciOpening: "https://mici.gob.pa/2025/09/29/ministro-molto-reafirma-a-panama-como-socio-estrategico-en-apertura-del-panama-business-inversors-days/",
  mission: "https://www.balneariocamboriu.sc.gov.br/imprensa_detalhe.cfm?codigo=39059",
  presidential: "https://www.presidencia.gob.pa/storage/documentos/1176/comunicado-conjunto-panama-brasil-1769644119.pdf",
  alesc: "https://portalegis.alesc.sc.gov.br/documentos/N09JP",
  cniLetter: "https://ccibrasilpanama.org/wp-content/uploads/2026/05/CNI.jpg",
  brazilEmbassy2025: "https://ccibrasilpanama.org/wp-content/uploads/2026/05/embaixada-brasil-panama-25.jpg",
  brazilEmbassy2026: "https://ccibrasilpanama.org/wp-content/uploads/2026/05/embaixada-brasil-panama-26.jpg",
  panamaEmbassy2026: "https://ccibrasilpanama.org/wp-content/uploads/2026/05/embajada-panama-brasil.jpg",
  miciLetter: "https://ccibrasilpanama.org/wp-content/uploads/2026/07/NOTA-MICI-CAMARA-COMERCIO-BRASIL-PANAMA-scaled.jpg",
};

export const chairwomanCopy: Record<Language, ChairwomanCopy> = {
  es: {
    menu: "Menú",
    skip: "Ir al contenido",
    nav: {
      home: "Inicio",
      mandate: "El mandato",
      record: "Trayectoria",
      letters: "Cartas",
      protocol: "Criterio",
      chamber: "Cámara oficial",
    },
    hero: {
      role: "Fundadora y presidenta · Cámara de Comercio e Industria Brasil–Panamá",
      titleBefore: "Liderar es hacer que la",
      titleAccent: "confianza",
      titleAfter: "llegue antes que la oportunidad.",
      descriptor: "Relaciones institucionales al servicio de una agenda empresarial entre Brasil y Panamá.",
      primary: "Conocer el mandato",
      secondary: "Ir a la Cámara oficial",
      alt: "Nina Quisinski hablando en un encuentro institucional en Panamá",
    },
    mandate: {
      title: "Una presidencia construida para conectar dos mercados.",
      lead: "La Cámara existe para convertir proximidad entre países en una agenda empresarial con continuidad.",
      body: "Como fundadora y presidenta, Nina ocupa una posición institucional: convoca conversaciones, articula contextos y representa una agenda bilateral. Esta página presenta ese trabajo por medio de hechos documentados, no de promesas de acceso ni de avales personales.",
      pillars: [
        {
          title: "Agenda bilateral",
          body: "Comercio, servicios, logística, innovación, sostenibilidad y cooperación empresarial.",
        },
        {
          title: "Relación institucional",
          body: "Empresas, cámaras, gobiernos y representaciones diplomáticas dentro de su contexto oficial.",
        },
        {
          title: "Confianza verificable",
          body: "Cada hecho relevante remite a la fuente que lo originó para preservar autoría y significado.",
        },
      ],
    },
    record: {
      title: "Autoridad que puede ser comprobada.",
      intro: "La cronología separa cargo, reconocimiento y participación pública. Cada registro abre la página oficial que sustenta su formulación.",
      sourceAction: "Ver fuente original",
      items: [
        {
          date: "30.10.2024",
          origin: "MICI Panamá · registro oficial",
          title: "Acto inaugural de la Cámara",
          body: "El MICI registró el inicio de operaciones con la presencia del ministro Julio Moltó y del entonces embajador de Brasil Carlos Henrique Moojen de Abreu e Silva.",
          href: sources.miciLaunch,
        },
        {
          date: "14.04.2025",
          origin: "ALESC · documento legislativo",
          title: "Reconocimiento como fundadora y presidenta",
          body: "Un documento legislativo de Santa Catarina reconoce a Janaina Tobia Quisinski —nombre formal asociado públicamente a Nina Quisinski— como fundadora y presidenta.",
          href: sources.alesc,
        },
        {
          date: "28.06.2025",
          origin: "Prefeitura de Balneário Camboriú",
          title: "Misión de Panamá en Santa Catarina",
          body: "Nina integró una misión con el cónsul general Rubén Argüelles y Guillermo Rodríguez, subadministrador de PROPANAMA.",
          href: sources.mission,
        },
        {
          date: "18.08.2025",
          origin: "MICI Panamá · agenda oficial",
          title: "Agenda con ministro y viceministra",
          body: "El ministro Julio Moltó y la viceministra Astrid Ábrego se reunieron con Nina para tratar MERCOSUR, inversión privada y misión comercial.",
          href: sources.miciAugust,
        },
        {
          date: "29–30.09.2025",
          origin: "MICI Panamá + programa CCI",
          title: "Panama Business & Investors’ Day 2025",
          body: "Como presidenta, Nina participó y moderó conversaciones en un foro oficial con ministros, embajadores, inversores y ejecutivos.",
          href: sources.pbid,
        },
        {
          date: "28.01.2026",
          origin: "Presidencia de Panamá",
          title: "La Cámara en el comunicado presidencial",
          body: "El comunicado conjunto de los presidentes de Panamá y Brasil citó el lanzamiento de la Cámara como marco de los lazos empresariales bilaterales, sin implicar aval personal.",
          href: sources.presidential,
        },
      ],
    },
    letters: {
      title: "Cuando una institución escribe, el contexto importa.",
      intro: "Cinco documentos publicables confirman una invitación nominal a Nina y apoyos institucionales dirigidos a la Cámara. Cada registro abre el archivo conservado por la Cámara.",
      sourceAction: "Abrir documento",
      archiveAction: "Ver archivo oficial",
      disclaimer: "Las cartas de las embajadas y del MICI reconocen o respaldan la labor de la Cámara; no constituyen avales personales a Nina. La carta de la CNI es una invitación nominal dirigida a ella en su calidad de presidenta.",
      items: [
        {
          date: "04.06.2025",
          category: "Apoyo institucional",
          issuer: "Embajada de Brasil en Panamá · Carlos Henrique Moojen de Abreu e Silva",
          title: "Apoyo a las actividades de la Cámara",
          body: "Carta dirigida a Nina, como presidenta, que reconoce el trabajo de la Cámara y manifiesta apoyo a sus proyectos institucionales dentro de las competencias de la Embajada.",
          href: sources.brazilEmbassy2025,
        },
        {
          date: "25.11.2025",
          category: "Invitación nominal",
          issuer: "Presidencia de la CNI · Antonio Ricardo Álvarez Alban",
          title: "Misión empresarial al foro económico de CAF",
          body: "La Presidencia de la CNI invitó nominalmente a Nina, como presidenta de la Cámara, a integrar su misión empresarial al foro de CAF en Ciudad de Panamá, del 27 al 30 de enero de 2026.",
          href: sources.cniLetter,
        },
        {
          date: "14.04.2026",
          category: "Apoyo institucional",
          issuer: "Embajada de Brasil en Panamá · João Mendes Pereira",
          title: "Reconocimiento a la agenda bilateral",
          body: "La Embajada expresó apoyo institucional a las actividades de la Cámara y reconoció su relevancia para las relaciones económicas entre Brasil y Panamá.",
          href: sources.brazilEmbassy2026,
        },
        {
          date: "11.05.2026",
          category: "Apoyo institucional",
          issuer: "Embajada de Panamá en Brasil · Flavio Gabriel Méndez Altamirano",
          title: "Respaldo a la continuidad del trabajo",
          body: "Carta dirigida a Nina que valora el papel de la Cámara en el fortalecimiento de los vínculos comerciales y económicos e impulsa la continuidad de su labor institucional.",
          href: sources.panamaEmbassy2026,
        },
        {
          date: "27.05.2026",
          category: "Reconocimiento institucional",
          issuer: "MICI Panamá · Ministro Julio A. Moltó",
          title: "Reconocimiento y respaldo del MICI",
          body: "El Ministerio reconoció el trabajo de la Cámara en ambos países y expresó respaldo institucional a su agenda de relaciones económicas y comerciales.",
          href: sources.miciLetter,
        },
      ],
    },
    protocol: {
      title: "Una fotografía registra una agenda. No fabrica un aval.",
      body: "Presidentes, ministros, embajadores y líderes empresariales aparecen únicamente cuando una fuente pública documenta el encuentro y su finalidad. La relación pertenece al mandato institucional de la Cámara; no se presenta como respaldo personal, político, comercial o de inversión.",
      labels: [
        {
          title: "Fuente primero",
          body: "El relato remite al archivo de la Cámara o al organismo público responsable.",
        },
        {
          title: "Cargo exacto",
          body: "Se conserva la función y el período que la fuente efectivamente registra.",
        },
        {
          title: "Sin ampliaciones",
          body: "Participación, reunión o correspondencia no se convierten en influencia, acceso o endorsement.",
        },
      ],
      note: "Criterio editorial permanente para publicaciones, prensa, redes y colaboraciones vinculadas con la Presidencia.",
    },
    chamber: {
      title: "La historia completa pertenece al archivo oficial de la Cámara.",
      body: "Nina amplifica esa agenda desde su marca personal y dirige siempre al originador para preservar la integridad de documentos, reconocimientos y actividades institucionales.",
      primary: "Visitar la Cámara oficial",
      secondary: "Ver el perfil institucional",
    },
    footer: {
      statement: "Presidencia · Relaciones institucionales · Agenda empresarial Brasil–Panamá",
      evidence: "Claims y fuentes revisados el 23 de julio de 2026.",
      rights: "Fotografía sujeta al gate final de derechos antes de publicación.",
    },
  },
  pt: {
    menu: "Menu",
    skip: "Ir para o conteúdo",
    nav: {
      home: "Início",
      mandate: "O mandato",
      record: "Histórico",
      letters: "Cartas",
      protocol: "Critério",
      chamber: "Câmara oficial",
    },
    hero: {
      role: "Fundadora e presidente · Câmara de Comércio e Indústria Brasil–Panamá",
      titleBefore: "Liderar é fazer a",
      titleAccent: "confiança",
      titleAfter: "chegar antes da oportunidade.",
      descriptor: "Relações institucionais a serviço de uma agenda empresarial entre Brasil e Panamá.",
      primary: "Conhecer o mandato",
      secondary: "Ir para a Câmara oficial",
      alt: "Nina Quisinski falando em um encontro institucional no Panamá",
    },
    mandate: {
      title: "Uma presidência construída para conectar dois mercados.",
      lead: "A Câmara existe para transformar proximidade entre países em uma agenda empresarial com continuidade.",
      body: "Como fundadora e presidente, Nina ocupa uma posição institucional: convoca conversas, articula contextos e representa uma agenda bilateral. Esta página apresenta esse trabalho por meio de fatos documentados, não de promessas de acesso nem de endossos pessoais.",
      pillars: [
        {
          title: "Agenda bilateral",
          body: "Comércio, serviços, logística, inovação, sustentabilidade e cooperação empresarial.",
        },
        {
          title: "Relação institucional",
          body: "Empresas, câmaras, governos e representações diplomáticas dentro do seu contexto oficial.",
        },
        {
          title: "Confiança verificável",
          body: "Cada fato relevante remete à fonte que o originou para preservar autoria e significado.",
        },
      ],
    },
    record: {
      title: "Autoridade que pode ser comprovada.",
      intro: "A cronologia separa cargo, reconhecimento e participação pública. Cada registro abre a página oficial que sustenta a formulação.",
      sourceAction: "Ver fonte original",
      items: [
        {
          date: "30.10.2024",
          origin: "MICI Panamá · registro oficial",
          title: "Ato inaugural da Câmara",
          body: "O MICI registrou o início das operações com a presença do ministro Julio Moltó e do então embaixador do Brasil Carlos Henrique Moojen de Abreu e Silva.",
          href: sources.miciLaunch,
        },
        {
          date: "14.04.2025",
          origin: "ALESC · documento legislativo",
          title: "Reconhecimento como fundadora e presidente",
          body: "Um documento legislativo de Santa Catarina reconhece Janaina Tobia Quisinski —nome formal associado publicamente a Nina Quisinski— como fundadora e presidente.",
          href: sources.alesc,
        },
        {
          date: "28.06.2025",
          origin: "Prefeitura de Balneário Camboriú",
          title: "Missão do Panamá em Santa Catarina",
          body: "Nina integrou uma missão com o cônsul-geral Rubén Argüelles e Guillermo Rodríguez, subadministrador da PROPANAMA.",
          href: sources.mission,
        },
        {
          date: "18.08.2025",
          origin: "MICI Panamá · agenda oficial",
          title: "Agenda com ministro e vice-ministra",
          body: "O ministro Julio Moltó e a vice-ministra Astrid Ábrego reuniram-se com Nina para tratar de MERCOSUL, investimento privado e missão comercial.",
          href: sources.miciAugust,
        },
        {
          date: "29–30.09.2025",
          origin: "MICI Panamá + programa CCI",
          title: "Panama Business & Investors’ Day 2025",
          body: "Como presidente, Nina participou e moderou conversas em um fórum oficial com ministros, embaixadores, investidores e executivos.",
          href: sources.pbid,
        },
        {
          date: "28.01.2026",
          origin: "Presidência do Panamá",
          title: "A Câmara no comunicado presidencial",
          body: "O comunicado conjunto dos presidentes do Panamá e do Brasil citou o lançamento da Câmara como marco dos laços empresariais bilaterais, sem implicar endosso pessoal.",
          href: sources.presidential,
        },
      ],
    },
    letters: {
      title: "Quando uma instituição escreve, o contexto importa.",
      intro: "Cinco documentos publicáveis confirmam um convite nominal a Nina e apoios institucionais dirigidos à Câmara. Cada registro abre o arquivo mantido pela Câmara.",
      sourceAction: "Abrir documento",
      archiveAction: "Ver arquivo oficial",
      disclaimer: "As cartas das embaixadas e do MICI reconhecem ou apoiam o trabalho da Câmara; não constituem endossos pessoais a Nina. A carta da CNI é um convite nominal dirigido a ela na condição de presidente.",
      items: [
        {
          date: "04.06.2025",
          category: "Apoio institucional",
          issuer: "Embaixada do Brasil no Panamá · Carlos Henrique Moojen de Abreu e Silva",
          title: "Apoio às atividades da Câmara",
          body: "Carta dirigida a Nina, como presidente, que reconhece o trabalho da Câmara e manifesta apoio aos seus projetos institucionais dentro das competências da Embaixada.",
          href: sources.brazilEmbassy2025,
        },
        {
          date: "25.11.2025",
          category: "Convite nominal",
          issuer: "Presidência da CNI · Antonio Ricardo Álvarez Alban",
          title: "Missão empresarial ao fórum econômico do CAF",
          body: "A Presidência da CNI convidou nominalmente Nina, como presidente da Câmara, para integrar sua missão empresarial ao fórum do CAF na Cidade do Panamá, de 27 a 30 de janeiro de 2026.",
          href: sources.cniLetter,
        },
        {
          date: "14.04.2026",
          category: "Apoio institucional",
          issuer: "Embaixada do Brasil no Panamá · João Mendes Pereira",
          title: "Reconhecimento à agenda bilateral",
          body: "A Embaixada expressou apoio institucional às atividades da Câmara e reconheceu sua relevância para as relações econômicas entre Brasil e Panamá.",
          href: sources.brazilEmbassy2026,
        },
        {
          date: "11.05.2026",
          category: "Apoio institucional",
          issuer: "Embaixada do Panamá no Brasil · Flavio Gabriel Méndez Altamirano",
          title: "Apoio à continuidade do trabalho",
          body: "Carta dirigida a Nina que valoriza o papel da Câmara no fortalecimento dos vínculos comerciais e econômicos e incentiva a continuidade da sua atuação institucional.",
          href: sources.panamaEmbassy2026,
        },
        {
          date: "27.05.2026",
          category: "Reconhecimento institucional",
          issuer: "MICI Panamá · Ministro Julio A. Moltó",
          title: "Reconhecimento e apoio do MICI",
          body: "O Ministério reconheceu o trabalho da Câmara nos dois países e expressou apoio institucional à sua agenda de relações econômicas e comerciais.",
          href: sources.miciLetter,
        },
      ],
    },
    protocol: {
      title: "Uma fotografia registra uma agenda. Não fabrica um endosso.",
      body: "Presidentes, ministros, embaixadores e líderes empresariais aparecem somente quando uma fonte pública documenta o encontro e sua finalidade. A relação pertence ao mandato institucional da Câmara; não é apresentada como apoio pessoal, político, comercial ou de investimento.",
      labels: [
        {
          title: "Fonte primeiro",
          body: "A narrativa remete ao arquivo da Câmara ou ao órgão público responsável.",
        },
        {
          title: "Cargo exato",
          body: "A função e o período registrados pela fonte são preservados sem ampliação.",
        },
        {
          title: "Sem extrapolações",
          body: "Participação, reunião ou correspondência não viram influência, acesso ou endorsement.",
        },
      ],
      note: "Critério editorial permanente para publicações, imprensa, redes e colaborações ligadas à Presidência.",
    },
    chamber: {
      title: "A história completa pertence ao arquivo oficial da Câmara.",
      body: "Nina amplifica essa agenda a partir da sua marca pessoal e remete sempre ao originador para preservar a integridade de documentos, reconhecimentos e atividades institucionais.",
      primary: "Visitar a Câmara oficial",
      secondary: "Ver o perfil institucional",
    },
    footer: {
      statement: "Presidência · Relações institucionais · Agenda empresarial Brasil–Panamá",
      evidence: "Claims e fontes revisados em 23 de julho de 2026.",
      rights: "Fotografia sujeita ao gate final de direitos antes da publicação.",
    },
  },
  en: {
    menu: "Menu",
    skip: "Skip to content",
    nav: {
      home: "Home",
      mandate: "The mandate",
      record: "Record",
      letters: "Letters",
      protocol: "Standard",
      chamber: "Official Chamber",
    },
    hero: {
      role: "Founder and president · Brazil–Panama Chamber of Commerce and Industry",
      titleBefore: "Leadership makes",
      titleAccent: "trust",
      titleAfter: "arrive before opportunity.",
      descriptor: "Institutional relationships in service of a business agenda between Brazil and Panama.",
      primary: "Explore the mandate",
      secondary: "Go to the official Chamber",
      alt: "Nina Quisinski speaking at an institutional event in Panama",
    },
    mandate: {
      title: "A presidency built to connect two markets.",
      lead: "The Chamber exists to turn proximity between countries into a business agenda with continuity.",
      body: "As founder and president, Nina holds an institutional position: she convenes conversations, connects contexts and represents a bilateral agenda. This page presents that work through documented facts—not promises of access or personal endorsement.",
      pillars: [
        {
          title: "Bilateral agenda",
          body: "Trade, services, logistics, innovation, sustainability and business cooperation.",
        },
        {
          title: "Institutional relationships",
          body: "Companies, chambers, governments and diplomatic missions within their official context.",
        },
        {
          title: "Verifiable trust",
          body: "Each material fact links to its originating source to preserve authorship and meaning.",
        },
      ],
    },
    record: {
      title: "Authority that can be verified.",
      intro: "The timeline separates role, recognition and public participation. Each record opens the official page supporting its wording.",
      sourceAction: "View original source",
      items: [
        {
          date: "30.10.2024",
          origin: "MICI Panama · official record",
          title: "The Chamber’s inaugural act",
          body: "MICI recorded the start of operations attended by minister Julio Moltó and then Brazilian ambassador Carlos Henrique Moojen de Abreu e Silva.",
          href: sources.miciLaunch,
        },
        {
          date: "14.04.2025",
          origin: "ALESC · legislative document",
          title: "Recognition as founder and president",
          body: "A Santa Catarina legislative document recognises Janaina Tobia Quisinski—the formal name publicly associated with Nina Quisinski—as founder and president.",
          href: sources.alesc,
        },
        {
          date: "28.06.2025",
          origin: "Municipality of Balneário Camboriú",
          title: "Panama mission to Santa Catarina",
          body: "Nina joined a mission with consul general Rubén Argüelles and Guillermo Rodríguez, deputy administrator of PROPANAMA.",
          href: sources.mission,
        },
        {
          date: "18.08.2025",
          origin: "MICI Panama · official agenda",
          title: "Agenda with minister and vice minister",
          body: "Minister Julio Moltó and vice minister Astrid Ábrego met Nina to discuss MERCOSUR, private investment and a commercial mission.",
          href: sources.miciAugust,
        },
        {
          date: "29–30.09.2025",
          origin: "MICI Panama + CCI programme",
          title: "Panama Business & Investors’ Day 2025",
          body: "As president, Nina participated in and moderated conversations at an official forum with ministers, ambassadors, investors and executives.",
          href: sources.pbid,
        },
        {
          date: "28.01.2026",
          origin: "Presidency of Panama",
          title: "The Chamber in the presidential communiqué",
          body: "The joint communiqué by the presidents of Panama and Brazil cited the Chamber’s launch as a milestone in bilateral business ties, without implying personal endorsement.",
          href: sources.presidential,
        },
      ],
    },
    letters: {
      title: "When an institution writes, context matters.",
      intro: "Five publishable documents confirm one invitation addressed to Nina by name and institutional support directed to the Chamber. Each record opens the file preserved by the Chamber.",
      sourceAction: "Open document",
      archiveAction: "View official archive",
      disclaimer: "The embassy and MICI letters recognise or support the Chamber’s work; they are not personal endorsements of Nina. The CNI letter is an invitation addressed to her by name in her capacity as president.",
      items: [
        {
          date: "04.06.2025",
          category: "Institutional support",
          issuer: "Embassy of Brazil in Panama · Carlos Henrique Moojen de Abreu e Silva",
          title: "Support for the Chamber’s activities",
          body: "A letter addressed to Nina as president recognising the Chamber’s work and expressing support for its institutional projects within the Embassy’s remit.",
          href: sources.brazilEmbassy2025,
        },
        {
          date: "25.11.2025",
          category: "Named invitation",
          issuer: "CNI Presidency · Antonio Ricardo Álvarez Alban",
          title: "Business mission to the CAF economic forum",
          body: "The CNI Presidency invited Nina by name, as president of the Chamber, to join its business mission to the CAF forum in Panama City from January 27 to 30, 2026.",
          href: sources.cniLetter,
        },
        {
          date: "14.04.2026",
          category: "Institutional support",
          issuer: "Embassy of Brazil in Panama · João Mendes Pereira",
          title: "Recognition of the bilateral agenda",
          body: "The Embassy expressed institutional support for the Chamber’s activities and recognised its relevance to economic relations between Brazil and Panama.",
          href: sources.brazilEmbassy2026,
        },
        {
          date: "11.05.2026",
          category: "Institutional support",
          issuer: "Embassy of Panama in Brazil · Flavio Gabriel Méndez Altamirano",
          title: "Support for the continuity of the work",
          body: "A letter addressed to Nina valuing the Chamber’s role in strengthening trade and economic ties and encouraging the continuity of its institutional work.",
          href: sources.panamaEmbassy2026,
        },
        {
          date: "27.05.2026",
          category: "Institutional recognition",
          issuer: "MICI Panama · Minister Julio A. Moltó",
          title: "Recognition and support from MICI",
          body: "The Ministry recognised the Chamber’s work in both countries and expressed institutional support for its economic and commercial relations agenda.",
          href: sources.miciLetter,
        },
      ],
    },
    protocol: {
      title: "A photograph records an agenda. It does not manufacture endorsement.",
      body: "Presidents, ministers, ambassadors and business leaders appear only when a public source documents the meeting and its purpose. The relationship belongs to the Chamber’s institutional mandate; it is not presented as personal, political, commercial or investment endorsement.",
      labels: [
        {
          title: "Source first",
          body: "The story points to the Chamber archive or the responsible public institution.",
        },
        {
          title: "Exact office",
          body: "The role and period recorded by the source are preserved without amplification.",
        },
        {
          title: "No extrapolation",
          body: "Participation, meetings or correspondence do not become influence, access or endorsement.",
        },
      ],
      note: "A permanent editorial standard for publications, press, social channels and collaborations connected with the Presidency.",
    },
    chamber: {
      title: "The full history belongs to the Chamber’s official archive.",
      body: "Nina amplifies that agenda through her personal brand and always points back to the originator, preserving the integrity of documents, recognitions and institutional activity.",
      primary: "Visit the official Chamber",
      secondary: "View the institutional profile",
    },
    footer: {
      statement: "Presidency · Institutional relationships · Brazil–Panama business agenda",
      evidence: "Claims and sources reviewed on July 23, 2026.",
      rights: "Photography remains subject to the final rights gate before publication.",
    },
  },
};

const descriptions: Record<Language, string> = {
  es: "Nina Quisinski, fundadora y presidenta de la Cámara de Comercio e Industria Brasil–Panamá: mandato, trayectoria y agenda empresarial documentada.",
  pt: "Nina Quisinski, fundadora e presidente da Câmara de Comércio e Indústria Brasil–Panamá: mandato, histórico e agenda empresarial documentada.",
  en: "Nina Quisinski, founder and president of the Brazil–Panama Chamber of Commerce and Industry: mandate, record and documented business agenda.",
};

export function chairwomanMetadata(language: Language): Metadata {
  const titles: Record<Language, string> = {
    es: "Chairwoman | Agenda empresarial Brasil–Panamá",
    pt: "Presidência | Agenda empresarial Brasil–Panamá",
    en: "Chairwoman | Brazil–Panama business agenda",
  };

  return {
    title: titles[language],
    description: descriptions[language],
    alternates: {
      canonical: chairwomanPaths[language],
      languages: {
        "es-PA": chairwomanPaths.es,
        "pt-BR": chairwomanPaths.pt,
        "en-US": chairwomanPaths.en,
        "x-default": chairwomanPaths.es,
      },
    },
    openGraph: {
      type: "profile",
      url: chairwomanPaths[language],
      title: titles[language],
      description: descriptions[language],
      images: [
        {
          url: "/images/nina-chairwoman-original.jpg",
          width: 2400,
          height: 1800,
          alt: chairwomanCopy[language].hero.alt,
        },
      ],
    },
  };
}
