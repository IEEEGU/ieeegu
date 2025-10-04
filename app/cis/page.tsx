"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Award, Users, Globe, BookOpen, Trophy, Brain, Cpu, Network, Zap } from 'lucide-react';

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Ansh Vashisth",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830848/IMG_20250622_141748_212_hq4mqe.webp",
    bio: "As Chairperson of IEEE CIS, Ansh leads the Computational Intelligence Society, focusing on artificial intelligence, machine learning, and computational intelligence technologies. He organizes cutting-edge workshops and research sessions for members.",
    email: "anshvashisth@ieee.org"
  },
  {
    name: "Nalinish Ranjan",
    role: "Vice Chairperson", 
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1741368824/NALINISH_dj3etu.png",
    bio: "Nalinish serves as Vice Chairperson of IEEE CIS, supporting the chairperson in managing society activities and promoting computational intelligence research. He focuses on organizing technical seminars and collaborative research projects.",
    email: "nalinish.ranjan@ieee.org"
  },
  {
    name: "Khushwant Singh",
    role: "Tech Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830876/IMG-20250724-WA0114_yru1ww.jpg",
    bio: "As Tech Lead of IEEE CIS, Khushwant oversees technical projects and research initiatives in computational intelligence. He leads hands-on workshops on AI/ML technologies and guides members in implementing cutting-edge solutions.",
    email: "khushwantsingh@ieee.org"
  },
  {
    name: "Aindri Tiwari",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830877/IMG_20250924_215405_kyuldo.jpg",
    bio: "Aindri serves as Secretary of IEEE CIS, managing documentation and communication for the society. She ensures smooth coordination of research activities and maintains records of all technical initiatives and member contributions.",
    email: "aindritiwari@ieee.org"
  },
  {
    name: "Parth Khowal",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830881/IMG-20250605-WA0128_bkqs8e.jpg",
    bio: "As Treasurer of IEEE CIS, Parth manages the financial aspects of the society, including funding for research projects and technical events. He ensures proper allocation of resources for AI/ML workshops and computational intelligence initiatives.",
    email: "parthkhowal2@ieee.org"
  }
];

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "AI/ML Research Excellence",
    description: "Leading groundbreaking research in artificial intelligence and machine learning with cutting-edge computational intelligence technologies."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Neural Networks Innovation Lab",
    description: "Established state-of-the-art neural networks laboratory for advanced research in deep learning and computational intelligence applications."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Computational Intelligence Workshops",
    description: "Organized comprehensive hands-on workshops on AI/ML technologies, neural networks, and evolutionary computation for students and professionals."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Industry AI Partnerships",
    description: "Forged strategic partnerships with leading AI companies and research institutions for collaborative projects and knowledge exchange."
  }
];

const focusAreas = [
  {
    title: "Neural Networks",
    description: "Advanced neural network architectures, deep learning models, and brain-inspired computing systems",
    icon: <Network className="w-6 h-6" />
  },
  {
    title: "Machine Learning",
    description: "Supervised and unsupervised learning algorithms, pattern recognition, and intelligent data analysis",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Fuzzy Systems",
    description: "Fuzzy logic controllers, approximate reasoning, and uncertainty modeling in intelligent systems",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Evolutionary Algorithms",
    description: "Genetic algorithms, evolutionary programming, and bio-inspired optimization techniques",
    icon: <Cpu className="w-6 h-6" />
  }
];

export default function CISPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-cyan-600 via-cyan-500 to-teal-600 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <span className="text-white/90 font-medium tracking-wide text-sm uppercase">
                  IEEE GALGOTIAS UNIVERSITY
                </span>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-white">Computational</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-teal-200">
                  Intelligence
                </span>
              </h1>

              {/* Prominent Logo Section */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                className="flex justify-center mb-8"
              >
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                  <div className="relative w-full h-full bg-white rounded-full p-4 shadow-2xl">
                    <Image
                      src="https://res.cloudinary.com/dgna3swph/image/upload/v1758732350/cis-removebg-preview_xec8mh.png"
                      alt="IEEE Computational Intelligence Society"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </motion.div>
              
              <p className="text-xl sm:text-2xl text-cyan-100 leading-relaxed max-w-4xl mx-auto font-light">
                Exploring the Frontiers of AI, Machine Learning, and Neural Computing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-cyan-200 text-sm">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">12+</div>
                <div className="text-cyan-200 text-sm">AI/ML Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-cyan-200 text-sm">Research Papers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                ABOUT CIS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Advancing <span className="text-cyan-600">Computational Intelligence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IEEE Computational Intelligence Society (CIS) at Galgotias University focuses on the theory, 
                design, application, and development of biologically and linguistically motivated computational paradigms.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We explore neural networks, fuzzy systems, evolutionary computation, and their applications 
                in solving complex real-world problems through intelligent systems and machine learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-cyan-600">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Cutting-edge Research</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Innovation Hub</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To advance the theory, design, application, and development of biologically and 
                    linguistically motivated computational paradigms emphasizing neural networks, 
                    connectionist systems, genetic algorithms, evolutionary programming, fuzzy systems, 
                    and hybrid intelligent systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leadership Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              LEADERSHIP TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-cyan-600">Executive Board</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated leaders driving innovation and excellence in computational intelligence 
              and artificial intelligence research at Galgotias University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:border-cyan-300 group"
              >
                <div className="p-6 text-center">
                  {/* Circular image container */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 text-sm font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Focus Areas Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              FOCUS AREAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-cyan-600">Research Domains</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on key areas of computational intelligence that drive innovation in AI and machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-cyan-100 hover:border-cyan-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 text-white">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              ACHIEVEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-cyan-600">Key Accomplishments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating our milestones in advancing computational intelligence and AI research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:border-cyan-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-12 border border-cyan-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-cyan-600">AI Revolution</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Be part of a community that&apos;s shaping the future of artificial intelligence and computational intelligence. 
              Contribute to cutting-edge research, work on innovative AI projects, and explore the frontiers of intelligent systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Become a Member
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-xl font-medium hover:bg-cyan-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}