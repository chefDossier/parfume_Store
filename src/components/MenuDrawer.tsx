"use client";

import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

/**
 * Sous-composant isolant l'utilisation de useSearchParams
 * pour éviter les erreurs de rendu statique (prerender) lors du build Vercel.
 */
const MenuContent = ({ onClose, menuCategories }: { onClose: () => void, menuCategories: any[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (title: string | null) => {
    // 1. Créer une nouvelle instance de recherche
    const params = new URLSearchParams(searchParams.toString());
    
    if (title === null) {
      // Nettoyer tous les filtres pour afficher tout
      params.delete('category');
      params.delete('q');
    } else {
      // 2. Normalisation
      const categoryValue = title.toLowerCase().replace(/\s+/g, '-');
      
      // 3. Mettre à jour la catégorie
      params.set('category', categoryValue);
      
      // 4. IMPORTANT : Supprimer le paramètre 'q' (recherche) pour réinitialiser le filtre
      params.delete('q');
    }
    
    // 5. Utiliser replace avec scroll: false pour rester au même endroit
    router.replace(`/?${params.toString()}`, { scroll: false });
    
    // 6. Fermer le tiroir
    onClose();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-medium">exploration</span>
          <button 
            onClick={onClose} 
            className="p-2 hover:rotate-90 transition-transform duration-300 text-neutral-500 hover:text-neutral-900"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Option pour tout afficher */}
          <button 
            onClick={() => handleCategoryClick(null)}
            className="w-full flex items-center justify-between py-2 border-b border-neutral-100/60 group text-neutral-800 hover:text-[#e21e26] transition-colors"
          >
            <span className="text-sm font-medium tracking-[0.15em] uppercase font-serif">
              Tout
            </span>
            <ChevronRight 
              size={14} 
              className="text-neutral-300 group-hover:text-[#e21e26] transition-transform group-hover:translate-x-1" 
            />
          </button>

          {/* Liste des catégories */}
          {menuCategories.map((cat: any, i: number) => (
            <button 
              key={i} 
              onClick={() => handleCategoryClick(cat.title)}
              className="w-full flex items-center justify-between py-2 border-b border-neutral-100/60 group text-neutral-800 hover:text-[#e21e26] transition-colors"
            >
              <span className="text-sm font-medium tracking-[0.15em] uppercase font-serif">
                {cat.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-neutral-400 font-mono font-light">
                  ({cat.count})
                </span>
                <ChevronRight 
                  size={14} 
                  className="text-neutral-300 group-hover:text-[#e21e26] transition-transform group-hover:translate-x-1" 
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-200/60 pt-6 space-y-4">
        <button 
          onClick={() => {
            router.push('/#concept');
            onClose();
          }} 
          className="block text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900"
        >
          notre philosophie
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
            <Suspense fallback={<div className="p-8 text-xs text-neutral-400">Chargement...</div>}>
              <MenuContent onClose={onClose} menuCategories={menuCategories} />
            </Suspense>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;