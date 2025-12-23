/* ================= COMMON CONTENT GENERATORS ================= */

const generateCourseContent = (title) => [
  `${title} is a professionally designed course focused on real-world application.`,
  `The course follows industry-aligned learning standards.`,
  `Concepts are explained from beginner to advanced level.`,
  `Real-life examples are used throughout the course.`,
  `Hands-on learning is emphasized for better understanding.`,
  `Each lesson builds logically on previous topics.`,
  `Industry tools and workflows are introduced.`,
  `The course focuses on clean, maintainable development practices.`,
  `Problem-solving skills are improved step-by-step.`,
  `Mini projects reinforce practical understanding.`,
  `The learning structure supports self-paced study.`,
  `Professional coding standards are followed.`,
  `Learners gain confidence to work independently.`,
  `Interview-focused topics are covered.`,
  `Performance and scalability are discussed.`,
  `Real project scenarios are explained.`,
  `The course improves analytical thinking.`,
  `Best practices used in companies are shared.`,
  `This course prepares learners for advanced technologies.`,
  `Overall, ${title} provides complete professional-level training.`
];

const generateSkills = (title) => [
  `Strong understanding of ${title} core concepts`,
  `Ability to build real-world applications`,
  `Problem-solving and logical thinking skills`,
  `Industry-ready development practices`,
  `Confidence to work on professional projects`
];

const generatePrerequisites = () => [
  "Basic computer knowledge",
  "Interest in software development",
  "Logical thinking ability",
  "Willingness to practice",
  "No prior professional experience required"
];

const generateCareerPath = (title) => [
  `${title} Developer`,
  "Frontend / Backend Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Technical Lead (with experience)"
];

/* ================= COURSES DATA ================= */

const coursesData = [
  {
    id: 101,
    title: "HTML & CSS Mastery",
    shortDesc: "Build real-world websites using modern HTML5 and CSS3.",
    description: "Learn responsive, accessible, and production-ready web design.",
    longContent: generateCourseContent("HTML & CSS Mastery"),
    skills: generateSkills("HTML & CSS"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Web Designer",
      "Frontend Developer",
      "UI Developer",
      "Senior Frontend Engineer",
      "UI Architect"
    ],
    lessons: [
      { title: "HTML5 Basics", content: "Semantic structure and best practices." },
      { title: "CSS Fundamentals", content: "Box model and styling." },
      { title: "Flexbox", content: "Responsive layouts." },
      { title: "Grid", content: "Advanced layouts." },
      { title: "Project", content: "Build responsive website." }
    ]
  },

  {
    id: 102,
    title: "JavaScript Zero to Advanced",
    shortDesc: "Master JavaScript fundamentals and advanced concepts.",
    description: "Covers ES6+, DOM, async programming, and APIs.",
    longContent: generateCourseContent("JavaScript Zero to Advanced"),
    skills: generateSkills("JavaScript"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "JavaScript Developer",
      "Frontend Developer",
      "Full Stack Developer",
      "Senior JS Engineer",
      "Technical Architect"
    ],
    lessons: []
  },

  {
    id: 103,
    title: "React Pro Bootcamp",
    shortDesc: "Build scalable and modern React applications.",
    description: "Learn components, hooks, routing, and best practices.",
    longContent: generateCourseContent("React Pro Bootcamp"),
    skills: generateSkills("React"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "React Developer",
      "Frontend Engineer",
      "UI Architect",
      "Senior React Engineer",
      "Technical Lead"
    ],
    lessons: []
  },

  {
    id: 104,
    title: "Material UI Complete Guide",
    shortDesc: "Design premium UI using Material UI.",
    description: "Learn theming, components, and dashboards.",
    longContent: generateCourseContent("Material UI Complete Guide"),
    skills: generateSkills("Material UI"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "UI Developer",
      "Frontend Developer",
      "Design Engineer",
      "Senior UI Engineer",
      "UI Architect"
    ],
    lessons: []
  },

  {
    id: 105,
    title: "Node.js Backend Development",
    shortDesc: "Server-side development using Node.js.",
    description: "Learn backend APIs and architecture.",
    longContent: generateCourseContent("Node.js Backend Development"),
    skills: generateSkills("Node.js"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Backend Developer",
      "API Developer",
      "Full Stack Developer",
      "Senior Backend Engineer",
      "System Architect"
    ],
    lessons: []
  },

  {
    id: 106,
    title: "MongoDB & NoSQL",
    shortDesc: "Work with NoSQL databases professionally.",
    description: "CRUD operations and schema design.",
    longContent: generateCourseContent("MongoDB & NoSQL"),
    skills: generateSkills("MongoDB"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Database Developer",
      "Backend Engineer",
      "Data Engineer",
      "Senior Backend Engineer",
      "Database Architect"
    ],
    lessons: []
  },

  {
    id: 107,
    title: "MERN Stack Development",
    shortDesc: "Become a full stack MERN developer.",
    description: "MongoDB, Express, React, Node.js.",
    longContent: generateCourseContent("MERN Stack Development"),
    skills: generateSkills("MERN Stack"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "MERN Developer",
      "Full Stack Developer",
      "Software Engineer",
      "Senior Full Stack Engineer",
      "Technical Lead"
    ],
    lessons: []
  },

  {
    id: 108,
    title: "Git & GitHub Essentials",
    shortDesc: "Version control and collaboration.",
    description: "Learn Git workflows and best practices.",
    longContent: generateCourseContent("Git & GitHub Essentials"),
    skills: generateSkills("Git & GitHub"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Software Developer",
      "Team Lead",
      "DevOps Engineer",
      "Release Manager",
      "Engineering Manager"
    ],
    lessons: []
  },

  {
    id: 109,
    title: "TypeScript for React",
    shortDesc: "Build type-safe React applications.",
    description: "TypeScript with React integration.",
    longContent: generateCourseContent("TypeScript for React"),
    skills: generateSkills("TypeScript"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "React Developer",
      "Frontend Engineer",
      "TypeScript Specialist",
      "Senior Engineer",
      "Architect"
    ],
    lessons: []
  },

  {
    id: 110,
    title: "Redux Toolkit Mastery",
    shortDesc: "Advanced state management in React.",
    description: "Global state using Redux Toolkit.",
    longContent: generateCourseContent("Redux Toolkit Mastery"),
    skills: generateSkills("Redux Toolkit"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Frontend Developer",
      "React Engineer",
      "Senior Frontend Engineer",
      "State Management Expert",
      "Technical Lead"
    ],
    lessons: []
  },

  /* ========= REMAINING 10 COURSES ========= */

  {
    id: 111,
    title: "Next.js Fundamentals",
    shortDesc: "Production-ready React apps.",
    description: "SSR, routing, and SEO optimization.",
    longContent: generateCourseContent("Next.js Fundamentals"),
    skills: generateSkills("Next.js"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Next.js Developer",
      "Frontend Engineer",
      "Full Stack Developer",
      "Senior Engineer",
      "Technical Architect"
    ],
    lessons: []
  },

  {
    id: 112,
    title: "REST API Design",
    shortDesc: "Design scalable APIs.",
    description: "REST principles and security.",
    longContent: generateCourseContent("REST API Design"),
    skills: generateSkills("REST APIs"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "API Developer",
      "Backend Engineer",
      "Senior Backend Engineer",
      "System Designer",
      "Architect"
    ],
    lessons: []
  },

  {
    id: 113,
    title: "Express.js Deep Dive",
    shortDesc: "Robust backend development.",
    description: "Routing, middleware, architecture.",
    longContent: generateCourseContent("Express.js Deep Dive"),
    skills: generateSkills("Express.js"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Backend Developer",
      "API Engineer",
      "Senior Backend Engineer",
      "System Architect",
      "Technical Lead"
    ],
    lessons: []
  },

  {
    id: 114,
    title: "Authentication & Security",
    shortDesc: "Secure web applications.",
    description: "JWT, roles, authorization.",
    longContent: generateCourseContent("Authentication & Security"),
    skills: generateSkills("Web Security"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Backend Developer",
      "Security Engineer",
      "Application Security Specialist",
      "Senior Security Engineer",
      "Security Architect"
    ],
    lessons: []
  },

  {
    id: 115,
    title: "UI/UX Design Basics",
    shortDesc: "Design better user experiences.",
    description: "UI principles and usability.",
    longContent: generateCourseContent("UI/UX Design Basics"),
    skills: generateSkills("UI/UX"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "UI Designer",
      "UX Designer",
      "Product Designer",
      "Senior Designer",
      "Design Lead"
    ],
    lessons: []
  },

  {
    id: 116,
    title: "Frontend Performance",
    shortDesc: "Optimize frontend performance.",
    description: "Speed, optimization, best practices.",
    longContent: generateCourseContent("Frontend Performance"),
    skills: generateSkills("Frontend Performance"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Frontend Engineer",
      "Performance Engineer",
      "Senior Frontend Engineer",
      "Optimization Specialist",
      "Technical Architect"
    ],
    lessons: []
  },

  {
    id: 117,
    title: "Testing React Apps",
    shortDesc: "Write reliable tests.",
    description: "Unit and component testing.",
    longContent: generateCourseContent("Testing React Apps"),
    skills: generateSkills("Testing"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Frontend Developer",
      "QA Engineer",
      "Test Automation Engineer",
      "Senior QA Engineer",
      "Quality Architect"
    ],
    lessons: []
  },

  {
    id: 118,
    title: "System Design Basics",
    shortDesc: "Learn scalable architectures.",
    description: "Scalability, caching, databases.",
    longContent: generateCourseContent("System Design Basics"),
    skills: generateSkills("System Design"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Software Engineer",
      "System Designer",
      "Senior Engineer",
      "Technical Architect",
      "Engineering Manager"
    ],
    lessons: []
  },

  {
    id: 119,
    title: "Web Deployment",
    shortDesc: "Deploy apps professionally.",
    description: "Netlify, Vercel, production tips.",
    longContent: generateCourseContent("Web Deployment"),
    skills: generateSkills("Deployment"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Frontend Developer",
      "DevOps Engineer",
      "Cloud Engineer",
      "Senior DevOps Engineer",
      "Platform Architect"
    ],
    lessons: []
  },

  {
    id: 120,
    title: "Developer Career Roadmap",
    shortDesc: "Prepare for industry roles.",
    description: "Interview prep and growth plans.",
    longContent: generateCourseContent("Developer Career Roadmap"),
    skills: generateSkills("Career Development"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Junior Developer",
      "Software Engineer",
      "Senior Engineer",
      "Tech Lead",
      "Engineering Manager"
    ],
    lessons: []
  }
];

export default coursesData;
