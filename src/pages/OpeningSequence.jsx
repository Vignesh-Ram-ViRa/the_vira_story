import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Particles from '../components/atoms/Particles/Particles';
import useTheme from '../hooks/useTheme';
import { getLanguageContent } from '../utils/language';
import './OpeningSequence.css';

/**
 * Opening sequence page with 3D particles and name reveal
 * Entry point of the portfolio with animated transition to home
 */
const OpeningSequence = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  const content = getLanguageContent();

  const handleNameClick = useCallback(() => {
    if (isClicked) return;
    
    setIsClicked(true);
    
    // Navigate to home after animation completes
    setTimeout(() => {
      navigate('/home');
    }, 1500);
  }, [isClicked, navigate]);

  const getParticleColors = useCallback(() => {
    // Use dark theme inspired colors for seamless transition
    return ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#f1f5f9'];
  }, []);

  return (
    <div className="opening-sequence" data-theme="dark">
      {/* 3D Particles Background */}
      <div className="particles-background">
        <Particles
          particleColors={getParticleColors()}
          particleCount={200}
          particleSpread={15}
          speed={0.08}
          particleBaseSize={160}
          moveParticlesOnHover={true}
          particleHoverFactor={0.3}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={16}
          sizeRandomness={2.5}
        />
      </div>

      {/* Content Overlay */}
      <div className="opening-content">
                <motion.div
          className="name-container"
          onClick={handleNameClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: isClicked ? 8 : 1 
          }}
          transition={{ 
            duration: isClicked ? 1.5 : 1, 
            ease: [0.25, 0.1, 0.25, 1] 
          }}
        >
          <motion.h1
            className="main-name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            {content.personalInfo.name}
          </motion.h1>
          
          {!isClicked && (
            <motion.p
              className="click-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
            >
              {content.openingSequence.clickMessage}
            </motion.p>
          )}
        </motion.div>
      </div>


    </div>
  );
};

export default OpeningSequence; 