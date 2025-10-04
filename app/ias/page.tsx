"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Award, Users, Globe, BookOpen, Trophy, Zap, Cog, Settings } from 'lucide-react';

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Shubham Pal",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003441/Shubham_Pal_rmy0ew.jpg",
    bio: "As Chairperson of IEEE IAS, Shubham oversees the society's activities, focusing on industrial applications of engineering. His leadership is instrumental in bridging the gap between academics and industry for the members.",
    email: "shubham0568@ieee.org"
  },
  {
    name: "Adarsh Upadhyay",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003438/IMG-20241123-WA0097_lhev01.jpg",
    bio: "Adarsh, as Vice Chairperson, supports the Chairperson in organizing events and projects. He focuses on enhancing member participation and ensuring the society meets its objectives efficiently.",
    email: "adarsh265@ieee.org"
  },
  {
    name: "Urvashi Rawat",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003438/Urvashi_Rawat__nf8vls.jpg",
    bio: "As Secretary of IEEE IAS, Urvashi is the backbone of administrative operations. She ensures smooth coordination, documentation, and communication within the society.",
    email: "urvashirawat@ieee.org"
  },
  {
    name: "Ashish Kumar",
    role: "Web Master",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003440/IMG-20241116-WA0005_jhkcrw.jpg",
    bio: "Ashish, the Web Master of IEEE IAS, is responsible for guiding technical initiatives and projects. He organizes technical workshops, webinars, and events to inspire innovation and learning among members.",
    email: "ashishbhardwaj@ieee.org"
  },
  {
    name: "Anant Chaubey",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003446/Anant_chaubey__agfguw.jpg",
    bio: "Anant, as Treasurer, manages the financial aspects of IEEE IAS. He oversees budgeting, fundraising, and allocation of resources to ensure the smooth execution of society events.",
    email: "anant92@ieee.org"
  }
];

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "GU IEEE IAS NEXUS – Bridging Academia and Industry",
    description: "Successfully organized the flagship event connecting academic research with industrial applications and real-world engineering solutions."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Industrial Automation Workshops",
    description: "Conducted comprehensive workshops on modern industrial automation systems, robotics, and control technologies."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Industry Partnership Program",
    description: "Established strong partnerships with leading industrial organizations for internships, projects, and career opportunities."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Power Systems Innovation",
    description: "Led initiatives in renewable energy systems, smart grids, and sustainable power generation technologies."
  }
];

const focusAreas = [
  {
    title: "Power Systems",
    description: "Advanced power generation, transmission, distribution, and renewable energy technologies",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Industrial Automation",
    description: "Modern automation systems, robotics, and intelligent manufacturing processes",
    icon: <Cog className="w-6 h-6" />
  },
  {
    title: "Motor Drives",
    description: "Electric motor control systems, drive technologies, and energy-efficient solutions",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Renewable Energy",
    description: "Sustainable energy systems, solar power, wind energy, and green technology applications",
    icon: <Globe className="w-6 h-6" />
  }
];

export default function IndustryApplicationsSocietyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 text-white overflow-hidden"
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
                <span className="text-white">Industrial</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-200">
                  Excellence
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
                      src="https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/6-removebg-preview_uathl1.png"
                      alt="IEEE Industry Applications Society"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </motion.div>
              
              <p className="text-xl sm:text-2xl text-green-100 leading-relaxed max-w-4xl mx-auto font-light">
                Bridging Academia and Industry through Innovative Engineering Solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">45+</div>
                <div className="text-green-200 text-sm">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-green-200 text-sm">Industrial Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-green-200 text-sm">Industry Partners</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                ABOUT IAS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Advancing <span className="text-green-600">Industrial Engineering</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IEEE Industry Applications Society (IAS) at Galgotias University focuses on the development 
                and application of electrical technology, systems, and processes used in industry and commerce.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We bridge the gap between academic research and real-world industrial applications, 
                providing our members with hands-on experience in power systems, automation, and emerging technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Industry Focused</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Practical Learning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-green-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Cog className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To advance the theory and practice of electrical and electronic engineering 
                    in the development, design, manufacture, and application of electrical systems, 
                    apparatus, devices, and controls to the processes and equipment of industry and commerce.
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              LEADERSHIP TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-green-600">Executive Board</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated leaders driving innovation and excellence in industrial applications 
              and engineering solutions at Galgotias University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 group"
              >
                <div className="p-6 text-center">
                  {/* Circular image container */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full"></div>
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
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              FOCUS AREAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Core Specializations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on key industrial applications that drive technological advancement and economic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 text-white">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              ACHIEVEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Key Accomplishments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating our milestones in advancing industrial applications and engineering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
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
          className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-green-600">Industrial Revolution</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Be part of a community that&apos;s shaping the future of industrial engineering and technology. 
              Connect with industry leaders, work on real-world projects, and drive innovation forward.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Become a Member
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-medium hover:bg-green-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div> */}
          </div>
        </motion.section>
      </div>
    </div>
  );
}