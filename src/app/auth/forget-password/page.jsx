"use client";

import { motion } from 'framer-motion';
import { Mail, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ForgetPasswordPage() {
  return (
    <div className="w-full max-w-[360px] mx-auto">
      <div className="md:hidden flex items-center justify-center gap-2 mb-8 text-center">
        <div className="p-2 bg-[#1B263B] rounded-lg">
          <ShieldCheck className="text-[#E0C18E]" size={20} />
        </div>
        <span className="text-xl font-black text-[#1B263B] tracking-tighter uppercase">
          Apna<span className="text-[#E0C18E]">GHAR</span>
        </span>
      </div>

      <div className="mb-8 text-center md:text-left pt-2">
        <h3 className="text-3xl md:text-4xl font-black text-[#1B263B] mb-2 tracking-tight">
          Reset Password
        </h3>
        <p className="text-gray-400 text-sm font-medium">Enter your email and we'll send you instructions.</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1B263B] transition-colors" size={16} />
            <input type="email" placeholder="registered-email@example.com" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-gray-200 transition-all text-sm font-medium text-[#1B263B]" />
          </div>
        </div>

        <Link href="/auth/resend-verification" className="w-full">
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#1B263B] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-gray-200 transition-all text-sm"
        >
          Send
        </motion.button>
        </Link>
      </form>

      {/* <div className="text-center mt-10">
        <Link href="/auth/login" className="flex items-center justify-center gap-2 text-gray-400 font-medium hover:text-[#1B263B] transition-colors text-sm group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to <span className="font-black text-[#1B263B] border-b-2 border-[#E0C18E] ml-1">Log In</span>
        </Link>
      </div> */}
    </div>
  );
}