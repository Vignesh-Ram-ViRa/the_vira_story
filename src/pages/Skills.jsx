import React from 'react';
import { motion } from 'framer-motion';
import { 
  VscCode, 
  VscDatabase, 
  VscServer, 
  VscSymbolInterface,
  VscSymbolClass,
  VscCloud
} from 'react-icons/vsc';
import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaJava, 
  FaDocker, 
  FaGitAlt,
  FaNodeJs,
  FaAngular,
  FaHtml5
} from 'react-icons/fa';
import { 
  SiSpring, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiJenkins,
  SiOracle,
  SiBootstrap,
  SiTailwindcss,
  SiRedux
} from 'react-icons/si';
import { getLanguageContent } from '../utils/language';
import './Skills.css';

const Skills = () => {
  const content = getLanguageContent();
  const skillsData = content.skills;

  // Flatten the nested skills structure
  const skills = [
    ...(skillsData.current?.technologies || []).map(tech => ({ ...tech, category: 'current' })),
    ...(skillsData.historical?.technologies || []).map(tech => ({ ...tech, category: 'historical' })),
    ...(skillsData.tools?.technologies || []).map(tech => ({ ...tech, category: tech.category || 'tools' }))
  ];

  // Icon mapping for technologies
  const techIcons = {
    // Current Technologies
    'React': <FaReact />,
    'CSS': <FaCss3Alt />,
    'JavaScript': <FaJs />,
    'HTML': <FaHtml5 />,
    'Node.js': <FaNodeJs />,
    'Redux': <SiRedux />,
    'Tailwind CSS': <SiTailwindcss />,
    
    // Historical Technologies
    'Java': <FaJava />,
    'Spring Boot': <SiSpring />,
    'AngularJS': <FaAngular />,
    'GWT': <VscSymbolClass />,
    'JSP': <VscCode />,
    'JSF': <VscSymbolInterface />,
    'Bootstrap': <SiBootstrap />,
    
    // Tools & Databases
    'Git': <FaGitAlt />,
    'Jenkins': <SiJenkins />,
    'Docker': <FaDocker />,
    'MySQL': <SiMysql />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'Oracle': <SiOracle />,
    'DB2': <VscDatabase />,
    'Postman': <VscCode />,
    'Rancher': <VscCloud />,
    'Websphere': <VscServer />,
    'Weblogic': <VscServer />,
    'Jboss': <VscServer />,
    'Apache Tomcat': <VscServer />,
    
    // Default fallback
    'default': <VscCode />
  };

  const getTechIcon = (techName) => {
    return techIcons[techName] || techIcons['default'];
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'current':
        return 'var(--color-primary)';
      case 'historical':
        return 'var(--color-accent)';
      case 'tools':
      case 'database':
        return 'var(--color-text-secondary)';
      default:
        return 'var(--color-primary)';
    }
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case 'current':
        return 'Current Technologies';
      case 'historical':
        return 'Historical Experience';
      case 'tools':
        return 'Development Tools';
      case 'database':
        return 'Databases';
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  // Category order for display
  const categoryOrder = ['current', 'historical', 'tools', 'database'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="skills-page">
      {/* Header Section */}
      <div className="skills-header">
        <motion.h1 
          className="skills-title"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Technical Skills
        </motion.h1>
        <motion.p 
          className="skills-subtitle"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          Technologies and tools I've mastered throughout my {content.personalInfo.experience} years of development experience
        </motion.p>
      </div>

      {/* Skills Categories */}
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categoryOrder.map((category) => {
          const categorySkills = groupedSkills[category];
          if (!categorySkills || categorySkills.length === 0) return null;

          return (
            <motion.div 
              key={category}
              className="skills-category"
              variants={cardVariants}
            >
              <motion.div 
                className="category-header"
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 + (categoryOrder.indexOf(category) * 0.2) }}
              >
                <motion.h2 
                  className="category-title"
                  style={{ color: getCategoryColor(category) }}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 + (categoryOrder.indexOf(category) * 0.2) }}
                >
                  {getCategoryTitle(category)}
                </motion.h2>
                <motion.div 
                  className="category-line"
                  style={{ backgroundColor: getCategoryColor(category) }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    delay: 0.8 + (categoryOrder.indexOf(category) * 0.2), 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                />
              </motion.div>

              <motion.div 
                className="skills-grid"
                variants={containerVariants}
              >
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={`${category}-${index}`}
                    className="skill-card"
                    variants={cardVariants}
                    whileHover="hover"
                    style={{ '--category-color': getCategoryColor(category) }}
                  >
                    <motion.div 
                      className="skill-icon"
                      variants={iconVariants}
                    >
                      {getTechIcon(skill.name)}
                    </motion.div>
                    
                    <div className="skill-info">
                      <motion.h3 
                        className="skill-name"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.0 + (categoryOrder.indexOf(category) * 0.2) + (index * 0.05) }}
                      >
                        {skill.name}
                      </motion.h3>
                      <motion.div 
                        className="skill-category-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 + (categoryOrder.indexOf(category) * 0.2) + (index * 0.05) }}
                      >
                        {category}
                      </motion.div>
                    </div>

                    <div className="skill-glow" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>


    </div>
  );
};

export default Skills; 