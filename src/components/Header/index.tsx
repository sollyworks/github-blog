import { HeaderSection, HeaderContainer } from "./styles";
import logo from "../../assets/logo-github-blog.svg";

export function Header() {
  return (
    <HeaderSection>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>
    </HeaderSection>
  );
}
