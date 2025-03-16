import { PublicationCardContainer, PublicationCardHeader } from "./styles";
import { truncateText } from "../../utils/truncateText";
import { formatDate } from "../../utils/formatDate";

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
        <span>{formatDate(created_at)}</span>
      </PublicationCardHeader>
      <p>{truncateText(body)}</p>
    </PublicationCardContainer>
  );
}
