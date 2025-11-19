import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

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
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel track */}
      <motion.div
        className="flex"
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
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {items.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer ${
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
