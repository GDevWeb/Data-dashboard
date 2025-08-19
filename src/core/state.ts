import { byCategory, byStock, textFilter } from "../logic/filter";
import { paginate } from "../logic/paginate";
import { sort } from "../logic/sort";
import type { Dir, Product, SortKey } from "../types";
import {
  createPagination,
  nextButton,
  prevButton,
} from "../ui/paginationController";
import { renderSummary } from "../ui/summary";
import { renderTable } from "../ui/table";

export const appState = {
  allData: [] as Product[],
  visibleData: [] as Product[],
  sortKey: "id" as SortKey,
  sortDir: "asc" as Dir,
  searchText: "",
  searchCategory: "",
  searchStock: "",
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 0,
};

export function initState(products: Product[]) {
  appState.allData = products;
  appState.totalPages = Math.ceil(
    appState.allData.length / appState.itemsPerPage
  );
  createPagination(appState.totalPages, appState.currentPage, updateSate);
  updateSate({});
}

export function updateSate(
  partial: Partial<
    Pick<
      typeof appState,
      | "sortKey"
      | "sortDir"
      | "searchText"
      | "searchCategory"
      | "searchStock"
      | "currentPage"
      | "itemsPerPage"
    >
  >
) {
  Object.assign(appState, partial);
  let data = [...appState.allData];

  // 1. set on filter
  data = textFilter(data, appState.searchText);

  // 2. by category
  data = byCategory(data, appState.searchCategory);
  console.log("From state - data = byCategory", data);

  let stockValue: true | false | "" = "";

  if (appState.searchStock === "true") stockValue = true;
  else if (appState.searchStock === "false") stockValue = false;

  data = byStock(data, stockValue);

  // 4. set on sort
  data = sort(data, appState.sortKey, appState.sortDir);

  // 5.pagination
  appState.visibleData = paginate(
    data,
    appState.currentPage,
    appState.itemsPerPage
  );

  appState.totalPages = Math.ceil(data.length / appState.itemsPerPage);
  createPagination(appState.totalPages, appState.currentPage, updateSate);

  // *** Extract logic***
  if (prevButton) {
    prevButton.disabled = appState.currentPage <= 1;
  }

  if (nextButton) {
    nextButton.disabled = appState.currentPage >= appState.totalPages;
  }

  if (appState.totalPages <= 1) {
    prevButton?.classList.add("disabled");
    nextButton?.classList.add("disabled");
  } else {
    prevButton?.classList.remove("disabled");
    nextButton?.classList.remove("disabled");
  }

  // Summary
  renderSummary(appState.allData);

  // ***Table***
  const table = document.querySelector(
    "#productTable"
  ) as HTMLTableElement | null;

  if (table) renderTable(table, appState.visibleData);
}

/* ***Pagination*** */
prevButton?.addEventListener("click", () => {
  if (appState.currentPage > 1) {
    updateSate({ currentPage: appState.currentPage - 1 });
  }
});

nextButton?.addEventListener("click", () => {
  if (appState.currentPage < appState.totalPages) {
    updateSate({ currentPage: appState.currentPage + 1 });
  }
});
