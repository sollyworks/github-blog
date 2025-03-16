import styled from "styled-components";
import leftBackground from "../../assets/header-background-left.svg";
import rightBackground from "../../assets/header-background-right.svg";

export const HeaderSection = styled.section`
  width: 100%;
  height: 18.5rem;

  background-image: url("${leftBackground}"), url("${rightBackground}");
  background-repeat: no-repeat, no-repeat;
  background-position: left, right;
  background-size: 400px, 400px;
  background-color: ${(props) => props.theme.colors.baseProfile};
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem;

  img {
    width: 148px;
    margin: 0 auto;
    margin-top: 48px;
  }
`;
