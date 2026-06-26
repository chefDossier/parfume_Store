"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dtlhwfewd/image/upload/v1781606730/";
const WHATSAPP_NUMBER = "23770738850";

const CartDrawer = ({ isOpen, onClose }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  const loadCart = () => {
    const savedCart = localStorage.getItem('cart');
    setCart(savedCart ? JSON.parse(savedCart) : []);
  };

  useEffect(() => {
    loadCart();
    window.addEventListener('storage', loadCart);
    return () => window.removeEventListener('storage', loadCart);
  }, []);

  const handleRemove = (id: string) => {
    const newCart = cart.filter((item: any) => item.matched_product.id !== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('storage'));
  };

  const handleCheckout = () => {
    let message = "Hello, I would like to order the following items:\n\n";
    
    cart.forEach((item, index) => {
      const p = item.matched_product;
      message += `${index + 1}. *${p.name}* - ${p.brand}\n Price: ${p.price ? p.price + ' FCFA' : 'On request'}\n\n`;
    });

    message += "Please confirm availability and delivery options.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" 
          />
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} 
            transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }} 
            className="fixed top-0 bottom-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 p-8 flex flex-col justify-between border-l border-neutral-100"
          >
            <div>
              <div className="flex items-center justify-between mb-12">
                <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-medium">
                  Your selection ({cart.length})
                </span>
                <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300 text-neutral-500 hover:text-neutral-900">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6 overflow-y-auto max-h-[60vh]">
                {cart.length > 0 ? (
                  cart.map((item: any) => (
                    <div key={item.matched_product.id} className="flex gap-4 items-center">
                      <div className="w-16 h-20 bg-neutral-100 rounded-sm overflow-hidden flex-shrink-0">
                        <img 
                          src={`${CLOUDINARY_BASE_URL}${item.image_name}.jpg`} 
                          alt={item.matched_product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-900">
                          {item.matched_product.name}
                        </h4>
                        <p className="text-[10px] text-neutral-500 italic">{item.matched_product.brand}</p>
                        <p className="text-[11px] font-medium text-[#C5A059]">
                          {item.matched_product.price ? `${item.matched_product.price.toLocaleString()} FCFA` : "Price on request"}
                        </p>
                      </div>
                      <button onClick={() => handleRemove(item.matched_product.id)} className="p-2 text-neutral-300 hover:text-[#C5A059] transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-neutral-400 italic">Your cart is empty.</p>
                )}
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-6 space-y-6">
              <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full bg-neutral-900 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] disabled:bg-neutral-200 transition-all duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;