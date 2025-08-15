export function sort<T>(arr: T[], key: keyof T, dir: "asc" | "desc"): T[] {
  const sortedArray = [...arr].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) {
      return dir === "asc" ? -1 : 1;
    } else if (aValue > bValue) {
      return dir === "asc" ? 1 : -1;
    }
    return 0;
  });
  console.info("sortedArray", sortedArray);

  return sortedArray;
}
