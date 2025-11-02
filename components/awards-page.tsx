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
    id: 5,
    image: "https://res.cloudinary.com/dgna3swph/image/upload/Screenshot_2025-11-01_223922_dgdqlh.png",
    title: "Richard E. Merwin Scholar — Spring 2025",
    category: "Scholarship",
    description: "Gaurang Pant awarded the Richard E. Merwin Scholarship for Spring 2025 in recognition of academic excellence and contributions to computational research and IEEE activities.",
    date: "Spring 2025",
    location: "Richard E. Merwin Scholarship Program",
    badge: "Scholarship",
    recipient: "Gaurang Pant"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1762017359/Screenshot_20251101_222210_tkvfct.jpg",
    title: "Recognized as Technical Lead at Global IEEE CS SYP Volunteer Engagement Team",
    category: "Leadership Recognition",
    description: "Manas Saxena was appointed Technical Lead in the global IEEE Computer Society SYP Volunteer Engagement Team for outstanding technical leadership and contributions to community-driven projects.",
    date: "October 2025",
    location: "Global (IEEE CS SYP)",
    badge: "Leadership Role",
    recipient: "Manas Saxena"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884424/9b113fc3-0172-4254-8ef5-18bcee431e06_ifbizn.jpg",
    title: "IEEE India Council Outstanding Volunteer Award 2024",
    category: "Individual Excellence",
    description: "Shubhranshu Shekhar Dash recognized for exceptional volunteer service, leadership excellence, and significant contributions to IEEE India Council initiatives and community development.",
    date: "December 2024",
    location: "IEEE India Council",
    badge: "Outstanding Volunteer",
    recipient: "Shubhranshu Shekhar Dash"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_fill,w_500,h_350,f_webp,q_auto:good/v1737884425/dd3228cd-cd8a-4baa-a05a-5a1f016fc8a2_yklk5k.jpg",
    title: "IEEE UP Section Outstanding Volunteer Award 2024",
    category: "Section Recognition",
    description: "Shubhranshu Shekhar Dash honored for dedicated service to IEEE UP Section, exceptional leadership in student activities, and outstanding contribution to technical community growth.",
    date: "January 2025",
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Square Image - Fully Visible */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-all duration-300 text-lg font-bold shadow-lg"
              >
                ✕
              </button>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-4 py-2 bg-blue-600/95 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg inline-block">
                  {award.badge}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{award.title}</h2>
              {award.recipient && (
                <p className="text-blue-600 font-semibold mb-4">
                  Recipient: {award.recipient}
                </p>
              )}

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mb-2">📅</div>
                  <p className="text-xs font-semibold text-gray-900 mb-1">Date</p>
                  <p className="text-xs text-gray-600">{award.date}</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-xl">
                  <div className="text-2xl mb-2">📍</div>
                  <p className="text-xs font-semibold text-gray-900 mb-1">Location</p>
                  <p className="text-xs text-gray-600">{award.location}</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="text-xs font-semibold text-gray-900 mb-1">Category</p>
                  <p className="text-xs text-gray-600">{award.category}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{award.description}</p>
              </div>

              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

AwardModal.displayName = "AwardModal";

// Award Card Component - Square & Large with Full Visibility
const SexyAwardCard = memo(({ award, index, onClick }: { 
  award: Award; 
  index: number; 
  onClick: () => void; 
}) => {
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
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
      className="relative cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
        {/* Square Image Container - Fully Visible */}
        <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={award.image}
            alt={award.title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
            priority={index < 2}
          />
          
          {/* Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-5 py-2.5 bg-blue-600/95 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg">
              {award.badge}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8 flex-grow flex flex-col">
          {/* Title - Fully Visible */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
            {award.title}
          </h3>
          
          {award.recipient && (
            <p className="text-base text-blue-600 font-semibold mb-4">
              Recipient: {award.recipient}
            </p>
          )}

          <div className="flex items-center justify-between mb-4 text-sm">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">
              {award.category}
            </span>
            <span className="text-gray-600 font-medium">
              {award.date}
            </span>
          </div>
          
          <p className="text-gray-700 text-base leading-relaxed mb-5 line-clamp-3 flex-grow">
            {award.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
            <span className="text-gray-600 text-sm flex items-center gap-2">
              📍 {award.location}
            </span>
            <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
              View Details →
            </span>
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-blue-700/90 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-100 text-sm font-medium mb-6"
          >
            <span>🏆</span>
            <span>IEEE Excellence & Innovation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Awards & Recognition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            Celebrating outstanding achievements in research, leadership, and technical excellence
          </motion.p>
        </div>
      </section>

      {/* Awards Grid Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition of excellence in advancing technology and fostering innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
