import { updateSate } from "../core/state";
import { debounce } from "../core/utils";
import type { Product } from "../types";
import { createSelectElementsPerPage } from "../ui/paginationController";

/**
 * DOM elements related to filtering.
 */

export const filterDOMElements = {
  filterContainer: document.querySelector(
    "#filterContainer"
  ) as HTMLDivElement | null,
  inputFilter: document.querySelector(
    "#inputFilter"
  ) as HTMLInputElement | null,
  selectFilter: document.querySelector(
    "select#filterSelect"
  ) as HTMLSelectElement | null,
  selectFilterByStock: document.querySelector(
    "select#filterByStock"
  ) as HTMLSelectElement | null,
};

export const {
  filterContainer,
  inputFilter,
  selectFilter,
  selectFilterByStock,
} = filterDOMElements;

/**
 * Filters an array of products based on a text query, matching product name or category.
 * @param products The array of products to filter.
 * @param query The text query to match.
 * @returns A new array containing products that match the query.
 */

export function textFilter(products: Product[], query: string): Product[] {
  if (query.trim() === "") {
    return products;
  }

  const search = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  if (search.length === 0) {
    return products;
  }

  return search;
}
/**
 * Filters an array of products by category.
 * @param products The array of products to filter.
 * @param category The category to filter by. If "all" or empty, no category filter is applied.
 * @returns A new array containing products that match the specified category.
 */
export function byCategory(products: Product[], category?: string): Product[] {
  if (category === "all" || category === "") {
    return products;
  }

  return products.filter(
    (p) => p.category.toLowerCase() === category?.toLowerCase()
  );
}
/**
 * Filters an array of products by their stock status.
 * @param products The array of products to filter.
 * @param value The stock status to filter by (true for in stock, false for out of stock, "" for no filter).
 * @returns A new array containing products that match the specified stock status.
 */
export function byStock(
  products: Product[],
  value: true | false | ""
): Product[] {
  if (value === "") {
    return products;
  }

  return products.filter((product) => product.stock === value);
}

/**
 * Event listeners for filter elements.
 */
if (filterContainer) createSelectElementsPerPage(filterContainer, updateSate);

inputFilter?.addEventListener(
  "input",
  debounce(() => {
    updateSate({ searchText: inputFilter?.value.toLowerCase() || "" });
  }, 500)
);

selectFilter?.addEventListener(
  "change",
  debounce(() => {
    updateSate({ searchCategory: selectFilter?.value || "" });
  }, 0)
);

selectFilterByStock?.addEventListener(
  "change",
  debounce(() => {
    updateSate({ searchStock: selectFilterByStock?.value || "" });
  }, 0)
);
