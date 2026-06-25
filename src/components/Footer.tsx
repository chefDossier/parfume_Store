"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react'; // On garde Lucide pour le fonctionnel
import { SiInstagram, SiFacebook, SiPinterest } from 'react-icons/si'; // Simple Icons pour les marques

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fcfbfa] text-neutral-900 pt-24 pb-12 px-6 md:px-12 border-t border-neutral-200/60 relative overflow-hidden font-sans">
      
      {/* Lignes de structure artistiques en arrière-plan */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none flex justify-between max-w-7xl mx-auto px-12 opacity-20">
        <div className="w-[1px] h-full bg-neutral-300" />
        <div className="w-[1px] h-full bg-neutral-300" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* --- SECTION SUPÉRIEURE : NEWSLETTER D'EXCEPTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-200/60 items-start">
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xl md:text-2xl font-light font-serif tracking-tight text-neutral-900">
              Rejoindre le Cercle <span className="italic font-normal">Luxury Shop</span>
            </h3>
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Inscrivez-vous pour recevoir les invitations à nos lancements privés, nos éditions ultra-limitées et nos récits olfactifs.
            </p>
          </div>
          
          <div className="lg:col-span-7 w-full pt-2 lg:pt-0">
            <form className="relative flex items-center w-full border-b border-neutral-300 focus-within:border-[#e21e26] transition-colors duration-500 pb-2">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="w-full bg-transparent text-xs font-light tracking-wide focus:outline-hidden text-neutral-800 placeholder-neutral-300 py-2"
                required
              />
              <button 
                type="submit"
                aria-label="S'inscrire à la newsletter"
                className="text-neutral-400 hover:text-[#e21e26] transition-colors duration-300 p-2 flex items-center gap-1 text-[11px] uppercase tracking-widest font-semibold"
              >
                <span>S'abonner</span>
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* --- SECTION CENTRALE : NAVIGATION ET BRANDING --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-12 items-start">
          
          <div className="col-span-2 md:col-span-4 lg:col-span-5 space-y-6">
            <span className="text-lg font-serif tracking-[0.2em] uppercase font-light text-neutral-900 block">
              Slide luxury shop
            </span>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs">
              Créateurs d'architectures invisibles. Chaque flacon est une œuvre d'artisanat d'art, pensée et assemblée pour résonner avec l'âme.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">Collections</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#collections" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Extraits de Parfum</a></li>
              <li><a href="#collections" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Éditions Limitées</a></li>
              <li><a href="#collections" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Coffrets Découverte</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">L'Expérience</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#diagnostic" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Diagnostic Olfactif</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">La Manufacture</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Prendre RDV</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">Boutiques</p>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Slide Luxury Shop — buea cameroun<br />
              <span className="text-neutral-400 font-mono text-[11px]">Flagship & Diagnostic privé</span>
            </p>
          </div>

        </div>

        {/* --- SECTION INFÉRIEURE : MENTIONS & RÉSEAUX --- */}
        <div className="pt-8 border-t border-neutral-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-light text-neutral-400">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 order-2 md:order-1">
            <span>© {currentYear} Slide luxury shop. Tous droits réservés.</span>
            <a href="#" className="hover:text-neutral-800 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-neutral-800 transition-colors">Données Personnelles</a>
          </div>

          {/* Réseaux Sociaux avec propagation de couleur douce au survol */}
          <div className="flex items-center gap-5 order-1 md:order-2">
            <a 
              href="#" 
              aria-label="Suivez-nous sur Instagram" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-[#e21e26] hover:border-[#e21e26]/30 hover:bg-[#fef2f2]/40 transition-all duration-300"
            >
              <SiInstagram size={12} />
            </a>
            <a 
              href="#" 
              aria-label="Suivez-nous sur Facebook" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-[#e21e26] hover:border-[#e21e26]/30 hover:bg-[#fef2f2]/40 transition-all duration-300"
            >
              <SiFacebook size={12} />
            </a>
            <a 
              href="#" 
              aria-label="Découvrir notre Pinterest" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-[#e21e26] hover:border-[#e21e26]/30 hover:bg-[#fef2f2]/40 transition-all duration-300"
            >
              <SiPinterest size={12} />
            </a>
            <a 
              href="#" 
              aria-label="Découvrir notre Journal" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-[#e21e26] hover:border-[#e21e26]/30 hover:bg-[#fef2f2]/40 transition-all duration-300"
            >
              <Compass size={13} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;