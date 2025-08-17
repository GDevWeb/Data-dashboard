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

  if (!query) {
    console.info("no result");
    return products;
  }

  console.log("search from textFilter", search);

  return search;
}
