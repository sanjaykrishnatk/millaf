import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
function NavMenu() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <Navbar expand="lg" className="bg-body-transparent navbar-dark pt-5">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={logo}
            alt="logo"
            style={{ width: "118px", height: "44px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`ms-md-auto d-flex align-items-center justify-content-center  justify-content-evenly ${
              isMobile ? "w-100" : "w-50"
            }`}
          >
            <a href="#home" className="menu-text">
              HOME
            </a>
            <a className="menu-text">ABOUT US</a>
            <a href="#about" className="menu-text">
              SERVICES
            </a>
            <a href="#link" className="menu-text">
              CONTACT US
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
