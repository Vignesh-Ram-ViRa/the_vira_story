import { useEffect } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-120px)",
    "rotate(5deg) translate(-60px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(60px)",
    "rotate(2deg) translate(120px)"
  ],
  enableHover = true
}) {
  // Default travel placeholder images
  const defaultTravelImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format", 
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=400&auto=format",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format"
  ];

  const imagesToUse = images.length ? images : defaultTravelImages;

  useEffect(() => {
    gsap.fromTo(
      ".bounce-card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    );
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover) return;
    imagesToUse.forEach((_, i) => {
      gsap.killTweensOf(`.bounce-card-${i}`);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(`.bounce-card-${i}`, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto"
        });
      } else {
        const offsetX = i < hoveredIdx ? -120 : 120;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(`.bounce-card-${i}`, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto"
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    imagesToUse.forEach((_, i) => {
      gsap.killTweensOf(`.bounce-card-${i}`);
      const baseTransform = transformStyles[i] || "none";
      gsap.to(`.bounce-card-${i}`, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto"
      });
    });
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight
      }}
    >
      {imagesToUse.map((src, idx) => (
        <div
          key={idx}
          className={`bounce-card bounce-card-${idx}`}
          style={{
            transform: transformStyles[idx] ?? "none"
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img 
            className="bounce-image" 
            src={src} 
            alt={`Travel memory ${idx + 1}`}
            loading="lazy"
          />
          <div className="travel-overlay">
            <span className="travel-location">Travel Memory</span>
          </div>
        </div>
      ))}
    </div>
  );
} 