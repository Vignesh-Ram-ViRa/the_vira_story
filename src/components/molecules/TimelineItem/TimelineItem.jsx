import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { VscCalendar, VscLocation, VscAccount, VscCode, VscMortarBoard, VscBriefcase } from 'react-icons/vsc';
import './TimelineItem.css';

/**
 * TimelineItem component for career/education timeline
 * Displays in centered vertical layout with proper alternating card positions
 */
const TimelineItem = ({ experience, index, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const isEducation = experience.type === 'education';
  // Fix alternating logic: even indices (0,2,4) = content right, meta left
  // odd indices (1,3,5) = content left, meta right
  const isContentRight = index % 2 === 0;

  return (
    <div 
      ref={itemRef}
      className={`timeline-item-centered ${isContentRight ? 'content-right' : 'content-left'}`}
    >
      {/* Meta Information - Positioned first in DOM for content-right, second for content-left */}
      <motion.div
        className={`timeline-meta ${isContentRight ? 'left' : 'right'}`}
        variants={itemVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="timeline-meta-content">
          <div className="meta-item duration">
            <VscCalendar className="meta-icon" />
            <span className="meta-text">{experience.duration}</span>
          </div>
          
          <div className="meta-item location">
            <VscLocation className="meta-icon" />
            <span className="meta-text">{experience.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Center Line with Icon */}
      <div className="timeline-center">
        <div className="timeline-line-segment">
          {!isLast && <div className="line" />}
        </div>
        <motion.div 
          className={`timeline-dot ${isEducation ? 'education' : 'work'}`}
          variants={iconVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {isEducation ? <VscMortarBoard size={20} /> : <VscBriefcase size={20} />}
        </motion.div>
      </div>

      {/* Content Card - Positioned second in DOM for content-right, first for content-left */}
      <motion.div
        className={`timeline-content ${isContentRight ? 'right' : 'left'}`}
        variants={itemVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="timeline-content-card">
          {/* Header */}
          <div className="timeline-header">
            <div className="company-info">
              <h3 className="company-name">
                {isEducation ? experience.institution : experience.company}
              </h3>
              <h4 className="position-title">
                {isEducation ? experience.degree : experience.position}
              </h4>
              {isEducation && experience.university && (
                <p className="university-name">{experience.university}</p>
              )}
            </div>
            <div className="timeline-badge">
              {isEducation ? 'Education' : (index === 0 ? 'Current' : 'Experience')}
            </div>
          </div>

          {/* Description */}
          <div className="timeline-description">
            <p>{experience.description}</p>
          </div>

          {/* Additional Details */}
          <div className="timeline-details">
            {experience.teamSize && (
              <div className="detail-row">
                <VscAccount className="detail-icon" />
                <span className="detail-text">Team Size: {experience.teamSize}</span>
              </div>
            )}
            
            {experience.cgpa && (
              <div className="detail-row">
                <VscMortarBoard className="detail-icon" />
                <span className="detail-text">CGPA: {experience.cgpa}</span>
              </div>
            )}

            {experience.percentage && (
              <div className="detail-row">
                <VscMortarBoard className="detail-icon" />
                <span className="detail-text">Percentage: {experience.percentage}</span>
              </div>
            )}

            {experience.client && (
              <div className="detail-row">
                <VscBriefcase className="detail-icon" />
                <span className="detail-text">Clients: {experience.client}</span>
              </div>
            )}
          </div>

          {/* Technologies */}
          {experience.technologies && (
            <div className="timeline-technologies">
              <div className="tech-header">
                <VscCode className="tech-icon" />
                <span className="tech-label">Technologies</span>
              </div>
              <div className="tech-list">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      delay: 0.6 + (techIndex * 0.1),
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {experience.highlights && (
            <div className="timeline-highlights">
              <h5 className="highlights-title">Key Highlights</h5>
              <ul className="highlights-list">
                {experience.highlights.map((highlight, highlightIndex) => (
                  <motion.li
                    key={highlightIndex}
                    className="highlight-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: 0.8 + (highlightIndex * 0.1),
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem; 