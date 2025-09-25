"use client";

import React, { useState, memo, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  location: string;
  status: 'featured' | 'upcoming' | 'past';
  image?: string;
  registrationUrl?: string;
  organizer?: string;
  duration?: string;
  type?: string;
}

const featuredEvents: Event[] = [
  {
    id: "featured-1",
    title: "All India Computer Society Student and Young Professionals Congress 2024",
    date: "October 17-19, 2024",
    description: "The All India Computer Society Student & Young Professional Congress (AICSSYC) organized by the IEEE Computer Society SYP offers an exceptional opportunity for bright and enthusiastic minds to come together and exchange their knowledge and innovative ideas. This premier event brings together students, young professionals, and industry experts to explore cutting-edge technologies and foster innovation.",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1741288700/DSC07262_wdff02.jpg",
    category: "Conference",
    location: "Galgotias University",
    status: 'featured',
    registrationUrl: "https://syp.computer.org/aicssyc/",
    organizer: "IEEE Computer Society SYP",
    duration: "3 Days",
    type: "Hybrid Event"
  },
  
];

const upcomingEvents: Event[] = [
  {
    id: "upcoming-1",
    title: "IEEE Day Celebrations 2025",
    date: "October 7-15, 2025",
    description: "Join us for a week-long celebration honoring IEEE's founding! Experience workshops, competitions, networking sessions, and technical exhibitions. A flagship event showcasing the best of IEEE GU Student Branch with industry speakers, alumni panels, and student showcases.",
    category: "Celebration Event",
    location: "Galgotias University",
    status: 'upcoming',
    organizer: "IEEE GU Student Branch",
    duration: "9 Days",
    type: "IEEE Day Celebration"
  },
  {
    id: "upcoming-2",
    title: "IEEE GUSB Orientation and Membership Development Drive",
    date: "October 7, 2025",
    description: "Official orientation session for new IEEE members and comprehensive membership development drive. Learn about IEEE benefits, student branch activities, career opportunities, and networking possibilities. Perfect for students looking to start their IEEE journey.",
    category: "Orientation",
    location: "Galgotias University",
    status: 'upcoming',
    organizer: "IEEE GU Student Branch",
    duration: "Full Day",
    type: "Membership Drive"
  },
  {
    id: "upcoming-3",
    title: "IEEE TEMS Synapse 2025",
    date: "September 30, 2025",
    description: "The annual flagship event by IEEE Technology & Engineering Management Society. Connect, learn, and network with industry leaders. Features keynote sessions, technical presentations, and management workshops focusing on technology leadership and innovation.",
    category: "Conference",
    location: "Galgotias University",
    status: 'upcoming',
    organizer: "IEEE TEMS Chapter",
    duration: "Full Day",
    type: "Annual Conference"
  },
  {
    id: "upcoming-4",
    title: "IEEE IAS Cup Competition",
    date: "Coming Soon",
    description: "Showcase your industrial applications knowledge in this exciting competition organized by IEEE Industry Applications Society. Compete with teams from across the region in technical challenges, case studies, and innovation projects.",
    category: "Competition",
    location: "Galgotias University",
    status: 'upcoming',
    organizer: "IEEE IAS Chapter",
    duration: "2 Days",
    type: "Technical Competition"
  },
  {
    id: "upcoming-5",
    title: "IEEE WiE Debate Competition",
    date: "Registration Open",
    description: "IEEE Women in Engineering presents an engaging debate competition. Empower your voice and join the discussion on technology and society. Open to all students with topics focusing on women in STEM, technology ethics, and future innovations.",
    category: "Competition",
    location: "Galgotias University",
    status: 'upcoming',
    organizer: "IEEE WiE GU",
    duration: "6 Hours",
    type: "Debate Competition"
  },
  {
    id: "upcoming-6",
    title: "IEEE TEMS Poster Making Competition",
    date: "Submission Open",
    description: "Express your creativity in technology and engineering management through visual storytelling. Prizes for the most innovative designs! Showcase your understanding of TEMS principles through compelling poster presentations.",
    category: "Competition",
    location: "Galgotias University",
    status: 'upcoming',
    organizer: "IEEE TEMS Chapter",
    duration: "Submission Based",
    type: "Creative Competition"
  },
  {
    id: "upcoming-7",
    title: "IEEE CIS Workshop and Hackathon",
    date: "Registration Open",
    description: "Dive deep into Computational Intelligence with hands-on workshops followed by an intensive hackathon. Learn, code, and innovate! Explore machine learning, neural networks, evolutionary computing, and fuzzy systems in practical applications.",
    category: "Workshop & Hackathon",
    location: "Galgotias University",
    status: 'upcoming',
    organizer: "IEEE CIS Chapter",
    duration: "3 Days",
    type: "Technical Workshop & Competition"
  }
];

const pastEvents: Event[] = [
  {
    id: 'event-1',
    title: "Young Minds 2025: 3rd IEEE International Conference on ICCSAI",
    date: "April 06, 2025",
    description: "Hosted under IEEE GU SB leadership. Managed sessions, speakers, and reports. Ensured adherence to IEEE global standards. Highlighted SB's capacity for international execution.",
    category: "Conference",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "Full Day",
    type: "International Conference"
  },
  {
    id: 'event-2',
    title: "Cracking Gate: A Roadmap to Success",
    date: "March 30, 2025",
    description: "Student-led session on exam strategy. Featured speakers and peer mentors. Focused on GATE preparation techniques. Boosted IEEE GU SB's student outreach.",
    category: "Workshop",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "4 Hours",
    type: "Educational Workshop"
  },
  {
    id: 'event-3',
    title: "WOMEN IN WORKFORCE (WIE Vision)",
    date: "March 08, 2025",
    description: "Aligned with WIE Vision initiative. Held panels on equity in technology. Moderated by WIE Core and SB members. Encouraged inclusive participation and leadership.",
    category: "Panel Discussion",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE WIE GU",
    duration: "6 Hours",
    type: "Leadership Panel"
  },
  {
    id: 'event-4',
    title: "Bootcamp on Artificial Intelligence (AI)",
    date: "March 04, 2025",
    description: "Focused on AI tools and applications. Hands-on sessions led by industry experts. SB volunteers supported content delivery. Promoted practical skill-building in AI.",
    category: "Bootcamp",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "2 Days",
    type: "Technical Bootcamp"
  },
  {
    id: 'event-5',
    title: "BIZYTEK Kurukshetra'25 – THE METAVERSE OF GAMES",
    date: "January 27, 2025",
    description: "Showcased innovation in gaming and tech. Included AI, VR, and metaverse modules. Cross-team coordination led by IEEE GU SB. Fostered creativity and interdisciplinary learning.",
    category: "Tech Fest",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "3 Days",
    type: "Innovation Fest"
  },
  {
    id: 'event-6',
    title: "GU IEEE IAS NEXUS – Bridging Academia and Industry",
    date: "January 23, 2025",
    description: "Panel discussions with industry experts. Focused on real-world applications of research. Facilitated networking with academic leaders. Strengthened SB's industry linkage.",
    category: "Industry Connect",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE IAS Chapter",
    duration: "Full Day",
    type: "Industry Panel"
  },
  {
    id: 'event-7',
    title: "Dr. LEONG Wai Yie EXPERT SESSION ON AR VR",
    date: "January 18, 2025",
    description: "Featured international expert Dr. Leong. Explored AR/VR technology frontiers. IEEE GU SB handled hosting and tech. Enhanced global speaker engagement experience.",
    category: "Expert Session",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "3 Hours",
    type: "Expert Talk"
  },
  {
    id: 'event-8',
    title: "IEEE GU SB VISIT TO UP SECTION AGM, AGRA",
    date: "January 12, 2025",
    description: "Official visit to the UP Section AGM. Presented GU SB's yearly achievements. Networked with section and society chairs. Strengthened inter-SB collaboration efforts.",
    category: "Official Visit",
    location: "Agra, UP",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "2 Days",
    type: "Section Meeting"
  },
  {
    id: 'event-9',
    title: "GROUND WATER: A VANISHING RESOURCE",
    date: "January 03, 2025",
    description: "Raised awareness on water scarcity. Aligned with IEEE environmental SDGs. Experts presented data-driven solutions. Supported by IEEE GU SB for logistics.",
    category: "Awareness Session",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "4 Hours",
    type: "Environmental Awareness"
  },
  {
    id: 'event-10',
    title: "The Future of Power Electronics – Gah Technology",
    date: "December 20, 2024",
    description: "Focused on advancements in power systems. Sessions included real-world energy applications. Aligned with IEEE PES domain interests. Organized by IEEE GU SB technical team.",
    category: "Technical Session",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE PES Chapter",
    duration: "6 Hours",
    type: "Power Systems Session"
  },
  {
    id: 'event-11',
    title: "Webinar on Scientific and High-Performance Computing",
    date: "December 20, 2024",
    description: "Introduced modern computing architectures. Live Q&A and demos were included. IEEE GU SB ensured smooth technical flow. Encouraged interest in computational sciences.",
    category: "Webinar",
    location: "Virtual Event",
    status: 'past',
    organizer: "IEEE Computer Society",
    duration: "3 Hours",
    type: "Technical Webinar"
  },
  {
    id: 'event-12',
    title: "Beyond the Algorithm: Human Side of AI",
    date: "December 07, 2024",
    description: "Centered on ethics and empathy in AI. Conceptualized and led by GU SB core. Discussed AI's societal implications. Fostered responsible tech leadership.",
    category: "Ethics Discussion",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "4 Hours",
    type: "AI Ethics Session"
  },
  {
    id: 'event-13',
    title: "THE ECONOMIC WHIZ QUIZ",
    date: "December 02, 2024",
    description: "Interdisciplinary quiz with economics themes. Custom-designed rounds and questions. Fun learning with a tech-economic twist. Promoted by IEEE GU SB as edu-tainment.",
    category: "Quiz Competition",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "3 Hours",
    type: "Educational Competition"
  },
  {
    id: 'event-14',
    title: "IoT: The Future of Innovation and Technology",
    date: "November 30, 2024",
    description: "Introduced IoT concepts and hardware. Sessions by field professionals and students. IEEE GU SB mentored the organizing team. Strengthened applied technology exposure.",
    category: "Technical Workshop",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "6 Hours",
    type: "IoT Workshop"
  },
  {
    id: 'event-15',
    title: "Webinar on AI in Healthcare (Biswarup Ray)",
    date: "November 28, 2024",
    description: "Focused on AI solutions for healthcare. Explored ethics and innovation challenges. Speaker coordinated by GU SB team. Strengthened healthcare-tech understanding.",
    category: "Webinar",
    location: "Virtual Event",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "2 Hours",
    type: "Healthcare AI Webinar"
  },
  {
    id: 'event-16',
    title: "HAND ON APPLICATION WORKSHOP ON REACT",
    date: "November 24, 2024",
    description: "Introductory React.js coding workshop. Included mentor-led, hands-on sessions. Supported full-stack development learning. IEEE GU SB provided resource setup.",
    category: "Coding Workshop",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE Computer Society",
    duration: "8 Hours",
    type: "Programming Workshop"
  },
  {
    id: 'event-17',
    title: "PLC WORKSHOP",
    date: "November 19, 2024",
    description: "Focused on programmable logic controllers. Hardware interfacing and simulations taught. Participants gained automation knowledge. IEEE GU SB enabled technical execution.",
    category: "Technical Workshop",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE IAS Chapter",
    duration: "6 Hours",
    type: "Automation Workshop"
  },
  {
    id: 'event-18',
    title: "AICSSYC 2024",
    date: "October 17, 2024",
    description: "National IEEE congress hosted at GU. 500+ attendees, 3 days of technical events. IEEE GU SB led all logistics and planning. Flagship youth congress for student leaders.",
    category: "National Congress",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE Computer Society SYP",
    duration: "3 Days",
    type: "National Congress",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1741288700/DSC07262_wdff02.jpg"
  },
  {
    id: 'event-19',
    title: "IEEE VTOOLS Webinar",
    date: "October 09, 2024",
    description: "Training on IEEE vTools platform. Demonstrated event reporting and usage. Interactive Q&A resolved common doubts. Empowered SBs with reporting clarity.",
    category: "Training Webinar",
    location: "Virtual Event",
    status: 'past',
    organizer: "IEEE Section",
    duration: "2 Hours",
    type: "Platform Training"
  },
  {
    id: 'event-20',
    title: "IEEE Day Celebrations: Overview Seminar",
    date: "October 09, 2024",
    description: "Marked IEEE's global celebration. Alumni panels and SB showcase featured. Summarized year-long branch achievements. Ended with future vision for GU SB.",
    category: "Celebration Event",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "Full Day",
    type: "IEEE Day Celebration"
  },
  {
    id: 'event-21',
    title: "Symposium: Role of AI in Humanity",
    date: "October 07, 2024",
    description: "Explored human-AI relationship ethics. Organized as a community discussion. Included audience polls and case studies. Strengthened GU SB's thought leadership.",
    category: "Symposium",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "4 Hours",
    type: "AI Ethics Symposium"
  },
  {
    id: 'event-22',
    title: "Poster Competition: Sustainability",
    date: "October 07, 2024",
    description: "Focused on green innovation concepts. Students submitted research-backed posters. Judged by faculty and external reviewers. IEEE GU SB published winning entries.",
    category: "Competition",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "4 Hours",
    type: "Poster Competition"
  },
  {
    id: 'event-23',
    title: "Poster Making (SBC11971B)",
    date: "October 07, 2024",
    description: "Themed art contest by subchapter. Promoted creativity and visual storytelling. IEEE GU SB supported judging process. Part of SB's outreach and art integration.",
    category: "Art Competition",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "3 Hours",
    type: "Creative Competition"
  },
  {
    id: 'event-24',
    title: "ENGINEERED FOR ANIMALS: FOOD DRIVE",
    date: "October 06, 2024",
    description: "Social outreach drive for animals. Food collection and distribution handled. Collaborated with local NGOs. Linked to IEEE's SDG responsibility goals.",
    category: "Social Outreach",
    location: "Local Community",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "Full Day",
    type: "Community Service"
  },
  {
    id: 'event-25',
    title: "WE PLAY WE WIN: OFFLINE GAMING SESSION",
    date: "October 05, 2024",
    description: "Casual gaming with a tech twist. Focused on team play and strategy. Organized as part of engagement efforts. Boosted student participation in SB events.",
    category: "Recreation Event",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "4 Hours",
    type: "Gaming Session"
  },
  {
    id: 'event-26',
    title: "THE CLEANUP BLUEPRINT",
    date: "October 04, 2024",
    description: "Campus and local cleanup initiative. SDG-driven effort to promote sustainability. Students documented cleanup process. IEEE GU SB filed post-event report.",
    category: "Environmental Initiative",
    location: "Campus & Local Area",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "6 Hours",
    type: "Cleanup Drive"
  },
  {
    id: 'event-27',
    title: "Opportunities through IEEE + Transactions Paper Writing",
    date: "August 30, 2024",
    description: "Intro session on IEEE opportunities. Included guidance on research publications. Senior speakers shared best practices. Boosted technical writing culture in SB.",
    category: "Career Guidance",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "3 Hours",
    type: "Career Workshop"
  },
  {
    id: 'event-28',
    title: "Vikram Sarabhai Space Exhibition",
    date: "August 01, 2024",
    description: "Visit to ISRO-affiliated space exhibit. Explored India's space technology history. IEEE GU SB coordinated the educational visit. Enhanced aerospace technology awareness.",
    category: "Educational Visit",
    location: "Space Exhibition Center",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "Full Day",
    type: "Space Technology Visit"
  },
  {
    id: 'event-29',
    title: "DevOps Dynamics",
    date: "June 30, 2024",
    description: "Covered DevOps tools and workflows. Sessions by working professionals. Interactive case-based problem solving. IEEE GU SB managed execution framework.",
    category: "Technical Workshop",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE Computer Society",
    duration: "6 Hours",
    type: "DevOps Workshop"
  },
  {
    id: 'event-30',
    title: "IEEE Networking Meeting",
    date: "May 01, 2024",
    description: "Introductory networking session for volunteers. Facilitated member-to-member interaction. Included roadmap for SB activities. Supported leadership transition at GU SB.",
    category: "Networking Event",
    location: "Galgotias University",
    status: 'past',
    organizer: "IEEE GU Student Branch",
    duration: "3 Hours",
    type: "Networking Session"
  }
];

// Event Modal Component
const EventModal = memo(({ event, isOpen, onClose }: { 
  event: Event; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!event) return null;

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
            {event.image && (
              <div className="relative h-96 md:h-[400px] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
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
                      {event.category}
                    </span>
                    <span className="px-5 py-2.5 bg-white/25 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {event.status.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{event.title}</h2>
                </div>
              </div>
            )}

            {/* Modal Header for events without images */}
            {!event.image && (
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 text-lg font-bold"
                >
                  ✕
                </button>
                <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                    <span className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {event.status.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{event.title}</h2>
                </div>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Date</h3>
                  <p className="text-gray-600">{event.date}</p>
                </div>
                <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">{event.location}</p>
                </div>
                {event.duration && (
                  <div className="text-center p-6 bg-purple-50 rounded-2xl">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">⏱️</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
                    <p className="text-gray-600">{event.duration}</p>
                  </div>
                )}
                {event.organizer && (
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🏢</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Organizer</h3>
                    <p className="text-gray-600">{event.organizer}</p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Description</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{event.description}</p>
                {event.type && (
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">
                      {event.type}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center gap-4">
                {event.registrationUrl && (
                  <motion.a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Register Now
                  </motion.a>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-8 py-3 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300"
                >
                  Close Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

EventModal.displayName = "EventModal";

// Featured Event Card (with image)
const FeaturedEventCard = memo(({ event, onClick }: { 
  event: Event; 
  onClick: () => void; 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={event.image!}
            alt={event.title}
            width={800}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-500" />
          
          {/* Status Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg">
              {event.category}
            </span>
          </div>

          {/* Expand Icon */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <span className="text-lg">🔍</span>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white font-bold text-2xl mb-3 group-hover:mb-4 transition-all duration-300 leading-tight">
              {event.title}
            </h3>
            <p className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {event.date} • {event.location}
            </p>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                📅 {event.date}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                📍 {event.location}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
            {event.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>🏢</span>
              <span>{event.organizer}</span>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
            >
              View Details →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

FeaturedEventCard.displayName = "FeaturedEventCard";

// Regular Event Card (without image)
const EventCard = memo(({ event, index, onClick }: { 
  event: Event; 
  index: number;
  onClick: () => void; 
}) => {
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

  const getStatusColor = () => {
    switch (event.status) {
      case 'upcoming': return 'from-green-500 to-emerald-500';
      case 'past': return 'from-gray-500 to-slate-500';
      default: return 'from-blue-500 to-indigo-500';
    }
  };

  const getStatusIcon = () => {
    switch (event.status) {
      case 'upcoming': return '🚀';
      case 'past': return '📚';
      default: return '⭐';
    }
  };

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
        {/* Header with gradient */}
        <div className={`relative h-24 bg-gradient-to-r ${getStatusColor()}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-4 left-6 right-6 flex justify-between items-center">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
              {event.category}
            </span>
            <div className="text-2xl">{getStatusIcon()}</div>
          </div>
          
          {/* Expand Icon */}
          <div className="absolute top-4 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm">
              🔍
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {event.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-blue-500">📅</span>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">📍</span>
              <span>{event.location}</span>
            </div>
            {event.duration && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-purple-500">⏱️</span>
                <span>{event.duration}</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {event.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              {event.organizer}
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
            >
              Learn More →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

EventCard.displayName = "EventCard";

// Main Events Page Component
const EventsPage = memo(() => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
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
              IEEE GU <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover extraordinary opportunities to learn, network, and innovate with the IEEE community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
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
              Featured Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spotlight on our most anticipated and impactful events that showcase innovation and excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
            {featuredEvents.map((event) => (
              <FeaturedEventCard
                key={event.id}
                event={event}
                onClick={() => handleCardClick(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming opportunities to expand your knowledge and network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onClick={() => handleCardClick(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
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
              Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relive the memorable moments and successful events that have shaped our IEEE community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onClick={() => handleCardClick(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest events and opportunities from IEEE Galgotias University Student Branch
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Subscribe to Updates
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent!}
        isOpen={!!selectedEvent}
        onClose={handleCloseModal}
      />
    </div>
  );
});

EventsPage.displayName = "EventsPage";

export default EventsPage;
