/* ================= COURSE IMAGES ================= */

/* ================= COMMON GENERATORS ================= */

const generateCourseContent = (title) => [
  `${title} is designed for real-world professional development.`,
  `Industry-aligned syllabus with practical focus.`,
  `Beginner to advanced structured learning.`,
  `Hands-on exercises and mini projects included.`,
  `Interview preparation and career guidance.`,
  `Build confidence to work in real companies.`
];

const generateSkills = (title) => [
  `Strong foundation in ${title}`,
  `Practical problem-solving`,
  `Project-based learning`,
  `Professional workflow understanding`,
  `Job-ready confidence`
];

const generatePrerequisites = () => [
  "Basic computer knowledge",
  "Interest in software development",
  "Willingness to practice",
  "No prior experience required"
];

/* ================= COURSES DATA ================= */

const coursesData = [
  {
    id: 101,
    title: "HTML & CSS Mastery",
    thumbnail: "/courses/html-css-v2.jpg",
    shortDesc: "Build real-world websites using HTML & CSS.",
    description: "Responsive and modern web design.",
    longContent: generateCourseContent("HTML & CSS Mastery"),
    skills: generateSkills("HTML & CSS"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Web Designer",
      "Frontend Developer",
      "UI Developer",
      "Senior Frontend Engineer"
    ],
    lessons: [
      { title: "Introduction to HTML", content: "HTML structure and tags." },
      { title: "Semantic HTML", content: "Accessibility and SEO friendly markup." },
      { title: "CSS Basics", content: "Selectors, box model, colors." },
      { title: "Flexbox", content: "Responsive layouts." },
      { title: "CSS Grid", content: "Advanced layout techniques." },
      { title: "Responsive Design", content: "Mobile-first approach." },
      { title: "Mini Project", content: "Build a complete responsive website." }
    ]
  },

  {
    id: 102,
    title: "JavaScript Zero to Advanced",
    thumbnail: "/courses/javascript-v2.jpg",
    shortDesc: "Master JavaScript from basics to advanced.",
    description: "ES6+, DOM, async programming.",
    longContent: generateCourseContent("JavaScript"),
    skills: generateSkills("JavaScript"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "JavaScript Developer",
      "Frontend Developer",
      "Full Stack Developer"
    ],
    lessons: [
      { title: "JS Basics", content: "Variables, data types, operators." },
      { title: "Functions & Scope", content: "Functions, hoisting, closures." },
      { title: "Arrays & Objects", content: "Data structures in JS." },
      { title: "DOM Manipulation", content: "Interact with HTML elements." },
      { title: "Events", content: "User interactions." },
      { title: "Async JavaScript", content: "Promises and async/await." },
      { title: "Mini Project", content: "Interactive web app." }
    ]
  },

  {
    id: 103,
    title: "React Pro Bootcamp",
    thumbnail: "/courses/react-v2.jpg",
    shortDesc: "Build scalable React applications.",
    description: "Hooks, routing, architecture.",
    longContent: generateCourseContent("React"),
    skills: generateSkills("React"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "React Developer",
      "Frontend Engineer",
      "Senior Engineer"
    ],
    lessons: [
      { title: "React Basics", content: "Components and JSX." },
      { title: "Props & State", content: "Data flow in React." },
      { title: "Hooks", content: "useState, useEffect." },
      { title: "React Router", content: "SPA navigation." },
      { title: "State Management", content: "Best practices." },
      { title: "Performance", content: "Optimization techniques." },
      { title: "Project", content: "Build a React application." }
    ]
  },

  {
    id: 104,
    title: "Material UI Complete Guide",
    thumbnail: "/courses/mui-v2.jpg",
    shortDesc: "Design premium UI with MUI.",
    description: "Modern UI components.",
    longContent: generateCourseContent("Material UI"),
    skills: generateSkills("Material UI"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "UI Developer",
      "Frontend Engineer"
    ],
    lessons: [
      { title: "MUI Setup", content: "Installation and theme setup." },
      { title: "Core Components", content: "Buttons, Cards, Typography." },
      { title: "Layout System", content: "Grid and responsive layout." },
      { title: "Forms", content: "Inputs and validation." },
      { title: "Theming", content: "Custom themes and dark mode." },
      { title: "Dashboard UI", content: "Build admin dashboard." }
    ]
  },

  {
    id: 105,
    title: "Node.js Backend Development",
    thumbnail: "/courses/node-v2.jpg",
    shortDesc: "Backend development with Node.js.",
    description: "APIs and server logic.",
    longContent: generateCourseContent("Node.js"),
    skills: generateSkills("Node.js"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Backend Developer",
      "API Engineer"
    ],
    lessons: [
      { title: "Node Basics", content: "Runtime and modules." },
      { title: "NPM", content: "Package management." },
      { title: "File System", content: "Read/write files." },
      { title: "HTTP Module", content: "Create servers." },
      { title: "REST APIs", content: "API fundamentals." },
      { title: "Project", content: "Build backend service." }
    ]
  },

  {
    id: 106,
    title: "MongoDB & NoSQL",
    thumbnail: "/courses/mongodb-v2.jpg",
    shortDesc: "NoSQL database mastery.",
    description: "CRUD and schema design.",
    longContent: generateCourseContent("MongoDB"),
    skills: generateSkills("MongoDB"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: [
      "Database Developer",
      "Backend Engineer"
    ],
    lessons: [
      { title: "NoSQL Basics", content: "Document databases." },
      { title: "CRUD Operations", content: "Insert, update, delete." },
      { title: "Schema Design", content: "Best practices." },
      { title: "Indexes", content: "Performance optimization." },
      { title: "Aggregation", content: "Advanced queries." }
    ]
  },

  /* ========= REMAINING COURSES (SHORT BUT REALISTIC) ========= */

  {
    id: 107,
    title: "MERN Stack Development",
    thumbnail: "/courses/mern-v2.jpg",
    shortDesc: "Full stack MERN apps.",
    description: "Frontend + Backend integration.",
    longContent: generateCourseContent("MERN Stack"),
    skills: generateSkills("MERN"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Full Stack Developer"],
    lessons: [
      { title: "MERN Overview", content: "Architecture overview." },
      { title: "Backend APIs", content: "Node + Express." },
      { title: "Frontend React", content: "Connect APIs." },
      { title: "Auth", content: "JWT authentication." },
      { title: "Final Project", content: "Full stack app." }
    ]
  },

  {
    id: 108,
    title: "Git & GitHub Essentials",
    thumbnail: "/courses/git-v2.jpg",
    shortDesc: "Version control mastery.",
    description: "Collaboration tools.",
    longContent: generateCourseContent("Git & GitHub"),
    skills: generateSkills("Git"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Developer"],
    lessons: [
      { title: "Git Basics", content: "Init, commit, log." },
      { title: "Branching", content: "Merge & rebase." },
      { title: "GitHub", content: "Remote repos." },
      { title: "Pull Requests", content: "Team collaboration." }
    ]
  },

  {
    id: 109,
    title: "TypeScript for React",
    thumbnail: "/courses/typescript-v2.jpg",
    shortDesc: "Type-safe React apps.",
    description: "TypeScript integration.",
    longContent: generateCourseContent("TypeScript"),
    skills: generateSkills("TypeScript"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Frontend Engineer"],
    lessons: [
      { title: "TS Basics", content: "Types and interfaces." },
      { title: "React + TS", content: "Typed props & state." },
      { title: "Forms", content: "Events & validation." }
    ]
  },

  {
    id: 110,
    title: "Redux Toolkit Mastery",
    thumbnail: "/courses/redux-v2.jpg",
    shortDesc: "Global state management.",
    description: "Redux Toolkit patterns.",
    longContent: generateCourseContent("Redux Toolkit"),
    skills: generateSkills("Redux"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["React Engineer"],
    lessons: [
      { title: "Redux Basics", content: "Store & reducers." },
      { title: "RTK", content: "Slices & actions." },
      { title: "Async Thunks", content: "API handling." }
    ]
  },

  {
    id: 111,
    title: "Next.js Fundamentals",
    thumbnail:"/courses/nextjs-v2.jpg",
    shortDesc: "Production React apps.",
    description: "SSR & routing.",
    longContent: generateCourseContent("Next.js"),
    skills: generateSkills("Next.js"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Full Stack Developer"],
    lessons: [
      { title: "Next Basics", content: "Pages & routing." },
      { title: "SSR", content: "Server-side rendering." },
      { title: "Deployment", content: "Production build." }
    ]
  },

  {
    id: 112,
    title: "REST API Design",
    thumbnail: "/courses/api-v2.jpg",
    shortDesc: "Scalable APIs.",
    description: "REST principles.",
    longContent: generateCourseContent("REST API"),
    skills: generateSkills("APIs"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Backend Engineer"],
    lessons: [
      { title: "HTTP Methods", content: "GET, POST, PUT." },
      { title: "Status Codes", content: "API responses." },
      { title: "Security", content: "API protection." }
    ]
  },

  {
    id: 113,
    title: "Express.js Deep Dive",
    thumbnail: "/courses/express-v2.jpg",
    shortDesc: "Backend framework.",
    description: "Middleware & routing.",
    longContent: generateCourseContent("Express.js"),
    skills: generateSkills("Express"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Backend Developer"],
    lessons: [
      { title: "Routing", content: "REST routes." },
      { title: "Middleware", content: "Custom middleware." },
      { title: "Error Handling", content: "Central handling." }
    ]
  },

  {
    id: 114,
    title: "Authentication & Security",
    thumbnail: "/courses/security-v2.jpg",
    shortDesc: "Secure apps.",
    description: "JWT & roles.",
    longContent: generateCourseContent("Security"),
    skills: generateSkills("Security"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Security Engineer"],
    lessons: [
      { title: "Auth Basics", content: "Login & signup." },
      { title: "JWT", content: "Token auth." },
      { title: "RBAC", content: "Role-based access." }
    ]
  },

  {
    id: 115,
    title: "UI/UX Design Basics",
    thumbnail: "/courses/uiux-v2.jpg",
    shortDesc: "User experience design.",
    description: "Design principles.",
    longContent: generateCourseContent("UI/UX"),
    skills: generateSkills("UI/UX"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["UI Designer"],
    lessons: [
      { title: "Design Principles", content: "UX fundamentals." },
      { title: "Wireframes", content: "Layout planning." },
      { title: "Case Study", content: "Real design analysis." }
    ]
  },

  {
    id: 116,
    title: "Frontend Performance",
    thumbnail: "/courses/performance-v2.jpg",
    shortDesc: "Speed optimization.",
    description: "Performance best practices.",
    longContent: generateCourseContent("Performance"),
    skills: generateSkills("Performance"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Frontend Engineer"],
    lessons: [
      { title: "Performance Metrics", content: "Core Web Vitals." },
      { title: "Lazy Loading", content: "Code splitting." },
      { title: "Optimization", content: "Bundle size." }
    ]
  },

  {
    id: 117,
    title: "Testing React Apps",
    thumbnail: "/courses/testing-v2.jpg",
    shortDesc: "Reliable tests.",
    description: "Jest & RTL.",
    longContent: generateCourseContent("Testing"),
    skills: generateSkills("Testing"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["QA Engineer"],
    lessons: [
      { title: "Testing Basics", content: "Unit testing." },
      { title: "Jest", content: "Test cases." },
      { title: "RTL", content: "Component testing." }
    ]
  },

  {
    id: 118,
    title: "System Design Basics",
    thumbnail:"/courses/system-design-v2.jpg",
    shortDesc: "Scalable systems.",
    description: "Architecture basics.",
    longContent: generateCourseContent("System Design"),
    skills: generateSkills("System Design"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Software Architect"],
    lessons: [
      { title: "Scalability", content: "System growth." },
      { title: "Databases", content: "Design choices." },
      { title: "Caching", content: "Performance boost." }
    ]
  },

  {
    id: 119,
    title: "Web Deployment",
    thumbnail:"/courses/deploy-v2.jpg",
    shortDesc: "Deploy apps.",
    description: "Production hosting.",
    longContent: generateCourseContent("Deployment"),
    skills: generateSkills("Deployment"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["DevOps Engineer"],
    lessons: [
      { title: "Netlify", content: "Frontend deploy." },
      { title: "Vercel", content: "Next.js deploy." },
      { title: "Env Vars", content: "Security configs." }
    ]
  },

  {
    id: 120,
    title: "Developer Career Roadmap",
    thumbnail: "/courses/career-v2.jpg",
    shortDesc: "Career growth.",
    description: "Interview & skills.",
    longContent: generateCourseContent("Career"),
    skills: generateSkills("Career Growth"),
    prerequisites: generatePrerequisites(),
    careerRoadmap: ["Junior → Senior → Lead"],
    lessons: [
      { title: "Career Paths", content: "Frontend / Backend." },
      { title: "Resume", content: "ATS friendly resume." },
      { title: "Interviews", content: "Technical prep." }
    ]
  }
];

export default coursesData;
