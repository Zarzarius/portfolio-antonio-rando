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

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command   | Description              |
| --------- | ------------------------ |
| `pnpm dev`   | Start dev server         |
| `pnpm build` | Build for production     |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |

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
