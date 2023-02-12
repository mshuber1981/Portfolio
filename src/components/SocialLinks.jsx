import React from "react";
import styled from "styled-components";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  return (
    <StyledSocialLinks>
      <a
        href="https://github.com/mshuber1981"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mikeyhuber/"
        aria-label="Check out my LinkedIn profile."
        className="link-icons"
      >
        <FaLinkedin />
      </a>
    </StyledSocialLinks>
  );
}
