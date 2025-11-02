"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, ChevronRight, Globe, BookOpen, Trophy } from 'lucide-react';

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Gaurang Pant",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_700/v1738003439/IMG-20250126-WA0044_t0oevi.jpg",
    bio: "As Chair of the IEEE Computer Society, Gaurang leads the team in promoting advancements in computer science and technology. He organizes events and workshops to enhance members' technical skills and industry knowledge.",
    email: "gaurangpant22@ieee.org"
  },
  {
    name: "Anant Gangwar",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_1774,g_auto/v1738003440/IMG_3774_uliwpd.jpg",
    bio: "Anant, as Vice Chairperson, supports the Chair in managing society operations. He focuses on creating opportunities for members to explore new technological domains and improve their skills.",
    email: "anantgangwar06@ieee.org"
  },
  {
    name: "Kshitij Bajpai",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003443/Kshitij_Bajpai_l80ddc.jpg",
    bio: "Serving as Secretary, Kshitij is responsible for keeping accurate records and facilitating clear communication within the IEEE Computer Society. His role ensures efficient coordination across all activities.",
    email: "kshitijbajpai@ieee.org"
  },
  {
    name: "Mohammad Sahil",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003440/prof_pic_qivdks.heic",
    bio: "As Treasurer, Mohammad handles the financial operations of the society. He ensures proper budget allocation and funding for events, contributing to the success of various initiatives.",
    email: "ms9811151061@gmail.com"
  }
];

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "All India Computer Society Student and Young Professionals Congress 2024",
    description: "Successfully organized the premier national event bringing together students and young professionals to explore cutting-edge technologies."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Technical Excellence Recognition",
    description: "Recognized for outstanding contributions to computer science education and professional development at Galgotias University."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Active Membership Growth",
    description: "Consistently growing membership base with active participation in technical workshops, coding competitions, and research initiatives."
  }
];

const focusAreas = [
  {
    title: "Software Engineering",
    description: "Advanced methodologies, agile development, and software architecture best practices.",
    icon: "💻"
  },
  {
    title: "Artificial Intelligence",
    description: "Machine learning, deep learning, neural networks, and AI ethics.",
    icon: "🤖"
  },
  {
    title: "Data Science",
    description: "Big data analytics, data visualization, and statistical computing.",
    icon: "📊"
  },
  {
    title: "Cybersecurity",
    description: "Information security, cryptography, and cyber threat analysis.",
    icon: "🔒"
  },
  {
    title: "Computer Networks",
    description: "Network protocols, distributed systems, and cloud computing.",
    icon: "🌐"
  },
  {
    title: "Human-Computer Interaction",
    description: "User experience design, interface development, and accessibility.",
    icon: "👥"
  }
];

export default function ComputerSocietyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-700 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/95 via-amber-600/95 to-yellow-700/95"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-amber-300/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-lg">
                  <Image
                    src="https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/8-removebg-preview_dfvg0l.png"
                    alt="IEEE Computer Society"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div> */}
                <span className="text-base font-medium">IEEE GALGOTIAS UNIVERSITY</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                COMPUTER
                <span className="block bg-gradient-to-r from-amber-200 via-yellow-200 to-white bg-clip-text text-transparent">
                  SOCIETY
                </span>
              </h1>

              {/* Large prominent logo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                  <div className="relative w-full h-full bg-white rounded-full p-4 shadow-2xl">
                    <Image
                      src="https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/8-removebg-preview_dfvg0l.png"
                      alt="IEEE Computer Society"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </motion.div>
              
              <p className="text-xl sm:text-2xl text-yellow-100 leading-relaxed max-w-4xl mx-auto font-light">
                Advancing Computing as a Science and Profession through Excellence, Innovation, and Technical Leadership
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">60+</div>
                <div className="text-yellow-200 text-sm">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-yellow-200 text-sm">Technical Events</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-yellow-200 text-sm">Projects</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                ABOUT OUR SOCIETY
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Pioneering the Future of 
                <span className="text-yellow-600"> Computing Technology</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The IEEE Computer Society at Galgotias University stands as the premier professional organization 
                dedicated to advancing computing as a science and profession. We foster innovation, education, 
                and collaboration among students, faculty, and industry professionals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our society serves as a bridge between academic excellence and industry relevance, providing 
                members with cutting-edge knowledge, networking opportunities, and professional development 
                resources in the rapidly evolving field of computer science and engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-yellow-700">
                  <ChevronRight className="w-5 h-5" />
                  <span className="font-medium">Technical Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-700">
                  <ChevronRight className="w-5 h-5" />
                  <span className="font-medium">Professional Development</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-700">
                  <ChevronRight className="w-5 h-5" />
                  <span className="font-medium">Industry Collaboration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">Global</div>
                    <div className="text-gray-600">Network</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">Leading</div>
                    <div className="text-gray-600">Education</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">Excellence</div>
                    <div className="text-gray-600">Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">Strong</div>
                    <div className="text-gray-600">Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Focus Areas Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              TECHNICAL DOMAINS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Areas of <span className="text-yellow-600">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exploring cutting-edge technologies and emerging trends in computer science through 
              comprehensive research, workshops, and hands-on projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              LEADERSHIP TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-yellow-600">Executive Board</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated leaders driving innovation and excellence in computer science education 
              and professional development at Galgotias University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300 group"
              >
                <div className="p-6 text-center">
                  {/* Circular image container */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full"></div>
                    <div className="absolute inset-1 bg-white rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-1 bg-gradient-to-t from-yellow-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              ACHIEVEMENTS & RECOGNITION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Accomplishments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition of our commitment to excellence in computer science education, 
              research, and professional development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-yellow-500/10"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Join the IEEE Computer Society
              </h2>
              <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
                Become part of a global community dedicated to advancing computing technology 
                and shaping the future of our digital world.
              </p>
              {/* <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-yellow-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-all duration-300 shadow-lg"
                >
                  Become a Member
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-yellow-600 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div> */}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}