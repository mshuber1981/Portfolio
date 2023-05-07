import React from "react";
import { useAppContext } from "../appContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Components
import { Button, Container } from "react-bootstrap";
import Vortex from "../components/Vortex";

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height));

  .container {
    width: 75%;
  }

  span {
    z-index: 1;
    font-size: 3rem;
    margin: 0 1rem;
  }

  .not-found {
    margin-top: 4rem;
  }

  @media screen and (min-width: 667px) {
    .container {
      width: 50%;
    }
  }

  @media screen and (min-width: 1180px) {
    .container {
      width: 25%;
    }
  }
`;

export default function NotFound() {
  const { theme } = useAppContext();

  React.useEffect(function () {
    document.title = "404";
  }, []);

  return (
    <>
      <StyledNotFound>
        <Container className="d-flex justify-content-evenly mt-5 container">
          <span>4</span>
          <Vortex />
          <span>4</span>
        </Container>
        <p className="not-found">Not found...</p>
        <Link to={"/"}>
          <Button
            size="lg"
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            className="mt-2"
          >
            Home
          </Button>
        </Link>
      </StyledNotFound>
    </>
  );
}
