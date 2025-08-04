import { useState } from 'react';
import { motion } from 'framer-motion';
import './Folder.css';

export default function Folder({ 
  size = 1, 
  color = "#5227FF", 
  className = "",
  onOpen = null 
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onOpen && !isOpen) {
      onOpen();
    }
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': color,
    transform: `scale(${size})`,
  };

  // Sample sketch placeholders
  const sketches = [
    { id: 1, title: 'Portrait Study', type: 'pencil' },
    { id: 2, title: 'Landscape', type: 'charcoal' },
    { id: 3, title: 'Abstract Art', type: 'pen' }
  ];

  return (
    <motion.div 
      className={`folder ${isOpen ? 'open' : ''} ${className}`}
      style={folderStyle}
      onClick={handleClick}
      whileHover={{ scale: size * 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="folder__back">
        {sketches.map((sketch, index) => (
          <motion.div
            key={sketch.id}
            className="paper"
            initial={{ 
              x: '-50%', 
              y: '10%',
              rotateZ: 0,
              scale: 1
            }}
            animate={isOpen ? {
              x: index === 0 ? '-120%' : index === 1 ? '10%' : '-50%',
              y: index === 0 ? '-70%' : index === 1 ? '-70%' : '-100%',
              rotateZ: index === 0 ? -15 : index === 1 ? 15 : 5,
              scale: 1
            } : {
              x: '-50%',
              y: '10%',
              rotateZ: 0,
              scale: 1
            }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1,
              ease: "easeInOut"
            }}
            whileHover={isOpen ? { 
              scale: 1.1,
              transition: { duration: 0.2 }
            } : {}}
          >
            <div className="sketch-content">
              <div className="sketch-icon">✏️</div>
              <div className="sketch-title">{sketch.title}</div>
              <div className="sketch-type">{sketch.type}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="folder__front" />
      
      {!isOpen && (
        <motion.div 
          className="folder-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>Sketching Portfolio</span>
          <small>Click to open</small>
        </motion.div>
      )}
    </motion.div>
  );
} 