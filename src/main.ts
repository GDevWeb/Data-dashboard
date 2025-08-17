import { initState, updateSate } from "./core/state";
import products from "./data/products.json";
import { textFilter } from "./logic/filter";

/* ***Init app */
initState(products);

updateSate({ sortKey: "price", sortDir: "asc" });

/* filter */
textFilter(products, `inputFilter?.value || ""`);
