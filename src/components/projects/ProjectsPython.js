import React from "react";
import { Container, Row, Col, Card, Button, CardBody } from "react-bootstrap";
import { FaPython } from "react-icons/fa";

function ProjectsPython() {
  return (
    <section
      id="portfolio"
      className="py-5"
      style={{ backgroundColor: "#3d3e43", color: "#ffffff" }}
    >
      <Container>
        <Row className="g-4 d-flex">
          {/* Python */}
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
                  Proyectos Python
                  <FaPython
                    className="FaPython ms-3 text-gold"
                    size={20}
                    title="python"
                  />
                </h5>
              </Card.Title>
              <CardBody>
                <hr class="hr" />
                <div className="d-flex justify-content-between align-items-center ms-3 me-3 mb-3">
                  <p className="text-muted ms-3">
                    Python con Pandas y OpenPyXl.
                  </p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/python_pandas_conversor_medidas" target="_blank"
                    className="ms-3 "
                  >
                    Código
                  </Button>
                </div>
                <hr class="hr" />
                <div className="d-flex justify-content-between align-items-center ms-3 me-3 mb-3">
                  <p className="text-muted ms-3">Juego de adivinanza.</p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/python-juego-adivinanza" target="_blank"
                    className="ms-3"
                  >
                    Código
                  </Button>
                </div>
                <hr class="hr" />
                <div className="d-flex justify-content-between align-items-center ms-3 me-3 mb-3">
                  <p className="text-muted ms-3">Juego del ahorcado.</p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/python_juego_ahorcado" target="_blank"
                    className="ms-3"
                  >
                    Código
                  </Button>
                </div>
                <hr class="hr" />
                <div className="d-flex justify-content-between align-items-center ms-3 me-3 mb-3">
                  <p className="text-muted ms-3">
                    Agenda de contactos por consola.
                  </p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/python-agenda-contactos" target="_blank"
                    className="ms-3"
                  >
                    Código
                  </Button>
                </div>
                <hr class="hr" />
                <div className="d-flex justify-content-between align-items-center ms-3 me-3 mb-3">
                  <p className="text-muted ms-3">
                    API REST con una Base de datos en memoria.
                  </p>

                  <Button
                    variant="outline-gold"
                    href="https://github.com/Deekyare/python_fastAPI_APIREST" target="_blank"
                    className="ms-3"
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

export default ProjectsPython;
