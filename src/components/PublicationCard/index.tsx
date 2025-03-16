import { PublicationCardContainer, PublicationCardHeader } from "./styles";
import { truncateText } from "../../utils/truncateText";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PublicationProps {
  title: string;
  body: string;
  created_at: string;
}

export function PublicationCard({ title, body, created_at }: PublicationProps) {
  return (
    <PublicationCardContainer>
      <PublicationCardHeader>
        <h3>{title}</h3>
        <span>{formatDistance(created_at, new Date(), { locale: ptBR })}</span>
      </PublicationCardHeader>
      <p>{truncateText(body)}</p>
    </PublicationCardContainer>
  );
}
