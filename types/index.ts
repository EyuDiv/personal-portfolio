export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  imageGradient: string;
}

export interface Skill {
  name: string;
  percentage: number;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Stat {
  label: string;
  value: string;
  iconName: string;
  description: string;
}
