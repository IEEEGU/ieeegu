"use client";

import { motion } from "framer-motion";
import React, { memo, useMemo } from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

const Intro = memo(function Intro() {
  // Reduce the number of flip words to improve performance
  const words = useMemo(() => [
    "better",
    "modern",
    "innovative",
    "dynamic",
    "impactful",
    "sustainable",
    "engaging",
    "reliable",
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }), []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col justify-center items-center mt-20 bg-white px-4"
    >
      <div className="relative text-center max-w-4xl">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-black mb-4"
        >
          WE ARE IEEE STUDENT BRANCH
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-red-600 mb-8"
        >
          Galgotias University
        </motion.h2>
        
        <motion.div variants={itemVariants}>
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore More
          </Link>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="text-2xl md:text-4xl mx-auto pt-8 font-semibold text-black leading-relaxed"
        >
          Join a{" "}
          <FlipWords 
            className="text-red-600" 
            words={words}
            duration={4000} // Slower transition for better performance
          />{" "}
          <br />
          Technology and Research Community.
        </motion.div>
      </div>
    </motion.div>
  );
});

export default Intro;