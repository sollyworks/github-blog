import { GlobalTheme } from "./styles/GlobaTheme";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme/theme";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { Publications } from "./components/Publications";
import { PublicationProvider } from "./contexts/PublicationContext";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      <Header />
      <PublicationProvider>
        <ProfileCard />
        <Publications />
      </PublicationProvider>
    </ThemeProvider>
  );
}
