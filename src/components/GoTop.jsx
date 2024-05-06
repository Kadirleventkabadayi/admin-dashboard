import { useState, useEffect } from "react";
import "./styles/goTop.css";

function GoTop() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);
  const goTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <a
      onClick={goTop}
      className={`go-top d-flex align-items-center justify-content-center ${
        scroll > 500 ? "active" : undefined
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}

export default GoTop;
