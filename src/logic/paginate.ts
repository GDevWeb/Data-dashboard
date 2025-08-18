import type { Product } from "../types";

export function paginate(
  products: Product[],
  currentPage: number = 1,
  itemsPerPage: number = 10
): Product[] {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return products.slice(startIndex, endIndex);
}
