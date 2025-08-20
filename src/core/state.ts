import {
  productTable,
  summaryCurrentContainer,
  summaryGlobalContainer,
} from "../dom";
import { byCategory, byStock, textFilter } from "../logic/filter";
import { paginate } from "../logic/paginate";
import { sort } from "../logic/sort";
import type { Dir, Product, SortKey, typeState } from "../types";
import {
  createPagination,
  navigatePagination,
  togglePaginationButton,
} from "../ui/paginationController";
import { renderSummary } from "../ui/summary";
import { renderTable } from "../ui/table";

export const appState: typeState = {
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
  createPagination(appState, updateSate);
  updateSate({});
}

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

  const {
    allData,
    visibleData,
    sortKey,
    sortDir,
    searchText,
    searchCategory,
    searchStock,
    currentPage,
    itemsPerPage,
    totalPages,
  } = appState;

  // ***Filter***
  // 1. set on filter
  applyFilterAndSort();

  function applyFilterAndSort() {
    // 1. by text (name and category)
    data = textFilter(data, searchText);

    // 2. by category
    data = byCategory(data, searchCategory);

    // 3. by stock
    let stockValue: true | false | "" = "";

    if (searchStock === "true") stockValue = true;
    else if (searchStock === "false") stockValue = false;

    data = byStock(data, stockValue);

    // 4. set on sort
    data = sort(data, sortKey, sortDir);
  }

  // ***5.pagination***
  handlePagination(data, currentPage, itemsPerPage, totalPages);

  // ***Summary***
  if (summaryGlobalContainer) {
    renderSummary(summaryGlobalContainer, allData);
  }

  if (summaryCurrentContainer) {
    renderSummary(summaryCurrentContainer, visibleData);
  }

  // ***Table***
  if (productTable) renderTable(productTable, visibleData);
}

/* ***Pagination*** */
navigatePagination(appState);

/**
 * Handles pagination logic, including updating visible data, total pages,
 * creating pagination buttons, and toggling pagination button states.
 * @param data The array of products to paginate.
 * @param currentPage The current page number.
 * @param itemsPerPage The number of items to display per page.
 * @param totalPages The total number of pages.
 */
function handlePagination(
  data: Product[],
  currentPage: number,
  itemsPerPage: number,
  totalPages: number
) {
  appState.visibleData = paginate(data, currentPage, itemsPerPage);

  appState.totalPages = Math.ceil(data.length / itemsPerPage);
  createPagination(appState, updateSate);

  // Update pagination buttons
  togglePaginationButton({
    currentPage,
    totalPages,
  });
}
