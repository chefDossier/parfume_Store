"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react';
import Image from 'next/image';
import MenuDrawer from './MenuDrawer';
import CartDrawer from './CartDrawer';
import { useInventory } from '@/hooks/useInventory';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const { categories } = useInventory();

  // Fonction pour mettre à jour le nombre d'articles depuis le localStorage
  const updateCartCount = () => {
    const rawCart = localStorage.getItem('cart');
    try {
      const cart = rawCart ? JSON.parse(rawCart) : [];
      setCartCount(Array.isArray(cart) ? cart.length : 0);
    } catch (e) {
      setCartCount(0);
    }
  };

  useEffect(() => {
    // Initialisation
    updateCartCount();

    // Écouteurs pour mettre à jour le panier en temps réel
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('open-cart', updateCartCount);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('open-cart', updateCartCount);
    };
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled ? "bg-white/90 backdrop-blur-md border-neutral-100 py-4 shadow-sm" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Menu Burger - Largeur fixe */}
          <div className="flex-1">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="flex items-center gap-2.5 text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-800 hover:text-[#e21e26] font-medium transition-colors"
            >
              <Menu size={18} /> <span className="hidden md:inline">menu</span>
            </button>
          </div>
          
          {/* Logo et Texte centrés */}
          <div className="flex-1 flex justify-center">
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-8 w-auto">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="h-8 w-auto object-contain"
                  priority
                />
              </div>
              <span className="text-sm md:text-lg font-light tracking-[0.2em] text-black uppercase font-serif whitespace-nowrap">
                Slide Luxury<span className="text-[#e21e26]">Shop</span>
              </span>
            </a>
          </div>
          
          {/* Panier - Largeur fixe */}
          <div className="flex-1 flex justify-end">
            <div className="relative cursor-pointer group" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag 
                size={22} 
                className="text-neutral-900 group-hover:text-[#e21e26] transition-colors" 
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#e21e26] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
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