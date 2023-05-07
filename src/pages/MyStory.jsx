import React from "react";
import { useAppContext } from "../appContext";
import styled from "styled-components";
import { Element, Link } from "react-scroll";
// Icons
import { Icon } from "@iconify/react";
// Images
import AWS from "../images/AWS-Developer-Associate-2020.png";
// Components
import { Button } from "react-bootstrap";
import { BackToTop, Title } from "../components/globalStyledComponents";
import Footer from "../components/Footer";

const StyledMain = styled.main`
  .section {
    padding: 2rem 0;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  .timeline-center {
    width: 80vw;
    max-width: 40rem;
    margin: 0 auto;
  }

  .timeline-item {
    border-top: 2px dashed var(--primary);
    margin: 0;
    padding: 4rem 2rem;
    position: relative;
  }

  .timeline p {
    margin-bottom: 0;
  }

  .timeline .iframe {
    width: 100%;
    height: auto;
  }

  .timeline-img {
    margin-top: 2rem;

    .tl-img {
      width: 225px;
      height: auto;
    }
  }

  .timeline-item:nth-child(even) {
    border-left: 2px dashed var(--primary);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    margin-right: 2rem;
    padding-right: 0;
  }

  .timeline-item:nth-child(odd) {
    border-right: 2px dashed var(--primary);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-left: 2rem;
    padding-left: 0;
  }

  .timeline-item:first-child {
    border-top: 0;
    border-top-right-radius: 0;
  }

  .timeline-item:last-child {
    border-bottom-left-radius: 0;
  }

  .number {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 0;
    background: var(--primary);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: bold;
  }

  .timeline-item:nth-child(even) .number {
    left: 0;
  }

  .timeline-item:nth-child(odd) .number {
    right: 0;
    transform: translate(50%, -50%);
  }

  @media screen and (min-width: 768px) {
    .timeline .iframe {
      height: 20rem;
    }
  }
`;

export default function MyStory() {
  const { theme } = useAppContext();

  React.useEffect(function () {
    document.title = "My Story";
  }, []);

  return (
    <>
      <StyledMain>
        <section className="section timeline">
          <Title>
            <h2>My Story</h2>
            <div className="underline"></div>
          </Title>
          <Link to={"Present"} offset={-62} className="link-icons">
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
            >
              Skip to present <Icon icon="material-symbols:arrow-drop-down" />
            </Button>
          </Link>
          <div className="timeline-center">
            {/* Item 1 */}
            <article className="timeline-item">
              <h4>1999 - USCG</h4>
              <p>
                I enlisted in the United States Coast Guard during my last year
                of High School to take advantage of the GI Bill. It was a
                challenging adventure that also helped pay for college.
              </p>
              <br />
              <iframe
                src="https://www.youtube.com/embed/jBtJet6kmZ0"
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="iframe"
              ></iframe>
              <span className="number"> 1 </span>
            </article>
            {/* End Item 1 */}
            {/* Item 2 */}
            <article className="timeline-item">
              <h4>2003 - College</h4>
              <p>
                Everyone said I needed to go so I went. The GI Bill helped pay
                for most of it. I started at Des Moines Area Community College
                and finished my journey with a Bachelor of Science in Finance
                from Iowa State University.
              </p>
              <span className="number"> 2 </span>
            </article>
            {/* End Item 2 */}
            {/* Item 3 */}
            <article className="timeline-item">
              <h4>2007 - Financial Crisis</h4>
              <p>
                I graduated in December of 2007. The irony of my chosen major
                would soon be front and center. This was a tuff time for myself
                and a lot of other people. I survived and ended up going back to
                Des Moines Area Community College to learn more about the world
                of Information Technology.
              </p>
              <br />
              <iframe
                src="https://www.youtube.com/embed/fXkeh8jiMdk"
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="iframe"
              ></iframe>
              <span className="number"> 3 </span>
            </article>
            {/* End Item 3 */}
            {/* Item 4 */}
            <article className="timeline-item">
              <h4>2011 - Corporate America</h4>
              <p>
                I finally lucked out and got my first IT job, but eventually the
                parent company decided to outsource everything related to IT.
                Along the way I survived a hectic merger followed by the
                spin-off of a new company. In the beginning I felt valued and
                learned a lot, but toward the end I was always worried about
                losing my job and I felt like I needed to make a change.
              </p>
              <span className="number"> 4 </span>
            </article>
            {/* End Item 4 */}
            {/* Item 5 */}
            <article className="timeline-item">
              <h4>2018 - Making changes and taking chances</h4>
              <p>
                I thought my job was in jepordy and I was tired of living in
                fear. I did the best I could to find a suitable replacement but
                it was a step in the wrong direction. I ended up resigning,
                selling almost everything I owned, and retreating back to Iowa.
              </p>
              <span className="number"> 5 </span>
            </article>
            {/* End Item 5 */}
            {/* Item 6 */}
            <article className="timeline-item">
              <h4>2020 - The Pandemic</h4>
              <p>
                What an interesting time for all of us. I spent my first year at
                home sheltering in place and learning everything I could about
                Amazon Web Services and web developement. I got some AWS
                exposure before I left Corteva Agriscience. Cloud native
                application developement was a hot topic and I was genuinely
                interested.
              </p>
              <div className="timeline-img">
                <a href="https://www.credly.com/badges/b8be6845-1c01-4205-8387-09a97be77004/public_url">
                  <img
                    src={AWS}
                    alt="AWS Developer Associate"
                    loading="lazy"
                    className="tl-img mx-auto d-block"
                  />
                </a>
              </div>
              <span className="number"> 6 </span>
            </article>
            {/* End Item 6 */}
            {/* Item 7 */}
            <article className="timeline-item">
              <Element name={"Present"} id="present">
                <h4>Present</h4>
              </Element>
              <p>
                I am starting to feel comfortable with React, but I still have a
                lot to learn. I started a new journey with Bayer in January of
                2022, I will be filling a Product Specialist role. The frontend
                of the application was built with React, so I am excited to see
                the library used in an Enterprise environment. Much of the
                backend uses AWS, so I am equally excited to learn what services
                are used and why.
              </p>
              <br />
              <p>
                Update 5/1/2023 - I made it through my first year! See all the
                cool stuff I have been learning about here.{" "}
                {<Icon icon="material-symbols:arrow-drop-down" />} <br />
                <a href="https://mshuber1981.github.io/work-life/">
                  mshuber1981.github.io/work-life/
                </a>
              </p>
              <span className="number"> 7 </span>
            </article>
            {/* End Item 7 */}
          </div>
        </section>
      </StyledMain>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
