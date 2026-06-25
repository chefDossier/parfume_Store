"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Truck, ShieldCheck, Leaf } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Commande via WhatsApp",
    description: "Paiement sécurisé & suivi direct"
  },
  {
    id: 2,
    icon: Truck,
    title: "Livraison Prestigieuse",
    description: "Offerte à domicile avec soin"
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Sillage d'Exception",
    description: "Extraits 100% authentiques"
  },
  {
    id: 4,
    icon: Leaf,
    title: "Maison Responsable",
    description: "Fournisseur certifié & flacon durable"
  }
];

const ReassuranceBar = () => {
  return (
    <div className="w-full bg-[#fcfbfa] border-y border-neutral-200/60 py-12 px-6 md:px-12 overflow-hidden relative">
      
      {/* Arrière-plan : Reprise stricte des lignes de structure du Hero pour une continuité parfaite */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-neutral-200/60" />
        <div className="absolute top-0 left-2/3 w-[1px] h-full bg-neutral-200/60" />
      </div>

      {/* Alignement strict sur les proportions maximales du projet (max-w-7xl) */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Grille calée sur le même standard de distribution (12 colonnes) */}
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
                {/* Conteneur d'icône premium avec propagation douce de la couleur */}
                <div className="relative p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white shrink-0 transition-all duration-500 group-hover:border-[#e21e26]/30 group-hover:bg-neutral-950 shadow-xl">
                  
                  {/* Halo d'ambiance en arrière-plan réactif */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg bg-[#e21e26]/15 -z-10" />
                  
                  {/* Masque SVG pour appliquer le dégradé Blanc vers Rouge uniquement au survol sur l'icône */}
                  <svg width="0" height="0" className="absolute">
                    <linearGradient id={`grad-reassure-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#e21e26" />
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

                {/* Textes descriptifs réadaptés pour fond clair */}
                <div className="space-y-1 select-none">
                  <h4 className="text-[12px] font-medium tracking-wider text-neutral-800 font-sans group-hover:text-neutral-950 transition-colors duration-300 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-snug">
                    {item.description}
                  </p>
                </div>

                {/* Séparateurs verticaux millimétrés (cohérents avec les lignes de structure globales) */}
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