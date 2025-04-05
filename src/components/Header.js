import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../components/Header.css";

function Header() {
  return (
    <section id="Header" className="sectionHeader py-5">
      <Container className="containerHeader mt-5 d-flex justify-content-center align-items-center">
        <div className="social-icons d-flex  align-items-start gap-3 m-5">
          <a
            href="https://www.linkedin.com/in/silviagiardini" target="_blank" rel="noopener noreferrer"
            className="text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/silviagiardini" target="_blank" rel="noopener noreferrer"
            className="text-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>

        <div className="nombre text-center w-100 mt-5">
          <h1 className="text-gold" style={{ fontSize: "2.5rem" }}>
            Silvia Giardini
          </h1>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            | Frontend Developer | JavaScript | React | HTML | Css |
          </p>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            Estudiante de la Tecnicatura universitaria en programación.
          </p>

          <Button variant="outline-gold" href="#contact" className="mt-3">
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Header;
