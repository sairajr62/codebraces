import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FlipWords = ({ words = [], duration = 3000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(next, duration);
    return () => clearInterval(interval);
  }, [next, duration]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{ opacity: 0, rotateX: 90, y: 10 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: -90, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="inline-block"
          style={{ transformOrigin: 'center bottom' }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default FlipWords;
