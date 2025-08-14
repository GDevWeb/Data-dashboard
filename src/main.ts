import products from "./data/products.json";
import type { Product } from "./types";
import { renderTable } from "./ui/table";

const productList: Product[] = products;

const productTable: HTMLTableElement | null =
  document.querySelector("#productTable");

export function loadProducts(list: Product[]): Product[] | [] | string {
  try {
    if (list.length === 0) {
      return [];
    }
    if (productTable) {
      renderTable(productTable, list);
    }
    console.log(list);
    return list;
  } catch (error) {
    console.error(error, "Error while loading product list");
  } finally {
    console.log("Loading product list completed");
    return list.length > 0 ? list : [];
  }
}
loadProducts(productList);
