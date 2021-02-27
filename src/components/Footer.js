import React from "react";
// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.netlify.com/#/
import { FaLinkedin, FaGithubSquare, FaChevronCircleUp } from "react-icons/fa";

const Footer = (props) => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center text-white">
      <Link
        className="drop-shadow my-5 h1 text-info"
        to="home"
        smooth={true}
        duration={750}
      >
        <FaChevronCircleUp />
      </Link>

      <div className="mb-5 h1">
        <a
          className="drop-shadow mr-4 text-white"
          href={props.link1}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="drop-shadow ml-4 text-white"
          href={props.link2}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
