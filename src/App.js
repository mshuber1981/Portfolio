import React from "react";
import { useAppContext } from "./appContext";
import { useDispatch } from "react-redux";
import { fetchGitHubReops } from "./pages/allProjectsSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { StyleSheetManager, ThemeProvider } from "styled-components";
// Data
import { color, background, darkColor, darkBackground } from "./data";
// Components
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
// Pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import MyStory from "./pages/MyStory";
import NotFound from "./pages/NotFound";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: color,
    background: background,
  },
  dark: {
    name: "dark",
    color: darkColor,
    background: darkBackground,
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
        <StyleSheetManager enableVendorPrefixes>
          <ScrollToTop />
          <GlobalStyles />
          <Element name={"Home"} id="home">
            <NavBar />
          </Element>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/my-story" element={<MyStory />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StyleSheetManager>
      </ThemeProvider>
    </BrowserRouter>
  );
}
