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

import './About.css';

/**
 * About Me page - Personal and warm presentation
 * Focus on personality, hobbies, and personal achievements
 */
const About = () => {
  const content = getLanguageContent();
  
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

  // Hobby icons mapping
  const hobbyIcons = {
    photography: VscDeviceCameraVideo,
    sketching: VscEdit,
    travel: VscLocation,
    reading: VscBook,
    movies: VscDeviceCameraVideo,
    anime: VscSymbolEvent,
    badminton: VscGame,
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
                  cardsData={[
                    { id: 1, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500&auto=format", alt: "Mountain landscape" },
                    { id: 2, img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500&auto=format", alt: "Forest path" },
                    { id: 3, img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=500&auto=format", alt: "Ocean waves" },
                    { id: 4, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format", alt: "Desert sunset" }
                  ]}
                />
              </div>
              <span className="hobby-status">Interactive Gallery</span>
            </motion.div>

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
                  cardsData={[
                    { id: 1, img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=500&auto=format", alt: "Portrait sketch" },
                    { id: 2, img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=500&auto=format", alt: "Landscape drawing" },
                    { id: 3, img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500&auto=format", alt: "Abstract art" },
                    { id: 4, img: "https://images.unsplash.com/photo-1594736797933-d0c8c986d1e8?q=80&w=500&auto=format", alt: "Character study" }
                  ]}
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
                  cardsData={[
                    { id: 1, img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=500&auto=format", alt: "Mountain lake" },
                    { id: 2, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500&auto=format", alt: "Alpine valley" },
                    { id: 3, img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500&auto=format", alt: "Forest trail" },
                    { id: 4, img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=500&auto=format", alt: "Ocean coast" }
                  ]}
                />
              </div>
              <span className="hobby-status">Journey Memories</span>
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