import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscHeart, 
  VscLocation, 
  VscCalendar,
  VscGlobe,
  VscMortarBoard,
  VscEdit,
  VscDeviceCameraVideo,
  VscBook,
  VscGame,
  VscSymbolEvent
} from 'react-icons/vsc';
import { getLanguageContent } from '../utils/language';

// Import 3D Components
import Stack from '../components/3d/Stack';
import HobbyModal from '../components/organisms/HobbyModal/HobbyModal';

// Import asset constants
import { HOBBY_DATA } from '../constants/hobbyData';
import { 
  HOBBY_EXTERNAL_LINKS, 
  HOBBY_STATUS_TEXT, 
  HOBBY_CONTENT,
  ABOUT_SECTION_CONTENT 
} from '../constants/externalLinks';

import './About.css';

/**
 * About Page - Personal Portfolio and Interactive Hobby Showcase
 * 
 * Features a warm, personal presentation with interactive 3D hobby previews.
 * Dynamically generates preview cards from centralized hobby data.
 * 
 * Key Features:
 * - Interactive hobby cards with Stack 3D component
 * - Dynamic data sourcing from HOBBY_DATA constants
 * - Framer Motion animations and transitions
 * - Modal integration for detailed hobby galleries
 * - Multi-language content support
 * - Responsive layout with mobile optimization
 * 
 * Architecture:
 * - Imports HOBBY_DATA for content consistency
 * - Generates preview cards dynamically (first 4 images per category)
 * - Maintains single source of truth for all hobby content
 * - Seamlessly integrates with HobbyModal for detailed views
 */
const About = () => {
  const content = getLanguageContent();
  
  // Create hobby cards data from HOBBY_DATA (first 4 images of each category)
  const hobbyCardsData = {
    art: HOBBY_DATA.sketching.images.slice(0, 4).map(item => ({
      id: item.id,
      img: item.src,
      alt: item.title
    })),
    travel: HOBBY_DATA.travel.images.slice(0, 4).map(item => ({
      id: item.id,
      img: item.src,
      alt: item.title
    })),
    photography: HOBBY_DATA.photography.images.slice(0, 4).map(item => ({
      id: item.id,
      img: item.src,
      alt: item.title
    }))
  };
  
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
    }
  };

  return (
    <motion.div 
      className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Personal Hero Section */}
      <motion.section className="about-hero" variants={itemVariants}>
        <div className="hero-content">
          <motion.h1 className="about-title">
            {ABOUT_SECTION_CONTENT.HERO.title}
          </motion.h1>
          <motion.p className="about-tagline">
            {ABOUT_SECTION_CONTENT.HERO.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <div className="about-content">
        
        {/* Personal Details Card */}
        <motion.section className="personal-details-card" variants={cardVariants}>
          <div className="section-header">
            <VscHeart className="card-icon" />
            <h2>Personal Details</h2>
          </div>
          <div className="details-grid">
            <div className="detail-item">
              <VscCalendar className="detail-icon" />
              <div>
                <span className="detail-label">Age</span>
                <span className="detail-value">{content.about.personalDetails.age}</span>
              </div>
            </div>
            <div className="detail-item">
              <VscLocation className="detail-icon" />
              <div>
                <span className="detail-label">Nationality</span>
                <span className="detail-value">{content.about.personalDetails.nationality}</span>
              </div>
            </div>
            <div className="detail-item">
              <VscHeart className="detail-icon" />
              <div>
                <span className="detail-label">Status</span>
                <span className="detail-value">{content.about.personalDetails.maritalStatus}</span>
              </div>
            </div>
            <div className="detail-item languages">
              <VscGlobe className="detail-icon" />
              <div>
                <span className="detail-label">Languages</span>
                <div className="languages-list">
                  {content.about.personalDetails.languages.map((language, index) => (
                    <span key={index} className="language-tag">{language}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Extracurricular Achievements */}
        <motion.section className="achievements-section" variants={cardVariants}>
          <div className="section-header">
            <VscMortarBoard className="section-icon" />
            <h2>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.title}</h2>
            <p>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.subtitle}</p>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card art">
              <div className="achievement-icon">{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.ART.icon}</div>
              <h3>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.ART.title}</h3>
              <p>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.ART.description}</p>
              <span className="achievement-badge">{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.ART.badge}</span>
            </div>
            <div className="achievement-card typing">
              <div className="achievement-icon">{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.TYPING.icon}</div>
              <h3>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.TYPING.title}</h3>
              <p>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.TYPING.description}</p>
              <span className="achievement-badge">{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.TYPING.badge}</span>
            </div>
            <div className="achievement-card language">
              <div className="achievement-icon">{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.LANGUAGE.icon}</div>
              <h3>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.LANGUAGE.title}</h3>
              <p>{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.LANGUAGE.description}</p>
              <span className="achievement-badge">{ABOUT_SECTION_CONTENT.ACHIEVEMENTS.items.LANGUAGE.badge}</span>
            </div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section className="hobbies-section" variants={cardVariants}>
          <div className="section-header">
            <VscSymbolEvent className="section-icon" />
            <h2>{ABOUT_SECTION_CONTENT.HOBBIES.title}</h2>
            <p>{ABOUT_SECTION_CONTENT.HOBBIES.subtitle}</p>
          </div>
          
          <div className="hobbies-grid">
            {/* Rich Content Hobbies with Unified Stack Components */}
            <motion.div 
              className="hobby-card featured sketching"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hobby-header">
                <VscEdit className="hobby-icon" />
                <div>
                  <h3>{HOBBY_CONTENT.SKETCHING.title}</h3>
                  <p>{HOBBY_CONTENT.SKETCHING.description}</p>
                </div>
              </div>
              <div className="hobby-3d-preview">
                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  cardDimensions={{ width: 120, height: 120 }}
                  sendToBackOnClick={true}
                  cardsData={hobbyCardsData.art}
                />
              </div>
              <span 
                className="hobby-status clickable" 
                onClick={() => openHobbyModal('sketching')}
              >
                {HOBBY_STATUS_TEXT.ART_PORTFOLIO}
              </span>
            </motion.div>

            <motion.div 
              className="hobby-card featured travel"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hobby-header">
                <VscLocation className="hobby-icon" />
                <div>
                  <h3>{HOBBY_CONTENT.TRAVEL.title}</h3>
                  <p>{HOBBY_CONTENT.TRAVEL.description}</p>
                </div>
              </div>
              <div className="hobby-3d-preview">
                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  cardDimensions={{ width: 120, height: 120 }}
                  sendToBackOnClick={true}
                  cardsData={hobbyCardsData.travel}
                />
              </div>
              <span 
                className="hobby-status clickable" 
                onClick={() => openHobbyModal('travel')}
              >
                {HOBBY_STATUS_TEXT.JOURNEY_MEMORIES}
              </span>
            </motion.div>

            <motion.div 
              className="hobby-card featured photography"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hobby-header">
                <VscDeviceCameraVideo className="hobby-icon" />
                <div>
                  <h3>{HOBBY_CONTENT.PHOTOGRAPHY.title}</h3>
                  <p>{HOBBY_CONTENT.PHOTOGRAPHY.description}</p>
                </div>
              </div>
              <div className="hobby-3d-preview">
                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  cardDimensions={{ width: 120, height: 120 }}
                  sendToBackOnClick={true}
                  cardsData={hobbyCardsData.photography}
                />
              </div>
              <span 
                className="hobby-status clickable" 
                onClick={() => openHobbyModal('photography')}
              >
                {HOBBY_STATUS_TEXT.INTERACTIVE_GALLERY}
              </span>
            </motion.div>

            {/* Simple Hobby Cards */}
            <div className="hobby-card simple reading">
              <VscBook className="hobby-icon" />
              <h3>{HOBBY_CONTENT.READING.title}</h3>
              <p>{HOBBY_CONTENT.READING.description}</p>
              <span 
                className="hobby-status clickable external-link" 
                onClick={() => window.open(HOBBY_EXTERNAL_LINKS.BOOKWORM, '_blank')}
              >
                {HOBBY_STATUS_TEXT.BOOKWORM}
              </span>
            </div>

            <div className="hobby-card simple movies">
              <VscDeviceCameraVideo className="hobby-icon" />
              <h3>{HOBBY_CONTENT.MOVIES.title}</h3>
              <p>{HOBBY_CONTENT.MOVIES.description}</p>
              <span 
                className="hobby-status clickable external-link" 
                onClick={() => window.open(HOBBY_EXTERNAL_LINKS.FILMFRENZY, '_blank')}
              >
                {HOBBY_STATUS_TEXT.FILMFRENZY}
              </span>
            </div>

            <div className="hobby-card simple anime">
              <VscSymbolEvent className="hobby-icon" />
              <h3>{HOBBY_CONTENT.ANIME.title}</h3>
              <p>{HOBBY_CONTENT.ANIME.description}</p>
              <span 
                className="hobby-status clickable external-link" 
                onClick={() => window.open(HOBBY_EXTERNAL_LINKS.OTAKUHUB, '_blank')}
              >
                {HOBBY_STATUS_TEXT.OTAKUHUB}
              </span>
            </div>

            <div className="hobby-card simple badminton">
              <VscGame className="hobby-icon" />
              <h3>{HOBBY_CONTENT.BADMINTON.title}</h3>
              <p>{HOBBY_CONTENT.BADMINTON.description}</p>
              <span 
                className="hobby-status clickable external-link" 
                onClick={() => window.open(HOBBY_EXTERNAL_LINKS.BADMINTON_RULES, '_blank')}
              >
                {HOBBY_STATUS_TEXT.BADMINTON_RULES}
              </span>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Hobby Modal */}
      <HobbyModal 
        isOpen={isModalOpen}
        hobbyType={selectedHobby}
        onClose={closeModal}
      />
    </motion.div>
  );
};

export default About; 