import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shivansh Nigam",
  initials: "SN",
  url: "https://www.shivanshh27.com/",
  location: "Bhopal, Madhya Pradesh, India",
  description: "AI & Full-Stack Software Engineer • Building scalable systems, agentic workflows & high-performance backends.",
  summary:
    "Passionate Software Engineer and problem solver specializing in agentic workflows, LLM orchestration, and low-latency distributed architectures. Experienced in building production-grade FastAPI and Node.js backend services, C++17 pathfinding engines, sub-millisecond write-through caching layers with Redis and PostgreSQL, and multi-stage SQL data pipelines. Solved 800+ algorithmic problems across Codeforces (Pupil), LeetCode, and GeeksforGeeks, and actively mentoring student engineers at MANIT Bhopal.",
  avatarUrl: "/pfp.png",
  
  metrics: [
    {
      value: "800+",
      label: "DSA Problems Solved",
      subtext: "Codeforces (Pupil), LeetCode & GFG",
    },
    {
      value: "98%ile",
      label: "JEE Main 2023",
      subtext: "Top 2% of 1.2M+ Candidates Nationwide",
    },
    {
      value: "<1ms",
      label: "Redirection Latency",
      subtext: "Redis Write-Through Caching Engine",
    },
    {
      value: "100+",
      label: "Engineers Mentored",
      subtext: "Technical Lead @ DataBiz Club MANIT",
    },
  ],

  availability: {
    status: "Available",
    message: "for software engineering roles & impactful projects",
  },

  skillsCategories: [
    {
      category: "Generative AI & Agentic Systems",
      skills: [
        "Agentic Workflows",
        "LLM Orchestration",
        "LangChain (LCEL)",
        "Llama 3 (Groq API)",
        "Google Gemini API",
        "OpenAI API",
        "Prompt Engineering",
        "RAG Architectures",
      ],
      gradient: "from-purple-500/10 to-indigo-500/5 dark:from-purple-500/10 dark:to-indigo-400/5",
      border: "hover:border-purple-500/30",
    },
    {
      category: "AI/ML & Data Science",
      skills: [
        "Scikit-learn",
        "OpenCV",
        "Explainable AI (OpenXAI)",
        "Pandas",
        "NumPy",
        "Random Forest",
        "KMeans",
      ],
      gradient: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-400/5",
      border: "hover:border-emerald-500/30",
    },
    {
      category: "Backend & Systems",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "C++17",
        "RESTful APIs",
        "WebSockets",
        "JWT Auth",
        "Zod Validation",
        "Subprocess Integration",
      ],
      gradient: "from-amber-500/10 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-400/5",
      border: "hover:border-amber-500/30",
    },
    {
      category: "Databases & Caching",
      skills: [
        "PostgreSQL (CTEs, Window Functions)",
        "Redis (Pub/Sub, Caching)",
        "SQLite (Indexed CTEs)",
        "MongoDB",
        "PL/pgSQL Triggers",
      ],
      gradient: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/10 dark:to-violet-400/5",
      border: "hover:border-indigo-500/30",
    },
    {
      category: "Languages",
      skills: ["Python", "C++17", "TypeScript", "JavaScript (ES6+)", "SQL"],
      gradient: "from-blue-500/10 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-400/5",
      border: "hover:border-blue-500/30",
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5 Canvas", "Framer Motion", "Vite"],
      gradient: "from-pink-500/10 to-rose-500/5 dark:from-pink-500/10 dark:to-rose-400/5",
      border: "hover:border-pink-500/30",
    },
    {
      category: "Tools & DevOps",
      skills: ["Docker", "Git", "GitHub", "Streamlit", "Postman", "Linux / Bash", "Render", "Vercel"],
      gradient: "from-yellow-500/10 to-amber-500/5 dark:from-yellow-500/10 dark:to-amber-400/5",
      border: "hover:border-yellow-500/30",
    },
    {
      category: "Core CS Fundamentals",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "System Architecture",
      ],
      gradient: "from-cyan-500/10 to-sky-500/5 dark:from-cyan-500/10 dark:to-sky-400/5",
      border: "hover:border-cyan-500/30",
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/resume.pdf",
      icon: FileTextIcon,
      label: "Resume",
    },
  ],

  contact: {
    email: "s2704nigam@gmail.com",
    tel: "+917049949474",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shivanshh27",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivanshh27",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:s2704nigam@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Phone: {
        name: "Phone",
        url: "tel:+917049949474",
        icon: Icons.globe,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Yasa Ed Tech",
      href: "https://www.linkedin.com/company/yasaedtech/",
      badges: ["Internship", "Remote"],
      location: "Remote, India",
      title: "Software Engineering Intern",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQENCFaCEvoTPg/company-logo_200_200/company-logo_200_200/0/1734646084476/yasaedtech_logo?e=1784764800&v=beta&t=tt93fgjzNNTnATYJIxqjzpt5hwMv1iWGyzzGFg8GJGc",
      start: "May 2026",
      end: "July 2026",
      description:
        "Developed and integrated 10+ RESTful API endpoints in Node.js, Express, and TypeScript with JWT role-based authentication (Student vs. Admin) and strict Zod schema validation for core learning modules. Optimized PostgreSQL query performance using composite indexes on (user_id, course_id) and implemented a Redis caching layer for course catalogs (15-min TTL), reducing redundant database reads by ~40%. Engineered an automated quiz-generation pipeline in Python using FastAPI and LLM prompt chaining to transform lesson markdown into structured JSON assessments, cutting manual content drafting time by ~60%.",
    },
  ],

  education: [
    {
      school: "Maulana Azad National Institute of Technology (MANIT)",
      href: "https://www.manit.ac.in/",
      degree: "Bachelor of Technology (B.Tech) in Electrical Engineering",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png",
      start: "2023",
      end: "2027",
      description:
        "CGPA: 7.13 / 10.0. Relevant Coursework: Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems (DBMS), Operating Systems, Computer Networks, Linear Algebra.",
    },
  ],

  achievements: [
    {
      title: "Pupil at Codeforces & 800+ DSA Solved",
      description:
        "Solved 800+ algorithmic and competitive programming problems spanning dynamic programming, graph theory, trees, and greedy paradigms across Codeforces, LeetCode, and GeeksforGeeks.",
      organization: "Codeforces / LeetCode / GeeksforGeeks",
      badge: "800+ Problems Solved",
      date: "Active",
    },
    {
      title: "98th Percentile — JEE Main 2023",
      description:
        "Secured a top 2% national percentile ranking among over 1.2 Million aspiring engineers in one of the most competitive engineering entrance examinations globally.",
      organization: "National Testing Agency (NTA)",
      badge: "Top 2% Nationwide",
      date: "2023",
    },
  ],

  leadership: [
    {
      role: "Technical Lead & Software Mentor",
      organization: "DataBiz (Data Science & Analytics Club, MANIT Bhopal)",
      period: "Feb 2025 - Present",
      description:
        "Mentored 100+ undergraduate students in full-stack web development, Python data analytics (Pandas, NumPy), and SQL query optimization through technical workshops. Architected club web portals, dynamic registration workflows, and campus hackathon problem-setting rounds.",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png",
      badges: ["Leadership", "100+ Mentored", "Club Lead"],
    },
    {
      role: "Event Manager & Student Coordinator",
      organization: "MAFFICK (Annual Cultural Fest, MANIT Bhopal)",
      period: "2024",
      description:
        "Coordinated campus-wide fest operations, event logistics, stage management, and student participation across multi-day cultural events.",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png",
      badges: ["Leadership", "Event Operations", "Fest Lead"],
    },
  ],

  pprojects: [
    {
      title: "SleekLink — Enterprise URL Redirection Engine & Analytics",
      category: "Systems & Backend",
      href: "https://sleeklink.shivansh.online",
      dates: "2026",
      featured: true,
      active: true,
      description:
        "High-throughput URL redirection engine using Node.js and PostgreSQL with a write-through Redis caching layer resolving link lookups with <1ms sub-millisecond latency across 10K+ simulated requests/sec. Features active/pause link state control with instantaneous Redis cache invalidation, timezone-aware visitor analytics with AT TIME ZONE, zero-dependency regex User-Agent parser, raw inline SVG charts, and dynamic Blob QR code downloader.",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "React 18",
        "Vite",
        "Tailwind CSS",
        "Timezone-Aware SQL",
        "SVG Charts",
      ],
      links: [
        {
          type: "Website",
          href: "https://sleeklink.shivansh.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/SleekLink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sleeklink.svg",
      video: "",
    },
    {
      title: "AgroMind — Context-Aware LLM Advisory & Explainable ML System",
      category: "AI & Agents",
      href: "https://github.com/Shivanshh27/AgroMind",
      dates: "2026",
      featured: true,
      active: true,
      description:
        "Context-aware agricultural advisory pipeline using LangChain (LCEL) and Groq Cloud LPUs (Llama 3 70B), streaming agronomic responses in under 800ms by injecting 7 soil telemetry metrics and weather API telemetry. Trained an ensemble Random Forest model on 2,200+ soil-climate records achieving 94.6% accuracy with <20ms inference latency and factor-by-factor Explainable AI (XAI) feature attribution. Built 5 async FastAPI REST endpoints with dual PostgreSQL/SQLite ORM caching and Docker containerization.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain (LCEL)",
        "Groq Cloud (Llama 3)",
        "Scikit-learn",
        "Explainable AI",
        "React 18",
        "PostgreSQL",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/AgroMind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agromind.svg",
      video: "",
    },
    {
      title: "VendorIQ — Vendor Performance Analytics & Intelligence Platform",
      category: "Systems & Backend",
      href: "https://github.com/Shivanshh27/VendorLens",
      dates: "2026",
      featured: true,
      active: true,
      description:
        "End-to-end data pipeline synthesizing 102K+ multi-table transactions across 100 vendors into an indexed SQLite database, calculating complex aggregations in under 1 second. Engineered multi-stage SQL Common Table Expressions (CTEs) computing estimated COGS, gross margins, and inventory ratios. Built a 22-rule automated data quality test suite and a 9-point analytical verification engine. Implemented a 4-quadrant rule-based vendor classification engine using dynamic median thresholds and deployed an interactive Streamlit dashboard.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "SQL (SQLite CTEs)",
        "Streamlit",
        "Data Quality Suite",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/VendorLens",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vendoriq.svg",
      video: "",
    },
    {
      title: "Route Navigation Engine — Low-Latency Pathfinding System",
      category: "Systems & Backend",
      href: "https://github.com/Shivanshh27/route-navigation-engine",
      dates: "2026",
      featured: true,
      active: true,
      description:
        "High-performance pathfinding core in C++17 implementing optimized A*, Dijkstra, BFS, and DFS on 10,000-node grid graphs, achieving 1.6 μs average calculation latency. Reduced memory footprint by 40% utilizing flat 1D vectors and bitsets; architected a hybrid backend combining Node.js Express sub-processes with Redis caching to resolve repeat routes in <0.5ms. Interactive HTML5 Canvas visualizer rendering smooth 60 FPS path expansions.",
      technologies: [
        "C++17",
        "Node.js",
        "Express.js",
        "Redis",
        "HTML5 Canvas",
        "Subprocess IPC",
        "A* Search",
        "Dijkstra",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/route-navigation-engine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/route.svg",
      video: "",
    },
    {
      title: "TradeMetrics — Database-Driven Portfolio Analytics & Journal",
      category: "Systems & Backend",
      href: "https://github.com/shivanshh27/TradeMetrics",
      dates: "2026",
      featured: false,
      active: true,
      description:
        "Full-stack portfolio analytics journal offloading heavy computations (equity curves, max drawdowns, streak analysis) to PostgreSQL via SQL window functions and recursive CTEs. Programmed automated PL/pgSQL database triggers to calculate trade P&L on insertion and utilized EXPLAIN ANALYZE profiling with composite indexing on (user_id, exit_time) to eliminate sequential scans. Responsive light-themed SPA dashboard using React and Recharts.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "PL/pgSQL Triggers",
        "Window Functions",
        "Recharts",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shivanshh27/TradeMetrics",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/trademetrics.svg",
      video: "",
    },
    {
      title: "ShopIQ AI — Full-Stack E-Commerce with AI Voice Navigation",
      category: "AI & Agents",
      href: "https://github.com/Shivanshh27/ShopIQ-AI",
      dates: "2026",
      featured: false,
      active: true,
      description:
        "Full-stack e-commerce system featuring an AI Voice-Assisted Navigator powered by the Web Speech API, enabling hands-free page navigation and auditory confirmation cues. Built a secure REST API in Node.js/Express with MongoDB, implementing JWT authentication, role-based admin routing gates, Cloudinary multi-image uploads, and Razorpay payment integration.",
      technologies: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Web Speech API",
        "Razorpay",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/ShopIQ-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shopiq.svg",
      video: "",
    },
    {
      title: "AI-Powered Resume Builder",
      category: "Full-Stack",
      href: "https://ai-powered-resume-builder-tau.vercel.app/",
      dates: "2025",
      featured: false,
      active: true,
      description:
        "Full-stack MERN application that generates production-ready resumes with AI-assisted content optimization. Integrated Google Gemini API to parse job descriptions and generate ATS-optimized summaries, tailored bullet enhancements, and keyword alignment. Features modular drag-and-drop section editors, autosave, public sharing links, and print-ready PDF export.",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini API",
        "JWT Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-powered-resume-builder-tau.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/AI-Powered-resume-builder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resumebuilder.svg",
      video: "",
    },
    {
      title: "Video Hosting Platform Backend",
      category: "Full-Stack",
      href: "https://github.com/Shivanshh27/VIdeo-Hosting-Platform",
      dates: "2025",
      featured: false,
      active: true,
      description:
        "Backend service for a video hosting platform built with Node.js, Express, and MongoDB. Enables secure user authentication with JWT and HTTP-only cookies, scalable profile and watch history management, avatar/cover uploads via Cloudinary, and modular video upload infrastructure.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Auth",
        "Cloudinary",
        "Multer",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/VIdeo-Hosting-Platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/videohosting.svg",
      video: "",
    },
  ],
} as const;
