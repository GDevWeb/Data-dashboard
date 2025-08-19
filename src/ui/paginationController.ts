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

export const {
  paginationContainer,
  prevButton,
  nextButton,
  selectItemsPerPage,
} = paginationDOMElements;

/* ***Pagination*** */
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
    createSelectElementsPerPage(paginationContainer, func);
  }
}

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
