export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  techPills: string[];
  category: "ml" | "genai" | "webdev";
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  badge?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  score?: string;
  certificateUrl?: string;
  badge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
}

export interface NavLink {
  label: string;
  href: string;
}
