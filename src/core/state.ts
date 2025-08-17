import { sort } from "../logic/sort";
import type { Dir, Product, SortKey } from "../types";
import { renderTable } from "../ui/table";

export const appState = {
  allData: [] as Product[],
  visibleData: [] as Product[],
  sortKey: "id" as SortKey,
  sortDir: "asc" as Dir,
};

export function initState(products: Product[]) {
  appState.allData = products;
  updateSate({});
}

export function updateSate(
  partial: Partial<Pick<typeof appState, "sortKey" | "sortDir">>
) {
  Object.assign(appState, partial);
  let data = [...appState.allData];

  // sort - filter and pagination in next steps
  data = sort(data, appState.sortKey, appState.sortDir);

  appState.visibleData = data;

  const table = document.querySelector(
    "#productTable"
  ) as HTMLTableElement | null;
  if (table) renderTable(table, appState.visibleData);
}
