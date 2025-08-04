import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  VscHome, 
  VscAccount, 
  VscTools, 
  VscProject, 
  VscInfo,
  VscColorMode,
  VscPerson,
  VscMenu,
  VscClose
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handlers
  const handleNavigation = useCallback((path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  }, [navigate]);

  // Modal handlers
  const handleOpenContact = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const handleCloseContact = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  // Mobile menu handlers
  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      // Prevent body scroll when menu is open
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    // Restore body scroll
    document.body.style.overflow = '';
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

  // ESC key handler for mobile menu
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        handleCloseMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMobileMenuOpen, handleCloseMobileMenu]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Header navigation items
  const headerNavItems = [
    {
      icon: <VscHome size={16} />,
      label: content.navigation.home,
      path: '/home',
      isActive: currentPage === 'home'
    },
    {
      icon: <VscAccount size={16} />,
      label: content.navigation.career,
      path: '/career',
      isActive: currentPage === 'career'
    },
    {
      icon: <VscTools size={16} />,
      label: content.navigation.skills,
      path: '/skills',
      isActive: currentPage === 'skills'
    },
    {
      icon: <VscProject size={16} />,
      label: content.navigation.projects,
      path: '/projects',
      isActive: currentPage === 'projects'
    },
    {
      icon: <VscInfo size={16} />,
      label: content.navigation.about,
      path: '/about',
      isActive: currentPage === 'about'
    }
  ];

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

        {/* Center Navigation Menu */}
        <nav className="header-center">
          <div className="header-nav">
            {headerNavItems.map((item) => (
              <button
                key={item.path}
                className={`nav-item ${item.isActive ? 'nav-item-active' : ''}`}
                onClick={() => handleNavigation(item.path)}
                title={item.label}
              >
                {item.icon}
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
        
        <div className="header-right">
          {/* Mobile Hamburger Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={handleToggleMobileMenu}
            aria-label="Toggle mobile menu"
            title="Menu"
          >
            {isMobileMenuOpen ? <VscClose size={20} /> : <VscMenu size={20} />}
          </button>

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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={handleCloseMobileMenu}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h3>Navigation</h3>
              <button 
                className="mobile-menu-close"
                onClick={handleCloseMobileMenu}
                aria-label="Close menu"
              >
                <VscClose size={20} />
              </button>
            </div>
            <div className="mobile-menu-items">
              {headerNavItems.map((item) => (
                <button
                  key={item.path}
                  className={`mobile-menu-item ${item.isActive ? 'mobile-menu-item-active' : ''}`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}

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