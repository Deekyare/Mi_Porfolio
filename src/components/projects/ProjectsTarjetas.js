import React from "react";
import { Container, Row, Col, Card, CardFooter, Button } from "react-bootstrap";
import { FaJs, FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

function ProjectsTarjetas() {
  return (
    <section
      id="portfolio"
      style={{ backgroundColor: "#3d3e43", color: "#ffffff" }}
    >
      <Container>
        <Row className="g-4 ">
          <Col md={4}>
            <Card
              style={{
                backgroundColor: "#3d3e43",
                border: "1px solid #d4a017",
                height: "100%",
              }}
            >
              <Card.Body className="d-flex flex-column">
                <h5 className="text-gold">2024 • Inmobiliaria</h5>
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHluZHFjYWVlNXU3cDBsMDl4czEzdzQ3bXI5eG5jbWFzYnZydnczeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P2oK9QeX4Xa3Ta3YJr/giphy.gif"
                  alt="Demo inmobiliaria"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    width: "100%",
                  }}
                />
              </Card.Body>
              <CardFooter>
                <p className="text-muted ms-3">Inmobiliaria</p>
                <div className="tech-icons mb-3">
                  <FaHtml5
                    className="bi bi-filetype-html ms-3 text-gold"
                    size={20}
                    title="HTML5"
                  />
                  <FaJs
                    className="bi bi-filetype-js ms-3 text-gold"
                    size={20}
                    title="JavaScript"
                  />
                  <FaBootstrap
                    className="bi bi-bootstrap text-purple ms-3 text-gold"
                    size={20}
                    title="Bootstrap"
                  />
                </div>
                <Button
                  variant="outline-gold"
                  href="https://inmoflex.netlify.app/" target="_blank"
                  className="ms-3"
                >
                  Demo
                </Button>
                <Button
                  variant="outline-gold"
                  href="https://github.com/Deekyare/inmobiliaria/tree/main" target="_blank"
                  className="ms-3"
                >
                  Código
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                backgroundColor: "#3d3e43",
                border: "1px solid #d4a017",
                height: "100%",
              }}
            >
              <Card.Body className="d-flex flex-column">
                <h5 className="text-gold">2025 • Porfolio</h5>
                <img
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3hmczJhOGc3Nm1ydjM4enpxYjJudHJvOTByMGE1ZzVwcHpmaDRyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GPUaskedbSxpvKScCI/giphy.gif"
                  alt="Demo porfolio"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    width: "100%",
                  }}
                />
              </Card.Body>
              <CardFooter>
                <p className="text-muted ms-3">Porfolio</p>
                <div className="tech-icons mb-3">
                  <FaReact
                    className="bi bi-filetype-js ms-3 text-gold"
                    size={20}
                    title="JavaScript"
                  />
                  <FaHtml5
                    className="bi bi-filetype-html ms-3 text-gold"
                    size={20}
                    title="HTML5"
                  />

                  <FaBootstrap
                    className="bi bi-bootstrap text-purple ms-3 text-gold"
                    size={20}
                    title="Bootstrap"
                  />
                </div>
                <Button
                  variant="outline-gold"
                  href="https://porfolio-silviag.netlify.app/" target="_blank"
                  className="ms-3"
                >
                  Demo
                </Button>
                <Button
                  variant="outline-gold"
                  href="https://github.com/Deekyare/Porfolio" target="_blank"
                  className="ms-3"
                >
                  Código
                </Button>
              </CardFooter>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              style={{
                backgroundColor: "#3d3e43",
                border: "1px solid #d4a017",
                height: "100%",
              }}
            >
              <Card.Body className="d-flex flex-column">
                <h5 className="text-gold">2024 • Lista de tareas</h5>
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHkxcWgxeTJsd3d1ZjNoNjdzN2pmY2tvMHVwOXBpOGIyNGhnbXlieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i2ZRUAFhPp1u7VRJjQ/giphy.gif"
                  alt="Demo inmobiliaria"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    width: "100%",
                  }}
                />
              </Card.Body>
              <CardFooter>
                <p className="text-muted ms-3">Add task</p>
                <div className="tech-icons mb-3">
                  <FaReact
                    className="bi bi-filetype-js ms-3 text-gold"
                    size={20}
                    title="JavaScript"
                  />
                  <FaHtml5
                    className="bi bi-filetype-html ms-3 text-gold"
                    size={20}
                    title="HTML5"
                  />

                  <FaBootstrap
                    className="bi bi-bootstrap text-purple ms-3 text-gold"
                    size={20}
                    title="Bootstrap"
                  />
                </div>
                <Button
                  variant="outline-gold"
                  href="https://task-list-react-ts-simple.netlify.app/" target="_blank"
                  className="ms-3"
                >
                  Demo
                </Button>
                <Button
                  variant="outline-gold"
                  href="https://github.com/Deekyare/TaskList-react-ts-simple" target="_blank"
                  className="ms-3"
                >
                  Código
                </Button>
              </CardFooter>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              style={{
                backgroundColor: "#3d3e43",
                border: "1px solid #d4a017",
                height: "100%", // Hace que la tarjeta ocupe toda la altura disponible
              }}
            >
              <Card.Body className="d-flex flex-column">
                <h5 className="text-gold">2023 • Añadir tareas</h5>
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmx4MGhwczMwZ2VzZDFxZHJweGZpMTd1NmF2d3dzOGhleXR1MHpjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Eu1tfc02eJx4SrhcF6/giphy.gif"
                  alt="Demo añadir tareas"
                  className="card-img-top"
                  style={{
                    height: "200px", // Altura fija para todas las imágenes
                    width: "100%", // Ocupa todo el ancho disponible
                  }}
                />
              </Card.Body>
              <CardFooter>
                <p className="text-muted ms-3">
                  Aplicación web responsive add task
                </p>
                <div className="tech-icons mb-3">
                  <FaHtml5
                    className="bi bi-filetype-html ms-3 text-gold"
                    size={20}
                    title="HTML5"
                  />
                  <FaBootstrap
                    className="bi bi-bootstrap text-purple ms-3 text-gold"
                    size={20}
                    title="Bootstrap"
                  />
                  <FaReact
                    className="bi bi-filetype-js ms-3 text-gold"
                    size={20}
                    title="JavaScript"
                  />

                  <SiTypescript
                    className="SiTypescript text-purple ms-3 text-gold"
                    size={20}
                    title="SiTypescript"
                  />
                </div>
                <Button
                  variant="outline-gold"
                  href="https://addtask-react.netlify.app/" target="_blank"
                  className="ms-3"
                >
                  Demo
                </Button>
                <Button
                  variant="outline-gold"
                  href="https://github.com/Deekyare/TaskApp-ArgPrograma" target="_blank"
                  className="ms-3"
                >
                  Código
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                backgroundColor: "#3d3e43",
                border: "1px solid #d4a017",
                height: "100%", // Hace que la tarjeta ocupe toda la altura disponible
              }}
            >
              <Card.Body className="d-flex flex-column">
                <h5 className="text-gold">2022 • Encriptador de Texto</h5>
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGV2OThzY2ZtYndwZzB3aXV0M2Z4MG1rd2dpNW9ncjNodGVnZ3RqdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OP5enGpYV5njKCO3lu/giphy.gif"
                  alt="Demo del Encriptador de Texto"
                  className="card-img-top"
                  style={{
                    height: "200px", // Altura fija para todas las imágenes
                    width: "100%", // Ocupa todo el ancho disponible
                  }}
                />
              </Card.Body>
              <CardFooter>
                <p className="text-muted ms-3">
                  Aplicación web responsive para encriptar y desencriptar
                  mensajes.
                </p>
                <div className="tech-icons mb-3">
                  <FaHtml5
                    className="bi bi-filetype-html ms-3 text-gold"
                    size={20}
                    title="HTML5"
                  />
                  <FaJs
                    className="bi bi-filetype-js ms-3 text-gold"
                    size={20}
                    title="JavaScript"
                  />
                  <FaBootstrap
                    className="bi bi-bootstrap text-purple ms-3 text-gold"
                    size={20}
                    title="Bootstrap"
                  />
                </div>
                <Button
                  variant="outline-gold"
                  href="https://deekyare.github.io/encriptador/" target="_blank"
                  className="ms-3"
                >
                  Demo
                </Button>
                <Button
                  variant="outline-gold"
                  href="https://github.com/Deekyare/encriptador" target="_blank"
                  className="ms-3"
                >
                  Código
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={{
                backgroundColor: "#3d3e43",
                border: "1px solid #d4a017",
                height: "100%",
              }}
            >
              <Card.Body className="d-flex flex-column">
                <h5 className="text-gold">2022 • Ahorcado</h5>
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmlwamk3eGdjOTJtNXgwYm15eXE3dm5oOWFibjBscmZ6dHQxcmQ1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1jI0FuEFYf6EDGlZ3W/giphy.gif"
                  alt="Demo ahorcado"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    width: "100%",
                  }}
                />
              </Card.Body>
              <CardFooter>
                <p className="text-muted ms-3">Juego del ahorcado</p>
                <div className="tech-icons mb-3">
                  <FaHtml5
                    className="bi bi-filetype-html ms-3 text-gold"
                    size={20}
                    title="HTML5"
                  />
                  <FaJs
                    className="bi bi-filetype-js ms-3 text-gold"
                    size={20}
                    title="JavaScript"
                  />
                  <FaBootstrap
                    className="bi bi-bootstrap text-purple ms-3 text-gold"
                    size={20}
                    title="Bootstrap"
                  />
                </div>
                <Button
                  variant="outline-gold"
                  href="https://deekyare.github.io/ahorcado/" target="_blank"
                  className="ms-3"
                >
                  Demo
                </Button>
                <Button
                  variant="outline-gold"
                  href="https://github.com/Deekyare/ahorcado" target="_blank"
                  className="ms-3"
                >
                  Código
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsTarjetas;
