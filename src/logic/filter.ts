import type { Product } from "../types";

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

// export function byStock(
//   products: Product[],
//   value: true | false | "all"
// ): Product[] {
//   return [];
// }
