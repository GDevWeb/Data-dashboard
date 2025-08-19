import type { Product } from "../types";

export const filterDOMElements = {
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

export const { inputFilter, selectFilter, selectFilterByStock } =
  filterDOMElements;

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

  console.log("search from textFilter", search);

  return search;
}

export function byCategory(products: Product[], category?: string): Product[] {
  if (category === "all" || category === "") {
    return products;
  }

  return products.filter(
    (p) => p.category.toLowerCase() === category?.toLowerCase()
  );
}

export function byStock(
  products: Product[],
  value: true | false | ""
): Product[] {
  if (value === "") {
    return products;
  }
  console.log(value);

  return products.filter((product) => product.stock === value);
}
