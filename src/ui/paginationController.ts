import { updateSate } from "../core/state";
import { nextButton, paginationContainer, prevButton } from "../dom";

/* ***Pagination*** */
/**
 * Creates pagination buttons and appends them to the pagination container.
 * @param totalPages The total number of pages.
 * @param state The current page number.
 * @param func The function to call when a page button is clicked.
 */

export function createPagination(
  totalPages: number,
  state: Object,
  func: (partial: { currentPage: number }) => void
) {
  if (paginationContainer) {
    paginationContainer.innerHTML = "";

    if (totalPages === 1) {
      return;
    }

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.classList.add("pageButton");
      pageButton.textContent = i.toString();
      pageButton.classList.add("pagination-button");

      if (i === state) {
        pageButton.classList.add("active");
      }

      pageButton.addEventListener("click", () => {
        func({ currentPage: i });
      });
      paginationContainer.appendChild(pageButton);
    }
  }
}

/**
 * Creates a select element for choosing the number of items per page and appends it to the pagination container.
 * @param paginationContainer The HTML element to which the select element will be appended.
 * @param obj The function to call when the select element's value changes.
 */

export function createSelectElementsPerPage(
  paginationContainer: HTMLElement,
  obj: (partial: { itemsPerPage: number; currentPage: number }) => void
) {
  const optionValues = [10, 15, 20];

  const selectElement = document.createElement("select");
  selectElement.id = "selectItemsPerPage";
  selectElement.classList.add();
  optionValues.forEach((value) => {
    const option = document.createElement("option");

    if (value === 10) {
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.innerHTML = "Items per page";
      defaultOption.selected = true;
      defaultOption.disabled = true;
      selectElement.appendChild(defaultOption);
    }

    option.value = value.toString();
    option.innerHTML = value.toString();
    selectElement.appendChild(option);
    paginationContainer.appendChild(selectElement);
  });

  selectElement.addEventListener("change", () => {
    obj({
      itemsPerPage: Number(selectElement.value),
      currentPage: 1,
    });
  });

  return selectElement;
}

/**
 * Toggles the disabled state of the previous and next pagination buttons
 * based on the current page and total number of pages.
 * @param state An object containing the current page number and total number of pages.
 */

export function togglePaginationButton(state: {
  currentPage: number;
  totalPages: number;
}) {
  if (prevButton) {
    prevButton.disabled = state.currentPage <= 1;
  }

  if (nextButton) {
    nextButton.disabled = state.currentPage >= state.totalPages;
  }

  if (state.totalPages <= 1) {
    prevButton?.classList.add("disabled");
    nextButton?.classList.add("disabled");
  } else {
    prevButton?.classList.remove("disabled");
    nextButton?.classList.remove("disabled");
  }
}

/**
 * Handles navigation for pagination buttons (previous and next).
 * @param state An object containing the current page number and total number of pages.
 */

export function navigatePagination(state: {
  currentPage: number;
  totalPages: number;
}) {
  prevButton?.addEventListener("click", () => {
    if (state.currentPage > 1) {
      updateSate({ currentPage: state.currentPage - 1 });
    }
  });

  nextButton?.addEventListener("click", () => {
    if (state.currentPage < state.totalPages) {
      updateSate({ currentPage: state.currentPage + 1 });
    }
  });
}
