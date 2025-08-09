import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/molecules/TimelineItem/TimelineItem';
import { getLanguageContent } from '../utils/language';
import './Career.css';

/**
 * Career page with professional timeline
 * Shows career progression in scroll milestone format
 */
const Career = () => {
  const content = getLanguageContent();
  const { career } = content;

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="career-page">
      <div className="career-container">
        {/* Header Section */}
        <div className="career-header">
          <motion.h1 
            className="career-title"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            {career.title}
          </motion.h1>
          
          <motion.p 
            className="career-subtitle"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            {career.subtitle}
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div className="career-timeline">
          <div className="timeline-container">
            {career.experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
                isLast={index === career.experiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div 
          className="career-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="summary-card">
            <h3 className="summary-title">Professional Journey</h3>
            <p className="summary-text">
              {career.summary}
            </p>
            
            <div className="career-stats">
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career; 