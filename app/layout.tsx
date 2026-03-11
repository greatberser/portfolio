import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maksym Melnychuk — Frontend Developer | Fullstack Developer | QA Manual",
  description:
    "Frontend Developer | Fullstack Developer | QA Manual — 2+ years of experience building modern web applications using React, Next.js, TypeScript, Node.js, and Prisma.",
  keywords: ["Frontend Developer", "Fullstack Developer", "QA Manual", "React", "Next.js", "TypeScript", "Node.js", "Prisma", "Portfolio"],
  authors: [{ name: "Maksym Melnychuk" }],
  openGraph: {
    title: "Maksym Melnychuk — Frontend Developer | Fullstack Developer | QA Manual",
    description:
      "Frontend Developer | Fullstack Developer | QA Manual — 2+ years of experience building modern web applications using React, Next.js, TypeScript, Node.js, and Prisma.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maksym Melnychuk — Frontend Developer | Fullstack Developer | QA Manual",
    description:
      "Frontend Developer | Fullstack Developer | QA Manual — 2+ years of experience building modern web applications using React, Next.js, TypeScript, Node.js, and Prisma.",
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
