"use client";
import { X, Trash2, ArrowRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, removeFromCart } from "../app/store/slice/wishlistSlice";

const RightSidebar = ({ isOpen, onClose, type }) => {
  const dispatch = useDispatch();
  
  const wishlist = useSelector((state) => state.appData.wishlist);
  const cart = useSelector((state) => state.appData.cart);
  
  const items = type === "wishlist" ? wishlist : cart;

  const handleRemove = (id) => {
    if (type === "wishlist") {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#F8F9FA] shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#1B263B] text-white">
              <div>
                <h2 className="text-xl font-bold">
                  {type === "wishlist" ? "My Wishlist" : "Inquiry Basket"}
                </h2>
                <p className="text-xs text-gray-400">{items.length} Properties added</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-gray-500 font-medium text-sm">No items found</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex gap-3 p-3 group relative">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <div>
                        <h4 className="font-bold text-[#1B263B] text-sm truncate pr-6">{item.title}</h4>
                        <div className="flex items-center gap-1 text-gray-500 text-[10px] mt-1">
                          <MapPin size={10} className="text-[#1B263B]" />
                          <span className="truncate">{item.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <p className="text-[#1B263B] font-black text-sm">
                          {item.priceDisplay || item.price}
                        </p>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleRemove(item.id)}
                      className="absolute top-2 right-2 p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-md transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <button className="w-full bg-[#1B263B] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#25324d] transition-colors active:scale-[0.98]">
                  {type === "wishlist" ? "View All Favorites" : "Proceed to Inquiry"}
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RightSidebar;