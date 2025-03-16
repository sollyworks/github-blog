import React from "react";
import { PostInfoCard } from "../../components/PostInfoCard/index";
import { PostContent } from "../../components/PostContent/index";
import { api } from "../../libs/axios";
import { useParams } from "react-router";

export interface Publication {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Post() {
  const [publication, setPublication] = React.useState({} as Publication);
  const { id } = useParams();

  const getPublication = React.useCallback(async () => {
    const response = await api.get(
      `/repos/sollyworks/github-blog/issues/${id}`
    );
    const publication = await response.data;

    setPublication(publication);
  }, [id]);

  React.useEffect(() => {
    getPublication();
  }, [getPublication]);

  return (
    <>
      <PostInfoCard publication={publication} />
      <PostContent markdown={publication.body} />
    </>
  );
}
