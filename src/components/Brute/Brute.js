import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Backend from "./Backend";
import Attack from "./Attack.js";

function Brute() {

    const [attackStatus, setAttackStatus] = useState("stop");
    const [user, setUser] = useState("");
    const [targetUsername, setTargetUsername] = useState("");

    const handleStartAttack = (targetUsername) => {
        console.log("Attack started");
        setAttackStatus(new Date().toString());
        setTargetUsername(targetUsername);
    };

    const hanldeRegister = (username, password) => {
        console.log("Register form submitted with username=", username, " and password=", password);
        setUser({ "username": username, "password": password });
        setAttackStatus("stop");
    };

    const hanldeLogin = (username, password) => {
        console.log("Login form submitted with username=", username, " and password=", password);
        if (username === user.username && password === user.password) {
            console.log("Login successful");
            alert("Login successful");
        } else {
            console.log("Login failed");
            alert("Login failed");
        }
        setAttackStatus("stop");
    };

    const userList = [];

    for (let i = 97; i <= 122; i++) { // ASCII code for lowercase 'a' to 'z'
        for (let j = 97; j <= 122; j++) {
          for (let k = 97; k <= 122; k++) {
                const password = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
                const username = `user${i}${j}${k}`;
                userList.push({ username, password });
            }
        }
    }

    return (
        <section>
            <Container fluid className="project-section">

                <Container>
                    <h1 className="project-heading">
                        Brute Force <strong className="purple">Attack</strong>
                    </h1>
                    <Row>
                        <Col md={6} className="text-center">
                            <h3 className="project-heading">Register</h3>
                            <RegisterForm onRegister={hanldeRegister} />
                        </Col>
                        <Col md={6}>
                            <h3 className="project-heading">Login</h3>
                            <LoginForm onLogin={hanldeLogin} status={attackStatus} userList={userList} user={user} />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <h3 className="project-heading">Attack</h3>
                            <Attack startAttack={handleStartAttack} user={user} />
                        </Col>
                        <Col md={6}>
                            <h3 className="project-heading">Backend Log</h3>
                            <Backend status={attackStatus} userList={userList} user={user} targetUsername={targetUsername} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Brute;
