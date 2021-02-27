import React from "react";
import NavBar from "./NavBar";
// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.netlify.com/#/
import {
  FaLinkedin,
  FaGithubSquare,
  FaChevronCircleDown,
} from "react-icons/fa";

const Header = (props) => {
  return (
    <header
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center text-white"
    >
      <NavBar />
      <h1 className="drop-shadow display-3">{props.name}</h1>
      <h2 className="drop-shadow h3">
        {props.message1}
        <span className="text-success font-weight-bold">{props.span1}</span>
        {props.message2}
        <span className="text-success font-weight-bold">{props.span2}</span>
        {props.message3}
      </h2>
      <hr />
      <div className="my-info-links h1">
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

      <Link
        className="scroll-down drop-shadow h1 text-info"
        to="about"
        smooth={true}
        duration={750}
      >
        <FaChevronCircleDown />
      </Link>
    </header>
  );
};

export default Header;
