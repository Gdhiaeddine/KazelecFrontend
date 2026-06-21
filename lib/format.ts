const months = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

export function formatDateFR(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  return `${day} ${months[month - 1]} ${year}`;
}
