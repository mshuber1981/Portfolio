import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { useGetUsersQuery } from "../app/apiSlice";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element, Link } from "react-scroll";
import { Button } from "react-bootstrap";
import Title from "../components/Title";
import BackToTop from "../components/BackToTop";
// Utils
import { updateTitle } from "../utils";

// #region styled-components
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
    border-top: 2px dashed var(--bs-primary);
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

  .timeline-item:nth-child(even) {
    border-left: 2px dashed var(--bs-primary);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    margin-right: 2rem;
    padding-right: 0;
  }

  .timeline-item:nth-child(odd) {
    border-right: 2px dashed var(--bs-primary);
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
    background: var(--bs-primary);
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
// #endregion

// #region component
const MyStory = () => {
  const theme = useSelector(selectMode);
  const { data: userData } = useGetUsersQuery();

  React.useEffect(function () {
    const script = document.createElement("script");
    document.title = "My Story";
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  React.useEffect(() => {
    updateTitle(`${userData.name} | My Story`);
  }, [userData]);

  return (
    <>
      <StyledMain>
        <section className="section timeline">
          <Title size={"h2"} text={"My Story"} />
          <Link to={"Present"} offset={-65} className="link-icons mt-4">
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
              <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id="4c5a6916-9679-4500-9eb8-e3042d073dd2"
                  data-share-badge-host="https://www.credly.com"
                ></div>
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
                cool stuff I have been learning about here.
                <br />
                <a
                  href="https://mshuber1981.github.io/work-life/"
                  className="link"
                >
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
    </>
  );
};
// #endregion

export default MyStory;
