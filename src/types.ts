export type ProjectCategory = 'all' | 'fullstack' | 'systems' | 'ai-data' | 'devtools';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured: boolean;
  year: string;
  role: string;
  duration: string;
  clientOrOrg?: string;
  tags: string[];
  metrics: ProjectMetric[];
  heroImage: string;
  architectureHighlights: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyAvailable?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    years: number;
    description: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  inquiryType: 'project' | 'hiring' | 'consulting' | 'speaking' | 'other';
  budgetTimeline?: string;
  message: string;
}

export interface SubmissionReceipt {
  id: string;
  data: ContactFormData;
  timestamp: string;
}
