import React from "react";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";

export default function Home() {
  React.useEffect(function () {
    document.title = "mikeyhuber.me";
  }, []);

  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
