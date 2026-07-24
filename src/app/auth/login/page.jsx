"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
          Welcome Back
        </h3>
        <p className="text-gray-400 text-sm font-medium">Enter your credentials to access the portal.</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1B263B] transition-colors" size={16} />
            <input type="email" placeholder="hello@apnaghar.com" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-gray-200 transition-all text-sm font-medium text-[#1B263B]" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center ml-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Password</label>
            <Link href="/auth/forget-password" className="text-[10px] font-bold text-[#E0C18E] hover:underline">Forgot?</Link>
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1B263B] transition-colors" size={16} />
            <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full pl-11 pr-11 py-3.5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-gray-200 transition-all text-sm font-medium text-[#1B263B]" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1B263B]">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <Link href="/" className="w-full">
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#1B263B] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-gray-200 transition-all text-sm mt-2"
        >
          Sign In
        </motion.button>
        </Link>
      </form>

      <div className="mt-8">
        <div className="relative flex items-center justify-center mb-6">
          <div className="border-t border-gray-100 w-full"></div>
          <span className="bg-white px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest absolute italic">Social Auth</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-[11px] text-[#1B263B]">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-[11px] text-[#1B263B]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.702z"/>
            </svg>
            Apple
          </button>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link href="/auth/sign-up" className="text-gray-400 font-medium hover:text-[#1B263B] transition-colors text-sm">
          Don't have an account? 
          <span className="font-black text-[#1B263B] border-b-2 border-[#E0C18E] ml-1">
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
}