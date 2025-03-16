import React from "react";
import {
  PublicationsContainer,
  PublicationsHeader,
  PublicationsList,
} from "./styles";
import { SearchInput } from "../SearchInput";
import { PublicationCard } from "../PublicationCard";
import { api } from "../../libs/axios";

interface Publication {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Publications() {
  const [publications, setPublications] = React.useState([] as Publication[]);

  React.useEffect(() => {
    async function getPublications() {
      const response = await api.get("/repos/sollyworks/github-blog/issues");
      const publications = await response.data;

      setPublications(publications);
    }

    getPublications();
  }, []);

  return (
    <section style={{ padding: "4rem 1rem" }}>
      <PublicationsContainer>
        <PublicationsHeader>
          <h2>Publicações</h2>
          <span>10 Publicações</span>
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
