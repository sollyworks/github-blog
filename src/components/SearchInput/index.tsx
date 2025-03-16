import React from "react";
import { InputSearch } from "./styles";
import { PublicationContext } from "../../contexts/PublicationContext";

export function SearchInput() {
  const [search, setSearch] = React.useState("");
  const { searchPublications } = React.useContext(PublicationContext);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (search.length > 0) searchPublications(search);
  };

  return (
    <form onSubmit={handleSearch}>
      <InputSearch
        name="search"
        type="text"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </form>
  );
}
