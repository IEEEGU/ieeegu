"use client";

import Image from "next/image";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const studentBranchAwards = [
  {
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884425/ee551988-89c4-4896-a346-a5e104bb9525_xyuqx6.jpg",
    caption: "Best Emerging Student Branch 2024 - Celebrating Technical Excellence",
  },
];

const volunteerAwards = [
  {
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884424/9b113fc3-0172-4254-8ef5-18bcee431e06_ifbizn.jpg",
    caption: "Shubhranshu Shekhar Dash - IEEE India Council Outstanding Volunteer Award 2024",
  },
  {
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884425/dd3228cd-cd8a-4baa-a05a-5a1f016fc8a2_yklk5k.jpg",
    caption: "Shubhranshu Shekhar Dash - IEEE UP Section Outstanding Volunteer Award 2024",
  },
];

// Memoized award card component
const AwardCard = memo(({ award, index }: { award: typeof studentBranchAwards[0]; index: number }) => {
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }), [index]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden w-full sm:w-[350px] md:w-[500px] h-[300px] mx-auto mb-6 shadow-lg"
    >
      <Image
        src={award.image}
        alt={award.caption}
        width={500}
        height={350}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        priority={index < 2}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
        <p className="text-white p-4 text-sm md:text-base leading-relaxed">{award.caption}</p>
      </div>
    </motion.div>
  );
});

AwardCard.displayName = "AwardCard";

// Memoized section component
const AwardSection = memo(({ 
  title, 
  awards, 
  className = "" 
}: { 
  title: string; 
  awards: typeof studentBranchAwards; 
  className?: string;
}) => {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  }), []);

  return (
    <section className={`py-16 px-4 md:px-8 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white text-center mb-12"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-7xl mx-auto"
      >
        {awards.map((award, index) => (
          <AwardCard key={`${title}-${index}`} award={award} index={index} />
        ))}
      </motion.div>
    </section>
  );
});

AwardSection.displayName = "AwardSection";

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#1a1f3c]">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00629B] to-[#0096D6] opacity-90" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Achievements</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Celebrating excellence and innovation at IEEE Student Branch, Galgotias University
          </p>
        </motion.div>
      </section>

      {/* Student Branch Awards */}
      <AwardSection 
        title="Student Branch Awards" 
        awards={studentBranchAwards} 
      />

      {/* Volunteer Awards */}
      <AwardSection 
        title="Volunteer Awards" 
        awards={volunteerAwards} 
        className="bg-[#151833]" 
      />
    </div>
  );
}
