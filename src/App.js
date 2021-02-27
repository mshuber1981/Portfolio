import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  /* 
    https://reactjs.org/docs/hooks-state.html
    Setting the initial state of data to an empty object
  */
  const [data, setData] = useState({});
  /* 
    https://reactjs.org/docs/hooks-effect.html
    Fetching the data.json file and updating the state for data once the App component mounts
  */
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);
  /* 
    https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    useEffect will only run if data is updated
  */

  // Social links (LinkedIn, Github, etc.)
  const socialLinks = data.socialLinks;
  // Home section
  const home = data.home;
  // About section
  const about = data.about;
  // Projects section
  const projects = data.projects;

  return (
    <>
      <Header {...home} {...socialLinks} />
      <main>
        <About {...about} />
        <Projects {...projects} />
        <Contact />
      </main>
      <Footer {...socialLinks} />
    </>
  );
};

export default App;
