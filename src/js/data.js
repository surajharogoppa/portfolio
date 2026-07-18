export const portfolioData = {
  personal: {
    name: "Suraj Harogoppa",
    role: "Backend Software Engineer",
    bio: [
      "Backend Software Engineer with 2.7 years of experience building scalable REST APIs and web applications using Python, Django, FastAPI, and SQL.",
      "Proven track record delivering production billing and campus-management systems, integrating LLM-powered features (Gemini API, RAG, prompt engineering) into enterprise workflows, and collaborating with Android teams on mobile integrations.",
      "Strong background in database design, API architecture, and automation (GitHub Actions CI/CD)."
    ],
    email: "surajharogoppa@gmail.com",
    linkedin: "https://www.linkedin.com/in/surajharogoppa",
    github: "https://github.com/surajharogoppa",
    phone: "+91 8548062933",
    resumeUrl: "./assets/resume.pdf"
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Zygox Infotech Private Limited",
      period: "Dec 2025 – Present",
      achievements: [
        "Developed and maintained a production electricity billing system for HESCOM operations, supporting core billing and collection workflows for utility customers.",
        "Designed and integrated REST APIs in Python/Django for billing, tariff validation, and business-rule workflows, improving consistency across billing operations.",
        "Built LLM-based assistance (Gemini API) into the billing application to help resolve customer billing queries, reducing manual query handling.",
        "Implemented electricity tariff validation and billing business logic to ensure accurate charge calculation.",
        "Built CI/CD pipelines with GitHub Actions (self-hosted runner) to automate daily data upload, removing manual upload steps.",
        "Integrated meter probe devices for real-time meter data reading, collaborating with the Android team on mobile-side integration."
      ]
    },
    {
      role: "Software Developer",
      company: "Spizella India Private Limited",
      period: "Jan 2024 – Nov 2025",
      achievements: [
        "Developed backend modules in Django for Medical College Management and LMS platforms, supporting academic and administrative workflows across institutions.",
        "Designed and implemented REST APIs enabling frontend-backend communication for multi-institution deployments.",
        "Integrated a Facial Recognition Attendance System with real-time tracking, automating attendance capture.",
        "Implemented QR-based access control for campus security across institutions.",
        "Managed database operations (PostgreSQL/MySQL) and enforced data validation to maintain data integrity."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bharatesh College of Computer Application, Belagavi",
      period: "2020 – 2023",
      score: "CGPA: 8.11"
    }
  ],
  skills: [
    {
      category: "Languages",
      icon: "code",
      items: ["Python", "Java", "SQL"]
    },
    {
      category: "Backend & APIs",
      icon: "server",
      items: ["Django", "Django REST Framework", "FastAPI", "REST API Design & Integration"]
    },
    {
      category: "Databases",
      icon: "database",
      items: ["PostgreSQL", "MySQL", "SQLite", "Redis"]
    },
    {
      category: "AI / GenAI",
      icon: "bot",
      items: ["Gemini API", "LLM Integration", "RAG", "AI Agents", "Prompt Engineering"]
    },
    {
      category: "Tools & Practices",
      icon: "wrench",
      items: ["Git", "GitHub", "GitHub Actions", "CI/CD Pipelines", "Docker", "Jira", "Android Integration"]
    }
  ],
  projects: [
    {
      id: "01",
      title: "Automated Deployment Pipeline",
      description: [
        "Implemented end-to-end deployment automation for web applications using GitHub Actions and Render.",
        "Containerized applications utilizing Docker best practices for consistent development and production environments.",
        "Configured CI/CD workflows to automatically build, test, and deploy upon pushing code to the repository."
      ],
      images: [
        "https://placehold.co/800x600/18181b/ffffff?text=CI/CD+%2B+Docker"
      ],
      tags: ["GitHub Actions", "Docker", "CI/CD", "Render"],
      githubUrl: "https://github.com/surajharogoppa/CICD_Practice"
    },
    {
      id: "02",
      title: "HireVai — Job Portal",
      description: [
        "Built a full-stack job portal (React, Django REST Framework) supporting end-to-end hiring workflows: job posting, applications, and automated MCQ assessments.",
        "Implemented role-based authentication and REST APIs, with dashboards for candidates and recruiters and result tracking."
      ],
      images: [
        "./images/projects/hire1.jpg",
        "./images/projects/hire2.jpg",
        "./images/projects/hire3.jpg",
        "./images/projects/hire4.jpg",
        "./images/projects/hire5.jpg"
      ],
      tags: ["React", "Django REST Framework", "REST APIs", "Python"],
      githubUrl: "https://github.com/surajharogoppa"
    },
    {
      id: "03",
      title: "MindSeek — AI-Powered Utility Chatbot",
      description: [
        "Built a Django-based AI chatbot using Gemini API and modular GenAI agents to deliver real-time responses to day-to-day utility service queries.",
        "Designed modular service handlers to process and route user queries accurately across service types."
      ],
      images: [
        "./images/projects/mindseek-1.jpg",
        "./images/projects/mindseek-2.jpg",
        "./images/projects/mindseek-3.jpg",
        "./images/projects/mindseek-4.jpg",
        "./images/projects/mindseek-5.jpg"
      ],
      tags: ["Python", "Django", "Gemini API", "GenAI Agents"],
      demoUrl: "https://mindseek.onrender.com"
    },
    {
      id: "04",
      title: "Smart Compose AI — Email Content Generator",
      description: [
        "Built an AI-powered email composition tool (Java, Spring Boot) with tone customization using the Gemini API for dynamic content generation.",
        "Designed a responsive UI to support real-time, intelligent email content generation."
      ],
      images: [
        "./images/projects/smart-1.jpg",
        "./images/projects/smart-2.jpg",
        "./images/projects/smart-3.jpg",
        "./images/projects/smart-4.jpg"
      ],
      tags: ["Java", "Spring Boot", "Gemini API", "UI Design"],
      demoUrl: "https://smart-compose.onrender.com"
    }
  ],
  certificates: [
    { title: "Python", issuer: "Test Automation University", link: "https://testautomationu.applitools.com/certificate/?id=55add08a" },
    { title: "SQL", issuer: "Besant Technologies", link: "https://drive.google.com/file/d/1bAAsCKQd7DpIFABT7qLUzJtJp2xASwJ-/view?usp=drive_link" },
    { title: "Java Full Stack", issuer: "Besant Technologies", link: "https://drive.google.com/file/d/1dNmnABKMPqvlx6T4dcG0y2ekBdZiE5Vd/view?usp=sharing" },
    { title: "Prompt Engineering", issuer: "Cognitive Class By IBM", link: "https://courses.cognitiveclass.ai/certificates/bedb2f584cb4461997ae6d2cb368de80" }
  ]
};
