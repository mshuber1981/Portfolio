import React, { useState } from "react";
// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-bootstrap.github.io/components/navbar/
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  // Set the initial state of the expanded Navbar to false
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        className="custom-nav"
        // Expand the Navbar at the large breakpoint
        expand="lg"
        expanded={expanded}
        fixed="top"
        variant="light"
      >
        <Navbar.Toggle
          // Set the expanded state with the toggle button
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse>
          <Nav className="d-flex flex-column h3 text-center">
            <Nav.Item className="py-1 rounded-top">
              <Link
                className="drop-shadow text-white"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={750}
                // Handle collapse on select
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 500)
                }
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="py-1">
              <Link
                className="drop-shadow text-white"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={750}
                // Handle collapse on select
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 500)
                }
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item className="py-1">
              <Link
                className="drop-shadow text-white"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={750}
                // Handle collapse on select
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 500)
                }
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item className="py-1 rounded-bottom">
              <Link
                className="drop-shadow text-white"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={750}
                // Handle collapse on select
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 500)
                }
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
