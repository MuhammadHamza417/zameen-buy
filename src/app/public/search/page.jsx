"use client";
import { useState, useMemo } from 'react';
import PropertyCard from '../../../component/PropertyCard';
import data from '../../data/properties.json';
import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    propertyType: [],
    bedrooms: [],
    cities: []
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value) 
        ? current.filter(v => v !== value) 
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const filteredProperties = useMemo(() => {
    return data.properties.filter(property => {
      const typeMatch = selectedFilters.propertyType.length === 0 || selectedFilters.propertyType.includes(property.type);
      const cityMatch = selectedFilters.cities.length === 0 || selectedFilters.cities.includes(property.city);
      const bedMatch = selectedFilters.bedrooms.length === 0 || selectedFilters.bedrooms.includes(property.beds);
      
      let priceMatch = true;
      if (selectedFilters.priceRange.length > 0) {
        priceMatch = selectedFilters.priceRange.some(rangeLabel => {
          const range = data.filters.priceRange.find(r => r.label === rangeLabel);
          return property.priceValue >= range.min && property.priceValue <= range.max;
        });
      }

      return typeMatch && cityMatch && bedMatch && priceMatch;
    });
  }, [selectedFilters]);

  return (
    <div className="flex min-h-screen bg-[#FDFDFD]">
      <aside className="w-72 bg-white border-r border-gray-100 p-8 hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center gap-2 mb-8 text-[#1B263B]">
          <SlidersHorizontal size={20} />
          <h2 className="font-bold text-xl">Filters</h2>
        </div>
        
        {Object.entries(data.filters).map(([category, options]) => (
          <div key={category} className="mb-8">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-5">
              {category.replace(/([A-Z])/g, ' $1')}
            </h3>
            <div className="space-y-4">
              {options.map((opt) => {
                const label = typeof opt === 'string' ? opt : opt.label;
                const isChecked = selectedFilters[category].includes(label);
                return (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-200 transition-all checked:bg-[#1B263B] checked:border-[#1B263B]"
                        onChange={() => handleFilterChange(category, label)}
                      />
                      <div className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className={`text-sm font-medium transition-colors ${isChecked ? 'text-[#1B263B] font-bold' : 'text-gray-500 group-hover:text-[#1B263B]'}`}>
                      {label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </aside>

      <main className="flex-1 p-6 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-black text-[#1B263B] tracking-tight">Properties for Sale</h1>
              <p className="text-gray-400 text-sm mt-1">Found {filteredProperties.length} matches for your criteria</p>
            </div>
            
            <div className="flex bg-gray-100/80 backdrop-blur-sm rounded-xl p-1.5 border border-gray-200 shadow-inner">
              <button 
                onClick={() => setViewMode('grid')}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 z-10 ${
                  viewMode === 'grid' ? 'text-[#1B263B] font-bold' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <LayoutGrid size={18} />
                {viewMode === 'grid' && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-white shadow-sm rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>

              <button 
                onClick={() => setViewMode('list')}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 z-10 ${
                  viewMode === 'list' ? 'text-[#1B263B] font-bold' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List size={18} />
                {viewMode === 'list' && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-white shadow-sm rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          </div>

          <motion.div 
            layout
            className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <PropertyCard property={property} horizontal={viewMode === 'list'} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProperties.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-gray-300 font-bold text-xl italic font-serif">
                No properties match these filters.
              </p>
              <button 
                onClick={() => setSelectedFilters({ priceRange: [], propertyType: [], bedrooms: [], cities: [] })}
                className="mt-4 text-[#1B263B] underline font-bold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}