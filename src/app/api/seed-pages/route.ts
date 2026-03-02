import { NextResponse } from 'next/server';

const defaultHomePage = {
  _id: 'homePage',
  _type: 'homePage',
  title: 'Antonio Rando',
  description: 'Writer and teacher. Author and educator.',
  heroBadge: 'Writer & Teacher',
  heroHeadline: 'Antonio Rando',
  heroSubline: 'Words that teach, stories that stay. Author and educator.',
  aboutExcerpt:
    "I'm a writer and teacher, with a focus on Balkan history. I teach Spanish in Germany and collaborate with different digital blogs for opinion pieces and networking. Through essays, fiction, and teaching, I explore how language shapes understanding and how stories connect people.",
  writingIntro: '',
  teachingExcerpt:
    'I teach Spanish in Germany and bring the same care for language and narrative into the classroom. Workshops, courses, and one-to-one mentoring for writers and educators.',
};

const defaultAboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  title: 'About',
  description:
    'Antonio Rando is a writer, teacher, and Doctor in History with a PhD specialized in the Balkan countries.',
  body:
    'Antonio Rando is a writer, teacher, and Doctor in History with a PhD specialized in the Balkan countries. His work sits at the crossroads of literature, education, and historical scholarship. Through essays, fiction, and teaching, he explores how language shapes understanding and how stories connect us.',
};

const defaultWritingPage = {
  _id: 'writingPage',
  _type: 'writingPage',
  title: 'Writing',
  description: 'Essays, fiction, and publications by Antonio Rando.',
  body: null,
};

const defaultTeachingPage = {
  _id: 'teachingPage',
  _type: 'teachingPage',
  title: 'Teaching',
  description:
    'Workshops, courses, and one-to-one mentoring for writers and educators.',
  body:
    'Antonio brings the same care for language and narrative into the classroom. Workshops, courses, and one-to-one mentoring for writers and educators.',
};

const defaultContactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  title: 'Contact',
  description: 'Get in touch with Antonio Rando.',
  body:
    'For inquiries about writing, teaching, or collaborations, please reach out by email.',
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
    { createOrReplace: defaultWritingPage },
    { createOrReplace: defaultTeachingPage },
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
      'Created or updated homePage, writingPage, teachingPage, aboutPage, contactPage.',
  });
}
