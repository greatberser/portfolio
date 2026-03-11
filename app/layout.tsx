import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maksym Melnychuk — Frontend Developer | Fullstack Developer | QA Manual",
  description:
    "Frontend developer with 2+ years of experience building modern web applications using React, Next.js, and TypeScript.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Maksym Melnychuk" }],
  openGraph: {
    title: "Maksym Melnychuk — Frontend Developer | Fullstack Developer | QA Manual",
    description:
      "Frontend developer with 2+ years of experience building modern web applications using React, Next.js, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maksym Melnychuk — Frontend Developer | Fullstack Developer | QA Manual",
    description:
      "Frontend developer with 2+ years of experience building modern web applications using React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
