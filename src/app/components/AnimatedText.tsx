"use client";

import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

interface TextProps {
  className: string;
  text: string;
}

const AnimatedText: React.FC<TextProps> = ({ className, text }) => {
  return (
    <div className="w-full mx-auto py-2 sm:py-0  flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span key={word + "-" + index} className="inline-block" variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
