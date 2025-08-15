import type { Product, SortKey } from "../types";

export function state(
  data: Product[],
  sortKey: SortKey,
  sortDir: "asc" | "desc"
): void {
  console.log(data, sortKey, sortDir);
}

/* next session centralize state  */
