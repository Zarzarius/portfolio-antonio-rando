# Antonio F. Rando Casermeiro — Portfolio

Personal portfolio site for **Antonio F. Rando Casermeiro**: writer, teacher, and Doctor in History (PhD specialized in the Balkan countries). The site presents his work at the crossroads of literature, education, and historical scholarship—essays, fiction, teaching, and publications.

## Description

A modern, accessible site built with Next.js and Sanity. It highlights Antonio's identity as writer, teacher, and Doctor in History, with content focused on language, historical scholarship, and storytelling.

**Pages:**

- **Home** — Hero, short bio, and featured content
- **About** — Full bio and background
- **Journalism** — Essays, articles, and analysis
- **Research** — Academic work and publications
- **Multimedia** — Podcasts and audiovisual projects
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

| Command      | Description             |
| ------------ | ----------------------- |
| `pnpm dev`   | Start dev server        |
| `pnpm build` | Build for production    |
| `pnpm start` | Start production server |
| `pnpm lint`  | Run ESLint              |

## Routes

The app uses locale-prefixed routes:

- `/{locale}` (home)
- `/{locale}/about`
- `/{locale}/journalism`
- `/{locale}/research`
- `/{locale}/multimedia`
- `/{locale}/contact`

Sanity Studio is available at `/studio`.

## Project Structure

```
src/
├── app/                             # Next.js App Router
│   ├── [locale]/(site)/             # Locale-prefixed site routes
│   │   ├── page.tsx                 # Home
│   │   ├── about/page.tsx
│   │   ├── journalism/page.tsx
│   │   ├── research/page.tsx
│   │   ├── multimedia/page.tsx
│   │   └── contact/page.tsx
│   ├── studio/[[...tool]]/page.tsx # Embedded Sanity Studio
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   └── layout.module.scss
└── theme/
    ├── tokens.ts           # Token exports for TypeScript usage
    └── tokens.scss         # Design tokens (colors, spacing, etc.)
```

## License

Private project. All rights reserved.
