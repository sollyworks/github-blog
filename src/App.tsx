import { GlobalTheme } from "./styles/GlobaTheme";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme/theme";
import { Header } from "./components/Header";
import { PublicationProvider } from "./contexts/PublicationContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme />
      <Header />
      <PublicationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </PublicationProvider>
    </ThemeProvider>
  );
}
