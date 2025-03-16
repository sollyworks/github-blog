import {
  PublicationsContainer,
  PublicationsHeader,
  PublicationsList,
} from "./styles";
import { SearchInput } from "../SearchInput";
import { PublicationCard } from "../PublicationCard";

export function Publications() {
  return (
    <section style={{ padding: "4rem 1rem" }}>
      <PublicationsContainer>
        <PublicationsHeader>
          <h2>Publicações</h2>
          <span>10 Publicações</span>
        </PublicationsHeader>
        <SearchInput />
        <PublicationsList>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </PublicationsList>
      </PublicationsContainer>
    </section>
  );
}
