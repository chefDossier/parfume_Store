"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react';
import MenuDrawer from './MenuDrawer';
import CartDrawer from './CartDrawer';
import { useInventory } from '@/hooks/useInventory';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { categories } = useInventory();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled ? "bg-white/80 backdrop-blur-md border-neutral-100 py-4 shadow-sm" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center flex-1">
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-neutral-800 hover:text-[#e21e26] font-medium"
              >
                <Menu size={16} /> <span className="hidden md:inline">menu</span>
              </button>
            </div>
            
            <a href="/" className="text-xl font-light tracking-[0.3em] text-black uppercase font-serif">
              Slide Luxury<span className="text-[#e21e26]">Shop</span>
            </a>
            
            <div className="flex items-center gap-6 justify-end flex-1">
              <ShoppingBag 
                size={18} 
                onClick={() => setIsCartOpen(true)} 
                className="cursor-pointer hover:text-[#e21e26] transition-colors" 
              />
            </div>
          </div>
          
        </div>
      </motion.header>

      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuCategories={categories} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;