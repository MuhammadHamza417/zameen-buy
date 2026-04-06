"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Move, Heart, MapPin, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist, addToCart, removeFromCart } from '../app/store/slice/wishlistSlice';

export default function PropertyCard({ property, horizontal = false }) {
  const dispatch = useDispatch();
  
  const wishlist = useSelector((state) => state.appData.wishlist);
  const isWishlisted = wishlist.some((item) => item.id === property.id);

  const cart = useSelector((state) => state.appData.cart);
  const isSaved = cart.some((item) => item.id === property.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      dispatch(removeFromWishlist(property.id));
    } else {
      dispatch(addToWishlist(property));
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSaved) {
      dispatch(removeFromCart(property.id));
    } else {
      dispatch(addToCart(property));
    }
  };

  return (
    <Link href={`/public/search/propertydetail/${property.id}`}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex cursor-pointer ${
          horizontal ? 'flex-col md:flex-row h-auto md:h-64' : 'flex-col'
        }`}
      >
        <div className={`relative bg-gray-200 overflow-hidden shrink-0 ${
          horizontal ? 'aspect-[16/9] md:aspect-square md:w-72' : 'aspect-[16/9] w-full'
        }`}>
          <Image 
            src={property.image} 
            alt={property.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button 
              onClick={handleWishlist}
              className={`p-2 backdrop-blur-sm rounded-full shadow-md transition-all active:scale-90 ${
                isWishlisted 
                ? 'bg-red-600 text-white' 
                : 'bg-white/90 text-gray-600 hover:text-red-600'
              }`}
            >
              <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
            </button>

            <button 
              onClick={handleAddToCart}
              className={`p-2 backdrop-blur-sm rounded-full shadow-md transition-all active:scale-90 ${
                isSaved 
                ? 'bg-[#1B263B] text-white/90' 
                : 'bg-white/90 text-gray-600 hover:text-[#1B263B]'
              }`}
            >
              <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-1.5">
              <h3 className="font-extrabold text-gray-900 text-base md:text-lg truncate group-hover:text-[#1B263B] transition-colors">
                {property.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-1.5 text-gray-600 text-xs mb-4">
              <MapPin size={12} className="text-[#1B263B] shrink-0" />
              <span className="truncate font-medium">{property.location}</span>
            </div>

            {horizontal && (
              <p className="text-gray-500 text-sm line-clamp-2 mb-4 hidden md:block">
                Experience luxury living in this premium property located in the heart of {property.city}. 
                Perfect for families looking for comfort and style.
              </p>
            )}
          </div>
          
          <div className={`${horizontal ? 'flex flex-col md:flex-row md:items-center justify-between gap-4' : ''}`}>
            <p className="text-[#1B263B] font-black text-xl leading-none">
              {property.priceDisplay}
            </p>
            
            <div className={`flex items-center justify-between text-gray-800 bg-gray-50/80 p-2.5 rounded-lg border border-gray-100 ${
              horizontal ? 'md:w-auto md:gap-6' : 'w-full'
            }`}>
              <div className="flex items-center gap-1.5">
                <Bed size={16} className="text-[#1B263B]" /> 
                <span className="font-bold text-xs">{property.beds}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath size={16} className="text-[#1B263B]" /> 
                <span className="font-bold text-xs">{property.baths}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Move size={16} className="text-[#1B263B]" /> 
                <span className="font-bold text-xs">
                  {property.area} <span className="text-[10px] font-normal text-gray-500 italic">sqft</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}