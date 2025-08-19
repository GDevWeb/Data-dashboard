import type { Product } from "../types";

export const summaryDOMElements = {
  summaryContainer: document.querySelector(
    "#summary-container"
  ) as HTMLDivElement | null,
};

const { summaryContainer } = summaryDOMElements;

/**
 * Renders a summary of product data, including total references, average price, price range, and out-of-stock count.
 * @param data The array of products to summarize.
 */
export function renderSummary(data: Product[]): void {
  if (!summaryContainer) return;

  if (data.length === 0) {
    summaryContainer.innerHTML = "No data to summarize";
    return;
  }

  // total references
  const totalReferences = data.length;
  const outPutTotalCount = document.createElement("output");
  outPutTotalCount.innerHTML = `<strong class="text-shadow-lg">Total references<strong> <span class="text-blue-500 text-lg font-bold">${totalReferences.toString()}</span>`;

  // averagePrice
  const averagePrice =
    data.reduce((acc, product) => acc + product.price, 0) / data.length;
  const outPutAveragePrice = document.createElement("output");
  outPutAveragePrice.innerHTML = `<strong class="text-shadow-lg">Average price<strong> <span class="text-blue-500 text-lg font-bold">${averagePrice.toFixed(
    2
  )}€</span>`;

  // min/max price
  const minPrice = Math.min(...data.map((product) => product.price));
  const maxPrice = Math.max(...data.map((product) => product.price));

  const outPutMinMaxPrice = document.createElement("output");
  outPutMinMaxPrice.innerHTML = `<strong class="text-shadow-lg">Price Range<strong> <span class="text-blue-500 text-lg font-bold">${minPrice.toFixed(
    2
  )}€ - ${maxPrice.toFixed(2)}€</span>`;

  // outOfStock
  const outOfStock = data.filter((product) => product.stock === false).length;
  const outOfStockElement = document.createElement("output");
  outOfStockElement.innerHTML = `<strong class="text-shadow-lg">Out of stock<strong> <span class="text-red-500 text-lg font-bold">${outOfStock.toString()}</span>`;

  console.log(outOfStock);

  // Render
  summaryContainer.innerHTML = "";
  summaryContainer.appendChild(outPutTotalCount);
  summaryContainer.appendChild(outPutMinMaxPrice);
  summaryContainer.appendChild(outPutAveragePrice);
  summaryContainer.appendChild(outOfStockElement);
}
