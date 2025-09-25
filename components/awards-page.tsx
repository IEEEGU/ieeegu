"use client";

import Image from "next/image";
import { memo, useMemo, useState } from "react";

// Types
interface Award {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  date: string;
  location: string;
  badge: string;
  recipient?: string;
}
import { motion, AnimatePresence } from "framer-motion";

const studentBranchAwards = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884425/ee551988-89c4-4896-a346-a5e104bb9525_xyuqx6.jpg",
    title: "Best Emerging Student Branch 2024",
    category: "Student Branch Excellence",
    description: "Celebrating Technical Excellence and outstanding contribution to IEEE community development, innovation in student programs, and exemplary leadership in technical education.",
    date: "December 2024",
    location: "IEEE UP Section",
    badge: "Excellence Award"
  },
];

const volunteerAwards = [
  {
    id: 2,
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884424/9b113fc3-0172-4254-8ef5-18bcee431e06_ifbizn.jpg",
    title: "IEEE India Council Outstanding Volunteer Award 2024",
    category: "Individual Excellence",
    description: "Shubhranshu Shekhar Dash recognized for exceptional volunteer service, leadership excellence, and significant contributions to IEEE India Council initiatives and community development.",
    date: "October 2024",
    location: "IEEE India Council",
    badge: "Outstanding Volunteer",
    recipient: "Shubhranshu Shekhar Dash"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884425/dd3228cd-cd8a-4baa-a05a-5a1f016fc8a2_yklk5k.jpg",
    title: "IEEE UP Section Outstanding Volunteer Award 2024",
    category: "Regional Recognition",
    description: "Shubhranshu Shekhar Dash honored for dedicated service to IEEE UP Section, exceptional leadership in student activities, and outstanding contribution to technical community growth.",
    date: "September 2024",
    location: "IEEE UP Section",
    badge: "Regional Excellence",
    recipient: "Shubhranshu Shekhar Dash"
  },
];

// Modal Component
const AwardModal = memo(({ award, isOpen, onClose }: { 
  award: Award; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!award) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <Image
                src={award.image}
                alt={award.title}
                width={1000}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 text-lg font-bold"
              >
                ✕
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg">
                    {award.badge}
                  </span>
                  <span className="px-5 py-2.5 bg-white/25 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                    {award.category}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{award.title}</h2>
                {award.recipient && (
                  <p className="text-blue-200 text-xl font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    Recipient: {award.recipient}
                  </p>
                )}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Date</h3>
                  <p className="text-gray-600">{award.date}</p>
                </div>
                <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">{award.location}</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Category</h3>
                  <p className="text-gray-600">{award.category}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{award.description}</p>
              </div>

              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Close Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

AwardModal.displayName = "AwardModal";

// Super Sexy Award Card Component
const SexyAwardCard = memo(({ award, index, onClick }: { 
  award: Award; 
  index: number; 
  onClick: () => void; 
}) => {
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
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
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={award.image}
            alt={award.title}
            width={500}
            height={350}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 transition-all duration-500" />
          
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg">
              {award.badge}
            </span>
          </div>

          {/* Expand Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <span className="text-lg">🔍</span>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg mb-2 group-hover:mb-3 transition-all duration-300">
              {award.title}
            </h3>
            {award.recipient && (
              <p className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {award.recipient}
              </p>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
              {award.category}
            </span>
            <span className="text-gray-500 text-sm">
              {award.date}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {award.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm flex items-center gap-2">
              📍 {award.location}
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-blue-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
            >
              View Details →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

SexyAwardCard.displayName = "SexyAwardCard";

// Main Awards Page Component
const AwardsPageComponent = memo(() => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  const allAwards = useMemo(() => [...studentBranchAwards, ...volunteerAwards], []);

  const handleCardClick = (award: Award) => {
    setSelectedAward(award);
  };

  const handleCloseModal = () => {
    setSelectedAward(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Awards & Recognition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Celebrating excellence, innovation, and outstanding contributions to the IEEE community
          </motion.p>
        </div>
      </section>

      {/* Awards Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the remarkable achievements and recognition that showcase our commitment to excellence in technology, innovation, and community service.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {allAwards.map((award, index) => (
              <SexyAwardCard
                key={award.id}
                award={award}
                index={index}
                onClick={() => handleCardClick(award)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AwardModal
        award={selectedAward!}
        isOpen={!!selectedAward}
        onClose={handleCloseModal}
      />
    </div>
  );
});

AwardsPageComponent.displayName = "AwardsPageComponent";

export default AwardsPageComponent;
