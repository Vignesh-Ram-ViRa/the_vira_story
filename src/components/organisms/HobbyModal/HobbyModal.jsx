import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscClose, VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import MagicBento from '../../3d/MagicBento';
import './HobbyModal.css';

const hobbyData = {
  photography: {
    title: "Photography Gallery",
    description: "Capturing life's beautiful moments through the lens",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format", title: "Mountain Landscape", location: "Swiss Alps" },
      { id: 2, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format", title: "Forest Path", location: "Black Forest, Germany" },
      { id: 3, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format", title: "Ocean Waves", location: "Pacific Coast" },
      { id: 4, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format", title: "Desert Sunset", location: "Sahara Desert" },
      { id: 5, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format", title: "Alpine Lake", location: "Canadian Rockies" },
      { id: 6, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format", title: "Valley View", location: "Yosemite" }
    ]
  },
  sketching: {
    title: "Art Portfolio",
    description: "Freehand drawings and creative expressions",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format", title: "Sketch Placeholder", medium: "Pencil on Paper" },
      { id: 2, src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format", title: "Landscape Drawing", medium: "Charcoal" },
      { id: 3, src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=800&auto=format", title: "Abstract Art", medium: "Mixed Media" },
      { id: 4, src: "https://images.unsplash.com/photo-1594736797933-d0c8c986d1e8?q=80&w=800&auto=format", title: "Character Study", medium: "Ink" },
      { id: 5, src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format", title: "Life Drawing", medium: "Graphite" },
      { id: 6, src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format", title: "Still Life", medium: "Pastel" }
    ]
  },
  travel: {
    title: "Travel Memories",
    description: "Adventures and cultures from around the world",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format", title: "Mountain Adventure", country: "Switzerland" },
      { id: 2, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format", title: "Alpine Journey", country: "Austria" },
      { id: 3, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format", title: "Forest Exploration", country: "Germany" },
      { id: 4, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format", title: "Coastal Wandering", country: "Portugal" },
      { id: 5, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format", title: "Desert Safari", country: "Morocco" },
      { id: 6, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format", title: "Lake Serenity", country: "Canada" }
    ]
  }
};

export default function HobbyModal({ isOpen, hobbyType, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !hobbyType) return null;

  const hobby = hobbyData[hobbyType];
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