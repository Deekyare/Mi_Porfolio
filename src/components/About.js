import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "#3d3e43", color: "#ffffff" }}
    >
      <Container>
        <h2 className="text-white mb-4">Sobre mi</h2>
        <p className="text-muted">
          Me llamo Silvia, sin experiencia laboral en el área tecnológica. Tengo
          conocimientos en programación web, incluyendo HTML, CSS, JavaScript,
          Bootstrap y React, adquiridos a través de distintas capacitaciones.
          Estudiante de la tecnicatura universitaria en programacion en UTN. Mi
          objetivo principal es progresar y mejorar constantemente. Estoy
          motivada, con ganas de avanzar en mi desarrollo profesional. Docente
          de educación infantil en Argentina. Maestra de sala y preceptora. Como
          maestra me he encargado de la planificación y ejecución de clases,
          siempre adaptadas a las necesidades y características individuales de
          los alumnos. Como preceptora fui nexo dentro de la comunidad
          educativa: profesores, familia, institución.
        </p>
      </Container>
    </section>
  );
}

export default About;
