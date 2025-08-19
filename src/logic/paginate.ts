import type { Product } from "../types";

/**
 * Paginates an array of products.
 * @param products The array of products to paginate.
 * @param currentPage The current page number (defaults to 1).
 * @param itemsPerPage The number of items to display per page (defaults to 10).
 * @returns An array containing the products for the current page.
 */

export function paginate(
  products: Product[],
  currentPage: number = 1,
  itemsPerPage: number = 10
): Product[] {
  itemsPerPage = Number(itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return products.slice(startIndex, endIndex);

  /* limit by group of 10 and next button */
}
