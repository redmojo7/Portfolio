import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import phishing1 from "../../../Assets/Phishing/Phishing-1.png";
import phishing2 from "../../../Assets/Phishing/Phishing-2.png";
import phishing3 from "../../../Assets/Phishing/Phishing-3.png";
import phishing4 from "../../../Assets/Phishing/Phishing-4.png";
import phishing5 from "../../../Assets/Phishing/Phishing-5.png";
import phishing6 from "../../../Assets/Phishing/Phishing-6.png";
import phishing7 from "../../../Assets/Phishing/Phishing-7.png";
import phishing8 from "../../../Assets/Phishing/Phishing-8.png";
import phishing9 from "../../../Assets/Phishing/Phishing-9.png";
import phishing10 from "../../../Assets/Phishing/Phishing-10.png";

function Phishing() {
    const [scenarios, setScenarios] = useState([
        {
            id: 1,
            question: "Scenario 1: Generic - Promotion Center",
            image: phishing1,
            answer: true,
            userAnswer: null,
        },
        {
            id: 2,
            question: "Scenario 2: SharePoint - Shared File",
            image: phishing2,
            answer: true,
            userAnswer: null,
        },
        {
            id: 3,
            question: "Scenario 3: iCloud - Storage Full",
            image: phishing3,
            answer: true,
            userAnswer: null,
        },
        {
            id: 4,
            question: "Scenario 4: Amazon - Order Confirmation",
            image: phishing4,
            answer: false,
            userAnswer: null,
        },
        {
            id: 5,
            question: "Scenario 5: DoorDash - Limited Time Offer",
            image: phishing5,
            answer: true,
            userAnswer: null,
        },
        {
            id: 6,
            question: "Scenario 6: Apple - Find My iPhone",
            image: phishing6,
            answer: true,
            userAnswer: null,
        },
        {
            id: 7,
            question: "Scenario 7: PayPal - Receipt",
            image: phishing7,
            answer: true,
            isCorrect: null,
        },
        {
            id: 8,
            question: "Scenario 8: Venmo - Here's $5",
            image: phishing8,
            answer: false,
            userAnswer: null,
        },
        {
            id: 9,
            question: "Scenario 9: NordVPN - Account Expired",
            image: phishing9,
            answer: false,
            userAnswer: null,
        },
        {
            id: 10,
            question: "Scenario 10: Binance - Password Changed",
            image: phishing10,
            answer: true,
            userAnswer: null,
        },
    ]);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

    const handleAnswer = (userAnswer) => {
        setScenarios((prevScenarios) =>
            prevScenarios.map((scenario, index) =>
                index === currentScenarioIndex ? { ...scenario, userAnswer } : scenario
            )
        );
        setCurrentScenarioIndex((prevIndex) => prevIndex + 1);
    };

    const handleNavigate = (index) => {
        setCurrentScenarioIndex(index);
    };

    const calculateGrade = () => {
        const correctAnswers = scenarios.reduce((count, scenario) => {
            return scenario.answer === scenario.userAnswer ? count + 1 : count;
        }, 0);

        const totalScenarios = scenarios.length;
        const percentage = (correctAnswers / totalScenarios) * 100;

        if (percentage >= 90) {
            return "A";
        } else if (percentage >= 80) {
            return "B";
        } else if (percentage >= 70) {
            return "C";
        } else if (percentage >= 60) {
            return "D";
        } else {
            return "F";
        }
    };

    return (
        <section>
            <Container fluid className="project-section bg-transparent">
                <Container>
                    <h1 className="project-heading">
                        Phishing <strong className="purple">Awareness Game</strong>
                    </h1>
                    <Row className="mb-4">
                        <Col md={3} />
                        {scenarios.map((scenario) => (
                            <Col key={scenario.id} className="text-center">
                                <Button
                                    variant={currentScenarioIndex === scenario.id - 1 ? "light" : "outline-light"}
                                    onClick={() => handleNavigate(scenario.id - 1)}
                                    disabled={currentScenarioIndex === scenario.id - 1}
                                >
                                    {scenario.id}
                                </Button>
                            </Col>
                        ))}
                        <Col md={3} />
                    </Row>
                    {currentScenarioIndex < scenarios.length ? (
                        <Card className="mb-4 bg-transparent purple">
                            <Card.Body>
                                <Card.Title>{scenarios[currentScenarioIndex].question}</Card.Title>
                                <Row>
                                    <Col md={6} className="text-center">
                                        <Button variant="primary" onClick={() => handleAnswer(true)}>
                                            Yes
                                        </Button>
                                    </Col>
                                    <Col md={6} className="text-center">
                                        <Button variant="danger" onClick={() => handleAnswer(false)}>
                                            No
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Img variant="top" src={scenarios[currentScenarioIndex].image} />
                        </Card>
                    ) : (
                        <Container>
                            <Row>
                                <Col>
                                    <p className="purple">
                                        Congratulations! You have successfully completed this game!
                                    </p>
                                    <p className="text-white">
                                        Your grade: <span className="purple">{calculateGrade()}</span>
                                    </p>
                                    <h3 className="text-white">Answers:</h3>
                                </Col>
                            </Row>
                            {scenarios.map((scenario) => (
                                <Row key={scenario.id} className="text-white">
                                    <Col className="text-start" md={{ span: 4, offset: 3 }}>{scenario.question}:{" "}</Col>
                                    <Col className="text-start">
                                        {scenario.userAnswer === scenario.answer ? (
                                            <span className="green" md={2}>Correct</span>
                                        ) : scenario.userAnswer === null ? (
                                            <span className="red" md={2}>No answer</span>
                                        ) : (
                                            <span className="red" md={2}>Incorrect</span>
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                    )}
                </Container>
            </Container>
        </section>
    );
}

export default Phishing;

