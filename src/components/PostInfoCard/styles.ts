import styled from "styled-components";

export const PostInfoSection = styled.section`
  width: 100%;
  padding: 0px 1rem;
`;

export const PostInfoContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  background-color: ${(props) => props.theme.colors.baseProfile};
  border-radius: 10px;
  box-shadow: 0 2 28px rgba(0, 0, 0, 0.2);
  margin-top: -80px;
`;

export const PostInfoHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 0;
    letter-spacing: 1.5px;
  }
`;

export const PostLinkInfos = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 1rem;
      text-transform: none;
      line-height: 0;
    }
  }
`;
