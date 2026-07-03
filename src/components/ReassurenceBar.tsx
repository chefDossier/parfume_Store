"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Truck, ShieldCheck, Leaf } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Order via WhatsApp",
    description: "Secure payment & direct tracking"
  },
  {
    id: 2,
    icon: Truck,
    title: "Premium Delivery",
    description: "Complimentary home delivery with care"
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Exceptional Sillage",
    description: "100% authentic extracts"
  },
  {
    id: 4,
    icon: Leaf,
    title: "Responsible House",
    description: "Certified supplier & sustainable bottle"
  }
];

const ReassuranceBar = () => {
  return (
    <div className="w-full bg-[#fcfbfa] border-y border-neutral-200/60 py-12 px-6 md:px-12 overflow-hidden relative">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-neutral-200/60" />
        <div className="absolute top-0 left-2/3 w-[1px] h-full bg-neutral-200/60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6 justify-center items-center">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-3 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 px-2 relative"
              >
                {/* Conteneur d'icône premium */}
                <div className="relative p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white shrink-0 transition-all duration-500 group-hover:border-[#C5A059]/30 group-hover:bg-neutral-950 shadow-xl">
                  
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg bg-[#C5A059]/15 -z-10" />
                  
                  {/* Dégradé doré */}
                  <svg width="0" height="0" className="absolute">
                    <linearGradient id={`grad-reassure-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#C5A059" />
                    </linearGradient>
                  </svg>

                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <IconComponent 
                      size={20} 
                      className="transition-all duration-500 text-white"
                      style={{
                        stroke: `url(#grad-reassure-${item.id})`
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1 select-none">
                  <h4 className="text-[12px] font-medium tracking-wider text-neutral-800 font-sans group-hover:text-neutral-950 transition-colors duration-300 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-snug">
                    {item.description}
                  </p>
                </div>

                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-neutral-200/60" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ReassuranceBar;