import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscClose, VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import MagicBento from '../../3d/MagicBento';
import { HOBBY_DATA } from '../../../constants/hobbyData';
import './HobbyModal.css';

/**
 * HobbyModal - Interactive Portfolio Gallery Component
 * 
 * Displays hobby portfolios (art, photography, travel) in an immersive modal interface.
 * Features smooth animations, image viewer, and 3D grid layouts.
 * 
 * Props:
 * - isOpen: Boolean to control modal visibility
 * - hobbyType: String key ('sketching', 'photography', 'travel')
 * - onClose: Function to handle modal closing
 * 
 * Features:
 * - Image lightbox with navigation
 * - Framer Motion animations
 * - MagicBento 3D grid layout
 * - Responsive design
 * - Keyboard navigation support
 * 
 * Data Source: Imports from HOBBY_DATA constants for maintainable content management
 */

export default function HobbyModal({ isOpen, hobbyType, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !hobbyType) return null;

  const hobby = HOBBY_DATA[hobbyType];
  const images = hobby?.images || [];

  const openImageViewer = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % images.length
      : (currentImageIndex - 1 + images.length) % images.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      if (selectedImage) {
        closeImageViewer();
      } else {
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="hobby-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="hobby-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <h2>{hobby.title}</h2>
                <p>{hobby.description}</p>
              </div>
              <button className="modal-close" onClick={onClose}>
                <VscClose />
              </button>
            </div>

            {/* Magic Bento Gallery */}
            <div className="modal-content">
              <MagicBento 
                images={images}
                onImageClick={openImageViewer}
                hobbyType={hobbyType}
              />
            </div>

            {/* Image Viewer */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  className="image-viewer-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleBackdropClick}
                >
                  <motion.div
                    className="image-viewer"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  >
                    <div className="image-viewer-header">
                      <div className="image-info">
                        <h3>{selectedImage.title}</h3>
                        <p>{selectedImage.location || selectedImage.medium || selectedImage.country}</p>
                      </div>
                      <button className="image-close" onClick={closeImageViewer}>
                        <VscClose />
                      </button>
                    </div>
                    
                    <div className="image-container">
                      <button 
                        className="nav-button prev" 
                        onClick={() => navigateImage('prev')}
                      >
                        <VscChevronLeft />
                      </button>
                      
                      <img 
                        src={selectedImage.src} 
                        alt={selectedImage.title}
                        className="viewer-image"
                      />
                      
                      <button 
                        className="nav-button next" 
                        onClick={() => navigateImage('next')}
                      >
                        <VscChevronRight />
                      </button>
                    </div>
                    
                    <div className="image-counter">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 