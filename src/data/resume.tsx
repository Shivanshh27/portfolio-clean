import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shivansh Nigam",
  initials: "SN",
  url: "https://www.shivanshh27.com/",
  location: "Bhopal, Madhya Pradesh, India",
  description: "AI & Full-Stack Software Engineer • Building scalable systems, agentic workflows & high-performance backends.",
  summary:
    "Passionate Software Engineer and Full-Stack Developer specializing in agentic workflows, LLM orchestration, and low-latency distributed architectures. Experienced in building AI-powered multi-modal inspection pipelines, compiled C++17 pathfinding engines, and sub-millisecond write-through caching layers with Redis and PostgreSQL. Solved 800+ algorithmic problems across LeetCode, Codeforces (Pupil), and GeeksforGeeks, and actively mentoring student engineers at MANIT Bhopal.",
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
      category: "AI/ML & Computer Vision",
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
        "MongoDB",
        "Mongoose",
        "PL/pgSQL Triggers",
      ],
      gradient: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/10 dark:to-violet-400/5",
      border: "hover:border-indigo-500/30",
    },
    {
      category: "Languages",
      skills: ["C++", "Python", "TypeScript", "JavaScript (ES6+)", "SQL"],
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
      skills: ["Docker", "Git", "GitHub", "Postman", "Linux / Bash", "Cloudinary", "Render", "Vercel"],
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
      badges: ["Internship"],
      location: "Remote, India",
      title: "Software Engineering Intern (Frontend & Full-Stack)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQENCFaCEvoTPg/company-logo_200_200/company-logo_200_200/0/1734646084476/yasaedtech_logo?e=1784764800&v=beta&t=tt93fgjzNNTnATYJIxqjzpt5hwMv1iWGyzzGFg8GJGc",
      start: "May 2026",
      end: "July 2026",
      description:
        "Architected and deployed 15+ RESTful API endpoints and backend services using Node.js, Express.js, and TypeScript, reducing API response latency by 32%. Engineered Redis caching layers and optimized PostgreSQL queries using composite indexing and CTEs, decreasing database load by 40%. Implemented secure JWT authentication with role-based access control (RBAC) and robust error-handling middleware ensuring 99.9% service reliability.",
    },
    {
      company: "ElevanceSkills",
      href: "https://elevanceskills.com/",
      badges: ["Internship"],
      location: "Remote, India",
      title: "Full Stack Web Development Intern",
      logoUrl: "https://d8tj1uzmn0yrp.cloudfront.net/favicon/logo.jpg",
      start: "December 2025",
      end: "January 2026",
      description:
        "Engineered community spaces with media uploads, likes, and dynamic posting limits based on user connections. Implemented secure OTP-based login verification, rate-limited password recovery flows, and session login tracking. Integrated Razorpay & Stripe payment gateways with time-restricted payment windows and automated invoice dispatching.",
    },
    {
      company: "Pratinik Infotech Pvt. Ltd.",
      href: "https://pratinik.com/",
      badges: ["Internship"],
      location: "Remote, India",
      title: "Software Development Intern",
      logoUrl: "https://pratinik.com/wp-content/uploads/2025/01/Pratinik-Infotech.png",
      start: "July 2025",
      end: "September 2025",
      description:
        "Developed a collaborative task management platform using React, Node.js (Express), and MongoDB. Implemented JWT auth, protected API routes, and optimized CRUD pipelines with responsive UI components for multi-user workflows.",
    },
  ],

  education: [
    {
      school: "Maulana Azad National Institute of Technology (MANIT)",
      href: "https://www.manit.ac.in/",
      degree: "Bachelor of Technology (B.Tech)",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png",
      start: "2023",
      end: "2027",
      description:
        "Relevant Coursework: Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems (DBMS), Operating Systems, Linear Algebra, Probability & Statistics.",
    },
  ],

  achievements: [
    {
      title: "98th Percentile — JEE Main 2023",
      description:
        "Secured a top 2% national percentile ranking among over 1.2 Million aspiring engineers in one of the most competitive engineering entrance examinations globally.",
      organization: "National Testing Agency (NTA)",
      badge: "Top 2% Nationwide",
      date: "2023",
    },
    {
      title: "Pupil at Codeforces & 800+ DSA Solved",
      description:
        "Solved 800+ algorithmic and competitive programming problems spanning dynamic programming, graph theory, trees, and greedy paradigms across Codeforces, LeetCode, and GeeksforGeeks.",
      organization: "Codeforces / LeetCode / GeeksforGeeks",
      badge: "800+ Problems Solved",
      date: "Active",
    },
  ],

  leadership: [
    {
      role: "Technical Lead & Software Mentor",
      organization: "DataBiz (Data Science & Analytics Club, MANIT Bhopal)",
      period: "Feb 2025 - Present",
      description:
        "Mentored 100+ students in Python data analytics (Pandas, NumPy), machine learning fundamentals, SQL database modeling, and modern full-stack web application development.",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png",
      badges: ["Leadership", "100+ Mentored", "Club Lead"],
    },
  ],

  pprojects: [
    {
      title: "SleekLink — URL Redirection Engine & Visitor Analytics",
      category: "Systems & Backend",
      href: "https://sleeklink.shivansh.online",
      dates: "2026",
      featured: true,
      active: true,
      description:
        "High-performance URL shortener featuring a glassmorphic user dashboard, real-time analytics, timezone-aware charts, dynamic QR code generation, client-side registry search, and active/paused link controls. Built a write-through caching layer using Redis over PostgreSQL, achieving sub-millisecond redirection lookups with instant cache invalidation.",
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Timezone-Aware SQL",
        "Base62 Encoding",
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
      image: "/sleeklink.png",
      video: "",
    },
    {
      title: "AgroMind — AI Decision Support System & Explainable ML",
      category: "AI & Agents",
      href: "https://github.com/Shivanshh27",
      dates: "2026",
      featured: true,
      active: true,
      description:
        "Trained a Random Forest classifier evaluating soil N-P-K levels, pH, temperature, and humidity, achieving 94.6% accuracy for crop prediction. Built an Explainable AI (XAI) driver returning factor-by-factor feature confidence scores explaining why specific crops are recommended. Integrated Llama 3 via Groq API, injecting real-time farm profiles, weather alerts, and soil metrics into interactive farmer assistant workflows.",
      technologies: [
        "Python",
        "FastAPI",
        "Scikit-learn",
        "Groq API (Llama 3)",
        "PostgreSQL",
        "Explainable AI (OpenXAI)",
        "Docker",
        "Pandas",
        "NumPy",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agromind.png",
      video: "",
    },
    {
      title: "UPI Scam Detection Bot — Multi-Modal AI Fraud Analysis",
      category: "AI & Agents",
      href: "https://github.com/Shivanshh27",
      dates: "2026",
      featured: true,
      active: true,
      description:
        "Multi-modal inspection pipeline evaluating SMS semantics (NLP), phishing URL markers, and QR payment payloads using OpenCV. Aggregated multi-branch signals into a unified 0-100 Risk Score across 4 calibrated risk tiers (LOW, MEDIUM, HIGH, CRITICAL) under 150ms. Leveraged Llama 3 to generate human-readable fraud risk explanations and safety warnings while automatically redacting PII.",
      technologies: [
        "Python",
        "FastAPI",
        "OpenCV",
        "NLP Classifier",
        "Llama 3 (Groq API)",
        "Redis",
        "React",
        "Risk Calibration",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/upiscam.png",
      video: "",
    },
    {
      title: "ShopIQ AI — Voice-Navigated E-Commerce Ecosystem",
      category: "AI & Agents",
      href: "https://github.com/Shivanshh27/ShopIQ-AI",
      dates: "2026",
      featured: false,
      active: true,
      description:
        "Full-stack e-commerce ecosystem consisting of a user storefront, administrative panel, and Express.js backend. Features a hands-free AI voice navigation system using the browser's native Web Speech API, Google OAuth via Firebase, dynamic multi-image uploads to Cloudinary, and secure Razorpay payment processing.",
      technologies: [
        "React 19",
        "Vite",
        "Tailwind CSS v4",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Razorpay",
        "Cloudinary",
        "Web Speech API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/ShopIQ-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shopiq.png",
      video: "",
    },
    {
      title: "TradeMetrics — Portfolio Analytics Engine",
      category: "Systems & Backend",
      href: "https://github.com/Shivanshh27/TradeMetrics",
      dates: "2026",
      featured: false,
      active: true,
      description:
        "High-performance trading journal and portfolio analyzer. Offloads 100% of analytical computations directly to PostgreSQL using raw, optimized SQL queries without an ORM. Implemented cumulative equity curves and drawdown window functions, trigger-based P&L auto-computations, recursive CTE strategy rollups, and win-rate stored functions.",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Raw SQL",
        "PL/pgSQL Triggers",
        "Stored Functions",
        "Window Functions",
        "CTEs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/TradeMetrics",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/trademetrics.png",
      video: "",
    },
    {
      title: "Route Navigation Pathfinding Visualizer",
      category: "Systems & Backend",
      href: "https://github.com/Shivanshh27/route-navigation-engine",
      dates: "2026",
      featured: false,
      active: true,
      description:
        "Spatial pathfinding visualizer running a compiled C++17 core pathfinding engine connected to a Node.js REST API gateway and a glassmorphic HTML5 Canvas client. Features A*, Dijkstra, BFS, and DFS path searches. Built a Redis caching layer to bypass compiled binary subprocess creation overhead, achieving a 10x speedup (<1.5ms response time).",
      technologies: [
        "C++17",
        "Node.js",
        "Express.js",
        "Redis",
        "HTML5 Canvas",
        "Glassmorphism",
        "Subprocess Integration",
        "Caching Patterns",
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
      image: "/route.png",
      video: "",
    },
    {
      title: "Resume Builder AI",
      category: "Full-Stack",
      href: "https://ai-powered-resume-builder-tau.vercel.app/",
      dates: "2025",
      featured: false,
      active: true,
      description:
        "Full-stack MERN application that generates production-ready resumes with AI-assisted content optimization. Built a scalable Express backend with modular controllers, JWT-secured routes, and Mongoose schemas for multi-resume storage. Integrated OpenAI for dynamic summary enhancement and ImageKit for background-free image processing with CDN delivery. Developed a Vite-powered React frontend featuring live template rendering, autosave, real-time customization, public resume links, and print-ready PDF export.",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "OpenAI API",
        "ImageKit SDK",
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
      image: "/resumebuilder.png",
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
        "Backend service for a video hosting platform built with Node.js, Express, and MongoDB. Enables secure user authentication with JWT and HTTP-only cookies, scalable profile and watch history management, avatar/cover uploads via Cloudinary, and modular video upload infrastructure. Structured with controllers, middleware, and async error handling for production-ready REST APIs.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Cloudinary",
        "Multer",
        "REST APIs",
        "cookie-parser",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/VIdeo-Hosting-Platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/videohosting.png",
      video: "",
    },
  ],
} as const;
