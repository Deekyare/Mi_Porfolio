import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsPython from "../projects/ProjectsPython.js";
import ProjectsNode from "../projects/ProjectsNode.js";
import ProjectsTarjetas from "../projects/ProjectsTarjetas";

function Projects() {
  return (
    <section
      id="portfolio"
      style={{ backgroundColor: "#3d3e43", color: "#ffffff" }}
    >
      <Container>
        <Row>
          <h2 className="text-white py-5">Projects</h2>
          <Col>
            <ProjectsTarjetas />
            <ProjectsPython />
            <ProjectsNode />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
