export default function normalizeString(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]|_/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}
