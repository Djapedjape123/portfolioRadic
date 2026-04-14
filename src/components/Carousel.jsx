import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Carousel({
  children,
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
  itemWidth = 320,
  gap = 16
}) {
  const items = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // State koji prati da li smo na mobilnom uređaju
  const [isMobile, setIsMobile] = useState(false);

  // Provera veličine ekrana
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Granica za mobilni/tablet
    };
    
    checkMobile(); // Provera pri prvom učitavanju
    window.addEventListener('resize', checkMobile); // Provera pri promeni veličine prozora
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, items.length, pauseOnHover]);

  // Handle hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // LOGIKA ZA DRAG / SWIPE
  const handleDragEnd = (event, info) => {
    if (!isMobile) return; // Ako nije mobilni, ignorisi prevlačenje

    const swipeThreshold = 50; 
    if (info.offset.x < -swipeThreshold) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (info.offset.x > swipeThreshold) {
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel track */}
      <motion.div
        // Kursor za prevlačenje se pojavljuje samo na mobilnom
        className={`flex ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''}`} 
        
        drag={isMobile ? "x" : false} // Ako je mobilni aktiviraj prevlačenje, inače ugasi (false)
        
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={{ x: -currentIndex * (itemWidth + gap) }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {items.map((child, i) => (
          <div key={i} className="flex-shrink-0" style={{ width: itemWidth, marginRight: gap }}>
            {child}
          </div>
        ))}
      </motion.div>

      {/* Navigation dots */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2 pointer-events-none">
        {items.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer pointer-events-auto ${
              i === currentIndex ? 'bg-blue-500' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(i)}
            animate={{ scale: i === currentIndex ? 1.3 : 1 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}