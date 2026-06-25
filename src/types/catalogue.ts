export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
}

export interface CatalogueItem {
  image_name: string;
  matched_product: Product;
  status: string;
}