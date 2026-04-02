"use client";

import { motion } from 'framer-motion';
import { Mail, ShieldCheck, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ResendVerificationPage() {
  return (
    <div className="w-full max-w-[380px] mx-auto text-center md:text-left">
      <div className="md:hidden flex items-center justify-center gap-2 mb-8">
        <div className="p-2 bg-[#1B263B] rounded-lg">
          <ShieldCheck className="text-[#E0C18E]" size={20} />
        </div>
        <span className="text-xl font-black text-[#1B263B] tracking-tighter uppercase">
          Apna<span className="text-[#E0C18E]">GHAR</span>
        </span>
      </div>

      <div className="mb-8 pt-2 flex flex-col items-center md:items-start">
        <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
          <Mail className="text-[#1B263B]" size={32} />
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-[#1B263B] mb-2 tracking-tight">
          Verify Email
        </h3>
        <p className="text-gray-400 text-sm font-medium leading-relaxed">
          We've sent a verification link to your email. Please check your inbox to activate your account.
        </p>
      </div>

      <div className="space-y-4">
        <Link href="/auth/change-password" className="w-full">
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#1B263B] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-gray-200 transition-all text-sm"
        >
          <RefreshCw size={18} /> Resend Verification Link
        </motion.button>
        </Link>
        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest text-center mt-4 italic">
          Didn't receive it? Check your spam folder.
        </p>
      </div>

      {/* <div className="text-center mt-12 border-t border-gray-50 pt-8">
        <Link href="/auth/login" className="flex items-center justify-center gap-2 text-gray-400 font-medium hover:text-[#1B263B] transition-colors text-sm group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to <span className="font-black text-[#1B263B] border-b-2 border-[#E0C18E] ml-1">Log In</span>
        </Link>
      </div> */}
    </div>
  );
}