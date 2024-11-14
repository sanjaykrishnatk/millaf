import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../assets/flogo.png";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <Row className="mx-0 py-5 d-flex">
        <Col
          md={4}
          sm={12}
          className="mx-0 ps-md-5 ms-md-5 d-flex flex-column  pe-0 mb-sm-3 footer-column"
        >
          <img
            src={footerLogo}
            alt="footer-logo"
            style={{ width: "147px", height: "54px" }}
          />
          <Row className="mx-0 d-flex flex-column  align-items-center">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ width: "fit-content" }}
                className="text-light ps-0 pe-2"
              />
              <a
                className="m-0 footer-text p-0"
                style={{ textDecoration: "none" }}
                href="https://wa.me/+918075578701"
              >
                +91 8075578701{" "}
              </a>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ width: "fit-content" }}
                className="text-light ps-0 pe-2"
              />
              <p className="m-0 footer-text p-0">
                +91 7025407081
                <br />
                +91 9495090780
              </p>
            </div>
          </Row>
          <Row className="mx-0 d-flex ">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ width: "fit-content" }}
              className="text-light ps-0 pe-2"
            />
            <a
              href="mailto:info@millarcreativelifestyle.com"
              className="m-0 footer-text p-0"
              style={{ textDecoration: "none" }}
            >
              info@millarcreativelifestyle.com
            </a>
            <p className="m-0 footer-text p-0">
              GSTIN: 32AARCM2845FIZF
              <br />
              CIN NO: U13999KL2023PTC083459
              <br />
              IMPORT EXPORT CODE: IEC AARCM2845F
            </p>
          </Row>
        </Col>
        <Col
          md={3}
          sm={12}
          className="mx-0 p-0 d-flex flex-column footer-column"
        >
          <Row className="mx-0 d-flex align-itmes-center justify-content-center">
            <img
              src={c1}
              alt="certification-logo"
              style={{ width: "167px", height: "65px" }}
              className="p-0"
            />
          </Row>
          <Row className="mx-0 d-flex d-flex align-itmes-center justify-content-center">
            <img
              src={c2}
              alt="certification-logo"
              className="footer-certification-logo p-0 me-2"
            />

            <img
              src={c3}
              alt="certification-logo"
              className="footer-certification-logo p-0"
            />
          </Row>
          <Row className="mx-0 d-flex mt-3 d-flex align-itmes-center justify-content-center">
            <img
              src={c4}
              alt="certification-logo"
              className="footer-certification-logo p-0 me-2"
            />

            <img
              src={c5}
              alt="certification-logo"
              className="footer-certification-logo p-0"
            />
          </Row>
        </Col>
        <Col md={4} sm={12} className="mx-0  d-flex flex-column ">
          <input
            type="text"
            className="form-control bg-transparent rounded-0 text-light mb-4"
            placeholder="Name"
            style={{ border: "1px solid #C0C0C0" }}
          />
          <input
            type="text"
            className="form-control bg-transparent rounded-0 text-light mb-4"
            placeholder="Email"
            style={{ border: "1px solid #C0C0C0" }}
          />
          <textarea
            className="form-control bg-transparent rounded-0 text-light mb-4"
            placeholder="Message"
            style={{
              border: "1px solid #C0C0C0",
              color: "white",
              height: "130px",
            }}
          />
          <div className="d-flex justify-content-end">
            <button className="footer-button mb-2">Submit</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
