import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "LIVE ANNOUNCEMENTS",
      description:
        "Stay informed about the latest IEEE events, workshops, and opportunities. Our dynamic announcement system keeps you updated with real-time information about exciting initiatives, competitions, and networking events designed to enhance your technical expertise and professional development.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4",
    },
    {
      title: "EVENT GALLERY & HIGHLIGHTS",
      description:
        "Discover our rich history of successful technical events, workshops, and competitions. From AI & ML seminars to robotics competitions and industry collaborations, explore the vibrant community that drives innovation and excellence at IEEE Galgotias University Student Branch.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-2",
    },
  ];

  return (
    <div className="relative z-20 bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 font-oswald">
      {/* Professional section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          IEEE GALGOTIAS UNIVERSITY UPDATES
        </div>
        
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          STAY CONNECTED
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        
        <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          The IEEE Student Branch at Galgotias University is a vibrant community dedicated to fostering innovation, 
          technical excellence, and professional development. We bridge the gap between academic learning and industry 
          application, connecting students with the global IEEE network and cutting-edge technological advancements.
        </p>
      </div>

      {/* Enhanced feature grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.className} group relative`}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl transform rotate-1 scale-105 opacity-50 group-hover:rotate-2 transition-all duration-500"></div>
              
              <FeatureCard className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="mb-6">
                  <FeatureTitle className="text-gray-900 mb-4">{feature.title}</FeatureTitle>
                  <FeatureDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </FeatureDescription>
                </div>
                <div className="flex-1">{feature.skeleton}</div>
              </FeatureCard>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-4 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="font-medium tracking-wider uppercase">IEEE Excellence in Engineering</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

const FeatureTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h3 className={cn("text-lg font-semibold text-black", className)}>{children}</h3>
);

const FeatureDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={cn("text-sm text-gray-700", className)}>{children}</p>
);

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("p-4 sm:p-8 relative overflow-hidden bg-white rounded-lg shadow-md", className)}>
      {children}
    </div>
  );
};

export const SkeletonOne = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pausePosition, setPausePosition] = useState(0);

  const [announcements, setAnnouncements] = useState<{ title: string; content: string; date: string }[]>([]);
  
  // Fetch announcements from Sanity
React.useEffect(() => {
  // Updated announcements for IEEE GU events and activities
  const mockAnnouncements = [
    {
      title: "IEEE Day Celebrations 2025",
      content: "Join us for a week-long celebration honoring IEEE's founding! Experience workshops, competitions, and networking sessions from September 7-15, 2025.",
      date: "September 7-15, 2025"
    },
    {
      title: "IEEE IAS Cup Competition",
      content: "Showcase your industrial applications knowledge in this exciting competition organized by IEEE Industry Applications Society.",
      date: "Coming Soon"
    },
    {
      title: "IEEE WiE Debate Competition",
      content: "IEEE Women in Engineering presents an engaging debate competition. Empower your voice and join the discussion on technology and society.",
      date: "Registration Open"
    },
    {
      title: "IEEE TEMS Poster Making Competition",
      content: "Express your creativity in technology and engineering management through visual storytelling. Prizes for the most innovative designs!",
      date: "Submission Open"
    },
    {
      title: "IEEE CIS Workshop and Hackathon",
      content: "Dive deep into Computational Intelligence with hands-on workshops followed by an intensive hackathon. Learn, code, and innovate!",
      date: "Registration Open"
    },
    {
      title: "IEEE TEMS Synapse 2025",
      content: "The annual flagship event by IEEE Technology & Engineering Management Society. Connect, learn, and network with industry leaders.",
      date: "September 30, 2025"
    }
  ];
  
  setAnnouncements(mockAnnouncements);
}, []);

  return (
    <div className="relative group">
      {/* Sophisticated background with gradient and glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl transform rotate-1 scale-105 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-800 via-indigo-800 to-slate-800 rounded-2xl transform -rotate-1 scale-105 opacity-60"></div>
      
      <div className="relative flex p-8 mt-8 flex-col items-start gap-6 h-[60vh] w-full max-w-4xl mx-auto overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl">
        
        {/* Elegant header with premium styling */}
        <div className="w-full border-b border-white/20 pb-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <h3 className="text-2xl font-oswald font-light tracking-wider text-white/90 uppercase">
              Live Announcements
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
          </div>
        </div>

        {/* Premium scrolling content */}
        <motion.div
          className="flex flex-col text-left h-full w-full space-y-6 px-2"
          animate={isHovered ? { y: pausePosition } : { y: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          onMouseEnter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetY = rect.top - e.clientY;
            setPausePosition(offsetY);
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          {announcements.map((announcement, index) => (
            <motion.div 
              key={index} 
              className="group/item p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-400/30"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-oswald font-medium text-white mb-2 tracking-wide group-hover/item:text-blue-300 transition-colors duration-300">
                    {announcement.title}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed mb-3 font-light">
                    {announcement.content}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-blue-300/90 font-medium tracking-wider uppercase">
                      {announcement.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Gradient overlays for seamless fade */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
    "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
  ];

  const eventData = [
    { title: "AI & ML Workshop", attendees: "200+", date: "Sep 2025" },
    { title: "IEEE Day Celebration", attendees: "500+", date: "Oct 2025" },
    { title: "Robotics Competition", attendees: "150+", date: "Nov 2025" },
    { title: "Technical Symposium", attendees: "300+", date: "Dec 2025" },
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.15,
      rotate: 0,
      zIndex: 100,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative group">
      {/* Sophisticated background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-2xl transform rotate-2 scale-105 opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-800 via-indigo-800 to-purple-800 rounded-2xl transform -rotate-1 scale-105 opacity-60"></div>
      
      <div className="relative flex flex-col h-full p-8 overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        
        {/* Premium header */}
        <div className="mb-6 pb-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-oswald font-light tracking-wider text-white/90 uppercase">
              Event Gallery
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
          </div>
        </div>

        {/* Elegant image grid */}
        <div className="flex-1 space-y-6 overflow-hidden">
          {/* First row of images */}
          <div className="flex gap-3 -ml-4">
            {images.slice(0, 3).map((image, idx) => (
              <motion.div
                key={"images-first" + idx}
                variants={imageVariants}
                style={{
                  rotate: Math.random() * 15 - 7.5,
                }}
                whileHover="whileHover"
                whileTap="whileTap"
                className="relative group/image"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-xl blur-sm scale-110 opacity-0 group-hover/image:opacity-100 transition-all duration-300"></div>
                <div className="relative p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-xl">
                  <Image
                    src={image}
                    alt="IEEE event highlight"
                    width="200"
                    height="200"
                    className="rounded-lg h-16 w-16 md:h-24 md:w-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row of images */}
          <div className="flex gap-3 ml-8">
            {images.slice(0, 2).map((image, idx) => (
              <motion.div
                key={"images-second" + idx}
                variants={imageVariants}
                style={{
                  rotate: Math.random() * 15 - 7.5,
                }}
                whileHover="whileHover"
                whileTap="whileTap"
                className="relative group/image"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-xl blur-sm scale-110 opacity-0 group-hover/image:opacity-100 transition-all duration-300"></div>
                <div className="relative p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-xl">
                  <Image
                    src={image}
                    alt="IEEE event highlight"
                    width="200"
                    height="200"
                    className="rounded-lg h-16 w-16 md:h-24 md:w-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event statistics */}
          <div className="mt-6 space-y-3">
            {eventData.slice(0, 2).map((event, idx) => (
              <motion.div
                key={idx}
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/90 font-medium">{event.title}</span>
                  <span className="text-purple-300">{event.attendees}</span>
                </div>
                <div className="text-xs text-white/60 mt-1">{event.date}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-4 right-4 w-6 h-6 border border-white/20 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};