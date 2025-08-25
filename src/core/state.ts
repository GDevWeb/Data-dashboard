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
    sortKey,
    sortDir,
    searchText,
    searchCategory,
    searchStock,
    currentPage,
    itemsPerPage,
    totalPages,
  } = appState;

  // ***Filter and Sort***
  const filteredAndSortedData = applyFilterAndSort(
    data,
    searchText,
    searchCategory,
    searchStock,
    sortKey,
    sortDir
  );

  // ***Pagination***
  handlePagination(
    filteredAndSortedData,
    currentPage,
    itemsPerPage,
    totalPages
  );

  // ***Summary***
  handleSummaryView(filteredAndSortedData, appState.visibleData);

  // ***Table***
  if (productTable) renderTable(productTable, appState.visibleData);
}

/* ***Filter and Sort */
/**
 * Applies filters and sorting to the product data.
 * @param data The array of products to filter and sort.
 * @param searchText The text to filter by (name and category).
 * @param searchCategory The category to filter by.
 * @param searchStock The stock status to filter by ('true', 'false', or '').
 * @param sortKey The key to sort by.
 * @param sortDir The direction to sort by ('asc' or 'desc').
 * @returns The filtered and sorted array of products.
 */
function applyFilterAndSort(
  data: Product[],
  searchText: string,
  searchCategory: string,
  searchStock: string,
  sortKey: SortKey,
  sortDir: Dir
) {
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
  return data;
}

/* ***Summary View*** */
/**
 * Handles the rendering of summary information for both global and currently visible data.
 * @param allData The array of all products.
 * @param visibleData The array of currently visible products.
 */

function handleSummaryView(
  filteredAndSortedData: Product[],
  visibleData: Product[]
) {
  if (summaryGlobalContainer) {
    renderSummary(summaryGlobalContainer, filteredAndSortedData);
  }

  if (summaryCurrentContainer) {
    renderSummary(summaryCurrentContainer, visibleData);
  }
}

/* ***Pagination*** */
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

navigatePagination(appState);
