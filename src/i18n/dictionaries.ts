import type { Locale } from '@/i18n/config';

export type SiteDictionary = {
  nav: {
    journalism: string;
    research: string;
    multimedia: string;
    about: string;
    contact: string;
    mainAriaLabel: string;
  };
  footer: {
    tagline: string;
    contact: string;
  };
  common: {
    work: string;
    untitled: string;
    minutesShort: string;
  };
  home: {
    aboutHeading: string;
    heroBadge: string;
    heroSubline: string;
    aboutExcerpt: string;
    aboutHighlightOne: string;
    aboutHighlightTwo: string;
    aboutHighlightThree: string;
    aboutCta: string;
    journalismExcerpt: string;
    researchExcerpt: string;
    multimediaExcerpt: string;
    journalismCardTitle: string;
    researchCardTitle: string;
    multimediaCardTitle: string;
  };
  about: {
    title: string;
    description: string;
    body: string;
  };
  journalism: {
    title: string;
    description: string;
  };
  research: {
    title: string;
    description: string;
  };
  multimedia: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    body: string;
  };
};

const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    nav: {
      journalism: 'Journalism',
      research: 'Research',
      multimedia: 'Multimedia',
      about: 'About',
      contact: 'Contact',
      mainAriaLabel: 'Main',
    },
    footer: {
      tagline: 'Journalist & Researcher',
      contact: 'Contact',
    },
    common: {
      work: 'Publications',
      untitled: 'Untitled',
      minutesShort: 'min',
    },
    home: {
      aboutHeading: 'About',
      heroBadge: 'Journalist & Researcher',
      heroSubline:
        'Journalism, academic research, and multimedia storytelling.',
      aboutExcerpt:
        "I'm a journalist, researcher, and Doctor in History with a PhD specialized in the Balkan countries. Through journalism, academic work, and multimedia, I explore how language shapes understanding and how stories connect people.",
      aboutHighlightOne:
        'I work across journalism, scholarship, and teaching to connect complex topics with public conversation.',
      aboutHighlightTwo:
        'My focus includes Balkan history, political culture, and the narratives that shape collective memory.',
      aboutHighlightThree:
        'Each project combines rigorous research with clear storytelling for readers, students, and broader audiences.',
      aboutCta: 'Read full profile',
      journalismExcerpt:
        'Opinion pieces, analysis, and reportage on culture, politics, and the Balkans.',
      researchExcerpt:
        'Academic papers, publications, and historical scholarship focused on the Balkan countries.',
      multimediaExcerpt:
        'Podcast episodes, video content, and multimedia storytelling.',
      journalismCardTitle: 'Journalism & Analysis',
      researchCardTitle: 'Academic Research',
      multimediaCardTitle: 'Multimedia & Podcast',
    },
    about: {
      title: 'About',
      description:
        'Antonio Rando is a writer, teacher, and Doctor in History with a PhD specialized in the Balkan countries.',
      body: 'Antonio Rando is a writer, teacher, and Doctor in History with a PhD specialized in the Balkan countries. His work sits at the crossroads of literature, education, and historical scholarship. Through essays, fiction, and teaching, he explores how language shapes understanding and how stories connect us.',
    },
    journalism: {
      title: 'Journalism & Analysis',
      description: 'Opinion pieces, analysis, and reportage by Antonio Rando.',
    },
    research: {
      title: 'Academic Research',
      description:
        'Academic papers, publications, and research by Antonio Rando.',
    },
    multimedia: {
      title: 'Multimedia & Podcast',
      description:
        'Podcast episodes, video content, and multimedia work by Antonio Rando.',
    },
    contact: {
      title: 'Contact',
      description: 'Get in touch with Antonio Rando.',
      body: 'For inquiries about writing, teaching, or collaborations, please reach out by email.',
    },
  },
  de: {
    nav: {
      journalism: 'Journalismus',
      research: 'Forschung',
      multimedia: 'Multimedia',
      about: 'Uber mich',
      contact: 'Kontakt',
      mainAriaLabel: 'Hauptnavigation',
    },
    footer: {
      tagline: 'Journalist und Forscher',
      contact: 'Kontakt',
    },
    common: {
      work: 'Veröffentlichungen',
      untitled: 'Ohne Titel',
      minutesShort: 'Min',
    },
    home: {
      aboutHeading: 'Uber mich',
      heroBadge: 'Journalist und Forscher',
      heroSubline:
        'Journalismus, akademische Forschung und multimediales Storytelling.',
      aboutExcerpt:
        'Ich bin Journalist, Forscher und promovierter Historiker mit Spezialisierung auf die Balkanlander. Durch Journalismus, akademische Arbeit und Multimedia untersuche ich, wie Sprache Verstandnis formt und wie Geschichten Menschen verbinden.',
      aboutHighlightOne:
        'Ich verbinde Journalismus, Forschung und Lehre, um komplexe Themen fur ein breites Publikum zuganglich zu machen.',
      aboutHighlightTwo:
        'Mein Schwerpunkt liegt auf Balkan-Geschichte, politischer Kultur und den Erzahlungen, die kollektive Erinnerung pragen.',
      aboutHighlightThree:
        'Jedes Projekt verbindet wissenschaftliche Strenge mit klarer Sprache fur Leserinnen, Leser und Studierende.',
      aboutCta: 'Ganzes Profil lesen',
      journalismExcerpt:
        'Meinungsbeitrage, Analysen und Reportagen zu Kultur, Politik und dem Balkan.',
      researchExcerpt:
        'Wissenschaftliche Artikel, Publikationen und historische Forschung mit Fokus auf die Balkanlander.',
      multimediaExcerpt:
        'Podcast-Folgen, Videoinhalte und multimediales Storytelling.',
      journalismCardTitle: 'Journalismus und Analyse',
      researchCardTitle: 'Akademische Forschung',
      multimediaCardTitle: 'Multimedia und Podcast',
    },
    about: {
      title: 'Uber mich',
      description:
        'Antonio Rando ist Autor, Dozent und promovierter Historiker mit Spezialisierung auf die Balkanlander.',
      body: 'Antonio Rando ist Autor, Dozent und promovierter Historiker mit Spezialisierung auf die Balkanlander. Seine Arbeit liegt an der Schnittstelle von Literatur, Bildung und Geschichtswissenschaft. Mit Essays, Erzahlungen und Lehre untersucht er, wie Sprache Verstandnis formt und wie Geschichten uns verbinden.',
    },
    journalism: {
      title: 'Journalismus und Analyse',
      description:
        'Meinungsbeitrage, Analysen und Reportagen von Antonio Rando.',
    },
    research: {
      title: 'Akademische Forschung',
      description:
        'Wissenschaftliche Artikel, Publikationen und Forschung von Antonio Rando.',
    },
    multimedia: {
      title: 'Multimedia und Podcast',
      description:
        'Podcast-Folgen, Videoinhalte und multimediale Arbeiten von Antonio Rando.',
    },
    contact: {
      title: 'Kontakt',
      description: 'Kontaktieren Sie Antonio Rando.',
      body: 'Fur Anfragen zu Schreiben, Lehre oder Zusammenarbeit kontaktieren Sie mich per E-Mail.',
    },
  },
  es: {
    nav: {
      journalism: 'Periodismo',
      research: 'Investigacion',
      multimedia: 'Multimedia',
      about: 'Sobre mi',
      contact: 'Contacto',
      mainAriaLabel: 'Principal',
    },
    footer: {
      tagline: 'Periodista e investigador',
      contact: 'Contacto',
    },
    common: {
      work: 'Publicaciones',
      untitled: 'Sin titulo',
      minutesShort: 'min',
    },
    home: {
      aboutHeading: 'Sobre mi',
      heroBadge: 'Periodista e investigador',
      heroSubline:
        'Periodismo, investigacion academica y narrativa multimedia.',
      aboutExcerpt:
        'Soy periodista, investigador y doctor en Historia con especializacion en los Balcanes. A traves del periodismo, el trabajo academico y el multimedia, exploro como el lenguaje da forma a la comprension y como las historias conectan a las personas.',
      aboutHighlightOne:
        'Trabajo entre periodismo, investigacion y docencia para acercar temas complejos al debate publico.',
      aboutHighlightTwo:
        'Me centro en la historia de los Balcanes, la cultura politica y los relatos que moldean la memoria colectiva.',
      aboutHighlightThree:
        'Cada proyecto combina rigor academico con narrativa clara para lectores, estudiantes y audiencias amplias.',
      aboutCta: 'Ver perfil completo',
      journalismExcerpt:
        'Articulos de opinion, analisis y reportajes sobre cultura, politica y los Balcanes.',
      researchExcerpt:
        'Articulos academicos, publicaciones e investigacion historica centrada en los Balcanes.',
      multimediaExcerpt:
        'Episodios de podcast, contenido en video y narrativa multimedia.',
      journalismCardTitle: 'Periodismo y analisis',
      researchCardTitle: 'Investigacion academica',
      multimediaCardTitle: 'Multimedia y podcast',
    },
    about: {
      title: 'Sobre mi',
      description:
        'Antonio Rando es escritor, docente y doctor en Historia con especializacion en los Balcanes.',
      body: 'Antonio Rando es escritor, docente y doctor en Historia con especializacion en los Balcanes. Su trabajo se ubica en la interseccion entre literatura, educacion e investigacion historica. A traves de ensayos, ficcion y docencia, explora como el lenguaje da forma a la comprension y como las historias nos conectan.',
    },
    journalism: {
      title: 'Periodismo y analisis',
      description:
        'Articulos de opinion, analisis y reportajes de Antonio Rando.',
    },
    research: {
      title: 'Investigacion academica',
      description:
        'Articulos academicos, publicaciones e investigacion de Antonio Rando.',
    },
    multimedia: {
      title: 'Multimedia y podcast',
      description:
        'Episodios de podcast, contenido en video y trabajo multimedia de Antonio Rando.',
    },
    contact: {
      title: 'Contacto',
      description: 'Ponte en contacto con Antonio Rando.',
      body: 'Para consultas sobre escritura, docencia o colaboraciones, escribeme por correo electronico.',
    },
  },
};

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale];
}
