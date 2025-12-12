import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shivansh Nigam",
  initials: "SN",
  url: "https://www.shivanshh27.com/",
  location: "Bhopal, Madhya Pradesh, India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Building. Learning. Improving.",
  summary:
    "I’m a developer who likes building things that actually work in the real world. I’ve spent the last couple of years moving from DSA and core engineering into serious web development, picking up experience through internships, side projects, and hackathons. I enjoy working on ideas that have room to grow, whether it’s a SaaS product, a Web3 experiment, or a platform that scales with real users.",
  avatarUrl: "/pfp.png",
  skills: [
    // Programming Languages
    "C++",
    "JavaScript",
    "TypeScript",
    "Python",

    // Frontend
    "React.js",
    "Next.js",
    "Vite",
    "HTML",
    "CSS",
    "Tailwind CSS",

    // Backend
    "Node.js",
    "Express.js",

    // Databases & ORM
    "MongoDB",
    "PostgreSQL",
    "Mongoose",
    "Drizzle ORM",

    // AI & ML Integrations
    "OpenAI API",
    "Pinecone",

    // Authentication
    "JWT Authentication",
    "Clerk",

    // Cloud & Storage
    "AWS SDK",
    "ImageKit",

    // Payments
    "Stripe",

    // File Handling
    "Multer",

    // Utilities & Tools
    "Axios",
    "Git",
    "GitHub",
    "REST APIs",
  ],
  services: [
    {
      title: "Web3 Development",
      description:
        "Smart contracts, DeFi protocols, NFT platforms, and blockchain integrations. Experience with Solidity, Rust, and multiple chains.",
      icon: "🔗",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web applications with modern frameworks. React, Next.js, TypeScript, Node.js, and cloud deployment.",
      icon: "⚡",
    },
    {
      title: "Smart Contract Auditing",
      description:
        "Security-focused smart contract reviews and optimizations. Ensuring your contracts are production-ready and secure.",
      icon: "🔒",
    },
    {
      title: "SaaS Development",
      description:
        "Scalable SaaS applications with modern architecture. From MVP to production with performance optimization.",
      icon: "🚀",
    },
  ],
  availability: {
    status: "Available",
    message: "for projects and new opportunities",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://drive.google.com/file/d/1taQ0oYNE5JyjgLJ2GuyCrP-Mxf1lOYmI/view?usp=sharing",
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
      X: {
        name: "X",
        url: "https://x.com/shivanshh27",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      Phone: {
        name: "Phone",
        url: "#",
        icon: Icons.globe,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pratinik Infotech Pvt. Ltd.",
      href: "https://pratinik.com/", // add company website if available
      badges: ["Internship"],
      location: "Remote, India",
      title: "Software Development Intern",
      logoUrl:
        "https://pratinik.com/wp-content/uploads/2025/01/Pratinik-Infotech.png", // add logo URL if available
      start: "July 2025", // update with actual start date
      end: "September 2025",
      description:
        "Developed a task management platform powered by React, Node.js (Express), and MongoDB. Implemented JWT auth, protected routes, and optimized CRUD APIs. Integrated real-time task updates and a responsive UI for smooth multi-user collaboration.",
    },
    // {
    //   company: "Pikme",
    //   href: "https://pikme.app", // replace with actual if you have
    //   badges: ["Internship"],
    //   location: "Remote, San Francisco",
    //   title: "Full Stack Developer",
    //   logoUrl:
    //     "https://media.licdn.com/dms/image/v2/D4E16AQFDashwb8wvQA/profile-displaybackgroundimage-shrink_350_1400/B4EZXJDZsJGwAo-/0/1742834867726?e=1764201600&v=beta&t=eIWd9j5D3fyoqKqz2MxID6wyDearKSM3eVZtmYFhjwQ",
    //   start: "July 2025",
    //   end: "October 2025",
    //   description:
    //     "Engineered single-player and multiplayer versions of Pikme from the ground up, serving 500+ active users. Boosted site performance by 40% through caching strategies, lazy loading, and frontend optimizations. Managed end-to-end deployment on AWS, including EC2, S3, and server configuration for 99.9% uptime.",
    // },

    // {
    //   company: "Stealth Startup",
    //   badges: ["Freelance"],
    //   href: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Stealth-logo.svg/2048px-Stealth-logo.svg.png", // can add later if public
    //   location: "Remote, Boston",
    //   title: "Full Stack Blockchain Developer",
    //   logoUrl:
    //     "https://media.licdn.com/dms/image/v2/D4D0BAQGUKsfjHB8RNQ/company-logo_100_100/company-logo_100_100/0/1735368022724/stealth_startup_51_logo?e=1761177600&v=beta&t=k9F16_cP8yiR9nW2677K8B6xW1CkS_VM3PhRbUN-yCQ", // placeholder, update if you have logo
    //   start: "August 2025",
    //   end: "October 2025",
    //   description:
    //     "Developed and deployed DAO governance smart contracts handling $50K+ in TVL with 100% test coverage and security audits. Built complete frontend interface with 95%+ user satisfaction and integrated smart contracts with both frontend and backend for seamless Web3 UX.",
    // },
    // {
    //   company: "Euclid Protocol",
    //   href: "https://www.euclidprotocol.io/", // add if there's a public link
    //   badges: ["Internship"],
    //   location: "Remote, Dubai",
    //   title: "Full Stack Developer",
    //   logoUrl:
    //     "https://pbs.twimg.com/profile_images/1787780246256726016/yaY-XoKg_400x400.jpg",
    //   start: "May 2025",
    //   end: "July 2025",
    //   description:
    //     "Developed EuclidAI reducing operational costs by 30% and processing 10K+ transactions. Designed and implemented EuclidMail, enabling 1K+ users to send crypto via email with 99.5% success rate. Collaborated with cross-functional teams to update EuclidSwap, increasing trading volume by 200%.",
    // },

    // {
    //   company: "Solana Superteam",
    //   href: "https://superteam.fun",
    //   badges: ["Community Member & Builder"],
    //   location: "Remote, India",
    //   title: "Community Member & Builder",
    //   logoUrl:
    //     "https://pbs.twimg.com/profile_images/1679100194028392448/4_3L1nRh_400x400.jpg", // placeholder, update if you have the logo
    //   start: "March 2025",
    //   end: "Present",
    //   description:
    //     "Active member of Solana Superteam contributing to the ecosystem through projects, hackathons, and developer initiatives. Awarded grants for building on Solana and collaborated with the community to ship impactful Web3 products.",
    // },
    // {
    //   company: "Aiphi AI",
    //   href: "https://aiphi.ai/", // add company site if you want
    //   badges: ["Internship"],
    //   location: "Bengaluru, Karnataka, India · Hybrid",
    //   title: "Full Stack AI Engineer",
    //   logoUrl:
    //     "https://aiphi.ai/wp-content/uploads/2024/01/1080P-Full-HD-2.png",
    //   start: "February 2025",
    //   end: "April 2025",
    //   description:
    //     "Worked as a Full Stack AI Engineer intern, contributing to AI-driven product development and end-to-end application features, combining backend systems with AI model integration.",
    // },
  ],
  education: [
    {
      school: "Maulana Azad National Institute of Technology Bhopal",
      href: "https://www.manit.ac.in/",
      degree: "Bachelor of Technology",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png",
      start: "2023",
      end: "2027",
    },
  ],
  pprojects: [
    {
      title: "Resume Builder AI ",
      href: "https://ai-powered-resume-builder-tau.vercel.app/",
      dates: "2025",
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
      title: "AI PDF Chat Application",
      href: "xxx",
      dates: "2025",
      active: true,
      description:
        "Full-stack SaaS that enables users to upload and query PDF documents through an interactive AI chat interface. Built with Next.js and TypeScript, it includes secure user authentication via Clerk, scalable vector search using Pinecone, and Stripe-powered subscription billing. The application processes PDF content with AWS S3 and OpenAI to generate context-aware responses, backed by a PostgreSQL database managed via Drizzle ORM and optimized React Query workflows for seamless UI state handling.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Clerk",
        "Drizzle ORM",
        "PostgreSQL",
        "AWS SDK",
        "OpenAI API",
        "Stripe",
        "Pinecone",
        "Axios",
      ],
      links: [
        {
          type: "Website",
          href: "xxx",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/Chat-pdf",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatpdf.png",
      video: "",
    },
    {
      title: "KRUX Finance Support System",
      href: "xxx",
      dates: "2025",
      active: true,
      description:
        "Built a real-time finance support and ticketing platform enabling seamless communication between customers and agents. Implemented a chatbot-assisted customer interface with smart responses, message persistence, file uploads, and voice input using the Web Speech API. Developed a live agent dashboard with ticket management, quick replies, analytics, and multi-tab theme synchronization powered by the BroadcastChannel API.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "React Hook Form",
        "Zod",
        "BroadcastChannel API",
        "Web Speech API",
      ],
      links: [
        {
          type: "Website",
          href: "xxx",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivanshh27/Krux_Assesment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/krux.png",
      video: "",
    },
    {
      title: "Video Hosting Platform",
      href: "xxx",
      dates: "2025",
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
        "dotenv",
        "cors",
        "cookie-parser",
      ],
      links: [
        {
          type: "Website",
          href: "xxx",
          icon: <Icons.globe className="size-3" />,
        },
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
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
