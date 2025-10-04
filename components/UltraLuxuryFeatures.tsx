"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./UltraLuxuryFeatures.module.css";

// Luxury announcements data
const premiumAnnouncements = [
  {
    id: 1,
    title: "IEEE Day Celebrations 2025",
    content: "Join us for a spectacular week-long celebration of IEEE's founding. Experience technical exhibitions, guest lectures, and networking sessions with industry pioneers.",
    date: "October 7-15, 2025",
    priority: "high",
    category: "Global Celebration",
    icon: "�"
  },
  {
    id: 2,
    title: "IEEE GUSB Orientation and Membership Development Drive",
    content: "Welcome new members to the IEEE family! Comprehensive orientation program covering IEEE benefits, career opportunities, and exclusive membership advantages.",
    date: "October 7, 2025",
    priority: "high",
    category: "Membership Drive",
    icon: "🚀"
  },
  {
    id: 3,
    title: "IEEE TEMS Synapse 2025",
    content: "Premier Technology Engineering Management symposium featuring cutting-edge research presentations, industry case studies, and leadership development sessions.",
    date: "September 30, 2025",
    priority: "high",
    category: "Technical Symposium",
    icon: "⚡"
  },
  {
    id: 4,
    title: "IEEE IAS Cup Competition",
    content: "Showcase your innovation in Industrial Applications! Multi-disciplinary competition featuring automation, power systems, and industrial IoT challenges.",
    date: "October 8",
    priority: "medium",
    category: "Competition",
    icon: "🏆"
  },
  {
    id: 5,
    title: "IEEE WiE Debate Competition",
    content: "Empowering voices in engineering! Join the Women in Engineering debate competition on contemporary tech challenges and gender equality in STEM.",
    date: "Registration Open",
    priority: "medium",
    category: "Women in Engineering",
    icon: "💎"
  },
  {
    id: 6,
    title: "IEEE TEMS Poster Making Competition",
    content: "Visualize the future of technology management! Create compelling posters showcasing emerging trends in engineering management and innovation.",
    date: "Submission Open",
    priority: "medium",
    category: "Creative Competition",
    icon: "🎨"
  },
  {
    id: 7,
    title: "IEEE CIS Workshop and Hackathon",
    content: "Dive deep into Computational Intelligence! Intensive workshop followed by 48-hour hackathon focusing on AI, machine learning, and neural networks.",
    date: "Registration Open",
    priority: "high",
    category: "Workshop & Hackathon",
    icon: "�"
  }
];

// Premium event gallery data
const luxuryEvents = [
  {
    id: 1,
    title: "IEEE Day 2025",
    image: "/api/placeholder/400/300",
    description: "Week-long celebration showcase",
    attendees: 300,
    rating: 4.9
  },
  {
    id: 2,
    title: "TEMS Synapse",
    image: "/api/placeholder/400/300", 
    description: "Technology management excellence",
    attendees: 150,
    rating: 4.8
  },
  {
    id: 3,
    title: "CIS Salesforce Workshop",
    image: "/api/placeholder/400/300",
    description: "Computational intelligence workshop",
    attendees: 200,
    rating: 4.9
  },
  {
    id: 4,
    title: "CS AICSSYC 2024",
    image: "/api/placeholder/400/300",
    description: "Women in engineering empowerment",
    attendees: 500,
    rating: 4.8
  },
  {
    id: 5,
    title: "IAS Cup",
    image: "/api/placeholder/400/300",
    description: "Industrial applications showcase",
    attendees: 50,
    rating: 4.7
  },
  {
    id: 6,
    title: "GUSB Membership Drive",
    image: "/api/placeholder/400/300",
    description: "Student orientation program",
    attendees: 600,
    rating: 4.9
  }
];

export default function UltraLuxuryFeaturesSection() {
  const [activeAnnouncement, setActiveAnnouncement] = useState(0);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveAnnouncement((prev) => (prev + 1) % premiumAnnouncements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black overflow-hidden font-oswald">
      {/* Sophisticated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.02)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating luxury elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
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
        {/* Luxury header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-md border border-blue-400/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-light tracking-[0.2em] text-sm uppercase">
              PREMIUM IEEE EXPERIENCE
            </span>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-6xl lg:text-8xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200 mb-6 tracking-tight leading-none">
            EXCELLENCE
            <br />
            <span className="font-bold text-7xl lg:text-9xl">REDEFINED</span>
          </h1>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>

          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Where innovation meets sophistication. Experience the pinnacle of IEEE excellence 
            through our carefully curated announcements and world-class events.
          </p>
        </motion.div>

        {/* Revolutionary layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
          
          {/* Ultra-premium announcements section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] sm:h-[600px] lg:h-[700px]"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Luxury container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl shadow-2xl shadow-blue-500/10">
                
                {/* Premium header */}
                <div className="p-4 sm:p-6 lg:p-8 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-2">
                        LIVE <span className="font-bold text-blue-400">ANNOUNCEMENTS</span>
                      </h2>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-xs sm:text-sm font-light tracking-wider">
                          REAL-TIME UPDATES
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                      {premiumAnnouncements.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveAnnouncement(index)}
                          title={`View announcement ${index + 1}`}
                          className={cn(
                            "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500",
                            activeAnnouncement === index 
                              ? "bg-blue-400 scale-125 shadow-lg shadow-blue-400/50" 
                              : "bg-white/20 hover:bg-white/40"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Announcement display - responsive layout */}
                <div className="p-4 sm:p-6 lg:p-8 h-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeAnnouncement}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.9 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-4 sm:space-y-6 h-full"
                    >
                      {/* First announcement */}
                      <div className="flex items-start gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-white/10">
                        <div className="text-2xl sm:text-3xl flex-shrink-0">{premiumAnnouncements[activeAnnouncement].icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <span className={cn(
                              "px-2 sm:px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase",
                              premiumAnnouncements[activeAnnouncement].priority === "high"
                                ? "bg-red-500/20 text-red-300 border border-red-400/30"
                                : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                            )}>
                              {premiumAnnouncements[activeAnnouncement].priority} PRIORITY
                            </span>
                            <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-xs font-medium tracking-wider uppercase">
                              {premiumAnnouncements[activeAnnouncement].category}
                            </span>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3 leading-tight">
                            {premiumAnnouncements[activeAnnouncement].title}
                          </h3>
                          
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-light line-clamp-3 sm:line-clamp-none">
                            {premiumAnnouncements[activeAnnouncement].content}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                              <span className="text-blue-300 text-xs sm:text-sm font-light">
                                {premiumAnnouncements[activeAnnouncement].date}
                              </span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            >
                              Learn More
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* Second announcement - hide on mobile, show on larger screens */}
                      {premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length] && (
                        <div className="hidden sm:flex items-start gap-4">
                          <div className="text-3xl flex-shrink-0">{premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length].icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <span className={cn(
                                "px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase",
                                premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length].priority === "high"
                                  ? "bg-red-500/20 text-red-300 border border-red-400/30"
                                  : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                              )}>
                                {premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length].priority} PRIORITY
                              </span>
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-xs font-medium tracking-wider uppercase">
                                {premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length].category}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-light text-white mb-3 leading-tight">
                              {premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length].title}
                            </h3>
                            
                            <p className="text-white/80 text-base leading-relaxed mb-4 font-light">
                              {premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length].content}
                            </p>
                            
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                <span className="text-blue-300 text-sm font-light">
                                  {premiumAnnouncements[(activeAnnouncement + 1) % premiumAnnouncements.length].date}
                                </span>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                              >
                                Learn More
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Luxury events gallery */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[700px]"
            >
              <div className="absolute inset-0 p-6 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                <h3 className="text-2xl font-light text-white mb-6">
                  EVENT <span className="font-bold text-indigo-400">HIGHLIGHTS</span>
                </h3>
                
                <div className={cn("space-y-4 h-full overflow-y-auto pr-2", styles.scrollContainer)}>
                  {luxuryEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      onHoverStart={() => setHoveredEvent(event.id)}
                      onHoverEnd={() => setHoveredEvent(null)}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer"
                    >
                      <div className="aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 relative">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <motion.div
                            animate={{ y: hoveredEvent === event.id ? -10 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-white font-medium mb-2 text-lg">
                              {event.title}
                            </h4>
                            <p className="text-white/80 text-sm mb-3">
                              {event.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-blue-300">
                                  {event.attendees} attendees
                                </span>
                                <div className="flex items-center gap-1">
                                  <span className="text-yellow-400">⭐</span>
                                  <span className="text-xs text-white/80">
                                    {event.rating}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}