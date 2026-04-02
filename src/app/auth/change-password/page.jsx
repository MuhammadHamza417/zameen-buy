"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ChangePasswordPage() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

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
          New Password
        </h3>
        <p className="text-gray-400 text-sm font-medium">Create a strong password for your security.</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">New Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1B263B] transition-colors" size={16} />
            <input type={showPass ? "text" : "password"} placeholder="••••••••" className="w-full pl-11 pr-11 py-3.5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-gray-200 transition-all text-sm font-medium text-[#1B263B]" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1B263B]">
              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Confirm Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1B263B] transition-colors" size={16} />
            <input type={showConfirmPass ? "text" : "password"} placeholder="••••••••" className="w-full pl-11 pr-11 py-3.5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-gray-200 transition-all text-sm font-medium text-[#1B263B]" />
            <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1B263B]">
              {showConfirmPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <Link href="/auth/login" className="w-full">
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#1B263B] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-gray-200 transition-all text-sm mt-4"
        >
          Update Password <CheckCircle2 size={18} />
        </motion.button>
        </Link>
      </form>

      {/* <div className="text-center mt-10">
        <Link href="/auth/login" className="text-gray-400 font-medium hover:text-[#1B263B] transition-colors text-sm">
          Remembered? 
          <span className="font-black text-[#1B263B] border-b-2 border-[#E0C18E] ml-1">
            Log In
          </span>
        </Link>
      </div> */}
    </div>
  );
}