"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, X, Menu, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le défilement pour adapter l'opacité et le fond du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le scroll du body quand un panneau est ouvert
  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isCartOpen]);

  // Configuration des liens du menu latéral
  const menuCategories = [
    { title: "toutes les fragrances", count: "12" },
    { title: "pour elle", count: "05" },
    { title: "pour lui", count: "04" },
    { title: "extraits de parfum", count: "03" },
    { title: "coffrets & échantillons", count: "02" },
  ];

  return (
    <>
      {/* --- TOPBAR / HEADER FIXE --- */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-neutral-100 py-4 shadow-sm" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Éléments Gauche : Exploration */}
          <div className="flex items-center gap-8 flex-1">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-neutral-800 hover:text-[#e21e26] transition-colors group font-medium"
            >
              <Menu size={16} className="text-neutral-800 group-hover:text-[#e21e26] transition-colors" />
              <span className="hidden md:inline">menu</span>
            </button>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#collections" className="text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors font-medium">collections</a>
              <a href="#diagnostic" className="text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors font-medium">diagnostic olfactif</a>
            </nav>
          </div>

          {/* Centre : Logo (Point focal typographique haut de gamme) */}
          <div className="text-center">
            <a href="/" className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase font-serif text-neutral-900 hover:opacity-80 transition-opacity">
              Maison <span className="font-normal text-[#e21e26]">Aura</span>
            </a>
          </div>

          {/* Éléments Droite : Utilitaires */}
          <div className="flex items-center gap-6 md:gap-8 justify-end flex-1">
            <button className="text-neutral-800 hover:text-[#e21e26] transition-all duration-300">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="hidden md:block text-neutral-800 hover:text-[#e21e26] transition-all duration-300">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-neutral-800 hover:text-[#e21e26] transition-all duration-300 flex items-center gap-1.5 relative"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#e21e26] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>

        </div>
      </motion.header>

      {/* --- MENU LATÉRAL (SLIDE-OVER GAUCHE) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay sombre discret */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-xs z-50"
            />
            
            {/* Panneau du menu */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 bottom-0 left-0 w-full max-w-md bg-[#fcfbfa] shadow-2xl z-50 p-8 flex flex-col justify-between border-r border-neutral-100"
            >
              <div>
                <div className="flex items-center justify-between mb-16">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-medium">exploration</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:rotate-90 transition-transform duration-300 text-neutral-500 hover:text-neutral-900"
                  >
                    <X size={18} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Liens du catalogue */}
                <div className="space-y-6">
                  {menuCategories.map((cat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <a 
                        href={`#${cat.title.replace(/\s+/g, '-')}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-2 border-b border-neutral-100/60 group text-neutral-800 hover:text-[#e21e26] transition-colors"
                      >
                        <span className="text-sm font-medium tracking-[0.15em] uppercase font-serif">{cat.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-neutral-400 font-mono font-light">({cat.count})</span>
                          <ChevronRight size={14} className="text-neutral-300 group-hover:text-[#e21e26] transition-colors transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Note ou univers de marque en bas de menu */}
              <div className="border-t border-neutral-200/60 pt-6 space-y-4">
                <a href="#concept" onClick={() => setIsMenuOpen(false)} className="block text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors">notre philosophie</a>
                <p className="text-[11px] leading-relaxed text-neutral-400 italic">
                  Chaque fragrance raconte une histoire invisible, capturée dans un flacon d'exception.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- PANIER LATÉRAL (CART DRAWER DROITE) --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-xs z-50"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 bottom-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 p-8 flex flex-col justify-between border-l border-neutral-100"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-medium">votre sélection (2)</span>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:rotate-90 transition-transform duration-300 text-neutral-500 hover:text-neutral-900"
                  >
                    <X size={18} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Liste des produits (Simulée de manière épurée) */}
                <div className="space-y-6 overflow-y-auto max-h-[50vh] pr-2">
                  {[1, 2].map((item, index) => (
                    <div key={index} className="flex gap-4 pb-6 border-b border-neutral-100 items-center">
                      <div className="w-16 h-20 bg-neutral-50 rounded-lg flex-shrink-0 border border-neutral-100/50" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-neutral-800 truncate">Ambre Impérial</h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5">Extrait de Parfum — 100ml</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-neutral-400">Qté: 1</span>
                          <span className="text-xs font-medium text-neutral-900">145,00 €</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Résumé de commande et bouton final */}
              <div className="border-t border-neutral-100 pt-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Livraison</span>
                    <span className="uppercase tracking-wider font-medium text-neutral-900 text-[11px]">offerte</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-neutral-900 pt-2 border-t border-neutral-100/50">
                    <span className="font-serif uppercase tracking-wider">Sous-total</span>
                    <span>290,00 €</span>
                  </div>
                </div>
                
                <button className="w-full bg-neutral-950 text-white py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#e21e26] transition-colors duration-500">
                  procéder au paiement
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-[10px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors font-medium"
                >
                  continuer mes achats
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;