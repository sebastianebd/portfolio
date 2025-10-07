'use client';
import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02, // Retraso entre letras
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      className="text-white text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold pt-4 lg:leading-relaxed flex flex-wrap overflow-hidden"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedTitle;
