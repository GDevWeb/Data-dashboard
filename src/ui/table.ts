import type { Product } from "../types";

export function renderTable(
  container: HTMLTableElement,
  data: Product[]
): void {
  try {
    if (container && data) {
      console.log("renderTable running");
    }
  } catch (error) {
    console.error(error, "Error while rendering table");
  }
}

/* test */
