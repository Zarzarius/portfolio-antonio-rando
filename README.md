# Antonio Rando — Portfolio

Personal portfolio site for **Antonio Rando**: writer, teacher, and Doctor in History (PhD specialized in the Balkan countries). The site presents his work at the crossroads of literature, education, and historical scholarship—essays, fiction, teaching, and publications.

## Description

A modern, accessible single-page-style site built with Next.js. It highlights Antonio’s identity as **Writer & Teacher** and his focus on how language shapes understanding and how stories connect people. Sections include a hero, about, writing (essays, fiction, publications), teaching (workshops, courses, mentoring), and contact.

**Pages:**

- **Home** — Hero, short about, writing preview, teaching preview
- **About** — Full bio and background
- **Writing** — Essays, articles, fiction, and publications
- **Teaching** — Workshops, courses, and one-to-one mentoring
- **Contact** — Get in touch

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Sass** (SCSS) for styling, with design tokens in `src/theme/`
- **clsx** for conditional class names
- **Fonts:** Cormorant Garamond (display), Inter (body), via `next/font`

## Getting Started

Install dependencies (this project uses [pnpm](https://pnpm.io)):

```bash
pnpm install
```

Copy `.env.example` to `.env.local` (if present) and set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` so the app and build can reach Sanity.

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Sanity Studio is at [http://localhost:3000/studio](http://localhost:3000/studio).

## Scripts

| Command   | Description              |
| --------- | ------------------------ |
| `pnpm dev`   | Start dev server         |
| `pnpm build` | Build for production     |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |

## Seeding page content (Sanity)

The site has five editable page singletons in Sanity (Home, Writing, Teaching, About, Contact). To create or reset them with default copy:

1. In Sanity Manage, create an API token with **Editor** (or write) access and set `SANITY_API_WRITE_TOKEN` in `.env.local`.
2. Set `SEED_SECRET` to a long random string (e.g. 16+ chars) in `.env.local`.
3. With the dev server running, run:
   ```bash
   curl -X POST "http://localhost:3000/api/seed-pages?secret=YOUR_SEED_SECRET"
   ```
   Or send `x-seed-secret: YOUR_SEED_SECRET` and `POST /api/seed-pages`.

Alternatively, open **Sanity Studio** at `/studio`, go to **Pages** and open each of Home, Writing, Teaching, About, Contact. The first time you open each, the document is created with that fixed ID; you can then edit content there. The site uses fallback copy until content exists.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── writing/page.tsx
│   ├── teaching/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   └── layout.module.scss
└── theme/
    ├── tokens.ts
    └── tokens.scss         # Design tokens (colors, spacing, etc.)
```

## License

Private project. All rights reserved.
