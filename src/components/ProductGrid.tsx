"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { useInventory } from '@/hooks/useInventory';
import { useSearchParams, useRouter } from 'next/navigation';

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dtlhwfewd/image/upload/v1781606730/";
const WHATSAPP_NUMBER = "23770738850";

// Composant léger pour le chargement
const ImagePlaceholder = () => (
  <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
);

const ProductGrid = () => {
  const { products } = useInventory();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const activeCategory = searchParams.get('category');
  const activeSearch = searchParams.get('q') || '';
  const [localSearch, setLocalSearch] = useState(activeSearch);
  
  useEffect(() => {
    setLocalSearch(activeSearch);
  }, [activeSearch]);

  const filteredProducts = products.filter((item: any) => {
    const p = item.matched_product;
    const q = localSearch.toLowerCase();
    const matchesCategory = activeCategory ? p.category.toLowerCase().replace(/\s+/g, '-') === activeCategory : true;
    const matchesSearch = q ? (p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)) : true;
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: any) => {
    const rawCart = localStorage.getItem('cart');
    let cart = [];
    try {
      cart = rawCart ? JSON.parse(rawCart) : [];
      if (!Array.isArray(cart)) cart = [];
    } catch (e) { cart = []; }

    const targetId = item?.matched_product?.id;
    if (!targetId) return;

    const isExists = cart.find((cartItem: any) => cartItem?.matched_product?.id === targetId);
    
    if (!isExists) {
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('storage')); 
    }
    window.dispatchEvent(new CustomEvent('open-cart'));
  };

  const handleWhatsAppRedirect = (customMessage?: string) => {
    const message = customMessage || "Bonjour, je cherche une fragrance spécifique mais je ne l'ai pas trouvée dans votre catalogue. Pouvez-vous m'aider ?";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSearchChange = (val: string) => {
    setLocalSearch(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val) params.set('q', val); else params.delete('q');
    router.replace(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <section id="collections" className="w-full bg-[#fcfbfa] py-24 px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#e21e26] font-medium block">
              {activeCategory ? activeCategory.replace('-', ' ') : "La Collection"}
            </span>
            <h2 className="text-2xl md:text-4xl font-light text-neutral-900 font-serif tracking-tight">
              {localSearch ? `Recherche : ${localSearch}` : "Nos Fragrances"}
            </h2>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search size={16} className="absolute left-3 top-3.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Nom, marque..."
              value={localSearch}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full bg-white border border-neutral-200 py-3 pl-10 pr-4 text-xs tracking-widest uppercase outline-none focus:border-[#e21e26] transition-all rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item: any) => (
              <motion.div key={item.matched_product.id} className="group flex flex-col justify-between" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <div className="relative aspect-[3/4] w-full bg-neutral-100 rounded-2xl overflow-hidden mb-4">
                  <ImagePlaceholder />
                  <img 
                    src={`${CLOUDINARY_BASE_URL}${item.image_name}.jpg`} 
                    alt={item.matched_product.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover relative z-10 transition-opacity duration-500 opacity-0 group-hover:scale-105"
                    onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  />
                  
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col justify-end p-4 gap-2">
                    <button onClick={() => handleAddToCart(item)} className="w-full bg-white text-neutral-950 py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                      <ShoppingBag size={14} /> Ajouter
                    </button>
                    <button onClick={() => handleWhatsAppRedirect(`Bonjour, je suis intéressé par le parfum : ${item.matched_product.name}`)} className="w-full bg-[#25D366] text-white py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                      <MessageCircle size={14} /> WhatsApp
                    </button>
                  </div>
                </div>

                <div className="space-y-1 px-1">
                  <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-neutral-800">{item.matched_product.name}</h3>
                  <p className="text-[11px] text-neutral-400 font-light italic">{item.matched_product.brand} • {item.matched_product.category}</p>
                  <span className="text-xs font-medium text-neutral-900">{item.matched_product.price ? `${item.matched_product.price.toLocaleString()} FCFA` : "Sur demande"}</span>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-20 text-center">
              <p className="text-neutral-500 mb-6 text-sm">Il se peut que ce produit ne soit pas disponible actuellement. Contactez-nous pour une demande personnalisée.</p>
              <button onClick={() => handleWhatsAppRedirect()} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#e21e26] transition-colors">
                Nous contacter sur WhatsApp <ArrowRight size={14} />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;