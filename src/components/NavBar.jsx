import React from "react";
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import PropTypes from "prop-types";
// Router
import { Link, useLocation, useNavigate } from "react-router-dom";
// Images
import defaultLogo from "../images/defaultNavLogo.svg";
// Components
import { Link as ScrollLink } from "react-scroll";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

// #region constants
const navLinks = {
  routes: [
    { id: "1R", name: "Home", route: "/" },
    { id: "2R", name: "All Projects", route: "/All-Projects" },
    { id: "3R", name: "My Story", route: "/My-Story" },
  ],
  to: [
    { id: "1T", name: "Home", to: "Home" },
    { id: "2T", name: "About Me", to: "About" },
    { id: "3T", name: "Skills", to: "Skills" },
    { id: "4T", name: "Projects", to: "Projects" },
    { id: "5T", name: "Contact", to: "Contact" },
  ],
};
// #endregion

// #region styled-components
const StyledDiv = styled.div`
  .navbar {
    border-bottom: var(--border);
  }

  .spacer {
    height: var(--nav-height);
  }
`;
// #endregion

// #region component
const propTypes = {
  Logo: PropTypes.node,
  callBack: PropTypes.func,
  closeDelay: PropTypes.number,
  logoBackground: PropTypes.oneOf(["light", "dark"]),
};

const NavBar = ({
  Logo = defaultLogo,
  callBack,
  closeDelay = 125,
  logoBackground = "light",
}) => {
  const theme = useSelector(selectMode);
  const [isExpanded, setisExpanded] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <div className="spacer" />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="https://mikeyhuber.me/">
            <img
              alt="Logo"
              src={Logo === null ? defaultLogo : Logo}
              width="35"
              height="35"
              className={
                theme === "light"
                  ? "rounded-circle border border-dark"
                  : "rounded-circle border border-light"
              }
              style={
                logoBackground === "light"
                  ? { background: "var(--bs-light)" }
                  : { background: "var(--bs-dark)" }
              }
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setisExpanded(!isExpanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={() => {
                            setTimeout(() => {
                              setisExpanded(false);
                            }, closeDelay);
                          }}
                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={() => {
                            setTimeout(() => {
                              setisExpanded(false);
                            }, closeDelay);
                          }}
                        >
                          {el.name}
                        </Link>
                      </Nav.Item>
                    );
                  })}
              {pathname === "/" && (
                <Nav.Item>
                  <Dropdown className="mb-2">
                    <Dropdown.Toggle
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          navigate("/All-Projects");
                          setTimeout(() => {
                            setisExpanded(false);
                          }, closeDelay);
                        }}
                      >
                        All Projects
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          navigate("/My-Story");
                          setTimeout(() => {
                            setisExpanded(false);
                          }, closeDelay);
                        }}
                      >
                        My Story
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
              )}
            </Nav>
            <Nav>
              <ThemeToggle
                closeDelay={closeDelay}
                setExpanded={setisExpanded}
                setTheme={callBack}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledDiv>
  );
};

NavBar.propTypes = propTypes;
// #endregion

export default NavBar;
