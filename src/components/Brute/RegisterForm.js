import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function RegisterForm(props) {
    const [username, setUsername] = useState("user1");
    const [password, setPassword] = useState("bef");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log("Login form submitted");
        console.log("Username:", username);
        console.log("Password:", password);
        // Clear form fields
        setUsername("");
        setPassword("");
        props.onRegister(username, password);
    };

    return (
        <Container  className="text-center">
            <Row>
                <Col md={{ span: 6, offset: 3}}>
                    <Form>
                        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                            <Form.Label className="purple">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                            <Form.Label className="purple">Password</Form.Label>
                            <Form.Control
                                maxLength={3}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Button
                            variant="primary"
                            style={{ width: "30%" }}
                            onClick={handleSubmit}>
                            Register
                        </Button>
    
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterForm;
