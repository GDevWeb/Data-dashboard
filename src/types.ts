export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  stock: boolean;
}

export type SortKey = keyof Product;
