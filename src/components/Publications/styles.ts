import styled from "styled-components";

export const PublicationsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const PublicationsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  span {
    font-size: 0.875rem;
  }
`;

export const PublicationsList = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
