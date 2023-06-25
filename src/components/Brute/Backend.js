import React, { useState, useEffect } from "react";
import { ListGroup, Modal, Button, Container, Row,Col } from "react-bootstrap";

function Backend(props) {
    const [logItems, setLogItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [foundPassword, setFoundPassword] = useState("");

    const user = props.user;
    const targetUsername = props.targetUsername;

    useEffect(() => {
        if (props.status !== "stop") {
            let currentIndex = 0;
            setLogItems([]);
            const interval = setInterval(() => {
                const currentUser = props.userList[currentIndex];
                const targetUser = props.user;
                const newStatus = currentUser.password === targetUser.password ? "success" : "failed";

                setLogItems((prevItems) => {
                    // Add the new log item to the beginning of the array
                    const updatedItems = [
                         ...prevItems,
                         { username: targetUsername, password: currentUser.password, status: newStatus },
                    ];

                    // Limit the array to the last 10 items
                    if (updatedItems.length > 10) {
                        updatedItems.shift();
                    }

                    return updatedItems;
                });
                if (currentUser.password === targetUser.password) {
                    //alert("Password found: " + currentUser.password);
                    setFoundPassword(currentUser.password);
                    setShowModal(true);
                    clearInterval(interval);
                } else if (currentIndex === props.userList.length - 1) {
                    clearInterval(interval);
                } else {
                    currentIndex++;
                }
            }, 1); // Change username and password every half second (500 milliseconds)

            return () => {
                clearInterval(interval); // Cleanup the interval when the component unmounts
            };
        }
    }, [props.status, props.userList]);

    return (
        <Container className="p-4 text-light text-start bg-transparent">
            <Row>
                <Col >
                    <ListGroup variant="flush" className="bg-transparent">
                        {logItems.map((item, index) => (
                            <ListGroup.Item key={index} className="bg-transparent text-light">
                                <strong className={item.status === "failed" ? "text-danger":"text-success"}>[{item.status === "failed" ?"Warning":"Info"}]&nbsp;</strong>
                                login&nbsp;"<strong className="text-purple">{item.username}</strong>"&nbsp;with password "
                                <strong className="text-purple">{item.password}</strong>",&nbsp;
                                <strong className={item.status === "failed" ? "text-danger" : "text-success"}>
                                    [{item.status}]
                                </strong>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Password Found!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Username:</strong> {user.username}</p>
                </Modal.Body>
                <Modal.Body>
                    <p><strong>Password:</strong> {foundPassword}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}

export default Backend;
