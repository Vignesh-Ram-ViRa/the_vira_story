import React from 'react';
import { motion } from 'framer-motion';
import { 
  VscVerified, 
  VscOrganization, 
  VscKey, 
  VscLink,
  VscCode,
  VscDatabase,
  VscBeaker
} from 'react-icons/vsc';
import languageData from '../constants/language.json';
import './Certifications.css';

const Certifications = () => {
  const { certifications } = languageData;

  // Icon mapping for different certification types
  const iconMap = {
    java: VscCode,
    database: VscDatabase,
    testing: VscBeaker,
    default: VscVerified
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="certifications-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section className="certifications-hero" variants={itemVariants}>
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={itemVariants}>
            {certifications.title}
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {certifications.subtitle}
          </motion.p>
          
          <motion.p className="hero-description" variants={itemVariants}>
            {certifications.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Certifications Grid */}
      <motion.section className="certifications-content" variants={itemVariants}>
        <div className="certifications-grid">
          {certifications.list.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || iconMap.default;
            
            return (
              <motion.div
                key={cert.id}
                className="certification-card"
                variants={cardVariants}
                whileHover="hover"
                layout
                custom={index}
              >
                <div className="card-header">
                  <div className="cert-icon" style={{ backgroundColor: `${cert.color}20` }}>
                    <IconComponent 
                      className="icon" 
                      style={{ color: cert.color }}
                    />
                  </div>
                  
                  <div className="cert-status">
                    <span className={`status-badge ${cert.status.toLowerCase()}`}>
                      <VscVerified className="status-icon" />
                      {cert.status}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  
                  <div className="cert-meta">
                    <div className="meta-item">
                      <VscOrganization className="meta-icon" />
                      <span>{cert.provider} • {cert.issueDate}</span>
                    </div>
                    
                    <div className="meta-item">
                      <VscKey className="meta-icon" />
                      <span>{cert.credentialId}</span>
                    </div>
                  </div>

                  <p className="cert-description">{cert.description}</p>

                  <div className="cert-skills">
                    <div className="skills-list">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {(cert.verificationUrl || cert.badgeUrl) && (
                  <div className="card-actions">
                    {cert.verificationUrl && (
                      <motion.a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn verify"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <VscLink className="btn-icon" />
                        Verify Credential
                      </motion.a>
                    )}
                    
                    {cert.badgeUrl && (
                      <motion.a
                        href={cert.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn badge"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <VscVerified className="btn-icon" />
                        View Badge
                      </motion.a>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Certifications; 