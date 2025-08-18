import { initState, updateSate } from "./core/state";
import products from "./data/products.json";
import { textFilter } from "./logic/filter";
import { createSelectOptions } from "./ui/selectOptionsContoller";

/* ***Init app */
initState(products);

updateSate({ sortKey: "price", sortDir: "asc" });

/* filter */
createSelectOptions(products);
textFilter(products, `inputFilter?.value || ""`);
