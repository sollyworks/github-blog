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

  React.useEffect(() => {
    getPublications();
  }, []);

  return (
    <PublicationContext.Provider value={{ publications, setPublications }}>
      {children}
    </PublicationContext.Provider>
  );
}
