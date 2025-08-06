import React from 'react';
import { VscGithub, VscMail, VscGlobe } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { getLanguageContent } from '../../../utils/language';
import './Footer.css';

const Footer = () => {
  const content = getLanguageContent();
  const socialMedia = content.socialMedia;

  const socialIcons = {
    linkedin: <FaLinkedin />,
    github: <VscGithub />,
    email: <VscMail />,
    website: <VscGlobe />
  };

  const handleSocialClick = (url) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="floating-footer">
      <div className="footer-content">
        <div className="social-links">
          {socialMedia.map((social, index) => (
            <button
              key={index}
              className="social-link"
              onClick={() => handleSocialClick(social.url)}
              title={social.name}
              aria-label={`Visit ${social.name}`}
            >
              {socialIcons[social.icon] || <VscGlobe />}
            </button>
          ))}
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-info">
          <span className="footer-text">
            © 2025 {content.personalInfo.name}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 