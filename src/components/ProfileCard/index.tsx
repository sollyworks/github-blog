import {
  ProfileCardContainer,
  ProfileCardImage,
  ProfileInfoHead,
  ProfileListLinks,
} from "./styles";
import avatar from "../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function ProfileCard() {
  return (
    <section style={{ padding: "0rem 1rem" }}>
      <ProfileCardContainer>
        <ProfileCardImage>
          <img src={avatar} alt="User Profile Picture" />
        </ProfileCardImage>
        <div>
          <ProfileInfoHead>
            <h2>Cameron Williamson</h2>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileInfoHead>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfileListLinks>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a href="#">cameronwll</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <a href="#">Rocketseat</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <a href="#">32 seguidores</a>
            </li>
          </ProfileListLinks>
        </div>
      </ProfileCardContainer>
    </section>
  );
}
