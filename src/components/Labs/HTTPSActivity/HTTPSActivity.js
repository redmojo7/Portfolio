import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NumericFormat } from 'react-number-format';
import { AES } from "crypto-js";
import HttpInformation from "./HttpInformation";

function HTTPSActivity() {
    const [isSecure, setIsSecure] = useState(false);
    const [amount, setAmount] = useState("");
    const [balance, setBalance] = useState(1000);
    const [httpRequestBody, setHttpRequestBody] = useState("");
    const [httpsRequestBody, setHttpsRequestBody] = useState("");

    const secretKey = "mySecretKey"; // Dummy secret key, replace with your secure key

    const handleHttpDeposit = () => {
        setIsSecure(false);
        // Perform HTTP deposit logic...
        console.log("HTTP Deposit amount:", amount);
        setBalance(balance + parseInt(amount));
        setAmount("");
        setHttpRequestBody(
            JSON.stringify({
                action: "deposit",
                amount,
                userId: "user123",
            })
        )
    };

    const handleHttpsDeposit = () => {
        setIsSecure(true);
        // Perform HTTPS deposit logic...
        console.log("HTTPS Deposit amount:", amount);

        // Encrypt the request body
        const encryptedRequestBody = AES.encrypt(
            JSON.stringify({
                action: "deposit",
                amount,
                userId: "user123",
            }),
            secretKey
        ).toString();

        setBalance(balance + parseInt(amount));
        setAmount("");
        setHttpsRequestBody(encryptedRequestBody);
    };

    const handleHttpWithdraw = () => {
        setIsSecure(false);
        // Perform HTTP withdraw logic...
        console.log("HTTP Withdraw amount:", amount);
        setBalance(balance - parseInt(amount));
        setAmount("");
        setHttpRequestBody(
            JSON.stringify({
                action: "withdraw",
                amount,
                userId: "user123",
            })
        )
    };

    const handleHttpsWithdraw = () => {
        setIsSecure(true);
        // Perform HTTPS withdraw logic...
        console.log("HTTPS Withdraw amount:", amount);

        // Encrypt the request body
        const encryptedRequestBody = AES.encrypt(
            JSON.stringify({
                action: "withdraw",
                amount,
                userId: "user123",
            }),
            secretKey
        ).toString();

        setBalance(balance - parseInt(amount));
        setAmount("");
        setHttpsRequestBody(encryptedRequestBody);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <section>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        HTTP vs HTTPS  <strong className="purple">Activity</strong>
                    </h1>
                    <Row>
                        <Col>
                            <h5 className="purple mt-4">Total Balance: ${balance}</h5>
                            <NumericFormat
                                className="mt-2"
                                placeholder="Enter amount"
                                value={amount}
                                onValueChange={({ value }) => setAmount(value)}
                                thousandSeparator={false}
                                isNumericString={true}
                                allowNegative={false}
                                format="##########"
                            />


                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h3 className="purple">HTTP</h3>
                            <Button onClick={handleHttpWithdraw}>Withdraw</Button>
                            <Button className="m-2" onClick={handleHttpDeposit}>
                                Deposit
                            </Button>
                            <HttpInformation
                                url={"http://localhost:3000"}
                                requestBody={httpRequestBody}
                                headers={{
                                    "X-Is-Secure": "fasle",
                                    "Content-Type": "application/json",
                                    "Accept": "application/json",
                                    "Access-Control-Max-Age": "86400",
                                    "X-Is-Encrypted": "false",
                                    "Authentication": "Basic ZGVtbzpwQDU1dzByZA=="
                                }}
                            />
                        </Col>
                        <Col md={6}>
                            <h3 className="purple">HTTPS</h3>
                            <Button onClick={handleHttpsWithdraw}>Withdraw</Button>
                            <Button className="m-2" onClick={handleHttpsDeposit}>
                                Deposit
                            </Button>
                            <HttpInformation
                                url={"https://localhost:3000"}
                                requestBody={httpsRequestBody}
                                headers={{
                                    "X-Is-Secure": "true",
                                    "Content-Type": "application/json",
                                    "Accept": "application/json",
                                    "Access-Control-Max-Age": "86400",
                                    "X-Is-Encrypted": "false",
                                    "Authentication": "Basic ZGVtbzpwQDU1dzByZA=="
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default HTTPSActivity;
