export function sort<T>(
  arr: readonly T[],
  key: keyof T,
  dir: "asc" | "desc"
): T[] {
  const m = dir === "asc" ? 1 : -1;

  return [...arr].sort((a, b) => {
    const av = a[key] as unknown;
    const bv = b[key] as unknown;

    if (typeof av === "string" && typeof bv === "string")
      return av.localeCompare(bv) * m;
    if (typeof av === "number" && typeof bv === "number") return (av - bv) * m;
    if (typeof av === "boolean" && typeof bv === "boolean")
      return (Number(av) - Number(bv)) * m;
    return 0;
  });
}
