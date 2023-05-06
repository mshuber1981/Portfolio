// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Logos
import Logo from "./images/coder.svg";
import Snowflake from "./images/snowflake.svg";
import Galaxy from "./images/galaxy.svg";
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
export { Snowflake as LightHeroLogo };
export { Galaxy as DarkHeroLogo };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "mshuber1981";

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, Bootstrap, Redux, AWS Amplify, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
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

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://dpswezpu6i73j.cloudfront.net/Resume/Michael-Huber.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "github-react-portfolio-template",
  "work-life",
  "FCC-Front-End-Libraries-Projects",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
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

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = process.env.REACT_APP_FORMSPREE_URL;
