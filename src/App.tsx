import { GlobalTheme } from "./styles/GlobaTheme";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme/theme";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      <Header />
    </ThemeProvider>
  );
}
