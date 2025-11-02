"use client";

import { motion } from "framer-motion";
import React, { memo, useMemo } from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

const Intro = memo(function Intro() {
  // Professional and formal words for IEEE context
  const words = useMemo(() => [
    "innovative",
    "cutting-edge",
    "transformative",
    "sustainable",
    "advanced",
    "breakthrough",
    "pioneering",
    "revolutionary",
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
      className="flex flex-col justify-center items-center mt-20 bg-white px-4 font-oswald"
    >
      <div className="relative text-center max-w-5xl">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          INSTITUTE OF ELECTRICAL AND ELECTRONICS ENGINEERS
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-4xl font-light text-blue-600 mb-8 tracking-wide"
        >
          GALGOTIAS UNIVERSITY STUDENT BRANCH
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
        >
          The world&apos;s largest technical professional organization dedicated to advancing technology 
          for the benefit of humanity. Join our vibrant community of innovators, researchers, and future leaders.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discover Our Legacy
          </Link>
          <Link
            href="/join"
            className="inline-block border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Become a Member
          </Link>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="text-xl md:text-3xl mx-auto font-light text-gray-800 leading-relaxed"
        >
          Pioneering{" "}
          <FlipWords 
            className="text-blue-600 font-medium" 
            words={words}
            duration={4000}
          />{" "}
          <br />
          solutions for tomorrow&apos;s challenges.
        </motion.div>
      </div>
    </motion.div>
  );
});

export default Intro;