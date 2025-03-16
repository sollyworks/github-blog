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

export function PostInfoCard() {
  return (
    <PostInfoSection>
      <PostInfoContainer>
        <PostInfoHeader>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </a>
          <a href="#">
            Ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostInfoHeader>
        <h1>PostInfoCard</h1>
        <PostLinkInfos>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </li>
        </PostLinkInfos>
      </PostInfoContainer>
    </PostInfoSection>
  );
}
