'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const variants: Variants = {
    hidden: { opacity: 0, x: 90 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="relative w-[86vw] h-[110vw] max-w-[356px] max-h-[413px] md:w-[50vw] md:h-[65vw] lg:w-[40vw] lg:h-[48vw] lg:max-w-[410px] lg:max-h-[491px] flex justify-center"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {/* Marco */}
      <div
        className="absolute bg-amber-500 z-0
                  top-[-15px] right-[-15px] w-[90%] h-[95%]
                  lg:top-[-25px] lg:right-[-25px]"
      ></div>

      {/* Imagen */}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={className}
      />
    </motion.div>
  );
};

export default AnimatedImage;

