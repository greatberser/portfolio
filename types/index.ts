export interface Project {
  title: string;
  description: string;
  features?: string[];
  contributions?: string[];
  tech: string[];
  github: string;
  live?: string;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}
