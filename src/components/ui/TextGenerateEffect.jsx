import { useEffect } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';

const TextGenerateEffect = ({ words, className = '', duration = 0.5, staggerDelay = 0.08 }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const wordsArray = words.split(' ');

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        { opacity: 1, filter: 'blur(0px)' },
        { duration, delay: stagger(staggerDelay) }
      );
    }
  }, [isInView, animate, duration, staggerDelay]);

  return (
    <div className={className} ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="inline-block opacity-0 mr-[0.25em]"
          style={{ filter: 'blur(8px)' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextGenerateEffect;
