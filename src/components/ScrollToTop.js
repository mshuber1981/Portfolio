import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // https://reactjs.org/docs/hooks-reference.html#uselayouteffect
  React.useLayoutEffect(
    function () {
      // if not a hash link, scroll to top
      if (hash === "") {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
      // else scroll to id
      else {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        const cords = element.getBoundingClientRect();
        if (element) {
          element.scrollIntoView({
            top: cords.top,
            left: 100,
            behavior: "smooth",
          });
        } else {
          navigate("404", { replace: true });
        }
      }
    },
    [pathname, hash, navigate]
  );

  return null;
}
