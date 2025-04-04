import React from "react";
import { Container, Row, Col, Button, Card, CardBody } from "react-bootstrap";
import { FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

function ProjectsNode() {
  return (
    <section
      id="portfolio"
      className="projectsNode"
      style={{ backgroundColor: "#3d3e43", color: "#ffffff" }}
    >
      <Container>
        <Row className="g-4 d-flex">
          {/* Node */}
          {/* ----------- */}
          <Col>
            <Card
              style={{
                backgroundColor: "#3d3e43",
                border: "1px solid #d4a017",
                height: "100%", // Hace que la tarjeta ocupe toda la altura disponible
              }}
            >
              <Card.Title className="d-flex flex-column">
                <h5 className="text-gold m-3">
                  Proyectos Node
                  <FaNodeJs
                    className="FaPython ms-3 text-gold"
                    size={20}
                    title="python"
                  />
                </h5>
              </Card.Title>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center ms-3 me-3 mb-3">
                  <p className="text-muted ms-3">
                    Sistema de autenticación y API REST de Users. PostgreSQL
                    como base de datos.{" "}
                    <SiPostgresql className="ms-3 text-gold" size={20} />{" "}
                    <FaDocker className="ms-3 text-gold" size={20} />
                    <BiLogoTypescript className="ms-3 text-gold" size={20} />
                  </p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/proyecto-node" target="_blank"
                    className="ms-3 "
                  >
                    Código
                  </Button>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center ms-3 me-3">
                  <p className="text-muted ms-3">Api rest inmobiliaria</p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/api-rest-inmobiliaria/tree/main" target="_blank"
                    className="ms-3 "
                  >
                    Código
                  </Button>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center ms-3 me-3 mb-3">
                  <p className="text-muted ms-3">
                    Api rest utilizando mongo y express, biblioteca.{" "}
                    <SiMongodb className="ms-3 text-gold" size={20} />{" "}
                    <FaDocker className="ms-3 text-gold" size={20} />
                  </p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/proyecto-node-crud/tree/main" target="_blank"
                    className="ms-3 "
                  >
                    Código
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsNode;
