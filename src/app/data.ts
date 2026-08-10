export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["Python", "Kotlin", "Java", "C++", "JavaScript"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["Firebase", "MongoDB", "SQL"],
  },
  {
    category: "Tools & Technologies",
    icon: "smartphone",
    items: ["Git/Github", "VS Code", "Android Studio", "Figma", "Jupyter Notebook"],
  },
  {
    category: "AI/ML",
    icon: "zap",
    items: ["Scikit-learn", "Pandas", "NLP", "Machine Learning", "Data Analysis"],
  },
] as const;

export const projects = [
  {
    file: "patient-influx-portal.py",
    title: "Patient Influx Analysis Portal — Mansoorah Hospital",
    subtitle: "Quarterly Patient Data Visualization Dashboard",
    date: "May 2025",
    description:
      "Developed an interactive Streamlit-based analytics dashboard for quarterly patient influx analysis across 31 departments from 2022 to 2025. Enabled CSV upload, dynamic department selection, and real-time generation of bar and trend analysis graphs to support data-driven decision-making in hospital meetings. Used by administrative staff to understand trends and allocate resources effectively.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "CSV Parsing"],
    highlights: [
      "CSV upload & schema handling",
      "Department-wise filtering",
      "Quarterly bar & trend analysis graphs",
      "Used in real hospital meetings",
      "Data download for selected departments",
      "Cleaned and parsed noisy real-world hospital data",
    ],
    category: "Data Science",
    featured: true,
    github: "https://github.com/usmanz03/Mansoorah-Hospital-Patient-Influx-Analysis",
    website: "https://patient-influx-analysis.streamlit.app/",
  },
  {
    file: "meditrack.kt",
    title: "MediTrack",
    subtitle: "Android Personal Health Companion App",
    date: "April 2025",
    description:
      "Led development of a comprehensive health app using Kotlin, Java and Material 3 components. Features include medication scheduling, prescription management, pharmacy locator, medication & nutrition info viewer, BMI calculator and an AI chatbot with real-time Firebase integration. This app addresses critical healthcare management needs by providing users with an intuitive interface for tracking their health journey.",
    tech: ["Kotlin", "Java", "Firebase", "Material Design", "Android"],
    highlights: ["Medication tracker", "AI Chatbot", "Calendar view", "Nearby Pharmacy locator", "Prescriptions upload"],
    category: "Mobile Development",
    featured: true,
    github: "https://github.com/usmanz03/MediTrack",
  },
  {
    file: "sharedfast.kt",
    title: "SharedFast",
    subtitle: "Android Notes Sharing App",
    date: "March 2025",
    description:
      "Built a feature-rich app for capturing, organizing, and sharing image-based notes across Whatsapp, Gmail, Facebook and Bluetooth with folder-based management system. Implemented efficient RecyclerView patterns and MediaStore integration for seamless photo handling. The application streamlines note-taking workflows and enhances productivity through intelligent organization features.",
    tech: ["Kotlin", "MediaStore", "RecyclerView", "Material Design", "Android"],
    highlights: ["Folder-based organization", "Multi-platform sharing", "Image capture integration", "Adapter Pattern implementation"],
    category: "Mobile Development",
    featured: true,
    github: "https://github.com/usmanz03/SharedFast",
  },
  {
    file: "zakatflow.py",
    title: "ZakatFlow",
    subtitle: "Automated Zakat Computation System",
    date: "April 2024",
    description:
      "Developed and deployed an automated Zakat calculation system using Python and Streamlit, reducing manual effort by 90%. Features comprehensive asset visualization, automated calculations, and significant community impact through streamlined processes. The system has helped hundreds of users accurately calculate their religious obligations.",
    tech: ["Python", "Streamlit", "Data Visualization", "Pandas", "NumPy"],
    highlights: ["90% manual effort reduction", "Deployed app", "Asset visualization dashboard", "Automated calculation engine"],
    category: "Data Science",
    featured: true,
    github: "https://github.com/usmanz03/ZakatFlow",
    website: "https://zakatflow.streamlit.app/",
  },
] as const;

export const experiences = [
  {
    title: "Backend Engineer",
    company: "Arcompsol",
    duration: "Nov 2025 - July 2026",
    location: "Lahore, Pakistan",
    achievements: [
      "Developed a data pipeline for an enterprise insurance tech system achieving >90% accuracy in automated insurance file processing.",
      "Architected a dynamic metadata and RAG-based mapping system improving auto-mapping accuracy by 30% while reducing processing failures by 60% through Pandas optimization",
      "Collaborated on a major architectural migration of an enterprise health tech app  transitioning legacy Laravel and Node.js applications to a modern Next.js and NestJS stack to improve system scalability and performance.",
      "Architected and completely rewrote the caching architecture for a high-throughput fintech product, implementing advanced caching layers and fine-tuning TTL strategies to drastically reduce database load, minimize API latency, and ensure high availability for critical financial transactions.",
      "Technologies: Python, Django, Django REST Framework, PostgreSQL, Pandas, Next.js, NestJS",
    ],
  },
  {
    title: "AI Systems Intern & Team Lead - FAST School of Computing",
    company: "FAST-NUCES",
    duration: "June 2025 - Aug 2025",
    location: "Lahore, Pakistan",
    achievements: [
      "Led the development of PaperPilot, a neuro-symbolic AI platform for automated academic paper co-authoring",
      "Designed and implemented specialized agents (LLM Extraction Agent, Research Agent, Writing Agent, Citation Agent, Knowledge Graph Builder, and Orchestrator)",
      "Automated 80% of the end-to-end research workflow, reducing manual effort by 90% and improving citation accuracy by 70% for 50+ beta users",
      "Delivered features like dynamic graph visualization, auto-citation planning, and DOCX export for seamless user experience",
      "Technologies: Python, Streamlit, NetworkX (Knowledge Graphs), LangChain, Large Language Models (LLMs), DOCX Export",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "DropShot",
    duration: "June 2025 - Aug 2025",
    location: "Remote",
    achievements: [
      "Developed and optimized front-end dashboards using React and TypeScript for real-time padel player performance analytics",
      "Contributed to system design discussions, improving dashboard architecture and scalability",
      "Implemented responsive design patterns ensuring optimal user experience across desktop and mobile platforms",
      "Collaborated with cross-functional teams to deliver high-quality features within tight deadlines",
      "Technologies: React, TypeScript, Tailwind CSS, REST APIs, Git, Figma",
    ],
    website: "https://www.drop-shot.live",
  },
  {
    title: "Junior Machine Learning Engineer",
    company: "Omdena (Client: IREX)",
    duration: "June 2024 - Aug 2024",
    location: "Remote",
    achievements: [
      "Collaborated with global team to develop AI-powered content moderation and fact-checking tools for combating misinformation",
      "Built comprehensive performance analysis notebook categorizing 10,000+ texts with 85%+ accuracy using advanced NLP techniques",
      "Enhanced fact classification agent functionality, improving overall workflow efficiency by 30-40%",
      "Participated in agile development cycles and contributed to technical documentation and code reviews",
      "Technologies: Python, Pandas, Scikit-learn, Machine Learning, Natural Language Processing",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "National University of Computer and Emerging Sciences",
  location: "Lahore, Pakistan",
  duration: "August 2022 - May 2026",
  description:
    "Graduated with a focus on AI/ML, software development, and computer science fundamentals, building a strong foundation in algorithms, data structures, and emerging technologies.",
};

export const contactLinks = [
  { label: "email", value: "usmanzafar2003@gmail.com", href: "mailto:usmanzafar2003@gmail.com" },
  { label: "linkedin", value: "linkedin.com/in/usman--zafar", href: "https://www.linkedin.com/in/usman--zafar/" },
  { label: "github", value: "github.com/usmanz03", href: "https://github.com/usmanz03" },
] as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
