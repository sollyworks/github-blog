import styled from "styled-components";

export const PublicationCardContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.basePost};
`;

export const PublicationCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h3 {
    width: 100%;
    max-width: 280px;
    font-size: 1.25rem;
  }

  span {
    font-size: 0.875rem;
    flex-shrink: 0;
  }
`;
