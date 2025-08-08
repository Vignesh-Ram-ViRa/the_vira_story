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
            The Person Behind the Code
          </motion.h1>
          <motion.p className="about-tagline">
            Welcome to my personal space! Here's where the professional meets the personal,
            and where you get to know the real me beyond the developer.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <div className="about-content">
        
        {/* Personal Details Card */}
        <motion.section className="personal-details-card" variants={cardVariants}>
          <div className="card-header">
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
            <h2>Creative Achievements</h2>
            <p>Beyond the technical world</p>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card art">
              <div className="achievement-icon">🎨</div>
              <h3>Freehand Drawing</h3>
              <p>Senior Grade Certificate</p>
              <span className="achievement-badge">Art & Design</span>
            </div>
            <div className="achievement-card typing">
              <div className="achievement-icon">⌨️</div>
              <h3>Typewriting</h3>
              <p>Junior Grade Certificate</p>
              <span className="achievement-badge">Technical Skill</span>
            </div>
            <div className="achievement-card language">
              <div className="achievement-icon">🇮🇳</div>
              <h3>Hindi Language</h3>
              <p>Rastrabasha Praveen Degree</p>
              <span className="achievement-badge">Cultural</span>
            </div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section className="hobbies-section" variants={cardVariants}>
          <div className="section-header">
            <VscSymbolEvent className="section-icon" />
            <h2>My Hobbies & Interests</h2>
            <p>What keeps me inspired outside of work</p>
          </div>
          
          <div className="hobbies-grid">
            {/* Rich Content Hobbies with Unified Stack Components */}
            <motion.div 
              className="hobby-card featured sketching"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openHobbyModal('sketching')}
            >
              <div className="hobby-header">
                <VscEdit className="hobby-icon" />
                <div>
                  <h3>Sketching</h3>
                  <p>Freehand art and creative drawings</p>
                </div>
              </div>
              <div className="hobby-3d-preview">
                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  cardDimensions={{ width: 120, height: 120 }}
                  sendToBackOnClick={false}
                  cardsData={hobbyCardsData.art}
                />
              </div>
              <span className="hobby-status">Art Portfolio</span>
            </motion.div>

            <motion.div 
              className="hobby-card featured travel"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openHobbyModal('travel')}
            >
              <div className="hobby-header">
                <VscLocation className="hobby-icon" />
                <div>
                  <h3>Travel</h3>
                  <p>Exploring new places and cultures</p>
                </div>
              </div>
              <div className="hobby-3d-preview">
                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  cardDimensions={{ width: 120, height: 120 }}
                  sendToBackOnClick={false}
                  cardsData={hobbyCardsData.travel}
                />
              </div>
              <span className="hobby-status">Journey Memories</span>
            </motion.div>

            <motion.div 
              className="hobby-card featured photography"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openHobbyModal('photography')}
            >
              <div className="hobby-header">
                <VscDeviceCameraVideo className="hobby-icon" />
                <div>
                  <h3>Photography</h3>
                  <p>Capturing life's beautiful moments</p>
                </div>
              </div>
              <div className="hobby-3d-preview">
                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  cardDimensions={{ width: 120, height: 120 }}
                  sendToBackOnClick={false}
                  cardsData={hobbyCardsData.photography}
                />
              </div>
              <span className="hobby-status">Interactive Gallery</span>
            </motion.div>

            {/* Simple Hobby Cards */}
            <div className="hobby-card simple reading">
              <VscBook className="hobby-icon" />
              <h3>Reading</h3>
              <p>Books and continuous learning</p>
              <span className="hobby-status coming-soon">Coming Soon</span>
            </div>

            <div className="hobby-card simple movies">
              <VscDeviceCameraVideo className="hobby-icon" />
              <h3>Movies</h3>
              <p>Cinema and storytelling</p>
              <span className="hobby-status coming-soon">Coming Soon</span>
            </div>

            <div className="hobby-card simple anime">
              <VscSymbolEvent className="hobby-icon" />
              <h3>Anime</h3>
              <p>Japanese animation and culture</p>
              <span className="hobby-status coming-soon">Coming Soon</span>
            </div>

            <div className="hobby-card simple badminton">
              <VscGame className="hobby-icon" />
              <h3>Badminton</h3>
              <p>Staying active and competitive</p>
              <span className="hobby-status coming-soon">Coming Soon</span>
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