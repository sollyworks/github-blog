import styled from "styled-components";

export const InputSearch = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.colors.baseBorder};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.baseText};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.blue};

    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
    opacity: 1;
    transition: all 0.2s ease;
  }
`;
