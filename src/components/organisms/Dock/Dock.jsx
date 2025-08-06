"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { VscGripper, VscClose } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

import "./Dock.css";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child, { isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 55,
  distance = 150,
  panelHeight = 52,
  dockHeight = 200,
  baseItemSize = 38,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(() => {
    // Check session storage for dock visibility
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('dockVisible');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const location = useLocation();
  const dockRef = useRef(null);

  // Initialize and reset dock position
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Small delay to allow dock to render and get its width
      const timer = setTimeout(() => {
        const dockWidth = dockRef.current?.offsetWidth || 250; // fallback to 250px (smaller)
        const centerX = (window.innerWidth - dockWidth) / 2;
        const bottomY = window.innerHeight - 80; // Closer to bottom due to smaller size
        x.set(centerX);
        y.set(bottomY);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, x, y]);

  // Handle dock visibility changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('dockVisible', JSON.stringify(isVisible));
    }
  }, [isVisible]);

  const handleCloseDock = () => {
    setIsVisible(false);
  };

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  // Get screen constraints for dragging
  const getConstraints = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Absolute positioning constraints (smaller dock)
    return {
      left: 20,                          // 20px from left edge
      right: screenWidth - 270,          // Account for smaller dock width
      top: 20,                           // 20px from top edge
      bottom: screenHeight - 100,        // Closer to bottom for smaller dock
    };
  };

  // If dock is not visible, don't render anything
  if (!isVisible) {
    return null;
  }

      return (
      <motion.div
        ref={dockRef}
        className={`dock-outer ${isDragging ? 'dragging' : ''}`}
        drag
        dragConstraints={getConstraints()}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        whileDrag={{ scale: 1.02 }}
        style={{ 
          x,
          y,
          height: panelHeight + 16, // Fixed height to prevent jumping
          scrollbarWidth: "none" 
        }}
      >
      {/* Drag Handle */}
      <motion.div 
        className="dock-drag-handle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <VscGripper size={14} />
      </motion.div>

      <motion.div
        onMouseMove={({ pageX }) => {
          if (!isDragging) {
            isHovered.set(1);
            mouseX.set(pageX);
          }
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ 
          height: height,
          transformOrigin: 'bottom center'
        }}
        role="toolbar"
        aria-label="Application dock"
      >
        {/* Dock Items */}
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>

      {/* Close Button - Outside dock panel */}
      <motion.button
        className="dock-close-button-external"
        onClick={handleCloseDock}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Close dock for this session"
      >
        <VscClose size={10} />
      </motion.button>
    </motion.div>
  );
}

export { DockItem, DockLabel, DockIcon }; 