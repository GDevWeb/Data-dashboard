import { textFilter } from "../logic/filter";
import { sort } from "../logic/sort";
import type { Dir, Product, SortKey } from "../types";
import { renderTable } from "../ui/table";
import { debounce } from "./utils";

const inputFilter: HTMLInputElement | null =
  document.querySelector("#inputFilter");

export const appState = {
  allData: [] as Product[],
  visibleData: [] as Product[],
  sortKey: "id" as SortKey,
  sortDir: "asc" as Dir,
  searchText: "",
};

export function initState(products: Product[]) {
  appState.allData = products;
  updateSate({});
}

export function updateSate(
  partial: Partial<Pick<typeof appState, "sortKey" | "sortDir" | "searchText">>
) {
  Object.assign(appState, partial);
  let data = [...appState.allData];

  // sort - filter and pagination in next steps

  // 1. set on filter
  data = textFilter(data, appState.searchText);

  // 2. set on sort
  data = sort(data, appState.sortKey, appState.sortDir);

  appState.visibleData = data;

  const table = document.querySelector(
    "#productTable"
  ) as HTMLTableElement | null;
  if (table) renderTable(table, appState.visibleData);
}

inputFilter?.addEventListener(
  "input",
  debounce(() => {
    updateSate({ searchText: inputFilter.value.toLowerCase() || "" });
  }, 500)
);
