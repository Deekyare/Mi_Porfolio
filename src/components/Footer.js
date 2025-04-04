import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="py-3"
      style={{
        backgroundColor: "#2d2d3a",
        color: "#8892b0",
        borderTop: "1px solid #d4a017",
      }}
    >
      <Container>
        <p> 2025 - Silvia Giardini</p>
      </Container>
    </footer>
  );
}

export default Footer;
