import { motion } from 'framer-motion';

const InfiniteMarquee = ({ children, speed = 30, pauseOnHover = true, className = '', direction = 'left' }) => {
  const isLeft = direction === 'left';
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex w-max gap-4 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        animate={{ x: isLeft ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
