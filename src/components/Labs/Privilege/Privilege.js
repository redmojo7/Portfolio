import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SSHConsole from "./SSHConsole";
import { AiFillQuestionCircle } from "react-icons/ai";

function Privilege() {
  const [currentStep, setCurrentStep] = useState(1);
  const [needAnswerStep, setNeedAnswerStep] = useState(1);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page whenever the current step changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setNeedAnswerStep((prevStep) => {
      if (currentStep > needAnswerStep ) {
        return currentStep;
      } else {
        return needAnswerStep;
      }
    });
    setShowHint(false);
    if (needAnswerStep > currentStep) {
      setUserAnswer(getAnserbyStep(currentStep+1));
      setIsAnswerCorrect(true);
    } else {
      setUserAnswer("");
      setIsAnswerCorrect(false);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setShowHint(false);
    setUserAnswer(getAnserbyStep(currentStep-1));
    setIsAnswerCorrect(true);
  };

  const getAnserbyStep = (step) => {
    switch (step) {
      case 1:
        return "/api/books";
      case 2:
        return "2";
      case 3:
        return "name";
      case 4:
        return "8";
      case 5:
        return "victim1";
      case 6:
        return "almost";
      case 7:
        return "flag";
      default:
        return "";
    }
  };

  const handleCheckAnswer = () => {
    let isCorrect = false;
    console.log("currentStep :", currentStep, "userAnswer :", userAnswer);
    // You can modify this logic based on the actual answer validation logic
    switch (currentStep) {
      case 1:
        if (userAnswer === "/api/books") {
          isCorrect = true;
          setShowHint(false);
        } else {
          setShowHint(true);
        }
        break;
      case 2:
        if (userAnswer === "2") {
          isCorrect = true;
          setShowHint(false);
        } else {
          setShowHint(true);
        }
        break;
      case 3:
        if (userAnswer.toLowerCase() === "name") {
          isCorrect = true;
          setShowHint(false);
        } else {
          setShowHint(true);
        }
        break;
      case 4:
        if (userAnswer.toLowerCase() === "8") {
          isCorrect = true;
          setShowHint(false);
        } else {
          setShowHint(true);
        }
        break;
      case 5:
        if (userAnswer.toLowerCase() === "victim1") {
          isCorrect = true;
          setShowHint(false);
        } else {
          setShowHint(true);
        }
        break;
      case 6:
        if (userAnswer.toLowerCase() === "almost") {
          isCorrect = true;
          setShowHint(false);
        } else {
          setShowHint(true);
        }
        break;
      case 7:
        if (userAnswer.toLowerCase() === "flag") {
          isCorrect = true;
          setShowHint(false);
        } else {
          setShowHint(true);
        }
        break;
      default:
        break;
    }

    setIsAnswerCorrect(isCorrect);
  };

  const renderSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 1: </strong>File Disclosure
            </h3>
            <p className="text-start">
              You are provided with a web application that has a file reader functionality. The application allows you to view certain files by specifying the file path as a parameter in the URL.
            </p>
            <p className="text-start">
              To view the book "Where The Wild Things Are," you can use the following link:&nbsp;
              <a href="/api/books?name=Where%20The%20Wild%20Things%20Are">View Where The Wild Things Are</a>
            </p>
            <p className="text-start">
              <strong>Question:</strong> What is the URL path to view books in the API?
            </p>
            <p className="text-start">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {showHint && (
                <span className="purple m-2">
                  Hint: The URL path is relative to the domain and starts with "/"
                </span>
              )}
              {isAnswerCorrect && (<strong className="purple m-2">Correct</strong>)}
            </p>
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </Col>
        );
      case 2:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 2: </strong>Unintended Access
            </h3>
            <p className="text-start">
              The server manager accidentally left the user account information, including usernames and hashed passwords, in the "<strong className="purple">/etc/passwd</strong>" file.
            </p>
            <p className="text-start">
              <strong>Question:</strong> What ***
            </p>
            <p className="text-start">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {showHint && (
                <span className="purple m-2">
                  Hint: ***
                </span>
              )}
              {isAnswerCorrect && (<strong className="purple m-2">Correct</strong>)}
            </p>
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </Col>
        );
      case 3:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 3: </strong>Parameter Manipulation
            </h3>
            <p className="text-start">
              You realize that you can manipulate the file path parameter in the URL to access files outside the intended directory. Modify the parameter value to fetch the "<strong className="purple">/etc/passwd</strong>" file and retrieve the user account information.
            </p>
            <p className="text-start">
              <strong>Question:</strong> What is the parameter name in the URL that you need to manipulate?
            </p>
            <p className="text-start">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {showHint && (
                <span className="purple m-2">
                  Hint: The parameter name is a key used in the URL query parameters
                </span>
              )}
              {isAnswerCorrect && (<strong className="purple m-2">Correct</strong>)}
            </p>
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </Col>
        );
      case 4:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 4: </strong>User Account Enumeration
            </h3>
            <p className="text-start">
              Analyze the contents of the "<strong className="purple">/etc/passwd</strong>" file and identify a target user account that you want to escalate privileges for.
            </p>
            <p className="text-start">
              <strong>Question:</strong> How many user accounts are listed in the "/etc/passwd" file?
            </p>
            <p className="text-start">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {showHint && (
                <span className="purple m-2">
                  Hint: Count the number of lines or entries in the file
                </span>
              )}
              {isAnswerCorrect && (<strong className="purple m-2">Correct</strong>)}
            </p>
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </Col>
        );
      case 5:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 5: </strong>Password Cracking
            </h3>
            <p className="text-start">
              Use password-cracking tools like John the Ripper or Hashcat to attempt to crack the hashed password of the target user account. Employ techniques such as dictionary attacks or brute-force attacks to find the password.
            </p>
            <p className="text-start">
              <strong>Question:</strong> Can you crack the password for the user 'victim'? What is the password?
            </p>
            <p className="text-start">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {showHint && (
                <span className="purple m-2">
                  Hint: Try common passwords or use a password cracking tool
                </span>
              )}
              {isAnswerCorrect && (<strong className="purple m-2">Correct</strong>)}
            </p>
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </Col>
        );
      case 6:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 6: </strong>Privilege Escalation
            </h3>
            <p className="text-start">
              Gain access to the target user account and escalate privileges to gain administrative or root access to the system. Exploit vulnerabilities, misconfigurations, or weak file permissions to elevate privileges.
            </p>
            <p className="text-start">
              <strong>Question:</strong> What is the one-word answer that represents the state of privilege escalation in this scenario?
            </p>
            <p className="text-start">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {showHint && (
                <span className="purple m-2">
                  Hint: It's a word that indicates you are close to achieving the goal
                </span>
              )}
              {isAnswerCorrect && (<strong className="purple m-2">Correct</strong>)}
            </p>
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </Col>
        );
      case 7:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Step 7: </strong>Flag Capture
            </h3>
            <p className="text-start">
              Search for a hidden flag or complete a specific task to demonstrate successful privilege escalation. This could involve locating a flag file in a restricted directory or performing a specific action that can only be done with elevated privileges.
            </p>
            <p className="text-start">
              <strong>Question:</strong> What is the flag that you need to capture?
            </p>
            <p className="text-start">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {showHint && (
                <span className="purple m-2">
                  Hint: ***
                </span>
              )}
              {isAnswerCorrect && (<strong className="purple m-2">Correct</strong>)}
            </p>
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </Col>
        );
      case 8:
        return (
          <Col md={12} className="scenario-step">
            <h3>
              <strong className="purple">Congratulations!</strong>
            </h3>
            <p className="text-start">
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
            <strong className="purple">Lab Objective: </strong>
            Demonstrate the importance of secure file handling and privilege escalation in a simulated environment.
          </p>
          <Col sm={{ span: 6, offset: 3 }} className="progress">
            <div
              className="progress-bar bg-purple"
              role="progressbar"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            >
              Step {currentStep >= 7 ? 7 : currentStep} of 7
            </div>
          </Col>
          <Row className="mt-2">
            <Col sm={{ offset: 0, span: 4 }} ></Col>
            {currentStep > 1 && (
              <Col className="text-center">
                <Button onClick={handlePreviousStep}>Previous Step</Button>
              </Col>
            )}
            {currentStep <= 7 && (
              <Col className="text-center">
                <Button onClick={handleNextStep} disabled={!isAnswerCorrect}>
                  {currentStep === 7 ? "Finish" : "Next Step"}
                </Button>
              </Col>
            )}
            <Col sm={{ offset: 0, span: 4 }} ></Col>
          </Row>
          <Row className="mt-2">{renderSteps()}</Row>

        </Container>
      </Container>
    </section>
  );
}

export default Privilege;
