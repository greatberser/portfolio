import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "React Native", "HTML5", "SCSS", "Tailwind CSS", "Bootstrap", "shadcn/ui"],
  },
  {
    label: "State Management",
    items: ["Redux", "Redux Toolkit"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Prisma"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Postman", "Storybook"],
  },
];
