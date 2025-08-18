// paginationController.Ts

export const paginationDOMElements = {
  prevButton: document.querySelector(
    "#prev-button"
  ) as HTMLButtonElement | null,
  nextButton: document.querySelector(
    "#next-button"
  ) as HTMLButtonElement | null,
  paginationNumbers: document.querySelector("#pagination-numbers"),
};

/* ***Pagination*** */
export function createPagination(
  totalPages: number,
  state: Object,
  func: Function
) {
  const paginationContainer = document.querySelector("#pagination-numbers");

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
