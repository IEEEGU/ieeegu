'use client'

import React, { useState, memo, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  department?: string;
  experience?: string;
  expertise?: string[];
  achievements?: string[];
}

const subCommunityE: TeamMember[] = [
  {
    name: "Kavya Singh",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830862/Snapchat-1908667641_ubo1ap.jpg",
    bio: "As Chairperson of IEEE TEMS, Kavya leads the Technology and Engineering Management Society, focusing on bridging the gap between technology and management. She organizes workshops and seminars on emerging technologies and their practical applications in industry.",
    email: "kavyasingh@ieee.org",
    department: "IEEE TEMS",
    experience: "1+ Years in Leadership",
    expertise: ["Technology Management", "Innovation Strategy", "Engineering Leadership"],
  },
  {
    name: "Saiyam Shrivastava",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830857/1000026811_t7r9xg.jpg",
    bio: "Saiyam serves as Vice Chairperson of IEEE TEMS, supporting the chair in organizing events and managing society operations. He focuses on promoting technology management education and fostering innovation among members.",
    email: "saiyamshrivastava@ieee.org",
    department: "IEEE TEMS",
    experience: "1+ Years in Technology Management",
    expertise: ["Project Management", "Technology Strategy", "Team Leadership"],
  },
  {
    name: "Yash Kumar Singh",
    role: "Tech Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830860/yash_hypwsm.jpg",
    bio: "As Tech Lead of IEEE TEMS, Yash oversees technical initiatives and projects within the society. He organizes technical workshops, webinars, and events focused on emerging technologies and engineering management practices.",
    email: "yashkumarsingh@ieee.org",
    department: "IEEE TEMS",
    experience: "1+ Years in Technology",
    expertise: ["Technical Leadership", "Emerging Technologies", "Innovation Management"],
  },
  {
    name: "Manya Gogia",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830872/IMG-20250808-WA0004_ex5bnw.jpg",
    bio: "Manya serves as Secretary of IEEE TEMS, maintaining accurate records and ensuring effective communication within the society. She coordinates with team members and manages documentation for all society activities.",
    email: "manyagogia@ieee.org",
    department: "IEEE TEMS",
    experience: "1+ Years in Administration",
    expertise: ["Documentation", "Communication", "Event Coordination"],
  },
  {
    name: "Krishna Garg",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830856/IMG_20250908_150348_pozyxx.jpg",
    bio: "As Treasurer of IEEE TEMS, Krishna manages the financial operations of the society. He handles budget planning, expense tracking, and funding allocation to support various technical and educational initiatives.",
    email: "krishnagarg@ieee.org",
    department: "IEEE TEMS",
    experience: "2+ Years in Finance",
    expertise: ["Financial Management", "Budget Planning", "Resource Allocation"],
  }
];

const subCommunityF: TeamMember[] = [
  {
    name: "Ansh Vasishth",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830848/IMG_20250622_141748_212_hq4mqe.webp",
    bio: "As Chairperson of IEEE CIS, Ansh leads the Computational Intelligence Society, focusing on artificial intelligence, machine learning, and computational intelligence technologies. He organizes cutting-edge workshops and research sessions for members.",
    email: "anshvasishth@ieee.org",
    department: "IEEE CIS",
    experience: "1+ Years in AI/ML",
    expertise: ["Artificial Intelligence", "Machine Learning", "Computational Intelligence"],
  },
  {
    name: "Nalinish Ranjan",
    role: "Vice Chairperson", 
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1741368824/NALINISH_dj3etu.png",
    bio: "Nalinish serves as Vice Chairperson of IEEE CIS, supporting the chairperson in managing society activities and promoting computational intelligence research. He focuses on organizing technical seminars and collaborative research projects.",
    email: "nalinishranjan@ieee.org",
    department: "IEEE CIS",
    experience: "1+ Years in Computational Intelligence",
    expertise: ["Neural Networks", "Deep Learning", "Data Science"],
  },
  {
    name: "Khushwant Singh",
    role: "Tech Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830876/IMG-20250724-WA0114_yru1ww.jpg",
    bio: "As Tech Lead of IEEE CIS, Khushwant oversees technical projects and research initiatives in computational intelligence. He leads hands-on workshops on AI/ML technologies and guides members in implementing cutting-edge solutions.",
    email: "khushwantsingh@ieee.org",
    department: "IEEE CIS",
    experience: "3+ Years in AI/ML Research",
    expertise: ["Machine Learning", "AI Research", "Technical Leadership"],
  },
  {
    name: "Aindri Tiwari",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830877/IMG_20250924_215405_kyuldo.jpg",
    bio: "Aindri serves as Secretary of IEEE CIS, managing documentation and communication for the society. She ensures smooth coordination of research activities and maintains records of all technical initiatives and member contributions.",
    email: "aindritiwari@ieee.org",
    department: "IEEE CIS",
    experience: "2+ Years in Research Administration",
    expertise: ["Research Documentation", "Technical Communication", "Project Coordination"],
  },
  {
    name: "Parth Khowal",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/v1758830881/IMG-20250605-WA0128_bkqs8e.jpg",
    bio: "As Treasurer of IEEE CIS, Parth manages the financial aspects of the society, including funding for research projects and technical events. He ensures proper allocation of resources for AI/ML workshops and computational intelligence initiatives.",
    email: "parthkhowal@ieee.org",
    department: "IEEE CIS",
    experience: "2+ Years in Financial Management",
    expertise: ["Financial Planning", "Resource Management", "Budget Allocation"],
  }
];

const boardMembers: TeamMember[] = [
  {
    name: "Shubhranshu S. Dash",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005300/shubhranshu_hfxnd7.png",
    bio: "As Chairperson of the IEEE Student Branch, Shubhranshu leads the branch by managing operations, fostering collaboration among members, and driving initiatives that encourage technical and professional development. His leadership ensures the organization achieves its goals effectively.",
    email: "shubhranshudash@ieee.org",
    department: "IEEE Student Branch",
    experience: "3+ Years in Leadership",
    expertise: ["Strategic Leadership", "Team Management", "IEEE Operations"],
    achievements: ["Branch Excellence Award 2024", "Outstanding Leadership Recognition"]
  },
  {
    name: "Anurag Kumar Singh",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005302/anurag_brdjdq.png",
    bio: "Serving as Vice Chairperson, Anurag plays a pivotal role in supporting the Chairperson and managing branch activities. He actively contributes to planning events and initiatives while ensuring smooth execution to promote member engagement.",
    email: "aunragkumarsingh@ieee.org",
    department: "IEEE Student Branch",
    experience: "2+ Years in Leadership",
    expertise: ["Event Management", "Strategic Planning", "Member Engagement"],
    achievements: ["Event Excellence Award", "Leadership Development Certificate"]
  },
  {
    name: "Rashi Bajpai",
    role: "General Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005317/rashi_egtnjx.png",
    bio: "As Secretary of the IEEE Student Branch, Rashi is responsible for maintaining accurate records of meetings, correspondence, and events. She ensures clear communication across teams and keeps the branch organized.",
    email: "rashibajpai@ieee.org",
    department: "IEEE Student Branch",
    experience: "2+ Years in Administration",
    expertise: ["Documentation", "Communication", "Administrative Management"],
    achievements: ["Administrative Excellence Award", "Communication Skills Recognition"]
  },
  {
    name: "Manas Saxena",
    role: "Tech Lead (Web Master)",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005722/manas_2_xhetvq_c_crop_ar_9_16_gdeaww.png",
    bio: "Manas, the Technical Lead, specializes in overseeing technical projects and fostering innovation within the branch. He provides technical guidance, organizes workshops, and ensures members stay updated with the latest trends in technology.",
    email: "manassaxena@ieee.org",
    department: "IEEE Student Branch",
    experience: "3+ Years in Technology",
    expertise: ["Machine Learning","Research","Web Development", "Technical Leadership", "Innovation Management"],
    achievements: ["Technical Excellence Award", "Innovation Recognition 2024"]
  },
  {
    name: "Siddharth Agrawal",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005304/sidharth_de2vhl.png",
    bio: "As Treasurer, Siddharth manages the financial operations of the IEEE Student Branch. He handles budgeting, expense tracking, and funding allocation to support the branch activities effectively.",
    email: "siddharthaagrawal07@ieee.org",
    department: "IEEE Student Branch",
    experience: "2+ Years in Finance",
    expertise: ["Financial Management", "Budget Planning", "Resource Allocation"],
    achievements: ["Financial Excellence Award", "Budget Management Recognition"]
  }
];
const subCommunityA: TeamMember[] = [

  {
    name: "Gaurang Pant",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_700/v1738003439/IMG-20250126-WA0044_t0oevi.jpg",
    bio: "As Chair of the IEEE Computer Society, Gaurang leads the team in promoting advancements in computer science and technology. He organizes events and workshops to enhance members' technical skills and industry knowledge..",
    email: "gaurangpant22@ieee.org"
  },
  {
    name: "Anant Gangwar",
    role: "Vice chairperson",
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
  },
  // Add 4 more members for Sub-Community A
];

const subCommunityB: TeamMember[] = [
  {
    name: "Shubham Pal",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003441/Shubham_Pal_rmy0ew.jpg",
    bio: "As Chairperson of IEEE IAS, Shubham oversees the society’s activities, focusing on industrial applications of engineering. His leadership is instrumental in bridging the gap between academics and industry for the members.",
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
  },
  // Add 4 more members for Sub-Community B
];

const subCommunityC: TeamMember[] = [
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
    bio: "Anjali, as Treasurer, manages the financial aspects of WIE. She ensures efficient use of resources to support the society’s initiatives and events.",
    email: "anjaliyadav@ieee.org"
  },
  {
    name: "Arya Amoriya",
    role: "Outreach Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003445/Arya_Amoriya__r7hcbx.jpg",
    bio: "As Outreach Lead, Arya is responsible for building connections with external organizations and promoting WIE’s activities. She ensures the group’s visibility and engagement within the community.",
    email: "aryaamoriya@ieee.org"
  },
  // Add 4 more members for Sub-Community C
];
const subCommunityD: TeamMember[] = [
  {
    name: "Shubh Sinha",
    role: "Design Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1740595746/shubh_omgmtn.jpg",
    bio: "As Co-Lead of the IEEE Student Branch, Saumya Sinha plays a vital role in guiding the team, driving strategic initiatives, and ensuring the successful execution of events and programs. His leadership fosters collaboration, innovation, and the overall growth of the student branch.",
    email: "saumyasinha@ieee.org"
  },
  {
    name: "Aditya Singh",
    role: "Design Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741783286/ADI_event_me_p7qvgp.jpg",
    bio: "As Design Co-Lead of the IEEE Student Branch, Aditya is responsible for overseeing the visual identity and creative direction of the branch. He works closely with the team to design impactful content, ensuring consistency and enhancing the branch’s outreach and engagement.",
    email: "adityasinghdes@gmail.com"
  },
  
  {
    name: "Rithvik Rana",
    role: "Media Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1740595750/rhitvik_e152bq.jpg",
    bio: "As Media Co-Lead of the IEEE Student Branch, Rithvik Rana is responsible for managing the branch’s digital presence and media outreach. He ensures effective communication by creating engaging content, handling social media platforms, and promoting events and initiatives. His efforts enhance the visibility and engagement of the student branch within the community.",
    email: "rithvikrana@ieee.org"
  },
  {
    name: "Prince",
    role: "Media Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741783506/prince_adstxt.jpg",
    bio: "As Media Co-Lead of the IEEE Student Branch, Prince is responsible for managing the branch’s digital presence and media outreach. He ensures effective communication by creating engaging content, handling social media platforms, and promoting events and initiatives. His efforts enhance the visibility and engagement of the student branch within the community.",
    email: "princegmrllama@gmail.com"
  },
];

const patCommunityA: TeamMember[] = [
    {
      name: "Dr. Suneel Galgotia",
      role: "Hon'ble Chancellor - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/sunilSir_y9xmy2.jpg",
      bio: "Dr. Suneel Galgotia is a visionary academic leader and the Hon’ble Chancellor of Galgotias University. With decades of experience in the education sector, he has played a pivotal role in transforming Galgotias University into a center of academic excellence. Under his leadership, the institution has achieved remarkable milestones in research, innovation, and student success.",
      email: ""
    }
  ];
  
  const patCommunityB: TeamMember[] = [
    {
      name: "Dr. Dhruv Galgotia",
      role: "CEO - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/dhruvSir_aaizql.jpg",
      bio: "Dr. Dhruv Galgotia, the CEO of Galgotias University, is a dynamic leader committed to redefining higher education in India. His strategic vision has been instrumental in fostering an ecosystem of innovation, academic rigor, and industry collaboration. His leadership ensures that Galgotias University remains at the forefront of global education trends.",
      email: ""
    },
    {
      name: "Dr. M.B. Kayala",
      role: "Vice Chancellor - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741290074/vcsir_aw86du.jpg",
      bio: "Dr. M.B. Kayala serves as the Vice Chancellor of Galgotias University, bringing with him extensive experience in academic administration and research. His dedication to academic excellence and student development has been pivotal in strengthening the university’s academic framework and fostering a culture of research and innovation.",
      email: ""
    },
    {
      name: "Ms. Aradhana Galgotia",
      role: "Director Operations - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/aradhanaMaam_nkeqp0.jpg",
      bio: "Ms. Aradhana Galgotia is the Director of Operations at Galgotias University. With a keen focus on operational excellence, student welfare, and institutional growth, she plays a crucial role in ensuring the seamless functioning of the university. Her leadership has been instrumental in enhancing the academic and infrastructural landscape of the institution.",
      email: ""
    },
    {
      name: "Prof. (Dr.) Avadhesh Kumar",
      role: "Pro-Vice Chancellor - Galgotias University, India", 
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/pvcsir_vs64x5.jpg",
      bio: "Prof. (Dr.) Avadhesh Kumar, the Pro-Vice Chancellor of Galgotias University, is a distinguished academician with a wealth of experience in higher education. His expertise in academic policy-making and administration has significantly contributed to the university’s pursuit of excellence in teaching, research, and community engagement.",
      email: ""
    }
  ];
  
  const patCommunityC: TeamMember[] = [
    
      {
        name: "Dr. Shrddha Sagar",
        role: "Advisor, IEEE WIE AG & SBC",
        image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741785432/shrddha_mam_ahusbl.jpg",
        bio: "Dr. Shrddha Sagar is a dedicated academician and an esteemed Advisor for IEEE WIE AG & SBC. With a strong commitment to promoting diversity and inclusion in STEM, she plays a pivotal role in mentoring students and professionals. Her leadership fosters an environment of innovation, technical excellence, and empowerment for women in engineering.",
        email: ""
      },
    {
      name: "Dr. Aanjey Mani Tripathi",
      role: "IEEE Counsellor",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/Aanjey_wkazg5.jpg",
      bio: "Dr. Aanjey Mani Tripathi serves as the IEEE Counsellor, mentoring students and professionals in the field of engineering and technology. His guidance and expertise play a crucial role in encouraging innovation, research, and professional development among IEEE members.",
      email: ""
    },
    {
      name: "Dr. Meenakshi Awasthi",
      role: "Advisor, IEEE IAS SBC",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741341173/meenakshi_mam_iwhgt0.jpg",
      bio: "Dr. Meenakshi Awasthi is an esteemed advisor for IEEE IAS SBC, contributing her extensive knowledge and expertise to the organization. With a strong academic and research background, she is dedicated to guiding students and professionals in achieving excellence in their respective fields.",
      email: ""
    },
    {
      name: "Dr. Aditya Nath Bhatt",
      role: "Advisor, IEEE IAS SBC",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741341173/absir_nqwekk.jpg",
      bio: "Dr. Aditya Nath Bhatt is a highly regarded academic and advisor for IEEE IAS SBC. His contributions in the domain of engineering and technology have been instrumental in shaping research initiatives and fostering a culture of technical excellence among IEEE members.",
      email: ""
    }
  ];
  

// Professional Team Member Modal
const TeamMemberModal = memo(({ member, isOpen, onClose }: { 
  member: TeamMember | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!member) return null;

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
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 p-8">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 text-lg font-bold"
              >
                ✕
              </button>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                  <p className="text-blue-200 text-xl font-medium mb-2">{member.role}</p>
                  {member.department && (
                    <p className="text-blue-300 text-lg">{member.department}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {member.experience && (
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">📈</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Experience</h3>
                    <p className="text-gray-600">{member.experience}</p>
                  </div>
                )}
                <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-600 text-sm break-all">{member.email}</p>
                </div>
                {member.achievements && (
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🏆</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Awards</h3>
                    <p className="text-gray-600">{member.achievements.length} Awards</p>
                  </div>
                )}
              </div>

              {/* Bio Section */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Biography</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{member.bio}</p>
              </div>

              {/* Expertise Section */}
              {member.expertise && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Section */}
              {member.achievements && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">🏆</span>
                        </div>
                        <span className="text-gray-800 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Close Profile
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

TeamMemberModal.displayName = "TeamMemberModal";

// Professional Team Member Card
const ProfessionalMemberCard = memo(({ member, index, onClick }: { 
  member: TeamMember; 
  index: number;
  onClick: () => void; 
}) => {
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
        y: -8,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        {/* Card Header */}
        <div className="relative p-8 pb-4">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>

            {/* Name and Role */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-blue-600 font-medium text-sm text-center mb-3">
              {member.role}
            </p>
            
            {member.department && (
              <p className="text-gray-500 text-xs text-center mb-4">
                {member.department}
              </p>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <span className="text-sm">👤</span>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-6 pb-6">
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                {member.experience || "IEEE Member"}
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-blue-600 font-medium text-xs flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
              >
                View Profile →
              </motion.div>
            </div>
            
            {/* Expertise Tags */}
            {member.expertise && (
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-wrap gap-1">
                  {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{member.expertise.length - 2}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProfessionalMemberCard.displayName = "ProfessionalMemberCard";

// Professional Team Grid Component
const ProfessionalTeamGrid = memo(({ members, title }: { 
  members: TeamMember[]; 
  title?: string; 
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }), []);

  return (
    <div className="mb-16">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>
      )}
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      >
        {members.map((member, index) => (
          <ProfessionalMemberCard
            key={index}
            member={member}
            index={index}
            onClick={() => handleMemberClick(member)}
          />
        ))}
      </motion.div>

      <TeamMemberModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={handleCloseModal}
      />
    </div>
  );
});

ProfessionalTeamGrid.displayName = "ProfessionalTeamGrid";

// Main Team Page Component
const TeamsPage = memo(() => {
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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals driving excellence and innovation at IEEE Galgotias University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <Tabs defaultValue="board" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="grid grid-cols-3 gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <TabsTrigger 
                value="PAT" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                LEADERSHIP
              </TabsTrigger>
              <TabsTrigger 
                value="board" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                BOARD
              </TabsTrigger>
              <TabsTrigger 
                value="executive" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                EXECUTIVE
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="PAT" className="space-y-16">
            <ProfessionalTeamGrid members={patCommunityA} title="Chief Patron" />
            <ProfessionalTeamGrid members={patCommunityB} title="Patrons" />
            <ProfessionalTeamGrid members={patCommunityC} title="Advisors" />
          </TabsContent>

          <TabsContent value="board" className="space-y-16">
            <ProfessionalTeamGrid members={boardMembers} title="Board Team" />
          </TabsContent>

          <TabsContent value="executive" className="space-y-16">
            <ProfessionalTeamGrid members={boardMembers} title="Board Team" />
            <ProfessionalTeamGrid members={subCommunityA} title="Computer Society" />
            <ProfessionalTeamGrid members={subCommunityB} title="Industry Applications Society" />
            <ProfessionalTeamGrid members={subCommunityC} title="Women in Engineering Society" />
            <ProfessionalTeamGrid members={subCommunityD} title="Creative Committee" />
            <ProfessionalTeamGrid members={subCommunityE} title="Technology and Engineering Management Society" />
            <ProfessionalTeamGrid members={subCommunityF} title="Computational Intelligence Society" />
          </TabsContent>
        </Tabs>
      </main>

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
              Join Our Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of our mission to advance technology, foster innovation, and create lasting impact in the engineering community
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

TeamsPage.displayName = "TeamsPage";

export default TeamsPage;
