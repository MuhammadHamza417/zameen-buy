"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, MessageCircle } from 'lucide-react';

export default function AgentCard({ agent, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
        <Image 
          src={agent.image} 
          alt={agent.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-1.5 rounded-lg shadow-sm">
          <Award className="text-[#E0C18E]" size={16} />
        </div>
      </div>
      
      <div className="p-4 text-left">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-base text-[#1B263B] truncate pr-2">
            {agent.name}
          </h3>
          <span className="text-[9px] bg-[#1B263B] text-white px-1.5 py-0.5 rounded font-bold uppercase shrink-0">
            {agent.city}
          </span>
        </div>
        
        <p className="text-[#E0C18E] text-[12px] font-semibold mb-2">{agent.specialty}</p>
        
        <div className="flex items-center gap-1 text-gray-400 text-[11px] mb-3">
          <MapPin size={12} />
          <span className="truncate">{agent.location}</span>
        </div>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              fill={i < Math.floor(agent.rating) ? "#E0C18E" : "none"} 
              className={i < Math.floor(agent.rating) ? "text-[#E0C18E]" : "text-gray-200"}
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">({agent.reviews})</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-50 pt-3 mb-4">
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-400 uppercase font-bold">Listings</span>
            <span className="text-[#1B263B] font-bold text-sm">{agent.listings}</span>
          </div>
          <div className="h-6 w-[1px] bg-gray-100" />
          <div className="flex flex-col text-right">
            <span className="text-[9px] text-gray-400 uppercase font-bold">Active</span>
            <span className="text-[#1B263B] font-bold text-sm">{agent.active}</span>
          </div>
        </div>

        <button 
          onClick={() => window.open(`https://wa.me/${agent.phone}`, '_blank')}
          className="w-full py-2 bg-[#25D366] text-white rounded-lg font-bold text-[12px] hover:bg-[#21ba5a] transition-colors active:scale-95 flex items-center justify-center gap-2"
        >
          Contact on WhatsApp
          <MessageCircle size={16} fill="white" />
        </button>
      </div>
    </motion.div>
  );
}