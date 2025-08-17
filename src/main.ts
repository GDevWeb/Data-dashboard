import { initState, updateSate } from "./core/state";
import products from "./data/products.json";

/* ***Init app */
initState(products);

updateSate({ sortKey: "price", sortDir: "asc" });
