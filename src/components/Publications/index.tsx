import React from "react";
import {
  PublicationsContainer,
  PublicationsHeader,
  PublicationsList,
} from "./styles";
import { SearchInput } from "../SearchInput";
import { PublicationCard } from "../PublicationCard";
import { PublicationContext } from "../../contexts/PublicationContext";

export function Publications() {
  const { publications } = React.useContext(PublicationContext);

  return (
    <section style={{ padding: "4rem 1rem" }}>
      <PublicationsContainer>
        <PublicationsHeader>
          <h2>Publicações</h2>
          <span>{publications.length} Publicações</span>
        </PublicationsHeader>
        <SearchInput />
        <PublicationsList>
          {publications.map((publication) => (
            <PublicationCard key={publication.id} {...publication} />
          ))}
        </PublicationsList>
      </PublicationsContainer>
    </section>
  );
}
