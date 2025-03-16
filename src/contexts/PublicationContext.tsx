import React from "react";
import { api } from "../libs/axios";

interface Publication {
  id: number;
  title: string;
  body: string;
  created_at: string;
  number: number;
}

interface PublicationContextType {
  publications: Publication[];
  setPublications: (publications: Publication[]) => void;
  searchPublications: (search: string) => void;
}

export const PublicationContext = React.createContext(
  {} as PublicationContextType
);

export function PublicationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [publications, setPublications] = React.useState([] as Publication[]);

  async function getPublications() {
    const response = await api.get("/repos/sollyworks/github-blog/issues");
    const publications = await response.data;

    setPublications(publications);
  }

  async function searchPublications(search: string) {
    const response = await api.get("/search/issues", {
      params: {
        q: `${search} in:title,body repo:sollyworks/github-blog`,
      },
    });
    const publications = await response.data;
    console.log(publications.items);

    setPublications(publications.items);
  }

  React.useEffect(() => {
    getPublications();
  }, []);

  return (
    <PublicationContext.Provider
      value={{ publications, setPublications, searchPublications }}
    >
      {children}
    </PublicationContext.Provider>
  );
}
