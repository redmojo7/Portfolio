import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectLab from "./ProjectLab";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Cybersecurity<strong className="purple"> Labs</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few interesting cybersecurity labs.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={chatify}
              isBlog={false}
              title="Brute Force Attack"
              description="A brute force attack is a methodical and exhaustive cyber attack where an attacker tries all possible combinations of usernames and passwords to gain unauthorized access to a system or account."
              ghLink="/labs/brute"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={bitsOfCode}
              isBlog={false}
              title="Phishing"
              description="Dive into the world of phishing and learn about this prevalent cyber threat. Discover the techniques used by attackers to deceive individuals into revealing sensitive information or performing malicious actions. Gain insights into common phishing scams, email spoofing, and tips to protect yourself from falling victim to these fraudulent activities."
              ghLink="/labs/phishing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={editor}
              isBlog={false}
              title="comming soon..."
              description="comming soon..."
              ghLink="https://github.com/soumyajit4419/Editor.io"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={leaf}
              isBlog={false}
              title="comming soon..."
              description="comming soon..."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={suicide}
              isBlog={false}
              title="comming soon..."
              description="comming soon..."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={emotion}
              isBlog={false}
              title="comming soon..."
              description="comming soon..."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
