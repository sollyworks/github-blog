import React from "react";
import {
  ProfileCardContainer,
  ProfileCardImage,
  ProfileInfoHead,
  ProfileListLinks,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { api } from "../../libs/axios";

interface User {
  html_url: string;
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string | null;
  followers: number;
}

export function ProfileCard() {
  const [user, setUser] = React.useState<User>({} as User);

  React.useEffect(() => {
    async function getUser() {
      const response = await api.get("/users/sollyworks");
      const user = await response.data;

      setUser(user);
    }

    getUser();
  }, []);

  return (
    <section style={{ padding: "0rem 1rem" }}>
      <ProfileCardContainer>
        <ProfileCardImage>
          <img src={user.avatar_url} alt="User Profile Picture" />
        </ProfileCardImage>
        <div>
          <ProfileInfoHead>
            <h2>{user.name}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileInfoHead>
          <p>{user.bio}</p>
          <ProfileListLinks>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <span>{user.login}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company ? user.company : "Nenhuma"}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers} seguidores</span>
            </li>
          </ProfileListLinks>
        </div>
      </ProfileCardContainer>
    </section>
  );
}
