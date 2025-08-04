import React from 'react';
import { motion } from 'framer-motion';
import { getLanguageContent } from '../utils/language';
import './Home.css';

/**
 * Home page content
 * Displays welcome section with user information
 */
const Home = () => {
  const content = getLanguageContent();

  return (
    <div className="home-content">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="welcome-section"
        >
          <h2 className="welcome-title">{content.home.welcome}</h2>
          <p className="welcome-tagline">{content.home.tagline}</p>
          <p className="welcome-description">{content.personalInfo.overview}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 