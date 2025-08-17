import type { Product } from "../types";

const inputFilter: HTMLInputElement | null =
  document.querySelector("#inputFilter");

export function textFilter(products: Product[], query: string): Product[] {
  let filterQuery: string = inputFilter?.value.toLowerCase() || "";

  if (filterQuery.trim() !== "") {
    query = filterQuery;
  }

  const search = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  if (search.length === 0) {
    console.info("no result");
    query = "";
    return [];
  }

  console.log("search from textFilter", search);

  return search;
}

export function byCategory(products: Product[], category?: string): Product[] {
  if (category === "all" || category === "") {
    return products;
  }
  // 2. retrieve each value from these selects
  const filteredProducts = products.filter((p) => p.category === category);
  console.log("byCategory", category);
  console.log("filteredProducts", category);

  return filteredProducts;
}

export function byStock(
  products: Product[],
  value: true | false | "all"
): Product[] {
  return [];
}
