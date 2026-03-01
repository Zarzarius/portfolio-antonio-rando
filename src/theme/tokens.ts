/**
 * Design tokens — Antonio Rando Portfolio (JS/TS)
 * Mirrors tokens from Pencil design for use in components and inline styles.
 */

export const tokens = {
  color: {
    bgPage: "#FAFAF7",
    bgWarm: "#F0EBE3",
    bgCard: "#FFFFFF",
    textPrimary: "#0F0F0F",
    textSecondary: "#666666",
    textMuted: "#999999",
    accent: "#C41E3A",
    footerBg: "#0F0F0F",
    footerText: "#FAFAF7",
  },
  font: {
    display: '"Cormorant Garamond", Georgia, serif',
    body: '"Inter", system-ui, sans-serif',
    size: {
      hero: 64,
      title: 28,
      subline: 24,
      body: 16,
      bodySm: 14,
      caption: 13,
      label: 12,
      logo: 24,
    },
    weight: {
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      body: 1.5,
    },
    letterSpacing: {
      hero: -2,
      badge: 1,
    },
  },
  spacing: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 64,
    "4xl": 80,
    "5xl": 100,
    sectionX: 120,
    sectionY: 64,
    headerY: 24,
    headerX: 56,
    heroY: 100,
    footerY: 48,
    card: 24,
    hero: 28,
    section: 20,
    grid: 24,
    nav: 32,
  },
  accentBar: {
    width: 64,
    height: 3,
  },
  maxWidth: {
    body: 720,
    narrow: 640,
    heroText: 560,
    cardText: 280,
  },
} as const;

export type ThemeTokens = typeof tokens;
