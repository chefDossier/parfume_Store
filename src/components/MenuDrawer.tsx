"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

const MENU_STORAGE_KEY = "active_filter_category";

const MenuContent = ({ onClose, menuCategories }: { onClose: () => void, menuCategories: any[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("tout");

  // Initialisation au montage du composant
  useEffect(() => {
    const saved = localStorage.getItem(MENU_STORAGE_KEY);
    if (saved) setActiveCategory(saved);
  }, []);

  const handleCategoryClick = (title: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    const categoryKey = title ? title.toLowerCase().replace(/\s+/g, '-') : "tout";
    
    // 1. Mettre à jour l'état local et le localStorage
    setActiveCategory(categoryKey);
    localStorage.setItem(MENU_STORAGE_KEY, categoryKey);

    if (title === null) {
      params.delete('category');
      params.delete('q');
    } else {
      params.set('category', categoryKey);
      params.delete('q');
    }
    
    router.replace(`/?${params.toString()}`, { scroll: false });
    onClose();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-medium">exploration</span>
          <button 
            onClick={onClose} 
            className="p-2 hover:rotate-90 transition-transform duration-300 text-neutral-500 hover:text-[#C5A059]"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Option "Tout" */}
          <button 
            onClick={() => handleCategoryClick(null)}
            className={`w-full flex items-center justify-between py-2 border-b border-neutral-100/60 group transition-colors ${
              activeCategory === "tout" ? "text-[#C5A059]" : "text-neutral-800 hover:text-[#C5A059]"
            }`}
          >
            <span className="text-sm font-medium tracking-[0.15em] uppercase font-serif">
              Tout
            </span>
            {activeCategory === "tout" && <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />}
          </button>

          {/* Liste des catégories */}
          {menuCategories.map((cat: any, i: number) => {
            const categoryKey = cat.title.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeCategory === categoryKey;
            
            return (
              <button 
                key={i} 
                onClick={() => handleCategoryClick(cat.title)}
                className={`w-full flex items-center justify-between py-2 border-b border-neutral-100/60 group transition-colors ${
                  isActive ? "text-[#C5A059]" : "text-neutral-800 hover:text-[#C5A059]"
                }`}
              >
                <span className="text-sm font-medium tracking-[0.15em] uppercase font-serif">
                  {cat.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-light ${isActive ? "text-[#C5A059]" : "text-neutral-400"}`}>
                    ({cat.count})
                  </span>
                  <ChevronRight 
                    size={14} 
                    className={`transition-transform ${isActive ? "text-[#C5A059] translate-x-1" : "text-neutral-300 group-hover:text-[#C5A059] group-hover:translate-x-1"}`} 
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-neutral-200/60 pt-6 space-y-4">
        <button 
          onClick={() => { router.push('/#concept'); onClose(); }} 
          className="block text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-[#C5A059]"
        >
          Our philosophy
        </button>
      </div>
    </>
  );
};

const MenuDrawer = ({ isOpen, onClose, menuCategories }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-50" 
          />
          <motion.div 
            initial={{ x: "-100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "-100%" }} 
            transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }} 
            className="fixed top-0 bottom-0 left-0 w-full max-w-md bg-[#fcfbfa] shadow-2xl z-50 p-8 flex flex-col justify-between border-r border-neutral-100"
          >
            <Suspense fallback={<div className="p-8 text-xs text-neutral-400">loading...</div>}>
              <MenuContent onClose={onClose} menuCategories={menuCategories} />
            </Suspense>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;