import styled from "styled-components";

export const PostContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
`;

export const MarkdownH1 = styled.h1`
  margin-bottom: 0.5rem;
`;

export const MarkdownH3 = styled.h3`
  margin: 2rem 0px 1rem 0px;
`;

export const MarkdownH2 = styled.h2`
  margin: 2rem 0px 1rem 0px;
`;

// export const MarkdownParagraph = styled.p`
//   margin: 1rem 0;
// `;

export const MarkdownUL = styled.ul`
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.baseText};
  margin-left: 1.5rem;
`;

export const MarkdownOL = styled.ol`
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.baseText};
  margin-left: 1.5rem;
`;

export const MarkdownPre = styled.pre`
  background-color: ${(props) => props.theme.colors.baseInput};
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.baseText};
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
`;

export const MarkdownHr = styled.hr`
  margin: 1rem 0;
  border: 1px solid ${(props) => props.theme.colors.baseBorder};
`;
