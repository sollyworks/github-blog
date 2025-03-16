import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  background-color: ${(props) => props.theme.colors.baseProfile};
  border-radius: 10px;
  box-shadow: 0 2 28px rgba(0, 0, 0, 0.2);
  margin-top: -80px;

  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ProfileCardImage = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 148px;
  height: 148px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileInfoHead = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 0;

    svg {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

export const ProfileListLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      color: ${(props) => props.theme.colors.baseSubtitle};
      font-size: 1rem;
      text-transform: none;
    }
  }
`;
