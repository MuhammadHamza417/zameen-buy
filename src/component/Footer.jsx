"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Share2, Info, Shield } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Search Properties', href: '/search' },
        { name: 'Find Agents', href: '/agents' },
        { name: 'About Us', href: '/about' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Mortgage Calculator', href: '/tools/calculator' },
        { name: 'Help Center', href: '/help' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
  ];

  const socialIcons = [Globe, Share2, Info, Shield];

  return (
    <footer className="bg-[#1B263B] text-white mt-16 overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2 space-y-6"
          >
            <Link href="/" className="text-3xl font-bold text-white tracking-tight">
              Apna<span className="text-[#E0C18E]">GHAR</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Premium real estate & property ecosystem connecting buyers, sellers, and agents across Pakistan.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-gray-300 text-sm hover:text-[#E0C18E] transition-colors cursor-pointer group">
                <Mail className="w-5 h-5 text-[#E0C18E] group-hover:scale-110 transition-transform" />
                info@zameendirect.com
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm hover:text-[#E0C18E] transition-colors cursor-pointer group">
                <Phone className="w-5 h-5 text-[#E0C18E] group-hover:scale-110 transition-transform" />
                +92 (300) 123-4567
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm group">
                <MapPin className="w-5 h-5 text-[#E0C18E] group-hover:animate-bounce" />
                Pakistan
              </div>
            </div>
          </motion.div>

          {footerSections.map((section, idx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-5"
            >
              <h4 className="text-lg font-bold text-white border-b border-gray-700 pb-2 w-fit">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#E0C18E] hover:translate-x-1 transition-all inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} ZameenDirect. All rights reserved. Designed for excellence.
          </p>
          
          <div className="flex items-center gap-5">
            {socialIcons.map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link 
                  href="#" 
                  className="bg-gray-800/50 p-2.5 rounded-lg text-gray-400 hover:text-[#E0C18E] hover:bg-gray-800 transition-all border border-gray-700"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;