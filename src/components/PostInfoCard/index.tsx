import {
  PostInfoContainer,
  PostInfoSection,
  PostInfoHeader,
  PostLinkInfos,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faComment,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Publication } from "../../pages/Post";
import { formatDate } from "../../utils/formatDate";

export function PostInfoCard({ publication }: { publication: Publication }) {
  if (!publication) return null;
  return (
    <PostInfoSection>
      <PostInfoContainer>
        <PostInfoHeader>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </a>
          <a
            href={publication.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostInfoHeader>
        <h1>{publication.title}</h1>
        <PostLinkInfos>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{publication.user?.login}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {publication.created_at && formatDate(publication.created_at)}
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            <span>{publication.comments} comentários</span>
          </li>
        </PostLinkInfos>
      </PostInfoContainer>
    </PostInfoSection>
  );
}
