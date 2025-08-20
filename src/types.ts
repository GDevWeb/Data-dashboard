export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: boolean;
}

export type SortKey = keyof Product;

export type Dir = "asc" | "desc";

export type typeState = {
  allData: Product[];
  visibleData: Product[];
  sortKey: SortKey;
  sortDir: Dir;
  searchText: string;
  searchCategory: string;
  searchStock: string;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
};
