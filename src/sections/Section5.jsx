import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dtf from "../assets/dft.png";
import sub from "../assets/sub.png";
import sp from "../assets/sp.png";
import dp from "../assets/dp.png";
import fp from "../assets/fp.png";
import rp from "../assets/rp.png";
import ip from "../assets/ip.png";
import ep from "../assets/ep.png";
import hdp from "../assets/hdp.png";
import emb from "../assets/emb.png";
function Section5() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Row className={`sec-5 mx-0 mb-5 ${isMobile && "mt-5"}`}>
      <Row
        className={`mx-0 d-flex flex-column px-5 py-4 ${
          isMobile ? "justify-content-center align-items-center" : ""
        }`}
      >
        <h1 className={`sec-5-header ${!isMobile ? "ms-5 mt-3 " : ""}`}>
          Prints That Make a Statement
        </h1>
      </Row>
      <Row className="mx-0 px-5">
        <Col md={4} sm={12} className="d-flex flex-column">
          <img src={dtf} alt="dtf" className="w-100 print-img" />
          <h6 className="m-0 apparel-card-text text-center print-text">DTF</h6>
        </Col>
        <Col
          md={2}
          sm={12}
          className="d-flex flex-column"
          style={{ height: !isMobile && "73%" }}
        >
          <Row className="d-flex flex-column print-card">
            <img
              src={sub}
              alt="sp"
              className="w-100 print-img"
              style={{ height: !isMobile && "173px" }}
            />
            <h6 className="m-0 apparel-card-text text-center print-text">
              SUBLIMATION
            </h6>
          </Row>
          <Row className="d-flex flex-column print-card">
            <img
              src={sp}
              alt="sp"
              className="w-100 print-img"
              style={{ height: !isMobile && "173px" }}
            />
            <h6 className="m-0 apparel-card-text text-center print-text">
              SCREEN PRINTING
            </h6>
          </Row>
        </Col>
        <Col md={4} sm={12} className="d-flex flex-column">
          <img src={dp} alt="dp" className="w-100 print-img" />
          <h6 className="m-0 apparel-card-text text-center print-text">
            DIGITAL PRINTING
          </h6>
        </Col>
        <Col
          md={2}
          sm={12}
          className="d-flex flex-column"
          style={{ height: "73%" }}
        >
          <img
            src={fp}
            alt="fp"
            className="w-100 print-img"
            style={{ maxHeight: "103%" }}
          />
          <h6 className="m-0 apparel-card-text text-center print-text">
            FLOCK PRINTING
          </h6>
        </Col>
      </Row>
      <Row className="mx-0 px-5" style={{ marginTop: !isMobile && "-5%" }}>
        <Col md={4} sm={12} className="d-flex flex-column">
          <img src={rp} alt="dtf" className="w-100 print-img" />
          <h6
            className="m-0 apparel-card-text text-center print-text"
            style={{
              lineHeight: isMobile && "1",
              marginTop: isMobile && "40px",
            }}
          >
            HIGH DENSITY RUBBER PRINT
          </h6>
        </Col>
        <Col
          md={2}
          sm={12}
          className="d-flex flex-column"
          style={{ height: !isMobile && "73%" }}
        >
          <img
            src={ip}
            alt="ip"
            className="w-100 print-img"
            style={{ maxHeight: !isMobile && "103%" }}
          />
          <h6 className="m-0 apparel-card-text text-center print-text">
            IRIDESCENT PRINT
          </h6>
        </Col>

        <Col md={4} sm={12} className="d-flex flex-column">
          <img src={emb} alt="emb" className="w-100 print-img" />
          <h6 className="m-0 apparel-card-text text-center print-text">
            EMBROIDERY
          </h6>
        </Col>
        <Col
          md={2}
          sm={12}
          className="d-flex flex-column"
          style={{ height: !isMobile && "73%" }}
        >
          <Row className="d-flex flex-column print-card">
            <img
              src={ep}
              alt="ep"
              className="w-100 print-img"
              style={{ height: !isMobile && "173px" }}
            />
            <h6 className="m-0 apparel-card-text text-center print-text">
              EMBOSSED PRINT
            </h6>
          </Row>
          <Row
            className="d-flex flex-column print-card"
            style={{ height: "65%" }}
          >
            <img
              src={hdp}
              alt="hdp"
              className="w-100 print-img"
              style={{ height: !isMobile && "173px" }}
            />
            <h6
              className="m-0 apparel-card-text text-center mt-3 print-text"
              style={{ lineHeight: "1" }}
            >
              SCREEN PRINT WITH HIGH DENSITY PRINT
            </h6>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </Row>
  );
}

export default Section5;
