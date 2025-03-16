import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background-color: ${(props) => props.theme.colors.baseBackground};
        font-family: ${(props) => props.theme.fonts.family};
        line-height: 160%;
      }

      h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.baseTitle};
      }

      p {
        color: ${(props) => props.theme.colors.baseText};
      }
      
      span {
        color: ${(props) => props.theme.colors.baseSpan};
      }

      label {
        color: ${(props) => props.theme.colors.baseLabel};
      }

      input, textarea, select {
        background-color: ${(props) => props.theme.colors.baseInput};
      }

      a {
        color: ${(props) => props.theme.colors.blue};
        font-size: .75rem;
        text-transform: uppercase;
        }
`;
