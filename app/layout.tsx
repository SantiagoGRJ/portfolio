import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Gomez | Portfolio",
  description:
    "Portfolio de Santiago Javier Gomez Rojas, Ingeniero de Software enfocado en Back-End y Front-End",
  creator: "Santiago Javier Gomez Rojas",
  openGraph: {
    title: "Santiago Gomez | Portfolio",
    description:
      "Portfolio de Santiago Javier Gomez Rojas, Ingeniero de Software enfocado en Back-End y Front-End",
    url: "https://portfolio-santiago-javier-gomez-rojas-projects.vercel.app/", 
    siteName: "Santiago Gomez | Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Santiago Gomez | Portfolio",
    description: "Desarrollador Full Stack en aplicaciones web.",
    creator: "@SantiagoGRJ1", 
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
