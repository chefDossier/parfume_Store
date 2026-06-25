export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  size?: string;
}

export interface InventoryItem {
  image_name: string;
  status: 'MATCHED' | 'NEW_PRODUCT_ENTRY';
  // Soit un seul produit, soit un tableau, soit une suggestion
  matched_product?: Product;
  matched_products?: Product[];
  suggested_new_entry?: Product;
}