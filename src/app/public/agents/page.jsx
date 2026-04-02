"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FilterX, SlidersHorizontal } from 'lucide-react';
import AgentCard from '../../../component/AgentCard';
import agentsData from '../../data/ajents.json';

export default function AgentsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsMounted(true);
    const handlePopState = () => window.location.reload();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const filteredAgents = agentsData.agents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    agent.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isMounted) return <div className="min-h-screen bg-white" />;

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAFBFF]">
      <section className="bg-[#1B263B] pt-16 pb-24 px-6 text-center text-white relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">Find Experts</h1>
          <p className="text-gray-400 text-sm md:text-base">Connect with the best real estate agents in Pakistan</p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto w-full px-4 -mt-8 relative z-20">
        <div className="bg-white/80 backdrop-blur-xl p-1.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 flex items-center group transition-all duration-300 focus-within:bg-white">
          <div className="pl-4 pr-2 text-[#1B263B]">
            <Search size={20} strokeWidth={2.5} />
          </div>
          <input 
            type="text" 
            placeholder="Search by name or city..." 
            className="w-full py-4 px-2 outline-none text-[#1B263B] font-semibold bg-transparent placeholder:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="hidden sm:flex items-center gap-2 bg-[#F8F9FA] hover:bg-gray-100 text-[#1B263B] px-4 py-3 rounded-xl transition-colors mr-1 font-bold text-sm">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        <div className="mt-12 mb-6">
          <h2 className="text-[#1B263B] font-bold text-lg flex items-center gap-2">
            Professional Network 
            <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{filteredAgents.length}</span>
          </h2>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-24">
          <AnimatePresence mode='popLayout'>
            {filteredAgents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredAgents.length === 0 && (
          <div className="text-center py-20">
            <FilterX className="mx-auto text-gray-200 mb-4" size={48} />
            <p className="text-gray-400 font-bold">No results found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}