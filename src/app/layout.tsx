import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../theme/tokens.scss";
import "./globals.css";

const fontDisplay = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Antonio Rando — Portfolio",
  description: "Portfolio of Antonio Rando: design and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontDisplay.variable} ${fontBody.variable}`}>
        {children}
      </body>
    </html>
  );
}
