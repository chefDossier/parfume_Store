import { useState, useEffect, useMemo } from 'react';
import rawData from '@/matched_product'; 
import { CatalogueItem } from '@/types/catalogue';

const catalogueData = rawData as CatalogueItem[];

export const useInventory = () => {
  const [hiddenIds, setHiddenIds] = useState<string[]>([]);

  // Charger les produits masqués depuis le localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hidden_products');
    if (saved) {
      try {
        setHiddenIds(JSON.parse(saved));
      } catch (e) {
        console.error("Erreur lors du parsing des produits masqués", e);
      }
    }
  }, []);

  // Logique principale : Filtrage et calcul des catégories
  const { products, categories } = useMemo(() => {
    // 1. Filtrer les produits visibles
    // On ajoute item.matched_product?.id pour éviter l'erreur si matched_product est undefined
    const visibleProducts = catalogueData.filter(item => 
      item.matched_product?.id && !hiddenIds.includes(item.matched_product.id)
    );

    // 2. Calculer dynamiquement le nombre de produits par catégorie
    const categoryCounts: Record<string, number> = {};
    
    visibleProducts.forEach(item => {
      // On utilise une valeur par défaut "Non classé" si la catégorie est manquante
      const cat = item.matched_product?.category || "Autres";
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    const formattedCategories = Object.entries(categoryCounts).map(([title, count]) => ({
      title,
      count: count.toString().padStart(2, '0')
    }));

    return {
      products: visibleProducts,
      categories: formattedCategories
    };
  }, [hiddenIds]);

  // Fonction pour masquer un produit (utile pour vos interfaces d'administration)
  const hideProduct = (id: string) => {
    const newHidden = [...hiddenIds, id];
    setHiddenIds(newHidden);
    localStorage.setItem('hidden_products', JSON.stringify(newHidden));
  };

  return { products, categories, hideProduct };
};