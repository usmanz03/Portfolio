"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Calendar,Code, Database, Smartphone, GraduationCap, Briefcase, Download, ArrowRight, Star, Zap } from 'lucide-react';
import ResumeModal from './components/ResumeModal';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };



  const staggerChildren = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const skills = [
    { 
      category: "Languages", 
      items: ["Python", "Kotlin", "Java", "C++", "JavaScript"],
      icon: <Code className="w-6 h-6" />
    },
   
    { 
      category: "Databases", 
      items: ["Firebase", "MongoDB", "SQL"],
      icon: <Database className="w-6 h-6" />
    },
    { 
      
      category: "Tools & Technologies", 
      items: ["Git/Github", "VS Code", "Android Studio", "Figma", "Jupyter Notebook"],
      icon: <Smartphone className="w-6 h-6" />
    },
    { 
      category: "AI/ML", 
      items: ["Scikit-learn", "Pandas", "NLP", "Machine Learning", "Data Analysis"],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const projects = [
    {
        title: "Patient Influx Analysis Portal- Mansoorah Hospital",
      subtitle: "Quarterly Patient Data Visualization Dashboard",
      date: "May 2025",
      description: "Developed an interactive Streamlit-based analytics dashboard for quarterly patient influx analysis across 31 departments from 2022 to 2025. Enabled CSV upload, dynamic department selection, and real-time generation of bar and trend analysis graphs to support data-driven decision-making in hospital meetings. Used by administrative staff to understand trends and allocate resources effectively.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly", "CSV Parsing"],
     highlights: [
      "CSV upload & schema handling",
      "Department-wise filtering",
      "Quarterly bar & trend analysis graphs",
      "Used in real hospital meetings",
      "Data download for selected departments",
      "Cleaned and parsed noisy real-world hospital data"
    ],
      category: "Data Science",
      featured: true,
      github: "https://github.com/syed-muhammad-usman-zafar/Mansoorah-Hospital-Patient-Influx-Analysis",
      website: "https://patient-influx-analysis.streamlit.app/"
    },
    {
      title: "MediTrack",
      subtitle: "Android Personal Health Companion App",
      date: "April 2025",
      description: "Led development of a comprehensive health app using Kotlin, Java and Material 3 components. Features include  medication scheduling, prescription management, pharmacy locator,medication & nutrition info viewer, BMI calculator and an AI chatbot with real-time Firebase integration. This app addresses critical healthcare management needs by providing users with an intuitive interface for tracking their health journey.",
      tech: ["Kotlin", "Java", "Firebase", "Material Design", "Android"],
      highlights: ["Medication tracker",,"AI Chatbot", "Calendar view","Nearby Pharmacy locator","Perscritions upload" ],
      category: "Mobile Development",
      featured: true,
      github:"https://github.com/syed-muhammad-usman-zafar/MediTrack"
    },
    {
      title: "SharedFast",
      subtitle: "Android Notes Sharing App",
      date: "March 2025",
      description: "Built a feature-rich app for capturing, organizing, and sharing image-based notes across Whatsapp, Gmail ,Facebook and Bluetooth with folder-based management system. Implemented efficient RecyclerView patterns and MediaStore integration for seamless photo handling. The application streamlines note-taking workflows and enhances productivity through intelligent organization features.",
      tech: ["Kotlin","MediaStore", "RecyclerView", "Material Design","Android"],
      highlights: ["Folder-based organization", "Multi-platform sharing", "Image capture integration", "Adapter Pattern implementation"],
      category: "Mobile Development",
      featured: true,
      github:"https://github.com/syed-muhammad-usman-zafar/SharedFast"
     
    },
    
    {
      title: "ZakatFlow",
      subtitle: "Automated Zakat Computation System",
      date: "April 2024",
      description: "Developed and deployed an automated Zakat calculation system using Python and Streamlit, reducing manual effort by 90%. Features comprehensive asset visualization, automated calculations, and significant community impact through streamlined processes. The system has helped hundreds of users accurately calculate their religious obligations.",
      tech: ["Python", "Streamlit", "Data Visualization", "Pandas", "NumPy"],
      highlights: ["90% manual effort reduction", "Deployed app", "Asset visualization dashboard", "Automated calculation engine"],
      category: "Data Science",
      featured: true,
        github: "https://github.com/syed-muhammad-usman-zafar/ZakatFlow", // Add your actual repo URL
      website: "https://zakatflow.streamlit.app/" // Add if deployed
    }
    
  ];

  const experiences = [
    {
      title: "AI Systems Intern & Team Lead - FAST School of Computing",
      company: "FAST-NUCES",
      duration: "June 2025 - Aug 2025",
      location: "Lahore, Pakistan",
      achievements: [
        "Led a 5-member team in developing PaperPilot, a neuro-symbolic AI platform for automated academic paper co-authoring",
        "Designed and implemented specialized agents (LLM Extraction Agent, Research Agent, Writing Agent, Citation Agent, Knowledge Graph Builder, and Orchestrator)",
        "Automated 80% of the end-to-end research workflow, reducing manual effort by 90% and improving citation accuracy by 70% for 50+ beta users",
        "Delivered features like dynamic graph visualization, auto-citation planning, and DOCX export for seamless user experience",
        "Technologies: Python, Streamlit, NetworkX (Knowledge Graphs), LangChain, Large Language Models(LLMs), DOCX Export"
      ]
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
        "Technologies: React, TypeScript, Tailwind CSS, REST APIs, Git, Figma"
      ],
      website: "https://www.drop-shot.live"
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
        "Technologies: Python, Pandas, Scikit-learn, Machine Learning, Natural Language Processing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white">
      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Enhanced Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-xl border-b border-emerald-800/30' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">UZ</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Usman Zafar
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-emerald-400 transition-colors relative group"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.toLowerCase() ? 'w-full' : ''
                  }`}></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/*  Hero Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">
        {/* Simplified Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-emerald-900/30 border border-emerald-700/50 rounded-full"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-emerald-300 text-sm">Available for opportunities</span>
                </motion.div>
                
                <motion.h1 
                  className="text-6xl lg:text-7xl font-bold leading-tight"
                  variants={fadeInUp}
                >
                  <span className="text-white">Im </span>
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Usman
                  </span>
                </motion.h1>
                
                <motion.div 
                  className="text-2xl lg:text-3xl text-slate-300 space-y-2"
                  variants={fadeInUp}
                >
                  <p>Computer Science Student &</p>
                  <p className="text-emerald-400 font-semibold">AI/ML Enthusiast</p>
                </motion.div>
              </div>

              <motion.p 
                className="text-xl text-slate-400 leading-relaxed max-w-xl mb-8"
                variants={fadeInUp}
              >
                7th-semester Computer Science student with hands-on experience in AI/ML, web, and Android development. 
                Passionate about building impactful solutions and improving user experiences through technology.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                variants={staggerChildren}
              >
                <motion.a 
                  href="https://www.linkedin.com/in/usman--zafar/" 
                  className="group inline-flex items-center px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-700 hover:border-emerald-500 transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  Lets Connect
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.button 
                  onClick={() => setIsResumeModalOpen(true)}
                  className="inline-flex items-center px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-700 hover:border-emerald-500 transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </motion.button>
                
                <motion.a 
                  href="https://github.com/syed-muhammad-usman-zafar" 
                  className="inline-flex items-center px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-700 hover:border-emerald-500 transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5 mr-3" />
                  View GitHub
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Simplified Photo Section */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl scale-110"></div>
                
               {/* Main photo container */}
                  <div className="relative w-80 h-96 bg-gradient-to-br from-slate-800 to-emerald-900 rounded-3xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-slate-800 rounded-3xl overflow-hidden">
                      <Image 
                        src="/images/profile.jpg"
                        alt="My Photo"
                        width={320}
                        height={384}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                {/* Static floating elements - no animation to reduce lag */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-400/30">
                  <Code className="w-8 h-8 text-emerald-400" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-400/30">
                  <Zap className="w-6 h-6 text-teal-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Building impactful solutions with cutting-edge technology
            </p>
          </motion.div>

          <div className="relative space-y-8">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-400"></div>
            
            {experiences.map((experience, index) => (
              <motion.div 
                key={index} 
                className="relative bg-gradient-to-br from-slate-800/50 to-emerald-900/20 rounded-3xl p-8 border border-emerald-800/30 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-8">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{experience.title}</h3>
                        <p className="text-xl text-emerald-400 font-semibold">{experience.company}</p>
                      </div>
                      <div className="text-slate-400 mt-4 lg:mt-0 space-y-2">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-emerald-400" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-emerald-400" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-4 group">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                          <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {experience.website && (
                      <div className="mt-6">
                        <a 
                          href={experience.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors hover:scale-105 transform duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Innovative solutions that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-emerald-900/20 rounded-3xl p-8 border border-emerald-800/30 backdrop-blur-sm hover:border-emerald-600/50 transition-all duration-300 hover:scale-[1.01] ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {project.featured && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <p className="text-emerald-400 font-semibold mb-3">{project.subtitle}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                      <div className="px-3 py-1 bg-emerald-900/30 rounded-full border border-emerald-700/50">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-8">{project.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-xl text-sm font-medium hover:bg-emerald-900/30 hover:border-emerald-600/50 transition-colors hover:scale-105 transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors mr-3 hover:scale-105 transform duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors hover:scale-105 transform duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo  
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-emerald-900/20 rounded-3xl p-8 border border-emerald-800/30 backdrop-blur-sm hover:border-emerald-600/50 transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-3 text-white hover:scale-110 transition-transform duration-200">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-200">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-slate-300 group-hover/item:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-emerald-900/20 rounded-3xl p-8 border border-emerald-800/30 backdrop-blur-sm">
              <div className="flex items-start gap-8">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">Bachelor of Science in Computer Science</h3>
                  <p className="text-xl text-emerald-400 font-semibold mb-4">National University of Computer and Emerging Sciences</p>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6 text-slate-400 mb-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <span>Lahore, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-emerald-400" />
                      <span>August 2022 - Present</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    Currently in 7th semester, focusing on AI/ML, software development, and computer science fundamentals. 
                    Building a strong foundation in algorithms, data structures, and emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Lets Connect
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Im always interested in new opportunities and collaborations. 
              Feel free to reach out if youd like to work together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-5xl mx-auto">
            {[
              { icon: <Mail className="w-8 h-8" />, label: "Email", value: "usmanzafar2003@gmail.com", href: "mailto:usmanzafar2003@gmail.com" },
              { icon: <Linkedin className="w-8 h-8" />, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/usman--zafar/" },
              { icon: <Github className="w-8 h-8" />, label: "GitHub", value: "View my code", href: "https://github.com/syed-muhammad-usman-zafar" }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group bg-gradient-to-br from-slate-800/50 to-emerald-900/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-800/30 hover:border-emerald-600/50 transition-all duration-500 hover:scale-105 text-center"
              >
                <div className="text-emerald-400 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h3 className="font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{contact.label}</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-emerald-800/30 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">UZ</span>
            </div>
            <span className="text-slate-400">
              © 2025 Syed Muhammad Usman Zafar
            </span>
          </div>
          <p className="text-slate-500 text-sm">
             Made by me :)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;