import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  VscHistory, 
  VscCode, 
  VscProject, 
  VscVerified,
  VscDeviceCameraVideo,
  VscEdit,
  VscLocation,
  VscCloudDownload,
  VscLinkExternal,
  VscMail,
  VscArrowRight
} from 'react-icons/vsc';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { getLanguageContent } from '../utils/language';
import { IMAGES } from '../constants/assetReferences';
import HobbyModal from '../components/organisms/HobbyModal/HobbyModal';
import LightRays from '../components/3d/LightRays';
import './Home.css';

/**
 * Home page component - Modern portfolio landing page
 * Mixing formal professional tone with approachable personal elements
 */
const Home = () => {
  const content = getLanguageContent();
  const navigate = useNavigate();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  // Modal state for hobby galleries
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openHobbyModal = (hobbyType) => {
    setSelectedHobby(hobbyType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHobby(null);
  };

  // Dynamic role carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex(prev => 
        (prev + 1) % content.home.hero.roles.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [content.home.hero.roles.length]);

  useEffect(() => {
    // Get CSS custom property for rays color
    const updateRaysColor = () => {
      const container = document.querySelector('.hero-rays');
      if (container) {
        const computedStyle = getComputedStyle(container);
        const raysColor = computedStyle.getPropertyValue('--rays-color').trim();
        return raysColor || '#ffffff';
      }
      return '#ffffff';
    };

    // Initial color update
    const initialColor = updateRaysColor();
    setRaysColor(initialColor);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const newColor = updateRaysColor();
      setRaysColor(newColor);
      
      // Force re-apply hexagon shapes on theme change
      setTimeout(() => {
        const hexCards = document.querySelectorAll('.highlight-card');
        hexCards.forEach(card => {
          card.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
          const before = window.getComputedStyle(card, '::before');
          if (before) {
            card.style.setProperty('--clip-path-before', 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)');
          }
        });
      }, 50); // Small delay to ensure theme styles are applied first
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const [raysColor, setRaysColor] = useState('#ffffff');

  // Icon mapping for highlights
  const iconMap = {
    VscHistory: VscHistory,
    VscCode: VscCode,
    VscProject: VscProject,
    VscVerified: VscVerified,
    VscDeviceCameraVideo: VscDeviceCameraVideo,
    VscEdit: VscEdit,
    VscLocation: VscLocation
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <React.Fragment>
      <motion.div 
        className="home-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section className="home-hero home-section" variants={itemVariants}>
          {/* Animated Light Rays Background */}
          <LightRays
            raysOrigin="top-center"
            raysColor={raysColor}
            raysSpeed={0.4}
            lightSpread={0.7}
            rayLength={0.9}
            followMouse={true}
            mouseInfluence={0.15}
            noiseAmount={0.05}
            distortion={0.02}
            fadeDistance={1.2}
            saturation={0.9}
            className="hero-rays"
          />
          
          <div className="hero-content">
            <motion.div className="hero-text">
              <motion.p className="hero-greeting">
                {content.home.hero.greeting}
              </motion.p>
              
              <motion.h1 className="hero-name">
                {content.home.hero.name}
              </motion.h1>
              
              <motion.div className="hero-role-container">
                <span className="hero-role-prefix">I'm a </span>
                <motion.span 
                  key={currentRoleIndex}
                  className="hero-role"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {content.home.hero.roles[currentRoleIndex]}
                </motion.span>
              </motion.div>
              
              <motion.p className="hero-tagline">
                {content.home.hero.tagline}
              </motion.p>
              
              <motion.p className="hero-description">
                {content.home.hero.description}
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Access Section */}
        <motion.section className="home-quick-access home-section" variants={itemVariants}>
          <motion.h2 className="section-title">
            {content.home.quickAccess.title}
          </motion.h2>
          
          <div className="quick-access-grid">
            <motion.button 
              className="access-card primary"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => window.open(IMAGES.DOCUMENTS.RESUME, '_blank')}
            >
              <VscCloudDownload className="access-icon" />
              <div className="access-content">
                <span className="access-title">{content.home.quickAccess.resume.text}</span>
                <span className="access-subtitle">{content.home.quickAccess.resume.downloadText}</span>
              </div>
            </motion.button>

            <motion.button 
              className="access-card linkedin"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => window.open(content.home.quickAccess.linkedin.url, '_blank')}
            >
              <FaLinkedin className="access-icon" />
              <div className="access-content">
                <span className="access-title">{content.home.quickAccess.linkedin.text}</span>
                <span className="access-subtitle">Professional Network</span>
              </div>
              <VscLinkExternal className="external-icon" />
            </motion.button>

            <motion.button 
              className="access-card github"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => window.open(content.home.quickAccess.github.url, '_blank')}
            >
              <FaGithub className="access-icon" />
              <div className="access-content">
                <span className="access-title">{content.home.quickAccess.github.text}</span>
                <span className="access-subtitle">Code Repository</span>
              </div>
              <VscLinkExternal className="external-icon" />
            </motion.button>

            <motion.button 
              className="access-card email"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => window.location.href = `mailto:${content.home.quickAccess.email.address}`}
            >
              <VscMail className="access-icon" />
              <div className="access-content">
                <span className="access-title">{content.home.quickAccess.email.text}</span>
                <span className="access-subtitle">{content.home.quickAccess.email.address}</span>
              </div>
            </motion.button>
          </div>
        </motion.section>

        {/* Professional Highlights Grid */}
        <motion.section className="home-highlights home-section" variants={itemVariants}>
          <motion.h2 className="section-title">
            {content.home.highlights.title}
          </motion.h2>
          
          <div className="highlights-grid">
            {content.home.highlights.items.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  className="highlight-card"
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => navigate(item.link)}
                >
                  <div className="highlight-icon">
                    <IconComponent />
                  </div>
                  <div className="highlight-content">
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-subtitle">{item.subtitle}</p>
                    <p className="highlight-description">{item.description}</p>
                  </div>
                  <VscArrowRight className="highlight-arrow" />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Personal Side - Creative Corner */}
        <motion.section className="home-personal home-section" variants={itemVariants}>
          <motion.div className="personal-header">
            <h2 className="section-title">{content.home.personalSide.title}</h2>
            <p className="section-subtitle">{content.home.personalSide.subtitle}</p>
          </motion.div>
          
          <div className="personal-grid">
            {content.home.personalSide.hobbies.map((hobby, index) => {
              const IconComponent = iconMap[hobby.icon];
              return (
                <motion.div
                  key={hobby.id}
                  className="personal-card"
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => openHobbyModal(hobby.id)}
                  style={{ '--card-color': hobby.color }}
                >
                  <div className="personal-icon">
                    <IconComponent />
                  </div>
                  <div className="personal-content">
                    <h3 className="personal-title">{hobby.title}</h3>
                    <p className="personal-description">{hobby.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="home-cta home-section" variants={itemVariants}>
          <div className="cta-content">
            <motion.h2 className="cta-title">
              {content.home.callToAction.title}
            </motion.h2>
            <motion.p className="cta-subtitle">
              {content.home.callToAction.subtitle}
            </motion.p>
            <motion.p className="cta-status">
              {content.home.callToAction.status}
            </motion.p>
            
            <div className="cta-actions">
              <motion.button 
                className="cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = `mailto:${content.home.quickAccess.email.address}`}
              >
                {content.home.callToAction.primaryAction}
              </motion.button>
              <motion.button 
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
              >
                {content.home.callToAction.secondaryAction}
              </motion.button>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Hobby Modal */}
      <HobbyModal 
        isOpen={isModalOpen}
        hobbyType={selectedHobby}
        onClose={closeModal}
      />
    </React.Fragment>
  );
};

export default Home; 