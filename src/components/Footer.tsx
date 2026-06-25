"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, MapPin, Phone } from 'lucide-react';
import { SiInstagram, SiFacebook, SiPinterest, SiSnapchat, SiTiktok } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  // Handler de redirection WhatsApp lors de l'inscription à la newsletter
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    const phoneNumber = "237670000000"; // Remplacer par votre numéro WhatsApp exact (indicatif inclus, sans le +)
    const message = encodeURIComponent(
      `Bonjour Sidess Luxury, je souhaite m'abonner à la newsletter et rejoindre le cercle privé. Voici mon adresse e-mail : ${email}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="w-full bg-[#fcfbfa] text-neutral-900 pt-0 pb-12 border-t border-neutral-200/60 relative overflow-hidden font-sans">
      
      {/* Lignes de structure artistiques en arrière-plan */}
      <div className="absolute inset-y-0 top-0 h-full w-full pointer-events-none flex justify-between max-w-7xl mx-auto px-12 opacity-20">
        <div className="w-[1px] h-full bg-neutral-300" />
        <div className="w-[1px] h-full bg-neutral-300" />
      </div>

      {/* --- SECTION 1 : MAP INTEGRÉE EN PLEINE LARGEUR --- */}
      <div className="w-full h-[350px] md:h-[420px] relative border-b border-neutral-200/60 overflow-hidden group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3267737549495!2d9.2886812!3d4.1560048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061316794e98fb5%3A0x22f56d1ad469c4cc!2sSIDESS%20LUXURY%20SHOP!5e0!3m2!1sen!2scm!4v1782381318169!5m2!1sen!2scm" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
         
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
          className="filter grayscale contrast-115 brightness-95 opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out"
        />
        
        {/* Overlay d'information flottant discret */}
        <div className="absolute bottom-6 left-6 md:left-12 bg-white/95 backdrop-blur-md p-5 border border-neutral-200/60 max-w-xs space-y-2 pointer-events-auto shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400">Notre Boutique</p>
          </div>
          <h4 className="text-sm font-serif font-medium text-neutral-900">Sidess Luxury Shop</h4>
          <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
            Molyko, face à la cathédrale ou à proximité immédiate, Buea, Cameroun
          </p>
          <a 
            href="https://maps.app.goo.gl/L6n5RbD17Nyg43p88" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-neutral-800 hover:text-[#e21e26] transition-colors pt-1"
          >
            <span>Obtenir l'itinéraire</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20 px-6 md:px-12 pt-16">
        
        {/* --- SECTION SUPÉRIEURE : NEWSLETTER D'EXCEPTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-200/60 items-start">
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xl md:text-2xl font-light font-serif tracking-tight text-neutral-900">
              Rejoindre le Cercle <span className="italic font-normal">Aura</span>
            </h3>
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Inscrivez-vous pour recevoir les invitations à nos ventes privées, nos arrivages exclusifs et nos conseils d'association olfactive.
            </p>
          </div>
          
          <div className="lg:col-span-7 w-full pt-2 lg:pt-0">
            <form 
              onSubmit={handleNewsletterSubmit} 
              className="relative flex items-center w-full border-b border-neutral-300 focus-within:border-[#e21e26] transition-colors duration-500 pb-2"
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email" 
                className="w-full bg-transparent text-xs font-light tracking-wide focus:outline-hidden text-neutral-800 placeholder-neutral-300 py-2"
                required
              />
              <button 
                type="submit"
                aria-label="S'inscrire à la newsletter via WhatsApp"
                className="text-neutral-400 hover:text-[#e21e26] transition-colors duration-300 p-2 flex items-center gap-1 text-[11px] uppercase tracking-widest font-semibold shrink-0"
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
              Sidess Luxury
            </span>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs">
              Maison d'essences et d'horlogerie de prestige. Chaque pièce et flacon de notre collection est soigneusement sélectionné pour sa signature singulière et sa rareté.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">Collections</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#parfums" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Parfums d'Exception</a></li>
              <li><a href="#brumes" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Brumes &amp; Mists</a></li>
              <li><a href="#coffrets" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Coffrets Cadeaux</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">L'Expérience</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#diagnostic" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Diagnostic Privé</a></li>
              <li><a href="#discover" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Nos Marques</a></li>
              <li><a href="#contact" className="text-neutral-600 hover:text-[#e21e26] transition-colors duration-300">Prendre RDV</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">Boutique Physique</p>
            <p className="text-xs text-neutral-500 font-light leading-relaxed space-y-1">
              <span className="block font-medium text-neutral-800">SIDESS LUXURY SHOP</span>
              <span>Molyko, face à la cathédrale, Buea</span>
              <span className="block text-neutral-400 font-mono text-[10px] pt-1">Flagship &amp; Showroom Privé</span>
            </p>
          </div>

        </div>

        {/* --- SECTION INFÉRIEURE : MENTIONS & RÉSEAUX --- */}
        <div className="pt-8 border-t border-neutral-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-light text-neutral-400">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 order-2 md:order-1">
            <span>© {currentYear} Sidess Luxury. Tous droits réservés.</span>
            <a href="#" className="hover:text-neutral-800 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-neutral-800 transition-colors">Politique de Confidentialité</a>
          </div>

          {/* Réseaux Sociaux */}
          <div className="flex items-center gap-3 md:gap-4 order-1 md:order-2">
            <a 
              href="https://www.instagram.com/sidessluxuryshop2/reels/?__d=11" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Instagram" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-pink-600 hover:border-[#e21e26]/30 hover:bg-[#fef2f2]/40 transition-all duration-300"
            >
              <SiInstagram size={12} />
            </a>
            <a 
              href="https://www.snapchat.com/@sidess_luxury/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYZHZ3bHp2cG55AZzokefqAZzojPCWAAAAAQ" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Snapchat" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-yellow-500 hover:border-yellow-400/30 hover:bg-yellow-50/40 transition-all duration-300"
            >
              <SiSnapchat size={12} />
            </a>
            <a 
              href="https://www.tiktok.com/@sidessluxuryshopbuea/video/7602272307423333652" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur TikTok" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-neutral-800/30 hover:bg-neutral-50 transition-all duration-300"
            >
              <SiTiktok size={11} />
            </a>
            <a 
              href="#" 
              aria-label="Suivez-nous sur Facebook" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-400/30 hover:bg-blue-50/40 transition-all duration-300"
            >
              <SiFacebook size={12} />
            </a>
            <a 
              href="#" 
              aria-label="Découvrir notre Pinterest" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-red-600 hover:border-red-400/30 hover:bg-red-50/40 transition-all duration-300"
            >
              <SiPinterest size={12} />
            </a>
            <a 
              href="#" 
              aria-label="Découvrir notre Journal" 
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-800 hover:border-neutral-400/30 hover:bg-neutral-100/40 transition-all duration-300"
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