import { NextResponse } from 'next/server';

const defaultHomePage = {
  _id: 'homePage',
  _type: 'homePage',
  title: { en: 'Antonio Rando', de: 'Antonio Rando', es: 'Antonio Rando' },
  description: {
    en: 'Journalist, researcher, and multimedia storyteller.',
    de: 'Journalist, Forscher und multimedialer Geschichtenerzahler.',
    es: 'Periodista, investigador y narrador multimedia.',
  },
  heroBadge: {
    en: 'Journalist & Researcher',
    de: 'Journalist und Forscher',
    es: 'Periodista e investigador',
  },
  heroHeadline: { en: 'Antonio Rando', de: 'Antonio Rando', es: 'Antonio Rando' },
  heroSubline: {
    en: 'Journalism, academic research, and multimedia storytelling.',
    de: 'Journalismus, akademische Forschung und multimediales Storytelling.',
    es: 'Periodismo, investigacion academica y narrativa multimedia.',
  },
  aboutExcerpt: {
    en: "I'm a journalist, researcher, and Doctor in History with a PhD specialized in the Balkan countries. Through journalism, academic work, and multimedia, I explore how language shapes understanding and how stories connect people.",
    de: 'Ich bin Journalist, Forscher und promovierter Historiker mit Spezialisierung auf die Balkanlander. Durch Journalismus, akademische Arbeit und Multimedia untersuche ich, wie Sprache Verstandnis formt und wie Geschichten Menschen verbinden.',
    es: 'Soy periodista, investigador y doctor en Historia con especializacion en los Balcanes. A traves del periodismo, el trabajo academico y el multimedia, exploro como el lenguaje da forma a la comprension y como las historias conectan a las personas.',
  },
  journalismExcerpt: {
    en: 'Opinion pieces, analysis, and reportage on culture, politics, and the Balkans.',
    de: 'Meinungsbeitrage, Analysen und Reportagen zu Kultur, Politik und dem Balkan.',
    es: 'Articulos de opinion, analisis y reportajes sobre cultura, politica y los Balcanes.',
  },
  researchExcerpt: {
    en: 'Academic papers, publications, and historical scholarship focused on the Balkan countries.',
    de: 'Wissenschaftliche Artikel, Publikationen und historische Forschung mit Fokus auf die Balkanlander.',
    es: 'Articulos academicos, publicaciones e investigacion historica centrada en los Balcanes.',
  },
  multimediaExcerpt: {
    en: 'Podcast episodes, video content, and multimedia storytelling.',
    de: 'Podcast-Folgen, Videoinhalte und multimediales Storytelling.',
    es: 'Episodios de podcast, contenido en video y narrativa multimedia.',
  },
};

const defaultAboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  title: { en: 'About', de: 'Uber mich', es: 'Sobre mi' },
  description: {
    en: 'Antonio Rando is a journalist, researcher, and Doctor in History with a PhD specialized in the Balkan countries.',
    de: 'Antonio Rando ist Journalist, Forscher und promovierter Historiker mit Spezialisierung auf die Balkanlander.',
    es: 'Antonio Rando es periodista, investigador y doctor en Historia con especializacion en los Balcanes.',
  },
  body: {
    en: 'Antonio Rando is a journalist, researcher, and Doctor in History with a PhD specialized in the Balkan countries. His work sits at the crossroads of journalism, academia, and multimedia storytelling. Through analysis, research, and podcasting, he explores how language shapes understanding and how stories connect us.',
    de: 'Antonio Rando ist Journalist, Forscher und promovierter Historiker mit Spezialisierung auf die Balkanlander. Seine Arbeit liegt an der Schnittstelle von Journalismus, Wissenschaft und multimedialem Storytelling. Mit Analyse, Forschung und Podcasting untersucht er, wie Sprache Verstandnis formt und wie Geschichten uns verbinden.',
    es: 'Antonio Rando es periodista, investigador y doctor en Historia con especializacion en los Balcanes. Su trabajo se ubica en la interseccion entre periodismo, academia y narrativa multimedia. A traves del analisis, la investigacion y el podcasting, explora como el lenguaje da forma a la comprension y como las historias nos conectan.',
  },
};

const defaultJournalismPage = {
  _id: 'journalismPage',
  _type: 'journalismPage',
  title: {
    en: 'Journalism & Analysis',
    de: 'Journalismus und Analyse',
    es: 'Periodismo y analisis',
  },
  description: {
    en: 'Opinion pieces, analysis, and reportage by Antonio Rando.',
    de: 'Meinungsbeitrage, Analysen und Reportagen von Antonio Rando.',
    es: 'Articulos de opinion, analisis y reportajes de Antonio Rando.',
  },
  body: { en: '', de: '', es: '' },
};

const defaultResearchPage = {
  _id: 'researchPage',
  _type: 'researchPage',
  title: {
    en: 'Academic Research',
    de: 'Akademische Forschung',
    es: 'Investigacion academica',
  },
  description: {
    en: 'Academic papers, publications, and research by Antonio Rando.',
    de: 'Wissenschaftliche Artikel, Publikationen und Forschung von Antonio Rando.',
    es: 'Articulos academicos, publicaciones e investigacion de Antonio Rando.',
  },
  body: { en: '', de: '', es: '' },
};

const defaultMultimediaPage = {
  _id: 'multimediaPage',
  _type: 'multimediaPage',
  title: {
    en: 'Multimedia & Podcast',
    de: 'Multimedia und Podcast',
    es: 'Multimedia y podcast',
  },
  description: {
    en: 'Podcast episodes, video content, and multimedia work by Antonio Rando.',
    de: 'Podcast-Folgen, Videoinhalte und multimediale Arbeiten von Antonio Rando.',
    es: 'Episodios de podcast, contenido en video y trabajo multimedia de Antonio Rando.',
  },
  body: { en: '', de: '', es: '' },
};

const defaultContactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  title: { en: 'Contact', de: 'Kontakt', es: 'Contacto' },
  description: {
    en: 'Get in touch with Antonio Rando.',
    de: 'Kontaktieren Sie Antonio Rando.',
    es: 'Ponte en contacto con Antonio Rando.',
  },
  body: {
    en: 'For inquiries about journalism, research, or collaborations, please reach out by email.',
    de: 'Fur Anfragen zu Journalismus, Forschung oder Zusammenarbeit kontaktieren Sie mich per E-Mail.',
    es: 'Para consultas sobre periodismo, investigacion o colaboraciones, escribeme por correo electronico.',
  },
  email: 'contact@example.com',
};

export async function POST(request: Request) {
  const secret =
    process.env.SEED_SECRET ||
    request.headers.get('x-seed-secret') ||
    new URL(request.url).searchParams.get('secret');
  if (!secret || secret.length < 16) {
    return NextResponse.json(
      { error: 'Missing or invalid SEED_SECRET (min 16 chars)' },
      { status: 401 }
    );
  }
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: 'Missing SANITY_API_WRITE_TOKEN' },
      { status: 500 }
    );
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
  if (!projectId || !dataset) {
    return NextResponse.json(
      { error: 'Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET' },
      { status: 500 }
    );
  }

  const mutations = [
    { createOrReplace: defaultHomePage },
    { createOrReplace: defaultAboutPage },
    { createOrReplace: defaultJournalismPage },
    { createOrReplace: defaultResearchPage },
    { createOrReplace: defaultMultimediaPage },
    { createOrReplace: defaultContactPage },
  ];

  const version = apiVersion.startsWith('v') ? apiVersion : `v${apiVersion}`;
  const url = `https://${projectId}.api.sanity.io/${version}/data/mutate/${dataset}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ mutations }),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: `Sanity mutate failed: ${res.status} ${text}` },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      'Created or updated homePage, journalismPage, researchPage, multimediaPage, aboutPage, contactPage.',
  });
}
