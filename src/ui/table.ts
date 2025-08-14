import type { Product } from "../types";

export function renderTable(
  container: HTMLTableElement,
  data: Product[]
): void {
  try {
    if (data.length === 0) {
      container.innerHTML = "No product available for the moment";
    }

    if (container && data) {
      console.log("renderTable running");
      container.innerHTML = `
        <thead class="bg-gray-50">
          <tr class="text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
            <th px-6 py-3>ID</th>
            <th px-6 py-3>Name</th>
            <th px-6 py-3>Category</th>
            <th px-6 py-3>Price</th>
            <th px-6 py-3>Rating</th>
            <th px-6 py-3>Stock</th>
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
  } catch (error) {
    console.error(error, "Error while rendering table");
  }
}
