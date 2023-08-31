export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-ES", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}