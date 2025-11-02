"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/95 to-purple-900/95"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-800/50 to-indigo-800/50 rounded-full text-blue-200 text-sm font-medium mb-8 shadow-lg border border-blue-700/50">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              ABOUT IEEE GALGOTIAS UNIVERSITY
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              ADVANCING TECHNOLOGY
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                FOR HUMANITY
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
              Empowering students to become leaders in technology and innovation through excellence in education, research, and professional development.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Mission Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto font-light">
              IEEE Galgotias University Student Branch is dedicated to fostering technological innovation and excellence for the benefit of humanity. We inspire students to pursue excellence in their chosen fields and contribute meaningfully to technological advancement through education, collaboration, and practical application of knowledge.
            </p>
          </div>
        </motion.section>

        {/* Who We Are Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 rounded-full"></div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2024, IEEE Galgotias University is a student branch of the world&apos;s largest technical professional organization, the Institute of Electrical and Electronics Engineers (IEEE). Our branch operates under the Delhi Section of IEEE Region 10 and serves students across various disciplines of engineering and technology at Galgotias University.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Led by passionate student volunteers and guided by faculty advisors, our branch offers a platform for students to develop technical skills, leadership abilities, and professional networks beyond the classroom.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                  <div className="text-gray-600 font-medium">Founded</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
                  <div className="text-gray-600 font-medium">Members</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">80+</div>
                  <div className="text-gray-600 font-medium">Events</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-pink-600 mb-2">5000+</div>
                  <div className="text-gray-600 font-medium">Participants</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What We Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">Technical Events</h3>
              <p className="text-gray-600 leading-relaxed">
                We organize workshops, seminars, coding competitions, hackathons, and technical symposiums that bring together students, academics, and industry professionals.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">Skill Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Through hands-on sessions and projects, we help students develop practical skills that complement their academic learning and prepare them for professional challenges.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">Networking</h3>
              <p className="text-gray-600 leading-relaxed">
                We connect students with professionals and experts through guest lectures, industry visits, and networking sessions, creating valuable opportunities for mentorship.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">Research & Publication</h3>
              <p className="text-gray-600 leading-relaxed">
                We encourage and support students in research activities and help them publish their work through IEEE-affiliated journals and conferences.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Society Chapters Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Society Chapters</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                IEEE GU hosts several specialized society chapters that focus on specific fields within technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl">💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Society</h3>
                    <p className="text-gray-600">Focusing on advanced computing, software engineering, and information technology.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-xl">👩‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Women in Engineering (WIE)</h3>
                    <p className="text-gray-600">Supporting the recruitment and retention of women in technical disciplines.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 text-xl">🏭</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Applications Society</h3>
                    <p className="text-gray-600">Bridging the gap between theoretical knowledge and industrial applications.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technology and Engineering Management Society</h3>
                    <p className="text-gray-600">Concentrating on technology management and engineering challenges.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Computational Intelligence Society</h3>
                    <p className="text-gray-600">Focusing on the intersection of AI, machine learning, and engineering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leadership Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dgna3swph/image/upload/v1741289813/Aanjey_wkazg5.jpg"
                  alt="Dr. Aanjey Mani Tripathi"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Aanjey Mani Tripathi</h3>
              <p className="text-blue-600 font-medium mb-4">Branch Counselor</p>
              <p className="text-gray-600 text-sm">Guiding our branch with expertise and vision in technical education and innovation.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005300/shubhranshu_hfxnd7.png"
                  alt="Shubhranshu Shekhar Dash"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shubhranshu Shekhar Dash</h3>
              <p className="text-indigo-600 font-medium mb-4">Chairperson</p>
              <p className="text-gray-600 text-sm">Leading student initiatives and driving organizational excellence across all branch activities.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005302/anurag_brdjdq.png"
                  alt="Anurag kumar singh"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anurag kumar singh</h3>
              <p className="text-purple-600 font-medium mb-4">Vice-Chairperson</p>
              <p className="text-gray-600 text-sm">Supporting leadership initiatives and coordinating technical programs for student development.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Achievements</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                IEEE Galgotias University has established itself as one of the most active student branches in the Uttar Pradesh Section
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-600 text-xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Best Emerging Student Branch Award</h3>
                  <p className="text-gray-600">IEEE UP Section, 2024</p>
                </div>
              </div>

              
            </div>
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-radial from-white/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  IEEE membership offers unmatched opportunities for students to grow personally and professionally
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-300 text-sm">🤝</span>
                  </div>
                  <p className="text-gray-200">Connect with like-minded peers and industry professionals</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-300 text-sm">📚</span>
                  </div>
                  <p className="text-gray-200">Access exclusive technical resources and IEEE&apos;s vast digital library</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-300 text-sm">🏆</span>
                  </div>
                  <p className="text-gray-200">Participate in competitions and events at all levels</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-300 text-sm">🚀</span>
                  </div>
                  <p className="text-gray-200">Develop leadership and organizational skills</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-300 text-sm">📜</span>
                  </div>
                  <p className="text-gray-200">Enhance your resume with IEEE membership certificates</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-300 text-sm">🌟</span>
                  </div>
                  <p className="text-gray-200">Network with global technology leaders and innovators</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Contact Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 px-2">
                For inquiries about IEEE Galgotias University, membership, or our events, please reach out to us. We&apos;re here to help you join our community of innovators and technology leaders.
              </p>
              
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl">📧</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Email</p>
                    <p className="text-sm sm:text-base text-gray-900 font-medium break-all">
                      ieeegusb@galgotiasuniversity.edu.in
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 text-xl">📍</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Office</p>
                    <p className="text-sm sm:text-base text-gray-900 font-medium">
                      Galgotias University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
