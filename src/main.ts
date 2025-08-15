import { state } from "./core/state";
import products from "./data/products.json";
import { sort } from "./logic/sort";
import type { Product } from "./types";
import { renderTable } from "./ui/table";

const productList: Product[] = products;
type LoadProducts = Product[] | [];

export function loadProducts(list: Product[]): LoadProducts {
  return list.length > 0 ? list : [];
}

/* ***init*** */
const loadedProducts = loadProducts(productList);

/* ***DOMElements*** */
const productTable: HTMLTableElement | null =
  document.querySelector("#productTable");

if (productTable) {
  renderTable(productTable, loadedProducts);
}

sort(loadedProducts, "price", "asc");
state(loadedProducts, "price", "asc");
