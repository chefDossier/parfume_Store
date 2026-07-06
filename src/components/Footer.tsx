"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';
import { SiInstagram, SiSnapchat, SiTiktok } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    const phoneNumber = "237670000000";
    const message = encodeURIComponent(
      `Hello Sidess Luxury, I would like to subscribe to the newsletter and join the private circle. Here is my e-mail address: ${email}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="w-full bg-amber-50 text-neutral-900 pt-0 pb-12 border-t border-neutral-200/60 relative overflow-hidden font-sans">
      
      <div className="absolute inset-y-0 top-0 h-full w-full pointer-events-none flex justify-between max-w-7xl mx-auto px-12 opacity-20">
        <div className="w-[1px] h-full bg-neutral-300" />
        <div className="w-[1px] h-full bg-neutral-300" />
      </div>

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
        
        <div className="absolute bottom-6 left-6 md:left-12 bg-white/95 backdrop-blur-md p-5 border border-neutral-200/60 max-w-xs space-y-2 pointer-events-auto shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400">Our Boutique</p>
          </div>
          <h4 className="text-sm font-serif font-medium text-neutral-900">Sidess Luxury Shop</h4>
          <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
            Molyko, facing the cathedral or in the immediate vicinity, Buea, Cameroon
          </p>
          <a 
            href="https://maps.app.goo.gl/L6n5RbD17Nyg43p88" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-neutral-800 hover:text-[#C5A059] transition-colors pt-1"
          >
            <span>Get directions</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20 px-6 md:px-12 pt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-200/60 items-start">
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xl md:text-2xl font-light font-serif tracking-tight text-neutral-900">
              Join the <span className="italic font-normal">Aura</span> Circle
            </h3>
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Sign up to receive invitations to our private sales, exclusive arrivals, and our olfactory association tips.
            </p>
          </div>
          
          <div className="lg:col-span-7 w-full pt-2 lg:pt-0">
            <form 
              onSubmit={handleNewsletterSubmit} 
              className="relative flex items-center w-full border-b border-neutral-300 focus-within:border-[#C5A059] transition-colors duration-500 pb-2"
            >
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="w-full bg-transparent text-xs font-light tracking-wide focus:outline-hidden text-neutral-800 placeholder-neutral-300 py-2"
                required
              />
              <button 
                type="submit"
                className="text-neutral-400 hover:text-[#C5A059] transition-colors duration-300 p-2 flex items-center gap-1 text-[11px] uppercase tracking-widest font-semibold shrink-0"
              >
                <span>Subscribe</span>
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-12 items-start">
          <div className="col-span-2 md:col-span-4 lg:col-span-5 space-y-6">
            <span className="text-lg font-serif tracking-[0.2em] uppercase font-light text-neutral-900 block">
              Sidess Luxury
            </span>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs">
              A house of essences and luxury watchmaking. Each piece and bottle in our collection is carefully selected for its unique signature and rarity.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">Collections</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#parfums" className="text-neutral-600 hover:text-[#C5A059] transition-colors duration-300">Exceptional Perfumes</a></li>
              <li><a href="#brumes" className="text-neutral-600 hover:text-[#C5A059] transition-colors duration-300">Mists &amp; Fragrances</a></li>
              <li><a href="#coffrets" className="text-neutral-600 hover:text-[#C5A059] transition-colors duration-300">Gift Sets</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">Experience</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#diagnostic" className="text-neutral-600 hover:text-[#C5A059] transition-colors duration-300">Private Diagnostic</a></li>
              <li><a href="#discover" className="text-neutral-600 hover:text-[#C5A059] transition-colors duration-300">Our Brands</a></li>
              <li><a href="#contact" className="text-neutral-600 hover:text-[#C5A059] transition-colors duration-300">Book an Appointment</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400">Physical Boutique</p>
            <p className="text-xs text-neutral-500 font-light leading-relaxed space-y-1">
              <span className="block font-medium text-neutral-800">SIDESS LUXURY SHOP</span>
              <span>Molyko, facing the cathedral, Buea</span>
              <span className="block text-neutral-400 font-mono text-[10px] pt-1">Flagship &amp; Private Showroom</span>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-light text-neutral-400">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 order-2 md:order-1">
            <span>© {currentYear} Sidess Luxury. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3 md:gap-4 order-1 md:order-2">
            {[
              { icon: SiInstagram, color: "hover:text-pink-600", url: " https://www.instagram.com/sidessluxuryshop2/reels/?__d=11" },
              { icon: SiTiktok, color: "hover:text-black", url: " https://www.tiktok.com/@sidessluxuryshopbuea/video/7602272307423333652" },
              { icon: SiSnapchat, color: "hover:text-yellow-500", url: "https://www.snapchat.com/@sidess_luxury/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYZHZ3bHp2cG55AZzokefqAZzojPCWAAAAAQ" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 ${social.color} hover:border-[#C5A059]/30 hover:bg-[#fdfaf5] transition-all duration-300`}
              >
                <social.icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;