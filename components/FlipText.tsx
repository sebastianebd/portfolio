'use client';
import React, { useState, useEffect } from 'react';

const WORDS = ['PROGRAMADOR', 'CODE LOVER', 'ENTUSIASTA'];
const DURATION = 3000;

const FlipText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, DURATION);
    return () => clearInterval(intervalId);
  }, []);

  const currentWord = WORDS[currentIndex];
  const prevWordIndex = (currentIndex - 1 + WORDS.length) % WORDS.length;
  const prevWord = WORDS[prevWordIndex];

  return (
    <div className="relative inline-block flip-container w-[22.5rem] h-20 pb-12 font-extrabold text-4xl md:text-5xl text-amber-500 pt-2 ">
      <FlipItem key={prevWord + 'out'} text={prevWord} isExiting={true} isCurrent={prevWord === currentWord} />
      <FlipItem key={currentWord + 'in'} text={currentWord} isExiting={false} isCurrent={true} />
    </div>
  );
};

interface FlipItemProps {
  text: string;
  isExiting: boolean;
  isCurrent: boolean;
}

const FlipItem: React.FC<FlipItemProps> = ({ text, isExiting, isCurrent }) => {
  if (!isCurrent && !isExiting) return null;

  const animationClass = isExiting ? 'flip-out-animation' : 'flip-in-animation';
  const sizeClass = text.length > 12 ? 'text-3xl' : '';

  return (
    <div className={`absolute w-full h-full backface-hidden ${animationClass} ${sizeClass}`}>
      {text}
    </div>
  );
};

export default FlipText;



