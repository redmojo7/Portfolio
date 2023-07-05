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
import brute from "../../Assets/Labs/brute-force-attack.png"
import phishing from "../../Assets/Labs/phishing-attack.png"
import http from "../../Assets/Labs/http-attack.png"

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
              imgPath={brute}
              isBlog={false}
              title="Brute Force Attack"
              description="A brute force attack is a methodical and exhaustive cyber attack where an attacker tries all possible combinations of usernames and passwords to gain unauthorized access to a system or account."
              ghLink="/labs/brute"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={phishing}
              isBlog={false}
              title="Phishing"
              description="Dive into the world of phishing and learn about this prevalent cyber threat. Discover the techniques used by attackers to deceive individuals into revealing sensitive information or performing malicious actions. Gain insights into common phishing scams, email spoofing, and tips to protect yourself from falling victim to these fraudulent activities."
              ghLink="/labs/phishing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={http}
              isBlog={false}
              title="HTTPS Activity"
              description="Explore the differences between HTTP and HTTPS protocols. Learn about the importance of encryption, secure communication, and data protection provided by HTTPS. Perform HTTP and HTTPS deposit and withdrawal activities to observe the variations in security and data transmission."
              ghLink="/labs/https"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={editor}
              isBlog={false}
              title="File Disclosure & Privilege Escalation"
              description="Explore the concepts of file disclosure and privilege escalation in this engaging project. Discover the risks of insecure file handling and unauthorized access. Learn to manipulate parameters to access restricted files and escalate privileges. Crack passwords and gain unauthorized access to sensitive files. Capture the hidden flag to demonstrate successful privilege escalation."
              ghLink="/labs/privilege"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={editor}
              isBlog={false}
              title="comming soon..."
              description="comming soon..."
              ghLink="/labs/puzzle2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectLab
              imgPath={editor}
              isBlog={false}
              title="comming soon..."
              description="comming soon..."
              ghLink="/labs/puzzle3"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
