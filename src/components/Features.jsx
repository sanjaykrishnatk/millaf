import React from "react";
import point from "../assets/point.png";
function Features({ text }) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div
      className={`${
        isMobile && "my-2"
      } d-flex justify-content-center align-items-center mx-2`}
    >
      <img
        src={point}
        alt="point-img"
        className="me-3"
        style={{ width: "14px", height: "14px" }}
      />
      <p className="features-sub-text mb-0">{text}</p>
    </div>
  );
}

export default Features;
