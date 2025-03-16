import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: string) {
  const parsedDate = parseISO(date);
  return formatDistanceToNow(parsedDate, { locale: ptBR, addSuffix: true });
}
