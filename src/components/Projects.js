import React from "react";
// https://react-bootstrap.github.io/layout/grid/
// https://react-bootstrap.github.io/components/cards/
import { Card, Carousel, Col, Row } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FaLink } from "react-icons/fa";
// Images
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

const Projects = (props) => {
  return (
    <section
      id="projects"
      className="container-fluid py-4 bg-primary text-white"
    >
      <div className="container">
        <h2 className="drop-shadow text-center">Projects</h2>
        <hr className="mb-5" />

        <Row className="justify-content-center text-center text-dark">
          <Col className="mb-4" sm={12} md={6} lg={4}>
            <Card>
              <Card.Img
                className="img-fluid"
                variant="top"
                src={props.image1}
              />
              <Card.Body>
                <Card.Title>{props.title1}</Card.Title>
                <Card.Text className="text-left">
                  {props.description1}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a
                  className="d-inline-block h2 text-warning"
                  href={props.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="mb-4" sm={12} md={6} lg={4}>
            <Card>
              <Card.Img
                className="img-fluid"
                variant="top"
                src={props.image2}
              />
              <Card.Body>
                <Card.Title>{props.title2}</Card.Title>
                <Card.Text className="text-left">
                  {props.description2}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a
                  className="d-inline-block h2 text-warning"
                  href={props.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Img
                className="img-fluid"
                variant="top"
                src={props.image3}
              />
              <Card.Body>
                <Card.Title>{props.title3}</Card.Title>
                <Card.Text className="text-left">
                  {props.description3}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a
                  className="d-inline-block h2 text-warning"
                  href={props.link3}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Carousel className="mt-4">
          <Carousel.Item>
            <img
              className="img-fluid d-inline-block w-100"
              src={slide1}
              alt="First Slide"
            />
            <Carousel.Caption>
              <a
                className="text-warning"
                href={props.slide1Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="mb-5 h1" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid d-block w-100"
              src={slide2}
              alt="Second Slide"
            />
            <Carousel.Caption>
              <a
                className="text-warning"
                href={props.slide2Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="mb-5 h1" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid d-block w-100"
              src={slide3}
              alt="Third Slide"
            />
            <Carousel.Caption>
              <a
                className="text-warning"
                href={props.slide3Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="mb-5 h1" />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
