"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Elite chapters data with detailed information
const eliteChapters = [
  {
    id: "cs",
    name: "Computer Society",
    acronym: "CS",
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/8-removebg-preview_dfvg0l.png",
    description: "Advancing computing technology for humanity through innovation, research, and professional development in all areas of computing.",
    focus: ["Artificial Intelligence", "Software Engineering", "Cybersecurity", "Data Science"],
    members: 60,
    color:  "from-orange-600 to-red-700",
    accent: "yellow",
    established: "2024"
  },
  {
    id: "wie",
    name: "Industry Applications Society",
    acronym: "IAS",
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/6-removebg-preview_uathl1.png",
    description: "Inspiring and empowering women engineers and scientists to achieve their full potential and advance technology for humanity.",
    focus: ["Power Systems", "Industrial Automation", "Motor Drives", "Renewable Energy"],
    members: 40,
    color: "from-green-600 to-emerald-700",
    accent: "green",
    established: "2024"
  },
  {
    id: "ias",
    name: "Women in Engineering",
    acronym: "WIE",
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/7-removebg-preview_3_mpuv5a.png",
    description: "Bridging the gap between industrial applications and cutting-edge research in power systems, automation, and control.",
    focus: ["Leadership Development", "Career Advancement", "STEM Education", "Gender Equality"],
    members: 40,
    color: "from-purple-600 to-pink-700",
    accent: "purple",
    established: "2024"
  },
  {
    id: "tems",
    name: "Technology & Engineering Management",
    acronym: "TEMS",
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1758734654/tems-removebg-preview_1_kuu4td.png",
    description: "Leading the integration of technology and management to drive innovation and sustainable business practices.",
    focus: ["Project Management", "Innovation Strategy", "Leadership", "Entrepreneurship"],
    members: 20,
    color: "from-blue-600 to-indigo-700",
    accent: "blue",
    established: "2025"
  },
  {
    id: "cis",
    name: "Computational Intelligence Society",
    acronym: "CIS",
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1758732350/cis-removebg-preview_xec8mh.png",
    description: "Exploring the frontiers of computational intelligence through neural networks, fuzzy systems, and evolutionary computation.",
    focus: ["Neural Networks", "Machine Learning", "Fuzzy Systems", "Evolutionary Algorithms"],
    members: 30,
    color: "from-cyan-600 to-teal-700",
    accent: "cyan",
    established: "2025"
  }
];

const PremiumStudentBranchChapters = () => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden font-oswald">
      {/* Luxury background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.01)_49%,rgba(255,255,255,0.01)_51%,transparent_52%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Luxury header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            <span className="text-white/80 font-light tracking-[0.3em] text-sm uppercase">
              PROFESSIONAL SOCIETIES
            </span>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6 tracking-tight leading-none">
            IEEE STUDENT BRANCH
            <br />
            <span className="font-bold text-6xl lg:text-8xl">CHAPTERS</span>
          </h1>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>

          <p className="text-xl text-white/60 max-w-4xl mx-auto font-light leading-relaxed">
            Five distinguished professional societies united under IEEE Galgotias University Student Branch, 
            each dedicated to excellence, innovation, and the advancement of technology for humanity.
          </p>
        </motion.div>

        {/* Premium chapters grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {eliteChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredChapter(chapter.id)}
              onHoverEnd={() => setHoveredChapter(null)}
              onClick={() => setSelectedChapter(chapter.id === selectedChapter ? null : chapter.id)}
              className={cn(
                "group relative cursor-pointer transition-all duration-500",
                selectedChapter === chapter.id ? "lg:col-span-2 scale-105" : "hover:scale-105"
              )}
            >
              {/* Ultra-light luxury card container */}
              <div className="relative h-80 bg-gradient-to-br from-gray-50/95 to-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* Subtle gradient overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-500",
                  chapter.color,
                  hoveredChapter === chapter.id ? "opacity-30" : "opacity-15"
                )} />

                {/* Chapter logo and basic info */}
                <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ scale: hoveredChapter === chapter.id ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6"
                  >
                    <div className="absolute -inset-6 bg-gray-100/60 rounded-full blur-xl opacity-80"></div>
                    <Image
                      src={chapter.logo}
                      alt={chapter.name}
                      width={180}
                      height={180}
                      className="relative z-10 w-32 h-32 lg:w-40 lg:h-40 object-contain filter drop-shadow-2xl"
                    />
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">
                      IEEE <span className="font-bold text-black">{chapter.acronym}</span>
                    </h3>
                    <p className="text-gray-700 text-sm font-light mb-4 leading-relaxed">
                      {chapter.name}
                    </p>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <span>{chapter.members} Members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <span>Est. {chapter.established}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredChapter === chapter.id ? 1 : 0 }}
                    className="absolute bottom-4 right-4"
                  >
                    <div className="w-8 h-8 bg-gray-200/80 rounded-full flex items-center justify-center border border-gray-300/50">
                      <span className="text-gray-800 text-xs font-medium">→</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed chapter information */}
        <AnimatePresence>
          {selectedChapter && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              {(() => {
                const chapter = eliteChapters.find(c => c.id === selectedChapter);
                if (!chapter) return null;

                return (
                  <div className="relative bg-gradient-to-br from-gray-50/95 to-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-2xl">
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-15 rounded-3xl",
                      chapter.color
                    )} />
                    
                    <div className="relative z-10">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1 text-center">
                          <div className="relative mb-8">
                            <div className="absolute -inset-8 bg-blue-100/70 rounded-full blur-2xl opacity-90"></div>
                            <Image
                              src={chapter.logo}
                              alt={chapter.name}
                              width={280}
                              height={280}
                              className="relative z-10 w-48 h-48 lg:w-56 lg:h-56 mx-auto object-contain filter drop-shadow-2xl"
                            />
                          </div>
                          <h3 className="text-4xl font-light text-gray-900 mb-2">
                            IEEE <span className="font-bold">{chapter.acronym}</span>
                          </h3>
                          <p className="text-gray-700 text-lg font-light">
                            {chapter.name}
                          </p>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                          <div>
                            <h4 className="text-2xl font-light text-gray-900 mb-4">Mission & Vision</h4>
                            <p className="text-gray-800 text-lg leading-relaxed font-light">
                              {chapter.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-2xl font-light text-gray-900 mb-4">Focus Areas</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {chapter.focus.map((area, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 p-3 bg-gray-100/70 rounded-xl border border-gray-200"
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <span className="text-gray-800 font-light">{area}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                            <div className="text-center">
                              <div className="text-3xl font-light text-gray-900">{chapter.members}</div>
                              <div className="text-gray-600 text-sm">Active Members</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-light text-gray-900">{chapter.established}</div>
                              <div className="text-gray-600 text-sm">Established</div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl border border-blue-400 font-medium hover:shadow-lg transition-all duration-300"
                            >
                              Learn More
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 text-gray-600 text-sm">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <span className="font-light tracking-wider uppercase">United in Excellence, Driven by Innovation</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumStudentBranchChapters;