import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the entire quote
const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08, // Controls the delay between words
    },
  },
};

// Animation variants for individual words
const singleWord = {
  initial: {
    opacity: 0,
    y: 50, // Slide from below
  },
  animate: {
    opacity: 1,
    y: 0, // Move to original position
    transition: {
      duration: 1, // Controls the speed of each word’s animation
    },
  },
};

// AnimatedText Component
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize 
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
        dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
