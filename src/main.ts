import products from "./data/products.json";
import "./style.css";
import type { Product } from "./types";

const productList: Product[] = products;

function loadProducts(list: Product[]): Product[] | [] | string {
  try {
    if (list.length === 0) {
      return [];
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
