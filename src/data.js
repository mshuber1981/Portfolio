// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Logos
import Logo from "./images/coder.svg";
// Projects Images (add your images to the /images directory and import below)
import ReactLogo from "./images/reactLogo.svg";
import Gears from "./images/gears.svg";
import fcc from "./images/free-code-camp.svg";
import Amplify from "./images/aws-amplify.svg";
import Form from "./images/form-line.svg";
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Image exports
export { HeroLight as Light };
export { HeroDark as Dark };
// Logo exports
export { Logo as NavLogo };

// GitHub username
export const githubUsername = "mshuber1981";

// About Me
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, Bootstrap, Redux, AWS Amplify, and the GitHub REST API.";

// Skills
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa-brands:aws" className="display-4" />,
    name: "AWS",
  },
];

// Resume link
export const resume =
  "https://dpswezpu6i73j.cloudfront.net/Resume/Michael-Huber.pdf";

// Projects
export const filteredProjects = [
  "github-react-portfolio-template",
  "work-life",
  "FCC-Front-End-Libraries-Projects",
];

// Project card images
export const projectCardImages = [
  {
    name: "github-react-portfolio-template",
    image: ReactLogo,
  },
  {
    name: "work-life",
    image: Gears,
  },
  {
    name: "FCC-Front-End-Libraries-Projects",
    image: fcc,
  },
  {
    name: "FCC-JavaScript-Algorithms-and-Data-Structures-Projects",
    image: fcc,
  },
  {
    name: "Portfolio",
    image: Amplify,
  },
  {
    name: "react-contact-form",
    image: Form,
  },
  {
    name: "FCC-Responsive-Web-Design-Projects",
    image: fcc,
  },
  {
    name: "CRA-Starter",
    image: ReactLogo,
  },
];

// Contanct info
export const formspreeUrl = process.env.REACT_APP_FORMSPREE_URL;

// Theme colors
export const color = "#45413C";
export const background = "#F5F2E8";
export const darkColor = "#FBFDFF";
export const darkBackground = "#27272A";
