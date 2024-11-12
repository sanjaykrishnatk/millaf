import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ApparelCard from "../components/ApparelCard";
import tshirt from "../assets/tshirt.png";
import polo from "../assets/polo.png";
import jersey from "../assets/jersey.png";
import os from "../assets/os.png";
import hoodie from "../assets/hoodie.png";
import tp from "../assets/tp.png";
import jacket from "../assets/jacket.png";
import uniform from "../assets/uniform.png";
import Features from "../components/Features";

function Section4() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Row className={`mx-0 mb-5 ${isMobile && "mt-5"}`}>
      <Row className="mx-0">
        <h1 className={`sec-4-header ${!isMobile ? "ms-4 mt-5 ps-4" : ""}`}>
          From Casual to Corporate: Custom Apparel for All
        </h1>
      </Row>
      <Row className="mx-0 px-5">
        <Col md={3} sm={12}>
          <ApparelCard img={tshirt} text={"CREW NECK T - SHIRT"} />
        </Col>
        <Col md={3} sm={12}>
          <ApparelCard img={polo} text={"POLO T - SHIRT"} />
        </Col>
        <Col md={3} sm={12}>
          <ApparelCard img={jersey} text={"JERSEY"} />
        </Col>
        <Col md={3} sm={12}>
          <ApparelCard img={os} text={"OVERSIZED TEES"} />
        </Col>
        <Col md={3} sm={12}>
          <ApparelCard img={hoodie} text={"HOODIES"} />
        </Col>
        <Col md={3} sm={12}>
          <ApparelCard img={tp} text={"TRACK PANTS"} />
        </Col>
        <Col md={3} sm={12}>
          <ApparelCard img={jacket} text={"VARSITY JACKET"} />
        </Col>
        <Col md={3} sm={12}>
          <ApparelCard img={uniform} text={"UNIFORMS"} />
        </Col>
      </Row>
      <Row className="mx-0 d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h6 className={`${isMobile ? "mt-5" : "mt-4"} mb-4 features-text`}>
            Crafted for Comfort and Strength
          </h6>
          <div
            className={`d-flex justify-content-center align-items-center ${
              isMobile && "flex-column"
            }`}
          >
            <Features text={"Wrinkle-Free Elegance"} />
            <Features text={"Built for Durability"} />
            <Features text={"Breathable Comfort"} />
            <Features text={"Pilling Resistance"} />
          </div>
        </div>
      </Row>
    </Row>
  );
}

export default Section4;
