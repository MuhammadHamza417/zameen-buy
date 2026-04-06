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
      setIsMobileMenuOpen(false); 
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
        className="sticky top-0 z-50 bg-[#1B263B] text-white shadow-xl flex flex-col"
      >
        {/* Mobile Top Buttons - Only visible on small screens */}
        <div className="flex md:hidden w-full h-12 border-b border-gray-700">
          <button 
            onClick={() => setSidebarConfig({ isOpen: true, type: 'wishlist' })}
            className="w-1/2 flex items-center justify-center gap-2 border-r border-gray-700 bg-[#1B263B] hover:bg-gray-800 transition-colors"
          >
            <Heart size={18} className="text-red-500" />
            <span className="text-sm font-bold">Wishlist ({wishlist.length})</span>
          </button>
          <button 
            onClick={() => setSidebarConfig({ isOpen: true, type: 'basket' })}
            className="w-1/2 flex items-center justify-center gap-2 bg-[#1B263B] hover:bg-gray-800 transition-colors"
          >
            <Briefcase size={18} className="text-[#E0C18E]" />
            <span className="text-sm font-bold">Cart ({cart.length})</span>
          </button>
        </div>

        <nav className="container mx-auto h-24 flex items-center justify-between px-8">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter">
              Zameen<span className="text-[#E0C18E]">BUY</span>
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
            {/* Icons - Hidden on mobile, visible on MD and up */}
            <div className="hidden md:flex items-center gap-2 md:gap-4">
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
                <Briefcase size={22} className="text-gray-200 group-hover:text-[#E0C18E] transition-colors" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-[#1B263B]">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>

            {/* Always visible Login (Desktop) */}
            <Link href="/auth/login" className="hidden md:flex items-center gap-2 group ml-2">
              <div className="p-1.5 bg-gray-700/50 rounded-full group-hover:bg-[#E0C18E]/20 transition-colors">
                <User size={18} className="text-[#E0C18E]" />
              </div>
              <span className="text-sm font-bold text-gray-200 group-hover:text-[#E0C18E]">Sign In</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-[#E0C18E] p-2 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[9rem] left-0 w-full h-[calc(100vh-9rem)] bg-[#1B263B] border-t border-gray-700 md:hidden flex flex-col p-8 gap-6 z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-200 hover:text-[#E0C18E] border-b border-gray-800 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/auth/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 text-2xl font-bold text-[#E0C18E] mt-4"
              >
                <User size={24} />
                Sign In
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
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