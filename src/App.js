import React from "react";
import { useAppContext } from "./appContext";
import { useDispatch } from "react-redux";
import { fetchGitHubReops } from "./pages/allProjectsSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
// Pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import MyStory from "./pages/MyStory";
import NotFound from "./pages/NotFound";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function App() {
  const { theme, setTheme } = useAppContext();
  const dispatch = useDispatch();

  React.useEffect(
    function () {
      const updateTheme = () =>
        darkMode ? setTheme("dark") : setTheme("light");
      updateTheme();
      dispatch(fetchGitHubReops());
    },
    [setTheme, dispatch]
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>
        <ScrollToTop />
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/All-Projects" element={<AllProjects />} />
          <Route path="/My-Story" element={<MyStory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
