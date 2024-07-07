import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
// Components
import { Container } from "react-bootstrap";

// #region styled-components
const vortex = keyframes`
	0% {
		transform: rotate(90deg);
	} 100% {
		transform: rotate(810deg);
	}
`;

const StyledDiv = styled.div`
  position: absolute;
  display: block;
  overflow: hidden;
  width: 8rem;
  height: 8rem;
  transition: 2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  .arc:before,
  .arc:after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #000;
    border-color: ${({ theme }) =>
      //   `${theme.color} transparent transparent transparent`};
      theme.name === "light"
        ? "var(--bs-dark) transparent transparent transparent"
        : "var(--bs-light) transparent transparent transparent"};
    border-radius: 50%;

    z-index: -1;
    content: "";
  }

  .arc:after {
    border-color: transparent transparent var(--bs-primary) transparent;
  }

  .arc {
    position: absolute;
    display: block;
    width: 85%;
    height: 85%;
    margin: 7.5%;
    border-radius: 50%;
    /* box-shadow: 0px 0px 0px 2px var(--bs-gray); */
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0px 0px 0px 2px var(--bs-light)"
        : "0px 0px 0px 2px var(--bs-gray)"};
  }

  @media (prefers-reduced-motion: no-preference) {
    .arc {
      animation: 15s ${vortex} linear infinite;
    }
  }
`;
// #endregion

// #region component
const Vortex = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <StyledDiv className="vortex">
        <div className="arc">
          <div className="arc">
            <div className="arc">
              <div className="arc">
                <div className="arc">
                  <div className="arc">
                    <div className="arc">
                      <div className="arc">
                        <div className="arc">
                          <div className="arc">
                            <div className="arc">
                              <div className="arc">
                                <div className="arc">
                                  <div className="arc">
                                    <div className="arc">
                                      <div className="arc" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledDiv>
    </Container>
  );
};
// #endregion

export default Vortex;
