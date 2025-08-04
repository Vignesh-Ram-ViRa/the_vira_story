import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscClose, VscMail, VscDeviceMobile } from 'react-icons/vsc';
import ProfileCard from '../../molecules/ProfileCard/ProfileCard';
import { getLanguageContent } from '../../../utils/language';
import './ContactModal.css';

/**
 * ContactModal component for displaying contact information
 * Triggered by the profile icon in the header
 */
const ContactModal = ({ isOpen, onClose }) => {
  const content = getLanguageContent();
  const contactSectionRef = useRef(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Handle ProfileCard contact button click
  const handleProfileContactClick = useCallback(() => {
    contactSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="contact-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <h2 className="modal-title">{content.contact.title}</h2>
              <button
                className="close-btn"
                onClick={onClose}
                aria-label="Close contact modal"
              >
                <VscClose size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-content">
              {/* Profile Card */}
              <div className="profile-section">
                <ProfileCard onContactClick={handleProfileContactClick} />
              </div>

              {/* Contact Methods */}
              <div ref={contactSectionRef} className="contact-section">
                <h3 className="contact-subtitle">{content.contact.subtitle}</h3>
                
                <div className="contact-methods">
                  <motion.a
                    href={`mailto:${content.contact.details.email}`}
                    className="contact-method"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="contact-icon">
                      <VscMail size={20} />
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">{content.contact.details.email}</span>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${content.contact.details.phone}`}
                    className="contact-method"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="contact-icon">
                      <VscDeviceMobile size={20} />
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">{content.contact.details.phone}</span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 