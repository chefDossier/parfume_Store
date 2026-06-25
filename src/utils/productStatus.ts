// utils/productStatus.ts

const STORAGE_KEY: string = 'hidden_products';

export const getHiddenProductIds = (): string[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const setHiddenProductIds = (ids: string[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

export const toggleProductVisibility = (id: string): string[] => {
  const hiddenIds = getHiddenProductIds();
  
  const newHiddenIds = hiddenIds.includes(id)
    ? hiddenIds.filter((hiddenId: string) => hiddenId !== id) // Corrigé ici
    : [...hiddenIds, id];
    
  setHiddenProductIds(newHiddenIds);
  return newHiddenIds;
};