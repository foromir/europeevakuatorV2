export function normalizeCityLabel(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ё/g, "е")
    .replace(/ї/g, "і")
    .replace(/ß/g, "ss")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
