import React, {useEffect, useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Attack(props) {

    const [username, setUsername] = useState("");
    const [status, setStatus] = useState(false);

    const handleStartAttack = () => {
        console.log("Attack status changed");
        //setStatus(!status);
        if (username === "" || username === null || username === undefined) {
            console.log("Username is empty");
            alert("Username is empty");
            return;
        }
        props.startAttack(username, true);
    };

    const handleStopAttack = () => {
        console.log("Attack status changed");
        props.startAttack(username, false);
    };

    useEffect(() => {
        console.log("props.user.username changed");
        if (props.user.username !== "") {
            setUsername(props.user.username);
        }
    }, [props.user.username]);

    return (
        <Container>
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
                    </Form>
                    <Button className="mt-2" variant="primary" onClick={handleStartAttack}>
                        Launch Attack
                    </Button>
                    <br />
                    <Button className="mt-2" variant="primary" onClick={handleStopAttack}>
                        STOP Attack
                    </Button>
                    <p className="mt-2 purple text-start">
                    * Brute-force attack is time and resources consuming, it would take too long in the web browser
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Attack;
