import React from "react";
// https://react-bootstrap.github.io/layout/grid/
// https://react-bootstrap.github.io/components/cards/
import { Col, Row } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import {
  FaDownload,
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGitAlt,
  FaAws,
  FaLink,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
// Images
import about from "../images/about.jpg";
import da from "../images/da.png";
import saa from "../images/saa.png";

const About = (props) => {
  return (
    <section
      id="about"
      className="container-fluid py-4 bg-secondary text-white"
    >
      <div className="container">
        <h2 className="drop-shadow text-center">About Me</h2>
        <hr className="mb-5" />
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 text-center">
            <img
              // Image
              className="about-img img-fluid rounded-circle border border-white"
              src={about}
              alt="Michael Huber"
            ></img>
          </div>

          <div className="col-lg-7 p-4 mb-5 bg-dark">
            <p className="mb-4">{props.p1}</p>
            <p className="mb-4">{props.p2}</p>
            <div className="d-flex flex-column align-items-center my-4">
              <a
                className="btn btn-info text-white"
                href={props.link1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Resume
              </a>
            </div>
          </div>
        </div>

        <h3 className="drop-shadow text-center">Skills</h3>
        <hr className="mb-5"></hr>
        <div className="drop-shadow row row-cols-3 mb-5 border border-primary text-center">
          <figure className="col">
            <FaHtml5 className="display-4 my-3" />
            <figcaption className="h4">HTML5</figcaption>
          </figure>
          <figure className="col">
            <FaCss3 className="display-4 my-3" />
            <figcaption className="h4">CSS3</figcaption>
          </figure>
          <figure className="col">
            <IoLogoJavascript className="display-4 my-3" />
            <figcaption className="h4">JavaScript</figcaption>
          </figure>
          {/* ---------------------------------------------- */}
          <figure className="col my-5">
            <FaSass className="display-4 mb-2" />
            <figcaption className="h4">Sass</figcaption>
          </figure>
          <figure className="col my-5">
            <FaBootstrap className="display-4 mb-2" />
            <figcaption className="h4">Bootstrap</figcaption>
          </figure>
          <figure className="col my-5">
            <FaReact className="display-4 mb-2" />
            <figcaption className="h4">React</figcaption>
          </figure>
          {/* ---------------------------------------------- */}
          <figure className="col">
            <FaNode className="display-4 mb-2" />
            <figcaption className="h4">Node</figcaption>
          </figure>
          <figure className="col">
            <FaGitAlt className="display-4 mb-2" />
            <figcaption className="h4">Git</figcaption>
          </figure>
          <figure className="col">
            <FaAws className="display-4 mb-2" />
            <figcaption className="h4">AWS</figcaption>
          </figure>
        </div>

        <h3 className="drop-shadow text-center">Certifications</h3>
        <hr className="mb-5"></hr>
        <Row>
          <Col
            className="d-flex flex-column justify-content-center align-items-center mb-4"
            xs={6}
          >
            <img
              // Image
              className="img-fluid mb-3"
              src={da}
              alt="AWS Developer Associate"
            ></img>
            <a
              className="h2 text-warning"
              href={props.link2}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          </Col>
          <Col
            className="d-flex flex-column justify-content-center align-items-center mb-4"
            xs={6}
          >
            <img
              // Image
              className="img-fluid mb-3"
              src={saa}
              alt="AWS Solutions Architect Associate"
            ></img>
            <a
              className="h2 text-warning"
              href={props.link3}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
