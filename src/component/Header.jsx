"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Briefcase, User } from 'lucide-react';
import RightSidebar from '../component/RightSlider';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarConfig, setSidebarConfig] = useState({ isOpen: false, type: 'wishlist' });
  
  const wishlist = useSelector((state) => state.appData.wishlist);
  const cart = useSelector((state) => state.appData.cart);

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
    { name: 'Search', href: '/public/search' },
    { name: 'Agents', href: '/public/agents' },
    { name: 'Blog', href: '#' },
    { name: 'Tools', href: '#' },
  ];

  return (
    <>
      <motion.header 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="sticky top-0 z-50 bg-[#1B263B] text-white shadow-xl h-24 flex items-center"
      >
        <nav className="container mx-auto flex items-center justify-between px-8">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter">
              Apna<span className="text-[#E0C18E]">GHAR</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-base font-semibold text-gray-200 hover:text-[#E0C18E] transition-all">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              
              <button 
                onClick={() => setSidebarConfig({ isOpen: true, type: 'wishlist' })}
                className="relative group p-2"
              >
                <Heart size={22} className="text-gray-200 group-hover:text-red-500 transition-colors" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-[#1B263B]">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button 
                onClick={() => setSidebarConfig({ isOpen: true, type: 'basket' })}
                className="relative group p-2"
              >
                <Briefcase size={22} className="text-gray-200 group-hover:text-red-500 transition-colors" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-[9px] text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-[#1B263B]">
                    {cart.length}
                  </span>
                )}
              </button>

              <Link href="/auth/login" className="hidden md:flex items-center gap-2 group ml-2">
                <div className="p-1.5 bg-gray-700/50 rounded-full group-hover:bg-[#E0C18E]/20 transition-colors">
                  <User size={18} className="text-[#E0C18E]" />
                </div>
                <span className="text-sm font-bold text-gray-200 group-hover:text-[#E0C18E]">Sign In</span>
              </Link>
            </div>

            <button className="md:hidden text-[#E0C18E]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
        {/* Mobile menu remains same... */}
      </motion.header>

      <RightSidebar 
        isOpen={sidebarConfig.isOpen} 
        onClose={() => setSidebarConfig({ ...sidebarConfig, isOpen: false })}
        type={sidebarConfig.type}
      />
    </>
  );
};

export default Navbar;