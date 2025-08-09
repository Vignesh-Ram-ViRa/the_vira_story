/**
 * Language Constants - Centralized Application Content
 * 
 * This file contains all application text content and references centralized
 * personal constants to ensure consistency. Converted from JSON to JS to
 * enable import of personal constants.
 */

import { PERSONAL_INFO, SOCIAL_LINKS, PROFESSIONAL_CREDENTIALS, CAREER_INFO } from './personalConstants';

export const LANGUAGE_CONTENT = {
  "personalInfo": {
    "name": PERSONAL_INFO.NAME.FULL,
    "title": PERSONAL_INFO.PROFESSIONAL.TITLE,
    "email": PERSONAL_INFO.CONTACT.EMAIL,
    "phone": PERSONAL_INFO.CONTACT.PHONE,
    "handle": PERSONAL_INFO.NAME.HANDLE,
    "status": PERSONAL_INFO.PROFESSIONAL.STATUS,
    "overview": PERSONAL_INFO.PROFESSIONAL.OVERVIEW,
    "location": PERSONAL_INFO.CONTACT.LOCATION
  },
  "navigation": {
    "home": "Home",
    "career": "Career", 
    "skills": "Skills",
    "projects": "Projects",
    "certifications": "Certifications",
    "about": "About Me"
  },
  "openingSequence": {
    "clickMessage": "Click to enter"
  },
  "home": {
    "hero": {
      "greeting": "Hello, I'm",
      "name": PERSONAL_INFO.NAME.DISPLAY,
      "roles": [
        "React Developer",
        "People Manager", 
        "AI Enthusiast",
        "Problem Solver"
      ],
      "tagline": "Crafting digital experiences with 10+ years of passion",
      "description": "I transform ideas into scalable web solutions, blending technical expertise with creative problem-solving to build applications that users love."
    },
    "quickAccess": {
      "title": "Let's Connect",
      "resume": {
        "text": "View Resume",
        "downloadText": "Download PDF"
      },
      "linkedin": {
        "text": "LinkedIn Profile",
        "url": SOCIAL_LINKS.LINKEDIN.PROFILE_URL
      },
      "github": {
        "text": "GitHub",
        "url": SOCIAL_LINKS.GITHUB.PROFILE_URL
      },
      "email": {
        "text": "Get In Touch",
        "address": PERSONAL_INFO.CONTACT.EMAIL
      }
    },
    "highlights": {
      "title": "What I Bring to the Table",
      "items": [
        {
          "id": "experience",
          "title": "10+ Years",
          "subtitle": "Experience",
          "description": "Full-stack development across diverse domains",
          "icon": "VscHistory",
          "link": "/career"
        },
        {
          "id": "technologies",
          "title": "15+ Technologies",
          "subtitle": "Tech Stack",
          "description": "From React to Spring Boot, I've got you covered",
          "icon": "VscCode",
          "link": "/skills"
        },
        {
          "id": "projects",
          "title": "Featured Projects",
          "subtitle": "Latest Work",
          "description": "Real-world applications solving real problems",
          "icon": "VscProject",
          "link": "/projects"
        },
        {
          "id": "certifications",
          "title": "Certified Professional",
          "subtitle": "Credentials",
          "description": "Oracle, Microsoft, IBM certified developer",
          "icon": "VscVerified",
          "link": "/certifications"
        }
      ]
    },
    "personalSide": {
      "title": "Beyond the Code",
      "subtitle": "What keeps me inspired outside of work",
      "hobbies": [
        {
          "id": "sketching", 
          "title": "Art & Sketching",
          "description": "Freehand creativity and expression",
          "icon": "VscEdit",
          "color": "#4ecdc4",
          "link": "/about"
        },
        {
          "id": "travel",
          "title": "Travel",
          "description": "Exploring cultures and places",
          "icon": "VscLocation",
          "color": "#45b7d1",
          "link": "/about"
        },
        {
          "id": "photography",
          "title": "Photography",
          "description": "Capturing life's beautiful moments",
          "icon": "VscDeviceCameraVideo",
          "color": "#ff6b6b",
          "link": "/about"
        }
      ]
    },
    "callToAction": {
      "title": "Ready for a new endeavor?",
      "subtitle": "I'm always excited to work on new challenges and collaborate with passionate teams.",
      "status": "Currently open to new opportunities",
      "primaryAction": "Let's Connect",
      "secondaryAction": "View My Work"
    }
  },
  "career": {
    "title": "Professional Journey",
    "subtitle": "My career and education progression",
    "summary": "Over 10 years of diverse experience spanning across multiple technologies and domains, with a strong focus on full-stack development and continuous learning.",
    "experiences": [
      {
        "id": 1,
        "type": "work",
        "company": CAREER_INFO.CURRENT_ROLE.COMPANY,
        "position": CAREER_INFO.CURRENT_ROLE.POSITION,
        "duration": CAREER_INFO.CURRENT_ROLE.DURATION,
        "location": CAREER_INFO.CURRENT_ROLE.LOCATION,
        "teamSize": CAREER_INFO.CURRENT_ROLE.TEAM_SIZE,
        "client": CAREER_INFO.CURRENT_ROLE.CLIENT,
        "modules": "APPLY, DIY, Billpay",
        "technologies": ["React", "AngularJS", "Java8", "Spring", "Spring Boot"],
        "description": "Leading the FSE team in development of UI modules in the Business Lending platform. Contributed significantly to greenfield development of REST microservice APIs targeting Billpay and DIY platforms.",
        "highlights": [
          "Lead the team for over 4 years, successfully developing highly time-bound modules with numerous appreciations",
          "Learned new skills and platforms, won hackathons, helped hiring and menttoring and more"
        ]
      },
      {
        "id": 2,
        "type": "work",
        "company": CAREER_INFO.PREVIOUS_ROLE.COMPANY,
        "position": CAREER_INFO.PREVIOUS_ROLE.POSITION,
        "duration": CAREER_INFO.PREVIOUS_ROLE.DURATION,
        "location": CAREER_INFO.PREVIOUS_ROLE.LOCATION,
        "teamSize": CAREER_INFO.PREVIOUS_ROLE.TEAM_SIZE,
        "client": "TMX, KCC, Strate, CBK, EFI, Deceval, PDTC, CSCS, MCl, KELER, CBB, ACS",
        "modules": "TCS BaNCS",
        "technologies": ["Java", "JSP", "Bootstrap", "GWT", "JSF", "Oracle", "DB2", "Postgres"],
        "description": "Developed web-based app (MI-Frontier), a scheduler tool for running on-demand system task and was part of Technological Core Group",
        "highlights": [
          "Underwent intensive training in Java and started my career with GWT - Java UI framework, eventually moving to JSP, JSF and core java",
          "Part of TCG responsible for automation of build and release process for the entire product"
        ]
      },
      {
        "id": 3,
        "type": "education",
        "institution": PROFESSIONAL_CREDENTIALS.EDUCATION.COLLEGE,
        "degree": PROFESSIONAL_CREDENTIALS.EDUCATION.DEGREE,
        "duration": PROFESSIONAL_CREDENTIALS.EDUCATION.YEAR,
        "location": PERSONAL_INFO.CONTACT.LOCATION,
        "university": PROFESSIONAL_CREDENTIALS.EDUCATION.UNIVERSITY,
        "cgpa": PROFESSIONAL_CREDENTIALS.EDUCATION.CGPA,
        "technologies": ["Java", "C++", "HTML", "CSS", "JavaScript", "MySQL"],
        "description": "Completed Bachelor of Technology in Information Technology with outstanding academic performance.",
        "highlights": PROFESSIONAL_CREDENTIALS.EDUCATION.ACHIEVEMENTS.concat([
          `CGPA: ${PROFESSIONAL_CREDENTIALS.EDUCATION.CGPA}/10 -  University rank holder and consistently ranked among top three in the department throughout the curriculum.`,
          "Strong foundation in programming, web development, and database management"
        ])
      },
      {
        "id": 4,
        "type": "education",
        "institution": "A.V.Rm.V Matric Hr. Sec. School",
        "degree": "Higher Secondary Certificate (HSC)",
        "duration": "2009 – 2010",
        "location": "Tirunelveli",
        "percentage": "93.42%",
        "technologies": ["Mathematics", "Physics", "Chemistry", "Computer Science"],
        "description": "Completed Higher Secondary education with a strong foundation in science and mathematics.",
        "highlights": [
          "Achieved 93.42% in Higher Secondary examinations",
          "Topped the school in overall academic performance"
        ]
      },
      {
        "id": 5,
        "type": "education", 
        "institution": "A.V.Rm.V Matric Hr. Sec. School",
        "degree": "Secondary School Leaving Certificate (SSLC)",
        "duration": "2006 – 2007",
        "location": "Tirunelveli",
        "percentage": "94.4%",
        "technologies": ["English", "Tamil", "Mathematics", "Science", "Social Studies"],
        "description": "Completed secondary education with a strong academic foundation.",
        "highlights": [
          "Achieved 94.4% in SSLC examinations",
          "Topped the school in overall academic performance"
        ]
      }
    ]
  },
  "certifications": {
    "title": "Professional Certifications",
    "subtitle": "Validated expertise and credentials",
    "description": "Industry-recognized certifications that validate my technical expertise and commitment to professional development.",
    "stats": {
      "total": 4,
      "providers": ["Oracle", "Microsoft", "IBM"],
      "domains": ["Java Development", "Database Management", "Testing & QA"]
    },
    "categories": [
      {
        "id": "programming",
        "title": "Programming & Development",
        "description": "Certifications in programming languages and development frameworks",
        "certifications": [1]
      },
      {
        "id": "database",
        "title": "Database Management",
        "description": "Database administration and management certifications",
        "certifications": [2, 3]
      },
      {
        "id": "testing",
        "title": "Testing & Quality Assurance",
        "description": "Automated testing and quality assurance certifications", 
        "certifications": [4]
      }
    ],
    "list": [
      {
        "id": 1,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.CREDENTIAL_ID,
        "status": "Active",
        "description": "Validates comprehensive knowledge of Java programming language and demonstrates proficiency in Java SE 6 development.",
        "skills": ["Java Programming", "Object-Oriented Programming", "Core Java APIs", "Java Collections"],
        "icon": "java",
        "color": "#f89820",
        "badgeUrl": "",
        "verificationUrl": ""
      },
      {
        "id": 2,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.CREDENTIAL_ID,
        "status": "Active",
        "description": "Demonstrates expertise in SQL Server 2008 database management, query optimization, and administration.",
        "skills": ["Database Management", "SQL Queries", "Performance Tuning", "Database Administration"],
        "icon": "database",
        "color": "#0078d4",
        "badgeUrl": "",
        "verificationUrl": ""
      },
      {
        "id": 3,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.CREDENTIAL_ID,
        "status": "Active",
        "description": "Validates foundational knowledge of DB2 database concepts, SQL fundamentals, and application development.",
        "skills": ["DB2 Database", "SQL Fundamentals", "Database Design", "Application Development"],
        "icon": "database",
        "color": "#054ada",
        "badgeUrl": "",
        "verificationUrl": ""
      },
      {
        "id": 4,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.CREDENTIAL_ID,
        "status": "Active", 
        "description": "Demonstrates proficiency in using IBM Rational Functional Tester for automated testing of Java applications.",
        "skills": ["Automated Testing", "Java Testing", "Test Automation", "Quality Assurance"],
        "icon": "testing",
        "color": "#054ada",
        "badgeUrl": "",
        "verificationUrl": ""
      }
    ]
  },
  "skills": {
    "title": "Technical Skills",
    "subtitle": "Technologies I work with",
    "current": {
      "title": "Current Focus",
      "period": "Nov 2019 - Present",
      "technologies": [
        {
          "name": "React",
          "icon": "react",
          "category": "frontend"
        },
        {
          "name": "CSS",
          "icon": "css3",
          "category": "frontend"
        },
        {
          "name": "JavaScript",
          "icon": "javascript",
          "category": "frontend"
        },
        {
          "name": "HTML",
          "icon": "html5",
          "category": "frontend"
        }
      ]
    },
    "historical": {
      "title": "Previous Experience",
      "technologies": [
        {
          "name": "Java",
          "icon": "java",
          "category": "backend",
          "period": "2015-2019"
        },
        {
          "name": "Spring Boot",
          "icon": "spring",
          "category": "backend",
          "period": "2018-2019"
        },
        {
          "name": "AngularJS",
          "icon": "angularjs",
          "category": "frontend",
          "period": "2019"
        },
        {
          "name": "GWT",
          "icon": "google",
          "category": "frontend",
          "period": "2015"
        }
      ]
    },
    "tools": {
      "title": "Tools & Technologies",
      "technologies": [
        {
          "name": "Git",
          "icon": "git",
          "category": "tools"
        },
        {
          "name": "Jenkins",
          "icon": "jenkins",
          "category": "tools"
        },
        {
          "name": "Docker",
          "icon": "docker",
          "category": "tools"
        },
        {
          "name": "MySQL",
          "icon": "mysql",
          "category": "database"
        },
        {
          "name": "MongoDB",
          "icon": "mongodb",
          "category": "database"
        }
      ]
    },
    "vibeCoding": {
      "title": "AI-Assisted Development",
      "description": "Modern AI-powered coding tools and assistants",
      "technologies": [
        {
          "name": "Cursor",
          "icon": "cursor",
          "category": "vibeCoding",
          "description": "AI-first code editor with intelligent code completion and generation"
        },
        {
          "name": "GitHub Copilot",
          "icon": "github",
          "category": "vibeCoding",
          "description": "AI pair programmer that suggests code and entire functions"
        },
        {
          "name": "ChatGPT",
          "icon": "openai",
          "category": "vibeCoding",
          "description": "AI assistant for code review, debugging, and architectural decisions"
        },
        {
          "name": "Claude",
          "icon": "claude",
          "category": "vibeCoding",
          "description": "AI assistant for complex coding tasks and technical documentation"
        }
      ]
    }
  },
  "projects": {
    "title": "Featured Projects",
    "subtitle": "A showcase of my development work and creative solutions",
    "list": [
      {
        "id": 1,
        "name": "A Personalised Online Board Game",
        "description": "Developed a custom digital board game featuring my wife's life journey from childhood to present, complete with personal photos and memorable events. Created as a heartfelt birthday gift combining gaming mechanics with cherished memories.",
        "technologies": ["JavaScript", "CSS", "HTML", "Game Logic"],
        "status": "completed",
        "category": "Personal Project",
        "link": "https://vidhya-game-of-life.netlify.app/",
        "github": "https://github.com/Vignesh-Ram-ViRa/vid_game",
        "image": "https://vidhya-game-of-life.netlify.app/",
        "featured": true,
        "year": "2024"
      },
      {
        "id": 2,
        "name": "Enterprise Task Management System",
        "description": "Built a comprehensive task management platform for enterprise teams with real-time collaboration, advanced analytics, and automated workflow management. Features include drag-and-drop task boards, time tracking, and team performance insights.",
        "technologies": ["React", "Node.js", "PostgreSQL", "Socket.io", "Redux"],
        "status": "completed",
        "category": "Full-Stack Application",
        "link": "https://task-manager-enterprise.netlify.app/",
        "github": "https://github.com/vigneshram/enterprise-task-manager",
        "image": "/assets/images/project-task-manager.jpg",
        "featured": true,
        "year": "2023"
      },
      {
        "id": 3,
        "name": "Real-Time Weather Analytics Dashboard",
        "description": "Developed a sophisticated weather analytics platform that aggregates data from multiple APIs to provide detailed forecasts, historical trends, and climate insights. Features interactive maps, customizable alerts, and data visualization.",
        "technologies": ["React", "Chart.js", "Weather APIs", "Material-UI", "Express"],
        "status": "completed",
        "category": "Data Visualization",
        "link": "https://weather-analytics-pro.netlify.app/",
        "github": "https://github.com/vigneshram/weather-analytics",
        "image": "/assets/images/project-weather-dashboard.jpg",
        "featured": false,
        "year": "2023"
      },
      {
        "id": 4,
        "name": "AI-Powered Code Review Assistant",
        "description": "Created an intelligent code review tool that uses machine learning to analyze code quality, detect potential bugs, and suggest improvements. Integrates with popular IDEs and supports multiple programming languages with automated report generation.",
        "technologies": ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
        "status": "in-progress",
        "category": "AI/ML Application",
        "link": "https://code-review-ai.netlify.app/",
        "github": "https://github.com/vigneshram/ai-code-reviewer",
        "image": "/assets/images/project-ai-code-review.jpg",
        "featured": true,
        "year": "2024"
      }
    ]
  },
  "about": {
    "title": "About Me",
    "subtitle": "Get to know me better",
    "personalDetails": {
      "dateOfBirth": PERSONAL_INFO.PERSONAL.DATE_OF_BIRTH,
      "age": PERSONAL_INFO.PERSONAL.AGE,
      "nationality": PERSONAL_INFO.PERSONAL.NATIONALITY,
      "maritalStatus": PERSONAL_INFO.PERSONAL.MARITAL_STATUS,
      "languages": PERSONAL_INFO.PERSONAL.LANGUAGES
    },
    "education": {
      "title": "Education",
      "degree": PROFESSIONAL_CREDENTIALS.EDUCATION.DEGREE,
      "college": `${PROFESSIONAL_CREDENTIALS.EDUCATION.COLLEGE} (${PROFESSIONAL_CREDENTIALS.EDUCATION.UNIVERSITY})`,
      "year": PROFESSIONAL_CREDENTIALS.EDUCATION.YEAR,
      "cgpa": PROFESSIONAL_CREDENTIALS.EDUCATION.CGPA,
      "achievements": PROFESSIONAL_CREDENTIALS.EDUCATION.ACHIEVEMENTS
    },
    "certifications": [
      {
        "id": 1,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.ORACLE.CREDENTIAL_ID,
        "status": "Active",
        "description": "Validates comprehensive knowledge of Java programming language and demonstrates proficiency in Java SE 6 development.",
        "skills": ["Java Programming", "Object-Oriented Programming", "Core Java APIs", "Java Collections"],
        "icon": "java",
        "color": "#f89820",
        "badgeUrl": "",
        "verificationUrl": ""
      },
      {
        "id": 2,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.MICROSOFT.CREDENTIAL_ID,
        "status": "Active",
        "description": "Demonstrates expertise in SQL Server 2008 database management, query optimization, and administration.",
        "skills": ["Database Management", "SQL Queries", "Performance Tuning", "Database Administration"],
        "icon": "database",
        "color": "#0078d4",
        "badgeUrl": "",
        "verificationUrl": ""
      },
      {
        "id": 3,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_DB2.CREDENTIAL_ID,
        "status": "Active",
        "description": "Validates foundational knowledge of DB2 database concepts, SQL fundamentals, and application development.",
        "skills": ["DB2 Database", "SQL Fundamentals", "Database Design", "Application Development"],
        "icon": "database",
        "color": "#054ada",
        "badgeUrl": "",
        "verificationUrl": ""
      },
      {
        "id": 4,
        "title": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.TITLE,
        "provider": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.PROVIDER,
        "issueDate": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.ISSUE_DATE,
        "credentialId": PROFESSIONAL_CREDENTIALS.CERTIFICATIONS.IBM_RFT.CREDENTIAL_ID,
        "status": "Active", 
        "description": "Demonstrates proficiency in using IBM Rational Functional Tester for automated testing of Java applications.",
        "skills": ["Automated Testing", "Java Testing", "Test Automation", "Quality Assurance"],
        "icon": "testing",
        "color": "#054ada",
        "badgeUrl": "",
        "verificationUrl": ""
      }
    ],
    "extraCurricular": [
      "Passed senior grade in 'Freehand Outline & Model Drawing' Technical Examinations",
      "Passed junior grade in 'Typewriting-English' Government Technical Examinations", 
      "Awarded the degree of Rastrabasha Praveen by Dakshin Bharat Hindi Prachar Sabha"
    ]
  },
  "contact": {
    "title": "Let's Connect",
    "subtitle": "Get in touch",
    "details": {
      "email": PERSONAL_INFO.CONTACT.EMAIL,
      "phone": PERSONAL_INFO.CONTACT.PHONE,
      "location": PERSONAL_INFO.CONTACT.LOCATION,
      "linkedin": SOCIAL_LINKS.LINKEDIN.PROFILE_URL,
      "github": SOCIAL_LINKS.GITHUB.PROFILE_URL
    }
  },
  "socialMedia": [
    {
      "name": "LinkedIn", 
      "url": SOCIAL_LINKS.LINKEDIN.PROFILE_URL,
      "icon": "linkedin"
    },
    {
      "name": "GitHub",
      "url": SOCIAL_LINKS.GITHUB.PROFILE_URL,
      "icon": "github"
    },
    {
      "name": "Email",
      "url": SOCIAL_LINKS.EMAIL.MAILTO_URL,
      "icon": "email"
    },
    {
      "name": "Portfolio",
      "url": SOCIAL_LINKS.PORTFOLIO.URL,
      "icon": "website"
    }
  ],
  "themes": {
    "light": "Light Theme",
    "dark": "Dark Theme", 
    "pastel": "Pastel Theme"
  },
  "common": {
    "loading": "Loading...",
    "error": "Something went wrong",
    "tryAgain": "Try Again",
    "close": "Close",
    "open": "Open",
    "menu": "Menu",
    "downloadResume": "Download Resume"
  }
};

export default LANGUAGE_CONTENT; 