"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Search', href: '/search' },
    { name: 'Agents', href: '/agents' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tools', href: '/tools' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-[#1B263B] text-white shadow-xl h-28 flex items-center"
    >
      <nav className="container mx-auto flex items-center justify-between px-8">
        <div className="flex items-center">
          <Link href="/" className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
            Apna<span className="text-[#E0C18E]">GHAR</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-16 lg:gap-24">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base lg:text-lg font-semibold text-gray-200 hover:text-[#E0C18E] transition-all hover:-translate-y-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-10">
            
            <Link
              href="/post-property"
              className="bg-[#E0C18E] text-[#1B263B] px-6 py-3 rounded-xl text-base font-black hover:bg-white transition-all shadow-lg active:scale-95"
            >
              Post Property
            </Link>
            <Link
              href="/auth/login"
              className="text-base font-bold text-gray-200 hover:text-[#E0C18E] transition-colors"
            >
              Sign In
            </Link>
          </div>

          <button 
            className="md:hidden text-[#E0C18E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-32 left-0 w-full bg-[#1B263B] border-t border-gray-800 p-10 flex flex-col gap-8 md:hidden shadow-2xl h-screen"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-gray-100"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Link href="/auth/login" className="text-xl font-bold text-gray-300">Sign In</Link>
            <Link href="/post-property" className="bg-[#E0C18E] text-[#1B263B] py-5 rounded-2xl text-center font-black text-xl">Post Property</Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;