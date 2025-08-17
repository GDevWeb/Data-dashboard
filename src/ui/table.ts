import { sort } from "../logic/sort";
import type { Product } from "../types";

export function renderTable(
  container: HTMLTableElement,
  data: Product[]
): void {
  try {
    if (data.length === 0) {
      container.innerHTML = "No product available for the moment";
      return;
    }

    if (container && data) {
      console.log("renderTable running");
      container.innerHTML = `
        <thead class="bg-gray-50">
          <tr class="text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
            <th data-filter="id" class="px-6 py-3">ID</th>
            <th data-filter="name" class="px-6 py-3">Name
            </th>
            <th data-filter="category" class="px-6 py-3">Category
            </th>
            <th data-filter="price" class="px-6 py-3">Price
              <button data-sort-price="asc" type="button" class="sort-button cursor-pointer" data-sort-key="price" data-sort-dir="asc" >▲</button>
              <button data-sort-price="desc" type="button" class="sort-button cursor-pointer" data-sort-key="price" data-sort-dir="desc">▼</button>
            </th>
            <th data-filter="rating" class="px-6 py-3">Rating
              <button data-sort-rating="asc" type="button" class="sort-button cursor-pointer" data-sort-key="rating" data-sort-dir="asc">▲</button>
              <button data-sort-rating="desc" type="button" class="sort-button cursor-pointer" data-sort-key="rating" data-sort-dir="desc">▼</button>
            </th>
            <th data-filter="stock" class="px-6 py-3">Stock
            </th>
          </tr>
        </thead>
        <tbody>
          ${data
            .map(
              (item) => `
            <tr class="hover:bg-gray-100">
              <td class="text-center px-6 py-4 whitespace-nowrap">${
                item.id
              }</td>
              <td class="text-center px-6 py-4 whitespace-nowrap">${
                item.name
              }</td>
              <td class="text-center px-6 py-4 whitespace-nowrap">${
                item.category
              }</td>
              <td class="text-center px-6 py-4 whitespace-nowrap">${
                item.price.toFixed(2) + "€"
              }</td>
              <td class="text-center px-6 py-4 whitespace-nowrap">${
                item.rating
              }</td>
              <td class="text-center px-6 py-4 whitespace-nowrap">${
                item.stock
                  ? `<span class="text-green-500">available</span>`
                  : `<span class="text-red-500">out of stock</span>`
              }</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      `;
    }

    container.querySelectorAll(".sort-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const target = event.target as HTMLButtonElement;
        const sortKey = target.dataset.sortKey as keyof Product;
        const sortDir = target.dataset.sortDir as "asc" | "desc";

        const sortedData = sort(data, sortKey, sortDir);
        renderTable(container, sortedData);
      });
    });
  } catch (error) {
    console.error(error, "Error while rendering table");
  }
}
