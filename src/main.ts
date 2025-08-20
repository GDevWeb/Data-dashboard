import { initState, updateSate } from "./core/state";
import { debounce } from "./core/utils";
import products from "./data/products.json";
import { inputFilter, selectFilter, selectFilterByStock } from "./dom";
import { createSelectOptions } from "./ui/selectOptionsController";

/* ***Filter*** */
createSelectOptions(products);

function setUpEventListeners() {
  inputFilter?.addEventListener(
    "input",
    debounce((e: Event) => {
      updateSate({ searchText: (e.target as HTMLInputElement).value });
    })
  );

  selectFilter?.addEventListener("change", (e: Event) => {
    updateSate({ searchCategory: (e.target as HTMLSelectElement).value });
  });

  selectFilterByStock?.addEventListener("change", (e: Event) => {
    updateSate({ searchStock: (e.target as HTMLSelectElement).value });
  });
}

/* ***Init app */
initState(products);
updateSate({ sortKey: "price", sortDir: "asc" });

setUpEventListeners();
