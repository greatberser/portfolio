import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Microbiome Explorer",
    description:
      "A Next.js + TypeScript application for browsing and filtering microorganisms by type and abundance.",
    features: ["Filter by type", "Sort by abundance", "Table view"],
    tech: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/greatberser/microbiome-app",
    live: "https://microbiome-app-zeta.vercel.app/",
  },
  {
    title: "SaaS Dashboard",
    description:
      "A modern SaaS dashboard interface featuring analytics, task management, and user settings, built with Next.js App Router and shadcn/ui components.",
    features: [
      "Analytics overview with interactive charts",
      "Task management with filtering, sorting, and pagination",
      "Settings page with profile and notification preferences",
      "Collapsible sidebar and responsive dark theme layout",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
    github: "https://github.com/greatberser/SaaS-Dashboard",
    live: "https://saas-dashboard-mauve-one.vercel.app/",
  },
  {
    title: "Job Application Tracker",
    description:
      "A Next.js application for managing and tracking job applications across different stages of the hiring process.",
    features: [
      "Kanban-style board with Applied, Interview, Offer, and Rejected columns",
      "Add and manage job applications with company, role, date, and notes",
      "External links to job postings and deadline warnings",
      "Live application count overview",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/greatberser/Job-Application-Tracker",
    live: "https://job-application-tracker-nine-weld.vercel.app",
  },
  {
    title: "BrushBuddy",
    description:
      "A web application focused on improving daily tooth-brushing habits with simple tracking and helpful reminders.",
    contributions: [
      "Fully developed the header component and navigation",
      "Built the \"A Little Humor\" section of the page",
      "Collaborated on implementing the filter logic and UI",
    ],
    tech: ["Vite", "React", "JavaScript", "SCSS"],
    github: "https://github.com/z9877969/brush_buddy_front",
    live: "https://brush-buddy.netlify.app",
  },
];
