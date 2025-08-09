/**
 * Personal Constants - Centralized Personal Information Management
 * 
 * This file contains all personal information, contact details, and social media links
 * to ensure consistency across the entire application. All hardcoded personal data
 * should reference these constants.
 * 
 * Usage:
 * import { PERSONAL_INFO } from './personalConstants';
 * const email = PERSONAL_INFO.CONTACT.EMAIL;
 */

// Core personal information
export const PERSONAL_INFO = {
  // Name variations for different contexts
  NAME: {
    FULL: "Vignesh Ram. S",
    DISPLAY: "Vignesh Ram",
    HANDLE: "vigneshram"
  },
  
  // Contact information
  CONTACT: {
    EMAIL: "vigneshuramu@gmail.com",
    PHONE: "+91-9941915024",
    LOCATION: "Chennai, India"
  },
  
  // Professional information
  PROFESSIONAL: {
    TITLE: "Manager - Projects | Full-Stack Developer",
    STATUS: "Available for opportunities",
    OVERVIEW: "With over 10 years of diverse experience as a full-stack developer, I've transitioned between roles in Frontend, Backend, and Operations at distinct stages of my career."
  },
  
  // Personal details
  PERSONAL: {
    DATE_OF_BIRTH: "13-08-1992",
    AGE: "33",
    NATIONALITY: "Indian",
    MARITAL_STATUS: "Married",
    LANGUAGES: ["English (R/W/S)", "Tamil (R/W/S)", "Hindi (R/W)"]
  }
};

// Social media and external links
export const SOCIAL_LINKS = {
  LINKEDIN: {
    PROFILE_URL: "https://linkedin.com/in/vignesh-ram-vira"
  },
  
  GITHUB: {
    PROFILE_URL: "https://github.com/Vignesh-Ram-ViRa"
  },
  
  EMAIL: {
    MAILTO_URL: `mailto:${PERSONAL_INFO.CONTACT.EMAIL}`,
    DISPLAY: PERSONAL_INFO.CONTACT.EMAIL
  },
  
  PORTFOLIO: {
    URL: "https://vigneshuram.dev"
  },
  
  // Additional social media (when available)
  TWITTER: "https://twitter.com/vigneshramvira",
  INSTAGRAM: "https://instagram.com/vignesh_ram_vira"
};

// Professional credentials and achievements
export const PROFESSIONAL_CREDENTIALS = {
  EDUCATION: {
    DEGREE: "B.Tech (Information Technology)",
    COLLEGE: "Rajalakshmi Engineering College",
    UNIVERSITY: "Anna University",
    YEAR: "2010-2014",
    CGPA: "8.48",
    ACHIEVEMENTS: [
      "University rank holder for B.Tech Information Technology (Anna University)",
      "Ranked among the top three in the department of Information Technology throughout the curriculum"
    ]
  },
  
  CERTIFICATIONS: {
    ORACLE: {
      TITLE: "Oracle Certified Professional, Java SE 6 Programmer",
      PROVIDER: "Oracle Corporation",
      ISSUE_DATE: "March 2016",
      CREDENTIAL_ID: "OCP-JSE6-001234"
    },
    MICROSOFT: {
      TITLE: "Microsoft Certified Technology Specialist: SQL Server 2008",
      PROVIDER: "Microsoft Corporation",
      ISSUE_DATE: "August 2016",
      CREDENTIAL_ID: "MCTS-SQL2008-001234"
    },
    IBM_DB2: {
      TITLE: "IBM Certified Academic Associate: DB2 9 Database and Application Fundamentals",
      PROVIDER: "IBM Corporation",
      ISSUE_DATE: "January 2015",
      CREDENTIAL_ID: "IBM-DB2-001234"
    },
    IBM_RFT: {
      TITLE: "IBM Certified Solution Designer Rational Functional Tester for Java",
      PROVIDER: "IBM Corporation",
      ISSUE_DATE: "June 2015",
      CREDENTIAL_ID: "IBM-RFT-001234"
    }
  }
};

// Experience and career information
export const CAREER_INFO = {
  CURRENT_ROLE: {
    COMPANY: "Cognizant Technology Solutions",
    POSITION: "Manager - Projects",
    DURATION: "July 2019 – Present",
    LOCATION: "Chennai",
    TEAM_SIZE: "25",
    CLIENT: "U.S. Bancorp"
  },
  
  PREVIOUS_ROLE: {
    COMPANY: "Tata Consultancy Services",
    POSITION: "System Engineer",
    DURATION: "November 2014 – July 2019",
    LOCATION: "Chennai",
    TEAM_SIZE: "6"
  }
};

// Combine all constants for easy export
const PERSONAL_CONSTANTS = {
  PERSONAL_INFO,
  SOCIAL_LINKS,
  PROFESSIONAL_CREDENTIALS,
  CAREER_INFO
};

export default PERSONAL_CONSTANTS; 