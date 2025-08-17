import type { Product } from "../types";

const selectFilter: HTMLSelectElement | null = document.querySelector(
  "select#filterSelect"
);

export function createSelectOptions(products: Product[]): void {
  const categories = [
    ...new Set(
      products
        .map((product) => product.category)
        .sort((a, b) => a.localeCompare(b))
    ),
  ];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.toLowerCase();
    option.textContent = category;
    selectFilter?.appendChild(option);
  });
}
