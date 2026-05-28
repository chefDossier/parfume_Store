"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag, Eye } from 'lucide-react';

// Contenu du bandeau dynamique (Éditions Spéciales)
const specialEditions = [
  {
    id: 1,
    text: "Édition Spéciale : Ambre Impérial - Flacon d'Or Numéroté",
    image: "/parfume/black_per.jpg"
  },
  {
    id: 2,
    text: "Collection Privée : Nuit Nomade - Extrait Absolu de Cuir",
    image: "/parfume/black_per.jpg"
  },
  {
    id: 3,
    text: "Série Rare : Sillage d'Or - Infusion Exclusive 2026",
    image: "/parfume/black_per.jpg"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion de la rotation automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specialEditions.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerSign: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#fcfbfa] flex items-center overflow-hidden pt-24 md:pt-16">
      
      {/* Arrière-plan : Lignes de structure */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-neutral-200/60" />
        <div className="absolute top-0 left-2/3 w-[1px] h-full bg-neutral-200/60" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-12">
        
        {/* --- BLOC GAUCHE --- */}
        <motion.div 
          className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left"
          variants={containerSign}
          initial="hidden"
          animate="visible"
        >
          {/* --- BANDEAU ÉDITION SPÉCIALE DYNAMIQUE --- */}
          <motion.div 
            variants={fadeInUp}
            className="relative w-full max-w-md h-20 rounded-full overflow-hidden border border-neutral-200/30 shadow-md flex items-center px-6"
          >
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`bg-${currentIndex}`}
                  src={specialEditions[currentIndex].image}
                  alt="Atmosphère Parfum"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover filter blur-[1px]"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-neutral-950/45 mix-blend-multiply" />
            </div>

            <div className="relative z-10 flex items-center gap-3 w-full text-white select-none">
              <Sparkles size={13} className="text-[#e21e26] shrink-0 animate-pulse" />
              <div className="overflow-hidden w-full h-4 relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`text-${currentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-semibold truncate text-neutral-100"
                  >
                    {specialEditions[currentIndex].text}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl xl:text-7xl font-light text-neutral-900 tracking-tight leading-[1.1] font-serif"
          >
            L'empreinte d'une <br />
            <span className="italic font-normal text-neutral-800">émotion</span> invisible.
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-xl font-light"
          >
            Plus qu’un sillage, une architecture sensorielle. Maison Aura façonne des extraits de parfum rares où les essences précieuses entrent en résonance avec votre histoire.
          </motion.p>

          {/* --- ACTIONS CLIENTS AJUSTÉES --- */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <a 
              href="#collections"
              className="group relative px-8 py-4 bg-neutral-950 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] overflow-hidden flex items-center justify-center gap-3 shadow-lg hover:bg-[#e21e26] transition-colors duration-500 text-center"
            >
              <span>Découvrir l'univers</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Diagnostic Olfactif : Fond rouge, sans bordure */}
            <a 
              href="#diagnostic"
              className="px-8 py-4 bg-[#e21e26] text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:bg-[#b8141a] transition-all duration-300 text-center border-0"
            >
              Diagnostic olfactif
            </a>
          </motion.div>
        </motion.div>

        {/* --- BLOC DROITE : ZONE PRODUIT AVEC BOUTONS FIXES SUR MOBILE / HOVER SUR PC --- */}
        <motion.div 
          className="lg:col-span-5 relative flex flex-col justify-center items-center lg:items-end mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Groupe conteneur de l'image (Gestion de l'effet hover PC uniquement) */}
          <div className="group/card relative w-[290px] h-[400px] md:w-[360px] md:h-[480px] bg-neutral-100 rounded-[60px_20px_60px_20px] overflow-hidden shadow-2xl z-10 border border-neutral-200/30">
            <img 
              src="/parfume/black_per.jpg" 
              alt="Flacon d'exception Maison Aura" 
              className="w-full h-full object-cover transform md:group-hover/card:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none" />

            {/* Actions Rapides E-Commerce : Uniquement au survol sur PC, cachées nativement sur Mobile dans ce conteneur */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent items-center justify-center gap-3 opacity-0 translate-y-4 pointer-events-none md:group-hover/card:opacity-100 md:group-hover/card:translate-y-0 md:group-hover/card:pointer-events-auto transition-all duration-500 hidden md:flex">
              <button 
                aria-label="Aperçu rapide"
                className="p-3 bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white hover:text-neutral-950 transition-colors duration-300"
              >
                <Eye size={16} />
              </button>
              <button className="flex-1 py-3 px-4 bg-white text-neutral-950 text-[10px] uppercase tracking-widest font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#e21e26] hover:text-white transition-colors duration-300">
                <ShoppingBag size={14} />
                <span>Ajouter au panier</span>
              </button>
            </div>
          </div>

          {/* Version Mobile Dédiée : Boutons d'achat visibles en permanence sous la carte pour éviter la perte de conversion */}
          <div className="w-[290px] mt-4 flex items-center gap-2 md:hidden z-20">
            <button className="flex-1 py-3 px-4 bg-neutral-950 text-white text-[10px] uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 active:bg-[#e21e26] transition-colors">
              <ShoppingBag size={14} />
              <span>Ajouter</span>
            </button>
            <button 
              aria-label="Aperçu rapide"
              className="p-3 bg-white border border-neutral-200 text-neutral-800 rounded-xl active:bg-neutral-50"
            >
              <Eye size={16} />
            </button>
          </div>

          <div className="absolute bottom-16 right-6 lg:-bottom-6 lg:-right-6 w-[290px] h-[400px] md:w-[360px] md:h-[480px] border-2 border-[#e21e26]/20 rounded-[60px_20px_60px_20px] z-0 pointer-events-none transition-colors duration-500 md:group-hover/card:border-[#e21e26]/40" />

          <div className="absolute left-0 bottom-24 lg:-left-12 lg:bottom-24 z-20 bg-white/70 backdrop-blur-md border border-neutral-100 py-3 px-4 rounded-xl shadow-md hidden sm:block">
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Note de tête</p>
            <p className="text-xs font-serif text-neutral-800">Bergamote & Écorce d'Ambre</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;