import { motion } from 'framer-motion';

const Spotlight = ({ className = '', fill = '#FD6703' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: '-72%', y: '-62%' }}
      animate={{ opacity: 1, scale: 1, x: '-50%', y: '-40%' }}
      transition={{ duration: 2, ease: 'easeOut', delay: 0.75 }}
      className={`pointer-events-none absolute ${className}`}
    >
      <svg
        className="w-[800px] h-[560px] lg:w-[1200px] lg:h-[800px] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <ellipse cx="600" cy="0" rx="500" ry="500" fill={`url(#spotlight-gradient)`} />
        <defs>
          <radialGradient id="spotlight-gradient" cx="0.5" cy="0" r="0.7" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={fill} stopOpacity="0.3" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Spotlight;
