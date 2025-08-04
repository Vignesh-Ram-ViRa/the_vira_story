import React, { useCallback, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  VscHome, 
  VscAccount, 
  VscTools, 
  VscProject, 
  VscInfo,
  VscColorMode,
  VscPerson
} from 'react-icons/vsc';

// Components
import Dock from '../Dock/Dock';
import Footer from '../Footer/Footer';
import ContactModal from '../ContactModal/ContactModal';

// Hooks and utilities
import useTheme from '../../../hooks/useTheme';
import { getLanguageContent } from '../../../utils/language';

import './Layout.css';

/**
 * Layout component with shared header and dock navigation
 * Used by all pages except the opening sequence
 */
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentTheme, nextTheme } = useTheme();
  const content = getLanguageContent();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Navigation handlers
  const handleNavigation = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  // Modal handlers
  const handleOpenContact = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const handleCloseContact = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  // Get current page for dock active state
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/home') return 'home';
    if (path === '/career') return 'career';
    if (path === '/skills') return 'skills';
    if (path === '/projects') return 'projects';
    if (path === '/about') return 'about';
    return 'home'; // default
  };

  const currentPage = getCurrentPage();

  // Dock navigation items
  const dockItems = [
    {
      icon: <VscHome size={20} />,
      label: content.navigation.home,
      onClick: () => handleNavigation('/home'),
      className: currentPage === 'home' ? 'dock-item-active' : ''
    },
    {
      icon: <VscAccount size={20} />,
      label: content.navigation.career,
      onClick: () => handleNavigation('/career'),
      className: currentPage === 'career' ? 'dock-item-active' : ''
    },
    {
      icon: <VscTools size={20} />,
      label: content.navigation.skills,
      onClick: () => handleNavigation('/skills'),
      className: currentPage === 'skills' ? 'dock-item-active' : ''
    },
    {
      icon: <VscProject size={20} />,
      label: content.navigation.projects,
      onClick: () => handleNavigation('/projects'),
      className: currentPage === 'projects' ? 'dock-item-active' : ''
    },
    {
      icon: <VscInfo size={20} />,
      label: content.navigation.about,
      onClick: () => handleNavigation('/about'),
      className: currentPage === 'about' ? 'dock-item-active' : ''
    }
  ];

  return (
    <div className="layout" data-theme={currentTheme}>
      {/* Fixed Header */}
      <header className="layout-header">
        <div className="header-left">
          <h1 
            className="header-name clickable" 
            onClick={() => navigate('/')}
            title="Back to opening sequence"
          >
            {content.personalInfo.name}
          </h1>
        </div>
        
        <div className="header-right">
          <button 
            className="profile-btn"
            onClick={handleOpenContact}
            aria-label="Open contact"
            title="Contact me"
          >
            <VscPerson size={20} />
          </button>
          
          <button 
            className="theme-btn"
            onClick={nextTheme}
            aria-label="Switch theme"
            title="Switch theme"
          >
            <VscColorMode size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="layout-main">
        {children}
      </main>

      {/* Dock Navigation */}
      <Dock 
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        distance={200}
      />

      {/* Floating Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
};

export default Layout; 