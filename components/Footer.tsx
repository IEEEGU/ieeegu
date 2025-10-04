"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, Sparkles, ArrowUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/ieeegusb',
      icon: Twitter,
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ieee-gu/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/ieee_gusb/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Awards', href: '/awards' },
    { name: 'Blog', href: '/blog' },
    { name: 'Join Us', href: '/join' }
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'ieeegusb@galgotiasuniversity.edu.in' },
    { icon: MapPin, text: 'Galgotias University, Greater Noida' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 overflow-hidden border-t-2 border-blue-300">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600"></div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and Description Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="https://res.cloudinary.com/anurag256k/image/upload/v1735541538/IEEE/ieee_rtlaxt.png"
                    alt="IEEE Logo"
                    width={140}
                    height={90}
                    className="h-10 lg:h-14 w-auto"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="https://res.cloudinary.com/anurag256k/image/upload/v1735503028/IEEE/ieee-logo_ufoyaw.png"
                    alt="IEEE GU Logo"
                    width={120}
                    height={70}
                    className="h-8 lg:h-12 w-auto"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="https://res.cloudinary.com/anurag256k/image/upload/v1735541549/IEEE/galgotias_v0ccp4.png"
                    alt="Galgotias University Logo"
                    width={120}
                    height={100}
                    className="h-10 lg:h-14 w-auto"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <div className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  IEEE Student Branch
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                  Empowering students through technology, innovation, and professional development. 
                  Join the world&apos;s largest technical community and shape the future.
                </p>

                {/* Social Media */}
                <div className="flex justify-center lg:justify-start space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                      viewport={{ once: true }}
                      className={`p-3 rounded-xl bg-gradient-to-r ${social.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">Quick Links</h3>
            </div>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium"
                  >
                    <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 group-hover:bg-blue-700 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Mail className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Contact</h3>
              </div>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600">
                    <contact.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Legal</h4>
              <div className="space-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-gray-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-blue-300"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-sm font-medium">
                © {new Date().getFullYear()} IEEE Student Branch, Galgotias University. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Advancing technology for humanity • Inspiring innovation • Building tomorrow
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Live since 2024</span>
              </div>
              
              {/* Scroll to top button */}
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
