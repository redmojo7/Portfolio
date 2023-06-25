import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function LoginForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const targetUser = props.user;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log("Login form submitted");
        console.log("Username:", username);
        console.log("Password:", password);

        if (password.length !== 3) {
            Alert("Password must be 3 characters long");
            return;
        }
        console.log("Login form submitted: username=[",username,"] password=[",password,"]");
        props.onLogin(username, password);
        // Clear form fields
        setUsername("");
        setPassword("");
    };

    useEffect(() => {
        if (props.status !== "stop") {
            setShowPassword(true)
            let currentIndex = 0;

            const interval = setInterval(() => {
                const currentUser = props.userList[currentIndex];
                console.log("Username:", targetUser.username, "Password:", currentUser.password);
                setUsername(targetUser.username);
                setPassword(currentUser.password);

                if (
                    currentIndex === props.userList.length - 1 ||
                    (currentUser.password === targetUser.password)
                ) {
                    clearInterval(interval);
                } else {
                    currentIndex++;
                }
            }, 1); // Change username and password every half second (500 milliseconds)

            return () => {
                clearInterval(interval); // Cleanup the interval when the component unmounts
            };
        }
    }, [props.status]);

    useEffect(() => {   
        setUsername(props.user.username);
    }, [props.user]);


    return (
        <Container className="text-center">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
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
                                type={showPassword ? "text": "password"}
                                placeholder="Password"
                                value={password}
                                maxLength={3}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            style={{ width: "30%" }}
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
