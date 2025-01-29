"use client";

import { motion } from "framer-motion";

const ScrollWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Start slightly below the viewport
      whileInView={{ opacity: 1, y: 0 }} // Fade in and slide into place
      viewport={{ amount: 0.3 }} // Trigger when 30% of the component is visible
      transition={{
        duration: 0.6, // Smooth and slightly slower
        ease: [0.22, 1, 0.36, 1], // Polished cubic-bezier for natural movement
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollWrapper;
