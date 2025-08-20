import {
  productTable,
  summaryCurrentContainer,
  summaryGlobalContainer,
} from "../dom";
import { byCategory, byStock, textFilter } from "../logic/filter";
import { paginate } from "../logic/paginate";
import { sort } from "../logic/sort";
import type { Dir, Product, SortKey } from "../types";
import {
  createPagination,
  navigatePagination,
  togglePaginationButton,
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

type typeState = typeof appState;

export function updateSate(
  partial: Partial<
    Pick<
      typeState,
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

  // Update pagination buttons
  togglePaginationButton({
    currentPage: appState.currentPage,
    totalPages: appState.totalPages,
  });

  // ***Summary***
  if (summaryGlobalContainer) {
    renderSummary(summaryGlobalContainer, appState.allData);
  }

  if (summaryCurrentContainer) {
    renderSummary(summaryCurrentContainer, appState.visibleData);
  }

  // ***Table***
  if (productTable) renderTable(productTable, appState.visibleData);
}

/* ***Pagination*** */
navigatePagination(appState);
