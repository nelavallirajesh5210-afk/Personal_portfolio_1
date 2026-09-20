import {
  PersonalInfo,
  SkillItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  PositionOfResponsibility,
} from '../types';

/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION - MUPPALLA SPOORTHY
 * ============================================================================
 * Accurate academic, resume, and certification information
 */

export const personalInfo: PersonalInfo = {
  name: 'Muppalla Spoorthy',
  college: 'KL University, Vaddeswaram',
  degree: 'B.Tech – Computer Science & Engineering',
  status: '2nd Year B.Tech Student',
  headline: 'MUPALLA SPOORTHY',
  subheadline: 'Computer Science Student • Exploring AI • Data • Web',
  supportingText:
    "2nd-year B.Tech Computer Science and Engineering student at KL University, Vaddeswaram. Excited to explore new AI trends and emerging technologies while continuously improving programming, problem-solving, and development skills.",
  positioning:
    'Aspiring AI Engineer exploring the convergence of intelligent models, statistical data science, and modern digital engineering.',
  aboutText:
    "I am a 2nd-year B.Tech Computer Science and Engineering student at KL University, Vaddeswaram. I'm excited to explore new AI trends and emerging technologies while continuously improving my programming, problem-solving, and development skills.\n\nMy current career interests span AI Engineering, Data Science, and Full-Stack Development.",
  careerInterests: [
    'AI Engineering',
    'Data Science',
    'Full-Stack Development',
  ],
  socials: {
    email: 'spoorthychowdhary14@gmail.com',
    github: 'https://github.com/spoorthyChowdary17',
    linkedin: 'https://www.linkedin.com/in/spoorthy-muppalla-2b0a8b416/',
    phone: '+91-9014609948',
    collegeEmail: '2500031279@kluniversity.in',
  },
  resumePlaceholderUrl: '/resume.pdf',
};

export const careerDirections = [
  {
    num: '01',
    title: 'AI ENGINEERING',
    shortCode: 'AI / AGENTIC SYSTEMS',
    description:
      'Exploring modern AI paradigms, prompt engineering, generative architectures, and intelligent workflows to bridge the gap between computational models and real-world utility.',
    focusAreas: ['Generative AI', 'Prompt Engineering', 'AI Trends & Architectures', 'Intelligent Workflows'],
  },
  {
    num: '02',
    title: 'DATA SCIENCE',
    shortCode: 'DATA & PATTERNS',
    description:
      'Deepening mathematical intuition, pattern discovery, and predictive analytics using Python, data structures, and core machine learning fundamentals.',
    focusAreas: ['Python Analytics', 'ML Fundamentals', 'Data Exploration', 'Algorithmic Problem Solving'],
  },
  {
    num: '03',
    title: 'FULL-STACK DEVELOPMENT',
    shortCode: 'WEB & ARCHITECTURE',
    description:
      'Designing clean, accessible web interfaces with modern HTML/CSS/JavaScript and React, integrated with modular, scalable backend structures and APIs.',
    focusAreas: ['Modern JavaScript', 'Modular UI / UX', 'Clean Architecture', 'REST & Git Workflows'],
  },
];

export const skillsData: SkillItem[] = [
  // Programming
  {
    id: 'prog-python',
    name: 'Python',
    category: 'Programming',
    levelBadge: 'Core Language',
    description: 'Applied for scripting, data manipulation, algorithm practice, and AI/ML exploration.',
    iconName: 'Terminal',
  },
  {
    id: 'prog-c',
    name: 'C',
    category: 'Programming',
    levelBadge: 'Foundational Language',
    description: 'Structured programming, memory management principles, and algorithmic problem solving.',
    iconName: 'Code',
  },
  {
    id: 'prog-java',
    name: 'Java',
    category: 'Programming',
    levelBadge: 'Object-Oriented',
    description: 'Object-oriented programming concepts, modular architecture, and class hierarchies.',
    iconName: 'Cpu',
  },
  {
    id: 'prog-javascript',
    name: 'JavaScript',
    category: 'Programming',
    levelBadge: 'Modern Scripting',
    description: 'Modern ES6+ syntax, asynchronous programming, and application logic.',
    iconName: 'FileCode',
  },

  // Web Development
  {
    id: 'web-html',
    name: 'HTML',
    category: 'Web Development',
    levelBadge: 'Semantic Structure',
    description: 'Accessible DOM architecture, clean document layout, and semantic elements.',
    iconName: 'Layout',
  },
  {
    id: 'web-css',
    name: 'CSS',
    category: 'Web Development',
    levelBadge: 'Responsive Styling',
    description: 'Responsive styling, Flexbox, CSS Grid layouts, and modern visual design principles.',
    iconName: 'Palette',
  },

  // Tools & Version Control
  {
    id: 'tool-git',
    name: 'Git',
    category: 'Tools & Development',
    levelBadge: 'Version Control',
    description: 'Distributed version control, branch management, code history, and commits.',
    iconName: 'GitBranch',
  },
  {
    id: 'tool-github',
    name: 'GitHub',
    category: 'Tools & Development',
    levelBadge: 'Code Collaboration',
    description: 'Remote repository hosting, project tracking, documentation, and open-source practices.',
    iconName: 'Github',
  },

  // AI & Emerging Technology
  {
    id: 'ai-prompt-engineering',
    name: 'Prompt Engineering',
    category: 'AI & Emerging Technology',
    levelBadge: 'AI Interaction',
    description: 'Formulating structured, context-rich, and iterative prompts for generative AI models.',
    iconName: 'MessageSquareCode',
  },
  {
    id: 'ai-artificial-intelligence',
    name: 'Artificial Intelligence',
    category: 'AI & Emerging Technology',
    levelBadge: 'Core Exploration',
    description: 'Studying intelligent agents, neural paradigms, and real-world AI applications.',
    iconName: 'Bot',
  },
  {
    id: 'ai-machine-learning-fundamentals',
    name: 'Machine Learning Fundamentals',
    category: 'AI & Emerging Technology',
    levelBadge: 'Foundational Theory',
    description: 'Understanding supervised and unsupervised learning patterns, training datasets, and metrics.',
    iconName: 'BrainCircuit',
  },
];

export const currentlyLearningItems = [
  'AI trends & generative systems',
  'Machine Learning fundamentals',
  'Modern web development & responsive UI',
  'Algorithmic problem solving in C & Python',
  'Prompt engineering & model interactions',
];

export const projectsData: ProjectItem[] = [
  {
    id: 'smart-village-waste-management',
    title: 'SMART VILLAGE / WASTE MANAGEMENT',
    category: 'Academic / Community',
    tagline: 'Practical approaches to improve waste-management awareness and sanitation',
    description:
      'A community-focused academic project addressing open dumping of waste and exploring practical approaches to improve waste-management awareness and sanitation.',
    problem:
      'Open dumping and indiscriminate waste disposal in rural communities lead to environmental contamination, water pollution, vector breeding grounds, and hazardous public health risks.',
    approach:
      'Conducted grassroots field assessments, surveyed community waste disposal habits, and developed practical proposals for categorized disposal points, systematic collection schedules, and civic cleanliness education.',
    impactLearning:
      'Gained first-hand understanding of grassroots environmental challenges, structured field observation, data collection, and civic problem solving.',
    technologies: [
      'Community Fieldwork',
      'Waste Management Frameworks',
      'Sanitation Best Practices',
      'Civic Awareness Strategy',
    ],
    projectUrlPlaceholder: '#',
    githubUrlPlaceholder: 'https://github.com/spoorthyChowdary17',
  },
];

export const educationData: EducationItem = {
  institution: 'KL University, Vaddeswaram',
  location: 'Vaddeswaram, Andhra Pradesh, India',
  degree: 'B.Tech – Computer Science & Engineering',
  currentYear: '2nd Year',
  academicPeriod: '2025–2029',
  expectedGraduation: '2029',
  cgpa: '8.72 / 10',
  coursework: [
    'Data Structures & Algorithms',
    'Python Programming',
    'C Programming',
    'Database Management Systems',
    'Operating Systems',
    'Web Development',
  ],
  priorEducation: [
    {
      institution: 'Narayana Junior College',
      board: 'State Board, Andhra Pradesh',
      period: '2023–2025',
      score: '9.84 / 10 (98.4%)',
    },
    {
      institution: 'Narayana School',
      board: 'State Board, Andhra Pradesh',
      period: '2022–2023',
      score: '9.0 / 10 (90%)',
    },
  ],
  highlights: [
    'Strong academic foundation across core computational sciences and laboratory programming',
    'Class Representative, Department of Computer Science & Engineering (Aug 2026 – Present)',
    'Event Coordinator, KLU Technical Fest (Mar 2027)',
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    id: 'python-cert',
    title: 'Python Certification',
    category: 'Programming',
    issuer: 'SoloLearn',
    certificateId: 'CC-KWF3VUPQ',
    issueDate: 'June 2024',
    statusBadge: 'Verified Certificate',
    note: 'Demonstrated theoretical and practical understanding of core Python, functions, control structures, and programmatic problem-solving.',
    certificateLinkPlaceholder: 'https://www.sololearn.com/certificates/CC-KWF3VUPQ',
    verificationUrl: 'https://www.sololearn.com/certificates/CC-KWF3VUPQ',
  },
];

export const positionsOfResponsibility: PositionOfResponsibility[] = [
  {
    title: 'Class Representative',
    organization: 'Department of Computer Science, KL University',
    period: 'Aug 2026 – Present',
    description:
      'Serving as the academic liaison between faculty and peers, facilitating clear communication and organizing departmental updates.',
  },
  {
    title: 'Event Coordinator',
    organization: 'KLU Technical Fest',
    period: 'Mar 2027',
    description:
      'Coordinating logistics, student participation, and session facilitation for inter-college technical hackathons and workshops.',
  },
];
