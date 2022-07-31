import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on to solve a real life problem.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Stacking Decentralized App"
              description="Stacking DApp is a decentralized application that allows it's users to stack and earn interest. This platform allows only Tether token to stack."
              ghLink="https://github.com/alfredrodriguez98/Stacking-Decentralized-App"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Saviour - Android Geofencing Application"
              description="Saviour is an android based geofencing prototype application designed keeping fishermen in mind. It prevents them from entering restricted International Maritime Borders, thereby avoiding geo-political issues. The project was build using Android Studio IDE, Java, Firebase Integration and few Google APIs."
              ghLink="https://github.com/alfredrodriguez98/Saviour_Android_Geofencing_App"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
