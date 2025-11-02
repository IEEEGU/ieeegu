"use client";

import React, { memo, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Performance optimized interfaces
interface JoinStep {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  linkText?: string;
  completed?: boolean;
}

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

// Memoized optimized step data
const joinSteps: JoinStep[] = [
  {
    id: "welcome",
    title: "Welcome to IEEE",
    description: "Join the world's largest technical and research community with over 400,000 members worldwide.",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_scale,w_800,f_webp,q_auto:good/v1741629516/1_irkc1u.png"
  },
  {
    id: "visit-website",
    title: "Visit IEEE Official Website",
    description: "Navigate to the official IEEE membership portal to begin your journey.",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_scale,w_800,f_webp,q_auto:good/v1741629516/2_wsl6tt.png",
    link: "https://www.ieee.org/join",
    linkText: "Visit IEEE.org/join"
  },
  {
    id: "select-membership",
    title: "Choose Student Membership",
    description: "Select the appropriate student membership based on your academic level (Undergraduate/Graduate).",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_scale,w_800,f_webp,q_auto:good/v1741629516/3_p7z2i8.png"
  },
  {
    id: "fill-application",
    title: "Complete Application & Payment",
    description: "Fill out your personal information, academic background, institution details, and complete the membership fee payment.",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_scale,w_800,f_webp,q_auto:good/v1741629517/4_s7i8rq.png"
  },
  {
    id: "submit-details",
    title: "Share Your Membership Card",
    description: "Once payment is completed, share your membership card with us and fill out our onboarding form.",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_scale,w_800,f_webp,q_auto:good/v1741629517/5_kxwn32.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe_04rBgryw0x71qGTbORYJPbtqM3Dlo0jGUsZBoyGXJI0LsA/viewform?usp=header",
    linkText: "Complete Onboarding Form"
  }
];

const membershipBenefits: BenefitCard[] = [
  {
    icon: "🌐",
    title: "Global Network",
    description: "Connect with 400,000+ professionals worldwide",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "📚",
    title: "Access to Resources",
    description: "Unlimited access to IEEE Xplore Digital Library",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🏆",
    title: "Professional Growth",
    description: "Certifications, workshops, and career development",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "💡",
    title: "Innovation Hub",
    description: "Stay updated with cutting-edge technology trends",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "🤝",
    title: "Networking Events",
    description: "Exclusive access to conferences and meetups",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: "🔬",
    title: "Research Support",
    description: "Funding opportunities and research collaboration",
    color: "from-teal-500 to-cyan-500"
  }
];

// Performance-optimized Loading Skeleton
const ImageSkeleton = memo(() => (
  <div className="animate-pulse bg-gray-200 rounded-2xl w-full h-64 md:h-80 flex items-center justify-center">
    <div className="text-gray-400 text-lg">Loading...</div>
  </div>
));

ImageSkeleton.displayName = "ImageSkeleton";

// Optimized Benefit Card Component
const BenefitCard = memo(({ benefit, index }: { benefit: BenefitCard; index: number }) => {
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
        scale: 1.05,
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group"
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {benefit.icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
});

BenefitCard.displayName = "BenefitCard";

// Optimized Step Component
const JoinStepCard = memo(({ step, index }: { step: JoinStep; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
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
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-20`}
    >
      {/* Image Section */}
      <div className="lg:w-1/2 w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-100"
        >
          {!imageLoaded && <ImageSkeleton />}
          <Image
            src={step.image}
            alt={step.title}
            width={600}
            height={400}
            className={`w-full h-64 md:h-80 object-contain bg-white transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            priority={index < 2}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold text-lg">
              {index + 1}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {step.title}
            </h3>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {step.description}
          </p>

          {step.link && (
            <motion.a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {step.linkText}
              <span className="text-xl">→</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

JoinStepCard.displayName = "JoinStepCard";

// Main Optimized Join Page Component
const JoinUsPage = memo(() => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section - Optimized */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Join <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IEEE</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Become part of the world&apos;s largest technical professional organization and unlock endless opportunities for growth and innovation
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold">
                400,000+ Members
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold">
                160+ Countries
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold">
                Founded 1884
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Performance Optimized */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Member Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the exclusive advantages and opportunities that come with IEEE membership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Steps Section - Optimized Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How to Join
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to become an IEEE member and start your journey with us
            </p>
          </motion.div>

          <div className="space-y-8">
            {joinSteps.map((step, index) => (
              <JoinStepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Performance Optimized */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals who are shaping the future of technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.ieee.org/join"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join IEEE Now
              </motion.a>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_04rBgryw0x71qGTbORYJPbtqM3Dlo0jGUsZBoyGXJI0LsA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Student Registration
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

JoinUsPage.displayName = "JoinUsPage";

export default JoinUsPage;
