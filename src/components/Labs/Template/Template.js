import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Template () {
    return (
        <section>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        Template <strong className="purple">Attack</strong>
                    </h1>
                    <Row>
                        <Col md={6} className="text-center">
                           <p className="purple">a</p>
                        </Col>
                        <Col md={6}>
                            <p className="purple">b</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
} 

export default Template;