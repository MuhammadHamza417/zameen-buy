"use client";

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function AuthLayout({ children }) {
  const craneVariants = {
    animate: {
      x: [-20, 20, -20],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const brickVariants = {
    initial: { y: -100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.8, 
        duration: 1, 
        repeat: Infinity, 
        repeatDelay: 4,
        type: "spring",
        stiffness: 50 
      }
    })
  };

  return (
    <div className="h-screen w-full bg-[#F1F5F9] flex items-center justify-center p-0 sm:p-4 overflow-hidden select-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full h-full sm:h-auto max-w-[950px] md:max-h-[85vh] bg-white sm:rounded-[30px] md:rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-white"
      >
        <div className="hidden md:flex md:w-[45%] bg-[#F8FAFC] relative flex-col items-center justify-between p-10 overflow-hidden border-r border-gray-100">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#1B263B 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>
          
          <div className="relative z-10 w-full pt-2"> 
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#1B263B] rounded-lg shrink-0">
                <ShieldCheck className="text-[#E0C18E]" size={22} />
              </div>
              <span className="text-xl font-black text-[#1B263B] tracking-tighter whitespace-nowrap">
                Apna<span className="text-[#E0C18E]">GHAR</span>
              </span>
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center">
            <div className="relative h-40 w-full border-b-2 border-dashed border-gray-300 flex items-end justify-center gap-2 px-4 mb-10">
              <motion.div variants={craneVariants} animate="animate" className="absolute top-0 left-1/2 w-[2px] h-24 bg-gray-200">
                <div className="absolute bottom-0 -left-2 w-4 h-4 bg-[#E0C18E] rounded-sm rotate-45"></div>
              </motion.div>

              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={brickVariants}
                  initial="initial"
                  animate="animate"
                  className="w-10 bg-[#1B263B] rounded-t-md shadow-lg"
                  style={{ height: `${(i + 1) * 22 + 15}px` }}
                />
              ))}
            </div>

            <div className="w-full text-left">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1B263B] leading-tight tracking-tight">
                  Building a <span className="text-[#E0C18E]">Solid</span> <br/>Future for You.
                </h2>
                <p className="text-gray-400 mt-3 text-sm font-medium">Pakistan's premium property marketplace.</p>
            </div>
          </div>
          
          <div className="h-4"></div>
        </div>

        <div className="w-full md:w-[55%] bg-white p-6 sm:p-10 md:p-12 flex flex-col justify-center overflow-y-auto no-scrollbar">
          <style jsx>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          {children}
        </div>
      </motion.div>
    </div>
  );
}