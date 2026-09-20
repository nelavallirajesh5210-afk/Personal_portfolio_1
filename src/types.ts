export type PageId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'contact';

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  phone?: string;
  collegeEmail?: string;
}

export interface PersonalInfo {
  name: string;
  college: string;
  degree: string;
  status: string;
  headline: string;
  subheadline: string;
  supportingText: string;
  positioning: string;
  aboutText: string;
  careerInterests: string[];
  socials: SocialLinks;
  resumePlaceholderUrl?: string;
}

export type SkillCategory =
  | 'Programming'
  | 'Web Development'
  | 'Tools & Development'
  | 'AI & Emerging Technology';

export interface SkillItem {
  id?: string;
  name: string;
  category: SkillCategory;
  levelBadge: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem?: string;
  approach?: string;
  impactLearning?: string;
  technologies?: string[];
  isPlaceholder?: boolean;
  projectUrlPlaceholder?: string;
  githubUrlPlaceholder?: string;
  timeline?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  currentYear: string;
  academicPeriod: string;
  expectedGraduation: string;
  cgpa: string;
  coursework: string[];
  priorEducation?: {
    institution: string;
    board: string;
    period: string;
    score: string;
  }[];
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  category: string;
  issuer?: string;
  certificateId?: string;
  issueDate?: string;
  statusBadge: string;
  note: string;
  certificateLinkPlaceholder: string;
  verificationUrl?: string;
  isUpcoming?: boolean;
}

export interface PositionOfResponsibility {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

