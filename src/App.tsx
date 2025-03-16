import { GlobalTheme } from "./styles/GlobaTheme";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme/theme";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      <h1>GitHub Blog</h1>
    </ThemeProvider>
  );
}
