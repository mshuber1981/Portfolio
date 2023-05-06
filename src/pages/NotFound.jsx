import React from "react";
import { useAppContext } from "../appContext";
import styled from "styled-components";
// Media
import { LightHeroLogo, DarkHeroLogo } from "../data";
// Components
import { Container } from "react-bootstrap";
import { Spin } from "../components/globalStyledComponents";

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height));

  span {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

  .logo-img {
    width: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    img {
      animation: ${Spin} infinite 20s linear;
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
        <Container className="d-flex justify-content-center">
          <span>4</span>
          {theme === "light" ? (
            <img
              src={LightHeroLogo}
              alt="Snowflake"
              className="w-75 mx-auto hero-img"
            />
          ) : (
            <img
              src={DarkHeroLogo}
              alt="Spiral Galaxy"
              className="w-75 mx-auto hero-img"
            />
          )}
          <span>4</span>
        </Container>
        <p className="text-center">Sorry, page not found...</p>
      </StyledNotFound>
    </>
  );
}
