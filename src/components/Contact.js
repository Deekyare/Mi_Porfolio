import React from "react";
import { Container } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="py-4"
      style={{
        backgroundColor: "#3d3e43",
        color: "#ffffff",
        borderTop: "1px solid rgb(78, 77, 74)",
      }}
    >
      <Container>
        <h2
          className="text-white mb-4 text-center"
          style={{ fontSize: "1.20rem" }}
        >
          Contácteme
        </h2>
        <ul className="contact-list d-flex justify-content-center align-items-center flex-wrap gap-4 mb-4">
          <li className="contact-item">
            <FaEnvelope className="me-2" />
            <a
              href="mailto:silviam.giardini@gmail.com"
              className="text-white text-decoration-none"
            >
              silviam.giardini@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <FaPhone className="me-2" />
            <span>1162297015</span>
          </li>
          <li className="contact-item">
            <FaMapMarkerAlt className="me-2" />
            <span>San Rafael, Mendoza, Argentina</span>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Contact;
