import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Privilege() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Scroll to the top of the page whenever the current step changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 1: </strong>File Disclosure
            </h3>
            <p>
              You are provided with a web application that has a file reader functionality. The application allows you to view certain files by specifying the file path as a parameter in the URL.
            </p>
          </Col>
        );
      case 2:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 2: </strong>Unintended Access
            </h3>
            <p>
              The server manager accidentally left the user account information, including usernames and hashed passwords, in the "/etc/passwd" file. However, direct access to the file is restricted.
            </p>
          </Col>
        );
      case 3:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 3: </strong>Parameter Manipulation
            </h3>
            <p>
              You realize that you can manipulate the file path parameter in the URL to access files outside the intended directory. Modify the parameter value to fetch the "/etc/passwd" file and retrieve the user account information.
            </p>
          </Col>
        );
      case 4:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 4: </strong>User Account Enumeration
            </h3>
            <p>
              Analyze the contents of the "/etc/passwd" file and identify a target user account that you want to escalate privileges for.
            </p>
          </Col>
        );
      case 5:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 5: </strong>Password Cracking
            </h3>
            <p>
              Use password-cracking tools like John the Ripper or Hashcat to attempt to crack the hashed password of the target user account. Employ techniques such as dictionary attacks or brute-force attacks to find the password.
            </p>
          </Col>
        );
      case 6:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 6: </strong>Privilege Escalation
            </h3>
            <p>
              Upon successfully cracking the password, use the obtained credentials to log in to the system via SSH or another authorized method. Escalate your privileges to gain access to sensitive files or perform actions reserved for privileged users.
            </p>
          </Col>
        );
      case 7:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 7: </strong>Flag Capture
            </h3>
            <p>
              Search for a hidden flag or complete a specific task to demonstrate successful privilege escalation. This could involve locating a flag file in a restricted directory or performing a specific action that can only be done with elevated privileges.
            </p>
          </Col>
        );
      case 8:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Congratulations!</strong>
            </h3>
            <p>
              You have successfully completed the scenario. Thank you for participating!
            </p>
          </Col>
        );
      default:
        return null;
    }
  };

  return (
    <section>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            File <strong className="purple">Disclosure </strong>
            <strong>&</strong>
            <strong className="purple">& </strong>
            Privilege <strong className="purple">Escalation</strong>
          </h1>
          <p className="text-white">
            <strong className="purple">Scenario Objective: </strong>
            Demonstrate the importance of secure file handling and privilege escalation in a simulated environment.
          </p>
          <Col sm={{ span: 6, offset: 3 }} className="progress">
            <div
              className="progress-bar bg-purple"
              role="progressbar"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            >
              Step {currentStep >= 7 ? 7:currentStep} of 7
            </div>
          </Col>
          <Row className="mt-2">{renderSteps()}</Row>

          <Row className="text-center">
            <Col sm={{offset: 0, span: 4}} ></Col>
            {currentStep > 1 && (
              <Col  className="text-center">
                <Button onClick={handlePreviousStep}>Previous Step</Button>
              </Col>
            )}
            {currentStep <= 7 && (
               <Col className="text-center">
                <Button onClick={handleNextStep}>
                {currentStep === 7 ?  "Finish": "Next Step"}</Button>
              </Col>
            )}
            <Col sm={{offset: 0, span: 4}} ></Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Privilege;
