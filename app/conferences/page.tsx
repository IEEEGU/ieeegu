"use client";

import React, { useState, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Conference {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  image: string;
  registrationUrl: string;
  deadline: string;
  topics: string[];
  keyFeatures: string[];
  speakers?: string[];
  status: 'upcoming' | 'ongoing' | 'past';
}

// Conference Data
const flagshipConference: Conference = {
  id: 'icssai-2025',
  title: 'ICSSAI 2025',
  subtitle: 'International Conference on Smart Systems and Artificial Intelligence',
  date: 'April 15-17, 2025',
  location: 'Galgotias University, Greater Noida',
  description: 'Join us for the premier international conference on smart systems and artificial intelligence, featuring cutting-edge research presentations, industry insights, and networking opportunities with leading experts from around the globe.',
  image: 'https://res.cloudinary.com/dgna3swph/image/upload/t_Banner 16:9/v1737884727/df6cda3d-19f2-49f6-bd13-467f152d4af7_gbru5l.jpg',
  registrationUrl: 'https://iccsai.in/',
  deadline: 'February 20, 2025',
  status: 'upcoming',
  topics: [
    'Artificial Intelligence & Machine Learning',
    'Internet of Things (IoT)',
    'Smart City Technologies',
    'Data Science & Analytics',
    'Cybersecurity',
    'Blockchain Technology',
    'Cloud Computing',
    'Edge Computing'
  ],
  keyFeatures: [
    'Keynote speeches by industry leaders',
    'Technical paper presentations',
    'Interactive workshops and tutorials',
    'Networking sessions',
    'Award ceremonies',
    'Exhibition of latest technologies'
  ],
  
};

const upcomingConferences: Conference[] = [
  {
    id: 'iccca-2025',
    title: 'ICCCA 2025',
    subtitle: 'International Conference on Computing, Communication and Automation',
    date: 'November 28-30, 2025',
    location: 'Galgotias University, Greater Noida, India',
    description: 'ICCCA 2025 is a premier international conference that brings together researchers, academicians, and industry professionals to share cutting-edge research and innovations in the fields of Computing, Communication, and Automation. The conference provides a platform for exchanging ideas, fostering collaborations, and discussing the latest trends and challenges in these rapidly evolving domains.',
    image: 'https://via.placeholder.com/800x400/1e40af/ffffff?text=ICCCA+2025',
    registrationUrl: 'https://iccca.co.in',
    deadline: 'October 15, 2025',
    status: 'upcoming',
    topics: [
      'Artificial Intelligence and Machine Learning',
      'Internet of Things (IoT)',
      'Cloud Computing and Big Data',
      'Wireless Communication and Networks',
      'Automation and Robotics',
      'Cybersecurity and Privacy',
      'Blockchain Technology',
      'Computer Vision and Image Processing',
      'Natural Language Processing',
      'Software Engineering and Applications'
    ],
    keyFeatures: [
      'Keynote speeches by renowned experts',
      'Technical paper presentations and poster sessions',
      'Workshops and tutorials on emerging technologies',
      'Industry-academia interaction sessions',
      'Best paper awards and recognitions',
      'Publication opportunities in Scopus/SCI indexed journals',
      'Networking with global researchers',
      'Exhibition of innovative projects'
    ]
  },
  {
    id: 'ic2pct-2026',
    title: 'IC2PCT 2026',
    subtitle: 'International Conference on Parallel Computing Technologies',
    date: 'February 20-22, 2026',
    location: 'Galgotias University, Greater Noida, India',
    description: 'IC2PCT 2026 is an international forum for researchers, developers, and practitioners to present their latest research findings, innovative ideas, and practical experiences in parallel computing technologies. The conference aims to promote research collaboration and foster exchange of ideas on the theory, design, implementation, and applications of parallel computing systems.',
    image: 'https://via.placeholder.com/800x400/4f46e5/ffffff?text=IC2PCT+2026',
    registrationUrl: 'https://ic2pct.co.in',
    deadline: 'December 15, 2025',
    status: 'upcoming',
    topics: [
      'Parallel and Distributed Computing',
      'High Performance Computing (HPC)',
      'Grid and Cloud Computing',
      'GPU Computing and Accelerators',
      'Multi-core and Many-core Architectures',
      'Parallel Algorithms and Applications',
      'Big Data Processing and Analytics',
      'Scientific Computing and Simulations',
      'Quantum Computing',
      'Edge Computing and IoT',
      'Green Computing and Energy Efficiency',
      'Fault Tolerance and Reliability'
    ],
    keyFeatures: [
      'Distinguished keynote speakers from academia and industry',
      'Peer-reviewed research paper presentations',
      'Hands-on workshops on parallel programming',
      'Panel discussions on future trends',
      'Doctoral consortium for PhD students',
      'Publication in IEEE/Springer proceedings',
      'Best paper and presentation awards',
      'Industrial exhibition and demos',
      'Cultural programs and networking events'
    ]
  }
];

// Conference Modal Component
const ConferenceModal = memo(({ conference, isOpen, onClose }: { 
  conference: Conference | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!conference) return null;

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
            <div className="relative h-96 md:h-[400px] overflow-hidden">
              <Image
                src={conference.image}
                alt={conference.title}
                width={1000}
                height={400}
                className="w-full h-full object-cover object-center"
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
                    {conference.status.toUpperCase()}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{conference.title}</h2>
                <p className="text-xl text-blue-200">{conference.subtitle}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Conference Info Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Conference Date</h3>
                  <p className="text-gray-600">{conference.date}</p>
                </div>
                <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">{conference.location}</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Registration Deadline</h3>
                  <p className="text-gray-600">{conference.deadline}</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Conference</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{conference.description}</p>
              </div>

              {/* Topics and Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Conference Topics</h3>
                  <div className="space-y-2">
                    {conference.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="space-y-2">
                    {conference.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Speakers */}
              {conference.speakers && conference.speakers.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Keynote Speakers</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {conference.speakers.map((speaker, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4">
                        <p className="text-gray-800 font-medium">{speaker}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-center gap-4">
                <motion.a
                  href={conference.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register Now
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-8 py-3 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

ConferenceModal.displayName = "ConferenceModal";

// Conference Card Component
const ConferenceCard = memo(({ conference, index, onClick, featured = false }: { 
  conference: Conference; 
  index: number;
  onClick: () => void;
  featured?: boolean;
}) => {
  const cardVariants = {
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
  };

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative cursor-pointer mb-12"
        onClick={onClick}
      >
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-96 overflow-hidden">
              <Image
                src={conference.image}
                alt={conference.title}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg">
                  Flagship Conference
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <span className="text-lg">🔍</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {conference.title}
                </h3>
                <p className="text-xl text-gray-600 mb-6">{conference.subtitle}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue-500">📅</span>
                    <span className="font-medium">{conference.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500">📍</span>
                    <span className="font-medium">{conference.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-red-500">⏰</span>
                    <span className="font-medium">Deadline: {conference.deadline}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {conference.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Learn More →
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={conference.image}
            alt={conference.title}
            width={400}
            height={250}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
              {conference.status.toUpperCase()}
            </span>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm">
              🔍
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg leading-tight">
              {conference.title}
            </h3>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <p className="text-gray-600 text-sm mb-4">{conference.subtitle}</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-blue-500">📅</span>
              <span>{conference.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">📍</span>
              <span>{conference.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Registration Deadline: {conference.deadline}
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
            >
              Details →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ConferenceCard.displayName = "ConferenceCard";

// Main Conferences Page Component
export default function ConferencesPage() {
  const [selectedConference, setSelectedConference] = useState<Conference | null>(null);

  const handleCardClick = (conference: Conference) => {
    setSelectedConference(conference);
  };

  const handleCloseModal = () => {
    setSelectedConference(null);
  };

  const benefits = [
    {
      title: "Present Your Research",
      description: "Share your innovative work with a global audience of researchers, academics, and industry professionals. Receive valuable feedback and recognition for your contributions.",
      icon: "🎯",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Learn from Experts",
      description: "Attend keynote speeches, technical sessions, and workshops led by renowned researchers and industry leaders from around the world.",
      icon: "🧠",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Global Networking",
      description: "Connect with peers, potential collaborators, mentors, and future employers. Build lasting professional relationships that can advance your career.",
      icon: "🌐",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Stay Current",
      description: "Discover the latest trends, technologies, and research breakthroughs in your field. Stay ahead of the curve with cutting-edge knowledge.",
      icon: "⚡",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Career Growth",
      description: "Enhance your professional profile, gain visibility in your field, and explore new career opportunities through direct interaction with industry leaders.",
      icon: "🚀",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Publication Opportunities",
      description: "Get your research published in prestigious conference proceedings and journals, building your academic and professional credibility.",
      icon: "📚",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              IEEE <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Conferences</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Join the world&apos;s most prestigious academic and research conferences. Present your work, learn from experts, and connect with the global IEEE community.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 text-blue-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                <span className="font-medium">Academic Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <span className="font-medium">Global Network</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="font-medium">Innovation Hub</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What are Research Conferences Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What are Research Conferences?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Research conferences are prestigious gatherings where the world&apos;s brightest minds come together to share groundbreaking discoveries, exchange innovative ideas, and shape the future of technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Conference Components</h3>
                <div className="space-y-4">
                  {[
                    { icon: "📄", title: "Paper Presentations", desc: "Latest research findings and innovations" },
                    { icon: "🎤", title: "Keynote Speeches", desc: "Inspiring talks by industry leaders" },
                    { icon: "💬", title: "Panel Discussions", desc: "Expert insights on trending topics" },
                    { icon: "📊", title: "Poster Sessions", desc: "Visual research presentations" },
                    { icon: "🤝", title: "Networking Events", desc: "Professional connections and collaborations" },
                    { icon: "🛠️", title: "Workshops", desc: "Hands-on learning experiences" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-3xl">🏆</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Excellence Recognition</h4>
                    <p className="text-gray-600 leading-relaxed">
                      IEEE conferences are renowned for their rigorous peer review process and high academic standards, making them the gold standard for research excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flagship Conference Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Flagship Conference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our premier conference bringing together the brightest minds in smart systems and artificial intelligence
            </p>
          </motion.div>

          <ConferenceCard
            conference={flagshipConference}
            index={0}
            onClick={() => handleCardClick(flagshipConference)}
            featured={true}
          />
        </div>
      </section>

      {/* Upcoming Conferences Section */}
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
              Upcoming Conferences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming conferences and research opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingConferences.map((conference, index) => (
              <ConferenceCard
                key={conference.id}
                conference={conference}
                index={index}
                onClick={() => handleCardClick(conference)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Attend IEEE Conferences?
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Transform your career and research impact through world-class IEEE conference experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the next step in your academic and professional journey. Register for upcoming conferences and become part of the IEEE legacy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Conferences
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Conference Modal */}
      <ConferenceModal
        conference={selectedConference}
        isOpen={!!selectedConference}
        onClose={handleCloseModal}
      />
    </div>
  );
}

