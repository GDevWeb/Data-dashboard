/**
 * DOM elements.
 */

// create an appropriate interface the following domelements
export const appRoot = document.querySelector("#app") as HTMLDivElement | null;

/**
 * DOM elements related to the table.
 */
export const tableDOMElements = {
  productTable: document.querySelector("#productTable") as HTMLTableElement,
};

export const { productTable } = tableDOMElements;

/**
 * DOM elements related to filtering.
 */
export const filterDOMElements = {
  filterContainer: document.querySelector(
    "#filterContainer"
  ) as HTMLDivElement | null,
  inputFilter: document.querySelector(
    "#inputFilter"
  ) as HTMLInputElement | null,
  selectFilter: document.querySelector(
    "select#filterSelect"
  ) as HTMLSelectElement | null,
  selectFilterByStock: document.querySelector(
    "select#filterByStock"
  ) as HTMLSelectElement | null,
};

export const {
  filterContainer,
  inputFilter,
  selectFilter,
  selectFilterByStock,
} = filterDOMElements;

/**
 * DOM elements related to pagination.
 */
export const paginationDOMElements = {
  paginationContainer: document.querySelector(
    "#pagination-numbers"
  ) as HTMLElement | null,
  prevButton: document.querySelector(
    "#prev-button"
  ) as HTMLButtonElement | null,
  nextButton: document.querySelector(
    "#next-button"
  ) as HTMLButtonElement | null,
  paginationNumbers: document.querySelector("#pagination-numbers"),
  selectItemsPerPage: document.querySelector(
    "#selectItemsPerPage"
  ) as HTMLSelectElement,
};

/**
 * DOM elements related to summary.
 */
export const {
  paginationContainer,
  prevButton,
  nextButton,
  selectItemsPerPage,
} = paginationDOMElements;

export const summaryDOMElements = {
  summaryGlobalContainer: document.querySelector(
    "#summary-global-container"
  ) as HTMLDivElement | null,
  summaryCurrentContainer: document.querySelector(
    "#summary-current-container"
  ) as HTMLDivElement | null,
};

export const { summaryGlobalContainer, summaryCurrentContainer } =
  summaryDOMElements;
