import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/favicon.ico";
import "./NavBar.css";

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand
          href="#home"
          className="text-white"
          style={{ fontSize: "1.5rem" }}
        >
          <img src={logo} className="logo" alt="logo"></img>Porfolio
        </BootstrapNavbar.Brand>
        <Nav>
          <Nav.Link
            href="#about"
            className=" mx-3"
            style={{ fontSize: "1rem" }}
          >
            Sobre mi
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            className=" mx-3"
            style={{ fontSize: "1rem" }}
          >
            Proyectos
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className=" mx-3"
            style={{ fontSize: "1rem" }}
          >
            Contacteme
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
