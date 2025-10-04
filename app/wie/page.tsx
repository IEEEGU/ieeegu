"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Award, Users, ChevronRight, Globe, BookOpen, Trophy } from 'lucide-react';

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Monica Singh",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003442/IMG-20250126-WA0021_wzt0kg.jpg",
    bio: "Monica, as Chairperson, leads the IEEE WIE group with a vision to empower women in engineering and technology. She organizes initiatives to inspire and support women pursuing technical careers.",
    email: "mona_13@ieee.org"
  },
  {
    name: "Yashi Katiyar",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003437/Yashi_Katiyar_eso00p.jpg",
    bio: "Yashi serves as Vice Chair, working closely with the Chairperson to manage operations and promote the growth of WIE. She helps in strategizing and implementing impactful programs for members.",
    email: "yashikatiyar@ieee.org"
  },
  {
    name: "Tanisha Bhatnagar",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003443/IMG_20250126_210124_b2c9ah.jpg",
    bio: "As Secretary of IEEE WIE, Tanisha plays a key role in maintaining communication and organizing events. She ensures accurate documentation and smooth operations within the team.",
    email: "tanishabhatnagar2703@ieee.org"
  },
  {
    name: "Anjali Yadav",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003446/SAVE_20250126_210851_sngoeg.jpg",
    bio: "Anjali, as Treasurer, manages the financial aspects of WIE. She ensures efficient use of resources to support the society's initiatives and events.",
    email: "anjaliyadav@ieee.org"
  },
  {
    name: "Arya Amoriya",
    role: "Outreach Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003445/Arya_Amoriya__r7hcbx.jpg",
    bio: "As Outreach Lead, Arya is responsible for building connections with external organizations and promoting WIE's activities. She ensures the group's visibility and engagement within the community.",
    email: "aryaamoriya@ieee.org"
  }
];

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Women in Workforce (WIE Vision)",
    description: "Successfully organized the panel discussion aligned with WIE Vision initiative, promoting equity in technology and inclusive leadership."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "STEM Empowerment Programs",
    description: "Conducted multiple workshops and seminars to encourage women's participation in STEM fields and technology careers."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Mentorship Network",
    description: "Established a strong mentorship program connecting female students with industry professionals and academic leaders."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Community Outreach",
    description: "Engaged with local communities to promote STEM education among young girls and encourage technical education."
  }
];

const focusAreas = [
  {
    title: "Leadership Development",
    description: "Empowering women engineers to take on leadership roles in technology and engineering sectors",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Career Advancement",
    description: "Providing resources and opportunities for professional growth and career development",
    icon: <ChevronRight className="w-6 h-6" />
  },
  {
    title: "STEM Education",
    description: "Promoting STEM education and encouraging young women to pursue engineering careers",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Gender Equality",
    description: "Advocating for gender equality and inclusive practices in engineering and technology",
    icon: <Users className="w-6 h-6" />
  }
];

export default function WomenInEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 text-white overflow-hidden"
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
                <span className="text-white">Empowering</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
                  Women Engineers
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
                      src="https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/7-removebg-preview_3_mpuv5a.png"
                      alt="IEEE Women in Engineering"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </motion.div>
              
              <p className="text-xl sm:text-2xl text-purple-100 leading-relaxed max-w-4xl mx-auto font-light">
                Inspiring and Empowering Women Engineers to Achieve Excellence and Drive Innovation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-purple-200 text-sm">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-purple-200 text-sm">Empowerment Events</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-purple-200 text-sm">Mentorship Programs</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                ABOUT WIE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Advancing Women in <span className="text-purple-600">Engineering & Technology</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IEEE Women in Engineering (WIE) at Galgotias University is dedicated to promoting women engineers 
                and scientists, and inspiring girls around the world to follow their academic interests in a career 
                in engineering and science.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We foster a supportive community that encourages diversity, equality, and professional development 
                through mentorship, networking, and educational opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-purple-600">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Excellence in Leadership</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Inclusive Community</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To inspire, engage, encourage, and empower IEEE members and the engineering and scientific 
                    community-at-large to fully realize the potential of women in all fields of engineering, 
                    science, and technology.
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              LEADERSHIP TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-purple-600">Executive Board</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated leaders driving empowerment and excellence in women&apos;s engineering education 
              and professional development at Galgotias University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 group"
              >
                <div className="p-6 text-center">
                  {/* Circular image container */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full"></div>
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
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              FOCUS AREAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Core Initiatives</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on key areas that drive women&apos;s advancement in engineering and technology fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-100 hover:border-purple-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 text-white">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              ACHIEVEMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Key Accomplishments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating our milestones in empowering women in engineering and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
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
          className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-purple-600">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Be part of a community that&apos;s breaking barriers and creating opportunities for women in engineering. 
              Together, we can inspire the next generation of female engineers and scientists.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Become a Member
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-medium hover:bg-purple-50 transition-all duration-300"
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