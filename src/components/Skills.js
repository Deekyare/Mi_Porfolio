import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPython,
  FaGit,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "#3d3e43", color: "#ffffff" }}
    >
      <Container>
        <h2 className="text-white mb-4">My Skills</h2>
        <Row className="justify-content-center gap-3">
          <Col xs={3} md={2} className="text-center skill-box">
            <FaGit className="text-gold" size={40} />
            <p className="text-muted mt-2">Git Source Control</p>
          </Col>
          <Col xs={3} md={2} className="text-center skill-box">
            <FaDatabase className="text-gold" size={40} />
            <p className="text-muted mt-2">MongoDB - Sql</p>
          </Col>
          <Col xs={3} md={2} className="text-center skill-box">
            <FaJs className="text-gold" size={40} />
            <p className="text-muted mt-2">JavaScript</p>
          </Col>
          <Col xs={3} md={2} className="text-center skill-box">
            <FaHtml5 className="text-gold" size={40} />
            <p className="text-muted mt-2">HTML & CSS</p>
          </Col>
          <Col xs={3} md={2} className="text-center skill-box">
            <FaBootstrap className="text-gold" size={40} />
            <p className="text-muted mt-2">Bootstrap</p>
          </Col>
          <Col xs={3} md={2} className="text-center skill-box">
            <FaNodeJs className="text-gold" size={40} />
            <p className="text-muted mt-2">NodeJs</p>
          </Col>
          <Col xs={3} md={2} className="text-center skill-box">
            <FaPython className="text-gold" size={40} />
            <p className="text-muted mt-2">Python</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
