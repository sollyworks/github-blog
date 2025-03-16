export function truncateText(text: string) {
  const maxLength = 200;

  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }

  return text;
}
