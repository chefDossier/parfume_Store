"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  family: string;
  price: string;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Ambre Impérial",
    family: "Boisé Épicé",
    price: "145,00 €",
    image: "/parfume/black_per.jpg", // Réutilisation ou remplace par tes assets
    tag: "Best-seller"
  },
  {
    id: "2",
    name: "Sillage d'Or",
    family: "Floral Ambré",
    price: "160,00 €",
    image: "/parfume/black_per.jpg",
  },
  {
    id: "3",
    name: "Nuit Nomade",
    family: "Cuir Oriental",
    price: "155,00 €",
    image: "/parfume/black_per.jpg",
    tag: "Nouveauté"
  },
  {
    id: "4",
    name: "Brume Solaire",
    family: "Agrumes Musqués",
    price: "135,00 €",
    image: "/parfume/black_per.jpg",
  },
  {
    id: "5",
    name: "Brume Solaire lunaire",
    family: "Agrumes Musqués",
    price: "135,00 €",
    image: "/parfume/black_per.jpg",
  },
  {
    id: "6",
    name: "Brume lunaire",
    family: "Agrumes Musqués",
    price: "135,00 €",
    image: "/parfume/black_per.jpg",
  }
];

const ProductGrid = () => {
  
  // Fonction pour déclencher l'ouverture du panier (Cart Drawer) codé dans le Header
  const handleAddToCart = (productId: string) => {
    // Si tu utilises Zustand/Context plus tard, tu mettras l'action ici.
    // Pour l'instant, on simule l'ouverture ou on envoie un événement personnalisé si ton Header écoute.
    const event = new CustomEvent('open-cart', { detail: { productId } });
    window.dispatchEvent(event);
    
    // Optionnel : un petit retour console pour le dev
    console.log(`Produit ${productId} ajouté au panier.`);
  };

  return (
    <section id="collections" className="w-full bg-[#fcfbfa] py-24 px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EN-TÊTE DE LA SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#e21e26] font-medium block">La Collection</span>
            <h2 className="text-2xl md:text-4xl font-light text-neutral-900 font-serif tracking-tight">
              Nos Extraits de Parfum
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-xs leading-relaxed font-light">
            Des architectures olfactives singulières, concentrées à l'extrême pour une tenue mémorable sur la peau.
          </p>
        </div>

        {/* --- GRILLE DE PRODUITS (3 colonnes sur desktop, 4 si tu ajoutes des éléments) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Zone Image Interactive */}
              <div className="relative aspect-[3/4] w-full bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200/40 mb-4 flex items-center justify-center">
                
                {/* Badge contextuel ultra discret */}
                {product.tag && (
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-neutral-800 text-[9px] font-bold uppercase tracking-wider rounded-md border border-neutral-100 shadow-xs">
                    {product.tag}
                  </span>
                )}

                {/* Image du parfum avec zoom progressif au survol */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
                />

                {/* Overlay d'action au survol (Propagations de couleurs douces) */}
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-4 gap-2">
                  
                  {/* Bouton Ajouter Rapide */}
                  <button 
                    onClick={() => handleAddToCart(product.id)}
                    className="w-full bg-white text-neutral-950 hover:bg-[#e21e26] hover:text-white py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ShoppingBag size={14} />
                    Ajouter au panier
                  </button>

                  {/* Bouton Aperçu (Plus secondaire) */}
                  <button className="w-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 py-3 rounded-xl text-[11px] font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-75">
                    <Eye size={14} />
                    Aperçu rapide
                  </button>
                </div>
              </div>

              {/* --- DETAILS DU PRODUIT (Minimaliste, Typographie Soignée) --- */}
              <div className="space-y-1 px-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-neutral-800 font-sans group-hover:text-[#e21e26] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="text-xs font-medium text-neutral-900 shrink-0">
                    {product.price}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 font-light italic">
                  {product.family}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;