"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Globe, BookOpen, Trophy, Target, TrendingUp, Lightbulb, BarChart3 } from 'lucide-react';

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Kavya Singh",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830862/Snapchat-1908667641_ubo1ap.jpg",
    bio: "As Chairperson of IEEE TEMS, Kavya leads the Technology and Engineering Management Society, focusing on bridging the gap between technology and management. She organizes workshops and seminars on emerging technologies and their practical applications in industry.",
    email: "kavya0103@ieee.org"
  },
  {
    name: "Saiyam Shrivastava",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830857/1000026811_t7r9xg.jpg",
    bio: "Saiyam serves as Vice Chairperson of IEEE TEMS, supporting the chair in organizing events and managing society operations. He focuses on promoting technology management education and fostering innovation among members.",
    email: ""
  },
  {
    name: "Yash Kumar Singh",
    role: "Tech Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830860/yash_hypwsm.jpg",
    bio: "As Tech Lead of IEEE TEMS, Yash oversees technical initiatives and projects within the society. He organizes technical workshops, webinars, and events focused on emerging technologies and engineering management practices.",
    email: "yashkumarsingh@ieee.org"
  },
  {
    name: "Manya Gogia",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830872/IMG-20250808-WA0004_ex5bnw.jpg",
    bio: "Manya serves as Secretary of IEEE TEMS, maintaining accurate records and ensuring effective communication within the society. She coordinates with team members and manages documentation for all society activities.",
    email: "manyagogia@ieee.org"
  },
  {
    name: "Krishna Garg",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830856/IMG_20250908_150348_pozyxx.jpg",
    bio: "As Treasurer of IEEE TEMS, Krishna manages the financial operations of the society. He handles budget planning, expense tracking, and funding allocation to support various technical and educational initiatives.",
    email: "krishnagarg@ieee.org"
  }
];

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Technology Management Excellence Award",
    description: "Recognized for outstanding contributions in bridging technology and management domains through innovative programs and initiatives."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Innovation Leadership Summit",
    description: "Successfully organized comprehensive workshops on emerging technologies and their practical applications in modern business environments."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Industry-Academia Collaboration",
    description: "Established strong partnerships with leading technology companies for mentorship, internships, and real-world project experiences."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Emerging Technologies Initiative",
    description: "Led pioneering research and development programs in AI, IoT, and sustainable technology management practices."
  }
];

const focusAreas = [
  {
    title: "Project Management",
    description: "Advanced project management methodologies, agile practices, and strategic planning for technology initiatives",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Innovation Strategy",
    description: "Strategic innovation frameworks, technology roadmapping, and disruptive technology assessment",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Leadership",
    description: "Technology leadership development, team management, and organizational change management",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Entrepreneurship",
    description: "Technology entrepreneurship, startup ecosystem, and business model innovation for tech ventures",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

export default function TEMSPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden"
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
                  IEEE GALGOTAIS UNIVERSITY
                </span>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-white">Technology</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Management
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
                      src="https://res.cloudinary.com/dgna3swph/image/upload/v1758734654/tems-removebg-preview_1_kuu4td.png"
                      alt="IEEE Technology & Engineering Management Society"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </motion.div>
              
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-light">
                Leading Innovation through Strategic Technology Management and Engineering Excellence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-blue-200 text-sm">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-blue-200 text-sm">Management Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-blue-200 text-sm">Innovation Workshops</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                ABOUT TEMS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Bridging <span className="text-blue-600">Technology & Management</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IEEE Technology & Engineering Management Society (TEMS) at Galgotias University focuses on the 
                integration of engineering and management disciplines to address complex technological challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We foster innovation through strategic thinking, project management excellence, and technology 
                leadership development, preparing our members for the evolving demands of the modern tech industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Strategic Innovation</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Leadership Excellence</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To promote and advance the integration of technology and engineering management 
                    to help organizations achieve strategic objectives through innovative leadership, 
                    effective management practices, and technological excellence.
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              LEADERSHIP TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-blue-600">Executive Board</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated leaders driving innovation and excellence in technology management 
              and engineering leadership at Galgotias University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
              >
                <div className="p-6 text-center">
                  {/* Circular image container */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full"></div>
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
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              FOCUS AREAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Core Competencies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on key areas that drive successful integration of technology and management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 text-white">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              ACHIEVEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Key Accomplishments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating our milestones in advancing technology management and engineering leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
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
          className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-blue-600">Innovation Journey</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Be part of a community that&apos;s shaping the future of technology management and engineering leadership. 
              Connect with industry leaders, work on strategic projects, and drive technological innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Become a Member
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300"
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